"use client"
import React, { useEffect, useState } from "react";
// import Header from "./Header";
import { SearchBar } from "./SearchBar";
import BottomAccordian from "./BottomAccordian";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { getMarketplace, getTopMarketplace } from "@/utils/Home";
import { saveHighestVote, saveMarketplace } from "@/store/reducers/marketplace";

const MarketPlace = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cloneMarketData, setCloneMarketData] = useState([]);
  const [reload, setReload] = useState(false);

  // fetching api data

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getTopMarketplace("");
      dispatch(saveHighestVote(response?.data));
      const responseMarketData = await getMarketplace("");
      dispatch(saveMarketplace(responseMarketData?.data));
      setCloneMarketData(responseMarketData?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  return (
    <>
      <div className="container lg:px-12 mx-auto px-4">
        {loading ? (
          "Loading..."
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-full md:max-w-[80%] lg:max-w-[70%]">
              <SearchBar cloneMarketData={cloneMarketData} />
              <BottomAccordian
                Reload={() => setReload(!reload)}
                ActiveConfetti={() => setIsVisible(!isVisible)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MarketPlace;

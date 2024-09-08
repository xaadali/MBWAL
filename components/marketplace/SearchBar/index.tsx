import React, { useEffect } from "react";
import styles from "./searchBar.module.scss";
import { useState } from "react";
// import Search from "../../Assests/search.3.png";
import { useDispatch } from "react-redux";
import { saveMarketplace } from "@/store/reducers/marketplace";

export const SearchBar = ({ cloneMarketData }) => {
  const [activeTab, setActiveTab] = useState("All");
  const dispatch = useDispatch();

  // In short, the handleSearch function filters and displays data based on user input in a search field. If the input is empty, it displays all the original data; otherwise, it shows items whose title contains the provided input (case-insensitive).

  const handleSearch = (e) => {
    const { value } = e.target;
    if (!value) {
      dispatch(saveMarketplace(cloneMarketData));
    } else {
      const filterData = cloneMarketData.filter((item) =>
        item.title?.toLowerCase().includes(value.toLowerCase())
      );
      if (filterData) {
        dispatch(saveMarketplace(filterData));
      } else {
        dispatch(saveMarketplace(cloneMarketData));
      }
    }
  };

  // In short, handlePlateFormSearch filters and displays data based on the selected platform or partner type (represented by activeTab). If "All" is selected, it shows all data; otherwise, it filters data based on the specific platform or partner type and updates the displayed data accordingly.

  const handlePlateFormSearch = () => {
    const filterData =
      activeTab === "All"
        ? cloneMarketData
        : cloneMarketData.filter((item, id) => {
            if (activeTab === "Super Partner") {
              return item?.partnerType
                ?.toLowerCase()
                .includes(activeTab?.toLowerCase());
            }
            if (activeTab === "Premium Partner") {
              return item?.partnerType
                ?.toLowerCase()
                .includes(activeTab?.toLowerCase());
            } else {
              return item.socialPlatforms.some((value) =>
                value?.toLowerCase().includes(activeTab?.toLowerCase())
              );
            }
          });
    dispatch(saveMarketplace(filterData));
  };

  useEffect(() => {
    handlePlateFormSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className={styles.wrapper}>
        <ul className={styles.flexx}>
          <li className="mr-2">
            <button
              className={activeTab === "All" ? styles.active : styles.tab}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
          </li>
          <li className="mr-2">
            <button
              className={activeTab === "Telegram" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Telegram")}
            >
              Telegram
            </button>
          </li>
          <li className="mr-2">
            <button
              className={activeTab === "Twitter" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Twitter")}
            >
              Twitter
            </button>
          </li>{" "}
          <li className="mr-2">
            <button
              className={activeTab === "Youtube" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Youtube")}
            >
              Youtube
            </button>
          </li>
          <li className="mr-2">
            <button
              className={activeTab === "Instagram" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Instagram")}
            >
              Instagram
            </button>
          </li>
          <li className="mr-2">
            <button
              className={activeTab === "Tiktok" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Tiktok")}
            >
              Tiktok
            </button>
          </li>
          <li className="mr-2">
            <button
              className={activeTab === "Discord" ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActiveTab("Discord")}
            >
              Discord
            </button>
          </li>
          <li className="mr-2">
            <button
              className={
                activeTab === "Super Partner" ? styles.active : styles.tab
              }
              aria-current="page"
              onClick={() => setActiveTab("Super Partner")}
            >
              Super Partner
            </button>
          </li>
          <li className="mr-2">
            <button
              className={
                activeTab === "Premium Partner" ? styles.active : styles.tab
              }
              aria-current="page"
              onClick={() => setActiveTab("Premium Partner")}
            >
              Premium Partner
            </button>
          </li>
        </ul>

        <div className="relative ml-1 mt-2">
          <input
            onChange={(e) => handleSearch(e)}
            type="text"
            id="input-group-1"
            className={styles.filterInput1}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

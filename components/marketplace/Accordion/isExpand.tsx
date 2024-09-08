import React, { useState } from 'react'
import styles from "../BottomAccordian/bottomAccordian.module.scss";
import Button from "../../common/Button";
import { convertToThousands } from '../../../utils/enum';
// import ArrowUp from "../../Assests/arrowu.svg";
// import Star from "../../Assests/outline Purple Start.svg";
// import WhiteStar from "../../Assests/whiteStar.svg"
// import fav from "../../Assests/fav.svg"
// import Telegram from "../../Assests/Telegream.svg";
// import Twitter from "../../Assests/twtr.svg";
// import Web from "../../Assests/websitenew.svg";
// import DiscordIcon from "../../Assests/discordNew.svg"
// import Instagram from "../../Assests/instaNew.svg"
// import Tiktok from "../../Assests/tiktok.svg"
// import YoutubeIcon from "../../Assests/YT.svg"
// import BnbImage from "../../Assests/bnb.svg";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io"
import { toast } from 'react-toastify';
import { saveMarketplace } from '@/store/reducers/marketplace';
import { getMarketplace } from '@/utils/Home';
import { CommonButton } from '@/components/common/loader/Loader';
const IsExpand = ({ key, faq, seeMore, less, seeLess, setIsExpanded, isExpanded, togglePopup, handleOpenLink, handleStop }:any) => {

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const [favIconLoading, setFavIconLoading] = useState(false);
  const dispatch = useDispatch()
  const [faveIndex, setFavIndex] = useState(null)
  const addFavoritMarket = async (faq, Index) => {
    setFavIndex(Index)
    let check;
    if (faq?.favorite) {
      check = false;
    } else {
      check = true;
    }
    try {
      setFavIconLoading(true)
      // const res = await addFavorit(faq?._id, metaMaskToken, check);
      const responseMarketData = await getMarketplace("")
      dispatch(saveMarketplace(responseMarketData?.data));
      // Reload()
      // toast.success(res?.data?.message);
      setFavIconLoading(false)
    } catch (error) {
      setFavIconLoading(false)
      toast.success(error?.response?.data?.message);
    }
  };
  console.log("faveId === faq?._id outer")


  return (
    <>

      <div className="w-full block lg:hidden">
        <div className="w-full flex flex-col items-center justify-center flex-wrap lg:flex-nowrap rounded-lg h-full">
          <div className="w-full my-2 lg:mt-0 flex  items-center justify-end">
            <div onClick={(e) => handleStop(e)}>
              <div className="flex items-center justify-end mt-0">
                {faveIndex === key && favIconLoading ?
                  <CommonButton
                    loading={favIconLoading}
                    width="20px"
                    height="20px"
                  />
                  :
                  ""
                  // <img
                  //   onClick={() => addFavoritMarket(faq, key)}
                  //   src={faq?.favorite ? fav : false ? WhiteStar : Star}
                  //   alt="star"
                  //   className="mt-0 mr-4 dark:invert-0 object-contain"
                  // />
                }
              </div>
            </div>
          </div>
          <div className="w-full max-w-[150px] mt-5 min-h-[100px] min-w-[150px] rounded-full lg:w-[22%] max-h-[200px] p-0 lg:p-2">
            <img
              src={faq?.coverImg}
              className="w-full h-full object-fill rounded-full  text-white"
              alt="accord img"
            />
          </div>
          <div className="w-full my-2 lg:mt-0 flex  items-center justify-center">
            <span className="text-black dark:text-white text-md">
              {faq?.title}
            </span>

          </div>

          <div className="w-full flex flex-col justify-between lg:w-[78%]" onClick={() => setIsExpanded(!isExpanded)}>
            <div>
              <div className="flex justify-center items-center flex-wrap">
                <button className={styles.button}>
                  {faq?.orders} Order
                </button>
                <button className={styles.button}>
                  {faq?.successRatePercentage}% Success Rate
                </button>
                <button className={styles.button}>
                  {capitalize(faq?.partnerType)}
                </button>
              </div>
              {faq?.description?.length > 250 ? (
                less ? (
                  <div className="text-[16px] text-center  font-normal dark:text-white text-black mt-5" onClick={(e) => handleStop(e)}>
                    {faq?.description.substring(0, 250)}...
                    <span
                      className="underline ml-1 text-blue-500"
                      onClick={seeMore}
                    >
                      See More
                    </span>
                  </div>
                ) : (
                  <div className="text-[16px] text-center font-normal dark:text-white text-black mt-5" onClick={(e) => handleStop(e)}>
                    {faq?.description}
                    <span
                      className="underline ml-1 text-blue-500"
                      onClick={seeLess}
                    >
                      See Less
                    </span>
                  </div>
                )
              ) : (
                <p className="text-[16px] text-center  font-normal dark:text-white text-black mt-5">
                  {faq?.description}
                </p>
              )}
            </div>
           
            
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <div className="w-full flex flex-wrap lg:flex-nowrap rounded-lg h-full">
          <div className="w-full lg:w-[22%] max-h-[400px]   p-0 lg:p-2">
            <img
              src={faq?.coverImg}
              className="w-full h-full object-contain md:object-contain lg:object-fill  rounded-xl  text-white"
              alt="accord img"
            />
          </div>

          <div className="w-full flex  flex-col justify-between lg:w-[78%]" onClick={() => setIsExpanded(!isExpanded)}>
            <div>
              <div className="mt-2 lg:mt-0 flex items-center flex-wrap justify-between">
                <span className={styles.inactive}>
                  {faq?.title}
                </span>
               
              </div>

              <div className="flex justify-between items-center flex-wrap">
                <div>
                  <button className={styles.button}>
                    {faq?.orders} Order
                  </button>
                  <button className={styles.button}>
                    {faq?.successRatePercentage}% Success Rate
                  </button>
                  <button className={styles.button}>
                    {capitalize(faq?.partnerType)}
                  </button>
                </div>
                
              </div>
              {faq?.description?.length > 250 ? (
                less ? (
                  <div className="text-[16px]  font-normal dark:text-white text-black mt-5" onClick={(e) => handleStop(e)}>
                    {faq?.description.substring(0, 250)}...
                    <span
                      className="underline ml-1 text-blue-500"
                      onClick={seeMore}
                    >
                      See More
                    </span>
                  </div>
                ) : (
                  <div className="text-[16px]  font-normal dark:text-white text-black mt-5" onClick={(e) => handleStop(e)}>
                    {faq?.description}
                    <span
                      className="underline ml-1 text-blue-500"
                      onClick={seeLess}
                    >
                      See Less
                    </span>
                  </div>
                )
              ) : (
                <p className="text-[16px]  font-normal dark:text-white text-black mt-5">
                  {faq?.description}
                </p>
              )}
            </div>

            <div className="w-full flex flex-wrap justify-between justify-self-start mt-7">
              <div className="min-w-[43%] md:w-[43%] flex items-center flex-wrap">
                {faq?.socialPlatforms?.map((item) => (
                  <button className={styles.socialbutton}>
                    {item}
                  </button>
                ))}
                {/* <img
                                        src={Arrow}
                                        alt="arrow"
                                        className="mx-2 w-5 invert dark:invert-0"
                                      /> */}
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IsExpand
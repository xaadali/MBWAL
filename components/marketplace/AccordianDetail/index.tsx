import React from "react";
import styles from "./accordianDetail.module.scss";
// import Bnb from "../../Assests/bnb.svg";
// import Cart from "../../Assests/cart.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { uuid } from "uuidv4";
import Description from "../description";
import { IoIosArrowUp } from "react-icons/io"
import {CART_TYPE} from "../../../utils/enum/index"
import { saveCart } from "@/store/reducers/home";
function AccordianDetail({ faq, mainObject, setIsExpanded, isExpanded }) {

  const dispatch = useDispatch();
  const handleMarketPlace = (item) => {
    let param = {
      type: CART_TYPE.INFLUENCER,
      title: item.planName,
      price: item.planPrice,
      marketplace: mainObject,
      cartType: "Marketplace",
      cartStatus: item.planName,
      cartDetails: item.planDetail,
      id: uuid(),
    };
    dispatch(saveCart(param));
    toast.success("Item added to cart");
  };
  return (
    <>
      <div className="block lg:hidden">
        <div className={styles.mobileAccordianWrapper}>
          <div className={styles.mobileHeading}>
            <p className={styles.headingText}>Packages Details From {mainObject?.title} </p>
          </div>
          <div className={styles.packageWrapper} id="FAQ">
            {faq?.map((faq, index) => {
              return (
                <div className={styles.packageContainer} key={index}>
                  <div className={styles.ItemNamepackageDescription}>
                    <div className={styles.packageHeading}>
                      Item Name
                    </div>
                    <div className={styles.packageDetail}>
                      {faq?.planName}
                    </div>
                  </div>
                  <div className={styles.PlatformpackageDescription}>
                    <div className={styles.packageHeading}>
                      Platform
                    </div>
                    <div className={styles.packageDetail}>
                      <span className="col-span-2 flex justify-start gap-x-1">
                        {faq?.planPlatform?.map((item) =>
                          item === "Telegram" ? (
                            ""
                            // <img
                            //   src={Telegram}
                            //   alt=""
                            //   className="w-4 invert dark:invert-0"
                            // />
                          ) : (
                            ""
                          )
                        )}
                        {faq?.planPlatform?.map((item) =>
                          item === "Twitter" ? (
                            ""
                            // <img
                            //   src={Twiter}
                            //   alt=""
                            //   className="w-4 invert dark:invert-0"
                            // />
                          ) : (
                            ""
                          )
                        )}
                        {faq?.planPlatform?.map((item) =>
                          item === "Reddit" ? (
                            ""
                            // <img
                            //   src={Reddit}
                            //   alt=""
                            //   className="w-4 invert dark:invert-0"
                            // />
                          ) : (
                            ""
                          )
                        )}
                        {faq?.planPlatform?.map((item) =>
                          item === "Discord" ? (
                            ""
                            // <img
                            //   src={Discord}
                            //   alt=""
                            //   className="w-4 invert dark:invert-0"
                            // />
                          ) : (
                            ""
                          )
                        )}

                        {faq?.planPlatform?.map((item) =>
                          item === "Github" ? (
                            ""
                            // <img
                            //   src={Github}
                            //   alt=""
                            //   className="w-4 invert dark:invert-0"
                            // />
                          ) : (
                            ""
                          )
                        )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.DetailspackageDescription}>
                    <div className={styles.packageHeading}>
                      Details
                    </div>
                    <div className={styles.packageDetail}>
                      {faq?.planDetail}
                    </div>
                  </div>
                  <div className={styles.PricepackageDescription}>
                    <div className={styles.packageHeading}>
                      Price
                    </div>
                    <div className={styles.packageDetail}>
                      <div className="flex justify-center pr-5 gap-x-1 w-full">
                        <span className={styles.active}>
                          {faq?.planPrice} BNB
                        </span>
                        {/* <img src={Bnb} alt="bnb" className="mx-0 w-4 " /> */}
                      Cart
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
          <div className={styles.mobileSeeLess}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <IoIosArrowUp className="text-white text-4xl" />
            </button>
          </div>
        </div>


      </div>
      <div className="hidden lg:block overflow-auto">
        <div className={styles.bg}>
          <p>Packages Details From {mainObject?.title} </p>
          <div className={styles.headingset}>
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <p>Item Name</p>
              </div>
              <div className="col-span-2">
                <p>Platform</p>
              </div>
              <div className="col-span-5">
                <p>Details</p>
              </div>
              <div className="col-span-3">
                <p className={styles.price}>Price</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper} id="FAQ">
          <div className={styles.faqsWrapper}>
            <Accordion allowZeroExpanded={true} className={styles.accordion}>
              {faq?.map((faq, index) => (
                <AccordionItem key={index} className={styles.faqItem}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={styles.question}>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (

                            <div className="grid grid-cols-12">
                              <span className="col-span-2  my-auto">
                                {faq?.planName}
                              </span>
                              <span className="col-span-2 my-auto">
                                {faq?.planPlatform?.map((item) =>
                                  item === "Telegram" ? (
                                    ""
                                    // <img
                                    //   src={Telegram}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Twitter" ? (
                                    ""
                                    // <img
                                    //   src={Twiter}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Reddit" ? (
                                    ""
                                    // <img
                                    //   src={Reddit}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Discord" ? (
                                    ""
                                    // <img
                                    //   src={Discord}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}

                                {faq?.planPlatform?.map((item) =>
                                  item === "Github" ? (
                                    ""
                                    // <img
                                    //   src={Github}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                              </span>
                              {/* <img
                            src={faq?.Pic}
                            alt="accordimg"
                          /> */}
                              <Description faq={faq} />

                              <span className="col-span-1"></span>
                              {/* <img
                              src={faq?.Arrow}
                              alt="arrow"
                              className="w-5 "
                            /> */}
                              <div className="flex w-[130px]">
                                <span className={styles.active}>
                                  {faq?.planPrice} BNB
                                </span>
                                {/* <img src={Bnb} alt="bnb" className="mx-2 w-5 " /> */}
                               Cart
                              </div>
                            </div>

                          ) : (


                            <div className="grid grid-cols-12">
                              <span className="col-span-2  my-auto">
                                {faq?.planName}
                              </span>
                              <span className="col-span-2 flex flex-col items-start gap-y-2 lg:gap-x-2  my-auto">
                                {faq?.planPlatform?.map((item) =>
                                  item === "Telegram" ? (
                                    ""
                                    // <img
                                    //   src={Telegram}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Twitter" ? (
                                    ""
                                    // <img
                                    //   src={Twiter}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Reddit" ? (
                                    ""
                                    // <img
                                    //   src={Reddit}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                                {faq?.planPlatform?.map((item) =>
                                  item === "Discord" ? (
                                    ""
                                    // <img
                                    //   src={Discord}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}

                                {faq?.planPlatform?.map((item) =>
                                  item === "Github" ? (
                                    ""
                                    // <img
                                    //   src={Github}
                                    //   alt=""
                                    //   className="w-4 invert dark:invert-0"
                                    // />
                                  ) : (
                                    ""
                                  )
                                )}
                              </span>
                              <Description faq={faq} />
                              <span className="col-span-1 "></span>
                              <div className="flex w-[130px]">
                                <span className={styles.active}>
                                  {faq?.planPrice} BNB
                                </span>
                                {/* <img src={Bnb} alt="bnb" className="mx-2 w-5 " /> */}
                                Cart
                              </div>
                            </div>

                          )
                        }
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordianDetail;

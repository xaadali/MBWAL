import React, { useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import AccordianDetail from "../AccordianDetail";
import styles from "../BottomAccordian/bottomAccordian.module.scss";
import ExpandComponent from "./expand";
import IsExpand from "./isExpand";

const CustomAccordion = (props) => {
  const { faq, Reload, ActiveConfetti, key } = props;



  const [isExpanded, setIsExpanded] = useState(false);
  const [less, setLess] = useState(true);
  const [faveId, setFavId] = useState<any>(null)
  const [coindata, setcoindata] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = (e) => {
    setcoindata(e);
    setPopupVisible((preview) => !preview);
  };
  const seeMore = () => {
    setLess(false);
  };
  const seeLess = () => {
    setLess(true);
  };
  const addFavoritMarket = async (faq) => {
    let check;
    if (faq?.favorite) {
      check = false;
    } else {
      check = true;
    }
    try {
      // const res = await addFavorit(faq?._id, "", check);
      setFavId(faq?._id)
      // Reload()
      // toast.success(res?.data?.message);
    } catch (error) {
      toast.success(error?.response?.data?.message);
    }
  };

  const handleOpenLink = (item) => {
    let values = item?.link?.split("/")
    if (values[0] === "https:") {
      window.open(item?.link, "_blank", "noopener,noreferrer");
    } else {
      window.open(`https://twitter.com/${item?.link}`, "_blank", "noopener,noreferrer");
    }

  }
  const handleStop = (event) => {
    event.stopPropagation();
  }

  return (
    <>
      <AccordionItem
        //   key={index}
        className={isExpanded ? styles.faqItemIsExpand : styles.faqItem}
        dangerouslySetExpanded={isExpanded}
      >
        <ToastContainer position="bottom-right" />

        <AccordionItemHeading>
          <AccordionItemButton className={styles.question}>
            <AccordionItemState>
              {({ expanded }) =>
                expanded ? (
                  ""
                  // <ExpandComponent key={key} faveId={faveId} seeMore={seeMore} seeLess={seeLess} less={less} handleOpenLink={handleOpenLink} togglePopup={togglePopup} addFavoritMarket={addFavoritMarket} faq={faq} handleStop={handleStop} setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
                ) : (
                  <IsExpand key={key} faveId={faveId} seeMore={seeMore} seeLess={seeLess} less={less} handleOpenLink={handleOpenLink} togglePopup={togglePopup} addFavoritMarket={addFavoritMarket} faq={faq} handleStop={handleStop} setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
                )
              }
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
   
    </>
  );
};

export default CustomAccordion;

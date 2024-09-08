import React from "react";
import styles from "./bottomAccordian.module.scss";
import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useSelector } from "react-redux";
import CustomAccordion from "../Accordion/Accordion";

function BottomAccordian({ Reload, ActiveConfetti }) {
  const { marketplace } = useSelector((state:any) => state.marketplace);
  return (
    <div className={styles.wrapper} id="FAQ">
      <div className={styles.faqsWrapper}>
        <Accordion allowZeroExpanded className={styles.accordion}>
          {marketplace?.map((faq, index) => (
            <CustomAccordion faq={faq} key={index} Reload={Reload} ActiveConfett={ActiveConfetti} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default BottomAccordian;

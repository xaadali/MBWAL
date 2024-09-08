"use client"
import React from "react";
import styles from "./FAQ.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import faqs from "./faq.data";
import classNames from "classnames";


function FAQ() {
  return (
    <div className={classNames(["custom-class", styles.container])}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Frequently Ask <br/><p>Questions</p></div>

        <div className={styles.faqsWrapper}>
          <Accordion allowZeroExpanded={true} className={styles.accordion}>
            {faqs.map((faq, index) => (
              <React.Fragment key={index}>
                <AccordionItem className={styles.faqItem}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={styles.question}>
                      <AccordionItemState>
                        {({ expanded }) => (
                          <div
                            className={
                              expanded ? styles.iconBox : styles.iconBox
                            }
                          >0{index + 1}</div>
                        )}
                      </AccordionItemState>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (
                            <span className={styles.active}>
                              {faq?.question}
                            </span>
                          ) : (
                            <span className={styles.inactive}>
                              {faq?.question}
                            </span>
                          )
                        }
                      </AccordionItemState>
                      {/* <AccordionItemState>
                        {({ expanded }) => (
                          <div
                            className={
                              expanded ? styles.iconBox : styles.iconBox
                            }
                          >+</div>
                        )}
                      </AccordionItemState> */}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answerDiv}>
                      <div className={styles.answer2}></div>
                      <p className={styles.answer}>{faq?.answer}</p>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./whatIsERC.module.scss"
import classNames from 'classnames'
const WhatIsERC = () => {
  return (
    <div className={styles.container}>
        <div className={classNames(["custom-class",styles.wrapper])}>
        <div className={styles.leftSection}>
            
        <img src="/free-panda-cooking.svg" alt='header'/>
        </div>
        <div className={styles.rightSection}>
        <div className={styles.textSection}>
                    <div className={styles.headingText}>What is an <span> ERC-404</span>?</div>
                    <div className={styles.listItemText}>ERC-404 creatively mixes elements from the ERC-20 and ERC-721 standards, which are traditionally not designed to interact. Its ERC-721 approach deviates from the norm by relying on token mints and burns for fractional transfers.</div>
                    
                  
            </div>
            
        </div>
        </div>
        </div>
  )
}

export default WhatIsERC
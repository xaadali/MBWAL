/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./header.module.scss"
import classNames from 'classnames'
const Header = () => {
 
  return (
    <div className={styles.container}>
        <div className={classNames(["custom-class",styles.wrapper])}>
        <div className={styles.leftSection}>
            <div className={styles.textSection}>
                    <div className={styles.headingText}>Deploy <span>ERC-404</span></div>
                    <div className={styles.headingText}>tokens in </div>
                    <div className={styles.headingText}>minutes.</div>
                    <div className={styles.listItemText}>. All from your Telegram</div>
                    <div className={styles.listItemText}>. No coding needed</div>
                    <div className={styles.listItemText}>. Safe and Secure</div>
                    <div className={styles.listItemText}>. Benefits for $COOKER holders</div>
                    <a href="https://t.me/Cooker404_Bot" target='_blank' className={styles.buttonClass}>
                        Open COOKER
                    </a>
            </div>

        </div>
        <div className={styles.rightSection}>
            <img src="/headerImage.svg" alt='header'/>
        </div>
        </div>
    </div>
  )
}

export default Header
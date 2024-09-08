/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./cookerBuy.module.scss"
const CookerBuy = () => {
  return (
    <div className={styles.cookerBuy}>
            <div className={styles.leftSection}>
            
            <img src="/buyCooker.svg" alt='header'/>
            </div>
            <div className={styles.rightSection}>
            <div className={styles.textSection}>
                        <div className={styles.headingText}>How to Buy <span> $COOKER</span>?</div>
                        <div className={styles.listItemText}>Enter at Uniswap and swap your Ethereum for $COOKER tokens, for that insert our token contract (0xbvs566..................nsbshsudity788M) in the field for the desired token on swap. Swap the amount you want and if your are in trouble swapping, make sure to use a higher slippage (5-10%).</div>
                        <button>Buy $Cooker at Uniswap</button>
                      
                </div>
                
            </div>
            </div>
  )
}

export default CookerBuy
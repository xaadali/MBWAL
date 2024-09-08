/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./walletInfo.module.scss"
const WalletInfo = () => {
  return (
    <>
     <div className={styles.walletInfoForDesktop}>
            <div className={styles.infoWrapper}>
                <img src="/infoImage.svg" alt=""/>
            </div>
            <div className={styles.walletInfo}>
                <div className={styles.creationInfo}>
                    <div className={styles.title}>
                    Create a Wallet                        
                    </div>
                    <div className={styles.description}>
                    Download metamask and install at your browser or preferred device. 
                    Metamask is available for iOS, Android and Google Chrome as a browser extension.
                    </div>
                </div>
                <div className={styles.getSomeETH}>
                    <div className={styles.title}>
                    Get Some Ethereum                       
                    </div>
                    <div className={styles.description}>
                    Have ETH in your wallet to swap for $COOKER. If you don’t have any ETH, you can buy directly on metamask,
                     transfer from another wallet, or buy on another exchange and send it to your wallet.
                    </div>
                </div>
                <div className={styles.buyCookerAt}>
                    <div className={styles.title}>
                    Buy $COOKER at Uniswap                       
                    </div>
                    <div className={styles.description}>
                    Enter at Uniswap and swap your Ethereum for $COOKER tokens, for that insert 
                    our token contract (0xbvs566.............m98989jj) 
                    in the field for the desired token on swap. 
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.walletInfoMobileView}>
                <div className={styles.walletWrapper}>
                    <div className={styles.circleWithTextFirst}>S1</div>
                    <div className={styles.circleWithDescription}>
                    <div className={styles.circleTitle}>
                    Create a Wallet                        
                    </div>
                    <div className={styles.circleDescription}>
                    Have ETH in your wallet to swap for $COOKER. If you don’t have any ETH, you can buy directly on metamask,
                     transfer from another wallet, or buy on another exchange and send it to your wallet.
                    </div>
                   
                </div>
                </div>
                <div className={styles.walletWrapper}>
                    <div className={styles.circleWithTextSecond}>S2</div>
                    <div className={styles.circleWithDescription}>
                    <div className={styles.circleTitle}>
                    Get Some Ethereum                        
                    </div>
                    <div className={styles.circleDescription}>
                    Download metamask and install at your browser or preferred device. 
                    Metamask is available for iOS, Android and Google Chrome as a browser extension.
                    </div>
                   
                </div>
                </div>
                <div className={styles.walletWrapper}>
                    <div className={styles.circleWithTextThird}>S3</div>
                    <div className={styles.circleWithDescription}>
                    <div className={styles.circleTitle}>
                    Buy $COOKER at Uniswap                       
                    </div>
                    <div className={styles.circleDescription}>
                    Enter at Uniswap and swap your Ethereum for $COOKER tokens, for that insert 
                    our token contract (0xbvs566.............m98989jj) 
                    in the field for the desired token on swap. 
                    </div>
                   
                </div>
                </div>
            </div>
    </>
  )
}

export default WalletInfo
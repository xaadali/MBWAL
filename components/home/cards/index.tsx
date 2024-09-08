/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./cards.module.scss"
import classNames from 'classnames'
import { CardsData } from './Data'
import FAQ from '../FAQ'
import CardsItem from './cardItem'
import CookerBuy from './cookerBuy'
import WalletInfo from './walletInfo'
const CardsCompo = () => {

  return (
    <div className={styles.container}>
        <div className={classNames(["custom-class",styles.wrapper])}>
            <CardsItem />
            <CookerBuy />
           <WalletInfo />
        </div>
        </div>
  )
}

export default CardsCompo
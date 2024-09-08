/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./cardItem.module.scss"
import { CardsData } from '../Data'
const CardsItem = () => {
  return (
    <div className={styles.cardsSection}>
    {CardsData.map((item,key)=>(
         <div className={styles.card} key={key}>
         <img src={item.icon} alt=""/>
         <div className={styles.cardHeading}>{item.heading}</div>
         <p>{item.description}</p>
         <p>{item.descriptionOne}</p>
         <p>{item.descriptionTwo}</p>
         <p>{item.descriptionThree}</p>
     </div>
    ))}
       
</div>
  )
}

export default CardsItem
import React from 'react'
import styles from "./layout.module.scss"
import Navigation from '../navbar'
import Footer from '../footer'
const Layout = ({ children }: any) => {
  return (
    <div className={styles.wrapper}>
    <Navigation />
    <div className="w-full flex flex-col items-center justify-start">{children}</div>
    <Footer />
  </div>
  )
}

export default Layout
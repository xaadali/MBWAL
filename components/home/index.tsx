import { Metadata } from 'next';
import React from 'react'
import Header from './header';
import WhatIsERC from './whatIsERC';
import CardsCompo from './cards';
import FAQ from './FAQ';


const Home = () => {
  return (
    <>
      <Header />
      <WhatIsERC />
      <CardsCompo />
      <FAQ />
    </>
  )
}

export default Home
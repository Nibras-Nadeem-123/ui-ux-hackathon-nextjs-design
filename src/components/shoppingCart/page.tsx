import React from 'react'
import Header from '../mainComponents/header'
import HeroSection from './heroSection'
import Footer from '../mainComponents/footer'
import Product from './product'

const HomePage = () => {
  return (
    <div className='w-[1370px] h-[950px] '>        
      <Header/>
     <HeroSection/>
     <Product/>
      <Footer/>
    </div>
  )
}

export default HomePage

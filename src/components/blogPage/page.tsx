import React from 'react'
import HeroSection from './heroSection'
import Header from '../mainComponents/header'
import Footer from '../mainComponents/footer'
import MainContent from './mainContent'

const BlogComp = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default BlogComp

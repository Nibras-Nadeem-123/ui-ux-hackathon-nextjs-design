import React from 'react'

import {Roboto, Inter } from "next/font/google"

const text = Roboto({
   subsets: ["latin"],
   weight: '700'
})

const inter = Inter({subsets:["latin"], weight: "400"})

const HeroSection = () => {
  return (
     <div className='relative bg-[url("/page7Bg.jpg")] bg-cover h-[410px] w-screen bg-center'>
         <div className='absolute inset-0 bg-black/30 my-auto mx-auto'>
            <p className={`${text.className} text-white text-[48px] mt-[168px] ml-[630px]`}>Shopping Cart</p>
            <p className={`${inter.className} text-white text-[20px] ml-[670px] mt-3`}>Home &gt; <span className='hover:text-[#FF9F0D] cursor-pointer'>Shopping cart</span></p>
         </div>
     </div>
  )
}

export default HeroSection

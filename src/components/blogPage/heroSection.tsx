import React from 'react'

import {Roboto, Inter } from "next/font/google"
import Link from 'next/link'

const text = Roboto({
   subsets: ["latin"],
   weight: '700'
})

const inter = Inter({subsets:["latin"], weight: "400"})

const HeroSection = () => {
  return (
     <div className='relative bg-[url("/page7Bg.jpg")] bg-cover h-[410px] w-full bg-center'>
         <div className='absolute inset-0 bg-black/30 my-auto mx-auto'>
            <p className={`${text.className} text-white text-[48px] mt-[168px] ml-[620px]`}>Blog List</p>
            <p className={`${inter.className} text-white text-[20px] ml-[650px] mt-3`}><Link href={"/blog"} className='hover:text-[#FF9F0D] cursor-pointer'>Blog</Link> &gt; <span>Blog</span></p>
         </div>
     </div>
  )
}

export default HeroSection

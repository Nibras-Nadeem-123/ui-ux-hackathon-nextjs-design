import React from 'react'
import { Roboto, Inter } from "next/font/google"
import Link from 'next/link'

const text = Roboto({
  subsets: ["latin"],
  weight: '700'
})

const inter = Inter({ subsets: ["latin"], weight: "400" })

const HeroSection = () => {
  return (
    <div className='relative bg-[url("/page7Bg.jpg")] bg-cover h-[410px] w-full bg-center'>
      <div className='absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-4'>
        <p className={`${text.className} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>Blog List</p>
        <p className={`${inter.className} text-white text-base sm:text-lg md:text-xl mt-3`}>
          <Link href={"/blog"} className='hover:text-[#FF9F0D] cursor-pointer'>
            Blog
          </Link> &gt; <span>Blog</span>
        </p>
      </div>
    </div>
  )
}

export default HeroSection

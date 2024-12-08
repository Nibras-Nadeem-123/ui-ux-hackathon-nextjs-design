import Footer from '@/components/mainComponents/footer'
import Header from '@/components/mainComponents/header'
import { Inter, Roboto } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const text = Roboto({subsets:["latin"], weight: "700"})
const inter = Inter({subsets:["latin"]})

const ErrorPage = () => {
  return (
    <div>
      <Header/>
      {/* hero Section */}
      <div className='relative bg-[url("/page7Bg.jpg")] bg-cover h-[410px] w-full bg-center'>
         <div className='absolute inset-0 bg-black/30 my-auto mx-auto'>
            <p className={`${text.className} text-white text-[48px] mt-[168px] ml-[620px]`}>404 Error Page</p>
            <p className={`${inter.className} text-white text-[20px] ml-[680px] mt-3`}><Link href={"/blog"} className='hover:text-[#FF9F0D] cursor-pointer'>Page</Link> &gt; <span>404 Error Page</span></p>
         </div>
     </div>
     {/* error section */}
     <div className='w-[630px] h-[342px] my-40 mx-96 text-center'>
        <p className={`${text.className} text-[96px] text-[#FF9F0D]`}>404</p>
        <p className={`${text.className} text-[32px] text-[#333333] mt-5`}>Oops! Look likes something going wrong</p>
        <p className={`${inter.className} text-[18px] text-[#4F4F4F] mt-5`}>Page Cannot be found! we&apos;ll have it figured out in no time.
        Menwhile, cheek out these fresh ideas:</p>
        <button className='w-[197px] h-[58px] rounded-[6px] py-[16px] mt-8 hover:bg-amber-600 bg-[#FF9F0D] px-[48px]'><p className={`${text.className} text-[18px] text-white`}>Go to home</p></button>
     </div>
     <Footer/>
    </div>
  )
}

export default ErrorPage

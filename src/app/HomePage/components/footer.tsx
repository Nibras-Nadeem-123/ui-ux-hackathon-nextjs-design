import { Inter, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineClock, HiOutlinePhone } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { PiEnvelopeSimpleOpen, PiPaperPlaneTiltFill } from 'react-icons/pi';

const text = Roboto({
  subsets: ["latin"],
  weight: '700',
});

const inter = Inter({ subsets: ["latin"] })

const Footer = () => {
  return (
    <div className='z-30 bg-white '>
      <div className='absolute w-full h-[555px] bg-[#A8BCA14D] '>
      <div className='flex space-x-10 m-40'>
        {/* 1st row */}
        <div className='space-y-4'>
          <p className={`${text.className} text-[24px] `}>
            F<span className={`${text.className} text-[24px] text-[#195A00]`}>oo</span>dtuck
          </p>
          <p className={` ${inter.className} w-[254px] h-[51px] text-[#333333]`}>
            Subscribe our newsletter and
            <br />
            get discount 25%off
          </p>
          <p className='flex bg-white w-[242px] h-[40px] rounded-md'>
            <input type='text' placeholder='Enter your Email' className={`${inter.className} text-[14px] focus:outline-none ml-3 `} />
            <PiPaperPlaneTiltFill className='w-[43px] h-[40px] bg-[#195A00] text-white p-2 hover:bg-green-900 cursor-pointer hover:text-gray-200 rounded-r-md' />
          </p>
          {/* Description */}
          <div className='flex justify-center gap-4 mt-5 -ml-20'>
          <FaPinterestP className='w-5 h-5 text-red-600 cursor-pointer' />
          <FaTwitter className='w-5 h-5 text-blue-400 cursor-pointer' />
            <FaFacebookF className='w-5 h-5 bg-sky-600 text-white p-1 rounded-full cursor-pointer' />
            <AiFillInstagram className='w-5 h-5 rounded-md text-slate-200 bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 cursor-pointer' />
            <FaYoutube className='w-6 h-6 text-red-600 cursor-pointer' />
          </div>
        </div>
        {/* 2nd row */}
        <div className='space-y-4'>
          <p className='font-bold text-[#333333] text-[20px]'>Contact us</p>
          <div className='flex gap-2'>
            <LuMapPin className='h-[24px] w-[24px] text-[#333333]'/>
            <p className='text-[#333333] text-[18px]'>Kolkata India , 3rd Floor, Office 45</p>
          </div>
          <div className='flex gap-2'>
            <HiOutlinePhone className='h-[24px] w-[24px] text-[#333333]'/>
            <p className='text-[#333333] text-[18px]'>00965 - 96659986</p>
          </div>
          <div className='flex gap-2'>
            <PiEnvelopeSimpleOpen className='h-[24px] w-[24px] text-[#333333]'/>
            <p className='text-[#333333] text-[18px]'>M.Alyaqout@4house.Co</p>
          </div>
          <div className='flex gap-2'>
            <HiOutlineClock className='h-[24px] w-[24px] text-[#333333]'/>
            <p className='text-[#333333] text-[18px]'>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>
        </div>
        {/* 3rd row */}
        <div className='space-y-4'>
          <p className='text-[20px] font-bold text-[#333333]'>Links</p>
         <div className='grid space-y-[9px]'>
         <Link href={"/"} className={`${inter.className} text-[16px] text-[#333333]`}>About us</Link>
          <Link href={"/"} className={`${inter.className} text-[16px] text-[#333333]`}>Contact Us</Link>
          <Link href={"/"} className={`${inter.className} text-[16px] text-[#333333]`}>Our Menu</Link>
          <Link href={"/"} className={`${inter.className} text-[16px] text-[#333333]`}>Team</Link>
          <Link href={"/"} className={`${inter.className} text-[16px] text-[#333333]`}>FAQ</Link>
         </div>
        </div>
        {/* 4th row (instagram gallery) */}
        <div className='space-y-4 '>
          <div>
            <p className='text-[20px] font-bold text-[#333333]'>Instagram Gallery</p>
            </div> 
          <div className='grid grid-cols-3 gap-1'>
            <Image src={'/instaGallery.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
            <Image src={'/instaGallery2.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
            <Image src={'/instaGallery3.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
            <Image src={'/instaGallery4.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
            <Image src={'/instaGallery5.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
            <Image src={'/instaGallery6.jpeg'} alt="" height={200} width={200} className='w-[109px] h-[108px]'/>
          </div>
        </div>
      </div>

      <div className='absolute ml-[70%] -mt-80'>
        <Image src={"/brocoli.png"} alt='' height={500} width={500} className='ml-60 -rotate-45'/>
      </div>

      {/* main footer */}
      <div className='relative flex gap-20 -mt-10 w-full h-[68px] bg-[#195A00]'>
        <div className='text-white px-20  py-5 text-[16px]'>
          Copyright © 2000-2020.logo.com. All rights reserved
        </div>
        <div className='absolute text-white py-5 ml-[850px] cursor-pointer hover:font-bold text-[16px]'>
          Privacy Policy
        </div>
        <div className='absolute text-white py-5 ml-[1000px] cursor-pointer hover:font-bold text-[16px]'>
          Term of Use
        </div>
        <div className='absolute text-white py-5 ml-[1140px] cursor-pointer hover:font-bold text-[16px]'>
          Partner
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer



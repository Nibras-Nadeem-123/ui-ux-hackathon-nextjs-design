import { Inter, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineClock, HiOutlinePhone } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PiEnvelopeSimpleOpen } from 'react-icons/pi';

const text = Roboto({
  subsets: ["latin"],
  weight: '700',
});

const inter = Inter({ subsets: ["latin"] })

const Footer = () => {
  return (
    <div className='absolute'>
      <div className='flex w-[1120px] mx-28 h-[150px] shadow-md p-[40px] shadow-gray-500 bg-white'>
      <div className='w-[274px] h-[80px]'>
          <p className='text-[24px] text-[#333333] font-bold'>Subscribe
            <br/>
          To Our Newsletter</p>
      </div>
      <div className='flex justify-between w-[559px] h-[56px] border-2 border-[#BC9A6C] text-[#BC9A6C]'>
        <input type='text' placeholder='Enter your mail' className='text-[#BC9A6C] ml-5 focus:outline-none'/>
        <button className='w-[170px] h-[54.07px] bg-[#BC9A6C] py-[16px] px-[27px] hover:bg-opacity-90 text-white'><p className='w-[110px]'>Subscribe now</p></button>
      </div>

      <div className='flex gap-2 ml-20 w-[144px] h-[32px]'>
        <FaFacebookF className='w-[30px] h-[32px] bg-[#BC9A6C] p-2 rounded-sm hover:text-white cursor-pointer'/>
        <FaTwitter className='w-[30px] h-[32px] bg-[#BC9A6C] p-2 rounded-sm hover:text-white cursor-pointer'/>
        <AiFillInstagram className='w-[30px] h-[32px] bg-[#BC9A6C] p-2 rounded-sm hover:text-white cursor-pointer'/>
        <FaYoutube className='w-[30px] h-[32px] bg-[#BC9A6C] p-2 rounded-sm hover:text-white cursor-pointer'/>
      </div>
</div>
      <div className='absolute w-screen -mt-20 -z-30 bg-[url("/coffeeFooter.jpeg")] h-[463px] bg-cover bg-no-repeat bg-center'>
     
     <div className='absolute h-[463px] bg-black/80'>
       <div className='flex space-x-10 ml-20 mr-56 my-20 pt-16'>
         {/* 1st row */}
         <div className='space-y-4'>
           <p className={`${text.className} text-[24px] text-white `}>
             Food<span className={`${text.className} text-[24px] text-[#BC9A6C]`}>tuck</span>
           </p>
           <p className={` ${inter.className} w-[382px] h-[51px] text-white`}>
             Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
           </p>


         </div>

         {/* 3rd row */}
         <div className='space-y-4'>
           <p className='text-[20px] font-bold text-white'>Explore</p>
           <div className=' absolute grid grid-cols-2 space-y-[9px] gap-4'>
             <Link href={"/"} className={`${inter.className} flex gap-3 text-[16px] hover:font-bold cursor-pointer text-white`}><MdKeyboardArrowRight className='mt-1' /> About us</Link>
             <Link href={"/"} className={`${inter.className} flex gap-3 text-[16px] hover:font-bold cursor-pointer text-white`}><MdKeyboardArrowRight className='mt-1' />Contact Us</Link>
             <Link href={"/"} className={`${inter.className} flex gap-3 text-[16px] hover:font-bold cursor-pointer text-white`}><MdKeyboardArrowRight className='mt-1' />Our Menu</Link>
             <Link href={"/"} className={`${inter.className} flex gap-3 text-[16px] hover:font-bold cursor-pointer text-white`}><MdKeyboardArrowRight className='mt-1' />Team</Link>
             <Link href={"/"} className={`${inter.className} flex gap-3 text-[16px] hover:font-bold cursor-pointer text-white`}><MdKeyboardArrowRight className='mt-1' />FAQ</Link>
           </div>
         </div>

         <div className='space-y-4'>
           <p className='font-bold text-white text-[20px] ml-52'>Contact us</p>
           <div className='flex gap-2 ml-52'>
             <LuMapPin className='h-[24px] w-[24px] text-white' />
             <p className='text-white text-[18px] w-[300px]'>Kolkata India , 3rd Floor, Office 45</p>
           </div>
           <div className='flex gap-2 ml-52'>
             <HiOutlinePhone className='h-[24px] w-[24px] text-white' />
             <p className='text-white text-[18px]'>00965 - 96659986</p>
           </div>
           <div className='flex gap-2 ml-52'>
             <PiEnvelopeSimpleOpen className='h-[24px] w-[24px] text-white' />
             <p className='text-white text-[18px]'>M.Alyaqout@4house.Co</p>
           </div>
           <div className='flex gap-2 ml-52'>
             <HiOutlineClock className='h-[24px] w-[24px] text-white' />
             <p className='text-white text-[18px]'>Sun - Sat / 10:00 AM - 8:00 PM</p>
           </div>
         </div>
         </div>
         <div className='absolute ml-[65%]  -rotate-45'>
           <Image src={"/CoffeeFooter.png"} alt='' height={195.64} width={325.31} className='ml-60 rotate-90 z-30' />
         </div>

         {/* main footer */}
         <div className={`${inter.className} relative flex -z-30 gap-20 mt-28 h-[100px] py-8 justify-center text-white text-center w-full bg-[#BC9A6C]`}>

           Copyright © 2000-2020.logo.com. All rights reserved

         </div>
      
     </div>
     </div>
    </div>
      )
}

      export default Footer


      
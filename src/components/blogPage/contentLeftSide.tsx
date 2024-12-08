import { Inter, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { PiArrowLineUpRight, PiChats, PiUserCirclePlus } from 'react-icons/pi'

const inter = Inter({subsets:["latin"], weight: "400"})
const text = Roboto({subsets:["latin"], weight: "700"})

const ContentLeftSide = () => {
  return (
    <div>
        {/* 1st blog */}
      <div className='w-[872px] h-[830px] mt-[50px]'>
        <Image src={"/blogLeftSide.jpg"} alt='' height={320} width={671} className='cursor-pointer'/>
        <div className={`${inter.className} flex space-x-3 mt-2`}>
            <IoCalendarNumberOutline className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
            <p>Feb 14, 2022 /</p>
           <PiChats className='text-[#FF9F0D] w-[23.97px] h-[24px]'/> 
            <p>  3 /</p>
            <PiUserCirclePlus className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
             <p> Admin</p>
        </div>
        <div className='mt-4'>
            <p className={`${text.className} text-[24px]`}>10 Reasons To Do A Digital Detox Challenge</p>
        </div>
        <div className='border-b-2 border-[#828282] opacity-[50%] w-[594.03px] mt-5'>

        </div>
        <div className='w-[647.26px] h-[96px] mt-9'>
            <p className={`${inter.className} text-[16px] text-[#4F4F4F]`}>       
                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
        </div>
        <button className='flex gap-2 w-[192px] h-[52px] mt-7 rounded-[6px] border-2 border-[#FF9F0D] hover:shadow-md hover:shadow-gray-400 py-[14px] px-[32px]'><p style={{fontWeight: 400}} className={`${text.className} text-[16px] text-[#FF9F0D]`}>Read More </p><PiArrowLineUpRight className='text-[#FF9F0D] h-[24px] w-[24px]'/></button>
      </div>
      {/* 2nd blog */}
      <div className='w-[872px] h-[830px] mt-[20px]'>
        <Image src={"/blogLeftSide2.jpg"} alt='' height={320} width={671} className='cursor-pointer'/>
        <div className={`${inter.className} flex space-x-3 mt-2`}>
            <IoCalendarNumberOutline className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
            <p>Feb 14, 2022 /</p>
           <PiChats className='text-[#FF9F0D] w-[23.97px] h-[24px]'/> 
            <p>  3 /</p>
            <PiUserCirclePlus className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
             <p> Admin</p>
        </div>
        <div className='mt-4'>
            <p className={`${text.className} text-[24px]`}>Traditional Soft Pretzels with Sweet Beer Cheese</p>
        </div>
        <div className='border-b-2 border-[#828282] opacity-[50%] w-[594.03px] mt-5'>

        </div>
        <div className='w-[647.26px] h-[96px] mt-9'>
            <p className={`${inter.className} text-[16px] text-[#4F4F4F]`}>       
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
        </div>
        <button className='flex gap-2 w-[192px] h-[52px] mt-7 rounded-[6px] border-2 border-[#FF9F0D] py-[14px] px-[32px] hover:shadow-md hover:shadow-gray-400'><p style={{fontWeight: 400}} className={`${text.className} text-[16px] text-[#FF9F0D]`}>Read More </p><PiArrowLineUpRight className='text-[#FF9F0D] h-[24px] w-[24px]'/></button>
      </div>
      {/* third blog */}
      <div className='w-[872px] h-[830px] mt-[20px]'>
        <Image src={"/blogLeftSide3.jpg"} alt='' height={320} width={671} className='cursor-pointer'/>
        <div className={`${inter.className} flex space-x-3 mt-2`}>
            <IoCalendarNumberOutline className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
            <p>Feb 14, 2022 /</p>
           <PiChats className='text-[#FF9F0D] w-[23.97px] h-[24px]'/> 
            <p>  3 /</p>
            <PiUserCirclePlus className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
             <p> Admin</p>
        </div>
        <div className='mt-4'>
            <p className={`${text.className} text-[24px]`}>The Ultimate Hangover Burger: Egg in a Hole Burger</p>
        </div>
        <div className='border-b-2 border-[#828282] opacity-[50%] w-[594.03px] mt-5'>

        </div>
        <div className='w-[647.26px] h-[96px] mt-9'>
            <p className={`${inter.className} text-[16px] text-[#4F4F4F]`}>       
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
        </div>
        <button className='flex gap-2 w-[192px] h-[52px] mt-7 rounded-[6px] border-2 border-[#FF9F0D] hover:shadow-md hover:shadow-gray-400 py-[14px] px-[32px]'><p style={{fontWeight: 400}} className={`${text.className} text-[16px] text-[#FF9F0D]`}>Read More </p><PiArrowLineUpRight className='text-[#FF9F0D] h-[24px] w-[24px]'/></button>
      </div>
      {/* fourth blog */}
      <div className='w-[872px] h-[830px] mt-[20px]'>
        <Image src={"/blogLeftSide4.jpg"} alt='' height={320} width={671} className='cursor-pointer'/>
        <div className={`${inter.className} flex space-x-3 mt-2`}>
            <IoCalendarNumberOutline className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
            <p>Feb 14, 2022 /</p>
           <PiChats className='text-[#FF9F0D] w-[23.97px] h-[24px]'/> 
            <p>  3 /</p>
            <PiUserCirclePlus className='text-[#FF9F0D] w-[23.97px] h-[24px]'/>
             <p> Admin</p>
        </div>
        <div className='mt-4'>
            <p className={`${text.className} text-[24px]`}>My Favorite Easy Black Pizza Toast Recipe</p>
        </div>
        <div className='border-b-2 border-[#828282] opacity-[50%] w-[594.03px] mt-5'>

        </div>
        <div className='w-[647.26px] h-[96px] mt-9'>
            <p className={`${inter.className} text-[16px] text-[#4F4F4F]`}>       
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
        </div>
        <button className='flex gap-2 w-[192px] h-[52px] mt-7 rounded-[6px] border-2 border-[#FF9F0D] hover:shadow-md hover:shadow-gray-400 py-[14px] px-[32px]'><p style={{fontWeight: 400}} className={`${text.className} text-[16px] text-[#FF9F0D]`}>Read More </p><PiArrowLineUpRight className='text-[#FF9F0D] h-[24px] w-[24px]'/></button>
      </div>
    </div>
  )
}

export default ContentLeftSide

import React from 'react'
import { Roboto } from 'next/font/google'
import { FiSearch} from "react-icons/fi";
import { PiTote, PiUser} from "react-icons/pi";

import NavBar from './navBar'

const text = Roboto({
  subsets: ["latin"],
  weight: '700'
})

const Header = () => {
  return (
    <div className='fixed z-10 bg-black w-full h-[90px] '>
      <div className='flex h-[32px] ml-[100px] mt-[29px] w-full'>
        <p className={`${text.className} text-[24px] text-white`}>Food<span className={`${text.className} text-[24px] text-[#FF9F0D]`}>tuck</span></p>
        <NavBar/>
        <div className='flex ml-20 bg-black mr-40'>
          <FiSearch className='text-white w-[24px] h-[24px] ml-[20px] hover:text-[#FF9F0D] cursor-pointer'/>
          <PiUser className='text-white w-[24px] h-[24px] ml-[20px] hover:text-[#FF9F0D] cursor-pointer'/>
          <PiTote className='text-white w-[24px] h-[24px] ml-[20px] hover:text-[#FF9F0D] cursor-pointer'/>
        </div>
      </div>
     </div>
  )
}

export default Header

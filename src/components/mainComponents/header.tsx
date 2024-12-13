import React from 'react';
import { Roboto } from 'next/font/google';
import { FiSearch } from "react-icons/fi";
import { PiTote, PiUser } from "react-icons/pi";
import NavBar from './navBar';

const text = Roboto({
  subsets: ["latin"],
  weight: '700',
});

const Header = () => {
  return (
    <div className='fixed z-30 bg-black w-full h-[90px]'>
      <div className='flex h-full items-center justify-between px-4 sm:px-[100px] py-4'>
        {/* Logo Section */}
        <p className={`${text.className} text-[24px] text-white`}>
          Food<span className={`${text.className} text-[24px] text-[#FF9F0D]`}>tuck</span>
        </p>

        {/* Navbar */}
        <NavBar />

        {/* Icons Section */}
        <div className='flex items-center space-x-4 sm:space-x-6'>
          <FiSearch className='text-white w-[24px] h-[24px] hover:text-[#FF9F0D] cursor-pointer' />
          <PiUser className='text-white w-[24px] h-[24px] hover:text-[#FF9F0D] cursor-pointer' />
          <PiTote className='text-white w-[24px] h-[24px] hover:text-[#FF9F0D] cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Header;

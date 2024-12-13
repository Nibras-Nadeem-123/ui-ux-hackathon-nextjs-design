import React from 'react';
import { PiClockClockwiseFill } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { Roboto, Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const text = Roboto({
    subsets: ["latin"],
    weight: '700'
});

const inter = Inter({ subsets: ["latin"], weight: "400" });

const Footer = () => {
    const navList = [
        { name: "About", Link: "/" },
        { name: "News", Link: "/" },
        { name: "Partners", Link: "/" },
        { name: "Team", Link: "/" },
        { name: "Menu", Link: "/" },
        { name: "Contact", Link: "/" },
    ];

    const help = [
        { name: "FAQ", link: "/" },
        { name: "Terms and Condition", link: "/" },
        { name: "Reporting", link: "/" },
        { name: "Documentation", link: "/" },
        { name: "Support Policy", link: "/" },
        { name: "Privacy", link: "/" },
    ];

    return (
        <div className=' absolute w-full bg-[#0D0D0D]'>
            <div className='flex flex-col sm:flex-row w-full sm:h-[112px] space-x-0 sm:space-x-20 px-4 sm:px-20 py-10'>
                <div className='text-center sm:text-left'>
                    <p className={`${text.className} text-[32px] sm:text-[40px] text-white`}><span className='text-[#FF9F0D]'>St</span>ill You Need Our Support ?</p>
                    <p className={`${text.className} text-[16px] sm:text-[18px] text-white opacity-70`}>Don&apos;t wait, make a smart & logical quote here. It&aos;  s pretty easy.</p>
                </div>
                <div className='lg:flex w-full sm:w-[459px] h-[40px] mt-6 sm:mt-0 bg-[#FF9F0D] text-left rounded-[4px]'>
                    <input type='text' placeholder='Enter Your Email' className={`${inter.className} w-full sm:w-[300px] h-[60px] mt-3 px-3 pb-10 bg-transparent text-amber-100 focus:outline-none`} />
                    <div className='w-full sm:w-[163px] h-[40px] bg-white text-[#FF9F0D] text-center rounded-[4px]'>
                        <p className={`${inter.className} text-[16px] p-2 cursor-pointer hover:shadow-md hover:text-amber-600 hover:shadow-gray-200`}>Subscribe Now</p>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-[#FF9F0D] my-10'></div>

            <div className='flex flex-col space-x-20 sm:flex-row sm:w-[1320px] w-full mt-20 sm:space-x-10 px-2 sm:px-20 text-white'>
                {/* about div */}
                <div className='w-full sm:w-[395px] mb-6 sm:mb-0'>
                    <p className={`${text.className} text-[20px]`}>About Us</p>
                    <p className={`${text.className} text-[16px] sm:text-[18px] opacity-70`}>Corporate clients and leisure travelers have been relying on us for dependable, safe, and professional chauffeured car service worldwide.</p>
                    <div className='flex items-center mt-4 space-x-4 bg-[#FF9F0D] rounded-[4px] p-3'>
                        <PiClockClockwiseFill className='text-white w-[40px] h-[40px]' />
                        <div>
                            <p className={`${inter.className} text-[14px]`}>Opening Hours</p>
                            <p className={`${inter.className} text-[14px]`}>Mon - Sat (8.00 AM - 6.00 PM)</p>
                            <p className={`${inter.className} text-[14px]`}>Sunday - Closed</p>
                        </div>
                    </div>
                </div>

               <div className='flex  '>
                 {/* useful links div */}
                 <div className='w-full sm:w-[508px] -mr-60 mb-6 sm:mb-0'>
                    <p className={`${inter.className} text-[18px] mb-4`}>Useful Links</p>
                    {
                        navList.map((nav, i) => (
                            <p key={i}><Link href={nav.Link} className={`${inter.className} text-white focus:text-[#FF9F0D]`}>{nav.name}</Link></p>
                        ))
                    }
                </div>

                {/* Help div */}
                <div className='w-full sm:w-[508px] -mr-80 mb-6 sm:mb-0'>
                    <p className={`${inter.className} text-[18px] mb-4  `}>Help</p>
                    {
                        help.map((nav, i) => (
                            <p key={i}><Link href={nav.link} className={`${inter.className} text-white focus:text-[#FF9F0D]`}>{nav.name}</Link></p>
                        ))
                    }
                </div>
               </div>

                {/* recent post div */}
                <div className='pr-44 w-[516px] space-y-4'>
                    <p className={`${text.className} text-[20px]`}>Recent Posts</p>
                    <div className='flex items-center space-x-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={49} width={60} className='cursor-pointer' />
                        <div>
                            <p className={`${text.className} text-[16px]`}>Is fastfood good for your body?</p>
                            <p className={`${text.className} text-[14px] opacity-[49%]`}>February 28,2022</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={49} width={60} className='cursor-pointer' />
                        <div>
                            <p className={`${text.className} text-[16px]`}>Change your food habit with organic food</p>
                            <p className={`${text.className} text-[14px] opacity-[49%]`}>February 28,2022</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={49} width={60} className='cursor-pointer' />
                        <div>
                            <p className={`${text.className} text-[16px]`}>Do you like fastfood for your life?</p>
                            <p className={`${text.className} text-[14px] opacity-[49%]`}>February 28,2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* main footer */}
            <div className='h-[99px] bg-[#4F4F4F] mt-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 py-3'>
                <p className={`${inter.className} text-[16px] text-white text-center sm:text-left`}>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                <div className='flex space-x-5'>
                    <FaFacebookF className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] cursor-pointer' />
                    <FaTwitter className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] cursor-pointer' />
                    <FaInstagram className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] cursor-pointer' />
                    <FaYoutube className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] cursor-pointer' />
                    <FaPinterest className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React from 'react'
import { PiClockClockwiseFill } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

import { Roboto, Inter } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';

const text = Roboto({
    subsets: ["latin"],
    weight: '700'
})

const inter = Inter({ subsets: ["latin"], weight: "400" })

const Footer = () => {

    const navList = [
        {
            name: "About",
            Link: "/",
        },
        {
            name: "News",
            Link: "/",
        },
        {
            name: "Partners",
            Link: "/",
        },
        {
            name: "Team",
            Link: "/",
        },
        {
            name: "Menu",
            Link: "/",
        },
        {
            name: "Contact",
            Link: "/",
        },
    ]

    const help = [
        {
            name: "FAQ",
            link: "/",
        },
        {
            name: "Terms and Condition",
            link: "/",
        },
        {
            name: "Reporting",
            link: "/",
        },
        {
            name: "Documentation",
            link: "/",
        },
        {
            name: "Support Policy",
            link: "/",
        },
        {
            name: "Privacy",
            link: "/",
        },
    ]

    return (
        <div className='h-[774px] w-screen bg-[#0D0D0D]'>
            <div className='flex w-full h-[112px] space-x-20 -ml-20'>
                <div>
                    <p className={`${text.className} w-[439px] h-[40px] text-[32px] pt-[120px] ml-[300px] text-white`}><span className='text-[#FF9F0D]'>St</span>ill You Need Our Support ?</p>
                    <p style={{ fontWeight: 400 }} className={`${text.className} h-[23.94px] pt-[65px] ml-[300px] w-[457px] text-[16px] text-white`}>Don&apos;t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className='w-[459px] h-[55.86px] mt-[120px] bg-[#FF9F0D] text-left justify-center text-white rounded-[4px]'>
                    <input type='text' placeholder='Enter Your Email' className={`${inter.className} opacity-[59%] w-[128px] h-[24px] mt-[15.96px] ml-3 focus:outline-none bg-transparent text-white`}/>
                    <div className='w-[163px] h-[55.86px] -mt-10 ml-[296px] rounded-[4px] bg-white text-[#FF9F0D'>
                        <p className={`${inter.className} text-[16px] text-[#FF9F0D] p-3 cursor-pointer hover:shadow-md hover:text-amber-600 hover:shadow-gray-200 `}>Subscribe Now</p>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-[#FF9F0D] border-spacing-7 w-[999px] ml-[220px] mr-[100px] mt-32'></div>

            <div className='flex w-[1320px]  h-[331px] mt-[78px] text-white'>
               
                {/* about div */}
                <div className='w-[395.2px] h-[261.21px] -mt-[100px]  ml-[100px]'>
                    <div className='w-[395.2px] h-[261.21px] mt-[100px] '>
                        <p className={`${text.className} text-[20px]`}>About Us.</p>
                        <p style={{ fontWeight: 400 }} className={`${text.className} text-[18px]`}>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                    </div>
                    <div className='flex space-x-16 w-[77.23px] -mt-24 rounded-[3px] p-3 bg-[#FF9F0D] '>
                        <div>
                            <PiClockClockwiseFill className='text-white w-[39.61px] mx-2 h-[39.33px]' />

                        </div>
                        <div className='text-white -my-3'>
                            <p className={`${inter.className} w-[138.199px]  text-[14x]`}>Opening Houres</p>
                            <p className={`${inter.className} w-[200.199px]  text-[14x]`}>Mon - Sat(8.00 - 6.00)</p>
                            <p className={`${inter.className} w-[138.199px] text-[14x]`}>Sunday - Closed</p>
                        </div>
                    </div>
                </div>
                {/* useful links div */}
                <div className='space-y-4 w-[508px] h-[24px] mt-[4px] ml-[51px]'>
                    {
                        navList.map((nav, i) => (
                            <p key={i}><Link href={nav.Link} className={`${inter.className} text-white focus:text-[#FF9F0D]`}>{nav.name}</Link></p>
                        ))
                    }
                </div>
                {/* Help div */}
                <div className='space-y-4 w-[508px] h-[24px] mt-[4px] -ml-[301px]'>
                    {
                        help.map((nav, i) => (
                            <p key={i}><Link href={nav.link} className={`${inter.className} text-white focus:text-[#FF9F0D]`}>{nav.name}</Link></p>
                        ))
                    }
                </div>
                {/* recent post div */}
                <div className='w-[216.35px] h-[100.35px] text-white -ml-[231px] space-y-5'>
                    <p className={`${text.className} text-[20px]`}>Recent Post</p>
                    <div className='flex gap-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={49.76} width={60.24} className='cursor-pointer' />
                        <div className='mt-2 space-y-3'>
                            <p style={{ fontWeight: 400 }} className={`${text.className} text-[16px]`}>Is fastfood good for
                                your body?</p>
                            <p className={`${text.className} text-[14px] opacity-[49%]`}>February 28,2022</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={49.76} width={60.24} className='cursor-pointer' />
                        <div className='mt-2 -space-y-1'>
                            <p style={{ fontWeight: 400 }} className={`${text.className} text-[16px] -mt-4`}>Change your food habit
                                With organic food</p>
                            <p className={`${text.className} text-[14px] opacity-[49%] mt-1`}>February 28,2022</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={"/recentPostFooter.jpg"} alt='' height={100} width={60.24} className='cursor-pointer' />
                        <div className='mt-2 space-y-3'>
                            <p style={{ fontWeight: 400 }} className={`${text.className} text-[16px]`}>Do you like fastfood for
                                your life?</p>
                            <p className={`${text.className} text-[14px] opacity-[49%]`}>February 28,2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* main footer */}
            <div className='h-[99px] bg-[#4F4F4F] mt-10 pl-[100px] pt-3'>
                <div className='flex gap-80 w-[1318px] h-[33px] p-5 mt-'>
                    <p className={`${inter.className} text-[16px] text-white`}>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className='flex space-x-5'>
                        <FaFacebookF className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] hover:w-[40px] cursor-pointer focus:bg-gray-300' />
                        <FaTwitter className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] hover:w-[40px] cursor-pointer' />
                        <FaInstagram className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] hover:w-[40px] cursor-pointer' />
                        <FaYoutube className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] hover:w-[40px] cursor-pointer' />
                        <FaPinterest className='w-[38.85px] h-[38px] rounded-[2px] bg-white p-2 hover:text-[#FF9F0D] hover:w-[40px] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

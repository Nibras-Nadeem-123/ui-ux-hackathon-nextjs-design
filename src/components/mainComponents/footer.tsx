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
        <div className='w-full bg-[#0D0D0D]'>
            {/* Support Section */}
            <div className='flex flex-col sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-6 px-4 sm:px-20 py-10'>
                <div className='text-center sm:text-left flex-1'>
                    <p className={`${text.className} text-[24px] sm:text-[32px] lg:text-[40px] text-white`}>
                        <span className='text-[#FF9F0D]'>St</span>ill You Need Our Support ?
                    </p>
                    <p className={`${text.className} text-[14px] sm:text-[16px] lg:text-[18px] text-white opacity-70 mt-2`}>Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0'>
                    <input 
                        type='text' 
                        placeholder='Enter Your Email' 
                        className={`${inter.className} w-full sm:w-[300px] h-[50px] px-4 bg-transparent border border-[#FF9F0D] rounded focus:outline-none text-white`} 
                    />
                    <button 
                        className='w-full sm:w-[150px] h-[50px] bg-[#FF9F0D] text-white rounded hover:bg-[#e68f0d] mt-2 sm:mt-0'>
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className='border-t border-[#FF9F0D] my-10'></div>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row lg:space-x-10 px-4 sm:px-20 text-white space-y-10 lg:space-y-0'>
                {/* About Us */}
                <div className='flex-1'>
                    <p className={`${text.className} text-[20px]`}>About Us</p>
                    <p className={`${inter.className} text-[14px] sm:text-[16px] opacity-70 mt-2`}>Corporate clients and leisure travelers have been relying on us for dependable, safe, and professional chauffeured car service worldwide.</p>
                    <div className='flex items-center mt-4 space-x-4 bg-[#FF9F0D] rounded p-3'>
                        <PiClockClockwiseFill className='text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' />
                        <div>
                            <p className={`${inter.className} text-[12px] lg:text-[14px]`}>Opening Hours</p>
                            <p className={`${inter.className} text-[12px] lg:text-[14px]`}>Mon - Sat (8.00 AM - 6.00 PM)</p>
                            <p className={`${inter.className} text-[12px] lg:text-[14px]`}>Sunday - Closed</p>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className='flex-1 flex justify-between lg:space-x-10'>
                    <div>
                        <p className={`${inter.className} text-[18px] mb-4`}>Useful Links</p>
                        {navList.map((nav, i) => (
                            <p key={i} className='mb-2'>
                                <Link href={nav.Link} className={`${inter.className} text-white hover:text-[#FF9F0D]`}>{nav.name}</Link>
                            </p>
                        ))}
                    </div>
                    <div>
                        <p className={`${inter.className} text-[18px] mb-4`}>Help</p>
                        {help.map((item, i) => (
                            <p key={i} className='mb-2'>
                                <Link href={item.link} className={`${inter.className} text-white hover:text-[#FF9F0D]`}>{item.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>

                {/* Recent Posts */}
                <div className='flex-1'>
                    <p className={`${text.className} text-[20px] mb-4`}>Recent Posts</p>
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className='flex items-center mb-4 space-x-3'>
                            <Image src="/recentPostFooter.jpg" alt='Recent Post' height={50} width={60} className='cursor-pointer rounded' />
                            <div>
                                <p className={`${text.className} text-[14px] sm:text-[16px]`}>Sample post title here</p>
                                <p className={`${text.className} text-[12px] sm:text-[14px] opacity-50`}>February 28, 2022</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='h-auto bg-[#4F4F4F] mt-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 py-3 space-y-4 sm:space-y-0'>
                <p className={`${inter.className} text-[14px] sm:text-[16px] text-center sm:text-left text-white`}>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                <div className='flex space-x-4'>
                    {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, i) => (
                        <Icon key={i} className='w-8 h-8 text-black bg-white p-2 rounded hover:text-[#FF9F0D] cursor-pointer' />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;

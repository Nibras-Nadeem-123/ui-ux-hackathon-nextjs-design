import { Inter, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const inter = Inter({ subsets: ["latin"], weight: "400" })
const text = Roboto({ subsets: ["latin"], weight: "700" })

const ContentRightSide = () => {
    return (
        <div className='w-full max-w-[424px] h-auto mt-20 mx-auto'>
            {/* Search your keyword */}
            <div className='flex w-full max-w-[421.82px] h-[70px] border-2 border-[#E0E0E0] mt-2'>
                <input type='text' placeholder='Enter your Keyword..' className={`${inter.className} text-[#5C727D] text-[16px] ml-4 focus:outline-none w-full`} />
                <button className='bg-[#FF9F0D] hover:bg-amber-400 w-[76px] h-[70px] ml-4'>
                    <HiMiniMagnifyingGlass className='h-[22px] w-[24px] mx-auto text-white' />
                </button>
            </div>

            {/* Blogger and Photographer Div */}
            <div className='w-full max-w-[424px] h-auto mt-10 border-2 border-[#E0E0E0]'>
                {/* Image */}
                <div className='w-[321.52px] mx-auto pt-8'>
                    <Image src="/princeMiyako.jpg" alt='Prince Miyako' height={129.43} width={147.7} className='rounded-full mx-auto' />
                </div>
                {/* Introduction */}
                <div className='text-center mt-5'>
                    <p className={`${text.className} text-2xl text-[#333333]`}>Prince Miyako</p>
                    <p className={`${inter.className} text-lg text-[#828282]`}>Blogger/Photographer</p>
                    {/* Reviews */}
                    <div className='flex justify-center gap-2 mt-2'>
                        {[...Array(5)].map((_, index) => (
                            <IoStarSharp key={index} className='w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        ))}
                        <p className={`${inter.className} text-lg`}>(1 Review)</p>
                    </div>
                    {/* Description */}
                    <div className='mt-5 px-6'>
                        <p className={`${text.className} text-[#828282] text-sm`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.</p>
                        <div className='flex justify-center gap-4 mt-5'>
                            <FaFacebookF className='w-5 h-5 hover:text-[#FF9F0D] cursor-pointer' />
                            <FaTwitter className='w-5 h-5 hover:text-[#FF9F0D] cursor-pointer' />
                            <FaInstagram className='w-5 h-5 hover:text-[#FF9F0D] cursor-pointer' />
                            <FaPinterest className='w-5 h-5 hover:text-[#FF9F0D] cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Posts */}
            <div className='w-full max-w-[423px] h-auto border-2 border-[#E0E0E0] mt-8'>
                <p className={`${text.className} text-2xl text-[#333333] mt-8 ml-12`}>Recent Post</p>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className='mt-8'>
                        <div className='flex gap-5 w-[323px] h-[107px] mx-12'>
                            <Image src={`/blogpost${index + 1}.jpg`} alt={`Blog Post ${index + 1}`} height={91.58} width={110} className='rounded-[6px] cursor-pointer' />
                            <div className={`${text.className} space-y-3 mt-2`}>
                                <p className='text-[#828282] text-[14px]'>June 22, 2020</p>
                                <p className='text-[#4F4F4F] text-[16px]'>Lorem ipsum dolor sit cing elit, sed do.</p>
                            </div>
                        </div>
                        <div className='border-[1px] mt-5 mx-12'></div>
                    </div>
                ))}
            </div>

            {/* Filter By Menu */}
            <div className='w-full max-w-[423px] h-auto border-2 border-[#E0E0E0] mt-8 px-6'>
                <p className={`${text.className} text-2xl text-[#333333] mt-8`}>Filter By Menu</p>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className='flex gap-4 mt-5'>
                        <Image src={`/blogmenu${index + 1}.jpg`} alt={`Blog Menu ${index + 1}`} width={79} height={58} className='rounded-[6px] cursor-pointer' />
                        <p className={`${text.className} text-[16px] text-[#333333] mt-5`}>Item {index + 1}</p>
                        <p className={`${text.className} text-[16px] text-[#333333] mt-5 ml-16`}>{(index + 1) * 10}</p>
                    </div>
                ))}
            </div>

            {/* Popular Tags */}
            <div className='w-full max-w-[423px] h-auto border-2 border-[#E0E0E0] mt-8 px-6'>
                <p className={`${text.className} text-2xl text-[#333333] mt-8`}>Popular Tags</p>
                <div className='flex flex-wrap gap-3 mt-4'>
                    {['Sandwich', 'Tikka', 'Bbq', 'Restaurant', 'Chicken Sharma', 'Health', 'Fastfood', 'Food', 'Pizza', 'Burger'].map((tag, index) => (
                        <span key={index} className={`${text.className} text-[14px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContentRightSide;

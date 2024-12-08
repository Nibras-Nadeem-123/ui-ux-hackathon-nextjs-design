import { Inter, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { FaEye, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const inter = Inter({ subsets: ["latin"], weight: "400" })
const text = Roboto({ subsets: ["latin"], weight: "700" })

const ContentRightSide = () => {
    return (
        <div className='w-[424px] h-[2501px] -ml-40 mt-20'>
            {/* search your keyword */}
            <div className='flex w-[421.82px] h-[70px] border-2 border-[#E0E0E0] mt-2 '>
                <p className='my-auto'><input type='text' placeholder='Enter your Keyword..' className={`${inter.className} text-[#5C727D] text-[16px] ml-4 focus:outline-none`} /></p>
                <button className='bg-[#FF9F0D] hover:bg-amber-400 w-[76px] -mt-0.5 ml-28 h-[70px]'><HiMiniMagnifyingGlass className='h-[22px] w-[24px] mx-6 text-white focus:outline-none' /></button>
            </div>
            {/* Blogger and PhotoGrapher Div */}
            <div className='w-[424px] h-[423px] mt-10 border-2 border-[#E0E0E0]'>
                {/* image */}
                <div className='w-[321.52px] px-20 pt-8'>
                    <Image src={"/princeMiyako.jpg"} alt='' height={129.43} width={147.7} className='rounded-full ml-14' />
                </div>
                {/* introduction */}
                <div className='w-[218.8px] h-[86.63px] mt-5 mx-auto'>
                    <p className={`${text.className} text-20px text-[#333333] ml-12`}>Prince Miyako</p>
                    <p className={`${inter.className} text-[16px] ml-5 text-[#828282]`}>Blogger/Photographer</p>
                    {/* reviews */}
                    <div className='flex gap-2'>
                        <IoStarSharp className='mt-1 w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        <IoStarSharp className='mt-1 w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        <IoStarSharp className='mt-1 w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        <IoStarSharp className='mt-1 w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        <IoStarSharp className='mt-1 w-[18.85px] h-[18.36px] text-[#FF9F0D]' />
                        <p className={`${inter.className} text-[16px]`}>(1 Review)</p>
                    </div>
                    {/* description */}
                    <div className='w-[321.52px] h-[592px] -ml-10 text-center'>
                        <p className={`${text.className} text-[16px] text-[#828282]`}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.Veritatis distinctio, odio
                            eligendi suscipit reprehenderit atque</p>
                        <p className='flex gap-4 w-[104.49px] h-[19.83px] ml-20 mt-5 text-[#333333]'>
                            <FaFacebookF className='w-[11.48px] h-[19.66px] hover:text-[#FF9F0D] cursor-pointer ' />
                            <FaTwitter className='w-[18.37px] h-[19.66px] hover:text-[#FF9F0D] cursor-pointer ' />
                            <FaInstagram className='w-[16.08px] h-[19.66px] hover:text-[#FF9F0D] cursor-pointer ' />
                            <FaPinterest className='w-[18.37px] h-[19.66px] hover:text-[#FF9F0D] cursor-pointer ' />
                        </p>
                    </div>

                </div>
            </div>
            {/* recent post */}
            <div className='w-[423px] h-[742px] border-2 border-[#E0E0E0] mt-8'>
                <p className={`${text.className} text-[20px] w-[116px] h-[28px] mt-8 ml-12`}>Recent Post</p>
                {/* 1st post */}
                <div>
                    <div className='flex gap-5 w-[323px] h-[107px] ml-12 mt-8'>
                        <Image src={"/blogpost1.jpg"} alt='' height={91.58} width={110} className='rounded-[6px] cursor-pointer' />
                        <div className={`${text.className} space-y-3 mt-2`}>
                            <p className='text-[#828282] text-[14px]'>June 22, 2020</p>
                            <p className='text-[#4F4F4F] text-[16px]'>Lorem ipsum dolor sit cing
                                elit, sed do.</p>
                        </div>
                    </div>
                    <div className='border-[1px] mt-5 mr-12 ml-12'>

                    </div>
                </div>
                {/* 2nd post */}
                <div>
                    <div className='flex gap-5 w-[323px] h-[107px] ml-12 mt-8'>
                        <Image src={"/blogpost2.jpg"} alt='' height={91.58} width={110} className='rounded-[6px]  cursor-pointer' />
                        <div className={`${text.className} space-y-3 mt-2`}>
                            <p className='text-[#828282] text-[14px]'>June 22, 2020</p>
                            <p className='text-[#4F4F4F] text-[16px]'>Lorem ipsum dolor sit cing
                                elit, sed do.</p>
                        </div>
                    </div>
                    <div className='border-[1px] mt-5 mr-12 ml-12'>

                    </div>
                </div>
                {/* 3rd post */}
                <div>
                    <div className='flex gap-5 w-[323px] h-[107px] ml-12 mt-8'>
                        <Image src={"/blogpost3.jpg"} alt='' height={91.58} width={110} className='rounded-[6px]  cursor-pointer' />
                        <div className={`${text.className} space-y-3 mt-2`}>
                            <p className='text-[#828282] text-[14px]'>June 22, 2020</p>
                            <p className='text-[#4F4F4F] text-[16px]'>Lorem ipsum dolor sit cing
                                elit, sed do.</p>
                        </div>
                    </div>
                    <div className='border-[1px] mt-5 mr-12 ml-12'>

                    </div>
                </div>
                {/* 4th post */}
                <div>
                    <div className='flex gap-5 w-[323px] h-[107px] ml-12 mt-8'>
                        <Image src={"/blogpost4.jpg"} alt='' height={91.58} width={110} className='rounded-[6px]  cursor-pointer' />
                        <div className={`${text.className} space-y-3 mt-2`}>
                            <p className='text-[#828282] text-[14px]'>June 22, 2020</p>
                            <p className='text-[#4F4F4F] text-[16px]'>Lorem ipsum dolor sit cing
                                elit, sed do.</p>
                        </div>
                    </div>
                    <div className='border-[1px] mt-5 mr-12 ml-12'>

                    </div>
                </div>
            </div>
            {/* filter by menu */}
            <div className='w-[423px] h-[540px] border-2 border-[#E0E0E0] mt-8 pl-12'>
                <p className={`${text.className} text-[20px] w-[140px] h-[28px] mt-8 `}>Filter By Menu</p>
                {/* 1st menu */}
                <div className='flex gap-4 mt-5'>
                    <Image src={"/blogmenu1.jpg"} alt='' width={79} height={58} className='rounded-[6px] cursor-pointer' />
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333]`}>Chicken Fry</p>
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333] ml-20`}>26</p>
                </div>
                {/* 2nd menu */}
                <div className='flex gap-4 mt-5'>
                    <Image src={"/blogmenu2.jpg"} alt='' width={79} height={58} className='rounded-[6px] cursor-pointer' />
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333]`}>Burger Food</p>
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333] ml-[78px]`}>46</p>
                </div>
                {/* 3rd menu */}
                <div className='flex gap-4 mt-5'>
                    <Image src={"/blogmenu3.jpg"} alt='' width={79} height={58} className='rounded-[6px] cursor-pointer' />
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333]`}>Pizza</p>
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333] ml-32`}>16</p>
                </div>
                {/* 4th menu */}
                <div className='flex gap-4 mt-5'>
                    <Image src={"/blogmenu4.jpg"} alt='' width={79} height={58} className='rounded-[6px] cursor-pointer' />
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333]`}>Fresh Fruits</p>
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333] ml-[84px]`}>36</p>
                </div>
                {/* 5th menu */}
                <div className='flex gap-4 mt-5'>
                    <Image src={"/blogmenu5.jpg"} alt='' width={79} height={58} className='rounded-[6px] cursor-pointer' />
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333]`}>Vegetables</p>
                    <p className={`${text.className} text-[16px] mt-5 text-[#333333] ml-[90px]`}>16</p>
                </div>
            </div>
            {/* popular tags */}
            <div className='w-[423px] h-[308px] border-2 border-[#E0E0E0] mt-8 pl-12'>
                <div className='w-[126px] h-[28px] '>
                    <p className={`${text.className} text-[20px] text-[#333333] mt-5`}>Populer Tags</p>
                    <div className='flex flex-col mt-4'>
                        <div className='flex gap-3 mt-3'>
                            {/* tag 1 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Sandwich</span>
                        {/* tag 2 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Tikka</span>
                        {/* tag 3 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Bbq</span>
                        </div>
                      <div className='flex gap-3 mt-3'>
                          {/* tag 4 */}
                          <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[245px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Restaurant</span>
                        {/* tag 5 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} flex text-[16px] w-[158px] h-[40px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-3 hover:bg-gray-200 cursor-pointer`}><p className='mr-2'>Chicken</p><p> Sharma</p></span>
                      </div>
                       <div className='flex gap-3 mt-3'>
                         {/* tag 6 */}
                         <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Health</span>
                        {/* tag 7 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Fastfood</span>
                        {/* tag 8 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Food</span>
                       </div>
                        <div className='flex gap-3 mt-3'>
                            {/* tag 9 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Pizza</span>
                        {/* tag 10 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Burger</span>
                        {/* tag 11 */}
                        <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Chicken</span>
                        </div>
                    </div>
                </div>

            </div>
            {/* photo gallery */}
            <div className='w-[422px] h-[316px] border-2 border-[#E0E0E0] mt-8 pl-12'>
                <p className={`${text.className} w-[131px] h-[28px] text-[#333333] text-[20px] mt-5 mb-8`}>Photo Gallery</p>
                <div className='grid grid-cols-3 gap-3'>
                <div className='h-[85px] w-[100px] bg-[url("/photo1.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                                        <div className='h-[85px] w-[100px] bg-[url("/photo2.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                    <div className='h-[85px] w-[100px] bg-[url("/photo3.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                    <div className='h-[85px] w-[100px] bg-[url("/photo4.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                    <div className='h-[85px] w-[100px] bg-[url("/photo5.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                    <div className='h-[85px] w-[100px] bg-[url("/photo6.jpg")] bg-cover relative'>
                         <p className='hover:bg-black/70 inset-0 z-10 absolute hover:text-white px-10 py-8'><FaEye className='text-transparent hover:text-white h-[22px]  w-[24px]' /></p>
                    </div>
                </div>
            </div>
            {/* follow us */}
            <div className='w-[422px] h-[158px] border-2 border-[#E0E0E0] mt-8 pl-12'>
                <div className='w-[94px] h-[28px] mt-5'>
                    <p className={`${text.className} text-[20px] text-[#333333]`}>Follow Us</p>
                </div>
                <div className='flex gap-4 mt-8'>
                    <FaTwitter className='w-[52px] h-[46.51px] bg-[#C4C4C4] hover:bg-[#FF9F0D] hover:text-white p-2'/>
                    <FaYoutube className='w-[52px] h-[46.51px] bg-[#C4C4C4] hover:bg-[#FF9F0D] hover:text-white p-2'/>
                    <FaPinterest className='w-[52px] h-[46.51px] bg-[#C4C4C4] hover:bg-[#FF9F0D] hover:text-white p-2'/>
                    <FaInstagram className='w-[52px] h-[46.51px] bg-[#C4C4C4] hover:bg-[#FF9F0D] hover:text-white p-2'/>
                    <FaFacebookF className='w-[52px] h-[46.51px] bg-[#C4C4C4] hover:bg-[#FF9F0D] hover:text-white p-2'/>
                </div>
            </div>
        </div>
    )
}

export default ContentRightSide

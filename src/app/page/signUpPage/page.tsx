"use client"
import Footer from '@/components/mainComponents/footer';
import Header from '@/components/mainComponents/header';
import HeroSection from '@/components/shoppingCart/heroSection';
import { Inter, Roboto } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { PiUserLight } from 'react-icons/pi';

const text = Roboto({ subsets: ["latin"], weight: "700" });
const inter = Inter({subsets:["latin"]})

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div>
      <Header />
      {/* hero section */}
      <div className='relative bg-[url("/page7Bg.jpg")] bg-cover h-[410px] w-full bg-center'>
         <div className='absolute inset-0 bg-black/30 my-auto mx-auto'>
            <p className={`${text.className} text-white text-[48px] mt-[168px] ml-[580px]`}>Sign Up Page</p>
            <p className={`${inter.className} text-white text-[20px] ml-[610px] mt-3`}><Link href={"/blog"} className='hover:text-[#FF9F0D] cursor-pointer'>Page</Link> &gt; <span>Sign Up page</span></p>
         </div>
     </div>
       <div className='h-full w-full px-72 ml-40 py-40'>
        <form onSubmit={handleSubmit} className='h-[694px] w-[564px] shadow-md shadow-[#E0E0E0] p-5'>
          {/* sign in heading */}
          <p className={`${text.className} text-center mb-5 text-[20px] text-[#333333]`}>Sign Up</p>
          {/* name input */}
          <div className='w-[360px] ml-20 text-center justify-center h-[44px] relative'>
            <input
              type='text'
              placeholder=" "
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className='w-full h-full p-2 pl-10 border border-[#E0E0E0] rounded-md'
              required
            />
            <PiUserLight className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${emailFocused || email ? 'top-1/4 text-sm' : ''}`} />
            <label className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${emailFocused || email ? 'text-sm top-1/4' : ''}`}>
               Name
            </label>
          </div>

          {/* email input */}
          <div className='w-[360px] ml-20 text-center justify-center mt-4 h-[44px] relative'>
            <input
              type='email'
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className='w-full h-full p-2 pl-10 border border-[#E0E0E0] rounded-md'
              required
            />
            <MdOutlineEmail className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${emailFocused || email ? 'top-1/4 text-sm' : ''}`} />
            <label className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${emailFocused || email ? 'text-sm top-1/4' : ''}`}>
              Email
            </label>
          </div>

          {/* password input */}
          <div className='w-[360px] ml-20 text-center justify-center h-[44px] relative mt-4'>
            <input
              type='password'
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className='w-full h-full p-2 pl-10 border border-[#E0E0E0] rounded-md'
              required
            />
            <MdOutlineEmail className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${passwordFocused || password ? 'top-1/4 text-sm' : ''}`} />
            <label className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${passwordFocused || password ? 'text-sm top-1/4' : ''}`}>
              Password
            </label>
          </div>

          {/* remember me checkbox */}
          <div className='mt-4 flex ml-20 text-center items-center'>
            <input
              type='checkbox'
              className='w-[16px] h-[16px] mr-2'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <p className={`${text.className} text-center justify-center text-[14px] text-[#333333]`}>Remember me?</p>
          </div>

          {/* submit button */}
          <div className='mt-6 text-center'>
            <button
              type='submit'
              className={`${text.className} w-[360px] text-[16px] h-[44px] hover:bg-amber-600 bg-[#FF9F0D] text-white rounded-md font-bold`}
            >
              Sign In
            </button>
          </div>
          {/* forget password link */}
          <div className='text-right mr-20 mt-5'>
            <Link href={"/contact"} style={{fontWeight: 400}} className={`${text.className} text-right hover:underline hover:text-blue-500 text-[14px] text-[#828282]`}>Forget password?</Link>
          </div>
          {/* border line */}
          <div className='w-[360px] h-[32px] border-t-2 border-[#E0E0E0] mt-12 ml-20 relative'>

          </div>
          {/*  OR */}
          <div className={` absolute -mt-12 ml-60 bg-white py-1 pl-2 pr-1 w-[40px] h-[32px] border-2 border-[#E0E0E0] text-gray-800`}>
            OR
          </div>
          {/* continue with google */}
          <div className='flex justify-start gap-20 w-[360px] h-[44px] mt-8 border-2 ml-20 p-3'>
            <FcGoogle className='w-[20px] h-[20px]'/>
            <p style={{fontWeight: 400}} className={`${text.className} text-[#4F4F4F] text-[16px]`}>Sign up with Google</p>
          </div>
          {/* continue with apple */}
          <div className='flex justify-start gap-20 w-[360px] h-[44px] mt-8 border-2 ml-20 p-3'>
            <IoLogoApple className='w-[20px] h-[20px]'/>
            <p style={{fontWeight: 400}} className={`${text.className} text-[#4F4F4F] text-[16px]`}>Sign up with Apple</p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;


import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className='w-screen bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight text-white font-bold ml-20 text-center mb-4 sm:mb-6'>
            Checkout page
          </h1>
          <div className='text-base sm:text-lg md:text-xl ml-20 flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/checkOut" className='text-[#FF9F0D]'>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
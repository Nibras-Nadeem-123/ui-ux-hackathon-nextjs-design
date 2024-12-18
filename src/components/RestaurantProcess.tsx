import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import Button from './ui/Button'
import { Great_Vibes } from 'next/font/google'

const letter = Great_Vibes({subsets:["latin"], weight: "400"})

const RestaurantProcess = () => {
  return (
    <section className="relative min-h-[600px] w-screen md:-mx-[10vw]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image 
          src="/foodpic2.jpeg" 
          alt="Process background" 
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container lg:mx-60 text-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl flex flex-col ">
          {/* Header */}
          <h3 className={` ${letter.className} text-[#FF9F0D] font-great-vibes text-3xl mb-4`}>
            Restaurant Active Process
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-[#FF9F0D]">We</span> Document Every Food
            <br />
            Bean Process untile it is saved
          </h2>
          <p className="text-gray-300 text-lg mb-8 mx-20 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
          </p>

          {/* Action Buttons */}
          <div className="flex items-center text-center mx-60 gap-6">
            <Button 
              variant="outline"
              size="lg"
            >
              Read More
            </Button>
            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90 transition-colors">
              <FaPlay className="ml-1" />
            </button>
            <span className="text-white text-lg">
              Play Video
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantProcess 
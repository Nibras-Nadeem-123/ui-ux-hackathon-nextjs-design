import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const RestaurantProcess = () => {
  return (
    <section className="relative min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bottmBg.png" 
          alt="Process background" 
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 py-16 sm:py-24 md:py-32">
        <div className="lg:max-w-3xl mx-auto flex flex-col items-center sm:-ml-10 md:items-start sm:text-center">
          {/* Header */}
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl sm:text-4xl lg:text-5xl mb-4 text-center">
            Restaurant Active Process
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center sm:text-center">
            <span className="text-[#FF9F0D]">We</span> Document Every Food
            <br className="hidden sm:block" />
            Bean Process until it is saved
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-3xl text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <button 
              className="outline size-10 text-white bg-transparent border border-[#FF9F0D] py-2 px-6 rounded-md hover:bg-[#FF9F0D] hover:text-white transition"
            >
              Read More
            </button>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90 transition-colors">
                <FaPlay className="ml-1" />
              </button>
              <span className="text-white text-lg sm:text-xl">
                Play Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantProcess

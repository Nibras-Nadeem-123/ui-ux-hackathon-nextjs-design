import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { Great_Vibes } from 'next/font/google'
import { PiQuotesThin } from 'react-icons/pi'

const letter = Great_Vibes({ subsets: ["latin"], weight: "400" })

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: '/testimonial1.png',
      name: 'Alamin Hasan',
      role: 'Food Specialist',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
    },
    {
        id: 2,
        image: '/testimonial1.jpeg',
        name: 'Alamin Hasan',
        role: 'Food Specialist',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
      },
      {
        id: 3,
        image: '/testimonial1.png',
        name: 'Alamin Hasan',
        role: 'Food Specialist',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
    },
    {
        id: 4,
        image: '/testimonial1.png',
        name: 'Alamin Hasan',
        role: 'Food Specialist',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
      }
    // Add more testimonials for carousel
  ]

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h3 className={`${letter.className} text-[#FF9F0D] font-great-vibes text-3xl text-left mb-8`}>
          Testimonials
        </h3>
        <h1 className="text-white text-4xl mt-8 mb-8 font-bold text-left">
            What Our Clients Say
        </h1>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl p-12">
            
          {/* Quote Icon */}
            {/* Quote Icon */}
          <div className="flex justify-center mb-8 ">
              <Image src="/testimonial1.jpeg" alt="quote" width={200} height={250} className="object-contain rounded-full -mt-40" />
          </div>
          <div className="flex justify-center mb-8">
            <PiQuotesThin  className="text-[#FF9F0D] text-5xl" />
          </div>

          {/* Testimonial Content */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {testimonials[0].text}
            </p>

            

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-2xl ${
                    index < testimonials[0].rating
                      ? 'text-[#FF9F0D]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Name and Role */}
            <h4 className="text-2xl font-bold mb-2">
              {testimonials[0].name}
            </h4>
            <p className="text-gray-500">
              {testimonials[0].role}
            </p>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 0
                    ? 'bg-[#FF9F0D]'
                    : 'bg-[#FF9F0D]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 
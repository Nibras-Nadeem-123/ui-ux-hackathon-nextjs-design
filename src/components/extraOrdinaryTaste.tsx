import React from 'react'
import Image from 'next/image'
import { FaHamburger, FaCookieBite, FaWineGlass } from 'react-icons/fa'
import { Great_Vibes } from 'next/font/google'

const letter = Great_Vibes({subsets:["latin"], weight: "400"})

const ExtraordinaryTaste = () => {
  const features = [
    { icon: <FaHamburger className="w-8 h-8" />, label: 'Fast Food' },
    { icon: <FaCookieBite className="w-8 h-8" />, label: 'Lunch' },
    { icon: <FaWineGlass className="w-8 h-8" />, label: 'Dinner' },
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* First row */}
            <div className="col-span-2 relative h-[280px]">
              <Image
                src="/yougot1.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>
            <div className="relative top-[80px] h-[200px]">
              <Image
                src="/yougot2.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>

            {/* Bottom row */}
            <div className="relative h-[280px]">
              <Image
                src="/yougot3.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/yougot4.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>
            <div>
            <div className="relative h-[140px] mb-4">
              <Image
                src="/yougot5.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>
            <div className="relative h-[140px]">
              <Image
                src="/yougot6.jpg"
                alt="Food image"
                fill
                className="rounded object-cover"
              />
            </div>



            </div>
            
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className={`${letter.className} text-[#FF9F0D] font-great-vibes text-3xl mb-4`}>
                Why Choose us
              </h3>
              <h2 className="text-[#FF9F0D] text-5xl font-bold mb-6">
                Ex<span className="text-white">tra ordinary taste</span>
                <br />
                <span className="text-white">And Experience</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Necessitatibus, libero accusamus laborum deserunt ratione 
              dolor officiis praesentium! Deserunt magni aperiam dolor eius 
              dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#FF9F0D] w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Experience Counter */}
            <div className="flex items-center gap-6 mx-auto">
              <div className="flex items-center bg-white w-[300px] border-l-8 gap-4 border-[#FF9F0D] rounded-xl p-4">
                <div className="text-[#FF9F0D] text-5xl font-bold mb-2">
                  30+
                </div>
                <div className=" text-[#1E1E1E] text-xl">
                  Years of<br />
                  <b>Experienced</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraordinaryTaste 
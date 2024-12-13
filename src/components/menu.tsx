import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'

const letter = Great_Vibes({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"], weight: "700" })

const Menu = () => {
  const categories = [
    { id: 1, name: 'Breakfast', active: true },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Drink' },
    { id: 6, name: 'Snack' },
    { id: 7, name: 'Soups' },
  ]

  const menuItems = [
    { image: '/menufood1.jpeg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/menufood5.jpeg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/yougot4.jpg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/blogpost4.jpg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/menufood3.jpeg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/foodpic3.jpeg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/menufood4.jpeg', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
    { image: '/food4.png', title: 'Lettuce Leaf', description: 'Lacus nisi, et ac dapibus velit in consequat.', price: '12.5' },
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className={`${letter.className} text-[#FF9F0D] text-3xl mb-2`}>
            Choose & pick
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            Fr<span className="text-white">om Our Menu</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="lg:flex justify-between max-w-4xl mx-auto mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`text-xl ${category.active
                ? 'text-[#FF9F0D] font-bold'
                : 'text-white font-normal hover:text-[#FF9F0D] transition-colors'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Images */}
        <div className="lg:flex lg:flex-col grid md:flex-row justify-evenly items-center relative">
          <div className="flex flex-col items-center">
            <Image
              src="/menu1a.png"
              alt="Our Menu Top"
              width={515}
              height={500}
              className="absolute w-[515px] h-[406px] object-contain"
            />
            <Image
              src="/menu1.png"
              alt="Our Menu Bottom"
              width={615}
              height={500}
              className="relative w-[466px] h-[362px] object-contain"
            />
          </div>
       

        {/* Menu Items */}
        <div className="grid lg:grid-cols-2 grid-cols-3 gap-8 mt-8">
          {menuItems.map((item, index) => (
            <div key={index} className="lg:flex gap-5 p-4 rounded-lg shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-cover rounded-lg"
              />
              <div className={`${inter.className} text-white`}>
                <p className="text-[20px] font-semibold">{item.title}</p>
                <p className="text-[14px] font-normal">{item.description}</p>
                <p className="text-[#FF9F0D] text-[18px] font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Menu

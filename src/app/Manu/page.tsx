'use client';

import React from 'react';
import Image from 'next/image';
import Statistics from '@/components/Statistics';
import PageHeader from '@/components/pageHeader';
 
export default function Menu() {
  const menuItems = [
    {
      category: "Starter Menu",
      items: [
        { name: "Alder Grilled Chinook Salmon", description: "Toasted French bread topped with romano, cheddar", calories: "560 CAL", price: "$32" },
        { name: "Berries and Creme Tart", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL", price: "$43" },
        { name: "Tormentoso Bush Pizza Pintage", description: "Ground cumin, avocado, peeled and cubed", calories: "1000 CAL", price: "$14" },
        { name: "Spicy Vegan Potato Curry", description: "Spreadable cream cheese, crumbled blue cheese", calories: "560 CAL", price: "$35" }
      ],
      image: "/menu.png",
      altText: "Starter Menu"
    },
    {
      category: "Main Course",
      items: [
        { name: "Optic Big Breakfast Combo Menu", description: "Toasted French bread topped with romano, cheddar", calories: "560 CAL", price: "$32" },
        { name: "Cashew Chicken With Stir-Fry", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL", price: "$43" },
        { name: "Vegetables & Green Salad", description: "Ground cumin, avocado, peeled and cubed", calories: "1000 CAL", price: "$14" },
        { name: "Spicy Vegan Potato Curry", description: "Spreadable cream cheese, crumbled blue cheese", calories: "560 CAL", price: "$35" }
      ],
      image: "/mainCourse.png",
      altText: "Main Course"
    },
    {
      category: "Dessert",
      items: [
        { name: "Fig and Lemon Cake", description: "Toasted French bread topped with romano, cheddar", calories: "560 CAL", price: "$32" },
        { name: "Creamy Mascarpone Cake", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL", price: "$43" },
        { name: "Pastry, Blueberries, Lemon Juice", description: "Ground cumin, avocado, peeled and cubed", calories: "1000 CAL", price: "$14" },
        { name: "Pain au Chocolat", description: "Spreadable cream cheese, crumbled blue cheese", calories: "560 CAL", price: "$35" }
      ],
      image: "/dessert.png",
      altText: "Dessert"
    },
    {
      category: "Drinks",
      items: [
        { name: "Caffè Macchiato", description: "Toasted French bread topped with romano, cheddar", calories: "560 CAL", price: "$32" },
        { name: "Aperol Spritz Cappuccino", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL", price: "$43" },
        { name: "Caffè Latte Campuri", description: "Ground cumin, avocado, peeled and cubed", calories: "1000 CAL", price: "$14" },
        { name: "Tormentoso Bush Tea Pintage", description: "Spreadable cream cheese, crumbled blue cheese", calories: "560 CAL", price: "$35" }
      ],
      image: "/drinks.png",
      altText: "Drinks"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <PageHeader title="Our Menu" currentPage="Menu" />

      {/* Menu Sections */}
      {menuItems.map((section, index) => (
        <section key={index} className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 items-center">
          <Image
            src={section.image}
            alt={section.altText}
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">{section.category}</h2>
            <ul className="text-gray-600 space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-xs text-gray-500">{item.calories}</p>
                  </div>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Statistics */}
      <Statistics />

      {/* Partners and Clients */}
      <div className="w-full lg:max-w-8xl my-20 lg:px-4 gap-8 items-center">
        <div className=" absolute w-[150.21px] h-[225.37px] ml-[40.5%] rotate-45 -mt-10">
          <Image src={"/partnerBg.png"} alt="" height={150} width={160} className=" -rotate-6" />
        </div>
        <div>
          <p className="relative text-[18px] text-[#333333] text-center ">Partners & Clients</p>
          <p className=" relative text-[48px] text-[#333333] font-bold text-center">We work with the best people</p>
        </div>
        <div className=" lg:flex grid grid-cols-2 lg:gap-5">
          <Image src="/bakery1.png" alt="Partner 1" height={129.23} width={240.96} className="lg:m-5" />
          <Image src="/bakery2.png" alt="Partner 2" height={129.23} width={240.96} className="lg:m-5" />
          <Image src="/bakery3.png" alt="Partner 3" height={129.23} width={240.96} className="lg:m-5" />
          <Image src="/bakery4.png" alt="Partner 4" height={129.23} width={240.96} className="lg:m-5" />
          <Image src="/bakery5.png" alt="Partner 5" height={129.23} width={240.96} className="lg:m-5" />
          <Image src="/bakery6.png" alt="Partner 6" height={129.23} width={240.96} className="lg:m-5" />
        </div>
      </div>
      <div className=" w-[725.97px] h-[468.73px] rotate-45 -ml-[82%] z-20 mt-10">
        <Image src={"/partnerBg.png"} alt="" height={500} width={500} className=" -rotate-6" />
      </div>
     </div>
  );
}

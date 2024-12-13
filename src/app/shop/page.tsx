'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/pageHeader';
import { FaSearch, FaStar } from 'react-icons/fa';
import { PiArrowCircleRightFill, PiGitDiff, PiToteThin } from 'react-icons/pi';
import { Roboto } from 'next/font/google';
import { MdStar } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';

const text = Roboto({ subsets: ["latin"], weight: "700" })

const initialCartItems = [
  { id: 1, name: "Burger", price: 10.99, quantity: 2, image: "/cart1.png" },
  { id: 2, name: "Fresh Lime", price: 3.49, quantity: 1, image: "/cart2.png" },
  { id: 3, name: "Pizza", price: 9.99, quantity: 4, image: "/cart3.png" },
];

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  onSale?: boolean;
}

const ShopList = () => {
  const [sortBy, setSortBy] = useState('Newest');
  const [showCount, setShowCount] = useState('Default');

  const products: Product[] = [
    {
      id: 1,
      name: 'Fresh Lime',
      price: 38.00,
      oldPrice: 45.00,
      image: '/about3.png',
      onSale: true,
    },
    {
      id: 2,
      name: 'Chocolate Muffin',
      price: 28.00,
      image: '/blogpost2.jpg',
      onSale: true,
    },
    {
      id: 3,
      name: 'Burger',
      price: 21.00,
      oldPrice: 45.00,
      image: '/mainCourse.png',
    },
    {
      id: 4,
      name: 'Country Burger',
      price: 45.00,
      image: '/shopBurger.jpeg',
    },
    {
      id: 5,
      name: 'Drink',
      price: 23.00,
      oldPrice: 45.00,
      image: '/drinks.png',
    },
    {
      id: 6,
      name: 'Pizza',
      price: 43.00,
      image: '/shopPizza.jpeg',
    },
    {
      id: 7,
      name: 'Cheese Butter',
      price: 10.00,
      image: '/shopChocolate.jpeg',
    },
    {
      id: 8,
      name: 'Sandwiches',
      price: 25.00,
      image: '/shopSandwiche.jpeg',
    },
    {
      id: 9,
      name: 'Chicken Chup',
      price: 12.00,
      image: '/shopChicken.jpeg',
    },
    {
      id: 10,
      name: 'Country Burger',
      price: 45.00,
      image: '/shopBurger.jpeg',
    },
    {
      id: 11,
      name: 'Drink',
      price: 23.00,
      oldPrice: 45.00,
      image: '/drinks.png',
    },
    {
      id: 12,
      name: 'Pizza',
      price: 43.00,
      image: '/shopPizza.jpeg',
    },
    {
      id: 13,
      name: 'Cheese Butter',
      price: 10.00,
      image: '/shopChocolate.jpeg',
    },
    {
      id: 14,
      name: 'Sandwiches',
      price: 25.00,
      image: '/shopSandwiche.jpeg',
    },
    {
      id: 15,
      name: 'Chicken Chup',
      price: 12.00,
      image: '/shopChicken.jpeg',
    },
  ];

  const categories = [
    'Sandwiches',
    'Burger',
    'Chicken Chup',
    'Drink',
    'Pizza',
    'Thi',
    'Non Veg',
    'Uncategorized',
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [ratings, setRatings] = useState<Record<number, number>>({});

  // Render star ratings
  const renderStars = (productId: number) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <MdStar
          key={star}
          fill={star <= (ratings[productId] || 0) ? "gold" : "gray"}
          className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setRatings({ ...ratings, [productId]: star })}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white">
      <PageHeader title="Shop List" currentPage="Shop List" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters Bar */}
            <div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-gray-50">
              <div className="flex gap-4 items-center">
                <span className="text-gray-600">Sort By :</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="flex gap-4 items-center ">
                <span className="text-gray-600">Show :</span>
                <select
                  value={showCount}
                  onChange={(e) => setShowCount(e.target.value)}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  <option>Default</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid  grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {product.onSale && (
                      <span className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded">
                        Sale!
                      </span>
                    )}
                    {/* Icons on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <PiGitDiff />
                      </button>
                      <button className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <PiToteThin />
                      </button>
                      <button className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <GoHeart />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-orange-500 font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">«</button>
              <button className="px-3 py-1 border rounded bg-orange-500 text-white">1</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">2</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">3</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">»</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="flex-1 border p-2 rounded-l focus:outline-none"
                />
                <button className="hover:bg-orange-500 bg-[#FF9F0D] text-white px-4 rounded-r">
                  <FaSearch />
                </button>
              </div>
            </div>

            <div className='lg:grid flex justify-between'>
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2 cursor-pointer" />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div >
                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Filter By Price</h3>
                  <div className="flex items-center gap-4">
                    <span>From $0 to $8000</span>
                    <button className="text-sm bg-gray-200 px-4 py-1 rounded">Filter</button>
                  </div>
                </div>

                {/* Featured Product */}
                <div className="bg-[url('/shopSideBar.jpeg')] w-full bg-cover h-56">
                  <div className="bg-black/10 h-full text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Perfect Taste</h3>
                    <h2 className="text-2xl font-bold mb-4">Classic Restaurant</h2>
                    <div className="text-orange-500 text-xl font-bold mb-4">$45.00</div>
                    <button className="flex text-white border border-white px-4 py-2 rounded hover:bg-orange-500 hover:border-orange-500 transition-colors">
                      Shop Now
                      <PiArrowCircleRightFill className='text-white w-[20px] h-[20px] mt-1 ml-2 bg-transparent' />
                    </button>
                  </div>
                </div>
              </div>
            </div>

 

              {/* popular tags */}
              <div className='flex lg:grid  w-[423px] h-[308px] -m-2 mb-20 mt-8 lg:pl-12 lg:-ml-12 '>
                <div className='w-[126px] h-[28px] '>
                  <p className={`${text.className} text-[20px] text-[#333333] mt-5`}>Populer Tags</p>
                  <div className=' mt-4'>
                    <div className='flex gap-3 mt-3'>
                      {/* tag 1 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Sandwich</span>
                      {/* tag 2 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Tikka</span>
                      {/* tag 3 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Bbq</span>
                    </div>
                    <div className='flex gap-3 mt-3'>
                      {/* tag 4 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[245px] h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Restaurant</span>
                      {/* tag 5 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} flex text-[16px] w-[158px] h-[40px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-3 hover:bg-gray-200 cursor-pointer`}><p className='mr-2'>Chicken</p><p> Sharma</p></span>
                    </div>
                    <div className='flex gap-3 mt-3'>
                      {/* tag 6 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Health</span>
                      {/* tag 7 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Fastfood</span>
                      {/* tag 8 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Food</span>
                    </div>
                    <div className='flex gap-3 mt-3'>
                      {/* tag 9 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Pizza</span>
                      {/* tag 10 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Burger</span>
                      {/* tag 11 */}
                      <span style={{ fontWeight: 400 }} className={`${text.className} text-[14px] w-[115px] hover:text-[#FF9F0D] hover:underline underline-offset-2 h-[38px] border-2 border-[#E0E0E0] text-[#4F4F4F] py-2 px-5 hover:bg-gray-200 cursor-pointer`}>Chicken</span>
                    </div>
                  </div>
                </div>
                <div className=' w-[423px] h-[308px] flex gap-4 -ml-32 lg:grid lg:grid-cols-1 lg:ml-12 lg:mt-60 mt-[65%]'>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-b lg:mb-32">
                      <td className="grid items-center">
                        <Image src={item.image} alt={item.name} width={20} height={16} className="w-16 h-16 object-cover rounded mr-4" />
                        <div>
                          <p>{item.name}</p>
                          {renderStars(item.id)}
                        </div>
                      </td>
                      <td className="px-4">${item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;

// app/components/sidebar/FilterByMenu.tsx

import React from 'react';
import Image from 'next/image';

const menuItems = [
  {
    name: 'Chicken Fry',
    count: 26,
    image: '/blogmenu1.jpg',
  },
  {
    name: 'Burger Food',
    count: 46,
    image: '/blogmenu2.jpg',
  },
  {
    name: 'Pizza',
    count: 16,
    image: '/blogmenu3.jpg',
  },
  {
    name: 'Fresh Fruits',
    count: 36,
    image: '/blogmenu4.jpg',
  },
  {
    name: 'Vegetables',
    count: 16,
    image: '/blogmenu5.jpg',
  },
];

const FilterByMenu = () => {
  return (
    <div className="space-y-4">
      <h3 className='text-lg font-bold text-gray-800 border-b border-gray-100 pb-4'>Filter By Menu</h3>
      {menuItems.map((item, index) => (
        <div key={index} className="transition-all duration-300 hover:translate-x-2 cursor-pointer group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <span className="text-gray-700">{item.name}</span>
            </div>
            <span className="text-[#FF9F0D]">({item.count})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterByMenu;
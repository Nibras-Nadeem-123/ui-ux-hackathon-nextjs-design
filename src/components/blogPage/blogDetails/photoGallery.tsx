import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/photo1.jpg',
    alt: 'Delicious pizza with toppings',
  },
  {
    src: '/photo2.jpg',
    alt: 'Gourmet dish presentation',
  },
  {
    src: '/photo3.jpg',
    alt: 'Grilled salmon with vegetables',
  },
  {
    src: '/photo4.jpg',
    alt: 'BBQ platter with sides',
  },
  {
    src: '/photo5.jpg',
    alt: 'Appetizer plate',
  },
  {
    src: '/photo5.jpg',
    alt: 'French toast with fruits',
  },
];

const PhotoGallery = () => {
  return (
    <div className="space-y-4">
      <h3 className='text-lg font-bold text-gray-800 border-b border-gray-100 pb-4'>Instagram Feed</h3>
      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-lg aspect-square shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              className="transition-all duration-500 group-hover:scale-110 w-full h-full object-cover group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery; 
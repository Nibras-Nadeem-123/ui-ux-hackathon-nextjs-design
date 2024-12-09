// app/components/sidebar/RecentPosts.tsx

import Image from 'next/image';
import React from 'react';

const posts = [
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blogpost1.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blogpost2.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blogpost3.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blogpost4.jpg',
  },
];

const RecentPosts = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Post</h2>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <Image
            src={post.image}
            alt="Post"
            height={140}
            width={140}
            className="  rounded-md object-cover mr-4"
          />
          <div>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="text-sm">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
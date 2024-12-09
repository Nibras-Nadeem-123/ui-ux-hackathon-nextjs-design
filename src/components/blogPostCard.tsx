import Image from 'next/image';
import Link from 'next/link';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { PiChatsBold, PiUserCirclePlus } from 'react-icons/pi';

interface BlogPostCardProps {
    image: string;
    date: string;
    comments: number;
    title: string;
    description: string;
    slug: string;
}

const BlogPostCard = ({ image, date, comments, title, description, slug }: BlogPostCardProps) => {
    return (
        <article className='space-y-4'>
            <Image 
                src={image}
                alt={title}
                width={800}
                height={460}
                className='w-full rounded-lg'
            />
            <div className='flex flex-wrap gap-4 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                     <IoCalendarNumberOutline className='text-[#FF9F0D] h-[24px] w-[24px]'/>
                    <span>{date}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <PiChatsBold className='text-[#FF9F0D] h-[24px] w-[24px]' />
                    <span>{comments}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <PiUserCirclePlus className='text-[#FF9F0D] h-[24px] w-[24px]' />
                    <span>Admin</span>
                </div>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold text-black'>
                {title}
            </h2>
            <p className='text-[#4F4F4F]'>
                {description}
            </p>
            <Link 
                href={`/blog/${slug}`}
                className='inline-block px-6 py-3 border border-[#FF9F0D] text-[#FF9F0D] rounded hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300'
            >
                Read More
            </Link>
        </article>
    );
};

export default BlogPostCard; 
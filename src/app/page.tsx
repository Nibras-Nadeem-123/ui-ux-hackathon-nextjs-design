import Image from "next/image";
import About from '@/components/About';
import Button from "@/components/ui/Button";
import FoodCategory from '@/components/FoodCategory';
import ExtraordinaryTaste from '@/components/extraOrdinaryTaste';
import Statistics from '@/components/Statistics';
import Menu from '@/components/menu';
import FoodTeam from '@/components/foodTeam';
import Testimonials from '@/components/testimonials';
import RestaurantProcess from '@/components/RestaurantProcess';
import BlogPost from '@/components/blogPost';
import { Great_Vibes } from "next/font/google";
import { ImTwitter } from "react-icons/im";
import { TfiFacebook, TfiPinterest } from "react-icons/tfi";
import Header from "@/components/mainComponents/header";

const letter = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Header />

      {/* Hero Section */}
      <div className="min-h-screen pt-5 w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/resturantBg.jpg"
            alt="Hero background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 ml-5 h-full border-l-2 border-[#FF9F0D] container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="absolute top-1/2 left-4 transform bg-black -translate-y-1/2 hidden md:flex flex-col space-y-4">
            <TfiFacebook className="text-white w-6 h-6 -ml-7 hover:text-gray-300" />
            <ImTwitter className="text-white w-6 h-6 -ml-7 hover:text-gray-300" />
            <TfiPinterest className="text-white w-6 h-6 -ml-7 hover:text-gray-300" />
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-10">

            {/* Left column - Text content */}
            <div className="flex flex-col space-y-6 lg:space-y-8 max-w-xl text-center lg:text-left">
              <p className={`${letter.className} text-[28px] sm:text-[36px] md:text-[42px] text-[#FF9F0D]`}>Its Quick & Amusing!</p>
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-white leading-tight">
                <span className='text-[#F7A600]'>The</span> Art of Speed
                <br className="hidden sm:block" /> Food Quality
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg">See Menu</Button>
              </div>
            </div>

            {/* Right column - Hero image */}
            <div className="relative w-full lg:w-auto">
              <Image
                src="/food.png"
                alt="hero"
                width={570}
                height={570}
                className="object-contain w-full h-auto max-w-[90vw] md:max-w-[570px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <FoodCategory />
        <ExtraordinaryTaste />
        <Statistics />
        <Menu />
        <FoodTeam />
        <Testimonials />
        <RestaurantProcess />
        <BlogPost />
      </div>
    </main>
  );
}

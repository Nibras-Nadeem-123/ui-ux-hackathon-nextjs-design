import Image from "next/image";
import About from '@/components/About'
import Button from "@/components/ui/Button";
import FoodCategory from '@/components/FoodCategory'
import ExtraordinaryTaste from '@/components/extraOrdinaryTaste'
import Statistics from '@/components/Statistics'
import Menu from '@/components/menu'
import FoodTeam from '@/components/foodTeam'
import Testimonials from '@/components/testimonials'
import RestaurantProcess from '@/components/RestaurantProcess'
import BlogPost from '@/components/blogPost'
import { Great_Vibes } from "next/font/google";
import { ImTwitter } from "react-icons/im";
import { TfiFacebook, TfiPinterest } from "react-icons/tfi";
import Header from "@/components/mainComponents/header";
// import Footer from "@/components/mainFooter";
 
const letter = Great_Vibes({ subsets: ["latin"], weight: "400" })


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Header/>
      {/* Hero Section */}
      <div className="  min-h-screen w-full">
        {/* Background Image */}
        <div className=" inset-0">
          <Image
            src="/resturantBg.jpg"
            alt="Hero background"
            fill
            className="object-cover ml-20"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full container -ml-5 lg:left-10 mx-auto px-4 sm:px-6 lg:px-8">

          <div className="pt-16">
            <div className="absolute border-l-2 py-60 border-white">
            </div>
            <div className="relative mt-40 bg-black pt-10 pb-10 space-y-5 -ml-3 inline-block">
            <TfiFacebook className="rounded-lg text-white w-[25.28px] h-[25.21px]" />
            <ImTwitter className="rounded-lg text-white w-[25.28px] h-[25.21px]" />
            <TfiPinterest className="rounded-lg text-white w-[25.28px] h-[25.21px]"/>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col bottom-10 -mt-[350px] ml-10 lg:flex-row items-center justify-between h-full py-20 lg:py-0 gap-10 lg:gap-0">

            {/* Left column - Text content */}
            <div className="flex flex-col space-y-6 lg:space-y-8 max-w-xl text-center lg:text-left">
              <div className="absolute left-20 -mt-10 h-full hidden md:block">
                <p className={`${letter.className} text-[42px] text-[#FF9F0D]`}>Its Quick & Amusing!</p>
              </div>
              <h1 className="text-[40px] mt-32 md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold text-white leading-tight">
                <span className='text-[#F7A600]'>The</span> Art of speed
                <br className="hidden sm:block" /> food Quality
              </h1>
              <p className="text-gray-300 w-[548.5px] text-base md:text-lg lg:text-xl max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue
              </p>
              <div className="flex justify-center lg:justify-start w-full">
                <Button size="lg">
                  See Menu
                </Button>
              </div>
            </div>

            {/* Right column - Hero image */}
            <div className="relative w-full lg:w-auto">
              <Image
                src="/food.png"
                alt="hero"
                width={570}
                height={570}
                className="object-contain w-full h-auto max-w-[670px] ml-5 mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections Container */}
      <div className="w-full sm:w-full md:w-[80vw] lg:w-[80vw] mx-auto xl:w-[80vw] 2xl:w-[80vw]">
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
      {/* <Footer/> */}
     </main>
  );
}
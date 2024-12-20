import Image from "next/image";
import TeamMember from "@/components/TeamMember";
import { Inter, Miniver, Roboto } from "next/font/google";
import { PiChats, PiFactoryLight, PiHamburgerLight, PiQuotesThin, PiStarFourLight, PiTimer, PiTruckThin } from "react-icons/pi";
import Header from "./components/header";
import { IoCalendarNumberOutline, IoPlayOutline } from "react-icons/io5";
import Footer from "./components/footer";
import { RxArrowRight } from "react-icons/rx";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Link from "next/link";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const inter = Inter({ subsets: ["latin"], weight: "700" })
const letter = Miniver({ subsets: ["latin"], weight: "400" });
const text = Roboto({ subsets: ["latin"], weight: "500" })

export default function Home() {

  const foodItems = [
    {
      id: 1,
      title: 'Grand Italiano',
      discount: 'Save 30%',
      items: "26 Items",
    },
    {
      id: 2,
      title: 'Pene Salmone',
      items: "23 Items",
    },
    {
      id: 3,
      title: 'Molto Tagliatelle',
      items: "20 Items",
    },
    {
      id: 4,
      title: 'Pepperoni tagli',
      items: "26 Items",
    },
  ]

  const categories = [
    { id: 1, name: 'Breakfast', active: true },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Drink' },
    { id: 6, name: 'Snack' },
    { id: 7, name: 'Soups' },
  ]

  const teamMembers = [
    {
      name: "Mark Henry",
      role: "Owner",
      image: "/pic3.png"
    },
    {
      name: "Lucky Helen",
      role: "Chef",
      image: "/pic3.png"
    },
    {
      name: "Moon Henry",
      role: "Founder",
      image: "/pic3.png"
    },
    {
      name: "Tom Monrow",
      role: "Specialist",
      image: "/pic3.png"
    }
  ];

  const menuItems = [
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
    {
      title: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      price: "32$",
      cal: '560 CAL'
    },
  ]

  return (
    <main className="min-h-screen ">
      <Header />
      <div className="-mb-80">
        {/* Hero Section */}
        <div className="min-h-screen pt-20 w-full relative">


          {/* Content */}
          <div className="relative z-10 ml-5 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">



            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row items-center justify-evenly h-full gap-20">

              {/* Left column - Text content */}
              <div className="flex flex-col space-y-6 lg:space-y-8 max-w-xl text-center lg:text-left p-32">
                <div>
                  <p className={`${letter.className} text-[18px] sm:text-[16px] md:text-[15px] text-[#195A00]`}>Healthy & Testy Food</p>
                  <p className="border-t-2 border-[#195A00] -mt-3 ml-40 w-[27px]"></p>
                </div>
                <h1 className=" w-[521px] h-[136px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#333333] font-bold leading-tight">
                  Enjoy Healthy Life
                  <br className="hidden sm:block" />
                  <span className="flex"> & Testy Food.
                    <PiStarFourLight className="w-[28.08px] h-[44.65px] mt-[32.25px] text-[#195A00]" />
                    <PiStarFourLight className="w-[19.44px] h-[29.54px] mt-[47.25px] -ml-2 text-[#195A00]" />
                    <PiStarFourLight className="w-[28.08px] h-[44.65px] mt-[20px] -ml-[20px] text-[#195A00]" />
                  </span>
                </h1>
                <p className="text-[#4F4F4F] text-base md:text-[16px] lg:text-[18px] w-[424px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
                <div className="flex mx-auto gap-5 lg:justify-start">
                  <button className="bg-[#195A00] w-[200px] h-[58px] px-6 py-3 rounded-md text-white text-[18px] hover:bg-green-800 hover:shadow-md hover:shadow-green-800">Show More</button>
                  <button className="border-2 border-[#195A00] w-[240px] h-[58px] px-6 py-3 rounded-md text-[#195A00] hover:text-white text-[18px] hover:bg-green-800 hover:shadow-md hover:shadow-green-800">Place an order</button>
                </div>
              </div>

              {/* Right column - Hero image */}
              <div className="relative w-full lg:w-auto">
                <Image
                  src="/a-leaf.png"
                  alt="hero"
                  width={500}
                  height={500}
                  className="absolute object-contain -z-10 w-full -ml-32 -mt-28 -rotate-45 h-auto max-w-[90vw] md:max-w-[570px]"
                  priority
                />
                <Image
                  src="/resturant2Bg.jpg"
                  alt="hero"
                  width={570}
                  height={570}
                  className="object-contain w-full h-auto max-w-[90vw] md:max-w-[570px]"
                  priority
                />
                <Image
                  src="/leafs.png"
                  alt="hero"
                  width={500}
                  height={500}
                  className="absolute object-contain -z-10 w-full -mt-[45%] -ml-24 h-auto max-w-[90vw] md:max-w-[570px]"
                  priority
                />
                <Image
                  src="/a-leaf.png"
                  alt="hero"
                  width={500}
                  height={500}
                  className="absolute object-contain -z-10 w-full -mt-48 ml-20 rotate-90 h-auto max-w-[90vw] md:max-w-[570px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Frist Section: Content and Buttons */}
          <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-12 md:py-24 items-center">
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
                <Image
                  className="object-cover object-center w-full sm:w-72 lg:w-80 xl:w-96 h-auto rounded-lg"
                  alt="hero"
                  src="/yougot1.jpg" width={309} height={836}
                />
              </div>
              {/* Right Images */}
              <div className="flex flex-col space-y-4 mt-6 sm:mt-0 sm:ml-4">
                <Image
                  className="object-cover object-center w-full sm:w-72 md:w-96 lg:w-80 xl:w-96 h-auto rounded-lg"
                  alt="image2"
                  src="/recentPostFooter.jpg"
                  width={309} height={271}
                />
                {/* Bottom Image */}
                <Image
                  className="object-cover object-center w-full sm:w-72 md:w-96 lg:w-80 xl:w-96 h-auto rounded-lg"
                  alt="image3"
                  src="/about3.png"
                  width={309} height={382}
                />
              </div>
              {/* Text Content and Buttons */}
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className={`${letter.className} text-[18px] mb-4 font-medium text-[#195A00] italic`}>
                  About us _____
                </h1>
                <p className="text-black title-font text-3xl font-bold">
                  Food is an important part of a balanced Diet
                </p>
                <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat fringilla bibendum.
                  Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                  Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
                  velit in consequat.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="inline-flex w-[195px] h-[58px] text-white font-semibold hover:bg-green-800 bg-[#195A00] border-0 py-3 px-10 focus:outline-none rounded text-[18px]">
                    Show More
                  </button>
                  <button className="inline-flex items-center text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                    <div className="w-[60px] h-[60px] bg-[#195A00] hover:bg-green-800 mr-4 -mt-2 p-5 rounded-full">
                      <IoPlayOutline className="mr-2 block -mt-2 -ml-1 text-white w-[30px] h-[30px]" />
                    </div> {/* Icon on the left */}
                    Watch video
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="-ml-80">
            <Image src={"/spinch.png"} alt="" height={600} width={600} className="rotate-45" />
          </div>

          {/* food caategory */}
          <section className=" pb-24 -mt-20 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className={` text-[#333333] font-great-vibes font-bold text-[48px] mb-2`}>
                  Food category
                </h3>
                <h2 className="text-[#828282] text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Varius sed pharetra dictum neque massa congue
                </h2>
              </div>

              <div className="flex gap-3">
                <span className="bg-gray-300 w-[50px] my-auto hover:bg-[#195A00] hover:text-white cursor-pointer h-[25px] text-center"><SlArrowLeft className="mt-1 p-0.5 ml-1" /></span>
                {/* Food Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {foodItems.map((item) => (
                    <div key={item.id} className="relative group cursor-pointer">
                      <div className="relative h-[300px] rounded-2xl overflow-hidden">
                        <Image
                          src={"/foodCategory.jpeg"}
                          alt={item.title}
                          width={500}
                          height={700}
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Discount Tag */}
                        {item.discount && (
                          <div className="absolute top-4 left-4 bg-[#FF9F0D] text-white px-4 py-1 rounded-full">
                            {item.discount}
                          </div>
                        )}


                      </div>
                      {/* Title */}
                      <div className=" bottom-4 mx-auto text-center">
                        <h3 className="text-[#333333] text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-[16px] text-[#828282]">{item.items}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="bg-gray-300 w-[50px] my-auto hover:bg-[#195A00] hover:text-white cursor-pointer h-[25px] text-center"><SlArrowRight className="mt-1 p-0.5 ml-1" /></span>
              </div>
            </div>
          </section>

          {/* why choose us */}
          <div className="flex gap-20 h-[800px] mt-20">
            <div className="flex">
              <Image src={"/choose1.jpeg"} alt="" height={500} width={300} className="w-[424px] h-[523px]" />
              <Image src={"/spinch.png"} alt="" height={300} width={700} className="w-[350.81px] h-[259.74px] -ml-32 -mt-20 rotate-45 -z-10" />
              <Image src={"/about3.png"} alt="" height={500} width={300} className="w-[385px] h-[516px] -ml-80 mt-20" />
            </div>
            <div>
            <div className="flex gap-3">
              <p className={`${letter.className} text-[#195A00] text-[18px]`}>Why Choose us</p>
              <span className="w-[34px] border-t-2 border-[#195A00] mt-4"></span>
            </div>
            <p className="w-[500px] text-[48px] text-[#333333] font-bold">Why We are the best?</p>
            <p className="w-[526px] text-[#828282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <br/>
            <p className="w-[526px] text-[#828282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
            <div className=" grid grid-cols-2 w-[538px] h-[172px] mt-20">
                  <div className="w-[260px] h-[77px] shadow-lg flex justify-between hover:bg-gray-50 hover:border-2 cursor-pointer border-l-2 border-[#195A00] px-6 py-6">
                    <PiTruckThin className=" absolute w-[56px] h-[55px] -mt-3"/>
                    <p className=" absolute font-semibold ml-20 text-[20px] text-[#4F4F4F]">Fast Delivery</p>
                  </div>
                  <div className="w-[260px] h-[77px] shadow-lg flex justify-between hover:bg-gray-50 hover:border-2 cursor-pointer border-l-2 border-[#195A00] px-6 py-6">
                    <PiTimer className=" absolute w-[56px] h-[55px] -mt-3"/>
                    <p className=" absolute font-semibold ml-20 text-[20px] text-[#4F4F4F]">24/7 services</p>
                  </div>
                  <div className="w-[260px] h-[77px] shadow-lg flex justify-between hover:bg-gray-50 hover:border-2 cursor-pointer border-l-2 border-[#195A00] px-6 py-6">
                    <PiHamburgerLight className=" absolute w-[56px] h-[55px] -mt-3"/>
                    <p className=" absolute font-semibold ml-20 text-[20px] text-[#4F4F4F]">Fresh food</p>
                  </div>
                  <div className="w-[260px] h-[77px] shadow-lg flex justify-between hover:bg-gray-50 hover:border-2 cursor-pointer border-l-2 border-[#195A00] px-6 py-6">
                    <PiFactoryLight className=" absolute w-[56px] h-[55px] -mt-3"/>
                    <p className=" absolute font-semibold ml-20 text-[20px] text-[#4F4F4F]">Quality maintain</p>
                  </div>
            </div>
            </div>
          </div>

          {/* Menu Section */}
          <section className="w-full py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <Image src={"/partnerBg.png"} alt="" height={150} width={150} className="absolute ml-[35%] -mt-6 rotate-45" />
                <h2 className=" relative text-4xl md:text-5xl font-bold mb-4">Our Food Menu</h2>
                <p className="text-gray-800 max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
              </div>
              {/* Categories */}
              <div className="flex flex-wrap justify-center mb-12 space-x-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`text-xl text-[#333333] font-normal hover:text-[#195A00] transition-colors`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex gap-5 mb-3 border-b-2 border-gray-200">
                    <div className={`${inter.className} text-[#333333]`}>
                      <p className="text-[20px] cursor-pointer hover:text-[#195A00]">{item.title}</p>
                      <p className="text-[14px]">{item.description}</p>
                      <p className="text-[14px]">{item.cal}</p>
                    </div>
                    <p className="text-[#195A00] text-[18px]">{item.price}</p>
                  </div>
                ))}
              </div>
              <button className={`${text.className} w-[150px] mx-[40%] h-[52px] border-2 hover:bg-[#195A00] border-[#195A00] py-[14px] px-[32px] mt-[100px] text-[16px]`}>
                <Link href={"/Menu"} className="text-[#195A00] hover:text-white">View menu</Link>
              </button>
            </div>
          </section>

          {/* right leaf image */}
          <div className=" ml-[50%] -mr-40 -z-30 -rotate-45 mt-40 -mb-60">
            <Image src={"/leafs.png"} alt="" height={580} width={700} className="ml-60 rotate-180" />
          </div>

          {/* team member background image */}
          <div className=" w-full h-[460px] z-30">
            <div className=" absolute h-[460px] w-[1210px] object-cover bg-[#195A00] opacity-90">
              <Image src={"/teamMember.jpeg"} alt="" width={900} height={1000} className="object-cover h-[460px] w-full " />
            </div>
            <div className=" relative h-[460px] w-full object-cover bg-[#195A00] opacity-90">
              <div className="text-center mb-16 text-white py-40">
                <h2 className="text-4xl font-bold mb-4">Team Member</h2>
                <p className="max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Varius sed pharetra dictum neque massa congue
                </p>
              </div>
            </div>
          </div>


          {/* Team Member Section */}
          <section className='w-full py-20 mb-40 -mt-60'>
            <div className='container mx-auto px-4 md:px-6'>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-md">
                {teamMembers.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <div className="flex ml-10 gap-20 mb-40">
            {/* text */}
            <div className="w-[1320px] h-[479px]">
              <div className="flex space-x-3">
                <p className={`${letter.className} text-[#195A00] text-[18px]`}>Testimonials</p>
                <span className="w-[34px] border-t-2 border-[#195A00] mt-4"></span>
              </div>
              <p className="text-[48px] text-[#333333] font-bold">Customer Review</p>
              <PiQuotesThin className="h-[60px] w-[60px] text-[#195A00]" />
              <p className="text-[16px] text-[#828282] w-[536px] h-[96px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              <div className="flex gap-[20%]">
                <div className="flex gap-5 mt-8">
                  <Image src={"/testimonial2.png"} alt="" height={100} width={100} className="rounded-full" />
                  <div className="mt-5">
                    <p className="text-[18px] text-[#4F4F4F] font-bold">Abdur Rahman</p>
                    <p className="text-[16px] text-[#828282]">Customer</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-16">
                  <TfiArrowLeft className="absolute h-[24px] w-[24px] border-1 cursor-pointer hover:h-[30px] hover:w-[30px]" />
                  <TfiArrowRight className="absolute h-[24px] w-[24px] border-1 cursor-pointer hover:h-[30px] hover:w-[30px] ml-10" />
                </div>
              </div>
            </div>
            {/* image */}
            <div>
              <Image src={"/testimonial2bg.jpeg"} alt="" height={1500} width={1500} className="ab w-[1572px] h-[453px]" />
              <div className="relative w-[434px] h-[213px] bg-white p-5 -mt-44 -ml-10 shadow-lg space-y-3">
                {/* order box */}
                <div className="flex justify-between">
                  <p className="text-[#333333] font-bold text-[20px]">Order now</p>
                  <p className="text-[#4F4F4F] text-[16px] font-bold">10.00$</p>
                </div>
                <div className="flex gap-1 -mt-2">
                  <MdOutlineStarPurple500 className="h-[16px] w-[16px] text-[#195A00]" />
                  <MdOutlineStarPurple500 className="h-[16px] w-[16px] text-[#195A00]" />
                  <MdOutlineStarPurple500 className="h-[16px] w-[16px] text-[#195A00]" />
                  <MdOutlineStarPurple500 className="h-[16px] w-[16px] text-[#195A00]" />
                  <MdOutlineStarPurple500 className="h-[16px] w-[16px] text-[#195A00]" />
                </div>
                <p className="text-[#828282] text-[16px]">Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,</p>
              </div>
            </div>
          </div>

          {/* Latest news & Blogs */}
          <div className="w-full lg:max-w-8xl my-20 lg:px-4 gap-8 items-center">
            <div className=" absolute w-[150.21px] h-[225.37px] ml-[35.5%] -z-20 rotate-45 -mt-6">
              <Image src={"/partnerBg.png"} alt="" height={150} width={160} className=" -rotate-6" />
            </div>
            <div>
              <p className="text-[48px] text-[#333333] font-bold text-center">Latest news & Blog</p>
              <p className="text-[16px] text-[#333333] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Varius sed pharetra dictum neque massa congue</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {/* 1st row */}
              <div className="group cursor-pointer border-2 border-white shadow-md px-3 pb-7">
                {/* Image Container */}
                <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={"/news-blog.jpeg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 ">
                  <div className="flex items-center text-[#FF9F0D]">
                    <IoCalendarNumberOutline className="h-[24px] w-[24px] text-[#195A00]" />
                    <p className="text-[16px] text-[#333333] ml-2">02 Jan 2022</p>
                    <PiChats className="h-[24px] w-[24px] text-[#195A00] ml-4" />
                    <p className="text-[16px] text-[#333333] ml-2">Comments (03)</p>
                  </div>
                  <h3 className="text-[#333333] text-xl font-bold group-hover:text-[#195A00] transition-colors">
                    Chocolate Truffle Cake With
                    <br />
                    Honey Flavor
                  </h3>
                  <p className="text-[14px] text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.</p>
                  <div className="flex gap-3 hover:font-bold hover:text-[#195A00]">
                    <p className=" absolute text-[14px] text-[#4F4F4F]"><Link href={"/blog"} className="hover:underline hover:text-[#195A00]">Read more</Link></p>
                    <Link href={"/blog"}><RxArrowRight className=" absolute mt-0.5 w-[20px] h-[20px] text-[#333333] ml-20 hover:text-[#195A00]" /></Link>
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <div className="group cursor-pointer border-2 border-white shadow-md px-3 pb-7">
                {/* Image Container */}
                <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={"/news-blog.jpeg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 ">
                  <div className="flex items-center text-[#FF9F0D]">
                    <IoCalendarNumberOutline className="h-[24px] w-[24px] text-[#195A00]" />
                    <p className="text-[16px] text-[#333333] ml-2">02 Jan 2022</p>
                    <PiChats className="h-[24px] w-[24px] text-[#195A00] ml-4" />
                    <p className="text-[16px] text-[#333333] ml-2">Comments (03)</p>
                  </div>
                  <h3 className="text-[#333333] text-xl font-bold group-hover:text-[#195A00] transition-colors">
                    Chocolate Truffle Cake With
                    <br />
                    Honey Flavor
                  </h3>
                  <p className="text-[14px] text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.</p>
                  <div className="flex gap-3 hover:font-bold hover:text-[#195A00]">
                    <p className=" absolute text-[14px] text-[#4F4F4F]"><Link href={"/blog"} className="hover:underline hover:text-[#195A00]">Read more</Link></p>
                    <Link href={"/blog"}><RxArrowRight className=" absolute mt-0.5 w-[20px] h-[20px] text-[#333333] ml-20 hover:text-[#195A00]" /></Link>
                  </div>
                </div>
              </div>
              {/* 3rd row */}
              <div className="group cursor-pointer border-2 border-white shadow-md px-3 pb-7">
                {/* Image Container */}
                <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={"/news-blog.jpeg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 ">
                  <div className="flex items-center text-[#FF9F0D]">
                    <IoCalendarNumberOutline className="h-[24px] w-[24px] text-[#195A00]" />
                    <p className="text-[16px] text-[#333333] ml-2">02 Jan 2022</p>
                    <PiChats className="h-[24px] w-[24px] text-[#195A00] ml-4" />
                    <p className="text-[16px] text-[#333333] ml-2">Comments (03)</p>
                  </div>
                  <h3 className="text-[#333333] text-xl font-bold group-hover:text-[#195A00] transition-colors">
                    Chocolate Truffle Cake With
                    <br />
                    Honey Flavor
                  </h3>
                  <p className="text-[14px] text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.</p>
                  <div className="flex gap-3 hover:font-bold hover:text-[#195A00]">
                    <p className=" absolute text-[14px] text-[#4F4F4F]"><Link href={"/blog"} className="hover:underline hover:text-[#195A00]">Read more</Link></p>
                    <Link href={"/blog"}><RxArrowRight className=" absolute mt-0.5 w-[20px] h-[20px] text-[#333333] ml-20 hover:text-[#195A00]" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners and Clients */}
          <div className="w-full lg:max-w-8xl my-20 lg:px-4 gap-8 items-center mt-6">
            <div className=" absolute w-[150.21px] h-[225.37px] ml-[35.5%] -z-20 rotate-45 -mt-10">
              <Image src={"/partnerBg.png"} alt="" height={150} width={160} className=" -rotate-6" />
            </div>
            <div>
              <p className={`${letter.className} text-[18px] text-[#195A00] text-center`}>Partners & Clients</p>
              <p className="text-[48px] text-[#333333] font-bold text-center">We work with the best people</p>
            </div>
            <div className=" lg:flex grid grid-cols-2 lg:gap-5 -ml-10">
              <Image src="/bakery1.png" alt="Partner 1" height={129.23} width={240.96} className="lg:m-5" />
              <Image src="/bakery2.png" alt="Partner 2" height={129.23} width={240.96} className="lg:m-5" />
              <Image src="/bakery3.png" alt="Partner 3" height={129.23} width={240.96} className="lg:m-5" />
              <Image src="/bakery4.png" alt="Partner 4" height={129.23} width={240.96} className="lg:m-5" />
              <Image src="/bakery5.png" alt="Partner 5" height={129.23} width={240.96} className="lg:m-5" />
              <Image src="/bakery6.png" alt="Partner 6" height={129.23} width={240.96} className="lg:m-5" />
            </div>
          </div>
          <div className="absolute w-[725.97px] h-[468.73px] rotate-45 -ml-[23%] ">
            <Image src={"/partnerBg.png"} alt="" height={500} width={500} className=" -rotate-6" />
          </div>
        </div>
      </div>
      <div className="mt-[45%]">
        <Footer />
      </div>
    </main>
  );
}

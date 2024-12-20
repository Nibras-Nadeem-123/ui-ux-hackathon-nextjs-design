import Testimonials from "@/components/testimonials";
import { Miniver, Roboto } from "next/font/google";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TeamMember from "@/components/TeamMember";
import { Inter } from 'next/font/google'
import Link from "next/link";

const letter = Miniver({ subsets: ["latin"], weight: "400" })
const text = Roboto({subsets:["latin"], weight: "500"})
const inter = Inter({ subsets: ["latin"], weight: "700" })

export default function Aboutus() {
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
    },
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
    <div className="mx-4 sm:mx-6 lg:mx-20 my-12 lg:my-40">
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
            <h1 className={`${letter.className} text-[18px] mb-4 font-medium text-yellow-400 italic`}>
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
              <button className="inline-flex w-[195px] h-[58px] text-white hover:bg-amber-600 bg-[#FF9F0D] border-0 py-2 px-10 focus:outline-none rounded text-[18px]">
                Show More
              </button>
              <button className="inline-flex items-center text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <div className="w-[60px] h-[60px] bg-[#FF9F0D] hover:bg-amber-600 mr-4 -mt-2 p-5 rounded-full">
                  <IoPlayOutline className="mr-2 block -mt-2 -ml-1 text-white w-[30px] h-[30px]" />
                </div> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
          <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br/> pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-full sm:w-96 md:w-[80%] lg:w-[95%] xl:w-[80%] h-auto rounded-lg"
            alt="hero"
            src="/about.png"
            width={1320} height={386}
          />
        </div>
      </section>

      {/* Team Member Section */}
      <section className='w-full py-20 bg-[#ffa425]'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Team Member</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-black/20">
        <Testimonials />
      </section>

      {/* Menu Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Image src={"/partnerBg.png"} alt="" height={150} width={150} className="absolute ml-[35%] -mt-6 rotate-45"/>
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
                className={`text-xl text-[#333333] font-normal hover:text-[#FF9F0D] transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="flex gap-5 mb-3 border-b-2 border-gray-200">
                <div className={`${inter.className} text-[#333333]`}>
                  <p className="text-[20px] cursor-pointer hover:text-[#FF9F0D]">{item.title}</p>
                  <p className="text-[14px]">{item.description}</p>
                  <p className="text-[14px]">{item.cal}</p>
                </div>
                <p className="text-[#FF9F0D] text-[18px]">{item.price}</p>
              </div>
            ))}
          </div>
          <button className={`${text.className} w-[150px] mx-[40%] h-[52px] border-2 hover:bg-[#FF9F0D] border-[#FF9F0D] py-[14px] px-[32px] mt-[100px] text-[16px]`}>
            <Link href={"/Menu"} className="text-[#FF9F0D] hover:text-white">View menu</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

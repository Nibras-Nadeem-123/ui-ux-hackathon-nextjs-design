"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type DropdownItem = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  dropdown?: DropdownItem[];
};

const NavBar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navList: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/Menu" },
    {
      name: "Blog",
      link: "/blog",
      dropdown: [{ name: "Blog Details", link: "/blog/blogDetails" }],
    },
    {
      name: "Pages",
      link: "/",
      dropdown: [
        { name: "Sign up", link: "/signup" },
        { name: "Sign in", link: "/login" },
        { name: "FAQ", link: "/faq" },
        { name: "404 Error", link: "/404" },
        { name: "Check Out Page", link: "/checkout" },
      ],
    },
    {
      name: "About",
      link: "/about",
      dropdown: [{ name: "Our Chefs", link: "/ourChefs" }],
    },
    {
      name: "Shop",
      link: "/shop",
      dropdown: [
        { name: "Shop Details", link: "/shop/shopDetails" },
        { name: "Shopping Cart", link: "/shop/shoppingCart" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="relative text-black">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-64 h-full bg-black text-white z-50 overflow-y-auto">
              <div className="flex flex-col p-4 space-y-4">
                {navList.map((nav, i) => (
                  <div key={i}>
                    <div
                      onClick={() => handleDropdownToggle(i)}
                      className="cursor-pointer"
                    >
                      <Link
                        href={nav.link}
                        className="block py-2 hover:text-[#195A00] hover:underline"
                      >
                        {nav.name}
                      </Link>
                    </div>
                    {nav.dropdown && activeDropdown === i && (
                      <ul className="pl-4 space-y-2">
                        {nav.dropdown.map((item, j) => (
                          <li key={j} className="hover:text-[#195A00] hover:underline">
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">
          {navList.map((nav, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={nav.link}
                className={`${inter.className} hover:text-[#195A00] hover:underline`}
              >
                {nav.name}
              </Link>
              {nav.dropdown && activeDropdown === i && (
                <ul className="absolute bg-white text-black rounded-lg shadow-lg mt-2 w-48 p-4 z-50">
                  {nav.dropdown.map((item, j) => (
                    <li key={j} className="hover:text-[#195A00] hover:underline">
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

"use client"
import React, { useState, useEffect, MouseEvent } from "react";
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
    { name: "Menu", link: "/Manu" },
    {
      name: "Blog",
      link: "/blog",
      dropdown: [{ name: "Blog Details", link: "/blog/blogDettails" }],
    },
    {
      name: "Pages",
      link: "/",
      dropdown: [
        { name: "Sign up", link: "/signup" },
        { name: "Sign in", link: "/logIn" },
        { name: "FAQ", link: "/FAQ" },
        { name: "404 Error", link: "/404Error" },
        { name: "Check Out Page", link: "/checkOut" },
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
        { name: "Shop Details", link: "/shop/shopDetail" },
        { name: "Shopping Cart", link: "/shop/shopingCart" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOutsideClick = (e: MouseEvent<Document>) => {
    const dropdownArea = document.querySelector(".dropdown");
    const sidebarArea = document.querySelector(".sidebar");
    if (
      dropdownArea &&
      !dropdownArea.contains(e.target as Node) &&
      sidebarArea &&
      !sidebarArea.contains(e.target as Node)
    ) {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Sidebar (only shown on mobile) */}
        {isMobileMenuOpen && (
          <div className="sidebar fixed top-0 left-0 w-64 h-full bg-black text-white z-50">
            <div className="flex flex-col items-start space-y-6 py-10 px-4">
              {navList.map((nav, i) => (
                <div
                  key={i}
                  className="relative group dropdown"
                  onClick={() => handleDropdownToggle(i)} // Toggle dropdown on click
                >
                  <Link
                    href={nav.link}
                    className={`${inter.className} hover:text-[#FF9F0D]`}
                  >
                    {nav.name}
                  </Link>

                  {/* Dropdown */}
                  {nav.dropdown && activeDropdown === i && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 rounded-lg shadow-lg p-4 z-50 w-48">
                      <ul>
                        {nav.dropdown.map((item, j) => (
                          <li key={j} className="hover:text-[#FF9F0D]">
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overlay for hiding other content */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          />
        )}

        {/* Desktop Navbar (only shown on larger screens) */}
        <div className="hidden lg:flex flex-row items-center space-x-6">
          {navList.map((nav, i) => (
            <div
              key={i}
              className="relative group dropdown"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={nav.link}
                className={`${inter.className} hover:text-[#FF9F0D]`}
              >
                {nav.name}
              </Link>

              {/* Dropdown */}
              {nav.dropdown && activeDropdown === i && (
                <div className="absolute top-full left-0 bg-white text-black mt-2 rounded-lg shadow-lg p-4 z-50 w-48">
                  <ul>
                    {nav.dropdown.map((item, j) => (
                      <li key={j} className="hover:text-[#FF9F0D]">
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

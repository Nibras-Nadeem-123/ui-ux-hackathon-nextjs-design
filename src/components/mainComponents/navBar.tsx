"use client";
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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

    const navList: NavItem[] = [
        { name: 'Home', link: '/' },
        {
            name: 'Menu',
            link: '/',
            dropdown: [
                { name: 'Breakfast', link: '/menu/breakfast' },
                { name: 'Lunch', link: '/menu/lunch' },
                { name: 'Dinner', link: '/menu/dinner' },
            ],
        },
        {
            name: 'Blog',
            link: '/blog',
            dropdown: [
                { name: 'Blog Details', link: '/blog/blogDetails' },
            ],
        },
        {
            name: 'Pages',
            link: '/',
            dropdown: [
                { name: 'Sign up', link: '/page/signUpPage' },
                { name: 'Sign in', link: '/page/signInPage' },
                { name: 'FAQ', link: '/page/faqPage' },
                { name: '404 Error', link: '/page/404error' },
            ],
        },
        {
            name: 'About',
            link: '/about',
            dropdown: [
                { name: 'Our Chefs', link: '/about/ourChefs' },
            ],
        },
        {
            name: 'Shop',
            link: '/shop',
            dropdown: [
                { name: 'Shop Details', link: '/shop/shopDetails' },
                { name: 'Shopping Cart', link: '/shop/shopingCart' },
            ],
        },
        { name: 'Contact', link: '/contact' },
    ];

    const handleDropdownToggle = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Handle mouse enter on the nav item to show dropdown
    const handleMouseEnter = (index: number) => {
        if (activeDropdown === null) {
            setActiveDropdown(index);
        }
    };

    // Handle mouse leave from the nav item to hide dropdown
    const handleMouseLeave = () => {
        setTimeout(() => setActiveDropdown(null), 300); // Adding slight delay before closing
    };

    // Close dropdown if clicked outside
    const handleOutsideClick = (e: MouseEvent) => {
        const dropdownArea = document.querySelector('.dropdown');
        if (dropdownArea && !dropdownArea.contains(e.target as Node)) {
            setActiveDropdown(null); // Close dropdown if clicked outside
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown]);

    return (
        <div className="relative w-full p-4 ml-80 -mt-3">
            <div className="flex space-x-5">
                {navList.map((nav, i) => (
                    <div
                        key={i}
                        className="relative group dropdown"
                        onMouseEnter={() => handleMouseEnter(i)} // Open on hover
                        onMouseLeave={handleMouseLeave} // Close on mouse leave with delay
                    >
                        {/* Main Nav Item */}
                        <p
                            className={`${inter.className} text-white cursor-pointer hover:text-[#FF9F0D]`}
                            onClick={() => nav.dropdown && handleDropdownToggle(i)} // Toggle on click
                        >
                            <Link href={nav.link}>{nav.name}</Link>
                        </p>

                        {/* Dropdown */}
                        {nav.dropdown && activeDropdown === i && (
                            <div
                                className="absolute top-8 left-0 w-64 bg-white rounded-lg shadow-lg p-4 z-50"
                                onMouseEnter={() => handleMouseEnter(i)} // Keep open when hovering inside dropdown
                                onMouseLeave={handleMouseLeave} // Keep open when mouse leaves dropdown
                            >
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{nav.name}</h3>
                                <ul className="space-y-2">
                                    {nav.dropdown.map((item, j) => (
                                        <li key={j} className="text-gray-700 hover:text-gray-900">
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
    );
};

export default NavBar;

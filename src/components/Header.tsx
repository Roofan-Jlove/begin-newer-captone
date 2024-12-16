'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/shopdetail" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/ourshop" },
    { name: "Contact", href: "/pager" },
  ];

  return (
    <header className="w-full bg-[#0D0D0D] fixed top-0 px-[5] sm:px-[20px] lg:px-[60px] py-2">
       
      <nav className="mt-[15px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-center items-start text-[24px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>
        

        {/* Navigation Links */}
        <div className='flex justify-between items-center'>
        <ul className=" hidden lg:flex items-center gap-[32px] ">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
  {/* Search Box */}
  <div className="relative w-64">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 rounded-full border-2 border-[#FF9F0D] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
    <Image
      src="/homeimg/search.png"
      alt="search"
      width={24}
      height={24}
      className="absolute right-3 top-3"
    />
  </div>

  {/* User Icon */}
  <Link
    href="/signIn"
    className="text-white hover:text-[#FF9F0D] transition-colors"
  >
    <Image src="/homeimg/user.png" alt="user" width={24} height={24} />
  </Link>

  {/* Shopping Cart Icon */}
  <Link
    href="/ShopingCart"
    className="text-white hover:text-[#FF9F0D] transition-colors"
  >
    <Image src="/homeimg/tote.png" alt="cart" width={24} height={24} />
  </Link>
</div>
        </div>
      </nav>
    </header>
  );
}
// 



'use client';

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

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
    <header className="w-full bg-[#0D0D0D] fixed top-0 px-5 sm:px-6 lg:px-16 py-2 z-50">
      {/* Logo on Top Line */}
      <div className="flex justify-center py-2">
        <Link
          href="/"
          className="text-[24px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>
      </div>

      {/* Navigation Links and Icons */}
      <nav className="flex flex-col lg:flex-row items-center justify-between">
        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
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

        {/* Search and Icons */}
        <div className="hidden lg:flex items-center gap-4 mt-2 lg:mt-0">
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
          <Link href="/signIn" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/homeimg/user.png" alt="user" width={24} height={24} />
          </Link>
          {/* Shopping Cart Icon */}
          <Link href="/ShopingCart" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/homeimg/tote.png" alt="cart" width={24} height={24} />
          </Link>
        </div>

        {/* Hamburger Menu for Small and Medium Screens */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden text-white">
              <Image src="/homeimg/hamburger.png" alt="menu" width={32} height={32} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex flex-col gap-6 mt-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[18px] text-white font-medium hover:text-[#FF9F0D] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/signIn"
                  className="text-white hover:text-[#FF9F0D] transition-colors"
                >
                  <Image src="/homeimg/user.png" alt="user" width={24} height={24} />
                </Link>
                <Link
                  href="/ShopingCart"
                  className="text-white hover:text-[#FF9F0D] transition-colors"
                >
                  <Image src="/homeimg/tote.png" alt="cart" width={24} height={24} />
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

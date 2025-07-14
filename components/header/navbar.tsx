import { UserButton } from "@clerk/nextjs";
import { Bell, ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props ={};

const Navbar = (props: Props) => {
  return (
    <header className="text-white flex items-center fixed top-0 z-50 w-full px-4 py-4 justify-between">
      <div className="flex items-center justify-start space-x-6 w-full">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">{/* <MobileMenu /> */}</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <li className="header-link">
            <Link href="/">Home</Link>
          </li>
          <li className="header-link">
            <Link href="/movies">Movies</Link>
          </li>
          <li className="header-link">
            <Link href="/tvshows">TV Shows</Link>
          </li>
          <li className="header-link">
            <Link href="/latest">Latest</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <Search className="hidden h-6 w-6 sm:inline cursor-pointer" />
        <p className="hidden lg:inline cursor-pointer">Kids</p>
        <Bell className="h-6 w-6 cursor-pointer" />
        <Link href={"/account"}>
          <div className="flex items-center space-x-2">
            <UserButton />
            <ChevronDown className="h-6 w-6 cursor-pointer" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

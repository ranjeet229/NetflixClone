"use client";

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

type Props = {};

const MobileMenu = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className="flex items-center space-x-1 text-white"
      >
        <span>Browse</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            showMobileMenu ? 'rotate-180' : ''
          }`}
        />
      </button>

      {showMobileMenu && (
        <div className="absolute top-10 left-0 w-full bg-black z-50 p-4 space-y-2">
          <Link href="/" className="block text-white">
            Home
          </Link>
          <Link href="/movies" className="block text-white">
            Movies
          </Link>
          <Link href="/tvshows" className="block text-white">
            TV Shows
          </Link>
          <Link href="/latest" className="block text-white">
            Latest
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

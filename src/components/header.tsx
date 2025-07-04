"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-orange-500 text-white sticky w-full top-0 z-50">
      <div className="flex items-center justify-between p-0 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/DiyaHygieneBrandKit/logo.png"
            alt="DiyaHygieneLogo"
            width={130}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-bold text-lg">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/products" className="hover:text-orange-400">Products</Link>
          <Link href="/about-us" className="hover:text-orange-400">About</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-2">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-blue-600 to-orange-500 px-4 pb-4 flex flex-col space-y-2 font-bold text-lg text-end">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/products" className="hover:text-orange-400">Products</Link>
          <Link href="/about-us" className="hover:text-orange-400">About</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

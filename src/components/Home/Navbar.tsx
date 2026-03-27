'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navLinks = ["Our mission", "Value", "App", "Events"];

  return (
    <nav className="absolute -top-10 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 md:py-5 bg-transparent">
      {/* Logo */}
      <div className="w-24 md:w-40 hover:opacity-80 cursor-pointer transition-all duration-300">
        <Image src={logo} alt="Kadir logo" className="h-auto w-full object-contain" priority />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="relative text-lg font-medium text-white/90 group"
          >
            {link}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Book a Demo Button */}
      <button className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-[14px] text-sm font-light text-white backdrop-blur-md transition-all cursor-pointer duration-300 hover:scale-95 hover:bg-white/10 active:scale-90">
        <span>Book a demo</span>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </nav>
  );
};

export default Navbar;
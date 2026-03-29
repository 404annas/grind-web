"use client";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "./navItems";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    if (!sectionId) return;

    event.preventDefault();

    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    router.push(`/#${sectionId}`);
  };

  return (
    <nav className="absolute -top-10 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 md:py-5 bg-transparent">
      {/* Logo */}
      <Link href={"/"}>
      <div className="w-24 md:w-40 hover:opacity-80 cursor-pointer transition-all duration-300">
        <Image
          src={logo}
          alt="Kadir logo"
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      </Link>

      {/* Menu Items */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.id ? `/#${item.id}` : "#"}
            onClick={(event) => handleNavClick(event, item.id)}
            className="relative text-lg font-medium text-white/90 group"
          >
            {item.label}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Book a Demo Button */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3">
          <Phone size={18}/>
          <p className="text-white">7474665773</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

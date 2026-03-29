"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { navItems } from "./navItems";

const Navbar2 = () => {
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
    <nav className="absolute -top-10 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 md:px-10 md:py-5">
      <Link href={"/"}>
        <div className="w-24 cursor-pointer transition-all duration-300 hover:opacity-80 md:w-40">
          <Image
            src={logo}
            alt="Kadir logo"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Link>

      <div className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.id ? `/#${item.id}` : "#"}
            onClick={(event) => handleNavClick(event, item.id)}
            className="group relative text-lg font-medium text-white/90"
          >
            {item.label}
            <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 text-white">
        <div className="flex items-center gap-2 text-white rounded-full border border-white/20 bg-white/5 px-5 py-3">
          <Phone size={18} className="text-white"/>
          <p className="text-white">7474665773</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

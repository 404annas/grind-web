"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Home, FolderOpen, Image, UserRound } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: UserRound },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Gallery", href: "/gallery", icon: Image },
  { label: "Contact", href: "/contact", icon: Phone }
];

const Footer = () => {
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
    <div className="relative bg-black text-white py-8 px-4 sm:px-10 uppercase text-center font-bold flex flex-col md:flex-row md:items-start items-center justify-between gap-6 border-t border-white/10">
      <div className="flex gap-4 items-center">
        <div>
          <img
          loading="lazy"
            src="/logo2.svg"
            alt="Logo"
            className="w-[500px] h-auto max-w-full mx-auto object-contain"
          />

          <p className="uppercase text-sm sm:text-base font-lime md:text-xl lg:pr-24">
            Director / Cinematographer
          </p>
          <p className="text-xs text-left md:block hidden italic pt-8 pl-6 text-white/50">Developed by <a href="https://techxudo.com/" target="_blank" className="text-white">Techxudo</a></p>
        </div>
      </div>
      <div className="lg:pr-24 pt-0 md:pt-8 flex flex-col items-center md:items-end gap-4">
        <nav className="flex md:flex-row flex-col items-center md:items-end justify-center gap-2 md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm md:text-base hover:opacity-70 transition-opacity duration-300 flex items-center gap-2 font-normal"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.id ? `/#${item.id}` : "#"}
                onClick={(event) => handleNavClick(event, item.id)}
                className="text-sm md:text-base hover:opacity-70 transition-opacity duration-300 flex items-center gap-2 font-normal"
              >
                {/* <Icon size={16} /> */}
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
      <p className="text-xs md:hidden block text-left pt-2 italic text-white/50">Developed by <a href="https://techxudo.com/" target="_blank" className="text-white">Techxudo</a></p>
    </div>
  );
};

export default Footer;

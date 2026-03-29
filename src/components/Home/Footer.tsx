"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import NextImage from "next/image";
import { Phone, Home, FolderOpen, Image, UserRound } from "lucide-react";

const navItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: UserRound },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Gallery", id: "gallery", icon: Image },
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
    <div className="relative bg-black text-white py-10 sm:py-6 px-4 uppercase text-center font-bold flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
      <div className="flex gap-4">
        <img
          loading="lazy"
          src="/kadir.jpg"
          alt="Kadir"
          className="w-20 h-20 md:w-24 md:h-24 mt-2 translate-x-8 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <img
            loading="lazy"
            className="w-[600px] mx-auto h-auto max-w-full object-contain"
            src="/logo2.svg"
            alt="Logo"
          />

          <p className="uppercase text-base sm:text-xl pr-34">
            A Film filmmaker & cinematographer
          </p>
        </div>
      </div>
      <div className="pr-24">
        <nav className="flex flex-col items-start justify-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.id ? `/#${item.id}` : "#"}
                onClick={(event) => handleNavClick(event, item.id)}
                className="text-sm md:text-base hover:opacity-70 transition-opacity duration-300 flex items-center gap-2"
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="pt-2">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3">
            <Phone size={18} />
            <p>7474665773</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

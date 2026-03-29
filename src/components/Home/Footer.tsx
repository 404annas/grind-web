"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Home, FolderOpen, Image, UserRound } from "lucide-react";

const navItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: UserRound },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Gallery", id: "gallery", icon: Image },
  { label: "Contact", id: "contact", icon: Phone },
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
    <div className="relative bg-black text-white py-8 px-10 uppercase text-center font-bold flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
      <div className="flex gap-4 items-center">
        <div>
          <img
          loading="lazy"
            src="/logo2.svg"
            alt="Logo"
            className="w-[500px] h-auto max-w-full object-contain"
          />

          <p className="uppercase text-base sm:text-xl pr-24">
            A filmmaker & cinematographer
          </p>
        </div>
      </div>
      <div className="pr-20">
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
        <p className="text-xs pt-4 text-white/50">Developed by <a href="https://techxudo.com/" target="_blank" className="text-white">Techxudo</a></p>
      </div>
    </div>
  );
};

export default Footer;

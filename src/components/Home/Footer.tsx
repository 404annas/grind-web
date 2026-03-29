"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
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
    <div className="relative bg-black text-white py-10 sm:py-6 px-10 uppercase text-center font-bold flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
      <div>
        <img
          loading="lazy"
          className="w-[600px] mx-auto h-auto max-w-full object-contain"
          src="/logo2.svg"
          alt="Logo"
        />

        <p className="uppercase text-base sm:text-xl">
          A Film Production Company & Creative Agency
        </p>
      </div>
      <div className="pr-24">
        <nav className="flex flex-col items-start justify-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.id ? `/#${item.id}` : "#"}
              onClick={(event) => handleNavClick(event, item.id)}
              className="text-sm md:text-base hover:opacity-70 transition-opacity duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;

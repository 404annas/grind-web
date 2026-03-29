"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "./navItems";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    if (!sectionId) return;

    event.preventDefault();
    setIsOpen(false); // Close menu on click

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
    <nav className="absolute -top-6 md:-top-10 left-0 z-50 flex w-full items-center justify-between px-4 py-4 md:px-10 md:py-5 bg-transparent">
      {/* Logo */}
      <Link href={"/"}>
        <div className="w-28 md:w-40 hover:opacity-80 cursor-pointer transition-all duration-300">
          <Image
            src={logo}
            alt="Kadir logo"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Link>

      {/* Menu Items (Desktop) */}
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

      {/* Right Side: Desktop Contact & Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Contact info - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex items-center gap-2 text-white rounded-full border border-white/20 bg-white/5 px-5 py-3">
          <Phone size={18} className="text-white" />
          <p className="text-white md:text-base text-sm">7474665773</p>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/10 text-white transition-transform active:scale-90"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Popup Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-6 right-4 w-[280px] bg-[#111] border border-white/10 rounded-3xl p-5 z-[70] shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-white/50 text-sm font-medium uppercase">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.id ? `/#${item.id}` : "#"}
                    onClick={(event) => handleNavClick(event, item.id)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="h-px w-full bg-white/10 my-2" />

                {/* Contact inside popup */}
                <div className="flex items-center gap-3 text-white bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-tighter">Call us</p>
                    <p className="text-base font-medium">7474665773</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
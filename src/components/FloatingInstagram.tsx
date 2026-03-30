'use client';

import { FaInstagram } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const FloatingInstagram = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      {/* Phone Number */}
      {/* <a
        href="tel:7474665773"
        className="flex items-center justify-center gap-2 rounded-full bg-black p-4 sm:p-5 text-white border border-white hover:bg-white/10 transition-colors duration-300"
      >
        <Phone size={22} />
      </a> */}
      
      {/* Instagram */}
      <a
        href="https://instagram.com/kadir.mayel"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Instagram profile"
        className="flex items-center justify-center rounded-full bg-black p-4 sm:p-5 text-white border border-white hover:bg-white/10 transition-colors duration-300"
      >
        <FaInstagram size={22}/>
      </a>
    </div>
  );
};

export default FloatingInstagram;

'use client';

import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const FloatingInstagram = () => {
  return (
    <a
      href="https://instagram.com/kadir.mayel"
      target="_blank"
      rel="noreferrer"
      aria-label="Open Instagram profile"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 rounded-full bg-black p-5 text-white"
    >
      <FaInstagram size={22}/>
    </a>
  );
};

export default FloatingInstagram;

'use client';
import React from 'react';
import Navbar from './Navbar';
import KADIR from '../../../public/KADIR.png';
import Mayel from '../../../public/Mayel.png';

const heroVid = '/hero-video-web.mp4';
const heroLogos = [KADIR, Mayel];

const Hero = () => {
  return (
    <section className="h-screen w-full overflow-hidden bg-black p-2 md:p-3">
      {/* Main Rounded Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/5 bg-black">
        <Navbar />

        {/* 1. Muted Background Video (The "Ghost" layer) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        {/* 3. The Masked Logo Section (Bottom Center) */}
        <div className="absolute inset-x-0 -bottom-60 translate-x-20 flex h-full items-end justify-center pointer-events-none">
          <div className="relative w-full max-w-[95%] mb-[-2%] flex justify-center items-end">
            {/* --- PRIMARY MASKED VIDEO LAYER --- */}
            <div className="relative w-full h-[30vh] md:h-[45vh] lg:h-[90vh] rotate-[7.6deg] flex items-end justify-center -gap-[50%]">
              {heroLogos.map((logo, index) => (
                <div
                  key={logo.src}
                  className="relative h-full"
                  style={{
                    width: index === 0 ? '44%' : '54%',
                    transform: index === 1 ? 'translateY(-18.5%) translateX(-20%)' : 'none',
                  }}
                >
                  {/* This container clips the video to the logo shape */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      maskImage: `url(${logo.src})`,
                      WebkitMaskImage: `url(${logo.src})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'center bottom',
                      WebkitMaskPosition: 'center bottom',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                    }}
                  >
                    {/* Brighter Video playing INSIDE the logo */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover scale-110 brightness-125 contrast-125 saturate-150"
                    >
                      <source src={heroVid} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

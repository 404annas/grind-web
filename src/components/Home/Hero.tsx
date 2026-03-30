'use client';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const heroVid = '/hero-video-web.mp4';
const logoSrc = '/logo2.svg'; // Using your requested logo only

interface HeroProps {
  onReady?: () => void;
}

const Hero = ({ onReady }: HeroProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload the video
    const video = document.createElement('video');
    video.src = heroVid;
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      onReady?.();
    };
    
    video.addEventListener('canplaythrough', handleCanPlay);
    video.load();
    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [onReady]);

  return (
    <section id="home" className="h-screen w-full overflow-hidden bg-black p-2 md:p-3">
      {/* Main Rounded Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/5 bg-black">
        <Navbar />

        {/* 1. Muted Background Video (The "Ghost" layer) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        {/* 2. The Massive Masked Logo Section (Centered Bottom) */}
        <div className="absolute inset-x-0 bottom-20 md:bottom-0 flex h-full items-end justify-center pointer-events-none overflow-hidden">
          {/* 
              W-[140%] makes the logo span wider than the screen for that monumental look.
              No rotations or translateY here, so it stays perfectly "equal up and down".
          */}
          <div className="relative w-[115%] md:w-[130%] lg:w-[140%] mb-[-2%]">
            
            {/* Primary Logo Container */}
            <div className="relative w-full h-[25vh] md:h-[45vh] lg:h-[50vh]">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  maskImage: `url(${logoSrc})`,
                  WebkitMaskImage: `url(${logoSrc})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center bottom',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              >
                {/* High contrast video inside the logo */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover scale-110 brightness-150 contrast-125 saturate-150"
                >
                  <source src={heroVid} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Gradient - Adds depth to the bottom and grounds the logo */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* 4. Grain/Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
      </div>
    </section>
  );
};

export default Hero;
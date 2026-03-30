'use client';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const heroVid = '/hero-video-web.mp4';

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
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        {/* 2. KADIR MAYEL Heading Section (replaces logo at bottom) */}
        <div className="absolute inset-x-0 bottom-0 flex h-full items-end justify-center pointer-events-none overflow-hidden">
          <div className="relative w-[115%] md:w-[130%] lg:w-[140%] mb-[-2%]">
            {/* Primary Container */}
            <div className="relative w-full h-[25vh] md:h-[45vh] lg:h-[50vh]">
              {/* Video masked to text shape - KADIR MAYEL */}
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end pb-8">
                <h1 className="font-lime italic text-[44px] leading-none sm:text-5xl md:text-7xl lg:text-[180px] text-white tracking-tighter relative">
                  {/* Video clipped to text */}
                  <span
                    className="block"
                    style={{
                      WebkitTextFillColor: '',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      backgroundImage: `url(${heroVid})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    KADIR MAYEL
                    <sup className="text-xs md:text-sm lg:text-2xl tracking-wide align-top ml-1" style={{ WebkitTextFillColor: 'white', WebkitBackgroundClip: 'unset', backgroundClip: 'unset' }}>TM</sup>
                  </span>
                </h1>
                {/* Paragraph below */}
                <p className="font-lime text-sm sm:text-base md:text-lg lg:text-xl mb-2 md:-mt-6 text-white tracking-wide uppercase">
                  Director / Cinematographer
                </p>
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

'use client';

import { useState, useEffect } from 'react';
import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import HomeHashScroller from '@/components/Home/HomeHashScroller';
import Projects from '@/components/Home/Projects';
import Loader from '@/components/Home/Loader';
import Hero2 from '@/components/Home/Hero2';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isLoaderAnimated, setIsLoaderAnimated] = useState(false);

  // Handle loader animation completion
  const handleLoaderAnimated = () => {
    setIsLoaderAnimated(true);
  };

  // Handle hero video ready
  const handleHeroReady = () => {
    setIsHeroReady(true);
  };

  // Only stop loading when both loader animation is done AND hero is ready
  useEffect(() => {
    if (isLoaderAnimated && isHeroReady) {
      setIsLoading(false);
    }
  }, [isLoaderAnimated, isHeroReady]);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderAnimated} />}
      <HomeHashScroller />
      <Hero2   onReady={handleHeroReady} />
      {!isLoading && (
        <>
          <About />
          <Projects />
        </>
      )}
    </>
  );
};

export default Home;

'use client';

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const defaultCards = [
  {
    src: "/dhar-vid1.mp4",
    title: "Dhar Vid 1",
    rotation: -6,
    position: "",
    z: "z-20",
  },
  {
    src: "/dhar-vid2.mp4",
    title: "Dhar Vid 2",
    rotation: -1,
    position: "",
    z: "z-30",
  },
  {
    src: "/dhar-vid3.mp4",
    title: "Dhar Vid 3",
    rotation: 4,
    position: "",
    z: "z-20",
  },
];

const ProjectCards = ({
  title,
  cards = defaultCards,
}) => {
  const [canHover, setCanHover] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(hover: hover) and (pointer: fine)").matches
      : true,
  );

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setCanHover(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches,
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    cardRefs.current.forEach((cardElement, index) => {
      if (!cardElement) return;
      gsap.set(cardElement, {
        x: 0,
        y: 0,
        rotation: cards[index].rotation,
        transformOrigin: "center center",
      });
    });

    const ticker = gsap.ticker.add(() => {
      cardRefs.current.forEach((cardElement, index) => {
        if (!cardElement) return;

        const rect = cardElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;

        const deltaX = centerX - mouseX;
        const deltaY = centerY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = canHover ? 700 : 0;
        const strength = canHover ? 70 : 0;

        let targetX = 0;
        let targetY = 0;

        if (distance < maxDistance && distance > 0) {
          const force = ((maxDistance - distance) / maxDistance) * strength;
          const normalizedX = deltaX / distance;
          const normalizedY = deltaY / distance;

          targetX = normalizedX * force;
          targetY = normalizedY * force;
        }

        const currentX = gsap.getProperty(cardElement, "x");
        const currentY = gsap.getProperty(cardElement, "y");

        const lerpFactor = 0.12;
        const newX = gsap.utils.interpolate(currentX, targetX, lerpFactor);
        const newY = gsap.utils.interpolate(currentY, targetY, lerpFactor);

        gsap.set(cardElement, {
          x: newX,
          y: newY,
          rotation: cards[index].rotation,
        });
      });
    });

    const handleMouseMove = (e) => {
      mousePositionRef.current = canHover
        ? { x: e.clientX, y: e.clientY }
        : { x: 0, y: 0 };
    };

    const handleMouseLeave = () => {
      cardRefs.current.forEach((cardElement, index) => {
        if (!cardElement) return;
        gsap.to(cardElement, {
          x: 0,
          y: 0,
          rotation: cards[index].rotation,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    containerElement.addEventListener("mousemove", handleMouseMove);
    containerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gsap.ticker.remove(ticker);
      containerElement.removeEventListener("mousemove", handleMouseMove);
      containerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canHover, cards]);

  return (
    <section
      data-navbar-theme="dark"
      className="relative w-full overflow-hidden bg-black px-4 pb-10 text-white md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {title ? (
          <>
            <Image
              src={"/arrow-d.svg"}
              alt=""
              width={160}
              height={160}
              className="mx-auto mt-2 w-20 translate-x-24 rotate-40 animate-float pb-5 sm:translate-x-80 md:w-40 translate-y-24"
            />
            <h1 className="pb-10 text-center text-4xl font-bold uppercase sm:text-5xl">
              {title}
            </h1>
          </>
        ) : null}

        <div
          ref={containerRef}
          className="relative flex min-h-[560px] flex-col items-center justify-center gap-4 lg:min-h-[640px] lg:flex-row"
        >
          {cards.map((card, index) => (
            <article
              key={card.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative h-[500px] w-[300px] overflow-hidden rounded-[28px] border-4 border-white md:h-[560px] md:w-[340px] ${card.z} ${card.position}`}
            >
              <video
                src={card.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;

"use client";

import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  tag: string;
  title: string;
  color: string;
  className?: string;
}

const ProjectCard = ({
  image,
  tag,
  title,
  color,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative group cursor-pointer border-[8px] rounded-3xl overflow-hidden aspect-[4/5] w-full transition-transform duration-500 hover:-rotate-2 ${className}`}
      style={{ borderColor: color }}
    >
      {/* Background Image */}
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Slanted Content Box (Doodle Design) */}
      <div
        className="absolute bottom-3 left-3 right-3 p-6 pt-10 flex flex-col items-start justify-end"
        style={{
          backgroundColor: color,
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
          borderRadius: "0px 20px 30px 30px",
        }}
      >
        {/* Arrow Button */}
        <div className="absolute top-4 right-6 bg-white rounded-full p-2 text-black">
          <ArrowUpRight size={24} strokeWidth={3} />
        </div>

        {/* Title */}
        <h3 className="text-white text-lg md:text-xl font-bold leading-tight tracking-tight mb-2">
          {title}
        </h3>

        {/* Tag */}
        <span className="bg-white/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
          {tag}
        </span>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Hello World",
      tag: "Bullit",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
      color: "#FF5F2D", // Orange
      offset: "translate-y-24", // Lowest
    },
    {
      title: "Hello World",
      tag: "Roasta",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600",
      color: "#0084FF", // Blue
      offset: "translate-y-12", // Center
    },
    {
      title: "Hello World",
      tag: "Loco",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
      color: "#37C682", // Green
      offset: "translate-y-0", // Highest
    },
  ];

  return (
    <section className="bg-[#FAF7F0] min-h-screen py-10 pb-34 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Projects Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} className={project.offset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

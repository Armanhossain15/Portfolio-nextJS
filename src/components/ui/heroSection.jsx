import React from 'react';

import { Button } from "@/components/ui/button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className=" flex items-center justify-center px-5 py-14 md:py-16 lg:py-20 sm:px-6 lg:px-8 relative overflow-hidden border-b">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(110, 110, 110, 1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 dark:from-slate-900/50 dark:to-slate-900/95" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Rest of your content remains the same */}
        <div className="relative mb-6">
          <Image
            src="/arman.jpg"
            width={100}
            height={100}
            alt="arman"
            className="z-30 rounded-full w-24 h-24 object-cover border-2 border-slate-800 mx-auto"
          />
        </div>

        {/* Ready for Project Badge */}
        <div className="inline-flex z-10 text-center text-base font-medium tracking-tighter text-black dark:text-white items-center gap-4 border-2 px-7 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:border-gray-900 transition duration-200 mb-5">
          <div className='relative'>
            <div className="bg-green-600 w-4 h-4 rounded-full animate-ping   "></div>
            <div className="bg-green-600 w-3 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <span>Available for freelance work</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Frontend Developer Portfolio
        </h1>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8  mx-auto">
          Passionate frontend developer with expertise in React, Next.js, and modern web technologies.
          Creating responsive and user-friendly interfaces with clean, efficient code.
          Committed to delivering high-quality web solutions that make a difference.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button size="size1" className='bg-green-600 text-white hover:bg-transparent hover:border hover:text-slate-900 hover:border-gray-300'>View Projects</Button>
          <Button size="size1" variant="outline" className='hover:bg-green-600 hover:text-white '>Conatct with me</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
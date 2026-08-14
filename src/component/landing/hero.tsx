import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full bg-[#49BBBD] min-h-170 md:min-h-150 lg:min-h-175 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-34 md:px-16 py-12 md:py-0 relative overflow-hidden [clip-path:ellipse(125%_100%_at_50%_0%)] md:[clip-path:ellipse(120%_100%_at_50%_0%)]">

      {/* 1. Left Text Column: Standardizes width across dynamic responsive resizing panels */}
      <div className="w-full md:w-[45%] text-white flex flex-col justify-center text-center md:text-left gap-6 z-10 mb-10 md:mb-0">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <span className="text-[#F48C06]">Studying</span> Online is now much easier
        </h1>
        <p className="text-base sm:text-xl text-white/90 max-w-md mx-auto md:mx-0 font-light">
          TOTC is an interesting platform that will teach you in a more interactive way
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-2">
          <button className="btn bg-white/20 hover:bg-white/30 text-white rounded-full px-8 border-none normal-case font-semibold w-full sm:w-auto shadow-md">
            Join for free
          </button>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-white rounded-full size-12 flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform">
              <FaPlay className="text-[#49BBBD] translate-x-px" />
            </div>
            <button className="text-white font-medium hover:underline decoration-2">
              Watch how it works
            </button>
          </div>
        </div>
      </div>

      {/* 2. Right Graphical Column: Anchored aspect-ratio wrapper to isolate Next.js dynamic fill rules */}
      <div className="w-full md:w-[55%] flex justify-center items-end relative self-end h-auto mt-auto">

        {/* Aspect ratio frame guarantees the overlay graphic maps smoothly under zero layout shift */}
        <div className="relative w-full max-w-120 md:max-w-137.5 lg:max-w-162.5 aspect-4/3 sm:aspect-[1.15/1] md:aspect-[0.9/1] lg:aspect-[1.1/1] xl:aspect-[1.2/1]">

          {/* Layer 1: The Lady Portrait Background Graphic */}
          <Image
            src="/images/hero-lady.png"
            alt="hero profile portrait"
            fill
            className="object-contain object-bottom select-none"
            sizes="(max-w-768px) 100vw, 55vw"
            priority
          />

          {/* Layer 2: The Multi-Card Combined Overlay Artwork */}
          <Image
            src="/images/stats.png"
            alt="hero composite cards overlay decoration"
            fill
            className="object-contain object-bottom pointer-events-none select-none z-20"
            sizes="(max-w-768px) 100vw, 55vw"
            priority
          />

        </div>

      </div>

    </div>
  )
}

export default Hero
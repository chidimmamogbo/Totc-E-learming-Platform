import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowRight } from "react-icons/hi";

const Courses = (): React.JSX.Element => {
  const section1Pills = [
    '/images/Book-orange.png', '/images/Book-pink.png', '/images/Book-brown.png',
    '/images/Book-yellow.png', '/images/Book-violet.png', '/images/Book-cyan.png',
    '/images/Book-bluish-grey.png'
  ];

  const section2PillsLeft = [
    '/images/Book-orange.png', '/images/Book-pink.png', '/images/Book-brown.png',
    '/images/Book-yellow.png'
  ];

  const section2PillsRight = [
    '/images/Book-bluey.png', '/images/Book-cyan.png', '/images/Book-bluish-grey.png'
  ];

  const section3PillsRight = [
    '/images/Book-pink.png', '/images/Book-brown.png', '/images/Book-yellow.png',
    '/images/Book-bluey.png', '/images/Book-cyan.png', '/images/Book-bluish-grey.png'
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-6 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      {/* --- Section Global Header --- */}
      <div className="max-w-7xl mx-auto mb-16 text-left">
        <h2 className="text-[#2F327D] font-bold text-3xl tracking-tight mb-2">
          Explore Course
        </h2>
        <p className="text-[#696F8C] text-sm font-light">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Lorem Ipsum */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#2F327D] font-bold text-lg flex items-center gap-2">
              <span className="text-sky-500">🔵</span> Lorem Ipsum
            </h3>
            <Link href="/courses" className="text-[#00CBB8] text-sm font-semibold flex items-center gap-1 hover:underline">
              SEE ALL <HiArrowNarrowRight className="size-4" />
            </Link>
          </div>

          {/* Explicit 70% / 30% Width Distribution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Column (70% width): Divides into two balanced columns on mobile screens */}
            <div className="grid grid-cols-7 sm:flex sm:flex-nowrap gap-x-1 gap-y-4 justify-items-center sm:justify-start items-center overflow-visible py-4 w-full md:justify-center">
              {section1Pills.map((src, i) => (
                <div key={i} className="relative w-16 sm:w-20 h-36 sm:h-44 -rotate-12 transition-transform duration-300 hover:-translate-y-2 shrink-0">
                  <Image src={src} alt="Course Category" fill priority sizes="300px" className="object-contain" />
                </div>
              ))}
            </div>
            
            {/* Right Column (30% width): Forced to stay on one row without wrapping on desktop */}
            <div className="flex justify-center lg:justify-end w-full min-w-max md:justify-center">
              <Link href="/courses/food-details" className="relative block w-full max-w-105 aspect-460/240 shadow-[0_15px_45px_rgba(38,45,118,0.06)] rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(38,45,118,0.1)] transition-all">
                <Image src="/images/Food-card.png" alt="Food Course Card" fill priority sizes="420px" className="object-contain" />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: Quisque a Consequat */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-col gap-6 items-center">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#2F327D] font-bold text-lg flex items-center gap-2">
              <span className="text-[#00CBB8]">🟢</span> Quisque a Consequat
            </h3>
            <Link href="/courses" className="text-[#00CBB8] text-sm font-semibold flex items-center gap-1 hover:underline">
              SEE ALL <HiArrowNarrowRight className="size-4" />
            </Link>
          </div>

          {/* Explicit 80% / 20% Width Distribution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_0.3fr] gap-8 items-center w-full">
            {/* Left Column (80% width): Combines Pills + Card. Wraps on small screens with card dropping below */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-start w-full md:justify-center">
              {/* Pills group stays on a single tight row line */}
              <div className="flex flex-nowrap gap-x-1 justify-start items-center overflow-visible py-2">
                {section2PillsLeft.map((src, i) => (
                  <div key={i} className="relative w-16 sm:w-18 h-36 sm:h-40 -rotate-12 transition-transform duration-300 hover:-translate-y-2 shrink-0">
                    <Image src={src} alt="Course Category" fill priority sizes="300px" className="object-contain" />
                  </div>
                ))}
              </div>
              {/* Center interactive Moon Card */}
              <Link href="/courses/moon-details" className="relative block w-full max-w-[420px] aspect-[460/240] shadow-[0_15px_45px_rgba(38,45,118,0.06)] rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(38,45,118,0.1)] transition-all">
                <Image src="/images/Moon-card.png" alt="Moon Course Card" fill priority sizes="420px" className="object-contain" />
              </Link>
            </div>

            {/* Right Column (20% width) */}
            <div className="flex flex-nowrap gap-x-1 justify-start lg:justify-end items-center py-2 w-full overflow-visible md:justify-center">
              {section2PillsRight.map((src, i) => (
                <div key={i} className="relative w-16 sm:w-18 h-36 sm:h-40 -rotate-12 transition-transform duration-300 hover:-translate-y-2 shrink-0">
                  <Image src={src} alt="Course Category" fill priority sizes="100px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: Aenean Facilisis */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-col gap-6">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#2F327D] font-bold text-lg flex items-center gap-2">
              <span className="text-orange-400">🧳</span> Aenean Facilisis
            </h3>
            <Link href="/courses" className="text-[#00CBB8] text-sm font-semibold flex items-center gap-1 hover:underline">
              SEE ALL <HiArrowNarrowRight className="size-4" />
            </Link>
          </div>

          {/* Balanced Equal 50/50 Width Distribution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Column (50% width): Handles Orange Pill + Camera Card Combination Row */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-start md:justify-center w-full">
              <div className="relative w-16 sm:w-20 h-36 sm:h-44 -rotate-12 transition-transform duration-300 hover:-translate-y-2 shrink-0">
                <Image src="/images/Book-orange.png" alt="Course Category" fill priority sizes="300px" className="object-contain" />
              </div>
              <Link href="/courses/camera-details" className="relative block w-full max-w-[420px] aspect-[460/240] shadow-[0_15px_45px_rgba(38,45,118,0.06)] rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(38,45,118,0.1)] transition-all">
                <Image src="/images/Camera-card.png" alt="Camera Course Card" fill priority sizes="420px" className="object-contain" />
              </Link>
            </div>

            {/* Right Column (50% width)*/}
            <div className="flex flex-nowrap gap-x-1 justify-start lg:justify-end items-center py-2 w-full overflow-visible md:justify-center">
              {section3PillsRight.map((src, i) => (
                <div key={i} className="relative w-16 sm:w-18 h-36 sm:h-40 -rotate-12 transition-transform duration-300 hover:-translate-y-2 shrink-0">
                  <Image src={src} alt="Course Category" fill priority sizes="100px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;

import React, { useState } from 'react';
import Image from 'next/image';
import { HiArrowNarrowRight } from "react-icons/hi";

interface TestimonialData {
  id: number;
  text: string;
  author: string;
  rating: number;
  reviewsCount: number;
}

const testimonialsList: TestimonialData[] = [
  {
    id: 1,
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    author: "Gloria Rose",
    rating: 5,
    reviewsCount: 12
  },
  {
    id: 2,
    text: "This platform completely revolutionized our grading structure and virtual class setup. The interface feels natural, simple to deploy, and highly optimized for our global campus student baseline.",
    author: "Marcus Vance",
    rating: 5,
    reviewsCount: 18
  },
  {
    id: 3,
    text: "Excellent toolsets for real-time classroom assignments and roster tracking. The absolute best SaaS framework we have onboarded this decade for hybrid education models.",
    author: "Elena Rostova",
    rating: 5,
    reviewsCount: 24
  }
];

const Testimonials = (): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
  };

  return (
    <section className="bg-white py-24 pb-36 px-8 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      {/* 
        GRID FIX: Adjusted from [1.1fr_0.9fr] to [0.9fr_1.1fr].
        This narrows the left typography section and widens the image side, matching the mockup perfectly.
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography Headers & Assessment Inputs */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start max-w-xl mx-auto lg:mx-0 w-full">
          <div className="flex items-center gap-4">
            <div className="w-[80px] h-[1px] bg-[#52565E]" />
            <span className="text-[#52565E] uppercase tracking-[0.2em] text-xs font-semibold">
              Testimonial
            </span>
          </div>

          <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            What They Say?
          </h2>

          <div className="flex flex-col gap-5 text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed font-light">
            <p>
              TOTC has got more than 100k positive ratings from our users around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the Skilline.
            </p>
            <p className="mt-2">
              Are you too? Please give your assessment
            </p>
          </div>

          {/* Assessment Outline Button */}
          <div className="mt-4">
            <button className="flex items-center justify-between w-[280px] sm:w-[300px] border border-[#00CBB8] text-[#00CBB8] hover:bg-[#00CBB8] hover:text-white rounded-full pl-6 pr-2 py-2 text-sm sm:text-base font-medium transition-all duration-300 group shadow-sm active:scale-98">
              <span className="tracking-wide">Write your assessment</span>
              <div className="bg-transparent border border-[#00CBB8] text-[#00CBB8] rounded-full size-10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-[#00CBB8] shrink-0 ml-4">
                <HiArrowNarrowRight className="size-5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Corrected Backdrop Canvas & Floating Review Layout */}
        <div className="relative flex justify-center lg:justify-end items-center w-full px-4 lg:px-0">
          
          {/* Main Visual Sandbox Box */}
          <div className="relative w-full max-w-[500px] aspect-[500/440]">
            
            {/* Main Picture Component */}
            <div className="absolute top-0 left-0 w-[90%] h-[90%] rounded-[24px] overflow-hidden">
              <Image
                src="/images/Testimonial.png"
                alt="Happy student holding class files"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-contain"
              />
            </div>

            {/* 
              ARROW FIX: Replaced broad 'right-[X%]' rules with an absolute 'left-[85%]' strategy.
              This guarantees the navigation button touches the right border of the student profile frame on all devices.
            */}
            <button 
              onClick={handleNextSlide}
              className="absolute top-[22%] left-[74%] sm:left-[69.89%] bg-white text-[#00CBB8] hover:bg-[#00CBB8] hover:text-white rounded-full size-11 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-30 border border-gray-100/40"
              aria-label="Next Testimonial"
            >
              <HiArrowNarrowRight className="size-5" />
            </button>

            {/* --- RE-POSITIONED TESTIMONIAL CARDS STACK --- */}
            {/* Perfectly aligned with the absolute card edges from the reference image */}
            <div className="absolute -bottom-20 right-0 md:-right-10 w-[92%] sm:w-[86%] h-[220px] z-20">
              {testimonialsList.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 bg-white rounded-[20px] shadow-[0_25px_55px_rgba(38,45,118,0.06)] border-l-[12px] border-l-[#FF6B6B] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 transform ${
                    index === activeIndex 
                      ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                      : 'opacity-0 scale-95 pointer-events-none translate-y-4'
                  }`}
                >
                  <p className="text-[#5F6180] text-xs sm:text-sm lg:text-[14px] leading-relaxed font-light tracking-wide text-left flex-grow">
                    &ldquo;{slide.text}&rdquo;
                  </p>

                  <div className="flex justify-between items-end mt-4 pt-3 border-t border-gray-50 flex-wrap gap-2">
                    <span className="text-[#2F327D] font-bold text-sm sm:text-base tracking-wide">
                      {slide.author}
                    </span>
                    
                    <div className="flex flex-col items-end text-right shrink-0">
                      <div className="flex gap-0.5 text-[#F48C06] text-xs sm:text-sm">
                        {Array.from({ length: slide.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-[#696F8C] text-[10px] sm:text-xs font-light mt-1 tracking-wide">
                        {slide.reviewsCount} reviews at Yelp
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* ------------------------------------------------ */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

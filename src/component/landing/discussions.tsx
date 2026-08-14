import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DiscussionShowcase = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-30 w-full overflow-hidden flex flex-col items-center">
      {/* Main Two-Column Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
        
        {/* Left Media Column - Renders your unified image file */}
        <div className="relative flex justify-center items-center w-full px-4">
          {/* Proportional aspect ratio box ensures your interface frames scale cleanly together */}
          <div className="relative w-full max-w-[500px] aspect-[500/380]">
            
            {/* Background Decorative Abstract Shapes (Matching the blue circle loop accents) */}
            <div className="absolute top-[8%] right-[16%] w-16 h-16 border-[5px] border-[#23BDEE] rounded-full -z-10 bg-transparent" />
            <div className="absolute top-[28%] right-[8%] w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#F88C3D] border-b-[6px] border-b-transparent -z-10 transform rotate-12" />
            <div className="absolute -bottom-4 left-0 w-24 h-24 bg-[#E2EEFF] rounded-[20px] -z-10 opacity-60" />
            
            {/* Unified Private Discussion Windows Image Asset */}
            <div className="relative w-full h-full">
              <Image
                src="/images/discussions.png"
                alt="One-on-one private video chat windows highlighting teacher-student interactions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
              />
            </div>

          </div>
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col gap-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            One-on-One <br />
            <span className="text-[#00CBB8]">Discussions</span>
          </h2>
          
          <p className="text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed font-light">
            Teachers and teacher assistants can talk with students privately without leaving 
            the Zoom environment.
          </p>
        </div>

      </div>

      {/* Centered "See more features" CTA Action Button */}
      <div className="w-full flex justify-center mt-4">
        <Link 
          href="/features" 
          className="px-8 py-3.5 border border-[#00CBB8] text-[#00CBB8] font-medium text-sm sm:text-base rounded-full hover:bg-[#00CBB8] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md active:scale-98"
        >
          See more features
        </Link>
      </div>
    </section>
  );
};

export default DiscussionShowcase;

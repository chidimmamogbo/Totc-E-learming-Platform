import React from 'react';
import Image from 'next/image';

const WhatIsTotc = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-18 lg:px-34 w-full">
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-14 flex flex-col gap-6">
        <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl tracking-tight">
          What is <span className="text-[#00CBB8]">TOTC?</span>
        </h2>
        <p className="text-[#696F8C] text-sm sm:text-[18px] leading-relaxed max-w-4xl mx-auto font-light">
          TOTC is a platform that allows educators to create online classes whereby they can
          store the course materials online; manage assignments, quizzes and exams; monitor
          due dates; grade results and provide students with feedback all in one place.
        </p>
      </div>

      {/* Two-Column Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Left Card: For Instructors */}
        <div className="relative group overflow-hidden rounded-[20px] aspect-4/3 w-full shadow-md">
          {/* Overlay Dark Tint Mask to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-300 group-hover:bg-black/50" />
          <Image
            src="/images/instructor-smiling.png"
            alt="Instructor smiling in class"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Centered Overlay Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-[28px] uppercase tracking-wider mb-5">
              For Instructors
            </h3>
            <button className="text-white text-sm sm:text-base border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-full px-6 py-2.5 font-medium">
              Start a class today
            </button>
          </div>
        </div>

        {/* Right Card: For Students */}
        <div className="relative group overflow-hidden rounded-[20px] aspect-4/3 w-full shadow-md">
          {/* Overlay Dark Tint Mask to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-300 group-hover:bg-black/50" />
          <Image
            src="/images/developers.png"
            alt="Students listening to lecture"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Centered Overlay Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-[28px] uppercase tracking-wider mb-5">
              For Students
            </h3>
            <button className="bg-[#23BDEE] text-white text-sm sm:text-base hover:bg-[#1fa9d6] transition-colors duration-300 rounded-full px-8 py-3 font-medium shadow-md">
              Enter access code
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsTotc;

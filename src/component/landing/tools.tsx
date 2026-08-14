import React from 'react';
import Image from 'next/image';

const ToolsSection = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col gap-5 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight max-w-xl mx-auto lg:mx-0">
            <span className="text-[#00CBB8]">Tools</span> For Teachers <br className="hidden sm:inline lg:hidden" /> And Learners
          </h2>
          
          <p className="text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Class has a dynamic set of teaching tools built to be deployed and used during class. 
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>

        {/* Right Media Column with Dynamic Abstract Dots and Floating Assets */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center w-full px-4">
          <div className="relative w-full max-w-[440px] aspect-[440/420]">
            
            {/* --- ABSTRACT BACKGROUND DECORATIONS --- */}
            {/* Main Red Geometric Circle Mask (Sits behind student's shoulders) */}
            <div className="absolute top-[18%] left-[24%] w-[52%] aspect-square bg-[#FF6B6B] rounded-full -z-10" />

            {/* Small Colorful Accent Circles */}
            <div className="absolute top-[8%] right-[16%] w-4 h-4 bg-[#33EFA0] rounded-full -z-10" />
            <div className="absolute bottom-[24%] left-[2%] w-4 h-4 bg-[#FF8F6B] rounded-full -z-10" />
            <div className="absolute bottom-[12%] right-[10%] w-3 h-3 bg-[#5B72EE] rounded-full -z-10" />

            {/* Floating UI Asset Badges (Faded boxes mimicking the image details) */}
            <div className="absolute top-[26%] left-[6%] w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center -z-10 border border-gray-50/50">
              <span className="text-xl">📊</span>
            </div>
            <div className="absolute top-[38%] right-[4%] w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center -z-10 border border-gray-50/50">
              <span className="text-xl">🎓</span>
            </div>

            {/* Simulated background dot array layout structures */}
            <div className="absolute top-[45%] left-0 w-2 h-2 bg-gray-200 rounded-full opacity-60 -z-10" />
            <div className="absolute top-[20%] right-0 w-2 h-2 bg-gray-200 rounded-full opacity-60 -z-10" />
            {/* -------------------------------------- */}

            {/* Main Foreground Student Image Wrapper */}
            <div className="relative w-full h-full">
              <Image
                src="/images/student.png"
                alt="Student holding notebooks and thinking"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-contain object-bottom"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;

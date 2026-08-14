import React from 'react';
import Image from 'next/image';

const QuizShowcase = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Media Column - Renders your unified image file */}
        <div className="relative flex justify-center items-center w-full px-4">
          {/* Proportional box sandbox to keep your graphics scaling sharply together on all phones */}
          <div className="relative w-full max-w-120 aspect-480/380">
            
            {/* Background Decorative Abstract Particles (Matching layout dots outside the main card boundary) */}
            <div className="absolute top-[8%] left-[-4%] w-14 h-14 bg-[#5B72EE] rounded-full -z-10 opacity-90" />
            <div className="absolute top-0 left-6 w-4 h-4 bg-[#FF8F6B] rounded-full -z-10" />
            <div className="absolute bottom-[4%] left-2 w-3 h-3 bg-[#33EFA0] rounded-full -z-10" />
            <div className="absolute top-[45%] right-[-2%] w-2.5 h-2.5 bg-[#FF6B6B] rounded-full -z-10" />
            
            {/* Unified Location & Quiz Card Image asset wrapper */}
            <div className="relative w-full h-full">
              <Image
                src="/images/location.png"
                alt="Online quiz assessment interface interface displaying an Italy travel query"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain"
              />
            </div>

          </div>
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col gap-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            Assessments, <br className="sm:hidden" />
            <span className="text-[#00CBB8]">Quizzes</span>, Tests
          </h2>
          
          <p className="text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed font-light">
            Easily launch live assignments, quizzes, and tests. Student results are automatically 
            entered in the online gradebook.
          </p>
        </div>

      </div>
    </section>
  );
};

export default QuizShowcase;

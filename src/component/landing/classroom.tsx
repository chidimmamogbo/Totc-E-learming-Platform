import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ClassroomFeatures = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-34 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h2 className="text-[#2F327D] font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight max-w-xl">
            Everything you can do in a physical classroom,{' '}
            <span className="text-[#00CBB8]">you can do with TOTC</span>
          </h2>
          
          <p className="text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-xl font-light">
            TOTC’s school management software helps traditional and online schools manage scheduling, 
            attendance, payments and virtual classrooms all in one secure cloud-based system.
          </p>
          
          <div className="mt-2">
            <Link 
              href="/learn-more" 
              className="text-[#696F8C] text-sm sm:text-base font-medium underline underline-offset-4 hover:text-[#2F327D] transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Media Column - Complete with Cyan/Green background accent blocks */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center w-full px-4 sm:px-6">
          <div className="relative w-full aspect-[4/3] max-w-[540px]">
            
            {/* Top-Left Cyan Corner Accent Box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#23BDEE] rounded-[20px] -z-10" />

            {/* Bottom-Right Green Corner Accent Box */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#00CBB8] rounded-[20px] -z-10" />

            {/* Main Picture Wrapper */}
            <div className="relative w-full h-full overflow-hidden rounded-[20px] shadow-lg bg-gray-100">
              <Image
                src="/images/lecture.png"
                alt="Students learning in a classroom with an instructor"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ClassroomFeatures;

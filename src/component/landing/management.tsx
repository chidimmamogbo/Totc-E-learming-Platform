import React from 'react';
import Image from 'next/image';

const ManagementShowcase = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col gap-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
          <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            <span className="text-[#00CBB8]">Class Management</span> <br />
            Tools for Educators
          </h2>
          
          <p className="text-[#696F8C] text-sm sm:text-base lg:text-[18px] leading-relaxed font-light">
            Class provides tools to help run and manage the class such as Class Roster, 
            Attendance, and more. With the Gradebook, teachers can review and grade 
            tests and quizzes in real-time.
          </p>
        </div>

        {/* Right Media Column - Renders your unified image file */}
        <div className="relative flex justify-center items-center w-full px-4 order-1 lg:order-2">
          {/* Proportional aspect ratio box ensures your dashboard graphics scale beautifully on all devices */}
          <div className="relative w-full max-w-[500px] aspect-[500/380]">
            
            {/* Background Decorative Abstract Accent Elements (Matching the subtle blue background accents) */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E2EEFF] rounded-[20px] -z-10 opacity-70" />
            <div className="absolute -top-4 right-12 w-5 h-5 bg-[#23BDEE] rounded-full -z-10 opacity-40" />
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#23BDEE] rounded-full -z-10 opacity-60" />
            
            {/* Unified Management & Gradebook Dashboard Image Asset */}
            <div className="relative w-full h-full">
              <Image
                src="/images/management.png"
                alt="Class management suite displaying student grading roster and export analytics tool options"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagementShowcase;

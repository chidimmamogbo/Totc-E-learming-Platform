import React from 'react';
import Image from 'next/image';

interface FeatureListItem {
  id: number;
  iconSrc: string;
  text: string;
}

const featureList: FeatureListItem[] = [
  {
    id: 1,
    iconSrc: '/images/4-squarebox.png',
    text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  },
  {
    id: 2,
    iconSrc: '/images/copy-icon.png',
    text: "TA's and presenters can be moved to the front of the class.",
  },
  {
    id: 3,
    iconSrc: '/images/users.png',
    text: 'Teachers can easily see all students and class data at one time.',
  },
];

const ClassroomInterfaceFeature = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-32 w-full overflow-hidden">
      {/* Top Header Labels */}
      <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 flex flex-col gap-4">
        <h2 className="text-[#2F327D] font-bold text-2xl sm:text-3xl lg:text-[36px] tracking-tight capitalize">
          Our <span className="text-[#00CBB8] capitalize">Features</span>
        </h2>
        <p className="text-[#696F8C] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
          This very extraordinary feature, can make learning activities more efficient
        </p>
      </div>

      {/* Main Structural Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Mockup Interface Stack Layer */}
        <div className="relative w-full flex justify-center items-center px-4">
          {/* Main Visual Aspect Ratio Box Sandbox */}
          <div className="relative w-full max-w-[540px] aspect-[540/380]">
            
            {/* Background Decorative Abstract Shapes matching background composition */}
            <div className="absolute -top-12 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#33EFA0] rounded-full -z-10 opacity-80 mix-blend-multiply" />
            <div className="absolute top-2 left-24 w-5 h-5 bg-[#23BDEE] rounded-full -z-10" />
            <div className="absolute -bottom-4 left-[38%] w-6 h-6 bg-[#FF6B6B] rounded-full -z-10" />
            <div className="absolute -bottom-8 right-[30%] w-20 h-20 bg-[#5B72EE] rounded-full -z-10 opacity-90" />

            {/* Base Layer Component: Mac Window Canvas Asset */}
            <div className="absolute inset-0 w-full h-full drop-shadow-[0_20px_50px_rgba(47,50,125,0.12)]">
              <Image
                src="/images/avatar-mac-bg.png"
                alt="Macbook system browser dashboard panel background"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-contain"
              />
            </div>

            {/* Avatar 1: Large Main Screen Presenter (Left Side) */}
            <div className="absolute top-[16%] left-[4.5%] w-[33%] aspect-180/188">
              <Image src="/images/avatar-1.png" alt="Main instructor video feed" fill sizes="180px" className="object-contain" />
            </div>

            {/* --- Overlay Buttons Under Avatar 1 --- */}
            {/* Present Button - Pure inline scaling using percentage sizing relative to the mac window wrapper */}
            <button className="absolute bottom-[30%] left-[4.5%] w-[15%] h-[6%] bg-[#4A6CF7] hover:bg-[#3b5bd9] text-white font-medium text-[7px] sm:text-[10px] md:text-[11px] lg:text-[10px] rounded-full flex items-center justify-center transition-colors shadow-md z-20">
              Present
            </button>

            {/* Call Button (End Call Icon/Label) */}
            <button className="absolute bottom-[30%] left-[21.5%] w-[15%] h-[6%] bg-[#FF4B72] hover:bg-[#e03a5f] text-white font-medium text-[7px] sm:text-[10px] md:text-[11px] lg:text-[10px] rounded-full flex items-center justify-center gap-1 transition-colors shadow-md z-20">
              {/* Simple telephone symbol mockup to match layout icon look */}
              <span className="transform rotate-135 text-[8px] sm:text-[12px] md:text-[13px] lg:text-[12px] leading-none mb-0.5">📞</span>
              Call
            </button>
            {/* -------------------------------------- */}

            {/* Avatar 2: Top Small Grid Member */}
            <div className="absolute top-[16%] left-[41.5%] w-[19.5%] aspect-106/108">
              <Image src="/images/avatar-2.png" alt="Classroom student feed view" fill sizes="110px" className="object-contain" />
            </div>

            {/* Avatar 3: Top Right Large Profile Grid Member */}
            <div className="absolute top-[16%] right-[5%] w-[25%] aspect-136/138">
              <Image src="/images/avatar-3.png" alt="Classroom student feed view" fill sizes="140px" className="object-contain" />
            </div>

            {/* Avatar 4: Bottom Left Grid Member */}
            <div className="absolute bottom-[13%] left-[41.5%] w-[19.5%] aspect-106/108">
              <Image src="/images/avatar-4.png" alt="Classroom student feed view" fill sizes="110px" className="object-contain" />
            </div>

            {/* Avatar 5: Bottom Right Large Profile Grid Member */}
            <div className="absolute bottom-[5%] right-[2%] w-[30%] aspect-162/165 z-10">
              <Image src="/images/avatar-5.png" alt="Classroom student feed view" fill sizes="165px" className="object-contain" />
            </div>

          </div>
        </div>

        {/* Right Side: Copy Copy Text & Feature Rows */}
        <div className="flex flex-col gap-8 lg:pl-4">
          <h3 className="text-[#2F327D] font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight max-w-md">
            A <span className="text-[#00CBB8]">user interface</span> designed for the classroom
          </h3>

          {/* Bullet Feature Loop Section */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {featureList.map((item) => (
              <div key={item.id} className="flex gap-5 items-start max-w-xl group">
                {/* Fixed Non-distorting Round Feature Image Badge Icons container wrapper */}
                <div className="flex-shrink-0 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] rounded-full size-12 sm:size-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="relative size-5 sm:size-6">
                    <Image
                      src={item.iconSrc}
                      alt="Feature descriptor icon badge graphic"
                      fill
                      sizes="30px"
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Descriptor paragraph block style formatting */}
                <p className="text-[#696F8C] text-sm sm:text-base leading-relaxed pt-2 sm:pt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClassroomInterfaceFeature;

import React from 'react';
import { FaRegFileAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

// Define a strict TypeScript type for our features data
interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

// Data object mapped dynamically
const featuresData: FeatureCard[] = [
  {
    id: 1,
    icon: <FaRegFileAlt className="text-white size-6 sm:size-7" />,
    iconBg: 'bg-[#5B72EE]',
    title: 'Online Billing, Invoicing, & Contracts',
    description: 'Simple and secure control of your organization\'s financial and legal transactions. Send customized invoices and contracts',
  },
  {
    id: 2,
    icon: <FaCalendarAlt className="text-white size-6 sm:size-7" />,
    iconBg: 'bg-[#00CBB8]',
    title: 'Easy Scheduling & Attendance Tracking',
    description: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
  },
  {
    id: 3,
    icon: <FaUsers className="text-white size-6 sm:size-7" />,
    iconBg: 'bg-[#29B9E7]',
    title: 'Customer Tracking',
    description: 'Automate and track emails to individuals or groups. Skilline\'s built-in system helps organize your organization',
  },
];

const FeaturesSection = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-17 lg:px-32 w-full">
      {/* Header text container matches image text sizing and margins */}
      <div className="max-w-3xl mx-auto text-center mb-24 flex flex-col gap-5">
        <h2 className="text-[#252641] font-bold text-2xl sm:text-3xl lg:text-[36px] tracking-tight">
          All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
        </h2>
        <p className="text-[#696F8C] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </p>
      </div>

      {/* Grid container handles 1 column on mobile, transitioning to 3 columns on desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 max-w-6xl mx-auto px-2">
        {featuresData.map((feature) => (
          <div 
            key={feature.id} 
            className="relative bg-white rounded-[20px] shadow-[0_10px_60px_rgba(38,45,118,0.08)] px-6 sm:px-10 pb-10 pt-16 text-center flex flex-col items-center border border-gray-50/10 transition-transform duration-300 hover:-translate-y-2"
          >
            {/* 
              Floating Badge Container:
              - absolute positioning sits perfectly halfway on top of the card's top border.
              - flex-shrink-0 and explicit size utilities keep it perfectly circular on every screen width.
            */}
            <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ${feature.iconBg} size-14 sm:size-16 rounded-full flex items-center justify-center shadow-md shrink-0`}>
              {feature.icon}
            </div>

            {/* Content Body Layout */}
            <h3 className="text-[#2F327D] font-semibold text-lg sm:text-xl lg:text-[22px] leading-snug mb-5 max-w-60 mx-auto min-h-14 flex items-center justify-center">
              {feature.title}
            </h3>
            
            <p className="text-[#696F8C] text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-75">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

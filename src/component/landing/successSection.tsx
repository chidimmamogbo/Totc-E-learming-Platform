import React from 'react';

// Define strict typing for the success metric items
interface MetricItem {
  id: number;
  value: string;
  label: string;
}

// Object array containing the component data
const successMetrics: MetricItem[] = [
  { id: 1, value: '15K+', label: 'Students' },
  { id: 2, value: '75%', label: 'Total success' },
  { id: 3, value: '35', label: 'Main questions' },
  { id: 4, value: '26', label: 'Chief experts' },
  { id: 5, value: '16', label: 'Years of experience' },
];

const SuccessSection = (): React.JSX.Element => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-30 md:px-12 w-full text-center">
      {/* Header Container */}
      <div className="max-w-2xl mx-auto mb-16 flex flex-col gap-4">
        <h2 className="text-[#252641] font-bold text-3xl sm:text-4xl tracking-tight">
          Our Success
        </h2>
        <p className="text-[#696F8C] text-sm sm:text-base leading-relaxed">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec 
          nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 max-w-6xl mx-auto items-start justify-center">
        {successMetrics.map((metric) => (
          <div 
            key={metric.id} 
            className="flex flex-col gap-2 transition-transform duration-200 hover:scale-105 last:col-span-2 md:last:col-span-1"
          >
            {/* Gradient Numeric Counters styling */}
            <span className="bg-linear-to-r from-[#23BDEE] to-[#49BBBD] bg-clip-text text-transparent font-medium text-4xl sm:text-5xl lg:text-[60px] leading-none tracking-tight">
              {metric.value}
            </span>
            {/* Label Descriptions styling */}
            <span className="text-[#252641] font-medium text-sm sm:text-base lg:text-[18px]">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;

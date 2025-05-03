import React from 'react';
import { TimeUnitProps } from '../types';

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => {
  // Format the value to always have two digits
  const formattedValue = value.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="relative flex items-center justify-center">
        <div className="bg-gray-800/90 backdrop-blur-sm text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                      font-bold py-3 px-4 rounded-lg min-w-16 sm:min-w-20 md:min-w-24 
                      flex items-center justify-center shadow-lg
                      border border-gray-700 overflow-hidden">
          {formattedValue}
          <div className="absolute w-full h-px bg-gray-600 top-1/2"></div>
        </div>
      </div>
      <p className="text-gray-300 text-xs sm:text-sm mt-2 font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
};

export default TimeUnit;
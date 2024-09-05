"use client"
import  { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-center cursor-pointer ">
      <div
        className={`relative inline-flex  items-center h-9 w-36 rounded-full transition-colors duration-300 ${
          isOn ? 'bg-gray-400' : 'bg-gray-400'
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`absolute  h-9 w-16 rounded-full transition-transform duration-300 ${
            isOn ? 'transform translate-x-[77px] bg-indigo-600' : 'bg-indigo-600'
          }`}
        />
        <span
          className={`absolute left-6 text-white text-sm transition-opacity duration-300 ${
            isOn ? 'opacity-0' : 'opacity-100'
          }`}
        >
          OFF
        </span>
        <span
          className={`absolute right-6 text-white text-sm transition-opacity duration-300 ${
            isOn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ON
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;

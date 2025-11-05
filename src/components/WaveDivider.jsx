import React from 'react';

const WaveDivider = () => {
  return (
    <div aria-hidden="true" className="w-full overflow-hidden">
      <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[120px] sm:h-[160px]">
        <defs>
          <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B7373" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <path d="M0,64 C240,160 480,0 720,64 C960,128 1200,224 1440,128 L1440,180 L0,180 Z" fill="url(#tealGradient)" fillOpacity="0.9" />
      </svg>
    </div>
  );
};

export default WaveDivider;

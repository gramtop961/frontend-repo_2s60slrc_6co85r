import React from 'react';

const PatternBackground = () => (
  <div aria-hidden className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(11,115,115,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(72,169,166,0.06),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(11,115,115,0.06),transparent_40%)]" />
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#1E3D4A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

export default PatternBackground;

import React from 'react';

const CTAButton = () => {
  return (
    <div className="flex justify-center mt-10 md:mt-12">
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-[#FF7A00] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-sm transition-colors hover:bg-[#E86A00] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF7A00]"
      >
        View All Posts
      </a>
    </div>
  );
};

export default CTAButton;

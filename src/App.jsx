import React from 'react';
import WaveDivider from './components/WaveDivider';
import PatternBackground from './components/PatternBackground';
import EnhancedCategories from './components/EnhancedCategories';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1E3D4A]">
      {/* Wave divider */}
      <div className="relative">
        <WaveDivider />
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[70px]">
        <PatternBackground />

        {/* Section header */}
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0B7373] font-['Manrope'] inline-flex flex-col items-center">
            <span>Explore Our Insights</span>
            <span className="mt-3 inline-block h-[3px] w-28 rounded-full bg-[#FF7A00]" />
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Practical guidance and real stories from our Family Law team.
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-12 md:mt-16">
          <EnhancedCategories />
        </div>

        {/* CTA */}
        <div className="relative flex justify-center mt-12 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#FF7A00] text-white px-7 py-3.5 text-sm sm:text-base font-semibold shadow-md transition hover:shadow-lg hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF7A00]"
          >
            View All Posts
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

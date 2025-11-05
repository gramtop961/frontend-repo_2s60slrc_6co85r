import React from 'react';
import WaveDivider from './components/WaveDivider';
import PatternBackground from './components/PatternBackground';
import SectionHeader from './components/SectionHeader';
import EnhancedCategories from './components/EnhancedCategories';
import CTAButton from './components/CTAButton';

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
        <div className="relative">
          <SectionHeader />
        </div>

        {/* Grid */}
        <div className="relative mt-12 md:mt-16">
          <EnhancedCategories />
        </div>

        {/* CTA */}
        <div className="relative mt-12 md:mt-16">
          <CTAButton />
        </div>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import SectionHeader from './components/SectionHeader';
import CategoriesGrid from './components/CategoriesGrid';
import CTAButton from './components/CTAButton';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <SectionHeader />
        <div className="mt-12 md:mt-14">
          <CategoriesGrid />
        </div>
        <CTAButton />
      </section>
    </div>
  );
}

export default App;

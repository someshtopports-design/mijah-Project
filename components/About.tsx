
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-52 flex flex-col items-center text-center gap-16 md:gap-20">
      <div className="space-y-8 md:space-y-12">
        <span className="uppercase-tracking text-[#8da399] text-[0.65rem] md:text-sm">Our Philosophy</span>
        <h2 className="text-4xl md:text-7xl font-light leading-tight serif text-[#1a1a1a]">
          Spaces that <span className="italic">breathe.</span>
        </h2>
        <div className="space-y-8 md:space-y-10 text-lg md:text-xl font-light leading-relaxed text-[#4a4a4a] max-w-2xl mx-auto">
          <p>
            Traditional air fresheners mask smells with synthetic perfumes, adding more chemicals to your personal environment. <span className="font-medium text-[#1a1a1a]">mijah</span> does the opposite.
          </p>
          <p>
            By leveraging the natural adsorption properties of treated tea leaves and activated charcoal, we don't just hide odors—we eliminate them at the molecular level.
          </p>
          <p className="text-base italic border-t border-black/5 pt-8">
            <span className="font-semibold block mb-2 not-italic uppercase tracking-widest text-[0.6rem] text-[#8da399]">Our Story</span>
            We are just normal people with a home-grown setup—driven by the simple enthusiasm to create a purer atmosphere using the power of nature. Every sachet is a product of this passion.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 py-16 border-y border-black/5 w-full">
        <div className="space-y-3">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-[#8da399]">Organic</div>
          <div className="text-lg serif italic">Tea & Charcoal</div>
        </div>
        <div className="space-y-3">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-[#8da399]">Dual-Action</div>
          <div className="text-lg serif italic">Odour + Moisture</div>
        </div>
        <div className="space-y-3">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-[#8da399]">Pure</div>
          <div className="text-lg serif italic">Zero Fragrance</div>
        </div>
        <div className="space-y-3">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-[#8da399]">Safe</div>
          <div className="text-lg serif italic">Daily Protection</div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="relative group overflow-hidden rounded-sm shadow-2xl">
          <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-all duration-1000"></div>
          <img
            src="/closet-solution.jpg"
            alt="The Mijah Difference: Problem and Solution"
            className="w-full h-auto object-cover transition-all duration-1000 scale-[1.02] group-hover:scale-100"
          />
          <div className="absolute top-10 right-10 z-20 hidden md:block">
            <span className="uppercase-tracking text-white bg-black/20 backdrop-blur-md px-6 py-2 rounded-full text-[0.6rem]">Comparison Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-40 flex flex-col md:flex-row items-center gap-16 md:gap-32">
      <div className="flex-1 space-y-12">
        <span className="uppercase-tracking text-[#8da399]">Our Philosophy</span>
        <h2 className="text-5xl md:text-7xl font-light leading-tight serif text-[#1a1a1a]">
          Spaces that <br /><span className="italic">breathe.</span>
        </h2>
        <div className="space-y-8 text-lg font-light leading-relaxed text-[#4a4a4a] max-w-xl">
          <p>
            Traditional air fresheners mask smells with synthetic perfumes, adding more chemicals to your personal environment. <span className="font-medium text-[#1a1a1a]">mijah</span> does the opposite.
          </p>
          <p>
            By leveraging the natural adsorption properties of treated tea leaves and activated charcoal, we don't just hide odors—we eliminate them at the molecular level.
          </p>
          <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-black/5">
            <div className="space-y-2">
              <div className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-[#8da399]">Organic</div>
              <div className="text-sm serif italic">Tea & Charcoal</div>
            </div>
            <div className="space-y-2">
              <div className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-[#8da399]">Dual-Action</div>
              <div className="text-sm serif italic">Odour + Moisture</div>
            </div>
            <div className="space-y-2">
              <div className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-[#8da399]">Pure</div>
              <div className="text-sm serif italic">Zero Fragrance</div>
            </div>
            <div className="space-y-2">
              <div className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-[#8da399]">Safe</div>
              <div className="text-sm serif italic">Daily Protection</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#8da399]/5 rounded-sm -rotate-2 transition-transform group-hover:rotate-0 duration-700"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img
              src="lifestyle-wardrobe.jpg"
              alt="mijah in lifestyle settings"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

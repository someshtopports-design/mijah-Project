
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-32 md:py-52 flex flex-col items-center text-center gap-20">
      <div className="space-y-12">
        <span className="uppercase-tracking text-[#8da399]">Our Philosophy</span>
        <h2 className="text-6xl md:text-7xl font-light leading-tight serif text-[#1a1a1a]">
          Spaces that <span className="italic">breathe.</span>
        </h2>
        <div className="space-y-10 text-xl font-light leading-relaxed text-[#4a4a4a] max-w-2xl mx-auto">
          <p>
            Traditional air fresheners mask smells with synthetic perfumes, adding more chemicals to your personal environment. <span className="font-medium text-[#1a1a1a]">mijah</span> does the opposite.
          </p>
          <p>
            By leveraging the natural adsorption properties of treated tea leaves and activated charcoal, we don't just hide odors—we eliminate them at the molecular level.
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

      <div className="w-full max-w-5xl">
        <div className="relative group">
          <div className="absolute -inset-6 bg-[#8da399]/5 rounded-sm transition-transform group-hover:scale-[1.02] duration-1000"></div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
            <img
              src="lifestyle-wardrobe.jpg"
              alt="mijah in lifestyle settings"
              className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-40">
      <div className="text-left mb-16">
        <span className="uppercase-tracking text-[#8da399] mb-4 block">Visual Diary</span>
        <h2 className="text-3xl font-light serif italic text-[#1a1a1a]">Life with mijah.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 aspect-[4/5] overflow-hidden rounded-sm group relative">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
          <img
            src="lifestyle-collage.jpg"
            alt="mijah usage in various living spaces"
            className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-110"
          />
        </div>
        <div className="md:col-span-5 grid grid-rows-2 gap-12">
          <div className="overflow-hidden rounded-sm group relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img
              src="product-close-box.jpg"
              alt="mijah product close-up"
              className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-sm group relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img
              src="lifestyle-wardrobe.jpg"
              alt="mijah in wardrobe"
              className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl md:text-5xl font-normal leading-tight">
          Designed for small spaces that deserve fresh air.
        </h2>
        <div className="space-y-6 text-lg font-light leading-relaxed opacity-80">
          <p>
            Traditional air fresheners mask smells with synthetic perfumes. mijah does the opposite. Using the natural power of treated tea leaves and activated charcoal, we capture odour molecules at their source.
          </p>
          <p>
            It works silently in the background, absorbing moisture and neutralizing scents without adding any of its own. No chemicals, no fake fragrances, just clean air — the way nature intended.
          </p>
          <ul className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium tracking-wide uppercase">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div> Natural Tea & Charcoal</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div> Odour + Moisture</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div> Zero Fragrance</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div> Daily Safe</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
          <img 
            src="lifestyle-wardrobe.jpg" 
            alt="mijah in lifestyle settings" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x1000?text=Upload+lifestyle-wardrobe.jpg';
            }}
          />
        </div>
      </div>
    </div>
  );
};

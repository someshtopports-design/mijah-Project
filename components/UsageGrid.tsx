
import React, { useState } from 'react';

const locations = [
  {
    name: 'Shoes',
    img: 'usage-shoes.jpg',
    description: 'Tea leaves work at the source, neutralizing sweat-based odours while charcoal pulls moisture away to prevent bacterial growth.',
    scienceImg: 'shoe-odour-science.jpg'
  },
  {
    name: 'Car',
    img: 'usage-car.jpg',
    description: 'Continuous 24/7 adsorption of stale air, smoke, and food smells within the cabin—completely fragrance-free.'
  },
  {
    name: 'Wardrobe',
    img: 'usage-wardrobe.jpg',
    description: 'Preserves the freshness of your garments. The breathable linen allows for natural airflow, keeping high-end fabrics odour-free.'
  },
  {
    name: 'Storage Spaces',
    img: 'usage-storage.jpg',
    description: 'Highly effective in damp or enclosed areas like under-bed storage, bins, and trunks where moisture often builds up.'
  },
];

export const UsageGrid: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="bg-[#f9f8f4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-normal mb-6 serif">Where it works</h2>
          <p className="text-sm md:text-base opacity-60 max-w-xl mx-auto uppercase tracking-widest">Click to explore the science of freshness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`cursor-pointer group transition-all duration-500 ${activeItem === idx ? 'md:scale-105' : ''}`}
              onClick={() => setActiveItem(activeItem === idx ? null : idx)}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative shadow-sm group-hover:shadow-xl transition-shadow">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${activeItem === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-white text-xs uppercase tracking-[0.3em] border border-white/30 px-4 py-2">Details</span>
                </div>
              </div>
              <h3 className="text-lg serif mb-2 text-center">{loc.name}</h3>
              <p className={`text-sm font-light leading-relaxed text-center transition-all duration-500 ${activeItem === idx ? 'opacity-100 max-h-40 mt-4' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                {loc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ingredient Science Section */}
        <div className="mt-32 pt-20 border-t border-black/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="shoe-odour-science.jpg"
                alt="Shoe Odour Science"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-10 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-normal serif italic">The Power of Choice Ingredients</h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-[#8da399]">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Tea Leaves (The Neutralizer)</h4>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Naturally rich in polyphenols, tea leaves don't just mask odours—they chemically bind to and neutralize offensive smell molecules at the source. This provides a deep, non-synthetic freshness.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-[#333]">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Activated Charcoal (The Magnet)</h4>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    With millions of microscopic pores, activated charcoal acts like a physical magnet, traps moisture (which causes bacterial growth) and larger odour particles through a process called adsorption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

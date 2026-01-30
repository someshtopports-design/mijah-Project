
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
    <div className="py-20 md:py-52 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <span className="uppercase-tracking text-[#8da399] mb-6 block text-[0.65rem] md:text-sm">Versatility</span>
          <h2 className="text-4xl md:text-7xl font-light mb-8 serif text-[#1a1a1a]">Where it works</h2>
          <p className="text-base md:text-lg font-light text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Designed to fit seamlessly into your daily life, from the shoes you wear to the spaces you inhabit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {locations.map((loc, idx) => (
            <div
              key={loc.name}
              className="group perspective-container cursor-pointer"
              onClick={() => setActiveItem(activeItem === idx ? null : idx)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-8 shadow-sm hover-3d">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-all duration-1000"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x800?text=${loc.name}`;
                  }}
                />
                <div className={`absolute inset-0 bg-[#1a1a1a]/40 flex items-center justify-center transition-opacity duration-500 ${activeItem === idx ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <span className="text-white text-[0.6rem] uppercase-tracking border border-white/30 px-6 py-3 backdrop-blur-sm">
                    {activeItem === idx ? 'Close Details' : 'View Details'}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 serif text-center transition-colors group-hover:text-[#8da399]">{loc.name}</h3>

              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeItem === idx ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm font-light leading-relaxed text-[#4a4a4a] border-l-2 border-[#8da399]/20 pl-6 py-2">
                  {loc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Science Section */}
        <div className="mt-24 md:mt-40 pt-20 md:pt-40 border-t border-black/5">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-[#8da399]/5 rounded-sm rotate-1 transition-transform group-hover:rotate-0 duration-700"></div>
              <img
                src="shoe-odour-science.jpg"
                alt="Shoe Odour Science"
                className="relative w-full h-auto rounded-sm shadow-2xl transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0"
              />
            </div>
            <div className="space-y-10 md:space-y-12 order-1 lg:order-2 text-center lg:text-left">
              <span className="uppercase-tracking text-[#8da399] text-[0.65rem] md:text-sm">Ingredient Science</span>
              <h2 className="text-4xl md:text-7xl font-light serif leading-tight text-[#1a1a1a]">
                The Power of <br /><span className="italic">Choice Materials.</span>
              </h2>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase-tracking text-[#1a1a1a]">Tea Leaves | The Neutralizer</h4>
                  <p className="text-lg font-light leading-relaxed text-[#4a4a4a]">
                    Naturally rich in polyphenols, our treated tea leaves bind to offensive smell molecules, neutralizing them at the source instead of just masking them.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase-tracking text-[#1a1a1a]">Activated Charcoal | The Magnet</h4>
                  <p className="text-lg font-light leading-relaxed text-[#4a4a4a]">
                    With millions of microscopic pores, physical adsorption traps moisture and toxins, preventing bacterial growth and stale air.
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

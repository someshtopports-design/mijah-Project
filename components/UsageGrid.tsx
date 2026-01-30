
import React from 'react';

const locations = [
  { name: 'Shoes', img: 'usage-shoes.jpg' },
  { name: 'Car', img: 'usage-car.jpg' },
  { name: 'Wardrobe', img: 'usage-wardrobe.jpg' },
  { name: 'Storage Spaces', img: 'usage-storage.jpg' },
];

export const UsageGrid: React.FC = () => {
  return (
    <div className="bg-soft-beige py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-normal mb-16 serif text-center">Where it works</h2>
        
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 md:pb-0 no-scrollbar snap-x">
          {locations.map((loc, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-0 snap-center group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative">
                <img 
                  src={loc.img} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x800?text=${loc.name}`;
                  }}
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-center opacity-60">
                {loc.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

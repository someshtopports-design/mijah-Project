
import React from 'react';

export const Sustainability: React.FC = () => {
  return (
    <div className="charcoal-gradient charcoal-texture py-20 md:py-52 text-white relative overflow-hidden">
      {/* Decorative leaf for this section */}
      <div className="absolute inset-0 opacity-[0.03] pattern-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 flex flex-col items-center text-center gap-16 md:gap-24 relative z-10">
        <div className="space-y-8 md:space-y-12">
          <span className="uppercase-tracking text-[#8da399] text-[0.65rem] md:text-sm">Ethical Roots</span>
          <h2 className="text-4xl md:text-7xl font-light serif leading-tight text-white">
            Made with <span className="italic">Nature.</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every mijah pouch is a commitment to a chemical-free future, using materials that respect both your home and the planet.
          </p>
        </div>

        <div className="w-full max-w-5xl relative group perspective-container">
          <div className="absolute -inset-10 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="hover-3d">
            <img
              src="product-packaging.jpg"
              alt="Sustainable recyclable paper packaging"
              className="relative w-full h-auto rounded-sm shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 aspect-[16/9] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full pt-12 border-t border-white/10">
          {[
            { title: 'Recyclable Packaging', desc: 'Our envelopes are 100% recycled paper, minimizing our footprint from day one.' },
            { title: 'Reusable Pouch', desc: 'Simply place the pouch in sunlight once a month to physically reactivate the materials.' },
            { title: 'Pure Origins', desc: 'Zero synthetic fragrance, phthalates, or hidden toxins. Safe for every living being.' }
          ].map((item, i) => (
            <div key={i} className="space-y-6 group/item">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8da399] mx-auto group-hover/item:scale-150 transition-transform duration-500"></div>
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase-tracking text-[#8da399]">{item.title}</h4>
                <p className="text-sm font-light text-white/60 leading-relaxed transition-colors group-hover/item:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

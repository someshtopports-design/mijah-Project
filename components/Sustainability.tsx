
import React from 'react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-[#f2efe6]/40 py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col lg:grid lg:grid-cols-12 items-center gap-16 md:gap-32">
        <div className="lg:col-span-7 w-full order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-10 bg-white/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img
              src="product-packaging.jpg"
              alt="Sustainable recyclable paper packaging"
              className="relative w-full h-auto rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.08)] grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 aspect-[16/10] object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
          <span className="uppercase-tracking text-[#8da399]">Ethical Roots</span>
          <h2 className="text-5xl md:text-7xl font-light serif leading-tight text-[#1a1a1a]">
            Made with <br /><span className="italic">Nature.</span>
          </h2>
          <div className="space-y-10">
            {[
              { title: 'Recyclable Packaging', desc: 'Our envelopes are 100% recycled paper, minimizing our footprint from day one.' },
              { title: 'Reusable Pouch', desc: 'Simply place the pouch in sunlight once a month to physically reactivate the materials.' },
              { title: 'Pure Origins', desc: 'Zero synthetic fragrance, phthalates, or hidden toxins. Safe for every living being.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group/item">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8da399] shrink-0 group-hover/item:scale-150 transition-transform duration-500"></div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase-tracking text-[#1a1a1a]">{item.title}</h4>
                  <p className="text-base font-light text-[#4a4a4a] leading-relaxed transition-colors group-hover/item:text-black">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

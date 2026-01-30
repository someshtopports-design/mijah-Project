
import React from 'react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-[#f2efe6]/40 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full order-2 md:order-1">
          <img
            src="product-packaging.jpg"
            alt="Sustainable recyclable paper packaging"
            className="w-full h-auto rounded-sm shadow-sm object-cover aspect-video"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x450?text=Upload+product-packaging.jpg';
            }}
          />
        </div>
        <div className="flex-1 space-y-8 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-normal serif italic">Made with nature, <br />not chemicals.</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1.5 w-4 h-4 rounded-full border border-[#8da399] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div>
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-2">Recyclable Packaging</h4>
                <p className="text-sm opacity-70 leading-relaxed">Our envelopes are made from 100% recycled paper, minimizing our footprint from day one.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1.5 w-4 h-4 rounded-full border border-[#8da399] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div>
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-2">Reusable Pouch</h4>
                <p className="text-sm opacity-70 leading-relaxed">Reactivate the tea leaves and charcoal by placing the pouch in direct sunlight once a month.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1.5 w-4 h-4 rounded-full border border-[#8da399] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8da399]"></div>
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-2">Pure Origins</h4>
                <p className="text-sm opacity-70 leading-relaxed">No synthetic fragrance, no phthalates, and no hidden toxins. Safe for families and pets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

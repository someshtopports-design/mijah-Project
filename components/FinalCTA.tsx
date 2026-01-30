
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <div className="py-32 px-8 text-center max-w-3xl mx-auto space-y-10">
      <div className="w-16 h-16 mx-auto mb-12 opacity-80">
        <img 
          src="product-close-1.jpg" 
          alt="mijah logo icon" 
          className="w-full h-full object-cover rounded-full grayscale"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h2 className="text-4xl md:text-5xl font-normal leading-tight serif">Freshness doesn’t need fragrance.</h2>
      <p className="text-lg opacity-60 font-light italic">Launching soon. Experience the silence of clean air.</p>
      <div>
        <button className="px-12 py-4 bg-[#333] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all rounded-sm">
          Get notified at launch
        </button>
      </div>
    </div>
  );
};

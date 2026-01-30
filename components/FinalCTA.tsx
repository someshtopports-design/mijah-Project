
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <div className="py-40 px-8 text-center max-w-4xl mx-auto space-y-12">
      <span className="uppercase-tracking text-[#8da399]">Join the Movement</span>
      <h2 className="text-5xl md:text-7xl font-light leading-tight serif text-[#1a1a1a]">
        Freshness doesn’t <br /><span className="italic">need fragrance.</span>
      </h2>
      <p className="text-xl font-light text-[#4a4a4a] italic">Experience the silence of clean air.</p>
      <div className="pt-8">
        <button className="px-16 py-6 bg-[#1a1a1a] text-white text-[0.7rem] uppercase tracking-[0.4em] font-medium hover:bg-black transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-sm">
          Get notified at launch
        </button>
      </div>
    </div>
  );
};

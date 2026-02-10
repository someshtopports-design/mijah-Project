
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <div className="py-40 px-8 text-center max-w-4xl mx-auto space-y-12">
      <span className="uppercase-tracking text-[#8da399]">Join the Movement</span>
      <h2 className="text-5xl md:text-7xl font-light leading-tight serif text-[#1a1a1a]">
        Freshness doesn’t <br /><span className="italic">need fragrance.</span>
      </h2>
      <p className="text-xl font-light text-[#4a4a4a] italic">Experience the silence of clean air.</p>
      <div className="pt-8 flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/918839106738"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-[#1a1a1a] text-white text-[0.7rem] uppercase tracking-[0.4em] font-medium hover:bg-black transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-sm"
          >
            WhatsApp to Order
          </a>
          <a
            href="https://www.instagram.com/mijah_fresh?utm_source=qr&igsh=MXFremYyaW42dGs5YQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border border-black/10 text-black text-[0.7rem] uppercase tracking-[0.4em] font-medium hover:bg-black/5 transition-all hover:translate-y-[-2px] rounded-sm"
          >
            DM on Instagram
          </a>
        </div>
        <div className="text-[0.6rem] uppercase tracking-[0.4em] font-bold text-[#8da399] flex items-center gap-3">
          <span className="w-2 h-2 bg-[#8da399] rounded-full"></span>
          COD Available Nationwide
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-8 md:px-16 border-t border-black/5 charcoal-gradient charcoal-texture text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32">
          <div className="space-y-8">
            <span className="text-4xl font-light tracking-[0.4em] serif uppercase">mijah</span>
            <p className="text-sm font-light text-white/50 max-w-sm leading-relaxed">
              Redefining fresh air through the silent, scientific power of nature. Designed for the modern home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <span className="uppercase-tracking text-[#8da399]">Navigation</span>
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-sm font-light text-white/70 hover:text-white transition-colors">Philosophy</a>
                <a href="#usage" className="text-sm font-light text-white/70 hover:text-white transition-colors">Usage</a>
                <a href="#how" className="text-sm font-light text-white/70 hover:text-white transition-colors">Science</a>
              </div>
            </div>

            <div className="space-y-6">
              <span className="uppercase-tracking text-[#8da399]">Company</span>
              <div className="flex flex-col gap-4">
                <a href="#sustainability" className="text-sm font-light text-white/70 hover:text-white transition-colors">Sustainability</a>
                <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-6">
              <span className="uppercase-tracking text-[#8da399]">Connect</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/50">© 2024 mijah projects. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/30 italic">Pure</span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/30 italic">Silent</span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/30 italic">Sustainable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

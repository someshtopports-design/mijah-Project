
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/5 py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-2xl font-medium tracking-widest serif uppercase">mijah</span>
          <p className="mt-4 text-xs opacity-40 max-w-[240px] leading-loose">
            Creating healthier spaces through natural absorption. Designed for modern life.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs uppercase tracking-widest font-medium opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-widest opacity-30">© 2024 mijah studios. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-widest opacity-30 italic">Pure. Silent. Sustainable.</p>
      </div>
    </footer>
  );
};

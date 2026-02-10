import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 md:px-8 pt-40 pb-32">
      {/* Background Brand Name */}
      <h1 className="text-7xl md:text-[14rem] font-light serif tracking-tighter text-[#1a1a1a] opacity-[0.03] absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        MIJAH
      </h1>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-20">
        <div className="mb-6 md:mb-10 overflow-hidden">
          <span className="uppercase-tracking text-[#8da399] block animate-reveal text-[0.6rem] md:text-xs">
            Natural Air Purification
          </span>
        </div>

        <h1 className="text-6xl md:text-[10rem] font-light leading-[0.9] mb-12 md:mb-20 serif text-[#1a1a1a] tracking-tight">
          Purity <br />
          <span className="italic relative inline-block">
            Defined.
            <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#8da399]/30"></div>
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center md:items-end md:text-left w-full mt-10 md:mt-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-xl md:text-3xl font-light leading-relaxed text-[#1a1a1a] max-w-md">
              A sensory experience designed for the modern home.
              Fragrance-free, sustainable, and <span className="italic serif">effortlessly elegant.</span>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left">
            <p className="text-sm md:text-base font-light text-[#4a4a4a] max-w-xs leading-relaxed md:border-l border-black/10 md:pl-8">
              Mijah utilizes the natural adsorption properties of treated tea leaves and activated charcoal to cleanse your atmosphere.
            </p>
            <a
              href="#collections"
              className="group flex items-center gap-6 text-[0.6rem] md:text-[0.75rem] uppercase tracking-[0.4em] font-medium"
            >
              <span className="pb-1 border-b border-black">Discover Collections</span>
              <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-700"></div>
            </a>
          </div>
        </div>

        {/* Floating Product Element */}
        <div className="absolute -bottom-40 md:-bottom-60 right-0 md:-right-20 w-80 md:w-[32rem] opacity-60 mix-blend-multiply pointer-events-none select-none -rotate-12 group-hover:rotate-0 transition-transform duration-[2s]">
          <img src="/product-sachets-group.jpg" alt="Mijah Premium Sachets" className="w-full h-auto rounded-sm shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

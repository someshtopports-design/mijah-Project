import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 md:px-8 pt-24 md:pt-32 pb-24 md:pb-40">
      {/* Brand Watermark - Centered and very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.012] select-none pointer-events-none z-0">
        <span className="text-[10rem] md:text-[30rem] font-bold serif uppercase tracking-[0.2em]">mijah</span>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-20">
        <span className="uppercase-tracking text-[#8da399] mb-6 md:mb-10 block animate-fade-in text-[0.65rem] md:text-sm">Natural Air Purification</span>

        <h1 className="text-5xl md:text-9xl font-light leading-[1.1] mb-8 md:mb-12 serif text-[#1a1a1a]">
          Odour-free <span className="md:inline-block md:w-full">spaces.</span> <br className="hidden md:block" />
          <span className="italic">Naturally.</span>
        </h1>

        <p className="text-base md:text-2xl font-light mb-10 md:mb-16 leading-relaxed text-[#4a4a4a] max-w-2xl mx-auto px-4">
          A fragrance-free odour absorber designed for shoes, cars, wardrobes, and curated spaces.
        </p>

        <div className="flex flex-col items-center gap-12 w-full">
          <a
            href="#how"
            className="inline-block px-12 md:px-20 py-5 md:py-6 bg-[#1a1a1a] text-white text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] font-medium hover:bg-black transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-sm"
          >
            Explore Science
          </a>

          {/* High Quality Diagram - Now centered with 3D perspective */}
          <div className="w-full max-w-5xl mt-12 mb-10 md:mb-20 perspective-container group">
            <div className="hover-3d">
              <img
                src="mijah-box-premium.jpg"
                alt="mijah Airflow Diagram"
                className="w-full h-auto object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-1000"
                onError={(e) => {
                  e.currentTarget.src = 'bedroom-airflow.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

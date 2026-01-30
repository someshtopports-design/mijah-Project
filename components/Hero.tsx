import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center bg-transparent overflow-hidden">
      {/* Nature-friendly Background Pattern is handled in App.tsx */}

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row items-center px-8 md:px-16">
        {/* Brand Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block opacity-[0.02] select-none pointer-events-none z-10 transition-opacity duration-1000">
          <span className="text-[20rem] font-bold serif uppercase tracking-widest">mijah</span>
        </div>

        {/* Left Column: Content */}
        <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center py-20">
          <div className="max-w-lg">
            <span className="uppercase-tracking text-[#8da399] mb-6 block">Natural Air Purification</span>
            <h1 className="text-6xl md:text-8xl font-light leading-[1.1] mb-10 serif text-[#1a1a1a]">
              Odour-free <br />spaces. <br />
              <span className="italic">Naturally.</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-12 leading-relaxed text-[#4a4a4a] max-w-sm">
              A fragrance-free odour absorber designed for shoes, cars, wardrobes, and curated spaces.
            </p>
            <a
              href="#how"
              className="inline-block px-12 py-5 bg-[#1a1a1a] text-white text-[0.7rem] uppercase tracking-[0.3em] font-medium hover:bg-black transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-sm"
            >
              Explore Science
            </a>
          </div>
        </div>

        {/* Right Column: High Quality Diagram */}
        <div className="relative z-20 w-full md:w-[55%] h-full flex items-center justify-center py-12 md:p-12">
          <div className="relative w-full h-full max-w-4xl max-h-[75vh] flex items-center justify-center group">
            <img
              src="bedroom-airflow.jpg"
              alt="mijah Airflow Diagram"
              className="w-full h-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-1000 md:group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/1200x800?text=Upload+bedroom-airflow.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row bg-[#fdfcf9] overflow-hidden">
      {/* Brand Watermark */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden lg:block opacity-[0.03] select-none pointer-events-none">
        <span className="text-[15rem] font-bold serif uppercase tracking-tighter">mijah</span>
      </div>

      {/* Left Column: Content */}
      <div className="relative z-10 w-full md:w-[40%] h-full flex flex-col justify-center px-8 md:px-16 py-20">
        <div className="max-w-md">
          <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-8 serif text-[#222]">
            Odour-free <br />spaces. <br />
            <span className="italic font-light text-[#555]">Naturally.</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 leading-relaxed text-[#444] opacity-90">
            A fragrance-free odour absorber designed for shoes, cars, wardrobes, and all enclosed spaces.
          </p>
          <a
            href="#how"
            className="inline-block px-12 py-5 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.3em] font-semibold hover:bg-black transition-all hover:translate-y-[-2px] hover:shadow-2xl rounded-sm"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Right Column: High Quality Diagram */}
      <div className="relative w-full md:w-[60%] h-full flex items-center justify-center p-6 md:p-12 bg-white/50">
        <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center group">
          <img
            src="bedroom-airflow.jpg"
            alt="mijah Airflow Diagram"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 md:group-hover:scale-[1.01]"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/1200x800?text=Upload+bedroom-airflow.jpg';
            }}
          />
        </div>
      </div>
    </div>
  );
};

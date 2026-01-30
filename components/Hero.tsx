
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen md:h-[90vh] w-full flex flex-col md:flex-row bg-[#f9f7f2] overflow-hidden">
      {/* Content Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-8 md:px-16 py-20 md:py-0 order-2 md:order-1">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6 serif text-[#333]">
            Odour-free spaces. <br /><span className="italic">Naturally.</span>
          </h1>
          <p className="text-base md:text-lg font-light mb-10 leading-relaxed text-[#555]">
            A fragrance-free odour absorber designed for shoes, cars, wardrobes, and all small enclosed spaces.
          </p>
          <a
            href="#how"
            className="inline-block px-10 py-4 bg-[#333] text-white text-xs uppercase tracking-widest font-medium hover:bg-black transition-all rounded-sm"
          >
            Explore the science
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-2/3 h-[60vh] md:h-full order-1 md:order-2 bg-white flex items-center justify-center">
        <img
          src="bedroom-airflow.jpg"
          alt="mijah Airflow Diagram in Bedroom"
          className="max-w-full max-h-full object-contain p-4 md:p-8"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/1200x800?text=Upload+bedroom-airflow.jpg';
          }}
        />
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2efe6] -mr-16 -mt-16 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

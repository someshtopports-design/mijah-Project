
import React, { useState, useEffect } from 'react';

export const HowItWorks: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = ['/how-it-works-1.png', '/how-it-works-2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-52">
      <div className="text-center mb-20 md:mb-32">
        <span className="uppercase-tracking text-[#8da399] mb-6 block text-[0.65rem] md:text-sm">Molecular Engineering</span>
        <h2 className="text-4xl md:text-8xl font-light mb-8 md:mb-12 serif text-[#1a1a1a]">The Fundamental Science</h2>
        <p className="text-lg md:text-xl font-light text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed italic">
          More than just ingredients—it's a proprietary process. Mijah fuses high-tannin tea leaves with medical-grade activated charcoal to create a molecular sponge that eliminates odours at the source.
        </p>
      </div>

      <div className="mb-24 md:mb-40 relative group max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-[#8da399]/5 blur-3xl rounded-full scale-90 opacity-100 transition-opacity duration-1000"></div>
        <div className="relative aspect-video md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl transition-all duration-1000">
          {images.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[1.5s] ease-in-out ${activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img
                src={img}
                alt={`Mijah science process ${idx + 1}`}
                className={`w-full h-full object-cover transition-transform duration-[4s] ease-out ${activeSlide === idx ? 'scale-105' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-700 rounded-full ${activeSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-32 max-w-4xl mx-auto text-center space-y-12">
        <div className="inline-block px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-[0.6rem] uppercase tracking-[0.4em] font-bold">
          The Mijah Trade Secret
        </div>
        <h3 className="text-3xl md:text-5xl serif italic text-[#1a1a1a]">The "Inimitable" Formula.</h3>
        <p className="text-base md:text-lg font-light text-[#4a4a4a] leading-relaxed italic">
          The effectiveness of Mijah lies in our protected "Fundamental" process. The exact ratio of treated tea tannins to activation levels in our charcoal is a proprietary trade secret developed through years of home-grown experimentation. Unlike generic air fresheners, the Mijah blend is chemically bonded through a unique infusion process that cannot be replicated by simple mixing. It is this technical barrier that ensures every sachet provides uncompromised purity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
        {[
          { step: '01', title: 'Carbon Capture', desc: 'Activated charcoal uses millions of micro-pores to physically trap and lock in organic odour molecules.' },
          { step: '02', title: 'Tea Leaf Science', desc: 'Natural tannins in processed tea leaves chemically neutralize bacteria that cause persistent smells.' },
          { step: '03', title: 'Dual Absorption', desc: 'Together, they act as a molecular sponge, pulling moisture and pollutants out of the air.' },
          { step: '04', title: 'Essential Finish', desc: 'A controlled infusion of pure essential oils provides an authentic, high-end sensory background.' }
        ].map((item, i) => (
          <div key={i} className="space-y-8 group/step">
            <div className="text-5xl text-[#8da399]/20 serif italic group-hover/step:text-[#8da399] transition-all duration-500">{item.step}</div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase-tracking text-[#1a1a1a]">{item.title}</h4>
              <p className="text-base font-light leading-relaxed text-[#4a4a4a] max-w-[200px] mx-auto text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

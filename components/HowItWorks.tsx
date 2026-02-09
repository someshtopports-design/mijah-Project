
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-52">
      <div className="text-center mb-20 md:mb-32">
        <span className="uppercase-tracking text-[#8da399] mb-6 block text-[0.65rem] md:text-sm">Technical Design</span>
        <h2 className="text-4xl md:text-8xl font-light mb-8 md:mb-12 serif text-[#1a1a1a]">How it works</h2>
        <p className="text-lg md:text-xl font-light text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed italic">
          The science of silence. A passive, continuous cycle of air purification that requires zero electricity and zero chemicals.
        </p>
      </div>

      <div className="mb-32 md:mb-48 relative group max-w-5xl mx-auto perspective-container">
        <div className="absolute inset-0 bg-[#8da399]/10 blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative rounded-sm overflow-hidden shadow-2xl transition-all duration-1000">
          <img
            src="/odour-neutralizer.jpg"
            alt="Natural Odour Neutralization Process"
            className="w-full h-auto object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
        {[
          { step: '01', title: 'Breathable Flow', desc: 'Air flows naturally through our custom-weave linen pouch.' },
          { step: '02', title: 'Molecular Binding', desc: 'Tea leaves & charcoal particles trap odour molecules in their pores.' },
          { step: '03', title: 'Moisture Control', desc: 'Excess humidity is pulled from the air, preventing stale scents.' },
          { step: '04', title: 'Pure Return', desc: 'Clean, fragrance-free air is returned to your living space.' }
        ].map((item, i) => (
          <div key={i} className="space-y-8 group/step">
            <div className="text-5xl text-[#8da399]/20 serif italic group-hover/step:text-[#8da399] transition-all duration-500 scale-100 group-hover/step:scale-110">{item.step}</div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase-tracking text-[#1a1a1a]">{item.title}</h4>
              <p className="text-base font-light leading-relaxed text-[#4a4a4a] max-w-[200px] mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

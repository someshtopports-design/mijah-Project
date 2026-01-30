
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-32 md:py-52">
      <div className="text-center mb-32">
        <span className="uppercase-tracking text-[#8da399] mb-8 block">Technical Design</span>
        <h2 className="text-6xl md:text-8xl font-light mb-12 serif text-[#1a1a1a]">How it works</h2>
        <p className="text-xl font-light text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed italic">
          The science of silence. A passive, continuous cycle of air purification that requires zero electricity and zero chemicals.
        </p>
      </div>

      <div className="mb-48 relative group max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-[#8da399]/5 blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative rounded-sm overflow-hidden border border-black/5 bg-white/50 backdrop-blur-sm p-8 md:p-24 shadow-2xl transition-transform duration-700 md:group-hover:translate-y-[-10px]">
          <img
            src="airflow-diagram.png"
            alt="Technical Airflow Diagram"
            className="max-w-full mx-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
          />
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

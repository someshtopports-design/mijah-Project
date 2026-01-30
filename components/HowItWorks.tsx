
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20 md:py-32 text-center">
      <h2 className="text-3xl md:text-4xl font-normal mb-12 serif">How it works</h2>

      <div className="mb-16 rounded-lg overflow-hidden border border-black/5 bg-white shadow-sm p-4 md:p-12">
        <img
          src="airflow-diagram.png"
          alt="Technical Airflow Diagram"
          className="max-w-full mx-auto"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/1000x600?text=Upload+airflow-diagram.png';
          }}
        />
      </div>

      <div className="grid md:grid-cols-4 gap-12 text-center">
        <div className="space-y-4">
          <div className="text-2xl sage-accent serif italic">01</div>
          <p className="text-sm font-light leading-relaxed">Air flows naturally through the breathable linen pouch.</p>
        </div>
        <div className="space-y-4">
          <div className="text-2xl sage-accent serif italic">02</div>
          <p className="text-sm font-light leading-relaxed">Tea leaves & charcoal particles trap odour molecules.</p>
        </div>
        <div className="space-y-4">
          <div className="text-2xl sage-accent serif italic">03</div>
          <p className="text-sm font-light leading-relaxed">Internal moisture is absorbed, preventing bacterial growth.</p>
        </div>
        <div className="space-y-4">
          <div className="text-2xl sage-accent serif italic">04</div>
          <p className="text-sm font-light leading-relaxed">The space stays fresh — purely and naturally.</p>
        </div>
      </div>
    </div>
  );
};

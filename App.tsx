
import React, { useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { UsageGrid } from './components/UsageGrid';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Sustainability } from './components/Sustainability';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 py-10 px-8 md:px-16 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 items-center">
          {/* Left Links */}
          <div className="flex space-x-12 items-center justify-start">
            <a href="#about" className="uppercase-tracking hover:opacity-40 transition-opacity">Philosophy</a>
            <a href="#usage" className="uppercase-tracking hover:opacity-40 transition-opacity">Usage</a>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <span className="text-4xl font-light tracking-[0.5em] serif uppercase cursor-pointer">mijah</span>
          </div>

          {/* Right Links */}
          <div className="flex space-x-12 items-center justify-end">
            <a href="#how" className="uppercase-tracking hover:opacity-40 transition-opacity">Science</a>
            <a href="#sustainability" className="uppercase-tracking hover:opacity-40 transition-opacity">Sustainability</a>
          </div>
        </div>
      </nav>

      <main className="relative min-h-screen charcoal-texture">
        {/* Global Nature-friendly Background Pattern - High visibility and premium texture */}
        <div className="fixed inset-0 z-0 pattern-overlay pointer-events-none"></div>

        <div className="relative z-10">
          <Hero />
          <section id="about" className="fade-in-section">
            <About />
          </section>
          <section id="usage" className="fade-in-section">
            <UsageGrid />
          </section>
          <section id="how" className="fade-in-section">
            <HowItWorks />
          </section>
          <section className="fade-in-section">
            <Gallery />
          </section>
          <section id="sustainability" className="fade-in-section">
            <Sustainability />
          </section>
          <section className="fade-in-section">
            <FinalCTA />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

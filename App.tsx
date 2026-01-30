
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
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
        <span className="text-2xl font-medium tracking-widest serif uppercase cursor-pointer">mijah</span>
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-widest font-medium">
          <a href="#about" className="hover:opacity-60 transition-opacity">Philosophy</a>
          <a href="#usage" className="hover:opacity-60 transition-opacity">Usage</a>
          <a href="#how" className="hover:opacity-60 transition-opacity">Science</a>
          <a href="#sustainability" className="hover:opacity-60 transition-opacity">Sustainability</a>
        </div>
      </nav>

      <main className="relative min-h-screen">
        {/* Global Nature-friendly Background Pattern - Increased visibility */}
        <div
          className="fixed inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: 'url("/tea-leaf-pattern.png")',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
            pointerEvents: 'none'
          }}
        ></div>

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

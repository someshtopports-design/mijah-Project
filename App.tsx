
import React, { useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OurSection } from './components/OurSection';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Sustainability } from './components/Sustainability';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isNavHidden, setIsNavHidden] = React.useState(false);
  const [isNavScrolled, setIsNavScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isNavHidden ? 'nav-hidden' : ''} ${isNavScrolled ? 'nav-scrolled' : 'py-6 md:py-10 px-6 md:px-16 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 items-center">
          <div className="hidden md:flex space-x-12 items-center justify-start">
            <a href="#about" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Philosophy</a>
            <a href="#collections" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Collections</a>
          </div>
          <div className="md:hidden flex justify-start">
            <a href="#about" className="uppercase-tracking text-[0.6rem] hover:opacity-40 transition-opacity">Philosophy</a>
          </div>

          <div className="flex justify-center">
            <span className="text-2xl md:text-3xl font-light tracking-[0.6em] serif uppercase cursor-pointer">mijah</span>
          </div>

          <div className="flex items-center justify-end">
            <div className="hidden md:flex space-x-12 items-center">
              <a href="#science" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Science</a>
              <a href="#sustainability" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Sustainability</a>
            </div>
            <div className="md:hidden">
              <a href="#collections" className="uppercase-tracking text-[0.6rem] hover:opacity-40 transition-opacity">Collections</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative min-h-screen charcoal-texture">
        <div className="fixed inset-0 z-0 pattern-overlay pointer-events-none"></div>

        <div className="relative z-10">
          {/* Brand Title Display as per sketch */}
          <section className="pt-32 md:pt-48 pb-10 text-center">
            <h1 className="text-7xl md:text-[12rem] font-light serif tracking-tighter text-[#1a1a1a] opacity-[0.05] absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
              MIJAH
            </h1>
          </section>

          <Hero />

          <section id="about" className="fade-in-section">
            <About />
          </section>

          <section id="collections" className="fade-in-section">
            <OurSection />
          </section>

          <section id="science" className="fade-in-section">
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

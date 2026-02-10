
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
        <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
          <span className="text-2xl md:text-3xl font-light tracking-[0.6em] serif uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>mijah</span>
        </div>
      </nav>

      <main className="relative min-h-screen charcoal-texture">
        <div className="fixed inset-0 z-0 pattern-overlay pointer-events-none"></div>

        <div className="relative z-10">
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

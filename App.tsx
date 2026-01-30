
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
  const [isNavHidden, setIsNavHidden] = React.useState(false);
  const [isNavScrolled, setIsNavScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glassmorphism trigger
      if (currentScrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsNavHidden(true); // Scrolling down
      } else {
        setIsNavHidden(false); // Scrolling up
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
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Left Links - Hidden on Mobile */}
          <div className="hidden md:flex space-x-12 items-center justify-start">
            <a href="#about" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Philosophy</a>
            <a href="#usage" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Usage</a>
          </div>

          {/* Center Logo - Centered on tablet/desktop, Left on mobile */}
          <div className="flex md:justify-center justify-start">
            <span className="text-2xl md:text-4xl font-light tracking-[0.4em] md:tracking-[0.5em] serif uppercase cursor-pointer">mijah</span>
          </div>

          {/* Right Links - Icons or hidden on mobile */}
          <div className="flex items-center justify-end">
            <div className="hidden md:flex space-x-12 items-center">
              <a href="#how" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Science</a>
              <a href="#sustainability" className="uppercase-tracking hover:opacity-40 transition-opacity whitespace-nowrap">Sustainability</a>
            </div>
            {/* Mobile Menu Trigger Placeholder (optional) */}
            <div className="md:hidden">
              <a href="#usage" className="uppercase-tracking text-[0.6rem]">Explore</a>
            </div>
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

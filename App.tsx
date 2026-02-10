
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
              <div className="flex items-center space-x-6 border-l border-black/10 pl-12 h-6">
                <a href="https://www.instagram.com/mijah_fresh?utm_source=qr&igsh=MXFremYyaW42dGs5YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" /></svg>
                </a>
                <a href="https://wa.me/919406294909" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-6">
              <div className="flex items-center space-x-4 pr-4 border-r border-black/5">
                <a href="https://www.instagram.com/mijah_fresh?utm_source=qr&igsh=MXFremYyaW42dGs5YQ%3D%3D" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" /></svg>
                </a>
                <a href="https://wa.me/919406294909" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </a>
              </div>
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

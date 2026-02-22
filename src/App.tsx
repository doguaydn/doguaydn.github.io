import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SpotlightCursor from './components/SpotlightCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-dark-900 grid-bg overflow-x-hidden">
          <div className="noise-overlay" />
          <SpotlightCursor />
          <Particles />
          <Navbar />

          <main className="relative z-10 w-full">
            <Hero />
            <div className="py-16" />
            <About />
            <div className="py-16" />
            <Skills />
            <div className="py-16" />
            <Projects />
            <div className="py-16" />
            <Experience />
            <div className="py-16" />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', icon: '⚑', label: 'Home' },
  { id: 'about', icon: '📜', label: 'About' },
  { id: 'skills', icon: '⚔️', label: 'Skills' },
  { id: 'projects', icon: '🗺️', label: 'Projects' },
  { id: 'experience', icon: '🏰', label: 'Experience' },
  { id: 'contact', icon: '📮', label: 'Contact' },
];

const MiniMap = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2"
    >
      {/* Connecting line */}
      <div className="absolute top-2 bottom-2 w-px bg-gray-800" />

      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className={`relative z-10 w-8 h-8 flex items-center justify-center border-2 transition-all group ${
              isActive
                ? 'border-primary bg-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                : 'border-gray-700/50 bg-dark-900/80 hover:border-primary/50'
            }`}
            whileHover={{ scale: 1.2 }}
            title={section.label}
          >
            <span className="text-[10px]">{section.icon}</span>
            {/* Tooltip */}
            <span className="absolute right-full mr-2 font-pixel text-[6px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default MiniMap;

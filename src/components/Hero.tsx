import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          t('hero.typed.0'),
          t('hero.typed.1'),
          t('hero.typed.2'),
          t('hero.typed.3'),
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_',
      });
      return () => typed.destroy();
    }
  }, [i18n.language, t]);

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/doguaydn', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/dgknaydin', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:doguaydin.comp@gmail.com', label: 'Email' },
  ];

  const bars = [
    { label: t('hero.hp'), value: 95, color: '#22c55e', max: 100 },
    { label: t('hero.mp'), value: 80, color: '#3b82f6', max: 100 },
    { label: t('hero.xp'), value: 65, color: '#a855f7', max: 100 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Level badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-6 inline-block"
        >
          <span className="font-pixel text-xs text-primary border-2 border-primary px-4 py-2 bg-primary/10">
            {t('hero.level')} &bull; {t('hero.class')}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-pixel text-xs text-gray-400">
            {t('hero.greeting')}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4"
        >
          <span className="gradient-text">Doğukan Aydın</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl font-mono text-gray-400 mb-8"
        >
          <span className="text-primary">&gt; </span>
          <span ref={typedRef}></span>
        </motion.div>

        {/* RPG Stat Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto mb-8 space-y-3"
        >
          {bars.map((bar, i) => (
            <motion.div
              key={bar.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="font-pixel text-[10px] w-8 text-right" style={{ color: bar.color }}>
                {bar.label}
              </span>
              <div className="flex-1 rpg-bar">
                <motion.div
                  className="rpg-bar-fill"
                  style={{ backgroundColor: bar.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.value}%` }}
                  transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
                />
              </div>
              <span className="font-pixel text-[8px] text-gray-500 w-12">
                {bar.value}/{bar.max}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t('hero.description')}
          <span className="text-primary"> {t('hero.experience')}</span> {t('hero.experienceSuffix')}
        </motion.p>

        {/* Tech stack as equipped items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Node.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.08 }}
              className="px-3 py-1 text-sm font-mono border border-primary/30 text-primary/80 rounded hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded text-gray-400 hover:text-primary hover:border-primary transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-primary/10 border-2 border-primary text-primary font-pixel text-xs rounded hover:bg-primary hover:text-dark-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
            <FiChevronDown className="ml-2 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiCode, FiSmartphone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const hasAnimatedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const greeting = t('about.greeting');

  useEffect(() => {
    if (hasAnimatedRef.current) {
      setTypedText(greeting);
      setShowContent(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let i = 0;
          const interval = setInterval(() => {
            if (i < greeting.length) {
              setTypedText(greeting.slice(0, i + 1));
              i++;
            } else {
              clearInterval(interval);
              setTimeout(() => setShowContent(true), 150);
            }
          }, 25);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [greeting]);

  const expertise = [
    { icon: FiServer, title: t('about.expertise.backend.title'), description: t('about.expertise.backend.description'), color: '#a855f7' },
    { icon: FiCloud, title: t('about.expertise.devops.title'), description: t('about.expertise.devops.description'), color: '#3b82f6' },
    { icon: FiCode, title: t('about.expertise.frontend.title'), description: t('about.expertise.frontend.description'), color: '#be185d' },
    { icon: FiSmartphone, title: t('about.expertise.database.title'), description: t('about.expertise.database.description'), color: '#a855f7' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] text-primary">{t('about.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* RPG Dialogue Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rpg-border bg-dark-900/80 p-8">
              {/* NPC name tag */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rpg-border bg-primary/20 flex items-center justify-center">
                  <span className="font-pixel text-[9px] text-primary">DA</span>
                </div>
                <div className="bg-primary/20 px-4 py-1.5 border border-primary/40">
                  <span className="font-pixel text-[9px] text-primary">Doğukan Aydın</span>
                </div>
              </div>

              {/* Typed greeting */}
              <div className="font-mono text-base mb-5 min-h-[1.5rem]">
                <span className="text-primary">{'> '}</span>
                <span className="text-yellow-400">{typedText}</span>
                {!showContent && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-primary ml-0.5"
                  >
                    _
                  </motion.span>
                )}
              </div>

              {/* Bio paragraphs - fade in after typing */}
              <div className="font-mono text-sm space-y-4 text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ delay: 0 }}
                >
                  {t('about.bio1a')}<span className="text-primary">{t('about.bio1b')}</span>{t('about.bio1c')}
                  <span className="text-accent">{t('about.bio1d')}</span>{t('about.bio1e')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ delay: 0.15 }}
                >
                  {t('about.bio2a')}<span className="text-primary">{t('about.bio2b')}</span>
                  {t('about.bio2c')}<span className="text-accent">{t('about.bio2d')}</span>
                  {t('about.bio2e')}<span className="text-secondary">{t('about.bio2f')}</span>
                  {t('about.bio2g')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  {t('about.bio3a')}<span className="text-primary">{t('about.bio3b')}</span>
                  {t('about.bio3c')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ delay: 0.45 }}
                  className="text-gray-500"
                >
                  {t('about.bio4')}
                </motion.p>
              </div>

              {/* Continue indicator */}
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-right mt-3"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="font-pixel text-[8px] text-primary"
                  >
                    ▼
                  </motion.span>
                </motion.div>
              )}
            </div>

            {/* Stats as RPG attributes */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: t('about.stat1Label') },
                { value: '10+', label: t('about.stat2Label') },
                { value: '2', label: t('about.stat3Label') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center rpg-border bg-dark-900/60 p-5"
                >
                  <div className="text-3xl font-bold text-primary font-display">{stat.value}</div>
                  <div className="font-pixel text-[7px] text-gray-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise / Ability cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-5"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rpg-border bg-dark-900/60 p-6 hover:border-primary/50 transition-all group"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-4 border-2 group-hover:scale-110 transition-transform"
                  style={{ borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="font-pixel text-[9px] mb-3 text-white group-hover:text-primary transition-colors leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

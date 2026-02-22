import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const achievements = [
  { id: 'home', icon: '🏠' },
  { id: 'about', icon: '📜' },
  { id: 'skills', icon: '⚔️' },
  { id: 'projects', icon: '🗺️' },
  { id: 'experience', icon: '🏰' },
  { id: 'contact', icon: '📮' },
];

const AchievementToast = () => {
  const { t } = useTranslation();
  const [toast, setToast] = useState<{ icon: string; text: string } | null>(null);
  const unlockedRef = useRef<Set<string>>(new Set());
  const timeoutRef = useRef<number>(0);

  const showAchievement = useCallback((id: string, icon: string) => {
    if (unlockedRef.current.has(id)) return;
    unlockedRef.current.add(id);

    // Clear previous toast timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setToast({ icon, text: t(`achievement.${id}`) });
    timeoutRef.current = window.setTimeout(() => setToast(null), 3000);
  }, [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const achievement = achievements.find((a) => a.id === sectionId);
            if (achievement) {
              showAchievement(achievement.id, achievement.icon);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    // Small delay to avoid firing during initial render
    const timer = setTimeout(() => {
      achievements.forEach((a) => {
        const el = document.getElementById(a.id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [showAchievement]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.text}
          initial={{ x: 350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 350, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed top-24 right-4 z-[90] rpg-border bg-dark-900/95 backdrop-blur-sm px-5 py-3 flex items-center gap-3 max-w-xs"
        >
          <span className="text-2xl">{toast.icon}</span>
          <div>
            <p className="font-pixel text-[7px] text-yellow-400 mb-1">
              {t('achievement.title')}
            </p>
            <p className="font-pixel text-[9px] text-white leading-relaxed">
              {toast.text}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementToast;

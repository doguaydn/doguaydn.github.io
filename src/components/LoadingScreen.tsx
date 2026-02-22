import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LoadingScreen = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-dark-900 flex items-center justify-center scanlines-overlay"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center max-w-md px-4 translate-y-8">
        {/* Pixel art logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <motion.span
            className="font-pixel text-3xl text-primary inline-block"
            animate={{
              textShadow: [
                '0 0 5px rgba(168,85,247,0.3)',
                '0 0 20px rgba(168,85,247,0.8)',
                '0 0 5px rgba(168,85,247,0.3)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            DA
          </motion.span>
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="font-pixel text-[10px] text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('loading.text')}
        </motion.p>

        {/* RPG progress bar */}
        <div className="rpg-bar mx-auto mb-8" style={{ width: '260px' }}>
          <motion.div
            className="rpg-bar-fill"
            style={{ backgroundColor: '#a855f7' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, delay: 0.2, ease: 'linear' }}
          />
        </div>

        {/* Boot sequence */}
        <div className="font-mono text-xs text-left max-w-xs mx-auto space-y-1.5">
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t('loading.step1')}
          </motion.p>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            {t('loading.step2')}
          </motion.p>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            {t('loading.step3')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            <span className="text-primary">[READY]</span>{' '}
            <span className="text-green-400">{t('loading.ready')}</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

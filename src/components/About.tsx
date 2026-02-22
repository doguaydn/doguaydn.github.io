import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiCode, FiSmartphone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const expertise = [
    {
      icon: FiServer,
      title: t('about.expertise.backend.title'),
      description: t('about.expertise.backend.description'),
      color: '#a855f7',
    },
    {
      icon: FiCloud,
      title: t('about.expertise.devops.title'),
      description: t('about.expertise.devops.description'),
      color: '#3b82f6',
    },
    {
      icon: FiCode,
      title: t('about.expertise.frontend.title'),
      description: t('about.expertise.frontend.description'),
      color: '#be185d',
    },
    {
      icon: FiSmartphone,
      title: t('about.expertise.database.title'),
      description: t('about.expertise.database.description'),
      color: '#a855f7',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{t('about.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('about.title')} {t('about.titleHighlight') && <span className="gradient-text">{t('about.titleHighlight')}</span>}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-dark-800/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 font-mono text-sm text-gray-500">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2">{t('about.fileLabel')}</span>
              </div>
              <div className="font-mono text-sm space-y-4 text-gray-300">
                <p>
                  <span className="text-primary">## </span>
                  {t('about.greeting')}
                </p>
                <p>
                  {t('about.bio1a')}<span className="text-primary">{t('about.bio1b')}</span>{t('about.bio1c')}
                  <span className="text-accent">{t('about.bio1d')}</span>{t('about.bio1e')}
                </p>
                <p>
                  {t('about.bio2a')}<span className="text-primary">{t('about.bio2b')}</span>
                  {t('about.bio2c')}<span className="text-accent">{t('about.bio2d')}</span>
                  {t('about.bio2e')}<span className="text-secondary">{t('about.bio2f')}</span>
                  {t('about.bio2g')}
                </p>
                <p>
                  {t('about.bio3a')}<span className="text-primary">{t('about.bio3b')}</span>
                  {t('about.bio3c')}
                </p>
                <p>
                  <span className="text-gray-500">{t('about.bio4')}</span>
                </p>
              </div>
            </div>

            {/* Stats */}
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
                  className="text-center p-4 bg-dark-800/30 border border-gray-800 rounded-lg"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 bg-dark-800/50 border border-gray-800 rounded-lg hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}1a` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
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

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.job1.title'),
      company: 'Kariyer Zamanı',
      period: t('experience.job1.period'),
      guildIcon: '⚔️',
      rank: 'A',
      description: [
        t('experience.job1.desc0'),
        t('experience.job1.desc1'),
        t('experience.job1.desc2'),
        t('experience.job1.desc3'),
        t('experience.job1.desc4'),
      ],
      tech: ['Node.js', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Docker', 'AWS'],
      color: '#a855f7',
    },
    {
      title: t('experience.job3.title'),
      company: 'E-HR Project',
      period: t('experience.job3.period'),
      guildIcon: '🛡️',
      rank: 'B',
      description: [
        t('experience.job3.desc0'),
        t('experience.job3.desc1'),
        t('experience.job3.desc2'),
        t('experience.job3.desc3'),
      ],
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      color: '#3b82f6',
    },
    {
      title: t('experience.job2.title'),
      company: 'Remote',
      period: t('experience.job2.period'),
      guildIcon: '🏴',
      rank: 'A',
      description: [
        t('experience.job2.desc0'),
        t('experience.job2.desc1'),
        t('experience.job2.desc2'),
        t('experience.job2.desc3'),
      ],
      tech: ['Java', 'Spring Boot', 'Vue.js', 'MongoDB', 'RabbitMQ'],
      color: '#f59e0b',
    },
    {
      title: t('experience.job4.title'),
      company: 'Antsoft IT Services',
      period: t('experience.job4.period'),
      guildIcon: '🏹',
      rank: 'C',
      description: [
        t('experience.job4.desc0'),
        t('experience.job4.desc1'),
        t('experience.job4.desc2'),
      ],
      tech: ['JavaScript', 'HTML/CSS', 'Git'],
      color: '#be185d',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-dark-800/30 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] text-primary">{t('experience.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Guild cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rpg-border bg-dark-900/70 p-6 group hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all"
            >
              {/* Guild header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 flex items-center justify-center border-2 shrink-0 text-2xl"
                  style={{ borderColor: exp.color, backgroundColor: `${exp.color}15` }}
                >
                  {exp.guildIcon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-display font-bold text-white">
                      {exp.company}
                    </h3>
                    <span
                      className="font-pixel text-[8px] px-2 py-0.5 border"
                      style={{ color: exp.color, borderColor: exp.color }}
                    >
                      RANK {exp.rank}
                    </span>
                  </div>
                  <p className="font-pixel text-[8px] mt-1" style={{ color: exp.color }}>
                    {exp.title}
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Quests completed */}
              <div className="mb-4">
                <span className="font-pixel text-[7px] text-gray-500 block mb-2">
                  {t('experience.questsDone')}:
                </span>
                <ul className="space-y-1.5">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <span className="text-primary mr-2 mt-0.5">►</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Weapons equipped */}
              <div>
                <span className="font-pixel text-[7px] text-gray-500 block mb-2">
                  {t('experience.weapons')}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono border"
                      style={{ color: exp.color, borderColor: `${exp.color}40`, backgroundColor: `${exp.color}10` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Academy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="font-pixel text-xs text-primary mb-6">{t('experience.educationTitle')}</h3>
          <div className="rpg-border bg-dark-900/60 p-6 max-w-md mx-auto">
            <span className="text-3xl mb-3 block">🎓</span>
            <h4 className="text-lg font-display font-semibold">{t('experience.degree')}</h4>
            <p className="font-pixel text-[8px] text-primary mt-2">{t('experience.university')}</p>
            <p className="text-gray-500 text-sm mt-1 font-mono">{t('experience.educationPeriod')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

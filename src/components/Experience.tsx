import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.job1.title'),
      company: 'Kariyer Zamanı',
      location: 'İstanbul',
      period: t('experience.job1.period'),
      description: [
        t('experience.job1.desc0'),
        t('experience.job1.desc1'),
        t('experience.job1.desc2'),
        t('experience.job1.desc3'),
        t('experience.job1.desc4'),
      ],
      tech: ['Node.js', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Docker', 'AWS'],
    },
    {
      title: t('experience.job2.title'),
      company: 'Remote',
      location: 'Remote',
      period: t('experience.job2.period'),
      description: [
        t('experience.job2.desc0'),
        t('experience.job2.desc1'),
        t('experience.job2.desc2'),
        t('experience.job2.desc3'),
      ],
      tech: ['Java', 'Spring Boot', 'Vue.js', 'MongoDB', 'RabbitMQ'],
    },
    {
      title: t('experience.job3.title'),
      company: 'E-HR Project',
      location: 'Remote',
      period: t('experience.job3.period'),
      description: [
        t('experience.job3.desc0'),
        t('experience.job3.desc1'),
        t('experience.job3.desc2'),
        t('experience.job3.desc3'),
      ],
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    },
    {
      title: t('experience.job4.title'),
      company: 'Antsoft IT Services',
      location: 'İstanbul',
      period: t('experience.job4.period'),
      description: [
        t('experience.job4.desc0'),
        t('experience.job4.desc1'),
        t('experience.job4.desc2'),
      ],
      tech: ['JavaScript', 'HTML/CSS', 'Git'],
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
          <span className="font-mono text-primary text-sm">{t('experience.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary" style={{ background: 'linear-gradient(to bottom, #a855f7, #be185d, #3b82f6)' }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark-900 z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-900/80 border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <FiBriefcase className="text-primary" size={24} />
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <span className="text-primary mr-2 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-semibold mb-6">{t('experience.educationTitle')}</h3>
          <div className="bg-dark-900/50 border border-gray-800 rounded-xl p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold">{t('experience.degree')}</h4>
            <p className="text-primary font-mono text-sm">{t('experience.university')}</p>
            <p className="text-gray-500 text-sm mt-1">{t('experience.educationPeriod')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

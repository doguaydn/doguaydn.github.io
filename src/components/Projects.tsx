import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import { SiAppstore } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      title: 'Kariyer Zamani',
      description: t('projects.kariyerZamani.description'),
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Docker', 'AWS'],
      links: {
        live: 'https://kariyerzamani.com',
      },
      highlights: ['2s > 200ms search', '60% DB load reduction', 'Production ready'],
      color: '#a855f7',
    },
    {
      title: 'Proteam HR',
      description: t('projects.proteamHR.description'),
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
      links: {
        appstore: 'https://apps.apple.com/tr/app/proteam-e-i-k/id6692632266',
      },
      highlights: ['Live on App Store', 'Full CRUD API', 'JWT Auth'],
      color: '#3b82f6',
    },
    {
      title: 'Hangify',
      description: t('projects.hangify.description'),
      tech: ['TypeScript', 'Prisma', 'Socket.io', 'Redis', 'Elasticsearch', 'Digital Ocean'],
      links: {
        github: '#',
      },
      highlights: ['Real-time', 'Socket.io', 'Coming Soon'],
      color: '#be185d',
    },
  ];

  const otherProjects = [
    {
      title: t('projects.erp.title'),
      description: t('projects.erp.description'),
      tech: ['Java', 'Spring Boot', 'Vue.js', 'MongoDB', 'RabbitMQ'],
    },
    {
      title: t('projects.aiOutlier.title'),
      description: t('projects.aiOutlier.description'),
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      tech: ['Python', 'LSTM', 'Pandas', 'WeatherAPI'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{t('projects.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project image/preview */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div
                    className="aspect-video rounded-xl overflow-hidden border border-gray-800"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dark-900/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div
                          className="text-6xl font-bold font-display mb-4"
                          style={{ color: project.color }}
                        >
                          {project.title.charAt(0)}
                        </div>
                        <div className="font-mono text-sm text-gray-400">
                          {project.highlights.map((h, i) => (
                            <span key={i}>
                              {h}
                              {i < project.highlights.length - 1 && ' \u2022 '}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow effect on hover */}
                  <div
                    className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl -z-10"
                    style={{ backgroundColor: project.color }}
                  />
                </motion.div>
              </div>

              {/* Project info */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <span className="font-mono text-sm" style={{ color: project.color }}>
                  {t('projects.featuredLabel')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-4">
                  {project.title}
                </h3>
                <div className="bg-dark-800/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-gray-400 bg-dark-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <FiGithub size={22} />
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <FiExternalLink size={22} />
                    </motion.a>
                  )}
                  {project.links.appstore && (
                    <motion.a
                      href={project.links.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <SiAppstore size={22} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-display font-semibold">{t('projects.otherTitle')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-dark-800/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <FiFolder className="text-primary" size={40} />
                <div className="flex gap-3">
                  <FiGithub className="text-gray-500 hover:text-primary transition-colors cursor-pointer" size={20} />
                </div>
              </div>
              <h4 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-500 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

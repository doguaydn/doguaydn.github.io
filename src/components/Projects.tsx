import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiAppstore } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import TiltCard from './TiltCard';

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
      difficulty: 5,
      status: 'completed' as const,
      reward: 'Production Deploy',
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
      difficulty: 4,
      status: 'completed' as const,
      reward: 'App Store Launch',
    },
    {
      title: 'TaskLabs',
      description: t('projects.taskLabs.description'),
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'RabbitMQ', 'Socket.io', 'Docker'],
      links: {
        github: '#',
      },
      highlights: ['Real-time', 'Event-driven', 'Team Collaboration'],
      color: '#be185d',
      difficulty: 5,
      status: 'active' as const,
      reward: 'Team Collab Tool',
    },
    {
      title: 'Sezi',
      description: t('projects.sezi.description'),
      tech: ['Spring Boot', 'React Native', 'PostgreSQL', 'RabbitMQ', 'Gemini AI'],
      links: {
        github: '#',
      },
      highlights: ['AI Matching', 'Astrology', 'Coming Soon'],
      color: '#f59e0b',
      difficulty: 5,
      status: 'active' as const,
      reward: 'AI Integration',
    },
    {
      title: 'Hangify',
      description: t('projects.hangify.description'),
      tech: ['TypeScript', 'Prisma', 'Socket.io', 'Redis', 'Elasticsearch', 'Digital Ocean'],
      links: {
        github: '#',
      },
      highlights: ['Real-time', 'Socket.io', 'Coming Soon'],
      color: '#10b981',
      difficulty: 4,
      status: 'active' as const,
      reward: 'Social Platform',
    },
  ];

  const otherProjects = [
    {
      title: t('projects.erp.title'),
      description: t('projects.erp.description'),
      tech: ['Java', 'Spring Boot', 'Vue.js', 'MongoDB', 'RabbitMQ'],
      difficulty: 3,
    },
    {
      title: t('projects.aiOutlier.title'),
      description: t('projects.aiOutlier.description'),
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
      difficulty: 3,
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      tech: ['Python', 'LSTM', 'Pandas', 'WeatherAPI'],
      difficulty: 2,
    },
  ];

  const renderStars = (count: number) => (
    <span className="rpg-stars text-xs tracking-wider">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  );

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
          <span className="font-pixel text-[10px] text-primary">{t('projects.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main Quests (Featured) */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rpg-border bg-dark-900/60 p-6 md:p-8 relative overflow-hidden group"
            >
              {/* Quest badge */}
              <div className="absolute top-0 right-0">
                <span className="quest-badge px-3 py-1" style={{ backgroundColor: project.color }}>
                  {t('projects.featuredLabel')}
                </span>
              </div>

              {/* Status badge */}
              <div className="absolute top-0 left-4">
                <span className={`quest-badge px-3 py-1 ${
                  project.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'
                }`}>
                  {t(`projects.status.${project.status}`)}
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-start mt-6">
                {/* Quest info panel */}
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-display mb-3" style={{ color: project.color }}>
                    {project.title}
                  </h3>

                  {/* Difficulty */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-pixel text-[8px] text-gray-500">{t('projects.difficulty')}:</span>
                    {renderStars(project.difficulty)}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Loot (tech stack) */}
                  <div className="mb-4">
                    <span className="font-pixel text-[8px] text-gray-500 block mb-2">{t('projects.loot')}:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-gray-300 bg-dark-800 border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quest reward panel */}
                <div className="md:col-span-4">
                  <div className="bg-dark-800/80 border-2 border-gray-700/50 p-4">
                    <span className="font-pixel text-[8px] text-gray-500 block mb-3">{t('projects.reward')}:</span>
                    <div className="font-pixel text-[10px] text-primary mb-4">{project.reward}</div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="text-primary">►</span>
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-4 pt-3 border-t border-gray-700/50">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <FiGithub size={18} />
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <FiExternalLink size={18} />
                        </motion.a>
                      )}
                      {project.links.appstore && (
                        <motion.a
                          href={project.links.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <SiAppstore size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl -z-10"
                style={{ backgroundColor: project.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Side Quests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="font-pixel text-xs text-primary">{t('projects.otherTitle')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <TiltCard
              key={index}
              className="relative rpg-border bg-dark-900/60 p-6 hover:border-primary/30 transition-all group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-pixel text-[8px] text-gray-500">{t('projects.difficulty')}:</span>
                  {renderStars(project.difficulty)}
                </div>
                <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-400 px-2 py-0.5 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

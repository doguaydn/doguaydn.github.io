import { motion } from 'framer-motion';
import {
  SiNodedotjs, SiTypescript, SiJavascript,
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
  SiDocker, SiAmazon, SiNginx, SiGithubactions,
  SiReact, SiVuedotjs, SiTailwindcss,
  SiExpress, SiSpringboot, SiPrisma, SiSocketdotio
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: 'skills.backend',
      level: 90,
      color: '#a855f7',
      technologies: [
        { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
        { icon: SiExpress, name: 'Express.js', color: '#ffffff' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: FaJava, name: 'Java', color: '#007396' },
        { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
        { icon: SiSocketdotio, name: 'Socket.io', color: '#ffffff' },
      ],
    },
    {
      titleKey: 'skills.database',
      level: 85,
      color: '#3b82f6',
      technologies: [
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
        { icon: SiRedis, name: 'Redis', color: '#DC382D' },
        { icon: SiElasticsearch, name: 'Elasticsearch', color: '#005571' },
        { icon: SiPrisma, name: 'Prisma', color: '#a855f7' },
      ],
    },
    {
      titleKey: 'skills.devops',
      level: 80,
      color: '#be185d',
      technologies: [
        { icon: SiDocker, name: 'Docker', color: '#2496ED' },
        { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
        { icon: SiNginx, name: 'Nginx', color: '#009639' },
        { icon: SiGithubactions, name: 'GitHub Actions', color: '#2088FF' },
      ],
    },
    {
      titleKey: 'skills.frontend',
      level: 70,
      color: '#c084fc',
      technologies: [
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-800/30 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{t('skills.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-dark-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              {/* Category header with progress bar */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-semibold">{t(category.titleKey)}</h3>
                <span className="font-mono text-sm" style={{ color: category.color }}>
                  {category.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-dark-700 rounded-full mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                  className="h-full rounded-full relative skill-bar"
                  style={{ backgroundColor: category.color }}
                />
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-700/50 border border-gray-700 rounded-lg hover:border-primary/50 transition-all cursor-default group"
                  >
                    <tech.icon
                      size={18}
                      className="transition-colors"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">
            {t('skills.otherTools')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Linux', 'REST API', 'JWT', 'Microservices', 'Agile/Scrum', 'Jira', 'Postman', 'PM2', 'Sequelize'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 text-sm font-mono text-gray-400 border border-gray-700 rounded-full hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

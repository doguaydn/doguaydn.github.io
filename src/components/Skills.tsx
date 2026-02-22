import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import {
  SiNodedotjs, SiTypescript, SiJavascript,
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiMysql, SiSqlite,
  SiDocker, SiAmazon, SiNginx, SiGithubactions, SiDigitalocean, SiCloudflare,
  SiReact, SiVuedotjs, SiTailwindcss, SiHtml5, SiCss3, SiExpo, SiVite,
  SiExpress, SiSpringboot, SiPrisma, SiSocketdotio,
  SiNestjs, SiRabbitmq, SiHibernate, SiFirebase
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscDatabase } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: 'skills.backend',
      level: 90,
      color: '#a855f7',
      icon: '⚔️',
      technologies: [
        { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
        { icon: SiExpress, name: 'Express.js', color: '#ffffff' },
        { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: FaJava, name: 'Java', color: '#007396' },
        { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
        { icon: SiHibernate, name: 'Hibernate', color: '#59666C' },
        { icon: SiRabbitmq, name: 'RabbitMQ', color: '#FF6600' },
        { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
        { icon: SiSocketdotio, name: 'Socket.io', color: '#ffffff' },
      ],
    },
    {
      titleKey: 'skills.database',
      level: 85,
      color: '#3b82f6',
      icon: '🛡️',
      technologies: [
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
        { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
        { icon: VscDatabase, name: 'MSSQL', color: '#CC2927' },
        { icon: SiSqlite, name: 'SQLite', color: '#003B57' },
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
      icon: '🧙',
      technologies: [
        { icon: SiDocker, name: 'Docker', color: '#2496ED' },
        { icon: SiDocker, name: 'Docker Compose', color: '#2496ED' },
        { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
        { icon: SiAmazon, name: 'EC2', color: '#FF9900' },
        { icon: SiDigitalocean, name: 'DigitalOcean', color: '#0080FF' },
        { icon: SiCloudflare, name: 'Cloudflare', color: '#F38020' },
        { icon: SiNginx, name: 'Nginx', color: '#009639' },
        { icon: SiGithubactions, name: 'GitHub Actions', color: '#2088FF' },
      ],
    },
    {
      titleKey: 'skills.frontend',
      level: 70,
      color: '#c084fc',
      icon: '🏹',
      technologies: [
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiReact, name: 'React Native', color: '#61DAFB' },
        { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
        { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
        { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
        { icon: SiExpo, name: 'Expo', color: '#000020' },
        { icon: SiVite, name: 'Vite', color: '#646CFF' },
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
          <span className="font-pixel text-[10px] text-primary">{t('skills.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skill tree grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard
              key={category.titleKey}
              className="relative rpg-border bg-dark-900/80 p-6 hover:border-primary/30 transition-all"
              glareColor={`${category.color}33`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-pixel text-xs" style={{ color: category.color }}>
                    {t(category.titleKey)}
                  </h3>
                  <span className="font-pixel text-[8px] text-gray-500 ml-auto">
                    LVL {category.level}
                  </span>
                </div>

                {/* RPG stat bar */}
                <div className="rpg-bar mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                    className="rpg-bar-fill"
                    style={{ backgroundColor: category.color }}
                  />
                </div>

                {/* Technologies as inventory items */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="flex items-center gap-2 px-3 py-2 bg-dark-800/80 border-2 border-gray-700/50 hover:border-primary/50 transition-all cursor-default group"
                      style={{ imageRendering: 'pixelated' }}
                    >
                      <tech.icon
                        size={16}
                        className="transition-colors"
                        style={{ color: tech.color }}
                      />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-mono">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Passive abilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-pixel text-[8px] text-gray-500 mb-6">
            {t('skills.otherTools')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Linux', 'REST API', 'JWT', 'OAuth2', 'WebSocket', 'Swagger/OpenAPI', 'Maven', 'Microservices', 'Agile/Scrum', 'Jira', 'Postman', 'Figma', 'PM2', 'Sequelize', 'TypeORM', 'Mongoose'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-3 py-1.5 text-xs font-mono text-gray-400 border-2 border-gray-700/50 hover:border-primary hover:text-primary transition-all cursor-default"
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

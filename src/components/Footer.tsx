import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/doguaydn', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/dgknaydin', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:doguaydin.comp@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-mono text-xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            &lt;DA /&gt;
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 font-mono flex items-center gap-1">
            {t('footer.text')}
            <span className="mx-2">•</span>
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

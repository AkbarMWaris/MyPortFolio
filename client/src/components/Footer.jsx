import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg', href: 'https://github.com/AkbarMWaris' },
    { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg', href: 'https://linkedin.com/in/akbarmwaris' },
    { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gmail.svg', href: 'mailto:akbarmahmoodwaris@gmail.com?subject=Portfolio%20Contact&body=Hi%20Akbar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-code text-xs sm:text-sm"
      style={{ background: 'var(--accent-blue)', color: '#06101f' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <GitBranch size={14} /> main
          </span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">© {currentYear} AM Waris</span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-4 h-4 object-contain"
                style={{ filter: 'brightness(0)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

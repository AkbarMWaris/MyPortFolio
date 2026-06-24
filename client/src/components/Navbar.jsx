import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  const tabs = [
    { label: 'Hero.jsx', href: '#home' },
    { label: 'About.jsx', href: '#about' },
    { label: 'Skills.jsx', href: '#skills' },
    { label: 'Projects.jsx', href: '#projects' },
    { label: 'Contact.jsx', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md"
      style={{ 
        background: `rgba(${theme === 'dark' ? '10,14,20' : '245,245,247'},0.85)`,
        borderBottom: '1px solid var(--border)' 
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Window dots, like a real editor titlebar */}
        <div className="flex items-center gap-4 py-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7b8e' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e8c074' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5ce6a6' }} />
          </div>
          <span className="font-code text-sm hidden sm:inline" style={{ color: 'var(--text-dim)' }}>
            akbar@portfolio:~
          </span>
        </div>

        {/* Tabs = nav links */}
        <div className="hidden md:flex h-full">
          {tabs.map(tab => (
            <a
              key={tab.label}
              href={tab.href}
              className="font-code text-sm px-4 py-3 border-r transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            className="p-2 rounded-lg transition-colors hidden md:block"
            style={{ 
              color: 'var(--text-dim)',
              background: 'rgba(255,255,255,0.05)'
            }}
            onClick={toggleTheme}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent-green)';
              e.currentTarget.style.background = 'rgba(92,230,166,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-dim)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            }}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            className="md:hidden p-2"
            style={{ color: 'var(--text)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden"
          style={{ background: 'var(--bg-panel)', borderTop: '1px solid var(--border)' }}
        >
          {tabs.map(tab => (
            <a
              key={tab.label}
              href={tab.href}
              onClick={() => setOpen(false)}
              className="font-code text-sm block px-5 py-3 border-b"
              style={{ color: 'var(--text-dim)', borderColor: 'var(--border)' }}
            >
              {tab.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="font-code text-sm w-full text-left px-5 py-3 border-b transition-colors flex items-center gap-2"
            style={{ color: 'var(--text-dim)', borderColor: 'var(--border)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-green)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};
export default Navbar;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Gamer',
  ];

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (isDeleting) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => {
            if (prev.length > 0) return prev.slice(0, -1);
            setIsDeleting(false);
            setCurrentRoleIndex(p => (p + 1) % roles.length);
            return '';
          });
        }, 45);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => {
            if (prev.length < fullText.length) return fullText.slice(0, prev.length + 1);
            setTimeout(() => setIsDeleting(true), 1400);
            return prev;
          });
        }, 75);
      }
    };
    timeoutId = setTimeout(handleTyping, 10);
    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="panel overflow-hidden"
        >
          {/* Window titlebar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7b8e' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e8c074' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5ce6a6' }} />
            <span className="font-code text-xs ml-3" style={{ color: 'var(--text-dim)' }}>
              about-me.js
            </span>
          </div>

          {/* Code block */}
          <div className="p-6 sm:p-10 font-code text-base sm:text-lg leading-relaxed">
            <div><span style={{ color: 'var(--accent-purple)' }}>const</span> <span style={{ color: 'var(--accent-blue)' }}>developer</span> = {'{'}</div>

            <div className="pl-6">
              <span style={{ color: 'var(--text)' }}>name:</span>{' '}
              <span style={{ color: 'var(--accent-green)' }}>'Akbar Mahmood Waris'</span>,
            </div>

            <div className="pl-6">
              <span style={{ color: 'var(--text)' }}>role:</span>{' '}
              <span style={{ color: 'var(--accent-green)' }}>
                '{displayText}
                <span className="inline-block w-2" style={{ borderRight: '2px solid var(--accent-green)' }} />
                '
              </span>,
            </div>

            <div className="pl-6">
              <span style={{ color: 'var(--text)' }}>stack:</span> [
              <span style={{ color: 'var(--accent-yellow)' }}>'MongoDB'</span>,{' '}
              <span style={{ color: 'var(--accent-yellow)' }}>'Express'</span>,{' '}
              <span style={{ color: 'var(--accent-yellow)' }}>'React'</span>,{' '}
              <span style={{ color: 'var(--accent-yellow)' }}>'Node'</span>],
            </div>

            <div className="pl-6">
              <span style={{ color: 'var(--text)' }}>location:</span>{' '}
              <span style={{ color: 'var(--accent-green)' }}>'Darbhanga, Bihar'</span>,
            </div>

            <div>{'};'}</div>
          </div>

          {/* CTA bar */}
          <div
            className="flex flex-wrap items-center gap-4 px-6 sm:px-10 py-6 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-terminal"
            >
              View Projects
              <ArrowDown size={16} />
            </motion.button>
            <span className="font-code text-sm" style={{ color: 'var(--text-dim)' }}>
              $ npm run build-career
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Code2Icon, Link } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'QuickShow Movie App',
    img: '/assets/p1-img.png',
    desc: 'Movie booking app with Clerk authentication for easy login.',
    tech: 'React, MongoDB, Tailwind',
    live: 'https://quickshow-bookticket.vercel.app/',
    source: 'https://github.com/akbarmwaris/quickshow',
  },
  {
    id: 2,
    title: 'FindWork Job Portal',
    img: '/assets/p2-img.png',
    desc: 'Full MERN job search platform with auth and postings.',
    tech: 'React, Node, Supabase, Tailwind',
    live: 'https://findwork-new.netlify.app/',
    source: 'https://github.com/akbarmwaris/findwork',
  },
    {
      id: 3,
      title: 'Portfolio',
      img: '/assets/p3-img.png',
      desc: 'Personal portfolio website.',
      tech: 'React, Tailwind, Framer Motion',
      live: 'https://myportfolio-latest-verison07.vercel.app/',
      source: 'https://github.com/AkbarMWaris/MyPortFolio',
    
  },
];

const Projects = () => (
  <section id="projects" className="py-24 sm:py-32 max-w-6xl mx-auto px-4">
    <div className="flex items-baseline gap-3 mb-12">
      <span className="gutter-line">04</span>
      <p className="code-comment">projects.jsx</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="panel overflow-hidden flex flex-col"
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <span className="font-code text-xs truncate" style={{ color: 'var(--text-dim)' }}>
              {project.title.toLowerCase().replace(/\s+/g, '-')}/preview.png
            </span>
          </div>

          <div className="relative h-44 overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-code font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>
              {project.title}
            </h3>
            <p className="text-sm mb-3 flex-1" style={{ color: 'var(--text-dim)' }}>
              {project.desc}
            </p>
            <p className="font-code text-xs mb-5" style={{ color: 'var(--accent-purple)' }}>
              {project.tech}
            </p>

            <div className="flex gap-3">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 font-code text-xs font-semibold py-2.5 rounded-lg"
                style={{ background: 'var(--accent-green)', color: '#06150f' }}
              >
                Live <Link size={14} />
              </motion.a>
              <motion.a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 font-code text-xs font-semibold py-2.5 rounded-lg"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text)', border: '1px solid var(--border)' }}
              >
                Source <Code2Icon size={14} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;

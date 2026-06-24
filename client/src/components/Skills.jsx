import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/bootstrap.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/express.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/supabase.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/git.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/postman.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/vite.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/vercel.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/netlify.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/visualstudiocode.svg' },
    ],
  };

  const categories = [
    { title: 'frontend', data: skillsData.frontend },
    { title: 'backend', data: skillsData.backend },
    { title: 'devTools', data: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 max-w-6xl mx-auto px-4">
      <div className="flex items-baseline gap-3 mb-12">
        <span className="gutter-line">03</span>
        <p className="code-comment">skills.jsx</p>
      </div>

      <div className="panel overflow-hidden">
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <span className="font-code text-xs" style={{ color: 'var(--text-dim)' }}>package.json</span>
        </div>

        <div className="p-6 sm:p-8 font-code">
          <div style={{ color: 'var(--text)' }}>{'{'}</div>
          {categories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="pl-6 mb-2"
            >
              <span style={{ color: 'var(--accent-blue)' }}>"{category.title}"</span>
              <span style={{ color: 'var(--text)' }}>: [</span>

              <div className="pl-6 flex flex-wrap gap-3 py-3">
                {category.data.map(skill => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      className="w-4 h-4 object-contain"
                      style={{ filter: 'invert(0.85)' }}
                      loading="lazy"
                    />
                    <span className="text-sm" style={{ color: 'var(--accent-green)' }}>
                      '{skill.name}'
                    </span>
                  </motion.div>
                ))}
              </div>

              <span style={{ color: 'var(--text)' }}>],</span>
            </motion.div>
          ))}
          <div style={{ color: 'var(--text)' }}>{'}'}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

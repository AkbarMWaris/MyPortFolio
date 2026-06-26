import { motion } from 'framer-motion';
import { File, Github, Linkedin } from 'lucide-react';

const About = () => (
  <section id="about" className="py-24 sm:py-32 max-w-6xl mx-auto px-4">
    <div className="flex items-baseline gap-3 mb-12">
      <span className="gutter-line">02</span>
      <p className="code-comment">about.jsx</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Image — the only photo on the site, framed like an editor's image preview tab */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="panel overflow-hidden sticky top-24"
      >
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7b8e' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e8c074' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5ce6a6' }} />
          <span className="font-code text-xs ml-3" style={{ color: 'var(--text-dim)' }}>
            akbar.jpg — Preview
          </span>
        </div>
        <div className="p-4">
          <img
            src="/assets/about-img.jpg"
            alt="Akbar Mahmood Waris"
            className="w-full h-[420px] object-cover rounded-lg"
            style={{ border: '1px solid var(--border)' }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-code" style={{ color: 'var(--text)' }}>
            Passionate Full-Stack Developer
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            Self-taught developer from{' '}
            <span style={{ color: 'var(--accent-purple)' }} className="font-semibold">
              Darbhanga, Bihar
            </span>
            , passionate about building scalable web apps with the{' '}
            <span style={{ color: 'var(--accent-green)' }} className="font-semibold">
              MERN stack
            </span>
            .
          </p>
        </div>

        <div className="panel p-5">
          <p className="code-comment mb-3">Build and Learned</p>
          <p className="text-base" style={{ color: 'var(--text)' }}>
            <span className="font-semibold" style={{ color: 'var(--accent-blue)' }}><a href='https://findwork-new.netlify.app/' target="_blank">FindWork</a></span> — a job portal, and{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-blue)' }}><a href='https://quickshow-bookticket.vercel.app/' target='_blank'>QuickShow</a></span> — a movie booking app.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <motion.a
            href="https://github.com/akbarmwaris"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 panel py-3 font-code text-sm font-semibold"
            style={{ color: 'var(--text)' }}
          >
            <Github size={18} /> GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/akbarmwaris"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 panel py-3 font-code text-sm font-semibold"
            style={{ color: 'var(--text)' }}
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1G_ztp7K9vCFq6lrSYj3x0Z77cnSDaEX1/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 panel py-3 font-code text-sm font-semibold"
            style={{ color: 'var(--text)' }}
          >
            <File size={18} /> Resume
          </motion.a>
        </div>

        <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
          Daily coding, daily commits — mastering React, Node.js, and MongoDB one push at a time.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;

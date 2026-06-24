import { motion } from 'framer-motion';

const experiences = [
  { title: 'Intermediate Marks', desc: 'B.Tech Computer Science - 8.5 CGPA (2022-2026)', date: 'Ongoing' },
  { title: 'College Experience', desc: 'Developed projects, participated in hackathons at XYZ College, Patna.', date: '2023-2025' },
];

const Experience = () => (
  <section id="experience" className="py-32 container mx-auto px-4">
    <motion.h2 whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-20">Experience</motion.h2>
    <div className="max-w-2xl mx-auto space-y-8">
      {experiences.map((exp, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h3 className="text-2xl font-bold">{exp.title}</h3>
          <p className="text-slate-400">{exp.desc}</p>
          <span className="text-sm text-cyan-400">{exp.date}</span>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Experience;

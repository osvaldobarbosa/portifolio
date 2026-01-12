import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';

interface ExperienceProps {
  content: ContentData['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold sticky top-32 tracking-tight"
          >
            {content.title}
          </motion.h2>
        </div>
        
        <div className="md:w-2/3 relative pl-8 border-l border-white/10 space-y-20">
          {content.items.map((item, idx) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(99,102,241,0.3)]" />
              
              <span className="text-sm font-mono text-accent mb-2 block tracking-wider">
                {item.period}
              </span>
              
              <h3 className="text-2xl font-bold mb-1 text-primary">{item.role}</h3>
              <div className="text-lg text-secondary mb-6 font-medium">{item.company}</div>
              
              <ul className="space-y-3 mb-6 text-zinc-300 font-light leading-relaxed">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                     <span className="block w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
                     {desc}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
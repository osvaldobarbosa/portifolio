import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentData, Skill } from '../types';

interface SkillsProps {
  content: ContentData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  // Alterado valor inicial de 'all' para 'prod'
  const [activeCategory, setActiveCategory] = useState<string>('prod');

  const allSkills = useMemo(() => {
    return content.categories.flatMap(c => c.skills);
  }, [content.categories]);

  const displayedSkills: Skill[] = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return content.categories.find(c => c.id === activeCategory)?.skills || [];
  }, [activeCategory, allSkills, content.categories]);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">
            Competências
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {content.title}
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto font-light">
            {content.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === 'all' 
                ? 'bg-accent border-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                : 'bg-transparent text-secondary border-white/5 hover:border-white/20 hover:text-white'
            }`}
        >
            {content.categories[0].name === "Liderança" ? "Todas" : "All"}
        </button>
        {content.categories.map((cat) => (
            <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id 
                ? 'bg-accent border-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                : 'bg-transparent text-secondary border-white/5 hover:border-white/20 hover:text-white'
            }`}
            >
            {cat.name}
            </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode='popLayout'>
            {displayedSkills.map((skill, idx) => {
                // Determine styling based on level
                const isExpert = skill.level.toLowerCase() === 'expert';
                
                return (
                    <motion.div 
                        key={`${skill.name}-${idx}`}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="group p-6 rounded-2xl bg-surface border border-white/5 flex flex-col justify-between h-36 hover:border-accent/30 transition-all duration-300 hover:bg-white/[0.02]"
                    >
                        <h3 className="text-lg font-bold text-zinc-100 leading-tight group-hover:text-white transition-colors">
                            {skill.name}
                        </h3>
                        
                        <div className={`
                            self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mt-3 border
                            ${isExpert 
                                ? 'bg-accent/10 text-accent border-accent/20' 
                                : 'bg-white/5 text-zinc-500 border-white/5'
                            }
                        `}>
                            {skill.level}
                        </div>
                    </motion.div>
                );
            })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
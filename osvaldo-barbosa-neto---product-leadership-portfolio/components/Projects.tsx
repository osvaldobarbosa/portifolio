import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentData, CaseStudy } from '../types';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  content: ContentData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
        <p className="text-secondary">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedCase(item)}
            className="group cursor-pointer rounded-2xl p-6 bg-surface border border-white/5 hover:border-accent/30 transition-colors"
          >
            <div className="text-xs font-medium text-accent mb-4 px-2 py-1 bg-accent/10 rounded-full w-fit">
              {item.category}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-secondary text-sm line-clamp-3 mb-6">
              {item.context}
            </p>
            <div className="flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
              Ver detalhes <ChevronRight size={16} className="ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedCase.id}`}
              className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCase(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider">
                    {selectedCase.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                    {selectedCase.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCase.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-full text-secondary border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Context</h4>
                      <p className="text-zinc-300">{selectedCase.context}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Complexity</h4>
                      <p className="text-zinc-300">{selectedCase.complexity}</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Leadership Role</h4>
                    <p className="text-lg font-medium">{selectedCase.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Strategic Decisions</h4>
                    <ul className="space-y-3">
                      {selectedCase.decisions.map((decision, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
                          <span className="text-zinc-300">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">Result & Impact</h4>
                    <p className="text-xl md:text-2xl font-light text-white">{selectedCase.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
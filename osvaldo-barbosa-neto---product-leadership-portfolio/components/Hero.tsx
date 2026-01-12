import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { ArrowRight, Layers, Box, Cpu, ShoppingBag } from 'lucide-react';

interface HeroProps {
  content: ContentData['hero'];
}

const icons = [Layers, Box, Cpu, ShoppingBag];

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 max-w-6xl mx-auto">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {content.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl font-light"
        >
          {content.subheadline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
        >
          {content.cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-default"
              >
                <div className="flex items-center gap-3 mb-2 text-accent">
                  <Icon size={20} strokeWidth={1.5} />
                  <h3 className="font-semibold text-primary">{card.title}</h3>
                </div>
                <p className="text-sm text-secondary group-hover:text-zinc-300 transition-colors">
                  {card.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-12"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors group"
          >
            {content.cta}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-8">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
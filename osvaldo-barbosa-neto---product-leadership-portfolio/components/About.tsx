import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';

interface AboutProps {
  content: ContentData['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-white/5 bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#1a1a1a]"
        >
          <img 
            src="https://res.cloudinary.com/dscfrotln/image/upload/v1767992865/profile_mwixwi.jpg" 
            alt="Osvaldo Barbosa Neto" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://ui-avatars.com/api/?name=Osvaldo+Barbosa&background=18181b&color=fff&size=512&font-size=0.33";
            }}
            />
          
          {/* Subtle overlay for better integration with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-4"
          >
            {content.label}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            {content.headline}
          </motion.h2>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
             {content.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {paragraph}
                </motion.p>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 pl-6 border-l-2 border-accent"
          >
            <p className="text-white text-xl font-medium italic">
              {content.quote}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
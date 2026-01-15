import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types.ts';
import { Globe, Mail } from 'lucide-react';
import Logo from './Logo.tsx';

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ lang, setLang }) => {
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity group"
        >
          <Logo className="text-accent w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="text-xl font-bold tracking-tight">
            Osvaldo<span className="text-accent">.</span>
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-secondary">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              {lang === 'pt' ? 'Sobre' : 'About'}
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
              {lang === 'pt' ? 'Cases' : 'Cases'}
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">
              {lang === 'pt' ? 'Trajetória' : 'Timeline'}
            </button>
             <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              {lang === 'pt' ? 'Contato' : 'Contact'}
            </button>
          </div>

          {/* Botão de Contato Mobile */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium border border-white/5"
          >
            <Mail size={14} />
            <span>{lang === 'pt' ? 'Contato' : 'Contact'}</span>
          </button>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium border border-white/5"
          >
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
import React from 'react';
import { ContentData } from '../types';
import { Mail, Linkedin } from 'lucide-react';

interface ContactProps {
  content: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">
          {content.label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {content.title}
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Action Cards */}
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {/* Email Card */}
        <a 
          href={`mailto:${content.email}`} 
          className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Mail size={24} />
          </div>
          <div>
             <span className="text-white font-bold text-lg block mb-1">Email</span>
             <span className="text-zinc-400 group-hover:text-white transition-colors">{content.email}</span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href={content.linkedin} 
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Linkedin size={24} />
          </div>
          <div>
             <span className="text-white font-bold text-lg block mb-1">LinkedIn</span>
             <span className="text-zinc-400 group-hover:text-white transition-colors">{content.linkedinLabel}</span>
          </div>
        </a>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-xs text-zinc-600 font-mono">
        <p>© {new Date().getFullYear()} Osvaldo Barbosa Neto. Built with React & Tailwind.</p>
      </footer>
    </section>
  );
};

export default Contact;
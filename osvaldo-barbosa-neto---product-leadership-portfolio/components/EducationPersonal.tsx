import React from 'react';
import { ContentData } from '../types';
import { Award, GraduationCap } from 'lucide-react';

interface Props {
  education: ContentData['education'];
  // Removed personal prop
}

const Education: React.FC<Props> = ({ education }) => {
  return (
    <section className="py-24 px-6 bg-surface/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">
                Formação
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {education.sectionTitle}
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Coluna 1: Certificações */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-accent">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {education.labels.certifications}
              </h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {education.certifications.map((item, i) => (
                <div 
                    key={i} 
                    className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-accent/20 rounded-xl p-6 transition-all duration-300 flex justify-between items-center"
                >
                  <div>
                    <div className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">
                        {item.institution}
                    </div>
                    <div className="text-secondary text-sm mt-1">
                        {item.degree}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 px-2 py-1 bg-black/20 rounded border border-white/5">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Formação Acadêmica */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-accent">
              <div className="p-2 bg-accent/10 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {education.labels.academic}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {education.academic.map((item, i) => (
                <div 
                    key={i} 
                    className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-accent/20 rounded-xl p-6 transition-all duration-300 flex justify-between items-center"
                >
                  <div>
                    <div className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">
                        {item.institution}
                    </div>
                    <div className="text-secondary text-sm mt-1">
                        {item.degree}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 px-2 py-1 bg-black/20 rounded border border-white/5">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
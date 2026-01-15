import React, { useState } from 'react';
import { Language } from './types.ts';
import { CONTENT } from './constants.tsx';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/EducationPersonal.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const content = CONTENT[lang];

  return (
    <div className="bg-background text-primary selection:bg-accent/30 selection:text-white min-h-screen">
      <Navigation lang={lang} setLang={setLang} />

      <main className="flex flex-col">
        <Hero content={content.hero} />
        
        <About content={content.about} />
        
        <Projects content={content.projects} />
        
        <Experience content={content.experience} />
        
        <Education 
          education={content.education} 
        />

        <Skills content={content.skills} />
        
        <Contact content={content.contact} />
      </main>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/EducationPersonal';
import Contact from './components/Contact';

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
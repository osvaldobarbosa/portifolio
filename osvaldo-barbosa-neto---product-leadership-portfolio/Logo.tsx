import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* O Visionário: O Arco representa o Ciclo/Contexto, o Ponto representa o Foco/Decisão */}
      <path 
        d="M22 6.5C20.3 5.3 18.2 4.5 16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 14.09 27.02 12.3 26.17 10.7" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="26" cy="6" r="3" fill="currentColor" />
    </svg>
  );
};

export default Logo;
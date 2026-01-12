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
      {/* Bloco de Base (Estratégia/Fundação) - Translúcido */}
      <rect x="4" y="4" width="14" height="14" rx="3" fill="currentColor" fillOpacity="0.3" />
      
      {/* Bloco de Frente (Produto/Execução) - Sólido */}
      <rect x="12" y="12" width="16" height="16" rx="4" fill="currentColor" />
    </svg>
  );
};

export default Logo;
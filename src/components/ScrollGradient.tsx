// src/components/ScrollGradient.tsx - Versione migliorata
import { useRef, useEffect } from 'react';

interface ScrollGradientProps {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
  reverse?: boolean;
  intensity?: number;
}

const ScrollGradient = ({ 
  className = '', 
  colorStart = 'rgba(99, 102, 241, 0.2)', // indigo più intenso
  colorEnd = 'rgba(139, 92, 246, 0.3)',   // viola più intenso
  reverse = false,
  intensity = 1
}: ScrollGradientProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!gradientRef.current) return;
      
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollY / (maxScroll * 0.6), 1); // Più veloce
      
      // Cambia i colori e l'opacità in base allo scroll
      const startOpacity = reverse 
        ? 0.1 + scrollPercentage * 0.3 * intensity 
        : 0.4 - scrollPercentage * 0.2 * intensity;
      const endOpacity = reverse 
        ? 0.4 - scrollPercentage * 0.2 * intensity 
        : 0.1 + scrollPercentage * 0.3 * intensity;
      
      // Estrai componenti RGB dai colori
      const startMatches = colorStart.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      const endMatches = colorEnd.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      
      if (startMatches && endMatches) {
        const startR = startMatches[1], startG = startMatches[2], startB = startMatches[3];
        const endR = endMatches[1], endG = endMatches[2], endB = endMatches[3];
        
        const newStartColor = `rgba(${startR}, ${startG}, ${startB}, ${startOpacity})`;
        const newEndColor = `rgba(${endR}, ${endG}, ${endB}, ${endOpacity})`;
        
        gradientRef.current.style.background = `radial-gradient(circle at ${reverse ? 'top right' : 'bottom left'}, 
          ${newStartColor}, 
          ${newEndColor},
          transparent 70%
        )`;
        
        // Anche la rotazione e scala cambiano con lo scroll
        const rotationDegree = reverse ? -10 + scrollPercentage * 20 : 10 - scrollPercentage * 20;
        const scale = 1 + scrollPercentage * 0.1;
        gradientRef.current.style.transform = `rotate(${rotationDegree}deg) scale(${scale})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colorStart, colorEnd, reverse, intensity]);
  
  return (
    <div 
      ref={gradientRef} 
      className={`fixed inset-0 -z-10 transition-all duration-700 ${className}`} 
      style={{ transform: 'rotate(0deg)' }}
    />
  );
};

export default ScrollGradient;
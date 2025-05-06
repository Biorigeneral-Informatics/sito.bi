// src/components/AnimatedBackground.tsx
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="animated-background parallax-background">
      <div className="gradient-bg absolute inset-0" />
      
      {/* Elementi grafici animati */}
      <div className="animated-orb animated-orb-1" />
      <div className="animated-orb animated-orb-2" />
      <div className="animated-orb animated-orb-3" />
    </div>
  );
};

export default AnimatedBackground;
// src/components/AnimatedBackground.tsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-bg absolute inset-0" />
      
      {/* Elementi grafici animati */}
      <motion.div 
        className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, 30, 0],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          opacity: [0.3, 0.15, 0.3]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
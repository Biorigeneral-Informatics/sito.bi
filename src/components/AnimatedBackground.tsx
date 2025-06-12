// src/components/AnimatedBackground.tsx - Static Version
import { useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-bg absolute inset-0" />
      
      {/* Elementi grafici statici */}
      <div className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl opacity-50" />
      
      <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl opacity-40" />
      
      <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl opacity-30" />
    </div>
  );
};

export default AnimatedBackground;
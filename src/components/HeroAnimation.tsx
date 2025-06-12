// src/components/HeroAnimation.tsx - Static Version
import { useRef } from 'react';
import { Code, Bot, Globe } from 'lucide-react';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = '' }: HeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dati dei riquadri con posizioni fisse
  const items = [
    {
      icon: <Code className="w-16 h-16 text-blue-400" />,
      title: "Sviluppo Software",
      description: "Soluzioni personalizzate per le tue esigenze",
      position: { x: 0, y: -180 } // Posizione fissa sopra
    },
    {
      icon: <Bot className="w-16 h-16 text-violet-400" />,
      title: "Intelligenza Artificiale", 
      description: "Agenti, Chatbot e Consulenza",
      position: { x: 156, y: 90 } // Posizione fissa destra-basso
    },
    {
      icon: <Globe className="w-16 h-16 text-cyan-400" />,
      title: "Asset Digitali",
      description: "Infrastrutture scalabili e sicure",
      position: { x: -156, y: 90 } // Posizione fissa sinistra-basso
    }
  ];

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-[500px] flex items-center justify-center ${className}`}
    >
      {/* Sfondi statici */}
      <div className="absolute w-72 h-72 rounded-full bg-indigo-500/30 filter blur-3xl translate-y-10 opacity-50"></div>
      <div className="absolute w-96 h-96 rounded-full bg-violet-500/30 filter blur-3xl translate-y-10 opacity-30"></div>
      
      {items.map((item, index) => (
        <div
          key={index}
          className="z-10 glass rounded-2xl p-6 shadow-xl absolute"
          style={{ 
            width: '230px',
            zIndex: 10 + index,
            transform: `translate(${item.position.x}px, ${item.position.y + 40}px)`
          }}
        >
          <div className="mb-4">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
          <p className="text-white/80">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroAnimation;
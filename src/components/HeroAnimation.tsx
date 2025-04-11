// src/components/HeroAnimation.tsx
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Globe } from 'lucide-react';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = '' }: HeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const animationRef = useRef<number | null>(null);
  
  // Gestione dell'animazione - ora sempre attiva
  useEffect(() => {
    const animate = () => {
      setAngle(prevAngle => (prevAngle + 0.003) % (Math.PI * 2));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  // Dati dei riquadri
  const items = [
    {
      icon: <Code className="w-16 h-16 text-blue-400" />,
      title: "Sviluppo Software",
      description: "Soluzioni personalizzate per le tue esigenze"
    },
    {
      icon: <Bot className="w-16 h-16 text-violet-400" />,
      title: "Intelligenza Artificiale",
      description: "Agenti, Chatbot e Consulenza"
    },
    {
      icon: <Globe className="w-16 h-16 text-cyan-400" />,
      title: "Asset Digitali",
      description: "Infrastrutture scalabili e sicure"
    }
  ];

  // Calcolo delle posizioni in cerchio
  const getCircularPosition = (index: number, angle: number) => {
    // Raggio del cerchio aumentato per maggiore distanza
    const radius = 180;
    
    // Angolo per questo elemento (distribuito equamente + offset dell'animazione)
    const itemAngle = (Math.PI * 2 / items.length) * index + angle;
    
    // Calcolo posizione x e y
    const x = Math.cos(itemAngle) * radius;
    // Aggiungiamo un offset verticale al calcolo di y per spostare tutto il cerchio più in basso
    const verticalOffset = 40; // Offset di 40px verso il basso
    const y = Math.sin(itemAngle) * radius + verticalOffset;
    
    return { x, y };
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-[500px] flex items-center justify-center ${className}`}
    >
      {/* Spostiamo anche gli sfondi sfocati più in basso */}
      <div className="absolute w-72 h-72 rounded-full bg-indigo-500/30 filter blur-3xl animate-pulse translate-y-10"></div>
      <div className="absolute w-96 h-96 rounded-full bg-violet-500/30 filter blur-3xl animate-pulse translate-y-10" style={{ animationDelay: '1s' }}></div>
      
      {items.map((item, index) => {
        // Calcola posizione nel cerchio usando l'angolo animato
        const { x, y } = getCircularPosition(index, angle);

        return (
          <motion.div
            key={index}
            className="z-10 glass rounded-2xl p-6 shadow-xl absolute"
            animate={{ 
              x,
              y,
              transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
              }
            }}
            initial={{
              x: getCircularPosition(index, 0).x,
              y: getCircularPosition(index, 0).y
            }}
            style={{ 
              width: '230px', // Ulteriormente ridotto a 230px
              zIndex: 10 + index
            }}
          >
            <div className="mb-4">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-foreground/70">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroAnimation;
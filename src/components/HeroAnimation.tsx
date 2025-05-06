// src/components/HeroAnimation.tsx
import { Code, Bot, Globe } from 'lucide-react';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = '' }: HeroAnimationProps) => {
  // Dati dei riquadri
  const items = [
    {
      icon: <Code className="hero-card-icon blue" />,
      title: "Sviluppo Software",
      description: "Soluzioni personalizzate per le tue esigenze"
    },
    {
      icon: <Bot className="hero-card-icon violet" />,
      title: "Intelligenza Artificiale",
      description: "Agenti, Chatbot e Consulenza"
    },
    {
      icon: <Globe className="hero-card-icon cyan" />,
      title: "Asset Digitali",
      description: "Infrastrutture scalabili e sicure"
    }
  ];

  return (
    <div className={`hero-animation-container ${className}`}>
      {/* Sfondi sfocati */}
      <div className="hero-bg-blur hero-bg-blur-1"></div>
      <div className="hero-bg-blur hero-bg-blur-2"></div>
      
      {/* Cerchio animato con le card */}
      <div className="hero-animated-circle">
        {items.map((item, index) => (
          <div key={index} className={`hero-card-wrapper hero-card-wrapper-${index + 1}`}>
            <div className={`hero-card hero-card-content-${index + 1}`}>
              <div className="hero-card-icon">
                {item.icon}
              </div>
              <h3 className="hero-card-title">{item.title}</h3>
              <p className="hero-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
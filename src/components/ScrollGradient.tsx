// src/components/ScrollGradient.tsx - Static Version
interface ScrollGradientProps {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
  reverse?: boolean;
  intensity?: number;
}

const ScrollGradient = ({ 
  className = '', 
  colorStart = 'rgba(99, 102, 241, 0.2)',
  colorEnd = 'rgba(139, 92, 246, 0.3)',
  reverse = false
}: ScrollGradientProps) => {
  const gradientStyle = {
    background: `radial-gradient(circle at ${reverse ? 'top right' : 'bottom left'}, 
      ${colorStart}, 
      ${colorEnd},
      transparent 70%
    )`
  };

  return (
    <div 
      className={`fixed inset-0 -z-10 ${className}`}
      style={gradientStyle}
    />
  );
};

export default ScrollGradient;
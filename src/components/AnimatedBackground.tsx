// src/components/AnimatedBackground.tsx - Static Version
import { useTheme } from '../hooks/useTheme';

const AnimatedBackground = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-bg absolute inset-0" />
      
      {/* Elementi grafici che cambiano in base al tema */}
      <div className={`absolute top-20 left-[15%] w-64 h-64 rounded-full blur-3xl opacity-50 ${
        isDark ? 'bg-blue-500/10' : 'bg-blue-500/20'
      }`} />
      
      <div className={`absolute top-[40%] right-[10%] w-96 h-96 rounded-full blur-3xl opacity-40 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'
      }`} />
      
      <div className={`absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-30 ${
        isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
      }`} />
    </div>
  );
};

export default AnimatedBackground;
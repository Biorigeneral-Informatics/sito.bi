// src/components/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { mode, toggleMode, isDark } = useTheme();
  
  return (
    <motion.button
      onClick={toggleMode}
      className="glass px-4 py-2 rounded-xl font-medium text-sm border border-secondary hover:border-accent/30 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icona animata */}
      <div className="relative w-5 h-5 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            y: isDark ? 0 : -20,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-accent" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            y: isDark ? 20 : 0,
            opacity: isDark ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-accent" />
        </motion.div>
      </div>
      
      {/* Testo */}
      <span className="text-primary group-hover:text-accent transition-colors duration-300">
        {isDark ? 'Tema Chiaro' : 'Tema Scuro'}
      </span>
      
      {/* Indicatore stato */}
      <div className="flex space-x-1">
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isDark ? 'bg-accent' : 'bg-muted'}`}></div>
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${!isDark ? 'bg-accent' : 'bg-muted'}`}></div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
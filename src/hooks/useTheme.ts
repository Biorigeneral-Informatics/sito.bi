// src/hooks/useTheme.ts
import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import React from 'react';
import { designTokens } from '../config/design-tokens';


export type ThemeMode = 'dark' | 'light' | 'system';
export type ColorScheme = 'default' | 'blue' | 'purple' | 'cyan';

interface ThemeState {
  mode: ThemeMode;
  colorScheme: ColorScheme;
  accentColor: string;
}

interface ThemeActions {
  setMode: (mode: ThemeMode) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  setCustomAccentColor: (color: string) => void;
  resetToDefault: () => void;
  toggleMode: () => void;
}

interface UseThemeReturn extends ThemeState, ThemeActions {
  isDark: boolean;
  isLight: boolean;
  systemPreference: 'dark' | 'light';
  appliedMode: 'dark' | 'light';
}

// Configurazione schemi di colore alternativi
const colorSchemes = {
  default: {
    accent: '#3ECF8E',
    variants: {
      50: '#f0fdf7',
      100: '#dcfce9',
      200: '#bbf7d2',
      300: '#86efac',
      400: '#4ade80',
      500: '#3ECF8E',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    }
  },
  blue: {
    accent: '#3B82F6',
    variants: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3B82F6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    }
  },
  purple: {
    accent: '#8B5CF6',
    variants: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#8B5CF6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    }
  },
  cyan: {
    accent: '#06B6D4',
    variants: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06B6D4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    }
  }
} as const;

// Storage keys
const THEME_STORAGE_KEY = 'biorigeneral-theme';
const COLOR_SCHEME_STORAGE_KEY = 'biorigeneral-color-scheme';
const CUSTOM_ACCENT_STORAGE_KEY = 'biorigeneral-custom-accent';

// Default theme state (sempre dark mode per questo progetto)
const defaultThemeState: ThemeState = {
  mode: 'dark',
  colorScheme: 'default',
  accentColor: '#3ECF8E',
};

// Utility functions
const getSystemPreference = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const loadStoredTheme = (): ThemeState => {
  if (typeof window === 'undefined') return defaultThemeState;
  
  try {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
    const storedColorScheme = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY) as ColorScheme;
    const storedAccentColor = localStorage.getItem(CUSTOM_ACCENT_STORAGE_KEY);
    
    return {
      mode: storedMode || defaultThemeState.mode,
      colorScheme: storedColorScheme || defaultThemeState.colorScheme,
      accentColor: storedAccentColor || defaultThemeState.accentColor,
    };
  } catch (error) {
    console.warn('Error loading stored theme:', error);
    return defaultThemeState;
  }
};

const saveThemeToStorage = (theme: ThemeState) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme.mode);
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, theme.colorScheme);
    localStorage.setItem(CUSTOM_ACCENT_STORAGE_KEY, theme.accentColor);
  } catch (error) {
    console.warn('Error saving theme to storage:', error);
  }
};

// CSS variable updater
const updateCSSVariables = (theme: ThemeState, appliedMode: 'dark' | 'light') => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  const selectedScheme = colorSchemes[theme.colorScheme];
  
  // Update accent color variables
  if (selectedScheme) {
    root.style.setProperty('--text-accent', selectedScheme.accent);
    root.style.setProperty('--border-accent', selectedScheme.accent);
    
    // Update accent color variants
    Object.entries(selectedScheme.variants).forEach(([key, value]) => {
      root.style.setProperty(`--accent-${key}`, value);
    });
  } else if (theme.accentColor !== '#3ECF8E') {
    // Custom accent color
    root.style.setProperty('--text-accent', theme.accentColor);
    root.style.setProperty('--border-accent', theme.accentColor);
  }
  
  // Update theme mode class
  root.classList.remove('light', 'dark');
  root.classList.add(appliedMode);
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', appliedMode === 'dark' ? '#121212' : '#ffffff');
  }
  
  // Set body background for full coverage
  document.body.style.backgroundColor = appliedMode === 'dark' ? '#121212' : '#ffffff';
};

export const useTheme = (): UseThemeReturn => {
  const [systemPreference, setSystemPreference] = useState<'dark' | 'light'>(() => getSystemPreference());
  const [themeState, setThemeState] = useState<ThemeState>(() => loadStoredTheme());
  
  // Calculate applied mode based on theme mode and system preference
  const appliedMode: 'dark' | 'light' = themeState.mode === 'system' ? systemPreference : themeState.mode;
  const isDark = appliedMode === 'dark';
  const isLight = appliedMode === 'light';
  
  // Listen to system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Legacy browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  // Update CSS variables when theme changes
  useEffect(() => {
    updateCSSVariables(themeState, appliedMode);
  }, [themeState, appliedMode]);
  
  // Save theme to storage when it changes
  useEffect(() => {
    saveThemeToStorage(themeState);
  }, [themeState]);
  
  // Theme actions
  const setMode = useCallback((mode: ThemeMode) => {
    setThemeState(prev => ({ ...prev, mode }));
  }, []);
  
  const setColorScheme = useCallback((colorScheme: ColorScheme) => {
    setThemeState(prev => ({ 
      ...prev, 
      colorScheme,
      // Reset to scheme's default accent color when changing schemes
      accentColor: colorSchemes[colorScheme]?.accent || '#3ECF8E'
    }));
  }, []);
  
  const setCustomAccentColor = useCallback((accentColor: string) => {
    setThemeState(prev => ({ 
      ...prev, 
      accentColor,
      // Set colorScheme to default when using custom color
      colorScheme: 'default'
    }));
  }, []);
  
  const resetToDefault = useCallback(() => {
    setThemeState(defaultThemeState);
  }, []);
  
  const toggleMode = useCallback(() => {
    setThemeState(prev => ({
      ...prev,
      mode: prev.mode === 'dark' ? 'light' : prev.mode === 'light' ? 'system' : 'dark'
    }));
  }, []);
  
  return {
    // State
    mode: themeState.mode,
    colorScheme: themeState.colorScheme,
    accentColor: themeState.accentColor,
    isDark,
    isLight,
    systemPreference,
    appliedMode,
    
    // Actions
    setMode,
    setColorScheme,
    setCustomAccentColor,
    resetToDefault,
    toggleMode,
  };
};

// Hook per accedere ai design tokens in modo type-safe
export const useDesignTokens = () => {
  return designTokens;
};

// Hook per generare colori dinamici basati sull'accent corrente
export const useAccentColors = () => {
  const { colorScheme, accentColor } = useTheme();
  
  const generateAccentVariants = useCallback((baseColor: string) => {
    // Funzione semplificata per generare varianti di un colore
    // In un progetto reale potresti usare una libreria come chroma-js o color2k
    const adjustBrightness = (color: string, factor: number) => {
      // Estrai i valori RGB dal colore hex
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      // Applica il fattore di luminosità
      const newR = Math.round(Math.min(255, Math.max(0, r * factor)));
      const newG = Math.round(Math.min(255, Math.max(0, g * factor)));
      const newB = Math.round(Math.min(255, Math.max(0, b * factor)));
      
      // Converti di nuovo in hex
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    };
    
    return {
      50: adjustBrightness(baseColor, 1.8),
      100: adjustBrightness(baseColor, 1.6),
      200: adjustBrightness(baseColor, 1.4),
      300: adjustBrightness(baseColor, 1.2),
      400: adjustBrightness(baseColor, 1.1),
      500: baseColor,
      600: adjustBrightness(baseColor, 0.9),
      700: adjustBrightness(baseColor, 0.8),
      800: adjustBrightness(baseColor, 0.7),
      900: adjustBrightness(baseColor, 0.6),
    };
  }, []);
  
  const currentScheme = colorSchemes[colorScheme];
  
  return {
    accent: accentColor,
    variants: currentScheme?.variants || generateAccentVariants(accentColor),
    scheme: currentScheme,
    availableSchemes: Object.keys(colorSchemes) as ColorScheme[],
  };
};

// Context provider component per il tema
interface ThemeContextValue extends UseThemeReturn {
  colorSchemes: typeof colorSchemes;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  
  const contextValue: ThemeContextValue = {
    ...theme,
    colorSchemes,
  };
  
  return React.createElement(
    ThemeContext.Provider,
    { value: contextValue },
    children
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Utility per generare classi CSS dinamiche basate sul tema
export const createThemeClasses = (theme: UseThemeReturn) => {
  const base = {
    bg: {
      primary: 'bg-background-primary',
      secondary: 'bg-background-secondary',
      tertiary: 'bg-background-tertiary',
    },
    text: {
      primary: 'text-foreground-primary',
      secondary: 'text-foreground-secondary',
      muted: 'text-foreground-muted',
      accent: 'text-foreground-accent',
    },
    border: {
      primary: 'border-border-primary',
      secondary: 'border-border-secondary',
      accent: 'border-border-accent',
    },
    glass: {
      primary: 'glass-primary',
      secondary: 'glass-secondary',
      accent: 'glass-accent',
    },
  };
  
  return base;
};

// Hook per gestire le preferenze di accessibilità
export const useAccessibilityPreferences = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }
    
    // Check for high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    setPrefersHighContrast(contrastQuery.matches);
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setPrefersHighContrast(e.matches);
    };
    
    if (contrastQuery.addEventListener) {
      contrastQuery.addEventListener('change', handleContrastChange);
    } else {
      contrastQuery.addListener(handleContrastChange);
    }
    
    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
      
      if (contrastQuery.removeEventListener) {
        contrastQuery.removeEventListener('change', handleContrastChange);
      } else {
        contrastQuery.removeListener(handleContrastChange);
      }
    };
  }, []);
  
  return {
    prefersReducedMotion,
    prefersHighContrast,
  };
};

// Hook per gestire il tema system con fallback
export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(() => getSystemPreference());
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setSystemTheme(getSystemPreference());
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  return systemTheme;
};

// Export dei color schemes per uso esterno
export { colorSchemes };
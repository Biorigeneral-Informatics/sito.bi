// src/config/design-tokens.ts
export const designTokens = {
  // === COLORI PRINCIPALI ===
  colors: {
    // Background colors
    background: {
      primary: '#121212',    // Sfondo principale
      secondary: '#171717',  // Riquadri glassmorphism
      tertiary: '#1a1a1a',  // Superfici elevate
      overlay: 'rgba(23, 23, 23, 0.8)', // Overlay trasparenti
    },
    
    // Text colors
    text: {
      primary: '#ffffff',     // Testo principale bianco
      secondary: '#e5e5e5',   // Testo secondario
      muted: '#a3a3a3',       // Testo disattivato
      accent: '#3ECF8E',      // Testo colorato/accent
      inverse: '#121212',     // Testo su sfondi chiari
    },
    
    // Accent colors (basati su #3ECF8E)
    accent: {
      50: '#f0fdf7',
      100: '#dcfce9',
      200: '#bbf7d2',
      300: '#86efac',
      400: '#4ade80',
      500: '#3ECF8E',  // Colore principale
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    
    // Status colors
    status: {
      success: '#3ECF8E',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    
    // Border colors
    border: {
      primary: 'rgba(62, 207, 142, 0.2)',    // Bordi principali
      secondary: 'rgba(255, 255, 255, 0.1)',  // Bordi sottili
      muted: 'rgba(255, 255, 255, 0.05)',     // Bordi molto sottili
      accent: '#3ECF8E',                       // Bordi evidenziati
    },
    
    // Glassmorphism variations
    glass: {
      primary: 'rgba(23, 23, 23, 0.7)',      // Glass principale
      secondary: 'rgba(23, 23, 23, 0.5)',     // Glass più trasparente
      accent: 'rgba(62, 207, 142, 0.1)',      // Glass con tinta accent
      hover: 'rgba(23, 23, 23, 0.8)',         // Glass su hover
    }
  },

  // === TIPOGRAFIA ===
  typography: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      mono: ['Courier New', 'Consolas', 'monospace'],
    },
    
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },

  // === SPACING ===
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  // === BORDER RADIUS ===
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },

  // === SHADOWS ===
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    
    // Shadows specifici per glassmorphism
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    glassHover: '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
    accent: '0 10px 30px rgba(62, 207, 142, 0.3)',
  },

  // === ANIMAZIONI ===
  animation: {
    duration: {
      fastest: '0.1s',
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      slowest: '0.7s',
    },
    
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },

  // === BREAKPOINTS ===
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // === Z-INDEX ===
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }
} as const;

// === UTILITY TYPES ===
export type ColorToken = keyof typeof designTokens.colors;
export type SpacingToken = keyof typeof designTokens.spacing;
export type TypographyToken = keyof typeof designTokens.typography;

// === HELPER FUNCTIONS ===
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = designTokens.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
};

export const getSpacing = (token: SpacingToken) => {
  return designTokens.spacing[token];
};

export const getFontSize = (size: keyof typeof designTokens.typography.fontSize) => {
  return designTokens.typography.fontSize[size];
};
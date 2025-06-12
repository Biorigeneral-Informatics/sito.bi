/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // === COLORS === 
      colors: {
        // Background colors using CSS variables
        background: {
          DEFAULT: "var(--bg-primary)",
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          overlay: "var(--bg-overlay)",
        },
        
        // Text colors
        foreground: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          inverse: "var(--text-inverse)",
        },
        
        // Primary color (accent green)
        primary: {
          DEFAULT: "var(--text-accent)",
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          foreground: "var(--text-inverse)",
        },
        
        // Secondary colors (glassmorphism)
        secondary: {
          DEFAULT: "var(--glass-primary)",
          primary: "var(--glass-primary)",
          secondary: "var(--glass-secondary)",
          accent: "var(--glass-accent)",
          hover: "var(--glass-hover)",
          foreground: "var(--text-primary)",
        },
        
        // Status colors
        success: "var(--status-success)",
        warning: "var(--status-warning)",
        error: "var(--status-error)",
        info: "var(--status-info)",
        
        // Border colors
        border: {
          DEFAULT: "var(--border-secondary)",
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          muted: "var(--border-muted)",
          accent: "var(--border-accent)",
        },
        
        // Glass colors
        glass: {
          DEFAULT: "var(--glass-primary)",
          primary: "var(--glass-primary)",
          secondary: "var(--glass-secondary)",
          accent: "var(--glass-accent)",
          hover: "var(--glass-hover)",
        },
        
        // Legacy compatibility (mantenere per compatibilità con il codice esistente)
        input: "var(--border-secondary)",
        ring: "var(--border-accent)",
        
        muted: {
          DEFAULT: "var(--glass-secondary)",
          foreground: "var(--text-muted)",
        },
        
        accent: {
          DEFAULT: "var(--text-accent)",
          foreground: "var(--text-inverse)",
        },
        
        destructive: {
          DEFAULT: "var(--status-error)",
          foreground: "var(--text-primary)",
        },
        
        popover: {
          DEFAULT: "var(--glass-primary)",
          foreground: "var(--text-primary)",
        },
        
        card: {
          DEFAULT: "var(--glass-primary)",
          foreground: "var(--text-primary)",
        },
      },
      
      // === TYPOGRAPHY ===
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Courier New', 'Consolas', 'monospace'],
      },
      
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: 'var(--leading-normal)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--leading-normal)' }],
        base: ['var(--text-base)', { lineHeight: 'var(--leading-normal)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--leading-normal)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--leading-normal)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-tight)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-tight)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-none)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--leading-none)' }],
        '7xl': ['var(--text-7xl)', { lineHeight: 'var(--leading-none)' }],
      },
      
      fontWeight: {
        thin: 'var(--font-thin)',
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
        extrabold: 'var(--font-extrabold)',
        black: 'var(--font-black)',
      },
      
      lineHeight: {
        none: 'var(--leading-none)',
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      
      // === SPACING ===
      spacing: {
        0: 'var(--space-0)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
        32: 'var(--space-32)',
      },
      
      // === BORDER RADIUS ===
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      
      // === BOX SHADOW ===
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        glass: 'var(--shadow-glass)',
        'glass-hover': 'var(--shadow-glass-hover)',
        accent: 'var(--shadow-accent)',
        none: 'none',
      },
      
      // === ANIMATIONS ===
      transitionDuration: {
        fastest: 'var(--duration-fastest)',
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        slowest: 'var(--duration-slowest)',
      },
      
      transitionTimingFunction: {
        linear: 'var(--ease-linear)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        bouncy: 'var(--ease-bouncy)',
      },
      
      // === Z-INDEX ===
      zIndex: {
        hide: 'var(--z-hide)',
        auto: 'var(--z-auto)',
        base: 'var(--z-base)',
        docked: 'var(--z-docked)',
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        banner: 'var(--z-banner)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        'skip-link': 'var(--z-skip-link)',
        toast: 'var(--z-toast)',
        tooltip: 'var(--z-tooltip)',
      },
      
      // === CUSTOM ANIMATIONS ===
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px var(--text-accent)' },
          '50%': { boxShadow: '0 0 20px var(--text-accent), 0 0 30px var(--text-accent)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'wave': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-light': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'zoom-out': {
          '0%': { opacity: '0', transform: 'scale(1.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'flip': {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'heartbeat': {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      
      animation: {
        'fade-in': 'fade-in var(--duration-normal) var(--ease-out)',
        'slide-up': 'slide-up var(--duration-normal) var(--ease-out)',
        'slide-down': 'slide-down var(--duration-normal) var(--ease-out)',
        'slide-left': 'slide-left var(--duration-normal) var(--ease-out)',
        'slide-right': 'slide-right var(--duration-normal) var(--ease-out)',
        'scale-in': 'scale-in var(--duration-normal) var(--ease-out)',
        'bounce-in': 'bounce-in var(--duration-slow) var(--ease-bouncy)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'bounce-light': 'bounce-light 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up var(--duration-normal) var(--ease-out)',
        'fade-in-down': 'fade-in-down var(--duration-normal) var(--ease-out)',
        'fade-in-left': 'fade-in-left var(--duration-normal) var(--ease-out)',
        'fade-in-right': 'fade-in-right var(--duration-normal) var(--ease-out)',
        'zoom-in': 'zoom-in var(--duration-normal) var(--ease-out)',
        'zoom-out': 'zoom-out var(--duration-normal) var(--ease-out)',
        'flip': 'flip var(--duration-slow) var(--ease-in-out)',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      
      // === BACKDROP BLUR ===
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // === BACKDROP BRIGHTNESS ===
      backdropBrightness: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      
      // === BACKDROP CONTRAST ===
      backdropContrast: {
        0: '0',
        50: '.5',
        75: '.75',
        100: '1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      
      // === BACKDROP SATURATE ===
      backdropSaturate: {
        0: '0',
        50: '.5',
        100: '1',
        150: '1.5',
        200: '2',
      },
    },
  },
  plugins: [
    // Plugin personalizzato per componenti glassmorphism
    function({ addComponents, theme }) {
      addComponents({
        // === GLASS COMPONENTS ===
        '.glass': {
          background: 'var(--glass-primary)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-secondary)',
          boxShadow: 'var(--shadow-glass)',
        },
        '.glass-secondary': {
          background: 'var(--glass-secondary)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-muted)',
          boxShadow: 'var(--shadow-base)',
        },
        '.glass-accent': {
          background: 'var(--glass-accent)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-primary)',
          boxShadow: 'var(--shadow-accent)',
        },
        '.glass-hover': {
          transition: 'all var(--duration-normal) var(--ease-out)',
          '&:hover': {
            background: 'var(--glass-hover)',
            boxShadow: 'var(--shadow-glass-hover)',
            transform: 'translateY(-2px)',
          },
        },
        
        // === TEXT GRADIENTS ===
        '.text-gradient': {
          background: 'linear-gradient(135deg, var(--text-accent), var(--accent-400))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.text-gradient-full': {
          background: 'linear-gradient(135deg, var(--text-accent), var(--accent-400), var(--accent-600))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.text-gradient-rainbow': {
          background: 'linear-gradient(135deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        
        // === BUTTONS ===
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-lg)',
          fontWeight: 'var(--font-semibold)',
          transition: 'all var(--duration-normal) var(--ease-out)',
          cursor: 'pointer',
          border: 'none',
          textDecoration: 'none',
          '&:focus': {
            outline: '2px solid var(--border-accent)',
            outlineOffset: '2px',
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
        },
        '.btn-primary': {
          background: 'var(--text-accent)',
          color: 'var(--text-inverse)',
          padding: 'var(--space-3) var(--space-6)',
          '&:hover': {
            background: 'var(--accent-600)',
            boxShadow: 'var(--shadow-accent)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        '.btn-secondary': {
          background: 'transparent',
          color: 'var(--text-accent)',
          border: '1px solid var(--border-primary)',
          padding: 'var(--space-3) var(--space-6)',
          '&:hover': {
            background: 'var(--glass-accent)',
            borderColor: 'var(--border-accent)',
          },
        },
        '.btn-glass': {
          background: 'var(--glass-primary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-secondary)',
          padding: 'var(--space-3) var(--space-6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          '&:hover': {
            background: 'var(--glass-hover)',
            borderColor: 'var(--border-primary)',
            boxShadow: 'var(--shadow-lg)',
          },
        },
        '.btn-gradient': {
          background: 'linear-gradient(135deg, var(--text-accent), var(--accent-600))',
          color: 'var(--text-inverse)',
          padding: 'var(--space-3) var(--space-6)',
          border: 'none',
          '&:hover': {
            background: 'linear-gradient(135deg, var(--accent-600), var(--accent-700))',
            boxShadow: 'var(--shadow-accent)',
            transform: 'translateY(-2px)',
          },
        },
        
        // === CARDS ===
        '.card': {
          background: 'var(--glass-primary)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-6)',
          boxShadow: 'var(--shadow-glass)',
        },
        '.card-hover': {
          transition: 'all var(--duration-normal) var(--ease-out)',
          '&:hover': {
            background: 'var(--glass-hover)',
            boxShadow: 'var(--shadow-glass-hover)',
            transform: 'translateY(-4px)',
            borderColor: 'var(--border-primary)',
          },
        },
        '.card-interactive': {
          cursor: 'pointer',
          transition: 'all var(--duration-normal) var(--ease-out)',
          '&:hover': {
            background: 'var(--glass-hover)',
            boxShadow: 'var(--shadow-glass-hover)',
            transform: 'translateY(-4px) scale(1.02)',
            borderColor: 'var(--border-primary)',
          },
          '&:active': {
            transform: 'translateY(-2px) scale(1.01)',
          },
        },
        
        // === INTERACTIVE ELEMENTS ===
        '.interactive': {
          transition: 'all var(--duration-normal) var(--ease-out)',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        '.interactive-scale': {
          transition: 'all var(--duration-fast) var(--ease-out)',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        
        // === GRADIENT BACKGROUNDS ===
        '.gradient-bg': {
          background: 'radial-gradient(circle at 50% 50%, rgba(62, 207, 142, 0.15), rgba(62, 207, 142, 0.05) 30%, transparent 60%)',
        },
        '.gradient-bg-secondary': {
          background: 'radial-gradient(circle at 30% 70%, rgba(62, 207, 142, 0.1), transparent 50%)',
        },
        '.gradient-border': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '1px',
            background: 'linear-gradient(135deg, var(--text-accent), var(--accent-400))',
            borderRadius: 'inherit',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          },
        },
        '.gradient-border-animated': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '2px',
            background: 'linear-gradient(45deg, var(--text-accent), var(--accent-400), var(--accent-600), var(--text-accent))',
            backgroundSize: '300% 300%',
            borderRadius: 'inherit',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            animation: 'gradient-shift 3s ease infinite',
          },
        },
        
        // === LOADING STATES ===
        '.skeleton': {
          background: 'linear-gradient(90deg, var(--glass-secondary) 25%, var(--glass-primary) 50%, var(--glass-secondary) 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite',
          borderRadius: 'var(--radius-base)',
        },
        '.loading-dots': {
          '&::after': {
            content: '""',
            animation: 'loading-dots 1.5s infinite',
          },
        },
        
        // === FORM ELEMENTS ===
        '.input': {
          background: 'var(--glass-secondary)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-3) var(--space-4)',
          color: 'var(--text-primary)',
          fontSize: 'var(--text-base)',
          transition: 'all var(--duration-normal) var(--ease-out)',
          '&::placeholder': {
            color: 'var(--text-muted)',
          },
          '&:focus': {
            outline: 'none',
            background: 'var(--glass-primary)',
            borderColor: 'var(--border-accent)',
            boxShadow: '0 0 0 3px rgba(62, 207, 142, 0.1)',
          },
          '&:hover': {
            borderColor: 'var(--border-primary)',
          },
        },
        '.textarea': {
          resize: 'vertical',
          minHeight: '100px',
        },
        
        // === NAVIGATION ===
        '.nav-link': {
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          padding: 'var(--space-2) var(--space-4)',
          borderRadius: 'var(--radius-base)',
          transition: 'all var(--duration-fast) var(--ease-out)',
          '&:hover': {
            color: 'var(--text-accent)',
            background: 'var(--glass-accent)',
          },
          '&.active': {
            color: 'var(--text-accent)',
            background: 'var(--glass-accent)',
            fontWeight: 'var(--font-medium)',
          },
        },
        
        // === BADGES ===
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: 'var(--space-1) var(--space-3)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-medium)',
          background: 'var(--glass-accent)',
          color: 'var(--text-accent)',
          border: '1px solid var(--border-primary)',
        },
        '.badge-primary': {
          background: 'var(--text-accent)',
          color: 'var(--text-inverse)',
          border: 'none',
        },
        '.badge-secondary': {
          background: 'var(--glass-secondary)',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-secondary)',
        },
      });
    },
    
    // Plugin per utilities avanzate
    function({ addUtilities, theme }) {
      addUtilities({
        // === BACKDROP FILTERS ===
        '.backdrop-blur-glass': {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        },
        '.backdrop-blur-strong': {
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        },
        '.backdrop-blur-subtle': {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        },
        
        // === SCROLLBAR STYLING ===
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--text-accent) var(--bg-secondary)',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-full)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--text-accent)',
            borderRadius: 'var(--radius-full)',
            '&:hover': {
              background: 'var(--accent-600)',
            },
          },
          '&::-webkit-scrollbar-corner': {
            background: 'var(--bg-secondary)',
          },
        },
        '.scrollbar-none': {
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-auto': {
          scrollbarWidth: 'auto',
          scrollbarColor: 'auto',
        },
        
        // === SELECTION STYLING ===
        '.selection-accent': {
          '&::selection': {
            background: 'var(--text-accent)',
            color: 'var(--text-inverse)',
          },
          '&::-moz-selection': {
            background: 'var(--text-accent)',
            color: 'var(--text-inverse)',
          },
        },
        '.selection-primary': {
          '&::selection': {
            background: 'var(--accent-500)',
            color: 'var(--text-inverse)',
          },
          '&::-moz-selection': {
            background: 'var(--accent-500)',
            color: 'var(--text-inverse)',
          },
        },
        
        // === TEXT UTILITIES ===
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
        '.text-shadow': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-accent': {
          textShadow: '0 0 10px var(--text-accent)',
        },
        
        // === LAYOUT UTILITIES ===
        '.grid-auto-fit': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        },
        '.grid-auto-fill': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        },
        '.grid-auto-fit-sm': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        },
        '.grid-auto-fit-lg': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        },
        
        // === SPACING UTILITIES ===
        '.space-y-fluid > * + *': {
          marginTop: 'clamp(1rem, 5vw, 2rem)',
        },
        '.space-x-fluid > * + *': {
          marginLeft: 'clamp(1rem, 5vw, 2rem)',
        },
        '.gap-fluid': {
          gap: 'clamp(1rem, 5vw, 2rem)',
        },
        
        // === ENHANCED SHADOWS ===
        '.shadow-glow': {
          boxShadow: '0 0 20px rgba(62, 207, 142, 0.3), 0 0 40px rgba(62, 207, 142, 0.1)',
        },
        '.shadow-glow-strong': {
          boxShadow: '0 0 30px rgba(62, 207, 142, 0.4), 0 0 60px rgba(62, 207, 142, 0.2), 0 0 100px rgba(62, 207, 142, 0.1)',
        },
        '.shadow-glow-subtle': {
          boxShadow: '0 0 10px rgba(62, 207, 142, 0.2)',
        },
        '.shadow-inner-glow': {
          boxShadow: 'inset 0 0 20px rgba(62, 207, 142, 0.1)',
        },
        
        // === RESPONSIVE TEXT ===
        '.text-responsive-xs': {
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
        },
        '.text-responsive-sm': {
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
        },
        '.text-responsive-base': {
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
        },
        '.text-responsive-lg': {
          fontSize: 'clamp(1.125rem, 3.5vw, 1.25rem)',
        },
        '.text-responsive-xl': {
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
        },
        '.text-responsive-2xl': {
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        },
        '.text-responsive-3xl': {
          fontSize: 'clamp(1.875rem, 6vw, 2.5rem)',
        },
        '.text-responsive-4xl': {
          fontSize: 'clamp(2.25rem, 7vw, 3rem)',
        },
        '.text-responsive-5xl': {
          fontSize: 'clamp(3rem, 8vw, 4rem)',
        },
        
        // === POSITION UTILITIES ===
        '.center-absolute': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.center-x': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.center-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        
        // === ASPECT RATIO UTILITIES ===
        '.aspect-golden': {
          aspectRatio: '1.618 / 1',
        },
        '.aspect-card': {
          aspectRatio: '3 / 4',
        },
        '.aspect-photo': {
          aspectRatio: '4 / 3',
        },
        
        // === OVERFLOW UTILITIES ===
        '.overflow-fade': {
          maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
        },
        '.overflow-fade-x': {
          maskImage: 'linear-gradient(to right, black 0%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 85%, transparent 100%)',
        },
        
        // === BORDER UTILITIES ===
        '.border-gradient': {
          border: '1px solid transparent',
          backgroundClip: 'padding-box',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '1px',
            background: 'linear-gradient(135deg, var(--text-accent), var(--accent-400))',
            borderRadius: 'inherit',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          },
        },
        
        // === FILTER UTILITIES ===
        '.filter-glow': {
          filter: 'drop-shadow(0 0 10px var(--text-accent))',
        },
        '.filter-glow-strong': {
          filter: 'drop-shadow(0 0 20px var(--text-accent)) drop-shadow(0 0 40px var(--text-accent))',
        },
        
        // === TRANSFORM UTILITIES ===
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
        '.transform-perspective': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        
        // === VISIBILITY UTILITIES ===
        '.visible-on-hover': {
          opacity: '0',
          transition: 'opacity var(--duration-normal) var(--ease-out)',
        },
        '.group:hover .visible-on-hover': {
          opacity: '1',
        },
        '.hidden-on-hover': {
          opacity: '1',
          transition: 'opacity var(--duration-normal) var(--ease-out)',
        },
        '.group:hover .hidden-on-hover': {
          opacity: '0',
        },
        
        // === ANIMATION DELAYS ===
        '.delay-100': { animationDelay: '100ms' },
        '.delay-200': { animationDelay: '200ms' },
        '.delay-300': { animationDelay: '300ms' },
        '.delay-500': { animationDelay: '500ms' },
        '.delay-700': { animationDelay: '700ms' },
        '.delay-1000': { animationDelay: '1000ms' },
        
        // === CURSOR UTILITIES ===
        '.cursor-grab': {
          cursor: 'grab',
        },
        '.cursor-grabbing': {
          cursor: 'grabbing',
        },
        '.cursor-zoom-in': {
          cursor: 'zoom-in',
        },
        '.cursor-zoom-out': {
          cursor: 'zoom-out',
        },
        
        // === BLEND MODE UTILITIES ===
        '.mix-blend-luminosity': {
          mixBlendMode: 'luminosity',
        },
        '.mix-blend-color-dodge': {
          mixBlendMode: 'color-dodge',
        },
        
        // === PRINT UTILITIES ===
        '.print-only': {
          display: 'none',
          '@media print': {
            display: 'block',
          },
        },
        '.print-hidden': {
          '@media print': {
            display: 'none',
          },
        },
        
        // === FOCUS UTILITIES ===
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid var(--border-accent)',
            outlineOffset: '2px',
          },
        },
        '.focus-ring-inset': {
          '&:focus-visible': {
            outline: '2px solid var(--border-accent)',
            outlineOffset: '-2px',
          },
        },
        
        // === CONTAINER QUERIES ===
        '.container-sm': {
          containerType: 'inline-size',
        },
        '.container-lg': {
          containerType: 'inline-size',
        },
      });
    },
    
    // Plugin per keyframes aggiuntive
    function({ addUtilities }) {
      addUtilities({
        // === KEYFRAMES AGGIUNTIVE ===
        '@keyframes gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        '@keyframes loading-dots': {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        '@keyframes typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        '@keyframes blink': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'var(--text-accent)' },
        },
        '@keyframes float-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px)', opacity: '0' },
        },
        '@keyframes swing': {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        '@keyframes wobble': {
          '0%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-25%) rotate(-5deg)' },
          '30%': { transform: 'translateX(20%) rotate(3deg)' },
          '45%': { transform: 'translateX(-15%) rotate(-3deg)' },
          '60%': { transform: 'translateX(10%) rotate(2deg)' },
          '75%': { transform: 'translateX(-5%) rotate(-1deg)' },
          '100%': { transform: 'translateX(0%)' },
        },
        '@keyframes jello': {
          '0%, 100%': { transform: 'skewX(0deg) skewY(0deg)' },
          '30%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
          '40%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
          '50%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
          '65%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
          '75%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
        },
        '@keyframes rubber-band': {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scaleX(1.25) scaleY(0.75)' },
          '40%': { transform: 'scaleX(0.75) scaleY(1.25)' },
          '60%': { transform: 'scaleX(1.15) scaleY(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        '@keyframes shake-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        '@keyframes shake-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(10px)' },
        },
        '@keyframes flash': {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        '@keyframes head-shake': {
          '0%': { transform: 'translateX(0)' },
          '6.5%': { transform: 'translateX(-6px) rotateY(-9deg)' },
          '18.5%': { transform: 'translateX(5px) rotateY(7deg)' },
          '31.5%': { transform: 'translateX(-3px) rotateY(-5deg)' },
          '43.5%': { transform: 'translateX(2px) rotateY(3deg)' },
          '50%': { transform: 'translateX(0)' },
        },
        '@keyframes tada': {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
        '@keyframes roll-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100%) rotate(-120deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg)',
          },
        },
        '@keyframes roll-out': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(100%) rotate(120deg)',
          },
        },
      });
    },
    
    // Plugin per animazioni avanzate
    function({ addUtilities }) {
      addUtilities({
        // === ANIMATION UTILITIES ===
        '.animate-gradient-shift': {
          animation: 'gradient-shift 3s ease infinite',
        },
        '.animate-typewriter': {
          animation: 'typewriter 3s steps(40, end), blink 0.75s step-end infinite',
          overflow: 'hidden',
          borderRight: '2px solid var(--text-accent)',
          whiteSpace: 'nowrap',
        },
        '.animate-float-up': {
          animation: 'float-up 3s ease-out forwards',
        },
        '.animate-swing': {
          animation: 'swing 1s ease-in-out',
        },
        '.animate-wobble': {
          animation: 'wobble 1s ease-in-out',
        },
        '.animate-jello': {
          animation: 'jello 1s ease-in-out',
        },
        '.animate-rubber-band': {
          animation: 'rubber-band 1s ease-in-out',
        },
        '.animate-shake-x': {
          animation: 'shake-x 1s ease-in-out',
        },
        '.animate-shake-y': {
          animation: 'shake-y 1s ease-in-out',
        },
        '.animate-flash': {
          animation: 'flash 2s ease-in-out infinite',
        },
        '.animate-head-shake': {
          animation: 'head-shake 1s ease-in-out',
        },
        '.animate-tada': {
          animation: 'tada 1s ease-in-out',
        },
        '.animate-roll-in': {
          animation: 'roll-in 1s ease-out',
        },
        '.animate-roll-out': {
          animation: 'roll-out 1s ease-in',
        },
        
        // === ANIMATION CONTROLS ===
        '.animate-paused': {
          animationPlayState: 'paused',
        },
        '.animate-running': {
          animationPlayState: 'running',
        },
        '.animate-infinite': {
          animationIterationCount: 'infinite',
        },
        '.animate-once': {
          animationIterationCount: '1',
        },
        '.animate-twice': {
          animationIterationCount: '2',
        },
        
        // === HOVER ANIMATIONS ===
        '.hover\\:animate-bounce:hover': {
          animation: 'bounce 1s ease-in-out',
        },
        '.hover\\:animate-pulse:hover': {
          animation: 'pulse 2s ease-in-out infinite',
        },
        '.hover\\:animate-spin:hover': {
          animation: 'spin 1s linear infinite',
        },
        '.hover\\:animate-ping:hover': {
          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        },
      });
    },
  ],
};
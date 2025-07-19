import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      fontFamily: {
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'system-ui',
          'sans-serif'
        ],
        'display': [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ],
        'text': [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.5' }],
        'lg': ['18px', { lineHeight: '1.5' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['60px', { lineHeight: '1.1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        // Logo-inspired color palette (Bleu 60%, Rouge 30%, Vert 10%)
        background: '#FAFCFF', // Très léger teinté bleu
        foreground: '#1A1F2E', // Bleu très foncé
        
        // Bleu (60% - Couleur dominante)
        primary: {
          DEFAULT: '#2563EB', // Bleu principal
          light: '#3B82F6',
          dark: '#1D4ED8',
          hover: '#1E40AF',
        },
        
        // Rouge (30% - Couleur secondaire) 
        secondary: {
          DEFAULT: '#DC2626', // Rouge principal
          light: '#EF4444',
          dark: '#B91C1C',
          hover: '#991B1B',
        },
        
        // Vert (10% - Couleur d'accent)
        accent: {
          DEFAULT: '#16A34A', // Vert principal
          light: '#22C55E',
          dark: '#15803D',
          hover: '#166534',
        },
        
        // Couleurs fonctionnelles basées sur la charte
        'text-subtle': '#64748B', // Bleu grisé
        border: '#E1E7F5', // Bleu très clair
        'border-hover': '#CBD5E8', // Bleu clair
        'hover-bg': '#F1F5F9', // Bleu très très clair
        'glass-bg': 'rgba(248, 250, 252, 0.9)', // Fond glassmorphism
        'glass-border': 'rgba(59, 130, 246, 0.2)', // Bordure glassmorphism
        
        // États spéciaux
        success: '#16A34A', // Vert
        warning: '#F59E0B', // Orange
        error: '#DC2626', // Rouge
        info: '#2563EB', // Bleu
        
        // Legacy shadcn colors for compatibility - adapted to new palette
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F2E',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F2E',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        ring: '#2563EB',
        chart: {
          '1': '#2563EB', // Bleu
          '2': '#DC2626', // Rouge
          '3': '#16A34A', // Vert
          '4': '#F59E0B', // Orange
          '5': '#8B5CF6', // Violet
        },
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(37, 99, 235, 0.05)',
        'md': '0 1px 3px rgba(37, 99, 235, 0.1)',
        'lg': '0 4px 6px rgba(37, 99, 235, 0.1)',
        'xl': '0 10px 15px rgba(37, 99, 235, 0.1)',
        'glass': '0 8px 32px rgba(37, 99, 235, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-in-out',
        'scale-in': 'scale-in 0.2s ease-in-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '0.2s',
        '300': '0.3s',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

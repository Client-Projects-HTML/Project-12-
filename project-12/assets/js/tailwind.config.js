tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF4EC',
          100: '#FFE4CC',
          200: '#FDCFA3',
          300: '#FBB87A',
          400: '#F9A86F',
          500: '#F79D65', // Brand Coral
          600: '#F79D65', // Brand Coral (main)
          700: '#E6864E', // Hover / Darker Coral
          800: '#C96D35',
          900: '#A3522A',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          light: '#FFF4EC', // Soft coral bg
          DEFAULT: '#FDBA8C', // Light coral accent
          dark: '#E6864E',  // Darker coral
        },
        // Dark mode specific background layer
        darkbg: '#0f172a', 
        darkcard: '#1e293b'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px', // Cap max width for cleaner look similar to SaaS sites
        },
      }
    }
  }
}

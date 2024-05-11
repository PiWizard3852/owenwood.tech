import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    {
      pattern: /delay-(\d*)/,
    },
  ],
  theme: {
    colors: {
      background: '#041421',
      border: '#2C3A49',
      primary: '#C3C3C3',
      secondary: '#666666',
    },
    screens: {
      sm: '550px',
      md: '950px',
      lg: '1200px',
    },
    extend: {
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'md',
    }),
  ],
} satisfies Config

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      background: '#041421',
      border: '#2C3A49',
      primary: '#C3C3C3',
      secondary: '#666666',
    },
    screens: {
      sm: '550px',
      lg: '1200px',
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

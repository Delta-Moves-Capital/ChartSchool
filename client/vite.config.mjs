import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ChartSchool/', // Required for GitHub Pages deployment under this repo
  plugins: [react()],
})

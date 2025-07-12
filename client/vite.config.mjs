import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ChartSchool/',  // ← Set this to the name of your repo
  plugins: [react()],
});

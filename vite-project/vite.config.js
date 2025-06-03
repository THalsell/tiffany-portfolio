import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tiffany-portfolio/', // required for GitHub Pages
  plugins: [react()],
});

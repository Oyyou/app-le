import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      content: path.resolve(__dirname, 'src/content'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
  define: {
    global: {},
  },
});

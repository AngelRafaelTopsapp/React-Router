import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Reat-Router/', // Certifique-se de que isso corresponde ao seu repositório
  plugins: [react()],
});

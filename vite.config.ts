import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement depuis le dossier courant
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: './', // Chemins relatifs pour supporter le déploiement GitHub Pages
    define: {
      // Polyfill pour que process.env.API_KEY fonctionne dans le code client
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env': {} // Empêche les crashs si d'autres libs accèdent à process.env
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': {
        REACT_APP_CONTENTFUL_SPACE_ID: env.REACT_APP_CONTENTFUL_SPACE_ID,
        REACT_APP_CONTENTFUL_ACCESS_TOKEN:
          env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve:{
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    }
  };
});

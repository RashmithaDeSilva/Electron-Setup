import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the DEV_PORT value or fallback to a default port
const devPort = parseInt(process.env.DEV_PORT || '6969', 10);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist-web',
  },
  // HMR ( Hot Module Reloading ) server
  server: {
    port: devPort,
    strictPort: true,
  },
})

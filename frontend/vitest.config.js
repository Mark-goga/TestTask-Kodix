import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
  test:{
    setupFiles: './test/setupTests.js',
    environment: 'jsdom'
  }
})
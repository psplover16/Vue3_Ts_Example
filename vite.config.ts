import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vite 設定檔
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});

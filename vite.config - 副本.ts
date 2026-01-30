
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 加载系统环境变量（包括在 Vercel/Cloudflare 填写的 API_KEY）
  // Fix: Use type cast for process to resolve 'cwd' property error in certain TS environments
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // 这一步非常关键：将平台的环境变量注入到前端的 process.env 中
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
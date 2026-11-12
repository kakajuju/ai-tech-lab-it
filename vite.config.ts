import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 상대 경로: 정적 호스팅 하위 경로나 dist/index.html 직접 열기에서도 동작
  base: './',
  plugins: [react()],
});

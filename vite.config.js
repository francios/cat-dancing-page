import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 상대 경로로 빌드해 GitHub Pages 등 하위 경로 배포에서도 동작하게 함
  base: './',
  server: {
    // WSL2: 모든 인터페이스(0.0.0.0)에 바인딩해 Windows 호스트에서 접속 가능하게 함
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
  },
})

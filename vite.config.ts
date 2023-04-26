import { defineConfig,  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3080,
    proxy: {
      "/startgame/": "http://localhost:5080",
      "/guess/":  "http://localhost:5080",
      "/about/":  "http://localhost:5080",
      "/highscore":  "http://localhost:5080",
    }
  }
})

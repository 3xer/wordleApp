import { defineConfig,  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3080,
    proxy: {
      "/game": "http://localhost:5080"
    }
  }
})

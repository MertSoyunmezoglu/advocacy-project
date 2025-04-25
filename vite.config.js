import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ← burayı ne istersen yaparsın
    watch: {
      usePolling: true // bazen dosya sistemine bu şart oluyor (özellikle Windows)
    }
  },
})
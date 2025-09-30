import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['conn-6sq5.onrender.com', 'localhost:3000', '127.0.0.1'],
  },
  plugins: [react()],
})

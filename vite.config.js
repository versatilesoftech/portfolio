import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all IP addresses
    port: 5173, // You can change this to any port you prefer
  },
})

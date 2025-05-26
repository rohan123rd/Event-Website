import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    allowedHosts: ['6e1b-2409-40c1-101c-360e-dd34-2284-d005-c8b7.ngrok-free.app']
  },
  plugins: [react()],
})

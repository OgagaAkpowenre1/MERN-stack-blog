import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external networks
    allowedHosts: [
      '5173-ogagaakpowe-mernstackbl-96nf2ga4bi6.ws-eu117.gitpod.io' // Add your Gitpod URL here
    ]
  }
})

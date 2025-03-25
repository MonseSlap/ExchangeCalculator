import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  server: {
    host: '0.0.0.0', // Permite acceso desde cualquier IP
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:5000' // Si usas backend
    }
  }
}
)

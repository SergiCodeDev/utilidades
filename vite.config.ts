import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    host: true, // Esto hace que se exponga en la red local
    port: 5173, // Puedes cambiar el puerto si es necesario
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
})

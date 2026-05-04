import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
    alias        : [
      { find: /^gameover\/(.*)$/, replacement: path.resolve(__dirname, "config/$1") },
      { find: 'gameover.design', replacement: path.resolve(__dirname, 'design/token/css/global.css') }
    ],
  },
})

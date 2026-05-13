import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base is '/' in dev (localhost) and the repo name in production (GitHub Pages)
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/streamline-rebuild-arvin-test2/' : '/',
  plugins: [react(), tailwindcss()],
}))

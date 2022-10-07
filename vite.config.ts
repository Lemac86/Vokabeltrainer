import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate', 
      devOptions: {enabled: true},
      manifest: {
        name: 'Vokabeltrainer',
        short_name: 'VokAppel',
        description: 'Awesome Vokabeltrainer-App',
        theme_color: '#ffffff',
        icons: [
          {
            src: "Bud.png",
            sizes: '200x200',
            type: 'image/png'
          }
        ]
      }
   })
  ],
  build: {outDir: "docs"},
  base: "/Vokabeltrainer/" 
})

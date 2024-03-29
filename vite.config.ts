import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: [
      {
        find:'/@src/',
        replacement: `/src/`
      },
      {
        find:'/@/',
        replacement: `/`
      },
      
    ]
  },

  plugins: [vue()],
})

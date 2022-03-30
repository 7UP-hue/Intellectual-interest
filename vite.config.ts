import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 8088,
  },
  resolve:{
    // 起别名
    alias:[
        {
            find:'@',
            replacement:'/src'
        },
        {
          find:'views',
          replacement:'/src/views'
        },
        {
          find:'components',
          replacement:'/src/components'
        },  
    ]
  }
})

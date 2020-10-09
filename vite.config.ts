import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  // 导入文件夹别名
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@views/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@utils/': path.resolve(__dirname, './src/utils'),
  },
  optimizeDeps: {
    include: ['echarts', '@redux-model/react']
  },
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567/foo',
    // with options
    '/hello': {
      target: 'https://apinew.juejin.im/user_api/v1/user/get?aid=2608&not_self=0',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/hello/, '')
    }
  }
}

export default config

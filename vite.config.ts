/*
 * @Version: 
 * @Company: Venus
 * @Date: 2020-09-08 09:50:59
 * @LastEditors: Tian jianen
 * @LastEditTime: 2020-10-16 13:29:25
 */
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
    include: ['echarts', '@redux-model/react', 'ace-builds', 'brace']
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

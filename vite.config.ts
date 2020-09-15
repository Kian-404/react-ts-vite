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
    include: ['echarts',]
  }
}

export default config

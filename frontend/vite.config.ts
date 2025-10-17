import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  Pages({
      // ページディレクトリ
      dirs: 'src/02-pages',

      // 拡張子
      extensions: ['tsx', 'ts'],

      // 除外するファイル
      exclude: ['**/components/**', '**/*.test.tsx'],
    }),
    ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // true: devcontainerを使用するため、すべてのネットワークインターフェースでリッスン（0.0.0.0）
    port: 5173, // Viteのデフォルトポート
    strictPort: true, //ポート固定
    watch: {
      usePolling: true,  // ← ファイル変更検知
    },
    proxy: {
      '/api': {
        target: 'https://railway.bulletinboard.techtrain.dev',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

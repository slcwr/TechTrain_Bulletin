import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // true: devcontainerを使用するため、すべてのネットワークインターフェースでリッスン（0.0.0.0）
    port: 5173, // Viteのデフォルトポート
    strictPort: true, //ポート固定
    watch: {
      usePolling: true,  // ← ファイル変更検知
    },
  },
})

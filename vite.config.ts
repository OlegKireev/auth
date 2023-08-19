import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  plugins: [
    react(),
    visualizer({
      open: Boolean(process.env.ANALYZE_BUNDLE),
      filename: 'bundle-analytics.html',
    }),
    splitVendorChunkPlugin(),
  ],
});

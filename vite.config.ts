import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint2';
import svgr from 'vite-plugin-svgr';

const getPath = (relativePath: string) => path.resolve(__dirname, relativePath);

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
    dts({
      insertTypesEntry: true,
      exclude: ['src/stories/**/*'],
    }),
  ],

  resolve: {
    alias: {
      '@': getPath('./src'),
      '@components': getPath('./src/components'),
      '@styles': getPath('./src/styles'),
      '@sass': getPath('./src/sass'),
    },
  },

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'webview-ui-kit',
      formats: ['es'],
      fileName: format => `webview-ui-kit.${format}.js`,
    },
    rollupOptions: {
      // внешние зависимости + наше исключение сторис
      external: id => {
        // всё, что импортируется из src/stories/, делаем external
        if (id.startsWith(path.resolve(__dirname, 'src/stories'))) {
          return true;
        }
        // и разруливаем React
        return ['react', 'react-dom'].includes(id);
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // (при необходимости) исключаем stories из CommonJS плагина
    commonjsOptions: {
      exclude: ['src/stories/**'],
    },
  },
});

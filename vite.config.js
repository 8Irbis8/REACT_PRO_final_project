import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { developmentConfig } from './vite/dev.config';
import { productionConfig } from './vite/prod.config';

// Алиасы для FSD архитектуры
const FSD_ALIASES = {
  '@': resolve(__dirname, './src'),
  '@app': resolve(__dirname, './src/app'),
  '@pages': resolve(__dirname, './src/pages'),
  '@widgets': resolve(__dirname, './src/widgets'),
  '@features': resolve(__dirname, './src/features'),
  '@entities': resolve(__dirname, './src/entities'),
  '@shared': resolve(__dirname, './src/shared'),
};

export default defineConfig(({ mode, command }) => {
  const isProduction = command === 'build';
  const isDevelopment = !isProduction;

  const baseConfig = {
    base: './',

    plugins: [
      // SWC компилятор для React 19
      react({
        tsDecorators: true,
        jsxImportSource: '@emotion/react', // для MUI + Emotion
      }),
      !isProduction &&
        checker({
          typescript: true,
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            useFlatConfig: false,
          },
        }),

      svgr({}),
    ],
    resolve: {
      alias: FSD_ALIASES,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isDevelopment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
      },
      // PostCSS конфиг
      postcss: '../postcss.config.js',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material'],
    },
  };

  return isProduction ? { ...baseConfig, productionConfig } : { ...baseConfig, developmentConfig };
});

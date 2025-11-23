// Production специфичные настройки
export const productionConfig = {
  build: {
    minify: 'esbuild',
    sourcemap: 'hidden',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-redux'],
          'mui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@mui/lab',
            '@emotion/react',
            '@emotion/styled',
          ],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'yup'],
          utils: ['classnames', 'react-toastify'],
          routing: ['react-router-dom'],
          'state-management': ['@reduxjs/toolkit'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    target: 'esnext',
    chunkSizeWarningLimit: 800,
    reportCompressedSize: false,
    emptyOutDir: true,
  },
  define: {
    __DEV__: 'false',
    'process.env.NODE_ENV': '"production"',
  },
};

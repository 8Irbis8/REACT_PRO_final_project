 // Development специфичные настройки
 export const developmentConfig = {
    server: {
      port: 3000,
      open: true,
      cors: true,
      fs: {
        strict: false,
      },
    },
    build: {
      sourcemap: true,
      minify: false,
    },
    define: {
      __DEV__: 'true',
      'process.env.NODE_ENV': '"development"',
    },
  };
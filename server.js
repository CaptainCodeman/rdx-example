const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');
const logger = require('connect-logger');
const compression = require('compression');

browserSync.init({
  server: {
    baseDir: 'docs',
    index: 'index.html',
  },
  files: [
    'docs/scripts/**',
    'docs/index.html',
  ],
  middleware: [
    logger(),
    compression({ level: 9 }),
    historyApiFallback(),
  ],
  snippetOptions: {
    ignorePaths: ['/', '/**'],
  },
});

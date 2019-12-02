const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');
const logger = require('connect-logger');
const compression = require('compression');

browserSync.init({
  cwd: 'docs',
  startPath: '/rdx-example/',
  server: {
    baseDir: 'docs',
    index: 'index.html',
    routes: {
      '/rdx-example': 'docs'
    }
  },
  files: [
    'scripts/**',
    'index.html',
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

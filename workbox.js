const { generateSW } = require('workbox-build');
const { resolve } = require('path');

const swDest = resolve('docs/sw.js')

console.log('building service worker', swDest);

generateSW({
  swDest,
  globDirectory: 'docs',
  globPatterns: [
    './index.html',
    './404.html',
    './manifest.json',
    './icons/**/*.png',
    './scripts/**/*.js',
    './images/**/*.{png,webp}',
  ],
  cacheId: 'rdx-example',
  skipWaiting: true,
  clientsClaim: true,
  navigateFallback: './index.html',
  runtimeCaching: [{
    urlPattern: /\/images\//,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
    },
  }, {
    urlPattern: /\/scripts\//,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
    },
  }],
  offlineGoogleAnalytics: false,
  cleanupOutdatedCaches: true,
  navigationPreload: false,
  sourcemap: true,
})
.then(({ count, size }) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
})
.catch((err) => {
  console.error(`Unable to generate a new service worker.`, err);
})

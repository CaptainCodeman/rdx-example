if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},i=async(i,s)=>{const n=await Promise.all(i.map(e));s(1===n.length?n[0]:n)};i.toUrl=e=>`./${e}`;const s={require:Promise.resolve(i)};self.define=(i,n,c)=>{s[i]||(s[i]=new Promise(async s=>{let a={};const o={uri:location.origin+i.slice(1)},r=await Promise.all(n.map(i=>"exports"===i?a:"module"===i?o:e(i))),f=c(...r);a.default||(a.default=f),s(a)}))}}define("./sw.js",["./workbox-67ade57f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rdx-example"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"66a8377234507e8235617477abbc9489"},{url:"404.html",revision:"e2f539d27a897b133c51bdac66521e3a"},{url:"manifest.json",revision:"8f6140fcd915c6e84547036c86f51a5b"},{url:"scripts/app.js",revision:"9165eec30ce5861eeadaffbd5b46e054"},{url:"images/icons/icon-128x128.png",revision:"91f21eb75156de49294cecf1c15b89b5"},{url:"images/icons/icon-144x144.png",revision:"abff52887f5db0324ecdf7ff320f3ee3"},{url:"images/icons/icon-152x152.png",revision:"7960056a1c2dda1c9ecfb1cf263b9626"},{url:"images/icons/icon-192x192.png",revision:"97afa8e81ed57443bc639d0b6cb48d29"},{url:"images/icons/icon-384x384.png",revision:"8e0b763261735e70d52e13b0f45c2478"},{url:"images/icons/icon-512x512.png",revision:"92d7dbfbc1d2d4656543985f6a7f9473"},{url:"images/icons/icon-72x72.png",revision:"a20f988e3bfe4d153f451af1076a2a91"},{url:"images/icons/icon-96x96.png",revision:"9cd49987716b8d9cf822b572f7a81d63"},{url:"images/sourcemap.png",revision:"269687f3a45f4949013736a306776e11"},{url:"images/sourcemap.webp",revision:"25a88abeef5edd8378a46f654c833925"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./index.html"))),e.registerRoute(/\/images\//,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/\/scripts\//,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/(fonts|storage)\.googleapis\.com\//,new e.CacheFirst({cacheName:"googleapis",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//,new e.CacheFirst({cacheName:"jsdelivr",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/unpkg\.com\//,new e.CacheFirst({cacheName:"unpkg",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map

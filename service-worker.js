/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d0d7882dd200160dfb0a84fef9cf6bb4"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.538bb698.js",
    "revision": "945da42a977dc09141fed27d9a674270"
  },
  {
    "url": "assets/js/10.f5b178bc.js",
    "revision": "175960e4c9a3165fb96beca1d75907c5"
  },
  {
    "url": "assets/js/11.77834b00.js",
    "revision": "cda9e4cfb071efd3bec96bdad75bed94"
  },
  {
    "url": "assets/js/12.7419da88.js",
    "revision": "89aeda03b319143e64475b009a80455e"
  },
  {
    "url": "assets/js/13.15d13dcc.js",
    "revision": "026b5949b561fea6cb1cbd9529922ca4"
  },
  {
    "url": "assets/js/14.d1cfed6b.js",
    "revision": "34c2936bbd51372b5ee9e9e3f4f9d6c6"
  },
  {
    "url": "assets/js/15.0d57a59c.js",
    "revision": "47d420c01fbc31aa07868e133348946f"
  },
  {
    "url": "assets/js/16.0cdb7213.js",
    "revision": "5d4b861e47a2ee97acfd155fc811a17f"
  },
  {
    "url": "assets/js/17.1ea0ff56.js",
    "revision": "74a6e1f8ee46450395a48624058fb6ce"
  },
  {
    "url": "assets/js/18.235a65b3.js",
    "revision": "5be7e74ab7d92fbbd10fadad4caf9dc3"
  },
  {
    "url": "assets/js/19.eb821949.js",
    "revision": "31dab2bbe033f97139442c25ce81a705"
  },
  {
    "url": "assets/js/20.a7eca56a.js",
    "revision": "e10c8ce31b3577e327504ce8d09f5f2c"
  },
  {
    "url": "assets/js/4.63eeb3dc.js",
    "revision": "451d48584fec7b7d6d41e02bf4ec78fc"
  },
  {
    "url": "assets/js/5.a7b89bc8.js",
    "revision": "e274d13b91238519c8f7aaf51cbd6d5e"
  },
  {
    "url": "assets/js/6.39e42ff4.js",
    "revision": "84742da1ed4d886db74c404037004a76"
  },
  {
    "url": "assets/js/7.e5abc524.js",
    "revision": "d235f4d50399bc6eb492f2c9470e50ed"
  },
  {
    "url": "assets/js/8.91108586.js",
    "revision": "e6e064476ee86a77b45deb630d20358d"
  },
  {
    "url": "assets/js/9.fc129756.js",
    "revision": "370462bbdae94f4efa62bcb22474b1b2"
  },
  {
    "url": "assets/js/app.2ce390d8.js",
    "revision": "82161539abebbc244b736dc8218ca9a8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c5897f7a.js",
    "revision": "87a31bc352aa9f4ce4290b2dc3b78390"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "6018b62495bb323ec7c8e6f0efc69885"
  },
  {
    "url": "categories/java/index.html",
    "revision": "61acce8b189fa5edf679e9d1c3d57b82"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "36e300952638a1528c8f2a1f7d54231a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2cfabc3d04abf2759b6f14896ca960f3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9addb1570e5d4fb921c0d3c4be353e70"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2f9c410fbb80e829fd991e1ca06bb7f8"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7a449cd8bf600643592a69bc784b8e9b"
  },
  {
    "url": "js/custom.js",
    "revision": "b6283eeaf981190fa4c2bc6ba3a49a67"
  },
  {
    "url": "tag/index.html",
    "revision": "397777b8d25b4ad06f2a5ecfa51e8344"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "102c2443b2ed8d2cc4e9637e1fdd3c3c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "195d47408a40ca1e3a7c7a29f2667dc3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d9eb37770fb578dee248728dab6cd6d3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fc8aacaadb29a24014d26720bec24612"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4546649d7e0b977a2a1735d9514b9f11"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "43803532b66ee12dfe08dcd40e8b8d00"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "559817b7ccb257bb3607bc3ca8bdadc4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d1b39b0ae56f85f99a2a4e7c9abde752"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "040fa563eed34f5cff89a48ed8b08890"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1f513cfc465341a0c0a2b35702508ba2"
  },
  {
    "url": "timeline/index.html",
    "revision": "134e30a00041d8b275c657d4f0188e06"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "我的测试/231.html",
    "revision": "b19180fb7dd0ccf5a3cd01da8758d661"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d30365b296c859f07ae38901a4923b43"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8b8e76f3aadff25916f08948795c1287"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c6edfe46725423951fd08c346eadeca8"
  },
  {
    "url": "技术文章/me/231.html",
    "revision": "3bcd37cde45bafde194c631a622aa1f6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e38cc12189f7aacfe0dfbc177a97378d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "26fc4400af3ed733b3edb11480a3e143"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

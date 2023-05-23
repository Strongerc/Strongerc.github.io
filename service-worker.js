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
    "revision": "dfdd4e473ec756998a066fdad36fd97a"
  },
  {
    "url": "assets/css/0.styles.74701719.css",
    "revision": "94325a216bd069101bd1af410d6d3f99"
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
    "url": "assets/js/12.57952187.js",
    "revision": "da5ab8bda16dae8e56569025200f612a"
  },
  {
    "url": "assets/js/13.2dac01cf.js",
    "revision": "a4af053a6bb0cb2de31431f6f6ac2538"
  },
  {
    "url": "assets/js/14.b5588624.js",
    "revision": "b27e8c8bc279303b7a9c9f24c5e585b5"
  },
  {
    "url": "assets/js/15.bd53787c.js",
    "revision": "fbc62439de4331d2db8ff4ba55b8ebcd"
  },
  {
    "url": "assets/js/16.3d20cd6a.js",
    "revision": "f0c7d78494ea6caa1611e29e34f25cb2"
  },
  {
    "url": "assets/js/17.6dd519bd.js",
    "revision": "de52edc84f263263e08a9a0b2f6c374b"
  },
  {
    "url": "assets/js/18.375fae40.js",
    "revision": "31b023907709e26c0fc5bb7583ddae29"
  },
  {
    "url": "assets/js/19.5f5548e2.js",
    "revision": "ba63a2cd002dba384c554f22c6e8217f"
  },
  {
    "url": "assets/js/20.3cdbda99.js",
    "revision": "3e1d53a4c6a2f0d77abdbcf9de214039"
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
    "url": "assets/js/app.b9f7a58b.js",
    "revision": "46f0b84f22a0bd6a0c69dfad1e3a9051"
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
    "revision": "4fa7a0aaf8bcad94ee173cb61bbc6ddb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d5e52c4d1e00945e734645ede5ec0d11"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "72d8f272b76ab17f2a62efe5099a8a64"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "98d81736402af8981911e44c18d6c699"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2fc7c43f875383f2c7613e1f8ee2a523"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5826e9ae5fe3f5b3dd62d598eac7a446"
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
    "revision": "9d8adc7202819f9a9d113a8f5b8b6820"
  },
  {
    "url": "js/custom.js",
    "revision": "b6283eeaf981190fa4c2bc6ba3a49a67"
  },
  {
    "url": "tag/index.html",
    "revision": "2a5b4f58bc8e911ce2bf6bc2e8e3b47c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9dbac593b6fa12e23928ae10360f6bee"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "399c6a4e0df4f80a3bfff67ced4cccb9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e8318b10ad1b6fe39631e81f2c28a169"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1a721969ddc3897e2ea6f30a31d2ce3d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2b4ab88566b940858b52525c3f195825"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6879da031f2ccd58cb59207175c99f96"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "61299e2b8bc26b42b57ad91b50c47ae1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7ef5108101e2b2f2e3513ecd2fd0a07f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1976e1318dca06f7364c05c8f1e34208"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d37c120f37a24c76c27a2fccd24b5193"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e8c5202df533862362db289a02687e9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "我的测试/231.html",
    "revision": "1e101d2c26cb6716a4b58811bcee3cdb"
  },
  {
    "url": "技术文章/index.html",
    "revision": "33c7bfe10b78ab24a80612862e693ed1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e7b9d4e63041e66551783a2ef1502db6"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e1099bc30d4d3672283edfc6c841c1f9"
  },
  {
    "url": "技术文章/me/231.html",
    "revision": "bca663d453b154171af9b3962c7d9e58"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "eb78a45c81d8abfeb67564596c979f7d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "48c5ea78c5ab2369a36589a07ad1b5f2"
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

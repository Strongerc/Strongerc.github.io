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
    "revision": "0c98ca8b5864233530bab2efc9b347cd"
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
    "url": "assets/js/15.39f8538e.js",
    "revision": "0e86c3ebb480c7056fde3dbab2fb1014"
  },
  {
    "url": "assets/js/16.99e0e0d2.js",
    "revision": "79fc8f47b424fdad7dd1e38d2820be25"
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
    "url": "assets/js/app.4bf89f28.js",
    "revision": "3c2add024adde09a7ecde321b7d9780d"
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
    "revision": "b48e8de5e5ff516e9abbf0d4420f027c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "519b84522d7add0b7e43082cf00aff7f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9e0cbc62ac7f9d37ed75dad14f7d07c9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e15fd5518115caed659df4e23e9cddde"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3040ab55d659fd503e0e3c4940adf240"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2642e90413ae47c402bed479c09a9532"
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
    "revision": "4855afde4e064488bb64ca216da6817e"
  },
  {
    "url": "js/custom.js",
    "revision": "b6283eeaf981190fa4c2bc6ba3a49a67"
  },
  {
    "url": "tag/index.html",
    "revision": "42da3e6ff5bcb8ef4385cf4cc0b752fe"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "69aa3a3533b812a0eebb6dc15c8868f3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2a0d04c2eef9f59d92df535828c2715f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e4bb1d539c7aa7c99196de1a53783d40"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6ac5df3ad8657216e388039ae4fcf3e5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7b9fb87098e4b556a1bb5a8a5a2919f1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9846d5abb35e4e622f38a1067b933b7b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7157975376f5bcf0ead76d398ab19a14"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c97c04f2fff2cf10984ff8528619fb07"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "999ac8de7da45d78afaf447f2202ba75"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0fedd388d103f0dc2c0f6c02a5005a3e"
  },
  {
    "url": "timeline/index.html",
    "revision": "37d140093c6dbfc0fd76ef3560410ac1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "我的测试/231.html",
    "revision": "46dad6036b45bbfea8fb0f88b703782e"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1cc1871e3196a96a0c40697b7bafbd22"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5a2ac2f6d7dc2c3741008881da360c9a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "dbf63c7dbb37124ef114382e1e96252d"
  },
  {
    "url": "技术文章/me/231.html",
    "revision": "b96573c75b93e5e034d68ea80d1bd9b3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "de57b84c4318e79b3350ee9a4ab7aed3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "db1c108db2359071b931b40ba59d7d81"
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

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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "409e22f78cfdc98e6f617ef67305518e"
  },
  {
    "url": "assets/css/1.styles.3e962af6.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.c11b32b0.css",
    "revision": "3023365d9cff6bf56f155cea30a24201"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3e962af6.js",
    "revision": "400c8ecbf8d9454531327903ed81da42"
  },
  {
    "url": "assets/js/10.7ae5ef66.js",
    "revision": "d7c79d118b6f2533b69f2e1d5c122c0f"
  },
  {
    "url": "assets/js/11.61ac4b90.js",
    "revision": "daca482b05a3e3b2e707f8b145370977"
  },
  {
    "url": "assets/js/2.9407d6f3.js",
    "revision": "cff13c4e6ff7cd7163b1f9c77232bce4"
  },
  {
    "url": "assets/js/3.0b90e7e9.js",
    "revision": "748f9ac7b4feadad94476c5b2f96aaf3"
  },
  {
    "url": "assets/js/4.22c89bcf.js",
    "revision": "724ca5074fe8f42ed03d027ae670fb26"
  },
  {
    "url": "assets/js/5.93d433cb.js",
    "revision": "62d047b1f462e3c899ea99c9a6c2cd68"
  },
  {
    "url": "assets/js/6.bc2ad495.js",
    "revision": "9e1dddb9d45413d5fc07d71ea4c289f8"
  },
  {
    "url": "assets/js/7.991685a2.js",
    "revision": "24a0ad6347bfef6848e7123962bf1a86"
  },
  {
    "url": "assets/js/8.8cfb1075.js",
    "revision": "54523ddf829a6dd0f91cd89a33d3bc3d"
  },
  {
    "url": "assets/js/9.9ef0a87f.js",
    "revision": "ece0943a8e507764589e75d235d4f882"
  },
  {
    "url": "assets/js/app.c11b32b0.js",
    "revision": "2b9f1d128314771d097e2e3ec8a1ae53"
  },
  {
    "url": "chapter-01/2020-08-22-getting-a-printer.html",
    "revision": "0b064bc2130838ccd2f816af25717f3b"
  },
  {
    "url": "chapter-01/2020-08-23-making-a-printer.html",
    "revision": "bfd1761237ca22ef9d903aa2177b743f"
  },
  {
    "url": "chapter-01/2020-08-24-getting-the-files.html",
    "revision": "d03de3af73aa5280cbbd2c585e2c526d"
  },
  {
    "url": "chapter-01/2020-08-25-getting-the-filaments.html",
    "revision": "7e5f49bac94eead056e21f8cde8baf61"
  },
  {
    "url": "chapter-02/2020-08-21-where-to-start.html",
    "revision": "4cca9d78012d9fa089cf1b168875f75f"
  },
  {
    "url": "chapter-02/2020-08-22-getting-an-idea.html",
    "revision": "db8e92549ff7fa6c2dc143857713d029"
  },
  {
    "url": "index.html",
    "revision": "40f6ecb88ce3a24771781dbd5196537a"
  },
  {
    "url": "introduction/2020-08-22-introduction-why-what-who.html",
    "revision": "11a232786c3c034e4acc40c286f30b72"
  },
  {
    "url": "introduction/index.html",
    "revision": "d38b6d9b07f66e22b1590140689ccd0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

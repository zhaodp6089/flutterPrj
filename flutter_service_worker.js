'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "599a703afbca38b19f56774a53cdc249",
"version.json": "6e502247b813c9e8e96d7f7c5f7b90c2",
"index.html": "a268fefaa95abb067fcbd41ff445dd2f",
"/": "a268fefaa95abb067fcbd41ff445dd2f",
"main.dart.js": "1d9e1c0874689181889668645f70296c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7011bc3accd45839d0a044607bfea229",
"assets/AssetManifest.json": "01c1865e1d65e2e56ee21a5cd465ea10",
"assets/NOTICES": "5a50ece29111e849d197fe619deeed4e",
"assets/FontManifest.json": "4ee7cf26d203798fc1e7038fa6e3964b",
"assets/AssetManifest.bin.json": "f55de44d41f4ec3827a8b6b6141b7289",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
"assets/packages/jhtoast/assets/images/toast_success.png": "35c2d9503db54caf521fa42f2dc76620",
"assets/packages/jhtoast/assets/images/toast_error.png": "b9ac5fe507b044775a83a297c19f57d5",
"assets/packages/jhtoast/assets/images/loading.gif": "0e6e0f46d7504242302bc8055ad9c8c2",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/card.png": "9f9e951085c76c9bc78e22e3011b0e3d",
"assets/lib/assets/images/gflogo.png": "3de21daa0f3786271be9ebf504585fdc",
"assets/lib/assets/images/s5.png": "bac18c287da83eb39be609153c29aa33",
"assets/lib/assets/images/pink.png": "0664cd7e75c65f931da7c3c483f489bc",
"assets/lib/assets/images/s4.png": "065d2f8890d084214d5fe25506bf16c1",
"assets/lib/assets/images/img.png": "b0b8ee63d4f6d910a28ade1b5beb9bad",
"assets/lib/assets/images/s1.png": "c4bed48b6d6bc21248ef5c53c97dc82f",
"assets/lib/assets/images/s3.png": "7def28d2cef6c4a6807845102b525475",
"assets/lib/assets/images/avatar9.png": "048cbe49fe8510b74b6edf900ed50c2a",
"assets/lib/assets/images/avatar8.png": "1c8a9564f422f21cb2795e1b61535004",
"assets/lib/assets/images/s2.png": "8e49821a4b3b885dfdf0d5c6035c1534",
"assets/lib/assets/images/i1.png": "0c177ef172fddb4d28c8ef0102f88425",
"assets/lib/assets/images/e2.png": "33bd98f5f1ca9346d0d51291f634acb6",
"assets/lib/assets/images/orange.png": "86e7cfb109b64c5789d947e11b221076",
"assets/lib/assets/images/avatar5.png": "7f7d935b024eceaf622cfe15b0251458",
"assets/lib/assets/images/card3.png": "67e41d3a7039cc457ebc8ee43173779b",
"assets/lib/assets/images/card2.png": "9970da5163bf4e64bd34092ac6a5dcaa",
"assets/lib/assets/images/avatar4.png": "e81e2572ed424f60ab58d3f3c0341920",
"assets/lib/assets/images/e3.png": "7d40970fa613789fe5f6d85f0ef60656",
"assets/lib/assets/images/i2.png": "c3a4c555a3f22ec8721d97b04116e003",
"assets/lib/assets/images/e1.png": "4f15642bd2e7971af55ce4d8f1ce75b2",
"assets/lib/assets/images/avatar6.png": "3a14e44027a207806742fc267e896997",
"assets/lib/assets/images/card1.png": "567236e50514346cf68c33eb87f7482b",
"assets/lib/assets/images/avatar7.png": "5fb1556b2db6068fbb156f27189fe7ba",
"assets/lib/assets/images/i3.png": "30c4aac4f475af62da292d9b49255c63",
"assets/lib/assets/images/e4.png": "e96a6b484658ef4d78e442970617a5a4",
"assets/lib/assets/images/avatar3.png": "087106515e87184cfe61d7b2fb69d204",
"assets/lib/assets/images/card5.png": "d511850917d87790ba9a952b01ff8df6",
"assets/lib/assets/images/avatar12.png": "3f37d9e56589b3e2322d1be7057d61d8",
"assets/lib/assets/images/card4.png": "040d69ccd720f48f647a0e053535bc4a",
"assets/lib/assets/images/img2.png": "969ca951b459278ace4ba486cf5cfcef",
"assets/lib/assets/images/avatar2.png": "a511346e698e2db2321a93f02f152bc3",
"assets/lib/assets/images/e5.png": "f7c688dfa6e42b5c119d1652fabb61c4",
"assets/lib/assets/images/i4.png": "6aebf6e04ccc484fcc4cf20fb808e192",
"assets/lib/assets/images/avatar10.png": "6c877e7e4f78b781542cc1799d649226",
"assets/lib/assets/images/avatar11.png": "395b633f4e79f932d44d3e98bd0a8f08",
"assets/lib/assets/images/avatar1.png": "417ca1e7c2e4c314e3cc5158f28f868e",
"assets/lib/assets/images/img1.png": "292096bb7c7d6f825ddf075fad0ff05c",
"assets/lib/assets/images/image1.png": "56aa3e67728dd2d07d925de31aaa1714",
"assets/lib/assets/images/story.jpg": "f9ae374b68fa428428853ac3ffb871e2",
"assets/lib/assets/images/image2.png": "6a00bfe0b0c50f0be10830c5026baea9",
"assets/lib/assets/images/image.png": "3eb34f864965bfaf9160f826440a607f",
"assets/lib/assets/images/red.png": "8a6a835dd2526ef01aec07f4ca8792d8",
"assets/lib/assets/images/purple.png": "029dd59f2ae8341fc5d640fcccbe1447",
"assets/lib/assets/icons/allign.png": "baa83ecfb8090f30bf47920d2e824be5",
"assets/lib/assets/icons/gflogo.png": "5aae5e6009c7edd48cfc3a87dbafbb8d",
"assets/lib/assets/icons/Rotation.png": "eefd5fb7e73232129fb9a62d2d794009",
"assets/lib/assets/icons/size.png": "7cba1be9a69efa2a89264a05c4408da7",
"assets/lib/assets/icons/scaling.png": "0a7d35039a84218dd4b21d0860c7f1f5",
"assets/lib/assets/icons/slide.png": "33dc78e8959bbde2f23ff21bfd6283fa",
"assets/lib/assets/fonts/gfFontIcon.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/lib/assets/fonts/new.ttf": "ccaf51a99c12842917c815105e0e2254",
"assets/lib/assets/fonts/gfFontIcons2.ttf": "c9ef8acf5e1ace6c92a0e10a248d1301",
"assets/lib/assets/fonts/gfIconFonts.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/lib/assets/fonts/gfSocialFonts.ttf": "5a1143342f752421c630287be36ae69f",
"assets/lib/assets/fonts/loader.ttf": "9396dc647e6477f7cda08a483e15ef22",
"assets/lib/assets/fonts/newcomp.ttf": "53913d674b8d188b08746ef81dfe1931",
"assets/lib/assets/gif/loader1.gif": "9f151f9933ed86160f8e64b01564957d",
"assets/lib/assets/gif/loader.gif": "2bb1d5bdf06ce4d6b2c721d4aaf72de8",
"assets/lib/assets/gif/success1.gif": "7bd1c7b13375ee3f3a920813e7542777",
"assets/AssetManifest.bin": "47c548a9aadd9d586a3564ca7d8263f6",
"assets/fonts/MaterialIcons-Regular.otf": "4bef925ffdfb28b0d7bf25e78287a5cb",
"assets/assets/rive/raster_graphics.riv": "7eb3c9bd4848b5b9a4cd90b6ba5eedd3",
"assets/assets/image/pay_alipay.jpg": "5bcc3afc8daed3511430c3d2b87be549",
"assets/assets/image/user_head.jpg": "bcc8857d06fc0ea3fbddf22d4f9153d0",
"assets/assets/image/cbdh.jpg": "5cab295cbbbbad46571df15f0a6bf475",
"assets/assets/image/pay_wechat.jpg": "6a504cff8f708f97bc3f042abdeee362",
"assets/assets/image/cryptocurrency/usdc.svg": "3b5972c16a9795dcf6e2e2d7e3125d21",
"assets/assets/image/cryptocurrency/usdt.svg": "eac1f7bb15967c89034b440b095ad74c",
"assets/assets/image/cryptocurrency/ethereum.svg": "6e912e092584adcabd222ce3486750b3",
"assets/assets/image/cryptocurrency/dogecoin.svg": "605642c71463ca8ec99903719c98dcb0",
"assets/assets/image/cryptocurrency/bnb.svg": "cfec0f24a72a01b3ce3ae67506936c51",
"assets/assets/image/cryptocurrency/matic.svg": "561bc3f544a9969a74ebb250756667fe",
"assets/assets/image/cryptocurrency/bitcoin.svg": "f92890de8d6512e2597d378f00254e71",
"assets/assets/image/cryptocurrency/more.svg": "0c752e82c5f305f8cf3658e8812dacbe",
"assets/assets/image/cryptocurrency/trx.svg": "628da0985dd7233d1a23f9af461b5695",
"assets/assets/image/%25E4%25BA%25BA%25E4%25B8%2596%25E9%2597%25B4-%25E9%259B%25B7%25E4%25BD%25B3.jpg": "de4b82e240df47f59dbfccef61a5acae",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

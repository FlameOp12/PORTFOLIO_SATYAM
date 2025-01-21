'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"main.dart.js": "ea200fa65a68a858e33b6c5e4268f1ce",
"index.html": "65c7658e2620942cb3e3945c416c8fd8",
"/": "65c7658e2620942cb3e3945c416c8fd8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "25a0c7bcc7257d2b4915405879b854cf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "7a09548f3e3b4838e79a3e2c7869b687",
"assets/assets/kubernetes.png": "edb7ed5d10bbdb48e21d770829d0d212",
"assets/assets/dockerhub.png": "4ac0b420be135da2d022893431589585",
"assets/assets/flask.png": "3c1e58dfad03141693f6e961dcec62a5",
"assets/assets/cloud.png": "32c760630c3a130a680e7bb6c47ec806",
"assets/assets/wireshark.png": "04071be83546da9103812b360a331e97",
"assets/assets/sql.png": "fd0227543c975f25956db3c769d6c9d7",
"assets/assets/git.png": "4422aed02f4f804033a6a921dc18b10d",
"assets/assets/linkedin.png": "950a4c6d06fbd7ddf2e244cce0c7d091",
"assets/assets/aws.png": "c0a5538046f7c36d9f473ff46d0dc94b",
"assets/assets/firebase.png": "c911d672405a3c9144eed22c86251dae",
"assets/assets/bash.png": "e0861cba06db9b10c541df0f9c30fa82",
"assets/assets/java.png": "63df54779f6101b4c410fec6d2c9d73d",
"assets/assets/docker.png": "e58f48a69d4335cce26daac80d62fee0",
"assets/assets/DART.png": "3ba985c59372c98285bc585ac7a362f5",
"assets/assets/jenkins.png": "b7dba07fa1522cbcd272f194872709f5",
"assets/assets/python.png": "e2066ed62fa255f6c7fa01bdb5ac9067",
"assets/assets/mongodb.png": "689bb66f5af8080e4f79ffeb16202f6a",
"assets/assets/django.png": "04abf5f2c669b7ab5c402e687dbf7e4c",
"assets/assets/profile.jpeg": "cf8dd1e0c70210d106fe0b22c2abd667",
"assets/assets/back.jpg": "cf453d482d32f24fdac46d945bc317b1",
"assets/assets/latex.png": "c253e8da22b3e2798a0a50f1ccda827c",
"assets/assets/DSA.png": "6d1fd025333f1cb3f83625d6d2aefe43",
"assets/assets/c++.png": "272f72ce4938f3edddb1f97bce2f2dd4",
"assets/assets/C.png": "49c50478397dbfea06fd9520378bddb2",
"assets/assets/AI.png": "6d4670b4703d72565a0037153f8f34c1",
"assets/assets/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/github.png": "391224f4a41ff395304b4fb07d599e3e",
"assets/NOTICES": "9bfd794a8503f5b64218712ff0c12a64",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "416f446c36f1c972684b0fb1f36362ab",
"assets/AssetManifest.json": "6add2794ee60b586bb651905a8a46236",
"manifest.json": "5e8fb63a4fa0d906221408b457dfce4e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "681dfd2ea1909e83fc3a4ffbead4dd38",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_bootstrap.js": "a06fbb66ad9ca1195f593226aa2dc8a5"};
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

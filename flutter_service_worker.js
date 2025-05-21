'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "72d10fc34426d7932ed4251c0edbc762",
"manifest.json": "5e8fb63a4fa0d906221408b457dfce4e",
"index.html": "65c7658e2620942cb3e3945c416c8fd8",
"/": "65c7658e2620942cb3e3945c416c8fd8",
"main.dart.js": "efa007f9015bef12b74360faffd9338c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "eba201fc39f569b6f8cce4bc31854127",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6c5b2275ea0734fec9456de4a0160a88",
"assets/AssetManifest.json": "b64193244733db29d1bace7693503764",
"assets/assets/linkedin.png": "950a4c6d06fbd7ddf2e244cce0c7d091",
"assets/assets/firebase.png": "c911d672405a3c9144eed22c86251dae",
"assets/assets/git.png": "4422aed02f4f804033a6a921dc18b10d",
"assets/assets/profile.jpeg": "126257299aed73067caff55871357bb0",
"assets/assets/django.png": "04abf5f2c669b7ab5c402e687dbf7e4c",
"assets/assets/GCP.png": "2fc1d817864107fefe2ee17771fa6b18",
"assets/assets/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/wireshark.png": "04071be83546da9103812b360a331e97",
"assets/assets/DART.png": "3ba985c59372c98285bc585ac7a362f5",
"assets/assets/cloud.png": "32c760630c3a130a680e7bb6c47ec806",
"assets/assets/sql.png": "fd0227543c975f25956db3c769d6c9d7",
"assets/assets/dockerhub.png": "4ac0b420be135da2d022893431589585",
"assets/assets/kubernetes.png": "edb7ed5d10bbdb48e21d770829d0d212",
"assets/assets/certificate.png": "76322dba93027f747d7eff10e6236e56",
"assets/assets/latex.png": "c253e8da22b3e2798a0a50f1ccda827c",
"assets/assets/DSA.png": "6d1fd025333f1cb3f83625d6d2aefe43",
"assets/assets/flask.png": "3c1e58dfad03141693f6e961dcec62a5",
"assets/assets/java.png": "63df54779f6101b4c410fec6d2c9d73d",
"assets/assets/new.jpeg": "b1b92c42fea90403e9f94e761fe46aef",
"assets/assets/jenkins.png": "b7dba07fa1522cbcd272f194872709f5",
"assets/assets/postgresql.png": "3de89efdaa7745e01c5a0381b0128f55",
"assets/assets/docker.png": "e58f48a69d4335cce26daac80d62fee0",
"assets/assets/AI.png": "6d4670b4703d72565a0037153f8f34c1",
"assets/assets/mongodb.png": "689bb66f5af8080e4f79ffeb16202f6a",
"assets/assets/python.png": "e2066ed62fa255f6c7fa01bdb5ac9067",
"assets/assets/bash.png": "e0861cba06db9b10c541df0f9c30fa82",
"assets/assets/intern1.pdf": "5962b3f21a03e16a6a0de4b0f09ad802",
"assets/assets/aws.png": "c0a5538046f7c36d9f473ff46d0dc94b",
"assets/assets/c++.png": "272f72ce4938f3edddb1f97bce2f2dd4",
"assets/assets/back.jpg": "cf453d482d32f24fdac46d945bc317b1",
"assets/assets/github.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/C.png": "49c50478397dbfea06fd9520378bddb2",
"assets/AssetManifest.bin.json": "0bb72676b6caa459310e6fda04fc10d1",
"assets/fonts/MaterialIcons-Regular.otf": "5eb02d9d4d362abb7ba578c3d30894ce",
"version.json": "681dfd2ea1909e83fc3a4ffbead4dd38",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
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

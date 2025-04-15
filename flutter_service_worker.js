'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "49f744e26ff3acc2ecb0e8fe46399d30",
"version.json": "5e82a1b5316677f15a7f3e5a31265f34",
"index.html": "070b7049b1a45d216f0a85ebbb8c7d46",
"/": "070b7049b1a45d216f0a85ebbb8c7d46",
"main.dart.js": "5c22d5aa9c007a11c59ea32e05b96233",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b91d877600be2348c7c5b8e542a586f7",
"assets/AssetManifest.json": "7cfe865376f313c9a7294b1bf6443601",
"assets/NOTICES": "0d5070f49524ef047b50bbc0075aa8cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b83449262be01cddb9b49dd2c0b5e073",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "54ed3a5d4154d38c42658bab9f622b86",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/common_mine.png": "ffdff87a2c3e398db57e227a3f473cb3",
"assets/assets/images/home/icon_home_search.svg": "814a6de9f8a44dc6ffef29428d140a11",
"assets/assets/images/home/icon_home_resource.svg": "17e160f76fc17c95181920ec038402b1",
"assets/assets/images/home/icon_home_bg.svg": "3293767e88e9526a403d2f6b61818dbf",
"assets/assets/images/home/icon_home_wholebg.png": "5f42e1d30354b3e5decfa8a9a5dff2ec",
"assets/assets/images/home/icon_home_add.svg": "623f84d83309bae7cbed42f3f7a2bf52",
"assets/assets/images/home/icon_home_back.svg": "3cc0bb179118f7c9cbf9084012df87e0",
"assets/assets/images/home/icon_home_personage.svg": "273fb308b7620b63bb67a9c437e0d46d",
"assets/assets/images/home/icon_home_logo.svg": "83a5e223954a44c94883892aeecebc2b",
"assets/assets/images/home/icon_home_centerlogo1.png": "00d25cdc69711be05bb3029211ee2a34",
"assets/assets/images/home/icon_home_welcome.png": "00d25cdc69711be05bb3029211ee2a34",
"assets/assets/images/common_mine_selected.png": "e47db5692de5fff191016e8e99cf0a7d",
"assets/assets/images/common/icon_common_horizon_index.svg": "03c2c0dcf5fb2486e8e3ec24489ea420",
"assets/assets/images/common/icon_common_ver_index.svg": "6f2212533490dc0aa79336778b705b1c",
"assets/assets/images/common/icon_common_ver_index0.svg": "3c5c7281b4e2855d79fae34d14126328",
"assets/assets/images/common/icon_common_ver_index3.png": "ee8caa25dbd9cb16e0b7a77b7a5354ce",
"assets/assets/images/main/icon_main_hot.svg": "3334334580fae69a70e54aa32a2b3979",
"assets/assets/images/main/icon_main_search.svg": "3aa9c06f081069451a4b42e9b1cf68c5",
"assets/assets/images/main/icon_main_category_movie.svg": "5f32934212299593a36e0e640bfa7109",
"assets/assets/images/main/icon_shot_3.png": "ac4888a3c75718dbccffda3e620d04d6",
"assets/assets/images/main/icon_shot_2.png": "0a6e00ce198cc688ded194d217cc6f42",
"assets/assets/images/main/icon_shot_1.png": "45dba157e483e30fd2d5041dbfa3a7a4",
"assets/assets/images/main/icon_main_category_movie_un.svg": "bfa902521adaea4501b1fbdde9cf187f",
"assets/assets/images/main/icon_shot_4.png": "d02613a9535d65bf8edd8f280d303835",
"assets/assets/images/main/icon_main_category_tv.svg": "852d232fdae39ba2bd2fe50537d85d2d",
"assets/assets/images/main/icon_channel_tv_2.png": "058e18c6e615ecc8e4dba8a539d8d06e",
"assets/assets/images/main/icon_main_category_cloud.svg": "951e43110d23e34fd6519db1549d0c6d",
"assets/assets/images/main/icon_channel_tv_1.png": "e016f385779b707679bbfdc71c9e5a18",
"assets/assets/images/main/icon_main_logo.png": "62db122da6ad1e30595d7c9b694a5001",
"assets/assets/images/main/icon_main_category_subscription.svg": "168943b64e22d7c265118d742cc26a13",
"assets/assets/images/main/icon_main_category_profile.svg": "3a48dd8f936b2932068e59b7f182199f",
"assets/assets/images/main/icon_main_category_noti.svg": "ae8c744ab932e9de344de617c449ac42",
"assets/assets/images/main/icon_main_star.svg": "3951e607762435768e1ff807bfbe5ae5",
"assets/assets/web/index.html": "7139157379e66264fca1aaed6fa83b62",
"assets/assets/web/js/videojs-contrib-eme.min.js": "45097ba2b84690d53c4fd853b1e5bda9",
"assets/assets/web/js/web-engine-console.min.js": "7a6ed4e7e64e81c8b271c1b9d71c231a",
"assets/assets/web/js/web-engine.min.js": "cc631cecc66fb5eeac19bbcd3a03b6d1",
"assets/assets/web/js/video.js": "508983e31c6ca509faff88328c6f9ff5",
"assets/assets/web/js/video-js.min.css": "d201b1d9ddfc4232f138e8fe544c8dad",
"assets/assets/web/indexvideo.html": "f71d4c573ece5f8257eb92757a07ad75",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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

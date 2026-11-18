// Uygulama olarak yüklenebilmek için; her istek doğrudan internetten gelir, önbellek yok.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request)));

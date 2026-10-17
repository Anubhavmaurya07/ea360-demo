const V='ea360-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(['./app.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'])))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
  e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(V).then(c=>c.put(e.request,cl)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));
});

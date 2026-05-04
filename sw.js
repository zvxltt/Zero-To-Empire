const cacheName = 'Zero-To-Empire';
// Liste tous les fichiers de ton jeu ici (index.html, images, sons, etc.)
const assets = [
  './',
  './index.html', 
];

// Installation : Mise en cache des fichiers
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Stratégie : Répondre avec le cache si hors-ligne, sinon utiliser le réseau
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

/* ==========================================================
   PWA: Service Worker Compartilhado (sw.js)
   ==========================================================
   Este Service Worker é compartilhado entre todas as personas.
   Não é necessário replicar ao criar novas páginas de persona.
   ========================================================== */

const CACHE_NAME = 'whats-personas-v1';
const ASSETS_TO_CACHE = [
  './',
  './maria.html',
  './laura.html',
  './fernanda.html',
  './flavio.html',
  './ricardo.html',
  './maria.jpg',
  './laura.jpg',
  './fernanda.jpg',
  './flavio.jpg',
  './ricardo.jpg',
  './manifest-maria.json',
  './manifest-fernanda.json',
  './manifest-flavio.json',
  './manifest-ricardo.json',
  './manifest-laura.json'
];

// Instalação: pré-cacheia recursos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: network-first com fallback para cache
self.addEventListener('fetch', (event) => {
  // Ignora requisições para APIs externas
  if (event.request.url.includes('/api.') || event.request.url.includes('tokenslp')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cacheia a resposta bem-sucedida
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback para cache quando offline
        return caches.match(event.request);
      })
  );
});

const CACHE_NAME = "union-apps-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/menu.css",
  "/css/aplicativos.css",
  "/img/logo-padrao.png",
  "/img/p2p-beta1.jpg",
  "/img/p2p-beta2.jpg",
  "/img/p2p-beta3.jpg",
  "/img/p2p-ultra1.jpg",
  "/img/p2p-ultra2.jpg",
  "/img/p2p-ultra3.jpg",
  "/img/union-gold1.jpg",
  "/img/union-gold2.jpg",
  "/img/union-gold3.jpg",
  "/img/union-smarters01.jpg",
  "/img/union-smarters02.jpg",
  "/img/union-smarters03.jpg",
  "/home/aplicativos.html",
  "/home/dns.html",
  "/home/tutoriais.html",
  "/home/contato.html"
];

// Instalando o Service Worker e adicionando arquivos ao cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativando o Service Worker e limpando caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Interceptando requisições e retornando do cache, se disponível
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
// Nome do cache
const CACHE_NAME = 'painel-de-aplicativos-v1';

// Arquivos a serem cacheados
const urlsToCache = [
    '/',
  '/index.html',
  '/css/aplicativos.css',
  '/css/contato.css',
  '/css/dns.css',
  '/css/menu.css',
  '/css/tutoriais.css',
  ''/img/logo-padrao.png',
  '/img/192x192.png',
  '/img/512x512.png',
  '/img/p2p-beta1.jpg',
  '/img/p2p-beta2.jpg',
  '/img/p2p-beta3.jpg',
  '/img/p2p-ultra1.jpg',
  '/img/p2p-ultra2.jpg',
  '/img/p2p-ultra3.jpg',
  '/img/union-gold1.jpg',
  '/img/union-gold2.jpg',
  '/img/union-gold3.jpg',
  '/img/union-smarters01.jpg',
  '/img/union-smarters02.jpg',
  '/img/union-smarters03.jpg',
  '/home/aplicativos.html',
  '/home/dns.html',
  '/home/tutoriais.html',
  '/home/contato.html',
  '/js/scripts.js'
];

// Instala o Service Worker e faz o cache dos arquivos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: fazendo cache dos arquivos');
                return cache.addAll(urlsToCache);
            })
    );
});

// Ativa o Service Worker e remove caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: removendo cache antigo', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Intercepta requisições e responde com os arquivos do cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // Se encontrar no cache, retorna o cache
                }
                console.log('Service Worker: arquivo não encontrado no cache, fazendo requisição:', event.request.url);
                return fetch(event.request); // Se não encontrar no cache, faz a requisição normalmente
            }).catch(() => {
                // Aqui você pode adicionar uma página offline personalizada
                return caches.match('/index.html');
            })
    );
});
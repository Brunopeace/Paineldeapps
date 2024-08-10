// Nome do cache
const CACHE_NAME = 'gerenciador-de-clientes-v1';

// Arquivos a serem cacheados
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/img/icon192.png',
    '/js/script.js'
    '/manifest.json'
];

// Instala o Service Worker e faz o cache dos arquivos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Arquivos em cache durante a instalação do SW');
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
                return fetch(event.request); // Se não encontrar no cache, faz a requisição normalmente
            })
    );
});
/* Preis-Check Service Worker: neue Version wird beim Öffnen automatisch geholt, offline läuft die letzte */
const C = 'preischeck-v15b';
const DATEIEN = ['./', './index.html', './preischeck.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './logo.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(DATEIEN))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => { if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, {cache: 'no-cache'}).then(r => { const k = r.clone(); caches.open(C).then(c => c.put(e.request, k)); return r; }).catch(() => caches.match(e.request))); });

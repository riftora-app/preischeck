/* Hustle-Radar Service Worker: neue Version wird beim Öffnen automatisch geholt, offline läuft die letzte. Erkennungs-Dateien (ocr/) werden einmal geladen und dauerhaft gespeichert. */
const C = 'preischeck-v20', OC = 'hustle-ocr-v1';
const DATEIEN = ['./', './index.html', './preischeck.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './logo.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(DATEIEN))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C && x !== OC).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => { const u = new URL(e.request.url); if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.pathname.includes('/ocr/')) { e.respondWith(caches.open(OC).then(c => c.match(e.request).then(m => m || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; })))); return; }
  e.respondWith(fetch(e.request.url, {cache: 'no-cache'}).then(r => { const k = r.clone(); caches.open(C).then(c => c.put(e.request, k)); return r; }).catch(() => caches.match(e.request))); });

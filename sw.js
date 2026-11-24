// Study OS — cache hors ligne de l'interface (les données passent par Supabase)
const C='studyos-v2',CORE=['./','index.html','manifest.webmanifest','config.js','icons/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.hostname.endsWith('supabase.co'))return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(u.origin===location.origin||/jsdelivr|cdnjs|gstatic|googleapis/.test(u.hostname))){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)))});

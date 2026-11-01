/* Service worker minimo dell'app "Conto comune F&G".
   Non salva copie delle pagine: ogni volta si scarica la versione aggiornata da GitHub.
   Serve solo perché Chrome riconosca l'app come installabile. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* nessuna cache: passa tutto alla rete */ });

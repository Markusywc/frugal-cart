self.addEventListener('install', (event) => {
  console.log('FrugalCart Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // Let the browser handle network requests normally
});
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/**
 * Added Service Worker
 **/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.info('[SW 🔨] Registered Service Worker.');
    })
    .catch((err) => {
      console.error('[SW 🔨✖️] Upsss there was an error registering the Service Worker: ', err);
    });
}

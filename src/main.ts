import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function () {
      console.info('Nice! you are doing this shit very well!');
    })
    .catch(function (error) {
      console.error('Upss there is an error here man! :O ', error);
    });
}

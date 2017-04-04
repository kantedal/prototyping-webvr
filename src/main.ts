// /// <reference path="./typings/three.d.ts" />
// /// <reference path="./typings/three-vreffect.d.ts" />
// /// <reference path="./typings/three-vrcontrols.d.ts" />

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

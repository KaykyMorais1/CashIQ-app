import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';

// src/app/app.config.ts
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
    provideRouter(routes), provideClientHydration(), provideAnimationsAsync('noop')
  ],
};

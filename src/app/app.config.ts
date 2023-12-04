import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({ // use the default transition of View transitions API
        skipInitialTransition: true // do not animate the first transition
      }),
    ),
  ]
};

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


/**
 * Application configuration for the Angular application.
 * This configuration sets up the necessary providers for routing,
 * HTTP client functionality, and translation services.
 *
 * @constant {ApplicationConfig} appConfig - The application configuration object.
 * @property {Provider[]} providers - An array of providers used in the application.
 * @property {Provider} provideRouter - Configures the router with defined routes.
 * @property {Provider} provideHttpClient - Sets up the HTTP client for making HTTP requests.
 * @property {Provider} importProvidersFrom - Imports providers from specified modules.
 * @property {HttpClientModule} HttpClientModule - Angular module that provides HTTP services.
 * @property {TranslateModule} TranslateModule - Module for internationalization and translation services.
 * @property {Object} loader - Configuration object for the translation loader.
 * @property {Provider} loader.provide - Specifies the provider for the translation loader.
 * @property {Function} loader.useFactory - Factory function to create an instance of TranslateLoader.
 * @property {Array<Provider>} loader.deps - Dependencies required by the factory function.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};

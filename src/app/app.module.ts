import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', `.json`);
}

export function createLocalizeRouterHttpLoader(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
) {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    {
      ...settings,
      alwaysSetPrefix: false,
      useCachedLang: false,
      /**
       * Select default language
       * @param {string[]} languages
       * @returns {string}
       */
      defaultLangFunction: /* istanbul ignore next */ (languages: string[]) =>
        languages[0],
    },
    http,
    './assets/i18n/locales.json'
  );
}

export const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

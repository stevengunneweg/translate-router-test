import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from './app.module';

/**
 * Shared module
 */
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    LocalizeRouterModule.forChild([]),
  ],
  exports: [CommonModule, TranslateModule, LocalizeRouterModule],
})
export class SharedModule {}

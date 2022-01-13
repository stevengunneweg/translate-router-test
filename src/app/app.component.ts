import { Component } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private readonly translate: TranslateService,
    private readonly translateRoute: LocalizeRouterService,
  ) {}
  
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.translateRoute.changeLanguage(lang);
  }
}

import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeLanguage: string = 'en';

  constructor(public translate: TranslateService) {}

  switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }
}

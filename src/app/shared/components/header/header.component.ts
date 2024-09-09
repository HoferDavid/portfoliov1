import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PopoverComponent } from './popover/popover.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, PopoverComponent, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: string = 'en';
  isPopoverOpen = false;

  constructor(public translate: TranslateService) {}

  switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }



  togglePopover() {
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  // closePopover() {
  //   this.isPopoverOpen = false;
  //   this.pageWrapper?.classList.remove('scrollDisable');
  // }
}

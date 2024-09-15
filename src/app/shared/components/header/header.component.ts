import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PopoverComponent } from './popover/popover.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ScrollService } from '../../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, PopoverComponent, BurgerMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: string = 'en';
  isPopoverOpen = false;


  constructor(public translate: TranslateService, private scrollService: ScrollService) {}


  switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }


  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }


  togglePopover() {
    this.isPopoverOpen = !this.isPopoverOpen;
    if (this.isPopoverOpen) {
      document.body.classList.add('popover-open');
    } else {
      document.body.classList.remove('popover-open');
    }
  }
}









  // private scrollPosition = 0;

// togglePopover() {
//   this.isPopoverOpen = !this.isPopoverOpen;
//   if (this.isPopoverOpen) {
//     this.scrollPosition = window.pageYOffset;
//     document.body.classList.add('popover-open');
//     document.body.style.top = `-${this.scrollPosition}px`;
//   } else {
//     document.body.classList.remove('popover-open');
//     document.body.style.top = '';
//     window.scrollTo(0, this.scrollPosition);
//   }
// }

import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PopoverComponent } from './popover/popover.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ScrollService } from '../../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ TranslateModule, PopoverComponent, BurgerMenuComponent, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: string = 'de';
  isPopoverOpen = false;


  /**
   * Constructor for the component/service.
   * Initializes the TranslateService and ScrollService for managing translations
   * and scrolling functionality.
   *
   * @param {TranslateService} translate - The TranslateService instance used for managing translations.
   * @param {ScrollService} scrollService - The ScrollService instance used for handling scroll actions.
   */
  constructor(
    public translate: TranslateService,
    private scrollService: ScrollService
  ) {}


  /**
   * Switches the active language for translations.
   * Updates the active language and applies the new language using the TranslateService.
   *
   * @param {string} language - The language code to switch to (e.g., 'en' for English, 'de' for German).
   * @returns {void} This method does not return a value.
   */
  switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }


  /**
   * Scrolls to a specific section of the page identified by a fragment identifier.
   * Closes any open popover and removes associated CSS classes before scrolling.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to (e.g., '#section1').
   * @returns {void} This method does not return a value.
   */
  scrollToSection(fragment: string) {
    this.isPopoverOpen = false;
    document.body.classList.remove('popoverOpen');
    this.scrollService.scrollToFragment(fragment);
  }


  /**
   * Toggles the visibility of a popover element.
   * Adds or removes a CSS class from the body based on the current popover state.
   *
   * @returns {void} This method does not return a value.
   */
  togglePopover() {
    this.isPopoverOpen = !this.isPopoverOpen;
    if (this.isPopoverOpen) {
      document.body.classList.add('popoverOpen');
    } else {
      document.body.classList.remove('popoverOpen');
    }
  }
}

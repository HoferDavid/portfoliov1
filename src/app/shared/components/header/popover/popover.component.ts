import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../../../services/scroll.service';
import { HeaderComponent } from '../header.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent {

  /**
   * Constructor for the component/service.
   * Initializes the ScrollService, HeaderComponent, and Router for managing scroll actions,
   * header state, and navigation.
   *
   * @param {ScrollService} scrollService - The ScrollService instance used for handling scroll actions.
   * @param {HeaderComponent} header - The instance of HeaderComponent to manage header-related state.
   * @param {Router} router - The Router instance used for navigating between routes in the application.
   */
  constructor( private scrollService: ScrollService, private header: HeaderComponent, private router: Router ) {}


  /**
   * Scrolls to a specific section of the page after navigating to the home route.
   * Closes any open popover in the header and removes associated CSS classes before scrolling.
   * A timeout is used to ensure that scrolling happens after the navigation is complete.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to (e.g., '#section1').
   * @returns {Promise<void>} A promise that resolves when navigation is complete and scrolling is initiated.
   */
  scrollToSection(fragment: string) {
    this.router.navigate(['/']).then(() => {
      this.header.isPopoverOpen = false;
      document.body.classList.remove('popoverOpen');
      setTimeout(() => {
        this.scrollService.scrollToFragment(fragment);
      }, 100);
    });
  }
}

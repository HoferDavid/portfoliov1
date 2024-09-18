import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactformComponent } from './contactform/contactform.component';
import { ScrollService } from '../../../services/scroll.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ContactformComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  /**
   * Constructor for the component/service.
   * Initializes the ScrollService and Router for managing scroll actions and navigation.
   *
   * @param {ScrollService} scrollService - The ScrollService instance used for handling scroll actions.
   * @param {Router} router - The Router instance used for navigating between routes in the application.
   */
  constructor(private scrollService: ScrollService, private router: Router) {}


  /**
   * Scrolls the window to the top of the page with a smooth scrolling behavior.
   * This method can be used to reset the view when navigating to a new section or page.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to (not used in this implementation).
   * @returns {void} This method does not return a value.
   */
  scrollToSection(fragment: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

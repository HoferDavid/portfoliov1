import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

  /**
   * Constructor for the component.
   *
   * @param {ScrollService} scrollService - The service used to handle scrolling to specific sections of the page.
   */
  constructor(private scrollService: ScrollService) {}


  /**
   * Scrolls the page to a specific section identified by the provided fragment.
   *
   * @param {string} fragment - The ID of the section to scroll to.
   * @returns {void}
   */
  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }
}

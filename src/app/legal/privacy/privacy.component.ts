import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './../legal.scss',
})
export class PrivacyComponent {

  /**
   * Angular lifecycle hook that is called after data-bound properties of a directive are initialized.
   * This method scrolls the window to the top of the page with a smooth scrolling behavior.
   *
   * @returns {void}
   */
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

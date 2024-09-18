import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './../legal.scss',
})
export class ImprintComponent {

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

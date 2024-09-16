import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../../../services/scroll.service';
import { HeaderComponent } from '../header.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {

  constructor(private scrollService: ScrollService, private header: HeaderComponent, private router: Router) {}

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

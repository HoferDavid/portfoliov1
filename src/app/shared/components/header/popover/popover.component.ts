import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../../../services/scroll.service';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {

  constructor(private scrollService: ScrollService, private header: HeaderComponent) {}

  scrollToSection(fragment: string, offset: number = 0) {
    this.header.isPopoverOpen = false;
    document.body.classList.remove('popoverOpen');
    this.scrollService.scrollToFragment(fragment, offset);
  }
}

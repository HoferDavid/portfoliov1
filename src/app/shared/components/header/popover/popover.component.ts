import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }
}

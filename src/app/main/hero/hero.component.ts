import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private scrollService: ScrollService) {}


  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }

}

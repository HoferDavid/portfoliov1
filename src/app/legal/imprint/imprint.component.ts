import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './../legal.scss'
})
export class ImprintComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
    console.log('imprint arrwow');

  }

}

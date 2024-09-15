import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactformComponent } from './contactform/contactform.component';
import { ScrollService } from '../../../services/scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ContactformComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scrollService: ScrollService) {}


  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }

}

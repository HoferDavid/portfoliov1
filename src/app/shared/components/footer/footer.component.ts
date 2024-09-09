import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

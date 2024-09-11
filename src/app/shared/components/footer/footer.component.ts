import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ContactformComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

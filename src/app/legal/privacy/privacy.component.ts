import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './../legal.scss'
})
export class PrivacyComponent {

}

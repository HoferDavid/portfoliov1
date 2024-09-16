import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './../legal.scss'
})
export class ImprintComponent {

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

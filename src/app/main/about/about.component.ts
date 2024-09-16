import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private gsapService: GsapService) {}


  ngOnInit(): void {

//     this.gsapService.animateWithScrollTrigger('.imgContainer', {
//       x: '0%',
//       opacity: 1,
//       duration: 2
//     }, {
//       start: "top bottom",
//       end: "top center",
//       scrub: true,
//       markers: true
//     });
  }
}

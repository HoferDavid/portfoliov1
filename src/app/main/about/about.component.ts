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
    const tl = this.gsapService.createTimeline('#aboutSection', [
      // {
      //   selector: '.textContainer',
      //   properties: { opacity: 1, y: '0%', duration: 1 }
      // },
      {
        selector: '.imgContainer',
        properties: { opacity: 1, y: '0%', duration: 1 }
      }
    ], {
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true
    });
    tl.play();
  }
}

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor() {}

}






// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
// import { GsapService } from '../../services/gsap.service';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [TranslateModule],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.scss'
// })
// export class AboutComponent implements AfterViewInit {

//   constructor(private gsapService: GsapService) {}


//   ngAfterViewInit(): void {
//     const tl = this.gsapService.createTimeline('#aboutSection', [
//       {
//         selector: '.imgContainer',
//         properties: { opacity: 1 }
//       }
//     ], {
//       trigger: '.imgContainer',
//       start: "top 80%",
//       end: "bottom center",
//       scrub: true,
//       markers: true
//     });
//     tl.play();
//     console.log('test');
//   }
// }

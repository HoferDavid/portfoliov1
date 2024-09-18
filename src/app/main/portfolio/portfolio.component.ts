import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  isMobile!: boolean;

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  projects: Project[] = [
    {
      name: 'Join',
      tech: 'JavaScript | Firebase | CSS | HTML',
      description: 'portfolio.projects.join.description',
      media: './assets/video/join.mp4',
      github: 'https://github.com/HoferDavid/join-kanban',
      website: 'https://join.davidhofer.com/'
    },
    {
      name: 'El Pollo Loco',
      tech: 'JavaScript | OOP | Canvas | CSS | HTML',
      description: 'portfolio.projects.polloloco.description',
      media: './assets/video/epl.mp4',
      github: 'https://github.com/HoferDavid/elpolloloco',
      website: 'https://elpolloloco.davidhofer.com/'
    },
    {
      name: 'PokeDex',
      tech: 'JavaScript | Rest-Api | CSS | HTML',
      description: 'portfolio.projects.pokedex.description',
      media: './assets/video/pokedex.mp4',
      github: 'https://github.com/HoferDavid/pokedex',
      website: 'https://pokedex.davidhofer.com'
    }
  ];



  // @ViewChild('videoContainer') videoContainer!: ElementRef;

  // ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   this.setupIntersectionObserver();
  // }

  // setupIntersectionObserver() {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.01
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       const videoElement = entry.target as HTMLVideoElement;

  //       if (entry.isIntersecting) {
  //         const dataSrc = videoElement.dataset['src'];
  //         if (dataSrc) {
  //           videoElement.src = dataSrc;
  //           const playPromise = videoElement.play();

  //           if (playPromise !== undefined) {
  //             playPromise.then(() => {
  //             }).catch((error) => {
  //               console.log('Playback failed:', error);
  //             });
  //           }
  //         }
  //       } else {
  //         videoElement.pause();
  //       }
  //     });
  //   }, options);
  //   const videos = this.videoContainer.nativeElement.querySelectorAll('video');
  //   videos.forEach((video: HTMLVideoElement) => {
  //     observer.observe(video);
  //   });
  // }
}

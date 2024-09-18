import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  isMobile!: boolean;

  @ViewChildren('video') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  ngAfterViewInit(): void {
    // this.playVideos();
    window.addEventListener('scroll', this.onScroll.bind(this));
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
      name: 'Pokédex',
      tech: 'JavaScript | Rest-Api | CSS | HTML',
      description: 'portfolio.projects.pokedex.description',
      media: './assets/video/pokedex.mp4',
      github: 'https://github.com/HoferDavid/pokedex',
      website: 'https://pokedex.davidhofer.com'
    }
  ];


  private onScroll() {
    this.videos.forEach(video => {
      const rect = video.nativeElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.nativeElement.play().catch(err => console.error('failed to play:', err)
        );
      }
    });
  }
}

import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  /**
   * Indicates whether the device is mobile based on the window width.
   *
   * @type {boolean}
   */
  isMobile!: boolean;


  /**
   * A QueryList of video elements in the component.
   * Used to control playback based on visibility in the viewport.
   *
   * @type {QueryList<ElementRef<HTMLVideoElement>>}
   */
  @ViewChildren('video') videos!: QueryList<ElementRef<HTMLVideoElement>>;


  /**
   * Initializes the component and checks if the device is mobile.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }


  /**
   * Lifecycle hook that is called after the view has been initialized.
   * Sets up a scroll event listener to manage video playback.
   *
   * @returns {void}
   */
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }


  /**
   * An array of projects to be displayed in the portfolio.
   * Each project includes details such as name, technology used,
   * description, media source, GitHub link, and website link.
   *
   * @type {Project[]}
   */
  projects: Project[] = [
    {
      name: 'Join',
      tech: 'JavaScript | Firebase | CSS | HTML',
      description: 'portfolio.projects.join.description',
      media: './assets/video/join.mp4',
      github: 'https://github.com/HoferDavid/join-kanban',
      website: 'https://join.davidhofer.com/',
    },
    {
      name: 'El Pollo Loco',
      tech: 'JavaScript | OOP | Canvas | CSS | HTML',
      description: 'portfolio.projects.polloloco.description',
      media: './assets/video/epl.mp4',
      github: 'https://github.com/HoferDavid/elpolloloco',
      website: 'https://elpolloloco.davidhofer.com/',
    },
    {
      name: 'Pokédex',
      tech: 'JavaScript | Rest-Api | CSS | HTML',
      description: 'portfolio.projects.pokedex.description',
      media: './assets/video/pokedex.mp4',
      github: 'https://github.com/HoferDavid/pokedex',
      website: 'https://pokedex.davidhofer.com',
    },
  ];


  /**
   * Handles scroll events to play videos that are currently in view.
   * This method checks each video element's position relative to the viewport
   * and plays it if it is visible.
   *
   * @private
   * @returns {void}
   */
  private onScroll() {
    this.videos.forEach((video) => {
      const rect = video.nativeElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.nativeElement
          .play()
          .catch((err) => console.error('failed to play:', err));
      }
    });
  }
}

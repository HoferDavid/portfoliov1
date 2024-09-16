import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

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
  ]
}

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
      media: './assets/img/join.png',
      github: 'https://github.com/HoferDavid/join-kanban',
      website: 'https://join.davidhofer.com/'
    },
    {
      name: 'El Pollo Loco',
      tech: 'JavaScript | OOP | Canvas | CSS | HTML',
      description: 'portfolio.projects.polloloco.description',
      media: './assets/img/epl.png',
      github: 'https://github.com/HoferDavid/elpolloloco',
      website: 'https://elpolloloco.davidhofer.com/'
    },
    {
      name: 'PokeDex',
      tech: 'JavaScript | Rest-Api | CSS | HTML',
      description: 'portfolio.projects.pokedex.description',
      media: './assets/img/pokedex.png',
      github: 'https://github.com/HoferDavid/pokedex',
      website: 'https://pokedex.davidhofer.com'
    }
  ]
}

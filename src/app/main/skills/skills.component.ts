import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  techStack = [
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Git', icon: 'git' },
    { name: 'Rest-Api', icon: 'api' },
    { name: 'Material Design', icon: 'material' },
    { name: 'Scrum', icon: 'scrum' },
    { name: 'CSS', icon: 'css' },
    { name: 'HTML', icon: 'html' },
  ]
}

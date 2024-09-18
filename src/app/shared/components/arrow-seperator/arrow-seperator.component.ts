import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-seperator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-seperator.component.html',
  styleUrls: ['./arrow-seperator.component.scss']
})
export class ArrowSeperatorComponent {

  @Input() isEven: boolean = false;
}

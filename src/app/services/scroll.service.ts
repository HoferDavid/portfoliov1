import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToFragment(fragment: string): void {
    const element = document.querySelector(fragment);
    if (element) {
      const headerOffset = document.getElementById('headerSection')?.offsetHeight || 0;
      let offset = headerOffset < 80 ? 32 : 48;

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - headerOffset - offset;

      console.log('Header Offset:', headerOffset);
      console.log('Element Position:', elementPosition);
      console.log('Scroll Position:', scrollPosition);
      console.log('my offset', offset);

      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToFragment(fragment: string, offset: number = 0): void {
    const element = document.querySelector(fragment);
    if (element) {
      const headerOffset = document.getElementById('headerSection')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - headerOffset - offset;

      console.log('Header Offset:', headerOffset);
      console.log('Element Position:', elementPosition);
      console.log('Scroll Position:', scrollPosition);


      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}

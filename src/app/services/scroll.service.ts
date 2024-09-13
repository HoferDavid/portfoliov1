import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToFragment(fragment: string): void {

    const element = document.querySelector(fragment);
    if (element) {
      const headerOffset = document.getElementById('headerSection')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}

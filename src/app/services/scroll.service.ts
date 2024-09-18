import { Injectable } from '@angular/core';

/**
 * Service for handling scroll actions within the application.
 * This service provides functionality to scroll smoothly to specific elements identified by fragment identifiers.
 *
 * @@Injectable({
 *   providedIn: 'root'
 * })
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  
  /**
   * Scrolls the window to a specific fragment on the page.
   * This method calculates the scroll position based on the fragment identifier,
   * taking into account any fixed headers that might obscure the target element.
   *
   * @param {string} fragment - The fragment identifier of the element to scroll to (e.g., '#section1').
   * @returns {void} This method does not return a value.
   */
  scrollToFragment(fragment: string): void {
    const element = document.querySelector(fragment);
    if (element) {
      const headerOffset =
        document.getElementById('headerSection')?.offsetHeight || 0;
      let offset = headerOffset < 80 ? 32 : 48;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - headerOffset - offset;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }
}

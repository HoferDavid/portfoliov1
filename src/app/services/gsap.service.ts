import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: 'power4.out',
});

/**
 * Service for managing animations using GSAP (GreenSock Animation Platform).
 * This service provides functionality to create timelines with scroll-triggered animations.
 *
 * @class GsapService
 */
@Injectable({
  providedIn: 'root',
})
export class GsapService {

  /**
   * Creates a GSAP timeline with specified animations and scroll trigger options.
   * This method allows for chaining multiple animations to be triggered on scroll events.
   *
   * @param {string} selector - The CSS selector for the element that will trigger the scroll animations.
   * @param {Array<Object>} animations - An array of animation objects, each containing a selector and properties for the animation.
   * @param {Object} scrollTriggerOptions - Configuration options for the ScrollTrigger.
   * @returns {Timeline} The created GSAP timeline instance.
   */
  createTimeline(selector: string, animations: any[], scrollTriggerOptions: any) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        ...scrollTriggerOptions,
      },
    });
    animations.forEach((animation) => {
      timeline.to(animation.selector, animation.properties);
    });
    return timeline;
  }
}

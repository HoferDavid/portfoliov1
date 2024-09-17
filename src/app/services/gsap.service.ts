import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  createTimeline(selector:string, animations: any[], scrollTriggerOptions: any) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        ...scrollTriggerOptions
      }
    });
    animations.forEach(animation => {
      timeline.to(animation.selector, animation.properties);
    });
    return timeline;
  }
}

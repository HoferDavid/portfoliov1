import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  animate(selector: string, properties: any) {
    gsap.to(selector, properties);
  }


  animateWithScrollTrigger(selector: string, properties: any) {
    gsap.to(selector, {
      ...properties,
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    });
  }
}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import AOS from 'aos';
import 'aos/dist/aos.css';

function initializeAOS() {
  const isMobile = window.innerWidth < 768;
  const offsetValue = isMobile ? window.innerHeight * 0.1 : window.innerHeight * 0.3;

  AOS.init({
    offset: offsetValue,
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
}


initializeAOS();


window.addEventListener('resize', initializeAOS);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

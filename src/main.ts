import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initializes the Animate On Scroll (AOS) library.
 * This function configures AOS settings based on the current viewport size,
 * adjusting the offset value for mobile and desktop devices.
 *
 * @function initializeAOS
 * @returns {void} This function does not return a value.
 */
function initializeAOS() {
  const isMobile = window.innerWidth < 768;
  const offsetValue = isMobile ? window.innerHeight * 0.1 : window.innerHeight * 0.3;

  AOS.init({
    offset: offsetValue,
    duration: 500,
    once: true,
    easing: 'ease-in-out',
  });
}


initializeAOS();


window.addEventListener('resize', initializeAOS);


/**
 * Bootstraps the Angular application with the specified root component and configuration.
 * This function handles any errors that occur during the bootstrap process.
 *
 * @function bootstrapApplication
 * @param {Type<any>} AppComponent - The root component of the Angular application.
 * @param {ApplicationConfig} appConfig - The configuration object for the application.
 * @returns {Promise<void>} A promise that resolves when the application is bootstrapped.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {

  /**
   * Injects the FormBuilder service for creating reactive forms.
   *
   * @type {FormBuilder}
   */
  fb = inject(FormBuilder);


  /**
   * Defines the structure and validation rules for the registration form.
   *
   * @type {FormGroup}
   */
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
    checkbox: [false, [Validators.requiredTrue]],
  });


  /**
   * Injects the HttpClient service for making HTTP requests.
   *
   * @type {HttpClient}
   */
  http = inject(HttpClient);


  /**
   * Configuration object for the POST request.
   *
   * @type {Object}
   * @property {string} endPoint - The URL endpoint for the POST request.
   * @property {Function} body - A function that generates the request body from the form payload.
   * @property {Object} options - Additional options for the HTTP request.
   */
  post = {
    endPoint: 'https://davidhofer.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
   * Handles the form submission when the user clicks the submit button.
   * If the form is valid, it sends a POST request with the form data.
   * Upon successful response, it displays a feedback popup and resets the form.
   *
   * @returns {void} This method does not return a value.
   */
  onSubmit() {
    if (this.registrationForm.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.registrationForm.value))
        .subscribe({
          next: (response) => {
            this.feedbackPopup();
            this.registrationForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }


  /**
   * Displays a feedback popup for a short duration after a successful form submission.
   *
   * @returns {void} This method does not return a value.
   */
  feedbackPopup() {
    let popover = document.getElementById('feedbackPopup');
    popover?.classList.add('feedbackPopupOpen');
    setTimeout(() => {
      popover?.classList.remove('feedbackPopupOpen');
    }, 2000);
  }
}

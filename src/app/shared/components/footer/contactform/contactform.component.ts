import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  fb = inject(FormBuilder);


  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
    checkbox: [false, [Validators.requiredTrue]],
  });


  http = inject(HttpClient);


  post = {
    endPoint: 'https://xtestngc39evtg7cew085.davidhofer.com/sendMail.php', // change to davidhofer.com/sendMail.php
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


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
          complete: () => console.info('send post complete'),
        });
    }
  }


  feedbackPopup() {
    let popover = document.getElementById('feedbackPopup');
    popover?.classList.add('feedbackPopupOpen');
    setTimeout(() => {
      popover?.classList.remove('feedbackPopupOpen');
    }, 2000);
  }
}

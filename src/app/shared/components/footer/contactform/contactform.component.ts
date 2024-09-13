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

  mailTest = false; // After testing set to false or delete it

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
            // Add more functions here
            console.log('send ok');
            this.registrationForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  onCheckboxChange() {
    console.log('Checkbox status changed:', this.registrationForm.get('checkbox')?.value);
  }
}

// onSubmittest() {
//   if (this.isChecked) {
//     this.handleChecked();
//   } else {
//     this.handleUnchecked();
//   }
// }

// handleChecked() {
//   console.log('Checkbox is checked');
//   // Weitere Logik für den gecheckten Zustand
// }

// handleUnchecked() {
//   console.log('Checkbox is not checked');
//   // Weitere Logik für den nicht-gecheckten Zustand
// }

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor() {
    console.log('ischecked is: ', this.isChecked);
  }

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: ''
  }

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Add more functions here
            console.log('something wrong');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
        // If wanted it's possible to delete else if after testing
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }



  isChecked: boolean = false;

  onCheckboxChange() {
    // Optional: Führe zusätzliche Logik beim Ändern des Checkbox-Status aus
    console.log('Checkbox status changed. ischecked is', this.isChecked);
  }

  onSubmittest() {
    if (this.isChecked) {
      this.handleChecked();
    } else {
      this.handleUnchecked();
    }
  }

  handleChecked() {
    console.log('Checkbox is checked');
    // Weitere Logik für den gecheckten Zustand
  }

  handleUnchecked() {
    console.log('Checkbox is not checked');
    // Weitere Logik für den nicht-gecheckten Zustand
  }
}

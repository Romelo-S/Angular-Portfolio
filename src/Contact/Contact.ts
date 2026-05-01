import { Component, NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule, FormBuilder, NgModel} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'ContactPage',
    templateUrl: './contact.html',
    styleUrl: './contact.css',
    imports: [FormsModule,ReactiveFormsModule]
})



export class ContactPage{
//  constructor(private http: HttpClient) {}

//   formData = { name: '', email: '', message: '' };

//   sendEmail() {
//     this.http.post('https://formspree.io/f/xwvayzdg', this.formData)
//       .subscribe({
//         next: () => alert('Email sent successfully!'),
//         error: () => alert('Failed to send email.')
//       });
//   }
};
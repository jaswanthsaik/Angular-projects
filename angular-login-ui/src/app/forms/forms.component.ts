import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  name: string = '';
  email: string = '';

  onSubmit() {
    // Handle form submission logic here
    const formData = {
      name: this.name,
      email: this.email
    };
    
    // Display an alert with the submitted form values
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);

    // Clear the form fields after submission
    this.name = '';
    this.email = '';
  }
}

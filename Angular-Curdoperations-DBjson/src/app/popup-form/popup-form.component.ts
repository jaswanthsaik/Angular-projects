import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent {
  @Input() data: any;
  @Output() formSubmitted = new EventEmitter<any>();

  name: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
  dob: string = '';

  ngOnChanges() {
    if (this.data) {
      this.name = this.data.name;
      this.email = this.data.email;
      this.address = this.data.address;
      this.phone = this.data.phone;
      this.dob = this.data.dob;
    }
  }

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone,
      dob: this.dob
    };
    this.formSubmitted.emit(formData);
  }
}

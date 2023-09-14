import { Component } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showForm = false;

  constructor(private apiService: ApiService) { }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submitForm(formData: any) {
    this.apiService.postProduct(formData).subscribe(() => {
      this.closeForm();
      // Refresh data list if needed
    });
  }
}

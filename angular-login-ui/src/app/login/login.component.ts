import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('/api/login', credentials)
      .subscribe({
        next: (response: any) => {
          // Assuming login is successful, store the user token in local storage or session
          localStorage.setItem('token', response.token);

          // Navigate to the dashboard or another protected page
          this.router.navigate(['/dashboard']);
        },
        // error: (error: any) => {
        //   // Handle login error
        //   console.error(error);
        //   this.showErrorMessage = error.error;
        // }
      });
      if (this.username === 'correct_username' && this.password === 'correct_password') {
        // Login successful
        this.showSuccessMessage = true;
        this.showErrorMessage = false;
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['/dashboard']);
        }, 3000); 
      } else {
        // Invalid username or password
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      }
  }
}

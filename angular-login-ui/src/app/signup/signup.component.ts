import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  signup() {
    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    this.http.post('/api/signup', newUser)
      .subscribe({
        next: (response: any) => {
          // User creation successful, navigate to the login page
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          // Handle user creation error
          console.error(error);
          this.errorMessage = error.error;
        }
      });
  }
}

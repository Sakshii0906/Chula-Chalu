
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}

  isRegistering: boolean = false;

  role: string = 'Customer';
  name: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

 login() {
  if (!this.email || !this.password) {
    alert('Please enter email and password.');
    return;
  }

  alert('Login Successful! Welcome to Chula Chalu.');

  if (this.role === 'Customer') {
    this.router.navigate(['/dashboard']);
  } else {
    alert(this.role + ' dashboard will be available soon.');
  }
}
  register() {
    if (!this.name || !this.phone || !this.email ||
        !this.password || !this.confirmPassword) {
      alert('Please fill all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Registration Successful! Please Login.');

    this.isRegistering = false;
    this.name = '';
    this.phone = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  isRegistering = false;

  role = '';
  name = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  login() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.role) {
      alert('Please select your role.');
      return;
    }

    if (!this.email || !emailPattern.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.password || this.password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

   if (this.role === 'Customer') {
  const customer = this.customerService.getCustomers().find(
    c => c.email.toLowerCase() === this.email.trim().toLowerCase()
  );

  if (!customer) {
    alert('Customer account not found. Please register first.');
    return;
  }

  localStorage.setItem('currentCustomer', JSON.stringify({
    name: customer.name,
    phone: customer.phone,
    email: customer.email
  }));

  this.router.navigate(['/dashboard']);
}
    else if (this.role === 'Restaurant Owner') {
      this.router.navigate(['/restaurant-owner-dashboard']);
    }
    else if (this.role === 'Delivery Partner') {
      this.router.navigate(['/delivery-partner-dashboard']);
    }
    else if (this.role === 'Admin') {
      this.router.navigate(['/admin-dashboard']);
    }
  }

  register() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!this.role) {
      alert('Please select your role.');
      return;
    }

    if (!this.name || this.name.trim().length < 2) {
      alert('Please enter a valid name.');
      return;
    }

    if (!phonePattern.test(this.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!emailPattern.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.password || this.password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }

    // Save customer details only for Customer registration
    if (this.role === 'Customer') {
      const registered = this.customerService.registerCustomer({
        name: this.name.trim(),
        phone: this.phone,
        email: this.email.trim()
      });

      if (!registered) {
        alert('An account with this email already exists.');
        return;
      }
    }

    alert('Registration successful! You can now login.');

    this.name = '';
    this.phone = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = '';

    this.isRegistering = false;
  }

}

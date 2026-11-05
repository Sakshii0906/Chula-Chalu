
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: any[] = [];

  constructor() {
    const savedCustomers = localStorage.getItem('customers');

    if (savedCustomers) {
      try {
        this.customers = JSON.parse(savedCustomers);
      } catch {
        this.customers = [];
        this.saveCustomers();
      }
    }
  }

  getCustomers() {
    return this.customers;
  }

  registerCustomer(customer: any) {
    const existingCustomer = this.customers.find(
      c => c.email.toLowerCase() === customer.email.toLowerCase()
    );

    if (existingCustomer) {
      return false;
    }

    const nextId = this.customers.length > 0
      ? Math.max(...this.customers.map(c => c.id)) + 1
      : 1;

    this.customers.push({
      id: nextId,
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      active: true
    });

    this.saveCustomers();
    return true;
  }

  updateCustomer(updatedCustomer: any) {
    const index = this.customers.findIndex(
      c => c.id === updatedCustomer.id
    );

    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer };
      this.saveCustomers();
    }
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(
      c => c.id !== id
    );

    this.saveCustomers();
  }

  saveCustomers() {
    localStorage.setItem(
      'customers',
      JSON.stringify(this.customers)
    );
  }
}

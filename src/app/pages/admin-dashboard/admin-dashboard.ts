
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order';
import { RestaurantService } from '../../services/restaurant';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
  editingRestaurantId: number | null = null;

  selectedCustomerPhone: string | null = null;
 constructor(
  private orderService: OrderService,
  private restaurantService: RestaurantService,
  private customerService: CustomerService
) {}
newRestaurant = {
  name: '',
  area: '',
  cuisine: '',
  rating: 4.0,
  image: ''
};
newCustomer = {
  name: '',
  email: '',
  phone: ''
};
areas: string[] = [
  'Alkapuri',
  'Akota',
  'Old Padra Road',
  'Gotri',
  'Vasna-Bhayli',
  'Manjalpur',
  'Tarsali',
  'Makarpura',
  'Atladara',
  'Fatehgunj',
  'Karelibaug',
  'Nizampura',
  'Sama-Savli Road',
  'Harni',
  'Waghodia Road',
  'Sayajigunj',
  'Subhanpura',
  'Gorwa'
];
addRestaurant() {
  if (
    !this.newRestaurant.name.trim() ||
    !this.newRestaurant.area ||
    !this.newRestaurant.cuisine.trim()
  ) {
    alert('Please fill all required restaurant details.');
    return;
  }

  this.restaurantService.addRestaurant({
    ...this.newRestaurant,
    image: this.newRestaurant.image.trim() ||
      'https://placehold.co/500x350?text=Restaurant'
  });

  alert('Restaurant added successfully!');

  this.newRestaurant = {
    name: '',
    area: '',
    cuisine: '',
    rating: 4.0,
    image: ''
  };
}
editRestaurant(restaurant: any) {
  this.editingRestaurantId = restaurant.id;

  this.newRestaurant = {
    name: restaurant.name,
    area: restaurant.area,
    cuisine: restaurant.cuisine,
    rating: restaurant.rating,
    image: restaurant.image
  };

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
updateRestaurant() {
  if (
    !this.newRestaurant.name.trim() ||
    !this.newRestaurant.area ||
    !this.newRestaurant.cuisine.trim()
  ) {
    alert('Please fill all required restaurant details.');
    return;
  }

  const restaurant = {
    ...this.newRestaurant,
    id: this.editingRestaurantId,
    active: this.restaurants.find(
      r => r.id === this.editingRestaurantId
    )?.active ?? true
  };

  this.restaurantService.updateRestaurant(restaurant);

  alert('Restaurant updated successfully!');

  this.editingRestaurantId = null;

  this.newRestaurant = {
    name: '',
    area: '',
    cuisine: '',
    rating: 4.0,
    image: ''
  };
}
  // Order management
  get orders() {
    return this.orderService.getOrders();
  }

  get totalOrders() {
    return this.orders.length;
  }

  get totalCustomers() {
    return new Set(this.orders.map(order => order.customerPhone)).size;
  }

  get pendingOrders() {
    return this.orders.filter(
      order => order.status === 'Order Placed'
    ).length;
  }

  get completedOrders() {
    return this.orders.filter(
      order => order.status === 'Delivered'
    ).length;
  }

  getRestaurants(order: any): string {
    return [...new Set(
      order.items.map((item: any) => item.restaurantName)
    )].join(', ');
  }

  // Restaurant management
  get restaurants() {
    return this.restaurantService.getRestaurants();
  }

  toggleRestaurant(restaurant: any) {
    restaurant.active = !restaurant.active;
    this.restaurantService.updateRestaurant(restaurant);
  }

  deleteRestaurant(id: number) {
    const confirmDelete = window.confirm(
      'Are you sure you want to remove this restaurant?'
    );

    if (confirmDelete) {
      this.restaurantService.deleteRestaurant(id);
    }
  }

  // Customer Management
  get customers() {
    return this.customerService.getCustomers();
  }

  get totalRegisteredCustomers() {
    return this.customers.length;
  }

  toggleCustomer(customer: any) {
    customer.active = !customer.active;
    this.customerService.updateCustomer(customer);
  }

  deleteCustomer(id: number) {
    const confirmDelete = window.confirm(
      'Are you sure you want to remove this customer?'
    );

    if (confirmDelete) {
      this.customerService.deleteCustomer(id);
    }
  }
  addCustomer() {
  if (
    !this.newCustomer.name.trim() ||
    !this.newCustomer.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.newCustomer.email) ||
    !/^[0-9]{10}$/.test(this.newCustomer.phone)
  ) {
    alert('Please enter valid customer details.');
    return;
  }

  const added = this.customerService.registerCustomer({
    name: this.newCustomer.name.trim(),
    email: this.newCustomer.email.trim(),
    phone: this.newCustomer.phone
  });

  if (!added) {
    alert('A customer with this email already exists.');
    return;
  }

  alert('Customer added successfully!');

  this.newCustomer = {
    name: '',
    email: '',
    phone: ''
  };
}
viewCustomerOrders(customer: any) {
  this.selectedCustomerPhone =
    this.selectedCustomerPhone === customer.phone
      ? null
      : customer.phone;
}

getCustomerOrders(customer: any) {
  return this.orders.filter(
    order => order.phone === customer.phone
  );
}

}

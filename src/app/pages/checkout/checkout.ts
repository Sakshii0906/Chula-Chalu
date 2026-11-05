
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Cart } from '../../services/cart';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  customerName = '';
  phone = '';
  address = '';
  paymentMethod = 'COD';

  deliveryCharge = 30;

  constructor(
    public cart: Cart,
    private router: Router,
    private orderService: OrderService
  ) {}

  get grandTotal(): number {
    return this.cart.totalAmount + this.deliveryCharge;
  }

  placeOrder() {

    if (!this.customerName || !this.phone || !this.address) {
      alert('Please fill all delivery details.');
      return;
    }

    if (!/^[0-9]{10}$/.test(this.phone)) {
      alert('Please enter a valid 10 digit phone number.');
      return;
    }

    if (this.cart.totalItems === 0) {
      alert('Your cart is empty!');
      this.router.navigate(['/menu']);
      return;
    }

    if (this.paymentMethod === 'ONLINE') {
      alert('Online payment integration will be added later. Please select Cash on Delivery.');
      return;
    }

    
const newOrder = {
  orderId: 'CC' + Date.now(),
  customerName: this.customerName,
  phone: this.phone,
  customerEmail: JSON.parse(localStorage.getItem('currentCustomer') || '{}').email || '',
  address: this.address,

  // Keep restaurant details with every ordered item
  items: this.cart.cartItems.map(item => ({
    ...item
  })),

  paymentMethod: this.paymentMethod,
  subtotal: this.cart.totalAmount,
  deliveryCharge: this.deliveryCharge,
  grandTotal: this.grandTotal,
  status: 'Order Placed',
  orderDate: new Date()
};

// Save the same order in shared services
this.cart.lastOrder = newOrder;
this.cart.orderHistory.unshift(newOrder);
this.orderService.addOrder(newOrder);

// Clear cart after successful order
this.cart.cartItems = [];

// Navigate to confirmation page
this.router.navigate(['/order-confirmation']);
  }
}

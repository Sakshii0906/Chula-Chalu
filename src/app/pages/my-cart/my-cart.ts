
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-cart.html',
  styleUrl: './my-cart.css'
})
export class MyCart {

  constructor(public cart: Cart) {}

  increase(item: any) {
    this.cart.increaseQuantity(item.id, item.restaurantId);
  }

  decrease(item: any) {
    this.cart.decreaseQuantity(item.id, item.restaurantId);
  }

  remove(item: any) {
    this.cart.removeFromCart(item.id, item.restaurantId);
  }
}

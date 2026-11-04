
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

  increase(id: number) {
    this.cart.increaseQuantity(id);
  }

  decrease(id: number) {
    this.cart.decreaseQuantity(id);
  }

  remove(id: number) {
    this.cart.removeFromCart(id);
  }
}

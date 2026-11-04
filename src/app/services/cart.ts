import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cartItems: any[] = [];

  addToCart(item: any) {
    const existingItem = this.cartItems.find(
      cartItem => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        ...item,
        quantity: 1
      });
    }
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(
      item => item.id !== id
    );
  }

  increaseQuantity(id: number) {
    const item = this.cartItems.find(item => item.id === id);

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(id: number) {
    const item = this.cartItems.find(item => item.id === id);

    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  get totalAmount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  get totalItems(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
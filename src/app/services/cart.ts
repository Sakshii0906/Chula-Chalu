
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cartItems: any[] = [];
  lastOrder: any = null;
  orderHistory: any[] = [];

  addToCart(item: any): boolean {
    if (
      this.cartItems.length > 0 &&
      this.cartItems[0].restaurantArea &&
      item.restaurantArea &&
      this.cartItems[0].restaurantArea !== item.restaurantArea
    ) {
      alert(
        'You can order from restaurants in only one area at a time. Please clear your cart to change the area.'
      );
      return false;
    }

    const existingItem = this.cartItems.find(
      cartItem =>
        cartItem.id === item.id && cartItem.restaurantId === item.restaurantId
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }

    return true;
  }

  removeFromCart(id: number, restaurantId: number) {
    this.cartItems = this.cartItems.filter(
      item => !(item.id === id && item.restaurantId === restaurantId)
    );
  }

  increaseQuantity(id: number, restaurantId: number) {
    const item = this.cartItems.find(
      item => item.id === id && item.restaurantId === restaurantId
    );

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(id: number, restaurantId: number) {
    const item = this.cartItems.find(
      item => item.id === id && item.restaurantId === restaurantId
    );

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

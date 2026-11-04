
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './restaurant-menu.html',
  styleUrl: './restaurant-menu.css'
})
export class RestaurantMenu {

  restaurantName = 'Pizza Corner';

  constructor(public cart: Cart) {}

  menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic cheese pizza with tomato sauce',
      price: 199,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500'
    },
    {
      id: 2,
      name: 'Farmhouse Pizza',
      description: 'Pizza with onion, capsicum and tomato',
      price: 299,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'
    },
    {
      id: 3,
      name: 'Veg Burger',
      description: 'Crispy vegetable patty with fresh vegetables',
      price: 129,
      category: 'Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    {
      id: 4,
      name: 'French Fries',
      description: 'Crispy and salted french fries',
      price: 99,
      category: 'Sides',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500'
    },
    {
      id: 5,
      name: 'Cold Coffee',
      description: 'Chilled creamy cold coffee',
      price: 119,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500'
    }
  ];

  addToCart(item: any) {
    this.cart.addToCart(item);
    alert(item.name + ' added to cart!');
  }
}

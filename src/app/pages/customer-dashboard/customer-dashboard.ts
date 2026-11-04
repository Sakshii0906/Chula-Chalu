import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css'
})
export class CustomerDashboard {

  selectedArea: string = '';

  restaurants = [
    {
      id: 1,
      name: 'Pizza Corner',
      area: 'Alkapuri',
      cuisine: 'Pizza, Italian',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
    },
    {
      id: 2,
      name: 'The Burger House',
      area: 'Gotri',
      cuisine: 'Burgers, Fast Food',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    {
      id: 3,
      name: 'Spice Garden',
      area: 'Manjalpur',
      cuisine: 'Indian, Punjabi',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'
    },
    {
      id: 4,
      name: 'Cafe Coffee Day',
      area: 'Fatehgunj',
      cuisine: 'Cafe, Beverages',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500'
    },
    {
      id: 5,
      name: 'South Express',
      area: 'Akota',
      cuisine: 'South Indian',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500'
    },
    {
      id: 6,
      name: 'Food Junction',
      area: 'Alkapuri',
      cuisine: 'Chinese, Fast Food',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500'
    }
  ];

  filteredRestaurants = this.restaurants;

  filterRestaurants() {
    this.filteredRestaurants = this.restaurants.filter(
      restaurant => restaurant.area === this.selectedArea
    );
  }

  viewMenu(name: string) {
    alert('Opening menu for ' + name);
  }

  logout() {
    window.location.href = '/';
  }
}
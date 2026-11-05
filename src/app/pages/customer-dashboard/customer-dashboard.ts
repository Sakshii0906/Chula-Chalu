import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css'
})
export class CustomerDashboard {
  selectedArea = '';
  filteredRestaurants: any[] = [];

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

  constructor(private restaurantService: RestaurantService) {
    const savedArea = localStorage.getItem('selectedArea');
    if (savedArea) {
      this.selectedArea = savedArea;
      this.filterRestaurants();
    }
  }

  get restaurants() {
    return this.restaurantService.getRestaurants();
  }

  onImageError(event: Event) {
    const image = event.target as HTMLImageElement;
    image.onerror = null;
    image.src = 'https://placehold.co/500x350?text=Restaurant+Image';
  }

  filterRestaurants() {
    localStorage.setItem('selectedArea', this.selectedArea);

    this.filteredRestaurants = this.selectedArea
      ? this.restaurants.filter(
          restaurant =>
            restaurant.area === this.selectedArea &&
            restaurant.active !== false
        )
      : [];
  }

  logout() {
    localStorage.removeItem('selectedArea');
    window.location.href = '/login';
  }
}

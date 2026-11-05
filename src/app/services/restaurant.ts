
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: any[] = [
    {
      id: 1,
      name: 'Pizza Corner',
      area: 'Alkapuri',
      cuisine: 'Pizza, Italian',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      active: true
    },
    {
      id: 2,
      name: 'The Burger House',
      area: 'Gotri',
      cuisine: 'Burgers, Fast Food',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      active: true
    },
    {
      id: 3,
      name: 'Spice Garden',
      area: 'Manjalpur',
      cuisine: 'Indian, Punjabi',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
      active: true
    },
    {
      id: 4,
      name: 'Cafe Coffee Day',
      area: 'Fatehgunj',
      cuisine: 'Cafe, Beverages',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500',
      active: true
    },
    {
      id: 5,
      name: 'South Express',
      area: 'Akota',
      cuisine: 'South Indian',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500',
      active: true
    },
    {
      id: 6,
      name: 'Food Junction',
      area: 'Alkapuri',
      cuisine: 'Chinese, Fast Food',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500',
      active: true
    },
    {
      id: 7,
      name: 'Urban Bites',
      area: 'Old Padra Road',
      cuisine: 'Continental, Fast Food',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500',
      active: true
    },
    {
      id: 8,
      name: 'Green Leaf Cafe',
      area: 'Vasna-Bhayli',
      cuisine: 'Cafe, Healthy Food',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
      active: true
    },
    {
      id: 9,
      name: 'Tasty Treat',
      area: 'Tarsali',
      cuisine: 'Indian, Snacks',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
      active: true
    },
    {
      id: 10,
      name: 'Royal Kitchen',
      area: 'Makarpura',
      cuisine: 'North Indian',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
      active: true
    },
    {
      id: 11,
      name: 'Food Paradise',
      area: 'Atladara',
      cuisine: 'Indian, Chinese',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
      active: true
    },
    {
      id: 12,
      name: 'The Sandwich Hub',
      area: 'Karelibaug',
      cuisine: 'Sandwiches, Fast Food',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500',
      active: true
    },
    {
      id: 13,
      name: 'Spicy Spoon',
      area: 'Nizampura',
      cuisine: 'Indian, Punjabi',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500',
      active: true
    },
    {
      id: 14,
      name: 'Cafe Delight',
      area: 'Sama-Savli Road',
      cuisine: 'Cafe, Desserts',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500',
      active: true
    },
    {
      id: 15,
      name: 'Food Station',
      area: 'Harni',
      cuisine: 'Chinese, Fast Food',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500',
      active: true
    },
    {
      id: 16,
      name: 'Desi Zaika',
      area: 'Waghodia Road',
      cuisine: 'Gujarati, North Indian',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
      active: true
    },
    {
      id: 17,
      name: 'The Food Studio',
      area: 'Sayajigunj',
      cuisine: 'Pizza, Burgers',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      active: true
    },
    {
      id: 18,
      name: 'Spice Route',
      area: 'Subhanpura',
      cuisine: 'Indian, Chinese',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
      active: true
    },
    {
      id: 19,
      name: 'Fresh Bites',
      area: 'Gorwa',
      cuisine: 'Healthy Food, Snacks',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
      active: true
    }
  ];
 constructor() {
  const savedRestaurants = localStorage.getItem('restaurants');

  if (savedRestaurants) {
    try {
      this.restaurants = JSON.parse(savedRestaurants);
    } catch {
      this.saveRestaurants();
    }
  } else {
    this.saveRestaurants();
  }
}
  getRestaurants() {
    return this.restaurants;
  }

 addRestaurant(restaurant: any) {
  const nextId = this.restaurants.length > 0
    ? Math.max(...this.restaurants.map(r => r.id)) + 1
    : 1;

  this.restaurants.push({
    ...restaurant,
    id: nextId,
    active: true
  });

  this.saveRestaurants();
}

updateRestaurant(updatedRestaurant: any) {
  const index = this.restaurants.findIndex(
    r => r.id === updatedRestaurant.id
  );

  if (index !== -1) {
    this.restaurants[index] = { ...updatedRestaurant };
    this.saveRestaurants();
  }
}

deleteRestaurant(id: number) {
  this.restaurants = this.restaurants.filter(
    r => r.id !== id
  );
  this.saveRestaurants();
}

private saveRestaurants() {
  localStorage.setItem(
    'restaurants',
    JSON.stringify(this.restaurants)
  );
}
}
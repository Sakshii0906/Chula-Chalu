import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CustomerDashboard } from './pages/customer-dashboard/customer-dashboard';
import { RestaurantMenu } from './pages/restaurant-menu/restaurant-menu';
import { MyCart } from './pages/my-cart/my-cart';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: CustomerDashboard },
  { path: 'menu', component: RestaurantMenu },
  { path: 'cart', component: MyCart }
];
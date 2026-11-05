
import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { CustomerDashboard } from './pages/customer-dashboard/customer-dashboard';
import { RestaurantMenu } from './pages/restaurant-menu/restaurant-menu';
import { MyCart } from './pages/my-cart/my-cart';
import { Checkout } from './pages/checkout/checkout';
import { OrderConfirmation } from './pages/order-confirmation/order-confirmation';
import { MyOrders } from './pages/my-orders/my-orders';
import { RestaurantOwnerDashboard } from './pages/restaurant-owner-dashboard/restaurant-owner-dashboard';
import { DeliveryPartnerDashboard } from './pages/delivery-partner-dashboard/delivery-partner-dashboard';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: CustomerDashboard },
  { path: 'menu', component: RestaurantMenu },
  { path: 'cart', component: MyCart },
  { path: 'checkout', component: Checkout },
  { path: 'order-confirmation', component: OrderConfirmation },
  { path: 'my-orders', component: MyOrders },
  { path: 'restaurant-owner-dashboard', component: RestaurantOwnerDashboard },
  {
    path: 'delivery-partner-dashboard',
    component: DeliveryPartnerDashboard
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboard
  }
];

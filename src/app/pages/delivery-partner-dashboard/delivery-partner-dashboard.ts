
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-delivery-partner-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './delivery-partner-dashboard.html',
  styleUrls: ['./delivery-partner-dashboard.css']
})
export class DeliveryPartnerDashboard {

  deliveryPartnerName = 'Delivery Partner';

  constructor(private orderService: OrderService) {}

  // Orders waiting for a delivery partner
  get availableOrders() {
    return this.orderService.getOrders().filter(
      order =>
        order.status === 'Ready for Pickup' &&
        !order.deliveryPartner
    );
  }

  // Orders assigned to this delivery partner
  get assignedOrders() {
    return this.orderService.getOrders().filter(
      order =>
        order.deliveryPartner === this.deliveryPartnerName &&
        order.status === 'Out for Delivery'
    );
  }

  get readyOrders() {
    return this.availableOrders;
  }

  get activeOrders() {
    return this.assignedOrders;
  }

  get totalOrders() {
    return this.readyOrders.length + this.activeOrders.length;
  }

  startDelivery(order: any) {
    this.acceptDelivery(order);
  }

  acceptDelivery(order: any) {
  const assigned = this.orderService.assignDeliveryPartner(
    order.orderId,
    this.deliveryPartnerName
  );

  if (assigned) {
    alert('Delivery accepted successfully!');
  } else {
    alert('This order is no longer available for pickup.');
  }
}

  completeDelivery(order: any) {
  const updated = this.orderService.updateDeliveryOrderStatus(
    order.orderId,
    'Delivered'
  );

  if (updated) {
    alert('Order delivered successfully!');
  } else {
    alert('Unable to update delivery status.');
  }
}

  getRestaurants(order: any): string[] {
    const restaurants = new Set<string>();

    for (const item of order.items ?? []) {
      const restaurantName = item?.restaurantName;

      if (typeof restaurantName === 'string') {
        restaurants.add(restaurantName);
      }
    }

    return Array.from(restaurants);
  }
}

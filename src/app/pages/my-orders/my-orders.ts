import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css'
})
export class MyOrders {

  readonly trackingStages = [
    'Order Placed',
    'Accepted',
    'Preparing',
    'Ready for Pickup',
    'Out for Delivery',
    'Delivered'
  ];

  constructor(private orderService: OrderService) {}

  get myOrders() {
    const customer = JSON.parse(
      localStorage.getItem('currentCustomer') || '{}'
    );

    return this.orderService.getOrders().filter(
      order => order.customerEmail === customer.email
    );
  }

  isStageActive(orderStatus: string | null | undefined, stage: string): boolean {
    const statusIndex = this.trackingStages.indexOf(orderStatus ?? '');
    const stageIndex = this.trackingStages.indexOf(stage);

    return statusIndex >= 0 && stageIndex >= 0 && stageIndex <= statusIndex;
  }
}
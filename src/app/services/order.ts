
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: any[] = [];

  constructor() {
    const savedOrders = localStorage.getItem('orders');

    if (savedOrders) {
      try {
        this.orders = JSON.parse(savedOrders);
      } catch (error) {
        console.error('Could not load saved orders.', error);
        this.orders = [];
      }
    }
  }

  private saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  // Add a new order
  addOrder(order: any) {
    this.orders.unshift(order);
    this.saveOrders();
  }

  // Get all orders
  getOrders() {
    return this.orders;
  }

  updateOrderStatus(orderId: string, status: string) {
    const order = this.orders.find(order => order.orderId === orderId);

    if (order) {
      order.status = status;
      this.saveOrders();
    }
  }

  // Restaurant Owner: update food preparation status
  updateRestaurantOrderStatus(orderId: string, status: string): boolean {

    const order = this.orders.find(
      order => order.orderId === orderId
    );

    if (!order) {
      return false;
    }

    // Order Placed or Pending → Accepted / Rejected
    if (
      order.status === 'Order Placed' ||
      order.status === 'Pending'
    ) {
      if (status === 'Accepted' || status === 'Rejected') {
        order.status = status;
        this.saveOrders();
        return true;
      }
    }

    // Accepted → Preparing
    if (order.status === 'Accepted' && status === 'Preparing') {
      order.status = status;
      this.saveOrders();
      return true;
    }

    // Preparing → Ready for Pickup
    if (
      order.status === 'Preparing' &&
      status === 'Ready for Pickup'
    ) {
      order.status = status;
      this.saveOrders();
      return true;
    }

    return false;
  }

  // Delivery Partner: assign a ready order
  assignDeliveryPartner(orderId: string, partnerName: string): boolean {

    const order = this.orders.find(
      order => order.orderId === orderId
    );

    if (
      !order ||
      order.status !== 'Ready for Pickup' ||
      order.deliveryPartner
    ) {
      return false;
    }

    order.deliveryPartner = partnerName;
    order.status = 'Out for Delivery';
    this.saveOrders();

    return true;
  }

  // Delivery Partner: complete delivery
  updateDeliveryOrderStatus(orderId: string, status: string): boolean {

    const order = this.orders.find(
      order => order.orderId === orderId
    );

    if (
      !order ||
      order.status !== 'Out for Delivery' ||
      status !== 'Delivered'
    ) {
      return false;
    }

    order.status = 'Delivered';
    this.saveOrders();
    return true;
  }

}

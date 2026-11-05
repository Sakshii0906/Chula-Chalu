import { TestBed } from '@angular/core/testing';
import { OrderService } from './order';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    localStorage.removeItem('orders');
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should persist orders so they are available after service recreation', () => {
    const order = {
      orderId: 'CC123',
      status: 'Order Placed',
      items: [{ restaurantId: 1, restaurantName: 'Pizza Corner' }]
    };

    service.addOrder(order);

    const restoredService = new OrderService();

    expect(restoredService.getOrders()).toEqual([order]);
  });

  it('should persist accepted order status', () => {
    service.addOrder({
      orderId: 'CC123',
      status: 'Order Placed',
      items: []
    });

    expect(service.updateRestaurantOrderStatus('CC123', 'Accepted')).toBe(true);
    expect(new OrderService().getOrders()[0].status).toBe('Accepted');
  });
});

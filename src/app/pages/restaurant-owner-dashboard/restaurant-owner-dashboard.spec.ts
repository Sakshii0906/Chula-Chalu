import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RestaurantOwnerDashboard } from './restaurant-owner-dashboard';

describe('RestaurantOwnerDashboard', () => {
  let component: RestaurantOwnerDashboard;
  let fixture: ComponentFixture<RestaurantOwnerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantOwnerDashboard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantOwnerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

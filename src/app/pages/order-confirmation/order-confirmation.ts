import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css'
})
export class OrderConfirmation {
  constructor(public cart: Cart) {}
}
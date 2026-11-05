
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order';
import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-restaurant-owner-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './restaurant-owner-dashboard.html',
  styleUrl: './restaurant-owner-dashboard.css'
})
export class RestaurantOwnerDashboard {

  restaurantId = 1;
  restaurantName = 'Pizza Corner';
  ownerName = 'Restaurant Owner';
  showAddForm = false;
  editingItemId: number | null = null;

  constructor(
    private orderService: OrderService,
    private menuService: MenuService
  ) {}

  newItem = {
    name: '',
    category: '',
    price: 0,
    description: '',
    image: '',
    available: true
  };

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      input.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Please select an image smaller than 5 MB.');
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.newItem.image = reader.result;
      } else {
        alert('Could not read the selected image. Please try another file.');
      }
    };
    reader.onerror = () => {
      alert('Could not read the selected image. Please try again.');
    };
    reader.readAsDataURL(file);
  }

  // Shared menu items
  get menuItems() {
    return this.menuService.getMenuItems(this.restaurantId);
  }

  // Get orders containing items from this restaurant
  get orders() {
    return this.orderService.getOrders()
      .filter(order =>
        order.items?.some((item: any) =>
          item.restaurantId != null
            ? Number(item.restaurantId) === this.restaurantId
            : item.restaurantName?.trim().toLowerCase() ===
              this.restaurantName.trim().toLowerCase()
        )
      )
      .map(order => {
        const restaurantItems = order.items.filter(
          (item: any) =>
            item.restaurantId != null
              ? Number(item.restaurantId) === this.restaurantId
              : item.restaurantName?.trim().toLowerCase() ===
                this.restaurantName.trim().toLowerCase()
        );

        return {
          ...order,
          items: restaurantItems,
          total: restaurantItems.reduce(
            (sum: number, item: any) =>
              sum + Number(item.price) * Number(item.quantity),
            0
          )
        };
      });
  }

  // Add Menu Item
  saveNewItem() {
    if (
      !this.newItem.name.trim() ||
      !this.newItem.category ||
      this.newItem.price <= 0 ||
      !this.newItem.description.trim()
    ) {
      alert('Please fill all food item details correctly.');
      return;
    }

    const imageUrl = this.newItem.image?.trim() || 'https://placehold.co/500x350?text=Food+Image';

    this.menuService.addMenuItem(this.restaurantId, {
      ...this.newItem,
      image: imageUrl
    });

    alert('Food item added successfully!');
    this.cancelMenuForm();
  }

  // Edit Menu Item
  editMenuItem(item: any) {
    this.editingItemId = item.id;

    this.newItem = {
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image || '',
      available: item.available
    };

    this.showAddForm = true;
  }

  updateMenuItem() {
    if (
      !this.newItem.name.trim() ||
      !this.newItem.category ||
      this.newItem.price <= 0 ||
      !this.newItem.description.trim()
    ) {
      alert('Please fill all food item details correctly.');
      return;
    }

    const updatedItem = {
      ...this.newItem,
      id: this.editingItemId,
      image: this.newItem.image?.trim() || 'https://placehold.co/500x350?text=Food+Image'
    };

    this.menuService.updateMenuItem(
      this.restaurantId,
      updatedItem
    );

    alert('Food item updated successfully!');
    this.cancelMenuForm();
  }

  // Cancel Add/Edit Form
  cancelMenuForm() {
    this.showAddForm = false;
    this.editingItemId = null;

    this.newItem = {
      name: '',
      category: '',
      price: 0,
      description: '',
      image: '',
      available: true
    };
  }

  // Delete Menu Item
  deleteMenuItem(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this food item?'
    );

    if (confirmDelete) {
      this.menuService.deleteMenuItem(
        this.restaurantId,
        id
      );

      alert('Food item deleted successfully!');
    }
  }

  // Change Food Availability
  toggleAvailability(item: any) {
    item.available = !item.available;

    this.menuService.updateMenuItem(
      this.restaurantId,
      item
    );
  }

  // Order Statistics
  get pendingOrders() {
    return this.orders.filter(
      order =>
        order.status === 'Order Placed' ||
        order.status === 'Pending'
    ).length;
  }

  get acceptedOrders() {
    return this.orders.filter(
      order => order.status === 'Accepted'
    ).length;
  }

  get completedOrders() {
    return this.orders.filter(
      order => order.status === 'Delivered'
    ).length;
  }

  // Order Actions
  // Order Actions
acceptOrder(order: any) {
  const updated = this.orderService.updateRestaurantOrderStatus(
    order.orderId,
    'Accepted'
  );

  if (updated) {
    alert('Order accepted successfully!');
  }
}

rejectOrder(order: any) {
  const confirmReject = confirm(
    'Are you sure you want to reject this order?'
  );

  if (confirmReject) {
    const updated = this.orderService.updateRestaurantOrderStatus(
      order.orderId,
      'Rejected'
    );

    if (updated) {
      alert('Order rejected.');
    }
  }
}

markPreparing(order: any) {
  const updated = this.orderService.updateRestaurantOrderStatus(
    order.orderId,
    'Preparing'
  );

  if (updated) {
    alert('Order marked as Preparing!');
  }
}

markReadyForPickup(order: any) {
  const updated = this.orderService.updateRestaurantOrderStatus(
    order.orderId,
    'Ready for Pickup'
  );

  if (updated) {
    alert('Order is ready for pickup!');
  }
}
}
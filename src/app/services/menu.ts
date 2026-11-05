
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: Record<number, any[]> = {
    1: [
      { id: 1, name: 'Margherita Pizza', description: 'Classic cheese pizza', price: 199, category: 'Pizza', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500', available: true },
      { id: 2, name: 'Farmhouse Pizza', description: 'Pizza with onion, capsicum and tomato', price: 299, category: 'Pizza', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500', available: true },
      { id: 3, name: 'Garlic Bread', description: 'Freshly baked garlic bread', price: 119, category: 'Sides', image: 'https://images.unsplash.com/photo-1619531040576-f9416740661a?w=500', available: true }
    ],
    2: [
      { id: 1, name: 'Classic Veg Burger', description: 'Crispy vegetable patty', price: 129, category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', available: true },
      { id: 2, name: 'Cheese Burger', description: 'Burger with cheese', price: 169, category: 'Burgers', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500', available: true },
      { id: 3, name: 'French Fries', description: 'Crispy salted fries', price: 99, category: 'Sides', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500', available: true }
    ],
    3: [
      { id: 1, name: 'Paneer Butter Masala', description: 'Paneer in creamy tomato gravy', price: 249, category: 'Main Course', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500', available: true },
      { id: 2, name: 'Dal Tadka', description: 'Traditional yellow dal', price: 159, category: 'Main Course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500', available: true },
      { id: 3, name: 'Butter Naan', description: 'Soft butter naan', price: 49, category: 'Breads', image: 'https://images.unsplash.com/photo-1600628422019-6a8f5a7a3a9e?w=500', available: true }
    ],
    4: [
      { id: 1, name: 'Cold Coffee', description: 'Chilled creamy coffee', price: 119, category: 'Beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500', available: true },
      { id: 2, name: 'Chocolate Brownie', description: 'Rich chocolate brownie', price: 99, category: 'Desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500', available: true },
      { id: 3, name: 'Veg Sandwich', description: 'Fresh vegetable sandwich', price: 129, category: 'Snacks', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500', available: true }
    ],
    5: [
      { id: 1, name: 'Masala Dosa', description: 'Crispy dosa with potato filling', price: 129, category: 'Dosa', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500', available: true },
      { id: 2, name: 'Idli Sambhar', description: 'Soft idlis with sambhar', price: 89, category: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500', available: true },
      { id: 3, name: 'Uttapam', description: 'Rice pancake with vegetables', price: 119, category: 'South Indian', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500', available: true }
    ],
    6: [
      { id: 1, name: 'Veg Hakka Noodles', description: 'Noodles with fresh vegetables', price: 169, category: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', available: true },
      { id: 2, name: 'Veg Manchurian', description: 'Vegetable balls in Manchurian sauce', price: 149, category: 'Chinese', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500', available: true },
      { id: 3, name: 'Fried Rice', description: 'Chinese-style vegetable fried rice', price: 159, category: 'Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', available: true }
    ],
    7: [
      { id: 1, name: 'White Sauce Pasta', description: 'Creamy white sauce pasta', price: 189, category: 'Pasta', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500', available: true },
      { id: 2, name: 'Veg Sandwich', description: 'Grilled vegetable sandwich', price: 119, category: 'Snacks', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500', available: true },
      { id: 3, name: 'Cheese Garlic Bread', description: 'Garlic bread with cheese', price: 139, category: 'Sides', image: 'https://images.unsplash.com/photo-1619531040576-f9416740661a?w=500', available: true }
    ],
    8: [
      { id: 1, name: 'Healthy Veg Salad', description: 'Fresh seasonal vegetable salad', price: 149, category: 'Healthy Food', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', available: true },
      { id: 2, name: 'Fruit Bowl', description: 'Fresh seasonal fruit bowl', price: 129, category: 'Healthy Food', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', available: true },
      { id: 3, name: 'Fresh Juice', description: 'Freshly prepared fruit juice', price: 89, category: 'Beverages', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500', available: true }
    ],
    9: [
      { id: 1, name: 'Samosa', description: 'Crispy potato-filled samosa', price: 30, category: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', available: true },
      { id: 2, name: 'Pav Bhaji', description: 'Spiced vegetable bhaji with pav', price: 119, category: 'Indian', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500', available: true },
      { id: 3, name: 'Dhokla', description: 'Soft Gujarati dhokla', price: 79, category: 'Gujarati', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500', available: true }
    ],
    10: [
      { id: 1, name: 'Shahi Paneer', description: 'Paneer in rich creamy gravy', price: 259, category: 'Main Course', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500', available: true },
      { id: 2, name: 'Jeera Rice', description: 'Rice flavoured with cumin', price: 139, category: 'Rice', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500', available: true },
      { id: 3, name: 'Butter Roti', description: 'Fresh Indian flatbread', price: 35, category: 'Breads', image: 'https://images.unsplash.com/photo-1600628422019-6a8f5a7a3a9e?w=500', available: true }
    ],
    11: [
      { id: 1, name: 'Veg Biryani', description: 'Aromatic vegetable biryani', price: 199, category: 'Rice', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500', available: true },
      { id: 2, name: 'Paneer Tikka', description: 'Grilled paneer with spices', price: 219, category: 'Starters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500', available: true },
      { id: 3, name: 'Veg Fried Rice', description: 'Vegetable fried rice', price: 149, category: 'Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', available: true }
    ],
    12: [
      { id: 1, name: 'Cheese Sandwich', description: 'Grilled cheese sandwich', price: 119, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500', available: true },
      { id: 2, name: 'Club Sandwich', description: 'Loaded vegetable club sandwich', price: 159, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=500', available: true },
      { id: 3, name: 'Chocolate Shake', description: 'Creamy chocolate milkshake', price: 129, category: 'Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', available: true }
    ],
    13: [
      { id: 1, name: 'Chole Bhature', description: 'Spicy chickpeas with bhature', price: 149, category: 'North Indian', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500', available: true },
      { id: 2, name: 'Paneer Tikka Masala', description: 'Paneer in spicy gravy', price: 239, category: 'Main Course', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500', available: true },
      { id: 3, name: 'Butter Kulcha', description: 'Soft kulcha with butter', price: 89, category: 'Breads', image: 'https://images.unsplash.com/photo-1600628422019-6a8f5a7a3a9e?w=500', available: true }
    ],
    14: [
      { id: 1, name: 'Veg Momos', description: 'Steamed vegetable momos', price: 119, category: 'Starters', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500', available: true },
      { id: 2, name: 'Chilli Garlic Noodles', description: 'Spicy garlic noodles', price: 169, category: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', available: true },
      { id: 3, name: 'Veg Fried Rice', description: 'Classic vegetable fried rice', price: 149, category: 'Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', available: true }
    ],
    15: [
      { id: 1, name: 'Veg Spring Roll', description: 'Crispy vegetable spring rolls', price: 139, category: 'Starters', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500', available: true },
      { id: 2, name: 'Hakka Noodles', description: 'Stir-fried vegetable noodles', price: 159, category: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', available: true },
      { id: 3, name: 'Manchurian Rice', description: 'Fried rice with Manchurian', price: 179, category: 'Chinese', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', available: true }
    ],
    16: [
      { id: 1, name: 'Gujarati Thali', description: 'Traditional Gujarati meal', price: 199, category: 'Gujarati', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500', available: true },
      { id: 2, name: 'Khandvi', description: 'Soft Gujarati gram flour rolls', price: 89, category: 'Gujarati', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500', available: true },
      { id: 3, name: 'Thepla', description: 'Traditional Gujarati flatbread', price: 79, category: 'Gujarati', image: 'https://images.unsplash.com/photo-1600628422019-6a8f5a7a3a9e?w=500', available: true }
    ],
    17: [
      { id: 1, name: 'Farmhouse Pizza', description: 'Pizza loaded with vegetables', price: 279, category: 'Pizza', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500', available: true },
      { id: 2, name: 'Veg Burger', description: 'Crispy vegetable burger', price: 129, category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', available: true },
      { id: 3, name: 'French Fries', description: 'Crispy salted fries', price: 99, category: 'Sides', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500', available: true }
    ],
    18: [
      { id: 1, name: 'Veg Manchurian', description: 'Vegetable balls in spicy sauce', price: 149, category: 'Chinese', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500', available: true },
      { id: 2, name: 'Paneer Chilli', description: 'Paneer tossed with capsicum', price: 199, category: 'Starters', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500', available: true },
      { id: 3, name: 'Schezwan Rice', description: 'Spicy Schezwan fried rice', price: 169, category: 'Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', available: true }
    ],
    19: [
      { id: 1, name: 'Sprout Salad', description: 'Healthy mixed sprout salad', price: 119, category: 'Healthy Food', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', available: true },
      { id: 2, name: 'Veg Wrap', description: 'Fresh vegetable wrap', price: 139, category: 'Snacks', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500', available: true },
      { id: 3, name: 'Fresh Lime Juice', description: 'Refreshing lime drink', price: 69, category: 'Beverages', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=500', available: true }
    ]
  };

  getMenuItems(restaurantId: number): any[] {
    if (!this.menus[restaurantId]) {
      this.menus[restaurantId] = [];
    }

    return this.menus[restaurantId];
  }

  addMenuItem(restaurantId: number, item: any) {
    const items = this.getMenuItems(restaurantId);

    const nextId = items.length > 0
      ? Math.max(...items.map(menu => menu.id)) + 1
      : 1;

    items.push({
      ...item,
      id: nextId,
      available: item.available ?? true
    });
  }

  updateMenuItem(restaurantId: number, updatedItem: any) {
    const items = this.getMenuItems(restaurantId);

    const index = items.findIndex(
      item => item.id === updatedItem.id
    );

    if (index !== -1) {
      items[index] = { ...updatedItem, available: updatedItem.available ?? true };
    }
  }

  deleteMenuItem(restaurantId: number, id: number) {
    const items = this.getMenuItems(restaurantId);

    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
      items.splice(index, 1);
    }
  }
}

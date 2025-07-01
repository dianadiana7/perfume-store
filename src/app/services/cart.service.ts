import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart_items';
  items = signal<CartItem[]>(this.loadCart());

  private loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []; // نتأكد إنها مو SSR
  const saved = localStorage.getItem(this.storageKey);
  return saved ? JSON.parse(saved) : [];
}

private saveCart(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(this.storageKey, JSON.stringify(items));
}

  addToCart(product: Product) {
    const updated = [...this.items()];
    const index = updated.findIndex(item => item.product.id === product.id);

    if (index > -1) {
      updated[index].quantity += 1;
    } else {
      updated.push({ product, quantity: 1 });
    }

    this.items.set(updated);
    this.saveCart(updated);
  }

  increaseQuantity(id: number) {
    const updated = this.items().map(item =>
      item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    this.items.set(updated);
    this.saveCart(updated);
  }

  decreaseQuantity(id: number) {
    let updated = this.items().map(item =>
      item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);

    this.items.set(updated);
    this.saveCart(updated);
  }

  removeFromCart(id: number) {
    const updated = this.items().filter(item => item.product.id !== id);
    this.items.set(updated);
    this.saveCart(updated);
  }

  clearCart() {
    this.items.set([]);
    localStorage.removeItem(this.storageKey);
  }
}
import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart = inject(CartService);
  items = this.cart.items;

  increaseQuantity(id: number) {
    this.cart.increaseQuantity(id);
  }

  decreaseQuantity(id: number) {
    this.cart.decreaseQuantity(id);
  }

  removeFromCart(id: number) {
    this.cart.removeFromCart(id);
  }

  clear() {
    this.cart.clearCart();
  }

 get totalPrice(): number {
  return this.items().reduce((total, item) => {
    const price = parseFloat(item.product.price.toString().replace(/[^\d.]/g, ''));
    return total + price * item.quantity;
  }, 0);
}

checkout() {
  const confirmed = window.confirm('You will be transferred to WhatsApp to complete the order, are you sure?');

  if (confirmed) {
    let message = 'Hello, I would like to complete this request:\n\n';

    this.items().forEach((item, index) => {
      message += `${index + 1}- ${item.product.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   the price: ${item.product.price}\n\n`;
    });

    message += `Total: $${this.totalPrice}\n`;
    message += `\nThank you`;

    const whatsappLink = `https://wa.me/905383810703?text=${encodeURIComponent(message)}`;

    this.clear();
    window.open(whatsappLink, '_blank');
  }
}

}
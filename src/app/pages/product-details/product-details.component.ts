import { Component, inject, Signal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../data/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // استخدام Signal لتخزين الـ productId و الـ product
  productId = signal<string | null>(null);
  product = signal<any>(null);

  cart = inject(CartService);

  constructor(private route: ActivatedRoute) {
    // الاشتراك في paramMap لاستخراج id المنتج
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId.set(id); // تعيين الـ productId

      // إذا كان الـ id موجودًا، نبحث عن المنتج في PRODUCTS
      if (id) {
        this.product.set(PRODUCTS.find(p => p.id === +id)); // تعيين الـ product
      }
    });
  }
  
  addToCart() {
    const p = this.product();
    if (p) {
      this.cart.addToCart(p);
    }
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-form',
  imports: [],
  standalone: true,
  templateUrl: './collection-form.component.html',
  styleUrl: './collection-form.component.css'
})
export class CollectionFormComponent {
  orderData = {
  name: '',
  address: '',
  phone: '',
  paymentMethod: 'cash', // Default payment method
  };

submitOrder() {
  console.log('Order submitted:', this.orderData);
  // هنا تقدر ترسل البيانات للخادم الخلفي إذا عندك، أو تخزنها في `localStorage`
  // بعدين يمكن تقدم له صفحة تأكيد مع تفاصيل الطلب
}
}
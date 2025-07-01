import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  /* constructor(private http: HttpClient) {}

  submitOrder(orderData: any) {
    return this.http.post('https://your-backend-api/orders', orderData);
  } */
  //  تغيير الرابط هنا لعنوان الـ API الفعلي
  private apiUrl = 'https://your-backend-api/orders';

  constructor(private http: HttpClient) {}

  // دالة لإرسال بيانات الطلب إلى الخادم
  submitOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderData);
  }
}
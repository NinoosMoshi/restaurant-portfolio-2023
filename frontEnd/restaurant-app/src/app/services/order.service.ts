import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "http://localhost:8080/api/v1/orders";

  constructor(private http:HttpClient) { }


  // http://localhost:8080/api/v1/orders/all-orders
  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/all-orders`).pipe(
      map(response => response)
    );
  }




}

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


  // http://localhost:8080/api/v1/orders/all-orders?page={value}&size={value}
  getAllOrders(page:number, size:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/all-orders?page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }


  // http://localhost:8080/api/v1/orders/category?categoryId={value}&page={value}&size={value}
  getOrdersByCategoryId(id: number, page:number, size:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/category?categoryId=${id}&page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }

  // http://localhost:8080/api/v1/orders/search?name={value}&page={value}&size={value}
  getOrdersByOrderName(name: string, page:number, size:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/search?name=${name}&page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }


  // http://localhost:8080/api/v1/orders/order?orderId={value}
  getOrdersById(id: number):Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/order?orderId=${id}`).pipe(
      map(response => response)
    );
  }



  // http://localhost:8080/api/v1/orders/order-size
  getOrdersLength():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/order-size`).pipe(
      map(response => response)
    )
  }


  // http://localhost:8080/api/v1/orders/category-size
  getOrdersLengthByCategoryId(id:any):Observable<number>{
     return this.http.get<number>(`${this.baseUrl}/category-size?id=${id}`)
  }


  // http://localhost:8080/api/v1/orders/key-size?key={value}
  getOrdersLengthByKeywordSearch(key:any):Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/key-size?key=${key}`)
  }




}

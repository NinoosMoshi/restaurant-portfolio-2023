import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseRequest } from '../model/form/purchase-request';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

   baseUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  // http://localhost:8080/api/v1/buy/purchase
  getOrder(purchaseRequest:PurchaseRequest):Observable<any>{
    return this.http.post<PurchaseRequest>(`${this.baseUrl}/buy/purchase`,purchaseRequest);
  }

}

import { CartOrder } from './../model/cart-order';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: CartOrder[] = [];
  totalOrders: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);


  constructor() { }


  addOrderToCart(order:CartOrder){

      let isExist: boolean = false;
      let existOrder: CartOrder = undefined;
      if(this.orders.length > 0){
        // for(let temp of this.orders){
        //   if(temp.id === order.id){
        //     existOrder = temp;
        //     break;
        //   }
        // }
        existOrder = this.orders.find(temp => temp.id === order.id);
      }
      isExist = (existOrder != undefined);
      if(isExist){
        existOrder.quantity++;
      }else{
        this.orders.push(order);
      }

      console.log(this.orders)
      this.calculateTotals();

  }

  calculateTotals(){
    let totalElementsSizeOrder:number=0;
    let totalPriceOrder:number=0;

    for(let temp of this.orders){
      totalElementsSizeOrder += temp.quantity;
      totalPriceOrder += temp.quantity * temp.price;
    }

    this.totalOrders.next(totalElementsSizeOrder);
    this.totalPrice.next(totalPriceOrder);
    console.log("size of orders: " + this.totalOrders);
    console.log("price of orders: " + this.totalPrice);

  }
}

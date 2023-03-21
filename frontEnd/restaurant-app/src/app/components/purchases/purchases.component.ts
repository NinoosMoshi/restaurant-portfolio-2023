import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { CartOrder } from './../../model/cart-order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  orders:CartOrder[] = [];

  totalOrder:number = 0;
  totalPrice:number = 0;

  constructor(private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
    this.getAllOrders();
    this.getTotals();
  }

  getAllOrders(){
    this.orders = this.cartService.orders;
  }


  increaseOrderQuantity(temp:CartOrder){
   this.cartService.addOrderToCart(temp);
  }

  decreasOrderQuantity(temp:CartOrder){
    this.cartService.removeOrder(temp);
  }

  removeOrder(temp:CartOrder){
    this.cartService.remove(temp);
  }

  getTotals(){
    this.cartService.totalOrders.subscribe(data =>{
      this.totalOrder = data
    });
    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data
    });
  }


  checkOut(){
    this.router.navigateByUrl("/check-out")
  }


}

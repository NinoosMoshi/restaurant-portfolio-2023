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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllOrders();
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


}

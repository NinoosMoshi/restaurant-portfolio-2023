import { Order } from './../../model/order';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Order[] = [];

  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( () =>{
      this.finishOrder();
    })
  }

  finishOrder(){
    let routeHasId = this.route.snapshot.paramMap.has('id');
    let routeHasName = this.route.snapshot.paramMap.has('key')
    if(routeHasId){
       this.getOrderByCategoryId();
    }
    else if(routeHasName){
      this.getOrderByNameContain();
    }
    else{
      this.getOrders();
    }
  }

  getOrders(){
    this.orderService.getAllOrders().subscribe(data =>{
      this.orders = data
    })
  }


  getOrderByCategoryId(){
    let categoryId = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrdersByCategoryId(categoryId).subscribe(data =>{
      this.orders = data
    })
  }


  getOrderByNameContain(){
    let orderName = this.route.snapshot.paramMap.get('key');
    this.orderService.getOrdersByOrderName(orderName).subscribe(data =>{
      this.orders = data
    })
  }


}

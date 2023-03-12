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

  page: number = 1;
  pageLength: number = 6;  // pageSize
  totalOrder:number = 0;  // collectionSize, the total number of orders

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
    this.orderService.getOrdersLength().subscribe(data =>{
      this.totalOrder = data
    })
    this.orderService.getAllOrders(this.page - 1,this.pageLength).subscribe(data =>{
      this.orders = data
    })
  }


  getOrderByCategoryId(){
    let categoryId = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrdersLengthByCategoryId(categoryId).subscribe(data =>{
      this.totalOrder = data
    })

    this.orderService.getOrdersByCategoryId(categoryId,this.page -1 ,this.pageLength).subscribe(data =>{
      this.orders = data
    })
  }


  getOrderByNameContain(){
    let orderName = this.route.snapshot.paramMap.get('key');
    this.orderService.getOrdersLengthByKeywordSearch(orderName).subscribe(data =>{
      this.totalOrder = data
    })
    this.orderService.getOrdersByOrderName(orderName,this.page -1 ,this.pageLength).subscribe(data =>{
      this.orders = data
    })
  }


  doing(){
    this.finishOrder();
  }

  pageSize(event: Event){
    this.pageLength = +(<HTMLInputElement>event.target).value
    this.finishOrder();
 }

}

import { ActivatedRoute } from '@angular/router';
import { Order } from './../../model/order';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order

  constructor(private orderService: OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrder()
  }

  getOrder(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrdersById(id).subscribe(data =>{
      this.order = data
    })
  }


}

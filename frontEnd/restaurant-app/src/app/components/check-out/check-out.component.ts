import { City } from './../../model/city';
import { State } from './../../model/state';
import { StateCityService } from './../../services/state-city.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { SpaceValidator } from 'src/app/model/space-validator';
import { Request } from './../../model/form/request'
import { Item } from 'src/app/model/form/item';
import { CartOrder } from 'src/app/model/cart-order';
import { PurchaseRequest } from 'src/app/model/form/purchase-request';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  parentFormGroup: FormGroup;
  states:State[] = [];
  citiesFromPerson:City[] = [];
  citiesToPerson:City[] = [];
  totalOrder:number = 0;
  totalPrice:number = 0;


  constructor(private childFormGroup: FormBuilder,
              private stateCityService: StateCityService,
              private cartService: CartService,
              private purchaseService: PurchaseService,
              private router: Router) { }

  ngOnInit(): void {
    this.myForm();
    this.getStates();
    // this.getCities();
    // this.getCitiesByCode();
    this.getTotals();
  }

  myForm(){
    this.parentFormGroup = this.childFormGroup.group({
      data:this.childFormGroup.group({
        fullName:new FormControl('',[Validators.required,
                                     SpaceValidator.onlyContainSpace,
                                     Validators.minLength(12)
                                    ]),
        email:new FormControl('',[Validators.required,
                                  Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
                                 ]),
        phoneNumber:new FormControl('',[Validators.required,
                                        Validators.minLength(10),
                                        Validators.maxLength(10),
                                        Validators.pattern('^[0-9]*$')
                                       ])
      }),
      fromPerson:this.childFormGroup.group({
        state:[''],
        city:[''],
        street:[''],
        zipCode:['']
      }),
      toPerson:this.childFormGroup.group({
        state:[''],
        city:[''],
        street:[''],
        zipCode:['']
      }),
      creditCard:this.childFormGroup.group({
        cardType:[''],
        cardNumber:[''],
        code:['']
      })

    })
  }

  get fullName(){
    return this.parentFormGroup.get('data.fullName');
  }

  get email(){
    return this.parentFormGroup.get('data.email');
  }

  get phoneNumber(){
    return this.parentFormGroup.get('data.phoneNumber');
  }









  similarGroup(event:Event){
     if( (<HTMLInputElement>event.target).checked ){
       this.parentFormGroup.controls?.['toPerson'].setValue(this.parentFormGroup.controls?.['fromPerson'].value);
       this.citiesToPerson = this.citiesFromPerson;
     }else{
      this.parentFormGroup.controls?.['toPerson'].reset();
     }
  }





  getStates(){
    this.stateCityService.getAllStates().subscribe(data =>{
      this.states = data
    })
  }

  // getCities(){
  //   this.stateCityService.getAllCities().subscribe(data =>{
  //     this.cities = data
  //   })
  // }

  getCitiesByCode(type:string){
    let code = this.parentFormGroup.get(`${type}.state`)?.value;

    this.stateCityService.getAllCitiesByCode(code).subscribe(data =>{
      if(type == 'fromPerson'){
        this.citiesFromPerson = data
      }else{
        this.citiesToPerson = data
      }
      this.parentFormGroup.get(`${type}.city`)?.setValue(data[0])
    })
  }







  getTotals(){
    this.cartService.totalOrders.subscribe(data =>{
      this.totalOrder = data
    });
    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data
    });
  }



  formSubmit(){
    if(this.parentFormGroup.invalid){
      this.parentFormGroup.markAllAsTouched();
    }else{
      let customer = this.parentFormGroup.controls['data'].value;

      let fromAddress = this.parentFormGroup.controls['fromPerson'].value;
      fromAddress.city = fromAddress.city['cityName'];

      let toAddress = this.parentFormGroup.controls['toPerson'].value;
      toAddress.city = toAddress.city['cityName'];

      let requestOrder = new Request();
      requestOrder.totalPrice = this.totalPrice;
      requestOrder.totalQuantity = this.totalOrder;

      let items: Item[] = [];
      let orders: CartOrder[] = this.cartService.orders;
      // for(let i=0; i< orders.length;i++){
      //   items[i] = new Item(orders[i]);
      // }
      items = orders.map(order => new Item(order));

      let purchaseRequest = new PurchaseRequest();
      purchaseRequest.customer = customer;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;

      this.purchaseService.getOrder(purchaseRequest).subscribe({
        next:response =>{
          alert("Your name is: "+ response.customerName + "\nYour code is: "+ response.code);
          this.cleanForm();
        },
        error:err =>{
          // console.log("error is : "+ err.message)
        }
      })

    }

  }


  cleanForm(){
    this.cartService.orders = [];
    this.cartService.totalOrders.next(0);
    this.cartService.totalPrice.next(0);
    this.parentFormGroup.reset();
    this.router.navigateByUrl('/orders')
  }


}

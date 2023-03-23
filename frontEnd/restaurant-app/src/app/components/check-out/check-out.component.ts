import { City } from './../../model/city';
import { State } from './../../model/state';
import { StateCityService } from './../../services/state-city.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

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
              private cartService: CartService) { }

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
        fullName:[''],
        email:[''],
        phoneNumber:['']
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

  similarGroup(event:Event){
     if( (<HTMLInputElement>event.target).checked ){
       this.parentFormGroup.controls?.['toPerson'].setValue(this.parentFormGroup.controls?.['fromPerson'].value);
       this.citiesToPerson = this.citiesFromPerson;
     }else{
      this.parentFormGroup.controls?.['toPerson'].reset();
     }
  }


  formSubmit(){
    console.log(this.parentFormGroup.get("data").value)
    console.log(this.parentFormGroup.get("fromPerson").value)
    console.log(this.parentFormGroup.get("toPerson").value)
    console.log(this.parentFormGroup.get("creditCard").value)
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



}

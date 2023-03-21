import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  parentFormGroup: FormGroup

  constructor(private childFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.myForm();
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


  formSubmit(){
    console.log(this.parentFormGroup.get("data").value)
    console.log(this.parentFormGroup.get("fromPerson").value)
    console.log(this.parentFormGroup.get("toPerson").value)
    console.log(this.parentFormGroup.get("creditCard").value)
  }





}

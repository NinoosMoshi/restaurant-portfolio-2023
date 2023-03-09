import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css']
})
export class DropDownMenuComponent implements OnInit {

  categories:Category[] = [];

  constructor(private categoryServic:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories(){
    this.categoryServic.getAllCategories().subscribe(data =>{
      this.categories = data
    })
  }

}

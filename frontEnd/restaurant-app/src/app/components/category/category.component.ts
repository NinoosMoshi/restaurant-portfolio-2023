import { Category } from './../../model/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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

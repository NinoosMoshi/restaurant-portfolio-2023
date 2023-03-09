import { map } from 'rxjs/operators';
import { Category } from './../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/v1/categories'

  constructor(private http:HttpClient) { }

  // http://localhost:8080/api/v1/categories/all-categories
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/all-categories`).pipe(
      map(response => response)
    );
  }



}

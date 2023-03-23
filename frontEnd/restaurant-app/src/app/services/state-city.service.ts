import { City } from './../model/city';
import { map } from 'rxjs/operators';
import { State } from './../model/state';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateCityService {

  private baseUrl = "http://localhost:8080/api/v1";


  constructor(private http:HttpClient) { }

  // http://localhost:8080/api/v1/states/all-states
  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.baseUrl}/states/all-states`).pipe(
      map(response => response)
    );
  }


  // http://localhost:8080/api/v1/cities/all-cities
  getAllCities():Observable<City[]>{
    return this.http.get<City[]>(`${this.baseUrl}/cities/all-cities`).pipe(
      map(response => response)
    );
  }


  // http://localhost:8080/api/v1/cities/city-code?code={value}
  getAllCitiesByCode(code:string):Observable<City[]>{
    return this.http.get<City[]>(`${this.baseUrl}/cities/city-code?code=${code}`).pipe(
      map(response => response)
    );
  }







}

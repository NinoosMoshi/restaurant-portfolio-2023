import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { DropDownMenuComponent } from './components/drop-down-menu/drop-down-menu.component';
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    HomeComponent,
    CategoryComponent,
    DropDownMenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

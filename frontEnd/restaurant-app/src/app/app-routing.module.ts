import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path:'order/:id', component:OrderDetailsComponent},
  {path:'category/:id', component:OrderComponent},
  {path:'category', component:OrderComponent},
  {path:'order', component:OrderComponent},
  {path:'order/:key', component:OrderComponent},
  {path:'home', component:HomeComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

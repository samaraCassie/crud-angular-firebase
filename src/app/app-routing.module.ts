import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PagHomeComponent } from './pag-home/pag-home.component';
import { PagOrderComponent } from './pag-order/pag-order.component';
import { PagProductComponent } from './pag-product/pag-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';



const routes: Routes = [

  { path: '', redirectTo: '/list-product', pathMatch: 'full' },
  { path: 'pag-home', component: PagHomeComponent },
  { path: 'pag-product', component: PagProductComponent },
  { path: 'pag-order', component: PagOrderComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent }

];

@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []

})

export class AppRoutingModule { }

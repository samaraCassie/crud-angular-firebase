import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { environment }  from '../environment';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { PagHomeComponent } from './pag-home/pag-home.component';
import { PagOrderComponent } from './pag-order/pag-order.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContatoComponent,
    AddContatoComponent,
    EditContatoComponent,
    ListProductComponent,
    EditProductComponent,
    AddProductComponent,
    PagHomeComponent,
    PagOrderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

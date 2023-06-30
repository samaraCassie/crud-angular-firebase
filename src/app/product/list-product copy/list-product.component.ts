import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { ToastrService } from 'ngx-toastr';

import { Product } from '../product';



@Component({

  selector: 'app-list-product',

  templateUrl: './list-product.component.html',

  styleUrls: ['./list-product.component.css'],

})

export class ListProductComponent implements OnInit {

  page = 1;

  listProducts: Product[] = [];

  listEmpty: Boolean = true;

  showLoader: Boolean = true;



  constructor(

    private productService: ProductService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchDate = this.productService.getProductList();

    fetchDate.snapshotChanges().subscribe((date) => {

      this.listProducts = [];

      if (date.length <= 0) {

        this.listEmpty = true;

      } else {

        this.listEmpty = false;

        date.forEach((item: any) => {

          let product = item.payload.toJSON();

          product['$key'] = item.key;

          this.listProducts.push(product as Product);

        });

      }

      this.showLoader = false;

    });

  }



  deleteProduct(product: Product) {

    if (window.confirm('Tem certeza que deseja remover o product?')) {

      if (product.$key != null) {

        this.productService.deleteProduct(product.$key);

        this.toastr.success(product.nome + ' removido com sucesso.');

      }

    }

  }

}

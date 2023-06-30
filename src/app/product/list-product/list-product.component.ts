import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  page = 1;
  listProducts: Product[] = [];
  listEmpty: Boolean = true;
  showLoader: Boolean = true;

  //DI - Depency Injection
  constructor(
    private productService: ProductService,
    private toastr: ToastrService) {}


  ngOnInit(){
    let fetchData = this.productService.getProductList();
    //Lambda
    fetchData.snapshotChanges().subscribe( data => {
      this.listProducts = [];
      if (data.length <= 0)
        this.listEmpty = true;
      else {
        this.listEmpty = false;
        data.forEach( (item: any) => {
          let product = item.payload.toJSON();
          product['$key'] = item.key;
          this.listProducts.push(product as Product);
        });
      }
    });
    this.showLoader = false;
  }

  deleteProduct(product: Product) {
    if (window.confirm("Tem certeza que deseja remover o produto?")){
      if (product.$key != null) {
        this.productService.deleteProduct(product.$key);
        this.toastr.success(product.nome + " removido com sucesso.");
      }
    }
  }


}

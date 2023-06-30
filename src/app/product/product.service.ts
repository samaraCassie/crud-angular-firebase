import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Product } from './product';



@Injectable({

  providedIn: 'root'

})

export class ProductService {

  listProductsRef: AngularFireList<Product>;
  productRef: AngularFireObject<Product>;



  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listProductsRef = this.db.list('list-products');
    this.productRef = this.db.object('list-products/' + 0);

  }



  // Inserir Product

  insertProduct(product: Product) {

    this.listProductsRef.push({

      nome: product.nome,

      preco: product.preco,

      descricao: product.descricao,

    });
  }


  // Buscar um único Objeto Product pelo seu ID

  getProductById(id: string): AngularFireObject<Product> {

    this.productRef = this.db.object('list-products/' + id);

    return this.productRef;

  }



  // Fetch Students List

  getProductList(): AngularFireList<Product> {

    return this.listProductsRef;

  }



  // Update Student Object

  updateProduct(product: Product) {

    this.productRef.update({

      nome: product.nome,

      preco: product.preco,

      descricao: product.descricao,

    });

  }



  // Delete Student Object

  deleteProduct(id: String) {

    this.productRef = this.db.object('list-products/' + id);

    this.productRef.remove();

  }

}

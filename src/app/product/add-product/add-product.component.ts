import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { ProductService } from '../product.service';

import { ToastrService } from 'ngx-toastr';



@Component({

  selector: 'app-add-product',

  templateUrl: './add-product.component.html',

  styleUrls: ['./add-product.component.css']

})

export class AddProductComponent implements OnInit{

  productForm: FormGroup;



  constructor(

    private productService: ProductService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.productForm = this.createForm();

    }



    ngOnInit(){

      this.productService.getProductList();

    }



    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        preco: new FormControl('', Validators.required),

        descricao: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

      });

    }



    resetForm(){

      this.productForm.reset();

    }



    submitForm(){

      this.productService.insertProduct(this.productForm.value);

      this.toastr.success(

        this.productForm.controls['nome'].value + " adicionado"

      );

    }



    get nome(){

      return this.productForm.get('nome');

    }



    get preco(){

      return this.productForm.get('preco');

    }



    get descricao(){

      return this.productForm.get('descricao');

    }

}

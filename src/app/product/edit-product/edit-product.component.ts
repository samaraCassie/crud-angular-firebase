import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../product.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-product',

  templateUrl: './edit-product.component.html',

  styleUrls: ['./edit-product.component.css']

})

export class EditProductComponent implements OnInit{

  productForm: FormGroup;



  constructor(

    private productService: ProductService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.productForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      preco: new FormControl('', Validators.required),

      descricao: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.productService.getProductById(id).valueChanges().subscribe(data => {

        this.productForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.productService.updateProduct(this.productForm.value);

    this.toastr.success(

      this.productForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-product']);

  }

  goBack(){

    this.location.back();

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




import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output()
  submitProduct = new EventEmitter<Product>();

  // product: Product = {
  //   id: null,
  //   name: null,
  //   price: null,
  //   category: null,
  //   desc: null,
  //   imgUrl: null
  // };

  product: any = {
    name: '',
    price: null,
    category: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitProduct.emit(this.product);
  }

}

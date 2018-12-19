import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../product-data.mock';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = PRODUCTS;
  }

  getMyClass() {
    // switch 
    return {
      'myClass1': true,
      'myClass2': false
    };
  }

}

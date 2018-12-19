import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PRODUCTS } from '../product-data.mock';
import { Product } from '../product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Product[];

  @ViewChildren(ProductCardComponent)
  productsRef: QueryList<ProductCardComponent>;

  constructor() { }

  ngOnInit() {
    this.products = PRODUCTS;
  }

  ngAfterViewInit() {
    console.log('init view children', this.productsRef);
  }

  getMyClass() {
    return {
      'myClass1': true,
      'myClass2': false
    };
  }

}

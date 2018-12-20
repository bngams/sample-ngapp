import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PRODUCTS } from '../product-data.mock';
import { Product } from '../product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  @ViewChildren(ProductCardComponent)
  productsRef: QueryList<ProductCardComponent>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // for async pipe
    this.products$ = this.productService.list();
    // classic attributes
    // this.productService.list().subscribe((data) => {
    //   this.products = data;
    // });
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

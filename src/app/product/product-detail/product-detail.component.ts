import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../product';
import { findProductById, PRODUCTS } from '../product-data.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot
    const id: number = this.route.snapshot.params.id;

    // Observable
    // this.route.paramMap.subscribe((params) => {
    //   console.log('route params', params.get('id'));
    //   this.loadProduct(id);
    // });

    this.loadProduct(id);
  }

  loadProduct(id: number) {
    this.product = PRODUCTS[id - 1];
  }

}

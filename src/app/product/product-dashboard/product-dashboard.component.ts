import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css'],
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('mainTitle', { read: ElementRef })
  mainTitle: ElementRef;

  @ViewChild(ProductListComponent)
  productList: ProductListComponent;

  @ViewChild(ProductListComponent, { read: ElementRef })
  productListRef: ElementRef;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('product dashboard view init', this.productList, this.productListRef, this.mainTitle);
    this.addProduct({
      id: 2,
      name: 'Microsoft Surface',
      price: '500',
      imgUrl: 'https://imgplaceholder.com/640x480',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem magni explicabo porro',
      category: 'tech'
    });
  }


  addProduct(product) {
    console.log(product);
    this.productList.products.push(product);
  }

}

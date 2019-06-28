import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PRODUCTS } from '../product-data.mock';
import { Product } from '../product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { ProdcutBasicService } from '../prodcut-basic.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  // ViewChild
  // productDetail: ProductDetailComponent

  @ViewChildren(ProductCardComponent)
  productsRef: QueryList<ProductCardComponent>;

  constructor(
    private productService: ProductService,
    private productBasicService: ProdcutBasicService) { }

  ngOnInit() {
    // for async pipe
    this.products$ = this.productService.list();
    // classic attributes
    // this.productService.list().subscribe((data) => {
    //   this.products = data;
    // });
  }

  loadProducts() {
    const req: Observable<Product[]> = this.productBasicService.list()  ;
    // create an Observer
    const reqObserver = {
      next: (res: Product[]) => {
        this.products = res;
      },
      error: (err) => { console.log('Error'); },
      complete: () => { console.log('Completed'); }
    };
    // subscribe
    // this.productBasicService.list().subscribe(reqObserver)
    req.subscribe(reqObserver);

    // partial observer
    req.subscribe(res => this.products = res);

    this.products$ = this.productBasicService.list();
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

import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, AfterContentInit {

  @Input()
  product: Product;

  // @ContentChild()
  imageContent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('content init', this.imageContent);
  }

  onToggle(event) {
    console.log('highlight toggle event', event);
  }



}

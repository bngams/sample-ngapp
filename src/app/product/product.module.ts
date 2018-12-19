import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [ProductCardComponent, ProductFormComponent, ProductListComponent, ProductDashboardComponent, HighlightDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductDashboardComponent
  ]
})
export class ProductModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResourceService } from '../shared/api/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<number, Product> {

  constructor(private http: HttpClient) {
    super(http, 'product');
  }

}

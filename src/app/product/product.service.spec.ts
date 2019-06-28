import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Injector } from '@angular/core';

describe('ProductService', () => {

  let httpSpy;
  let httpMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductService]
    }).compileComponents();
    httpSpy = jasmine.createSpyObj('Http', ['get']);
    productSpy = jasmine.createSpyObj('ProductService', ['list']);
    httpMock = injector.get(HttpTestingController);
  }));

  it('should inject service', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch products', inject([ProductService], (service: ProductService) => {
    const mockProducts = [{ id: 1, name: 'Test', price: 10 }];
    // intercept http.get
    httpSpy.get.and.returnValue(mockProducts);
    // intercept cal to api
    const req = httpMock.expectOne('http://localhost:3004/product');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
    service.list().subscribe(data => {
      expect(mockProducts[0]).toEqual(data[0]);
    });

    
  }));
});

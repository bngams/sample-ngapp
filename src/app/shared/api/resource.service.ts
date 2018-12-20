import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ResourceService<I, T extends Resource<I>> {

  constructor(
    private httpClient: HttpClient,
    private endpoint: string
  ) { }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${API_BASE_URL}/${this.endpoint}`);
  }

  create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${API_BASE_URL}/${this.endpoint}`, item);
  }

  update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${API_BASE_URL}/${this.endpoint}/${item.id}`, item);
  }

  get(id: I): Observable<T> {
    return this.httpClient.get<T>(`${API_BASE_URL}/${this.endpoint}/${id}`);
  }

  delete(id: I) {
    return this.httpClient.delete(`${API_BASE_URL}/${this.endpoint}/${id}`);
  }

}

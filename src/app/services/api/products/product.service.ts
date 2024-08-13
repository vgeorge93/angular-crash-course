import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private httpClient: HttpClient) {}

  public getAllProductsWithLimit(
    limit: number = 5
  ): Observable<Array<ProductRepresentation>> {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.httpClient.get<Array<ProductRepresentation>>(productsUrl);
  }

  public createProduct(product: ProductRepresentation): Observable<ProductRepresentation> {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.httpClient.post<ProductRepresentation>(productsUrl, product);
  }
}

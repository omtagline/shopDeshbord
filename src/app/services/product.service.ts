import { ProductData, Products } from './../features/home/dataInter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  public get(category?: string): Observable<ProductData> {
    if (category) {
      return this.http.get<ProductData>(this.api + `/category/${category}`);
    } else {
      return this.http.get<ProductData>(this.api + '?limit=200');
    }
  }
  public getCategory(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://dummyjson.com/products/category-list'
    );
  }
  public addProducts(data: any) {
    const a = this.http.post('https://dummyjson.com/products/add', data);
    a.subscribe((data) => {
      console.log('data :>> ', data);
      if (data !== undefined) {
        alert(`successfully added `);
      }
    });
  }
  public deleteProducts(id: number) {
    return this.http.delete<ProductData>(this.api + `/${id}`);
  }
  public getProductById(id: number) {
    return this.http.get<Products>(this.api + `/${id}`);
  }
  public updateProduct(data: any, id: string | null) {
    return this.http.put(this.api + `/${id}`, data);
  }
}

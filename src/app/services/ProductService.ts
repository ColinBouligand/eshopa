import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductAPI {
  title: any;
  metacriticLink: any;
  dealID: any;
  storeID: any;
  gameID: any;
  salePrice: any;
  normalPrice: any;
  isOnSale: any;
  savings: any;
  metacriticScore: any;
  steamRatingText: any;
  steamRatingPercent: any;
  steamRatingCount: any;
  steamAppID: any;
  releaseDate: any;
  lastChange: any;
  dealRating: any;
  thumb: any;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductAPI[]> {
    const products = this.http.get<ProductAPI[]>(this.apiUrl);
    console.log(products);

    return products;
  }
}

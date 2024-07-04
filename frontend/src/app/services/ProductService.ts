import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Product } from '../components/item-card/item-card.component';

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

  private allProducts: ProductAPI[] = [];

  private selectedProducts: Product[] = [];
  private unselectedProducts: Product[] = [];

  private productsSubject = new BehaviorSubject<Product[]>(
    this.selectedProducts
  );
  selectedProducts$ = this.productsSubject.asObservable();


  private unselectedProductsSubject = new BehaviorSubject<Product[]>(
    this.unselectedProducts
  );
  unselectedProducts$ = this.unselectedProductsSubject.asObservable();


  constructor(private http: HttpClient) {}

  loadProducts() {
    return this.http.get<ProductAPI[]>(this.apiUrl).pipe(
      tap((data: ProductAPI[]) => {
        this.allProducts = data;
      })
    );
  }

  get products(): ProductAPI[] {
    return this.allProducts;
  }

  get nbSelectedProducts(): number {
    return this.selectedProducts.length
  }

  addProduct(product: Product) {
    this.selectedProducts.push(product);
    this.productsSubject.next(this.selectedProducts);
  }

  removeProduct(product: Product) {
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.id !== product.id
    );
    this.unselectedProducts.push(product)
    this.productsSubject.next(this.selectedProducts);
  }

  clearBasket() {
    this.selectedProducts = [];
    this.productsSubject.next(this.selectedProducts);
  }
}

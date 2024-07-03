import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../components/product-card/product-card.component';
import { ItemLineComponent } from '../../components/item-line/item-line.component';
import { ProductAPI, ProductService } from '../../services/ProductService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemLineComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @Output() productSelectedEvent = new EventEmitter<Product>();

  products: ProductAPI[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductAPI[]) => {
      this.products = data;
    });
  }

  nbSelectedProducts = 0;
  lastSelectedProduct?: Product = undefined;

  receiveSelected(product: Product) {
    this.productSelectedEvent.emit(product);
  }
}

import { Component, OnInit } from '@angular/core';
import {
  ItemCardComponent,
  Product,
} from '../../components/item-card/item-card.component';
import { ProductAPI, ProductService } from '../../services/ProductService';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemCardComponent, CommonModule, FlexLayoutModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: ProductAPI[] = [];

  selectedProducts: Product[] = [];

  ngOnInit(): void {

    this.productService.selectedProducts$.subscribe((selectedProducts) => {
      console.log(selectedProducts)
      this.selectedProducts = selectedProducts;
    });
    this.productService.loadProducts().subscribe(() => {
      this.products = mergeProductAttributes(
        this.productService.products,
        this.selectedProducts
      );
    });

   
  }

  toggleSelection(product: Product) {
    if (product.selected) {
      this.productService.addProduct(product);
    } else {
      this.productService.removeProduct(product);
    }
  }
}

function mergeProductAttributes(
  products: ProductAPI[],
  selectedProducts: Product[]
): ProductAPI[] {
  const selectedMap = new Map(
    selectedProducts.map((item) => [item.id, item.selected])
  );

  return products.map((product) => ({
    ...product,
    selected: selectedMap.get(product.gameID) || false,
  }));
}

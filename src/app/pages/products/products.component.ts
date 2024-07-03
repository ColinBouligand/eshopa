import { Component } from '@angular/core';
import { Product, ProductCardComponent } from '../../components/product-card/product-card.component';
import { ItemLineComponent } from '../../components/item-line/item-line.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemLineComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  nbSelectedProducts = 0;
  lastSelectedProduct?: Product = undefined

  receiveSelected(product: Product) {
    this.lastSelectedProduct = product;
    if (product.selected) {
      this.nbSelectedProducts++
    }
    else {
      this.nbSelectedProducts--
    }
  }
}

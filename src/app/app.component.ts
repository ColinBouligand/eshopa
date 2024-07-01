import { Component } from '@angular/core';
import { Product, ProductCardComponent } from './product-card/product-card.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent, MatToolbar, MatButton, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

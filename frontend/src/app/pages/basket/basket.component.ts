import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/ProductService';
import { Product } from '../../components/item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, MatIconModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  selectedProducts: Product[] = [];
  unselectedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProducts$.subscribe((products) => {
      this.selectedProducts = products;
    });

    this.productService.unselectedProducts$.subscribe((products) => {
      this.unselectedProducts = products;
    });
  }

  resetBasket = () => this.productService.clearBasket()
}

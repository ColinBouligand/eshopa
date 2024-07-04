import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export interface Product {
  id: string,
  price: string,
  selected: boolean
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  id!:string;
  title!: string;
  price!: string;
  description!: string;
  imageUrl!: string;
  isSelected!: boolean;

  ngOnInit(): void {
    this.id = '1';
    this.title = 'Prince of Persia';
    this.price = '99.99$';
    this.description = 'Pas mal ce jeu';
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.isSelected = false;
  }

  @Output() selectedEvent = new EventEmitter<Product>();

  sendSelected() {
    this.isSelected = !this.isSelected;
    this.selectedEvent.emit({ id:this.id, price:this.price, selected:this.isSelected });
  }
}

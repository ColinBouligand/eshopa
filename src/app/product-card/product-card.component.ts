import { Component, EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgModule } from '@angular/core';

export interface Product {
  id: string,
  price: string,
  selected: boolean
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButton],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  id!:string;
  title!: string;
  price!: string;
  description!: string;
  imageUrl!: string;
  selected!: boolean;

  ngOnInit(): void {
    this.id = '1';
    this.title = 'Prince of Persia';
    this.price = '99.99$';
    this.description = 'Pas mal ce jeu';
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.selected = false;
  }

  @Output() selectedEvent = new EventEmitter<Product>();

  sendSelected() {
    this.selected = !this.selected;
    this.selectedEvent.emit({ id:this.id, price:this.price, selected:this.selected });
  }
}

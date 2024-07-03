import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product-card/product-card.component';

@Component({
  selector: 'app-item-line',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './item-line.component.html',
  styleUrl: './item-line.component.scss'
})

export class ItemLineComponent {
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

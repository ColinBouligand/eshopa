import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export interface Product {
  id: string;
  title: string;
  price: string;
  selected: boolean;
}

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isSelected!: boolean;

  @Output() selectedEvent = new EventEmitter<Product>();

  sendSelected() {
    this.isSelected = !this.isSelected;
    this.selectedEvent.emit({
      id: this.id,
      title: this.title,
      price: this.price,
      selected: this.isSelected,
    });
  }
}

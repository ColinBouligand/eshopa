import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() id!:string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isSelected!: boolean;

  @Output() selectedEvent = new EventEmitter<Product>();

  sendSelected() {
    this.isSelected = !this.isSelected;
    this.selectedEvent.emit({ id:this.id, price:this.price, selected:this.isSelected });
  }
}

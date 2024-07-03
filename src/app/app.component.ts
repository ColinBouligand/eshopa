import { Component, importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { Product } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nbSelectedProducts = 0;
  lastSelectedProduct?: Product = undefined;

  onActivate(event: any) {
    if (event.productSelectedEvent) {
      event.productSelectedEvent.subscribe((product: Product) => {
        this.productSelectedEvent(product);
      });
    }
  }

  productSelectedEvent(product: Product) {
    this.lastSelectedProduct = product;
    if (product.selected) {
      this.nbSelectedProducts++;
    } else {
      this.nbSelectedProducts--;
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
});

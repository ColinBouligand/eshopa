import { Component, importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from './services/ProductService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts().subscribe();
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
});

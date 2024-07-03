import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
    { path: 'basket', loadComponent: () => import('./pages/basket/basket.component').then(m => m.BasketComponent) },
  ];
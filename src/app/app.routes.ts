import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'fragrances',
        loadComponent: () =>
          import('./pages/fragrances/fragrances.component').then(
            (m) => m.FragrancesComponent
          )
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product-details/product-details.component').then(
            (m) => m.ProductDetailsComponent
          ),
          data: {
      renderMode: 'client'  // خلي Angular يعرض الصفحة على المتصفح بدون prerendering
    }
      },
      {
        path: 'cart',
        loadComponent: () =>
         import('./cart/cart.component').then(
          (m) => m.CartComponent)
      }      
];
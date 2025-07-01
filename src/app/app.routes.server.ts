import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRODUCTS } from './data/product';

export const serverRoutes: ServerRoute[] = [
   {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return PRODUCTS.map((product) => ({ id: String(product.id) }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

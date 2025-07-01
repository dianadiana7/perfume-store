import { Component, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../data/product';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fragrances',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './fragrances.component.html',
  styleUrl: './fragrances.component.css'
})
export class FragrancesComponent {
  products = signal<Product[]>(PRODUCTS);

  perfumes = computed(() => this.products().filter(p => p.category === 'perfume'));
  oils = computed(() => this.products().filter(p => p.category === 'oil'));
  incense = computed(() => this.products().filter(p => p.category === 'incense'));
  soap = computed(() => this.products().filter(p => p.category === 'soap'));
  vaseline = computed(() => this.products().filter(p => p.category === 'vaseline'));
  bodymists = computed(() => this.products().filter(p => p.category === 'Body Mist'));
  deodorant = computed(() => this.products().filter(p => p.category === 'deoorant'));
  candle = computed(() => this.products().filter(p => p.category === 'candle'));
  gloss = computed(() => this.products().filter(p => p.category === 'gloss'));
  aromaDiffusers = computed(() => this.products().filter(p => p.category === 'aroma diffusers'));
}
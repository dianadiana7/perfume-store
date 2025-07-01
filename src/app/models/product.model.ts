export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    type: string;
	topNotes: string;
	heartNotes: string;
	baseNotes: string;
	scentProfile: string;
	longevityProjection: string;
	bestfor: string;
	bottleDesign: string;
    category: 'perfume' | 'cream' | 'oil' | 'incense' | 'soap' | 'aroma diffusers'|
     'deoorant' | 'vaseline' | 'Body Mist' | 'candle' | 'gloss';
}
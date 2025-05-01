
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  type: string;
  color: string;
  size: string;
  description: string;
  isVintage: boolean;
  isNewArrival: boolean;
}

export type ProductFilterOptions = {
  category?: string;
  type?: string;
  color?: string;
  size?: string;
  priceRange?: [number, number];
  isVintage?: boolean;
  isNewArrival?: boolean;
}

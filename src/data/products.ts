
import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Silk Midi Dress",
    price: 189,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000",
    category: "dresses",
    type: "midi",
    color: "pink",
    size: "s",
    description: "Elegant silk midi dress with delicate detailing, perfect for summer events.",
    isVintage: false,
    isNewArrival: true
  },
  {
    id: 2,
    name: "Vintage Blazer",
    price: 145,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1000",
    category: "outerwear",
    type: "blazer",
    color: "cream",
    size: "m",
    description: "Vintage cream blazer from the 80s, restored and tailored for modern wear.",
    isVintage: true,
    isNewArrival: false
  },
  {
    id: 3,
    name: "Pearl Button Cardigan",
    price: 110,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000",
    category: "knitwear",
    type: "cardigan",
    color: "white",
    size: "l",
    description: "Soft knit cardigan with pearl details, handcrafted in our atelier.",
    isVintage: false,
    isNewArrival: true
  },
  {
    id: 4,
    name: "High-Waisted Trousers",
    price: 135,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1000",
    category: "bottoms",
    type: "trousers",
    color: "black",
    size: "s",
    description: "Elegant high-waisted trousers with a wide leg silhouette.",
    isVintage: false,
    isNewArrival: false
  },
  {
    id: 5,
    name: "1970s Silk Scarf",
    price: 65,
    image: "https://images.unsplash.com/photo-1588032786045-59cefda005c0?q=80&w=1000",
    category: "accessories",
    type: "scarf",
    color: "multi",
    size: "one-size",
    description: "Genuine 1970s silk scarf with vibrant floral pattern.",
    isVintage: true,
    isNewArrival: false
  },
  {
    id: 6,
    name: "Atelier Blouse",
    price: 120,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000",
    category: "tops",
    type: "blouse",
    color: "white",
    size: "m",
    description: "Handcrafted blouse with intricate embroidery details.",
    isVintage: false,
    isNewArrival: true
  },
  {
    id: 7,
    name: "Pleated Midi Skirt",
    price: 95,
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1000",
    category: "bottoms",
    type: "skirt",
    color: "pink",
    size: "s",
    description: "Light pink pleated midi skirt, perfect for spring and summer.",
    isVintage: false,
    isNewArrival: true
  },
  {
    id: 8,
    name: "Vintage Evening Bag",
    price: 75,
    image: "https://images.unsplash.com/photo-1637737118663-f1a53ae85942?q=80&w=1000",
    category: "accessories",
    type: "bag",
    color: "gold",
    size: "one-size",
    description: "Vintage evening bag with gold details from the 1960s.",
    isVintage: true,
    isNewArrival: false
  }
];

export const getUniqueValues = (field: keyof Product) => {
  return [...new Set(products.map(product => product[field]))];
};

export const getMinMaxPrice = () => {
  const prices = products.map(product => product.price);
  return [Math.min(...prices), Math.max(...prices)] as [number, number];
};

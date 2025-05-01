
import { Link } from 'react-router-dom';
import { Product } from '@/types/Product';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        {/* Product image */}
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNewArrival && (
            <span className="bg-brand-pink text-xs px-2 py-1 font-medium">
              New
            </span>
          )}
          {product.isVintage && (
            <span className="bg-black text-white text-xs px-2 py-1 font-medium">
              Vintage
            </span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={18} />
        </button>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg mb-1 hover:text-brand-pink transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-medium mb-3">${product.price}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 capitalize">
            {product.size} · {product.color}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs border-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

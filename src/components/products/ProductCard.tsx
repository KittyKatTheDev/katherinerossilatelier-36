
import { Link } from 'react-router-dom';
import { Product } from '@/types/Product';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`
      });
    } else {
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist.`
      });
    }
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-sm">
        {/* Product image */}
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[3/4] overflow-hidden bg-gray-50">
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
        <button 
          className={`absolute top-2 right-2 p-1.5 rounded-full transition-all ${
            isWishlisted 
              ? 'bg-brand-pink text-white opacity-100' 
              : 'bg-white text-gray-700 opacity-0 group-hover:opacity-100'
          }`}
          onClick={handleWishlist}
        >
          <Heart size={18} fill={isWishlisted ? "white" : "none"} />
        </button>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg mb-1 hover:text-brand-pink transition-colors truncate">
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
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

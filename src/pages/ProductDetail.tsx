
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { products } from '@/data/products';
import { toast } from '@/components/ui/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Find the product
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  // Similar products (same category or color)
  const similarProducts = products
    .filter(p => p.id !== product?.id && (p.category === product?.category || p.color === product?.color))
    .slice(0, 4);
  
  // If product doesn't exist, navigate to shop
  useEffect(() => {
    if (!product && id) {
      toast({
        title: "Product Not Found",
        description: "The product you're looking for doesn't exist.",
        variant: "destructive"
      });
      navigate('/shop');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null; // Will redirect in the useEffect
  }
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart.`
    });
  };
  
  const handleToggleWishlist = () => {
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
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/shop" className="text-sm text-gray-600 hover:text-brand-pink transition-colors">
            ← Back to Shopping
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto rounded-md mb-4"
            />
            
            {/* Additional product images (if available) */}
            {similarProducts.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">You may also like:</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {similarProducts.map((similarProduct) => (
                      <CarouselItem key={similarProduct.id} className="basis-1/3 sm:basis-1/4">
                        <Link to={`/product/${similarProduct.id}`}>
                          <div className="aspect-square overflow-hidden rounded-md">
                            <img 
                              src={similarProduct.image} 
                              alt={similarProduct.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div>
            {/* Product badges */}
            <div className="flex gap-2 mb-3">
              {product.isNewArrival && (
                <span className="bg-brand-pink text-xs px-2 py-1 font-medium">
                  New Arrival
                </span>
              )}
              {product.isVintage && (
                <span className="bg-black text-white text-xs px-2 py-1 font-medium">
                  Vintage
                </span>
              )}
            </div>
            
            {/* Product name and price */}
            <h1 className="font-serif text-3xl mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-4">${product.price}</p>
            
            {/* Product details */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-sm font-medium">Color:</span>
                  <p className="capitalize">{product.color}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Size:</span>
                  <p className="uppercase">{product.size}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Category:</span>
                  <p className="capitalize">{product.category}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Type:</span>
                  <p className="capitalize">{product.type}</p>
                </div>
              </div>
            </div>
            
            {/* Quantity selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Quantity:</p>
              <div className="flex items-center border rounded-md w-min">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-xl focus:outline-none border-r"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-xl focus:outline-none border-l"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="flex-1 bg-brand-pink hover:bg-brand-pink/90 text-black py-6"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className={`flex-1 py-6 ${
                  isWishlisted 
                    ? 'bg-brand-pink/10 border-brand-pink text-brand-pink'
                    : 'border-brand-pink hover:bg-brand-pink/10'
                }`}
                onClick={handleToggleWishlist}
              >
                <Heart size={18} className="mr-2" fill={isWishlisted ? "currentColor" : "none"} />
                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Button>
            </div>
            
            {/* Additional info */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Shipping:</strong> Free shipping on orders over $150
              </p>
              <p className="text-sm text-gray-600">
                <strong>Returns:</strong> Easy returns within 14 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;


import { useState, useEffect } from 'react';
import { Product, ProductFilterOptions } from '@/types/Product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  filters: ProductFilterOptions;
}

const ProductGrid = ({ products, filters }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const applyFilters = () => {
      let result = [...products];
      
      // Apply category filter
      if (filters.category) {
        result = result.filter(product => product.category === filters.category);
      }
      
      // Apply type filter
      if (filters.type) {
        result = result.filter(product => product.type === filters.type);
      }
      
      // Apply color filter
      if (filters.color) {
        result = result.filter(product => product.color === filters.color);
      }
      
      // Apply size filter
      if (filters.size) {
        result = result.filter(product => product.size === filters.size);
      }
      
      // Apply price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        result = result.filter(product => product.price >= min && product.price <= max);
      }
      
      // Apply vintage filter
      if (filters.isVintage !== undefined) {
        result = result.filter(product => product.isVintage === filters.isVintage);
      }
      
      // Apply new arrival filter
      if (filters.isNewArrival !== undefined) {
        result = result.filter(product => product.isNewArrival === filters.isNewArrival);
      }
      
      setFilteredProducts(result);
    };
    
    applyFilters();
  }, [products, filters]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-500">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

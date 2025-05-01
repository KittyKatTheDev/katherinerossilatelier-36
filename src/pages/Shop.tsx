
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/filters/ProductFilters';
import { ProductFilterOptions } from '@/types/Product';
import { products } from '@/data/products';

const Shop = () => {
  const location = useLocation();
  const [filters, setFilters] = useState<ProductFilterOptions>({});

  // Parse URL query parameters for initial filter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.get('filter');

    if (filterParam === 'new-arrivals') {
      setFilters({ isNewArrival: true });
    } else if (filterParam === 'vintage') {
      setFilters({ isVintage: true });
    }
  }, [location.search]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl mb-3 text-center">Shop Collection</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore our curated selection of atelier and vintage pieces
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-1/4">
            <ProductFilters setFilters={setFilters} />
          </div>

          {/* Product grid */}
          <div className="w-full md:w-3/4">
            <ProductGrid products={products} filters={filters} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

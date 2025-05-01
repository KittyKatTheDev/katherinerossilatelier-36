
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const Index = () => {
  const newArrivals = products.filter(product => product.isNewArrival).slice(0, 4);
  const vintageItems = products.filter(product => product.isVintage).slice(0, 4);

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1564436144149-73487b04e8ba?q=80&w=2000')", 
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
              Timeless Elegance for the Modern Woman
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Discover our curated collection of atelier and vintage pieces
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-brand-pink text-black hover:bg-white hover:text-black"
              >
                <Link to="/shop">Shop Collection</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Link to="/about">About Katherine Rossil</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* New arrivals section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl mb-2 text-center">New Arrivals</h2>
          <p className="text-center text-gray-600 mb-10">Our latest atelier pieces and finds</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-brand-pink hover:bg-brand-pink hover:text-black"
            >
              <Link to="/shop?filter=new-arrivals">View All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Feature banner */}
      <section className="py-16 bg-brand-pink/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000" 
                alt="Vintage Collection" 
                className="rounded-lg shadow-md w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">Vintage Collection</h2>
              <p className="text-gray-700 mb-6">
                Each piece in our vintage collection is carefully selected and restored
                to bring timeless fashion to your wardrobe. We believe in giving new life
                to exceptional garments with rich histories and impeccable craftsmanship.
              </p>
              <Button
                asChild
                className="bg-brand-pink hover:bg-brand-pink/90 text-black"
              >
                <Link to="/shop?filter=vintage">Explore Vintage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vintage picks section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl mb-2 text-center">Vintage Picks</h2>
          <p className="text-center text-gray-600 mb-10">Curated vintage treasures</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {vintageItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-brand-pink hover:bg-brand-pink hover:text-black"
            >
              <Link to="/shop?filter=vintage">View All Vintage</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <h2 className="font-serif text-3xl mb-2">Stay Connected</h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter for early access to new arrivals, 
            exclusive vintage finds, and styling inspiration.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-pink"
              required
            />
            <Button 
              type="submit"
              className="bg-brand-pink hover:bg-brand-pink/90 text-black whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

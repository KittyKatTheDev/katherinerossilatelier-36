
import Layout from '@/components/layout/Layout';
import StylistBot from '@/components/stylist/StylistBot';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const Index = () => {
  // Select a few featured products to show on homepage
  const featuredProducts = products.filter(product => product.isNewArrival).slice(0, 4);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center my-16 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Katherine Rossil</h1>
          <p className="text-xl text-gray-600 mb-8">Atelier & Vintage Collection</p>
          <p className="text-gray-600 mb-8">
            Discover our curated collection of handcrafted contemporary pieces and 
            thoughtfully selected vintage treasures.
          </p>
        </section>
        
        {/* Featured Products Section */}
        <section className="my-16">
          <h2 className="font-serif text-3xl text-center mb-6">New Arrivals</h2>
          <p className="text-gray-600 text-center mb-8">
            Explore our latest additions to the collection
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-md mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg mb-1 group-hover:text-brand-pink transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-medium">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-brand-pink hover:bg-brand-pink/90">
              <Link to="/shop">Shop All Collections</Link>
            </Button>
          </div>
        </section>
        
        {/* Vintage Collection Banner */}
        <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-8 rounded-lg">
          <div>
            <h2 className="font-serif text-3xl mb-4">Vintage Treasures</h2>
            <p className="text-gray-600 mb-6">
              Discover our curated selection of unique vintage pieces that bring timeless elegance to your wardrobe.
              Each item has been carefully selected for its quality and distinctive character.
            </p>
            <Button asChild variant="outline" className="border-brand-pink hover:bg-brand-pink hover:text-white">
              <Link to="/shop?filter=vintage">Explore Vintage</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.filter(product => product.isVintage).slice(0, 4).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden rounded-md">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Stylist Bot Integration */}
        <section className="my-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-6">Your Personal Stylist</h2>
          <p className="text-gray-600 text-center mb-8">
            Get personalized fashion advice tailored to your unique style preferences 
            and body type.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <StylistBot displayOnHomepage={true} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

import Layout from '@/components/layout/Layout';
import StylistBot from '@/components/stylist/StylistBot';

const Index = () => {
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
        
        {/* Other homepage content */}
      </div>
      
      {/* Personal Stylist Bot */}
      <StylistBot />
    </Layout>
  );
};

export default Index;

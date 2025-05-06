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
        
        {/* Other homepage content */}
      </div>
    </Layout>
  );
};

export default Index;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="font-serif text-6xl mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Born from a deep love for all things vintage and a commitment to protecting the planet, our business is more than just a shop — it's a way of life. We believe in the beauty of timeless pieces and the stories they carry. By giving pre-loved items a second chance, we’re not only embracing style with character, but also reducing waste and promoting a more sustainable way to consume.</p>
          <p className="mb-8 text-gray-950">Our obsession with vintage isn’t just about aesthetics — it’s about slowing down, choosing quality over quantity, and honoring craftsmanship that stands the test of time. Whether you're here to find your next statement piece or support eco-conscious living, we're so glad you're part of this journey with us.</p>
          <Button asChild className="bg-brand-pink hover:bg-brand-pink/90 text-black">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>;
};
export default NotFound;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="font-serif text-6xl mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="mb-8 text-gray-500">
            The page might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-brand-pink hover:bg-brand-pink/90 text-black">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

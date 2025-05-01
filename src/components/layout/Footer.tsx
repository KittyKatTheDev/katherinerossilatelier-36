
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-xl mb-4">Katherine Rossil</h3>
            <p className="text-sm text-gray-600 mb-4">
              Unique atelier and vintage pieces curated for the modern woman.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-lg mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-brand-pink transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop/new-arrivals" className="hover:text-brand-pink transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop/vintage" className="hover:text-brand-pink transition-colors">
                  Vintage Collection
                </Link>
              </li>
              <li>
                <Link to="/shop/atelier" className="hover:text-brand-pink transition-colors">
                  Atelier Pieces
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-serif text-lg mb-3">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-pink transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-brand-pink transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-pink transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@katherinerossil.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>123 Fashion Avenue</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Katherine Rossil Atelier & Vintage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

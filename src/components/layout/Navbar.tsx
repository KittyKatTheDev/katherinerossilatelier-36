
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-semibold">
          Katherine Rossil <span className="text-brand-pink text-xl">Atelier & Vintage</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-brand-pink transition-colors">
            Home
          </Link>
          <Link to="/shop" className="hover:text-brand-pink transition-colors">
            Shop
          </Link>
          <Link to="/about" className="hover:text-brand-pink transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-brand-pink transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="hover:text-brand-pink transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/cart" className="hover:text-brand-pink transition-colors">
            <ShoppingCart size={20} />
          </Link>
          <Link to="/account" className="hover:text-brand-pink transition-colors">
            <User size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="py-2 hover:text-brand-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="py-2 hover:text-brand-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="py-2 hover:text-brand-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 hover:text-brand-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

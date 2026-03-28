import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onScrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  shopRef: React.RefObject<HTMLElement>;
  categoriesRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  onCartClick, 
  onScrollToSection,
  shopRef,
  categoriesRef,
  aboutRef,
  contactRef
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Shop', action: () => onScrollToSection(shopRef) },
    { name: 'Categories', action: () => onScrollToSection(categoriesRef) },
    { name: 'About', action: () => onScrollToSection(aboutRef) },
    { name: 'Contact', action: () => onScrollToSection(contactRef) },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reduced height */}
        <div className="flex justify-between items-center h-10">

          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-lg text-stone-800">
              Verdant
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-600 
                           hover:text-primary hover:bg-stone-100 
                           transition-all duration-150"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            
            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 rounded-lg hover:bg-stone-100 transition-all"
            >
              <ShoppingCart className="w-4.5 h-4.5 text-stone-700" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 
                                 bg-primary text-white text-[10px] rounded-full 
                                 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-all"
            >
              {isMenuOpen ? (
                <X className="w-4.5 h-4.5" />
              ) : (
                <Menu className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-3 border-t border-stone-200"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg text-sm text-stone-600 
                             hover:text-primary hover:bg-stone-100 
                             transition-all text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
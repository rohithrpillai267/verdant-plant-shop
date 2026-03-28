

import { useState, useEffect, useRef, type RefObject } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ShopSection } from './components/ShopSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LoadingScreen } from './components/LoadingScreen';
import { CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Refs for scrolling
  const shopRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (plant: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === plant.id);
      if (existing) {
        return prev.map(item => 
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      const offset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-emerald-900/10">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onScrollToSection={scrollToSection}
        shopRef={shopRef} 
        categoriesRef={categoriesRef} 
        aboutRef={aboutRef} 
        contactRef={contactRef}
      />

      <Hero />

      <main className="w-[80%] mx-auto py-1 space-y-24">
        <ShopSection 
          ref={shopRef}
          onAddToCart={addToCart}
        />
        
        <AboutSection ref={aboutRef} />
        
        <ContactSection ref={contactRef} />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems} 
        onUpdateQuantity={updateQuantity} 
        onRemove={removeFromCart}
      />
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import ShopGrid from './components/ShopGrid';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const STOCK_LIMIT = 6;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        if (existingItem.quantity >= STOCK_LIMIT) {
          return prevItems;
        }
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === productName) {
          const newQuantity = item.quantity + delta;
          if (newQuantity > STOCK_LIMIT) return item;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  const checkout = () => {
    const phoneNumber = "2348065449573";
    const orderDetails = cartItems
      .map((item) => `${item.name} (x${item.quantity}) - ₦${item.price.toLocaleString()}`)
      .join("\n");
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const message = encodeURIComponent(`Hello 3com, I'd like to place an order:\n\n${orderDetails}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease confirm my order.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {currentView === 'home' ? (
            <div className="overflow-x-hidden">
              <div id="home">
                <Hero />
              </div>
              <Brands />
              <Features />

              <ShopGrid onAddToCart={addToCart} cartItems={cartItems} />

              {/* Limited Offer Banner */}
              <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] bg-black rounded-[40px] overflow-hidden items-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
                  >
                    <div className="h-[400px] lg:h-[550px] overflow-hidden">
                      <motion.img
                        src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=1000"
                        alt="Limited Offer"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 10 }}
                      />
                    </div>
                    <div className="p-12 lg:p-20 text-white text-left space-y-8">
                      <div className="px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full w-fit text-[11px] font-black tracking-[3px] uppercase">
                        Friday Special
                      </div>
                      <h2 className="text-4xl lg:text-6xl font-black leading-[1.1]">35% off extra <br /><span className="text-primary italic">this weekend only</span></h2>
                      <p className="text-lg opacity-70 max-w-[500px] leading-relaxed">Upgrade your workstation with our premium selection. Get an exclusive tech-kit gift with every purchase over ₦3,000,000.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-10 py-4 rounded-full font-black flex items-center gap-3 transition-shadow hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group"
                      >
                        Grab it now
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </section>

              <FAQ />

              <div id="newsletter">
                <Newsletter />
              </div>
            </div>
          ) : (
            <Contact />
          )}
        </motion.main>
      </AnimatePresence>

      <div id="contact">
        <Footer />
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={checkout}
      />
    </div>
  );
};

export default App;
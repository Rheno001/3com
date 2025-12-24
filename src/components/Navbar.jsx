import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/3com-logo.png';

const Navbar = ({ cartCount, onCartClick, currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', view: 'home', href: '#' },
    { label: 'Shop', view: 'home', href: '#shop' },
    { label: 'Services', view: 'home', href: '#services' },
    { label: 'Newsletter', view: 'home', href: '#newsletter' },
    { label: 'Contact Us', view: 'contact', href: '#' },
  ];

  return (
    <nav className="h-[80px] lg:h-[100px] bg-white/70 backdrop-blur-lg border-b border-border-main sticky top-0 z-[1001] flex items-center transition-all duration-300">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center w-full relative">
        {/* Left: Logo */}
        <div className="flex items-center">
          <motion.a
            href="#"
            className="shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home')}
          >
            <img src={logo} alt="3com Logo" className="h-[45px] lg:h-[55px] w-auto object-contain" />
          </motion.a>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex justify-center items-center">
          <ul className="flex gap-10 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-base font-semibold transition-colors whitespace-nowrap relative group ${currentView === link.view && link.label === 'Contact Us' ? 'text-primary' : 'text-text-muted hover:text-primary'}`}
                  onClick={() => handleNavClick(link.view)}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-4 lg:gap-6">
          <motion.button
            className="relative text-black p-2.5 rounded-full hover:bg-bg-offset transition-all flex items-center justify-center"
            onClick={onCartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 bg-primary text-white text-[11px] font-black w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Hamburger Menu Toggle */}
          <motion.button
            className="lg:hidden flex items-center justify-center text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 w-full bg-white/80 backdrop-blur-xl border-b border-border-main p-8 z-[1000] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] lg:hidden top-[80px]"
          >
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`text-2xl font-bold block ${currentView === link.view && link.label === 'Contact Us' ? 'text-primary' : 'text-black'}`}
                    onClick={() => handleNavClick(link.view)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

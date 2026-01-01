import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-[2000] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-full max-w-[500px] bg-white h-full flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.2)] relative z-[2001]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 border-b border-border-main flex justify-between items-center">
              <h2 className="text-3xl font-black tracking-tight text-black">Your Cart</h2>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-50 rounded-full transition-colors hover:bg-red-50 hover:text-red-500"
                onClick={onClose}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-8 text-center">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  </div>
                  <p className="text-xl text-text-muted font-medium">Your shopping cart <br />is currently empty</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="bg-black text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-black/10"
                  >
                    Start Shopping
                  </motion.button>
                </div>
              ) : (
                <ul className="flex flex-col gap-8 m-0 p-0 list-none">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.li
                        key={item.name}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-6 items-center bg-white p-4 rounded-[24px] border border-border-main hover:shadow-lg transition-shadow"
                      >
                        <div className="w-24 h-24 bg-gray-50 rounded-[18px] overflow-hidden p-2">
                          <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-black leading-tight text-black">{item.name}</h3>
                          <p className="font-extrabold text-xl text-primary">₦{item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-4 bg-gray-50 w-fit px-3 py-1.5 rounded-full border border-border-main">
                            <motion.button whileTap={{ scale: 0.8 }} className="text-xl font-black px-2 hover:text-primary" onClick={() => onUpdateQuantity(item.name, -1)}>-</motion.button>
                            <span className="font-black text-lg w-6 text-center">{item.quantity}</span>
                            <motion.button whileTap={{ scale: 0.8 }} className="text-xl font-black px-2 hover:text-primary" onClick={() => onUpdateQuantity(item.name, 1)}>+</motion.button>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-500 p-3 hover:bg-red-50 rounded-full transition-colors shrink-0"
                          onClick={() => onRemove(item.name)}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </motion.button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="p-8 border-t border-border-main bg-white"
              >
                <div className="flex justify-between text-2xl font-black mb-10 text-black">
                  <span>Subtotal</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-[22px] font-black text-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] shadow-xl flex items-center justify-center gap-4"
                  onClick={onCheckout}
                >
                  Proceed to WhatsApp
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;

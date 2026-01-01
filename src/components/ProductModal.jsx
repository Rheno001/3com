import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ isOpen, product, onClose, onAddToCart, cartQuantity }) => {
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return null;

  const images = [product.img, ...product.extraImgs];
  const isStockLimitReached = cartQuantity >= 6;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-[3000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-[1200px] h-[90vh] lg:h-auto lg:max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row relative z-[3001]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col gap-4 bg-[#f8fafc]">
              <div className="flex-1 bg-white rounded-[32px] overflow-hidden relative group">
                <motion.img
                  key={activeImg}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={images[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImg(idx)}
                    className={`aspect-video rounded-2xl bg-white p-2 cursor-pointer border-2 transition-all overflow-hidden ${activeImg === idx ? 'border-primary ring-4 ring-primary/5' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-14 overflow-y-auto custom-scrollbar flex flex-col justify-between bg-white">
              <div className="space-y-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">{product.name}</h2>
                    <div className="flex items-center gap-4">
                      <p className="text-3xl font-black text-primary">₦{product.price.toLocaleString()}</p>
                      <span className="bg-gray-50 text-text-muted px-4 py-1.5 rounded-full border border-border-main text-sm font-black uppercase tracking-widest">In Stock</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-4 bg-gray-50 text-gray-400 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-gray-400">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <span className="text-[11px] font-black uppercase tracking-wider text-primary opacity-80">{key}</span>
                        <p className="font-bold text-black border-b border-gray-50 pb-2">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f8fafc] p-6 rounded-[24px] border border-border-main flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <p className="text-sm font-bold text-text-main leading-relaxed">
                    Comes with 2-weeks warranty and 30-day free technical support from 3com team.
                  </p>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-border-main flex flex-col gap-4">
                <div className="flex justify-between items-center px-2 text-sm font-black tracking-widest uppercase text-gray-400">
                  <span>Cart Status</span>
                  <span>{cartQuantity} / 6 items</span>
                </div>
                <motion.button
                  disabled={isStockLimitReached}
                  onClick={() => { onAddToCart(product); onClose(); }}
                  whileHover={!isStockLimitReached ? { scale: 1.02 } : {}}
                  whileTap={!isStockLimitReached ? { scale: 0.98 } : {}}
                  className={`w-full py-5 rounded-[22px] font-black text-xl transition-all flex items-center justify-center gap-4 ${isStockLimitReached ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' : 'bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]'}`}
                >
                  {isStockLimitReached ? 'Stock Limit Reached' : 'Add to Cart'}
                  {!isStockLimitReached && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

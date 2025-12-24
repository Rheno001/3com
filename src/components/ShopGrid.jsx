import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

const ShopGrid = ({ onAddToCart, cartItems }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const laptops = [
    {
      id: 1,
      name: 'MacBook Pro 14" (M3 Max)',
      price: 3199,
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1026',
      extraImgs: [
        'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1170'
      ],
      specs: {
        model: 'Apple MacBook Pro 2024',
        battery: 'Up to 22 hours',
        os: 'macOS Sonoma',
        graphics: '30-core GPU',
        ram: '36GB Unified Memory',
        storage: '1TB SSD'
      }
    },
    {
      id: 2,
      name: 'Dell XPS 15 9530',
      price: 1899,
      img: 'https://images.unsplash.com/photo-1593642632823-8f785bc67bf7?auto=format&fit=crop&q=80&w=1170',
      extraImgs: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=1170'
      ],
      specs: {
        model: 'Dell XPS 15 (2023)',
        battery: '9-12 hours',
        os: 'Windows 11 Pro',
        graphics: 'NVIDIA GeForce RTX 4060',
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD'
      }
    },
    {
      id: 3,
      name: 'ASUS ROG Zephyrus G14',
      price: 1599,
      img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1170',
      extraImgs: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1030',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1171'
      ],
      specs: {
        model: 'GA402XV',
        battery: '8-10 hours',
        os: 'Windows 11 Home',
        graphics: 'RTX 4070 8GB',
        ram: '16GB DDR5',
        storage: '512GB SSD'
      }
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad X1 Carbon',
      price: 1450,
      img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000',
      extraImgs: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1030',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1171'
      ],
      specs: {
        model: 'Gen 11',
        battery: 'Up to 15 hours',
        os: 'Windows 11 Pro',
        graphics: 'Intel Iris Xe',
        ram: '16GB LPDDR5',
        storage: '512GB SSD'
      }
    },
    {
      id: 5,
      name: 'HP Spectre x360',
      price: 1299,
      img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1030',
      extraImgs: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1026',
        'https://images.unsplash.com/photo-1593642632823-8f785bc67bf7?auto=format&fit=crop&q=80&w=1170'
      ],
      specs: {
        model: '14-ef2000',
        battery: '13 hours',
        os: 'Windows 11 Home',
        graphics: 'Intel Iris Xe',
        ram: '16GB RAM',
        storage: '512GB SSD'
      }
    },
    {
      id: 6,
      name: 'Microsoft Surface Laptop 5',
      price: 999,
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1171',
      extraImgs: [
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1593642632823-8f785bc67bf7?auto=format&fit=crop&q=80&w=1170'
      ],
      specs: {
        model: 'Surface 13.5"',
        battery: '18 hours',
        os: 'Windows 11',
        graphics: 'Intel Iris Xe',
        ram: '8GB RAM',
        storage: '256GB SSD'
      }
    }
  ];

  const getCartQuantity = (productName) => {
    const item = cartItems.find(i => i.name === productName);
    return item ? item.quantity : 0;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-[800px]"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-left mb-6 text-black tracking-tight">Shop with Us</h2>
          <p className="text-lg lg:text-xl text-text-muted leading-relaxed">
            Premium laptops(Brand new/UK used) curated for performance and reliability. Click on any laptop for full details.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {laptops.map((laptop) => (
            <motion.div
              key={laptop.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white overflow-hidden border border-border-main transition-all duration-300 cursor-pointer flex flex-col hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:border-primary group"
              onClick={() => setSelectedProduct(laptop)}
            >
              <div className="relative aspect-[16/11] bg-[#f8fafc] overflow-hidden">
                <motion.img
                  src={laptop.img}
                  alt={laptop.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-black text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="py-2 px-6 border-2 border-white rounded-full">Explore Specs</div>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{laptop.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-black text-primary">${laptop.price.toLocaleString()}</p>
                    <div className="text-[11px] uppercase tracking-widest font-black text-text-muted bg-bg-offset px-4 py-1.5 rounded-full border border-border-main">5 left</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
        cartQuantity={selectedProduct ? getCartQuantity(selectedProduct.name) : 0}
      />
    </section>
  );
};

export default ShopGrid;

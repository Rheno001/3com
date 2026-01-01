import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

// Local Assets
import alienwareImg from '../assets/Alienware-15-R3.jpeg';
import alienwareExtra from '../assets/Alienware-15-R3(2).jpeg';
import asusImg from '../assets/Asus-rog-trix.jpeg';
import asusExtra from '../assets/Asus-rog-trix(2).jpeg';
import asusROG from '../assets/Asus-ROG-Zeph.jpeg';
import asusROG2 from '../assets/Asus-ROG(2).jpeg';

const ShopGrid = ({ onAddToCart, cartItems }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const laptops = [
    {
      id: 1,
      name: 'Alienware 15 R3',
      price: 900000,
      img: alienwareImg,
      extraImgs: [
        alienwareExtra
      ],
      specs: {
        model: 'ALIENWARE 15 R3',
        battery: 'Up to 22 hours',
        processor: 'Intel corei7(7th gen @2.90GHz. 4cores)',
        graphics: '8gb dedicated graphics(Nvidia GeForce GTX 1080 with Max-Q)',
        ram: '32gb RAM',
        storage: '512gb SSD + 1TB HDD',
        display: '15.6" Full HD',
        keyboardlight: 'RGB',
        os: 'Licensed Windows 11',
      }
    },
    {
      id: 2,
      name: 'Asus ROG Strix',
      price: 850000,
      img: asusImg,
      extraImgs: [
        asusExtra
      ],
      specs: {
        model: 'Asus ROG Strix',
        processor: 'Intel corei7(9th gen @2.60GHz. 6cores)',
        os: 'Licensed Windows 11',
        graphics: '4GB Dedicated NVIDIA GeForce GTX 1650',
        ram: '32GB DDR4',
        keyboardlight: 'RGB',
        display: '15.6" Full HD',
        storage: '512GB SSD M.2 NVMe SSD'
      }
    },
    {
      id: 3,
      name: 'ASUS ROG Zephyrus G14',
      price: 800000,
      img: asusROG,
      extraImgs: [
        asusROG2
      ],
      specs: {
        model: 'Asus ROG Zephyrus G14',
        processor: 'AMD Ryzen 7(10th gen @3.20GHz. 8cores)',
        os: 'Licensed Windows 11',
        graphics: '4GB dedicated graphics(Nvidia Geforce GTX 1650)',
        ram: '16GB DDR4',
        storage: '512GB SSD M.2 NVMe',
        display: '14" Full HD',
        keyboardlight: 'RGB',
      }
    },
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
                    <p className="text-2xl font-black text-primary">₦{laptop.price.toLocaleString()}</p>
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

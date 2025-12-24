import React from 'react';
import { motion } from 'framer-motion';
import dellLogo from '../assets/dell-png-logo-3755.webp';
import samsungLogo from '../assets/samsung-logo-png-1305.webp';

const Brands = () => {
  const brands = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Dell', logo: dellLogo },
    { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
    { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Asus_Logo.svg' },
    { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Acer_Logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Samsung', logo: samsungLogo },
  ];

  // Duplicate brands for infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 border-y border-border-main bg-white overflow-hidden relative">
      {/* Side Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap gap-20 lg:gap-32 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 lg:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;

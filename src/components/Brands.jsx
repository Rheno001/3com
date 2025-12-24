import React from 'react';
import { motion } from 'framer-motion';
import dellLogo from '../assets/dell-png-logo-3755.webp';
import samsungLogo from '../assets/samsung-logo-png-1305.webp';
import alienwareLogo from '../assets/Alienware-Logo.webp';
import razerLogo from '../assets/Razer-logo.webp';
import hpLogo from '../assets/hp-logo.webp';
import msiLogo from '../assets/msi-logo-1.webp';

const Brands = () => {
  const brands = [
    { name: 'Dell', logo: dellLogo },
    { name: 'Samsung', logo: samsungLogo },
    { name: 'HP', logo: hpLogo },
    { name: 'MSI', logo: msiLogo },
    { name: 'Razer', logo: razerLogo },
    { name: 'Alienware', logo: alienwareLogo },
  ];

  // Duplicate brands for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 border-y border-border-main bg-white overflow-hidden relative">
      {/* Side Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max">
        <motion.div
          className="flex whitespace-nowrap gap-16 lg:gap-24 items-center px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer min-w-[120px] lg:min-w-[180px]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 lg:h-12 w-auto object-contain max-w-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;

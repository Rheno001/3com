import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] lg:h-[calc(100vh-100px)] max-h-[800px] flex items-center relative text-white overflow-hidden mb-8">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <iframe
          src="https://www.youtube.com/embed/P7LrsT2MoTY?autoplay=1&mute=1&loop=1&playlist=P7LrsT2MoTY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Hero Video Background"
          className="w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"></div>
      </div>

      {/* Content */}
      <div className="w-full relative z-30 px-6 lg:px-26">
        <div className="max-w-[750px] text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-[5rem] font-black leading-[1.05] mb-6 drop-shadow-2xl"
          >
            Experience Technology <br /><span className="text-primary italic">Like Never Before</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg lg:text-xl mb-12 opacity-95 leading-relaxed max-w-[550px] font-medium"
          >
            Discover the latest gadgets and computing power at 3com. Your ultimate destination for premium tech brands and cutting-edge innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href="#shop"
              className="bg-primary text-white px-8 lg:px-10 py-4 rounded-full font-bold flex items-center gap-3 w-fit transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop now
              <svg
                width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

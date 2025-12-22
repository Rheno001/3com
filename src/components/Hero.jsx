import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white pt-16">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-gray-50 to-white opacity-90"></div>
                {/* Abstract shapes/glows */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-orange-100 blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[100px] opacity-40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                    >
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Power your world with</span>
                            <span className="block text-brand-orange">3com Intelligence</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Discover the latest in high-performance computing. From sleek laptops to precision peripherals, 3com delivers reliability and style.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <a href="#products" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-orange-500/30">
                                Shop Now
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                    >
                        {/* Hero Image Illustration */}
                        <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md">
                            <div className="relative block w-full bg-white rounded-2xl overflow-hidden ring-1 ring-black/5">
                                <img
                                    className="w-full"
                                    src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80"
                                    alt="3com laptop"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

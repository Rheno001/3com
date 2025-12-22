import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-lg font-semibold text-brand-orange">
                        ₦{product.price.toLocaleString()}
                    </p>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-400">Stock: {product.stock}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                </p>
                <button
                    onClick={() => onAddToCart(product)}
                    className="mt-4 w-full flex items-center justify-center space-x-2 bg-gray-900 border border-transparent text-white hover:bg-brand-orange font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    <Plus className="h-4 w-4" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

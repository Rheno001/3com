import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, MessageCircle } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        // Format message for WhatsApp
        let message = "Hello! I'd like to place an order from 3com:\n\n";
        cartItems.forEach(item => {
            message += `- ${item.name} (x${item.quantity}): ₦${(item.price * item.quantity).toLocaleString()}\n`;
        });
        message += `\n*Total: ₦${total.toLocaleString()}*`;
        message += "\n\nPlease confirm availability.";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900">Your Cart ({cartItems.length})</h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                                    <p>Your cart is empty.</p>
                                    <button onClick={onClose} className="mt-4 text-brand-orange hover:underline">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>{item.name}</h3>
                                                    <p className="ml-4">₦{(item.price * item.quantity).toLocaleString()}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-600"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-gray-900 font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-600"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="border-t border-gray-200 p-6 space-y-4">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>₦{total.toLocaleString()}</p>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>Checkout on WhatsApp</span>
                                </button>
                                <p className="mt-2 text-center text-xs text-gray-500">
                                    Calculated at next step. Shipping & taxes included.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;

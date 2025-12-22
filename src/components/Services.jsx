import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Download, Cpu } from 'lucide-react';

const services = [
    {
        icon: <Download className="h-8 w-8 text-brand-teal" />,
        title: "Software Installation",
        description: "Professional installation of OS, drivers, and essential software for your devices."
    },
    {
        icon: <Wrench className="h-8 w-8 text-brand-teal" />,
        title: "Laptop Repairs",
        description: "Expert diagnostics and repairs for hardware issues, screen replacements, and more."
    },
    {
        icon: <Cpu className="h-8 w-8 text-brand-teal" />,
        title: "Hardware Upgrades",
        description: "Boost performance with RAM and SSD upgrades tailored to your system."
    }
];

const Services = () => {
    return (
        <section className="bg-gray-50 py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-200 blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Beyond sales, we provide expert support for your tech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all"
                        >
                            <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-orange-100">
                                {React.cloneElement(service.icon, { className: "h-8 w-8 text-brand-orange" })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

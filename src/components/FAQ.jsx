import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What brands of laptops do you sell?",
      answer: "At 3com Computers, we stock a wide range of premium brands including Apple, Dell, HP, Lenovo, ASUS, Acer, Microsoft, and Samsung. We ensure all our laptops are genuine and come with manufacturer warranties."
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, all our laptops and hardware come with at least a 1-year manufacturer warranty. We also provide technical support for any software or hardware issues you might encounter."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 2-4 business days within major cities and 5-7 business days for regional areas. We also offer same-day pickup at our physical store."
    },
    {
      question: "Can I upgrade my laptop's RAM or storage at your store?",
      answer: "Absolutely! Our expert technicians offer upgrade services for compatible laptops. We can increase your RAM, swap your HDD for a faster SSD, or perform general maintenance to speed up your device."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for products with manufacturer defects. The item must be in its original packaging and condition. Please contact our support team to initiate a return."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-[800px] mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 tracking-tight">Got Questions?</h2>
          <p className="text-xl text-text-muted leading-relaxed">
            Everything you need to know about our products and services. <br />
            If you can't find your answer, <span className="text-primary font-bold cursor-pointer hover:underline">chat with us on WhatsApp</span>.
          </p>
        </motion.div>

        <div className="max-w-[900px] mx-auto flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#f8fafc] border rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer ${activeIndex === index ? 'bg-white border-primary shadow-2xl ring-4 ring-primary/5' : 'border-border-main hover:bg-white hover:border-primary'}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="px-8 lg:px-10 py-7 lg:py-8 flex justify-between items-center gap-6">
                <h3 className="text-xl lg:text-2xl font-bold m-0 text-black leading-tight tracking-tight">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </motion.span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 lg:px-10 pb-8 lg:pb-10">
                      <p className="text-text-muted leading-relaxed text-lg font-medium max-w-[700px]">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

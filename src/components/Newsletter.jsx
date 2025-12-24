import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto bg-primary/5 rounded-[40px] p-12 lg:p-24 border border-primary/10 relative overflow-hidden"
        >
          {/* Decorative Background Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black mb-6 max-w-[800px] mx-auto leading-[1.1] text-black tracking-tight"
            >
              Subscribe to our newsletter for <br /><span className="text-primary italic">exclusive tech updates</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted mb-12 font-medium"
            >
              Get 20% off on your first order just by subscribing!
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[650px] mx-auto mb-8 bg-white p-2 rounded-[24px] shadow-2xl shadow-primary/5 border border-border-main"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 w-full flex items-center px-6 py-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  required
                  className="bg-transparent border-none outline-none w-full text-lg font-medium placeholder:text-gray-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-[18px] font-black text-lg transition-all duration-300 hover:bg-primary shadow-lg shadow-black/10"
              >
                Subscribe
              </motion.button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[13px] text-text-muted leading-relaxed font-bold uppercase tracking-wider"
            >
              No spam. unsubscribe at any time. <br className="lg:hidden" />
              Read our <a href="#" className="text-black hover:text-primary underline decoration-primary underline-offset-4 decoration-2">Privacy Policy</a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

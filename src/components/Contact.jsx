import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-[600px] mx-auto py-20 px-10 text-center bg-[#f8fafc] rounded-[40px] border border-border-main shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-primary/30"
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </motion.div>
              <h2 className="text-4xl font-black mb-6 text-black tracking-tight">Message Received!</h2>
              <p className="text-xl text-text-muted mb-12 font-medium leading-relaxed">Thank you for reaching out to 3com Computers. Our technical team will review your request and get back to you within 24 hours.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-4 rounded-full font-black text-lg transition-all"
                onClick={() => setSubmitted(false)}
              >
                Back to Form
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start"
            >
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-4xl lg:text-7xl font-black text-left mb-8 text-black tracking-tight leading-[1.1]">Let's chat <br /> <span className="text-primary italic">tech solutions</span></h2>
                  <p className="text-2xl text-text-muted leading-relaxed font-medium">Have a project in mind or need expert hardware advice? We're ready to help.</p>
                </motion.div>

                <div className="flex flex-col gap-10">
                  {[
                    { label: 'Direct Call', value: '+234 806 544 9573', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
                    { label: 'Support Email', value: 'support@3com.com', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
                    { label: 'Our HQ', value: 'Opposite UBA Bank, 33 Ahmadu Bello Way, Jos, Nigeria', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> },
                  ].map((info, i) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex gap-8 items-center group"
                    >
                      <div className="w-16 h-16 bg-primary/5 text-primary rounded-[20px] flex items-center justify-center shrink-0 border border-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                        {info.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">{info.label}</h4>
                        <p className="text-xl font-bold text-black">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-10 lg:p-14 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-border-main relative"
              >
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="firstname" className="font-black text-sm uppercase tracking-wider text-black">First Name</label>
                      <input type="text" id="firstname" required placeholder="John" className="p-4 rounded-[18px] border-2 border-transparent bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-sans text-lg font-medium" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="lastname" className="font-black text-sm uppercase tracking-wider text-black">Last Name</label>
                      <input type="text" id="lastname" required placeholder="Doe" className="p-4 rounded-[18px] border-2 border-transparent bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-sans text-lg font-medium" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="location" className="font-black text-sm uppercase tracking-wider text-black">Your Location</label>
                    <input type="text" id="location" required placeholder="Lagos, Nigeria" className="p-4 rounded-[18px] border-2 border-transparent bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-sans text-lg font-medium" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="font-black text-sm uppercase tracking-wider text-black">Detailed Message</label>
                    <textarea id="message" required placeholder="How can we help you solve your tech challenges?" rows="4" className="p-4 rounded-[18px] border-2 border-transparent bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-sans text-lg font-medium resize-none"></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-[22px] font-black text-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;

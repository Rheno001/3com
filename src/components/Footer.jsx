import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/3com-logo.png';

const Footer = () => {
  return (
    <footer className="py-24 bg-white border-t border-border-main">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-20 mb-20 lg:mb-32">
          <div className="max-w-[450px]">
            <motion.a
              href="/"
              className="inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="3com Logo" className="h-[60px] lg:h-[70px]" />
            </motion.a>
            <p className="text-xl text-text-muted leading-relaxed font-medium">
              Your premium destination for high-performance laptops and cutting-edge technology. Experience the future of computing with 3com.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[3px] text-gray-400 mb-8">Navigation</h4>
              <ul className="flex flex-col gap-5 p-0 m-0 list-none">
                {['Home', 'Shop', 'Services', 'Newsletter'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-lg font-bold text-black opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[3px] text-gray-400 mb-8">Connect</h4>
              <ul className="flex flex-col gap-5 p-0 m-0 list-none font-bold">
                {[
                  { label: 'WhatsApp', href: 'https://wa.me/2348065449573', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
                  { label: 'TikTok', href: 'https://tiktok.com', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg> },
                  { label: 'Instagram', href: 'https://instagram.com', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> }
                ].map((social) => (
                  <li key={social.label}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-lg font-bold text-black border-none hover:text-primary transition-all flex items-center gap-3"
                    >
                      {social.icon}
                      {social.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border-main flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 font-bold text-sm tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} 3com Computers. Handcrafted in Nigeria.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

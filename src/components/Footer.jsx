import { Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pb-10 overflow-hidden" style={{ fontFamily: 'Nohemi, sans-serif', backgroundColor: '#030303' }}>
      {/* Large Background Text */}
      <div className="px-16 mx-auto flex items-center justify-center">
        <h2
          className="text-center font-bold text-[90px] md:text-[400px] text-[#232323] tracking-tight select-none"
        >
          3Com.ng
        </h2>
      </div>

      {/* Divider */}
      <div className="mx-8 md:mx-16 border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl m-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-white text-sm">
          3com © {new Date().getFullYear()}
        </p>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://wa.me/2348065449573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-sm flex items-center gap-2"
          >
            <WhatsAppIcon />
            <span>Whatsapp</span>
          </a>
          <a
            href="https://instagram.com/3com_ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-sm flex items-center gap-2"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <button
            onClick={scrollToTop}
            className="cursor-pointer text-white hover:text-gray-300 transition-colors text-sm"
          >
            Back to the Top
          </button>
        </div>
      </div>
    </footer>
  );
}
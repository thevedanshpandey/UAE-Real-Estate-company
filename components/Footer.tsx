
import React from 'react';
import { Linkedin, Instagram, Twitter, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`pt-24 pb-12 px-6 border-t ${darkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex flex-col items-start leading-tight mb-8">
              <span className="font-serif text-3xl tracking-widest font-bold text-gold">AL FAREN</span>
              <span className={`text-[12px] tracking-[0.2em] font-light ${darkMode ? 'text-white' : 'text-gray-800'}`}>& PARTNERS</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              AL Faren is an international development leader, bridging Dubai's architectural innovation with India's large-scale masterplan expertise.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Global Hubs</h4>
            <div className="space-y-6">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold block mb-1">Dubai Regional Office</span>
                <p className="text-gray-500 text-xs">Business Bay, P.O.Box: 124XXX, Dubai, UAE</p>
                <p className="text-gray-500 text-xs mt-1">+971 4 XXX XXXX</p>
              </div>
              <div>
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold block mb-1">India Corporate Hub</span>
                <p className="text-gray-500 text-xs">Jubilee Hills, Road No. 10, Hyderabad, India</p>
                <p className="text-gray-500 text-xs mt-1">+91 40 XXXX XXXX</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">Featured Projects</a></li>
              <li><a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">Associates</a></li>
              <li><a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">Media & News</a></li>
              <li><a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Request Meeting</h4>
            <p className="text-gray-500 text-xs mb-6">Discuss your 7 lakh sq.ft development opportunity with our executive team.</p>
            <a href="mailto:info@alfaren.ae" className="bg-gold text-white w-full py-4 text-center block text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-[#a68a5c]">
              Contact Now
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.1em]">
            © 2024 AL Faren & Partners. All rights reserved. RERA Registered.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-[0.1em] hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-[0.1em] hover:text-white">Terms of Service</a>
            <button onClick={scrollToTop} className="bg-gold p-3 rounded-full text-white hover:scale-110 transition-transform">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

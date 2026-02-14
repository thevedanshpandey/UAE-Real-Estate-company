
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Dubai Associate', href: '#associates' },
    { name: 'India Associate', href: '#associates' },
    { name: 'Media', href: '#media' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? (darkMode ? 'bg-[#1a1a1a]/90' : 'bg-white/90') + ' backdrop-blur-md py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex flex-col items-start leading-tight">
          <span className="font-serif text-2xl tracking-widest font-bold text-gold">AL FAREN</span>
          <span className={`text-[10px] tracking-[0.2em] font-light ${isScrolled || darkMode ? 'text-white' : 'text-gray-800'}`}>& PARTNERS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-gold ${
                isScrolled || darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all ${
              isScrolled || darkMode ? 'border-white/20 text-white' : 'border-black/10 text-black'
            }`}
          >
            {darkMode ? 'LTR' : 'DK'}
          </button>
          <a 
            href="#contact" 
            className="bg-gold hover:bg-[#a68a5c] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-gold/20"
          >
            Request Meeting
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
           <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all ${
              isScrolled || darkMode ? 'border-white/20 text-white' : 'border-black/10 text-black'
            }`}
          >
            {darkMode ? '☀' : '☾'}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled || darkMode ? 'text-white' : 'text-gray-900'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black/95 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-gold text-white py-5 rounded-sm text-sm font-bold uppercase tracking-widest"
          >
            Request Executive Meeting
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

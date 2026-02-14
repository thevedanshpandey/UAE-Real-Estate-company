
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Dubai', href: '#associates' },
    { name: 'India', href: '#associates' },
    { name: 'Media', href: '#media' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? (darkMode ? 'bg-[#1a1a1a]/95' : 'bg-white/95') + ' backdrop-blur-md py-3 md:py-4 shadow-xl' 
          : 'bg-transparent py-5 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex flex-col items-start leading-tight">
          <span className="font-serif text-xl md:text-2xl tracking-widest font-bold text-gold">AL FAREN</span>
          <span className={`text-[8px] md:text-[10px] tracking-[0.2em] font-light ${isScrolled || darkMode ? 'text-white' : 'text-gray-800'}`}>& PARTNERS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] xl:text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold ${
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
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a 
            href="#contact" 
            className="bg-gold hover:bg-[#a68a5c] text-white px-5 xl:px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-gold/20"
          >
            Request Meeting
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
           <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all ${
              isScrolled || darkMode ? 'border-white/20 text-white' : 'border-black/10 text-black'
            }`}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1 ${isScrolled || darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-6 p-6 text-center">
          <div className="mb-8">
            <span className="font-serif text-3xl tracking-widest font-bold text-gold">AL FAREN</span>
            <div className="text-white text-[10px] tracking-[0.3em] font-light mt-2">& PARTNERS</div>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-serif text-white hover:text-gold transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-xs mt-6 bg-gold text-white py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em]"
          >
            Request Executive Meeting
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

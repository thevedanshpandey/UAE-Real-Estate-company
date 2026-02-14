
import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

const AssociateColumns: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="associates" className={`py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#fcfbf7]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 block">Our Reach</span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>International Presence</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Dubai Associate */}
          <div className={`group relative overflow-hidden p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-700 hover:-translate-y-2 border ${darkMode ? 'bg-[#1a1a1a] border-white/5' : 'bg-white border-gray-100'}`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Globe size={180} />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">United Arab Emirates</span>
            <h3 className={`text-3xl md:text-4xl font-serif mb-6 transition-colors group-hover:text-gold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dubai Hub</h3>
            <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed font-light">
              Overseeing investment advisory and high-rise design concepts for Waterfront and Business Bay landmarks.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Regional Office: Business Bay, Dubai, UAE.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gold shrink-0" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gold shrink-0" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>dubai@alfaren.ae</span>
              </div>
            </div>

            <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold border border-gray-500/20 px-3 py-1">Focus: Luxury Advisory</span>
              <a href="#projects" className="text-gold flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                <span>View Region Portfolio</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* India Associate */}
          <div className={`group relative overflow-hidden p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-700 hover:-translate-y-2 border ${darkMode ? 'bg-[#1a1a1a] border-white/5' : 'bg-white border-gray-100'}`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Globe size={180} />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">South Asia</span>
            <h3 className={`text-3xl md:text-4xl font-serif mb-6 transition-colors group-hover:text-gold ${darkMode ? 'text-white' : 'text-gray-900'}`}>India Hub</h3>
            <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed font-light">
              Managing end-to-end execution for masterplans exceeding 700,000 sq.ft, including RERA and architectural delivery.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Corporate Hub: Jubilee Hills, Hyderabad, India.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gold shrink-0" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>+91 40 XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gold shrink-0" size={18} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>india@alfaren.ae</span>
              </div>
            </div>

            <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold border border-gray-500/20 px-3 py-1">Focus: Masterplan Delivery</span>
              <a href="#projects" className="text-gold flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                <span>View Region Portfolio</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociateColumns;

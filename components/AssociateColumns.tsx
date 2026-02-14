
import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

const AssociateColumns: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="associates" className={`py-24 px-6 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#fcfbf7]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>International Presence</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dubai Associate */}
          <div className={`group relative overflow-hidden p-10 rounded-sm shadow-2xl transition-all duration-700 hover:-translate-y-2 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe size={160} />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">United Arab Emirates</span>
            <h3 className={`text-3xl font-serif mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dubai Associate</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Delivering ultra-luxury developments across the Emirates. Our regional Dubai office oversees high-rise excellence and waterfront signatures.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Regional Office: Business Bay, Dubai, UAE. P.O.Box: 124XXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gold" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gold" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>dubai@alfaren.ae</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Specialty: Luxury High-Rise</span>
              <a href="#projects" className="text-gold flex items-center space-x-2 text-xs font-bold uppercase tracking-widest group-hover:underline">
                <span>View Dubai Gallery</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* India Associate */}
          <div className={`group relative overflow-hidden p-10 rounded-sm shadow-2xl transition-all duration-700 hover:-translate-y-2 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe size={160} />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">South Asia</span>
            <h3 className={`text-3xl font-serif mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>India Associate</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Leading large-scale masterplans and gated communities. We manage national approvals, RERA compliance, and ground execution across Tier-1 cities.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Corporate Office: Jubilee Hills, Hyderabad / Bangalore, India.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gold" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>+91 40 XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gold" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>india@alfaren.ae</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Specialty: Masterplans (700k+ sq.ft)</span>
              <a href="#projects" className="text-gold flex items-center space-x-2 text-xs font-bold uppercase tracking-widest group-hover:underline">
                <span>View India Projects</span>
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

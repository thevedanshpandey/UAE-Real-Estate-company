
import React from 'react';
import { FileText, Map, ShieldCheck, TrendingUp } from 'lucide-react';

const PitchSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#101010]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
           </pattern>
           <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Opportunity: South India</span>
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Transform <span className="text-gold">700,000 Sq.Ft</span> <br /> 
              into a Signature Landmark.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              We are presenting a prime 7 lakh sq.ft land development opportunity in South India. Our team has prepared a full commercial feasibility study for a premium gated community and integrated lifestyle hub.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Strategic Masterplan</h4>
                  <p className="text-gray-500 text-xs">Optimized land-use for maximum ROI.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Commercial Feasibility</h4>
                  <p className="text-gray-500 text-xs">Detailed P&L and market absorption rates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Full RERA Compliance</h4>
                  <p className="text-gray-400 text-xs">Clear titles & architectural approvals ready.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Download NDA/Pitch</h4>
                  <p className="text-gray-500 text-xs">Request executive summary PDF.</p>
                </div>
              </div>
            </div>

            <button className="bg-gold text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#a68a5c] shadow-2xl">
              Discuss Development Vision
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-2xl group-hover:bg-gold/30 transition duration-1000"></div>
            <div className="relative glass-dark p-2 rounded-sm overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1449156003053-c3ca3f07297e?auto=format&fit=crop&q=80&w=1200" 
                alt="Masterplan Concept" 
                className="w-full h-auto grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">Conceptual Rendering</span>
                <h4 className="text-white text-xl font-serif">Integrated Gated Lifestyle Hub</h4>
              </div>
            </div>
            
            {/* Quick stats overlay */}
            <div className="absolute top-10 -right-10 glass p-6 border-gold/30 rounded-sm hidden xl:block animate-bounce">
              <span className="text-white font-serif text-3xl font-bold block">7 Lakh</span>
              <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Square Feet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;

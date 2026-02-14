
import React from 'react';
import { FileText, Map, ShieldCheck, TrendingUp } from 'lucide-react';

const PitchSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
           </pattern>
           <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6 block text-center lg:text-left">Development Opportunity</span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight text-center lg:text-left">
              Strategic Masterplan: <br className="hidden md:block" /> 
              <span className="text-gold italic">700,000 Sq.Ft Landmark.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-light text-center lg:text-left">
              Presenting a prime land development project in South India. Our partners have finalized a comprehensive commercial feasibility study for a premium gated community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
              {[
                { icon: <Map size={22} />, title: "Masterplan Ready", desc: "Land-use optimization finalized." },
                { icon: <TrendingUp size={22} />, title: "Feasibility Audit", desc: "Detailed ROI and P&L projections." },
                { icon: <ShieldCheck size={22} />, title: "RERA Compliant", desc: "Clean titles and legal clearance." },
                { icon: <FileText size={22} />, title: "Request NDA", desc: "Access the full executive pitch." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-sm hover:bg-white/5 transition-colors">
                  <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-gold text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-[#a68a5c] shadow-2xl active:scale-95">
                Discuss Development Vision
              </button>
            </div>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gold/10 rounded-lg blur-2xl group-hover:bg-gold/20 transition duration-1000"></div>
            <div className="relative glass-dark p-2 rounded-sm overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1449156003053-c3ca3f07297e?auto=format&fit=crop&q=80&w=1200" 
                alt="Masterplan Concept" 
                className="w-full aspect-[16/10] md:aspect-auto h-auto grayscale md:grayscale-[0.5] hover:grayscale-0 transition duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-bold mb-2">Architectural Visualization</span>
                <h4 className="text-white text-lg md:text-xl font-serif">Integrated Gated Lifestyle Community</h4>
              </div>
            </div>
            
            {/* Quick stats overlay - hidden on mobile, adaptive on md+ */}
            <div className="absolute -bottom-6 -right-2 md:top-10 md:-right-10 glass p-5 md:p-6 border-gold/30 rounded-sm shadow-2xl">
              <span className="text-white font-serif text-2xl md:text-3xl font-bold block leading-none">7 Lakh</span>
              <span className="text-gold text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Square Feet Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;

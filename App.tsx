
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssociateColumns from './components/AssociateColumns';
import ProjectGallery from './components/ProjectGallery';
import PitchSection from './components/PitchSection';
import Footer from './components/Footer';
import { Briefcase, Building2, HardHat, LandPlot } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcfbf7] text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        {/* Homepage Sections */}
        <Hero />
        
        {/* Services Snapshot (Quick Glance) */}
        <section id="services" className={`py-8 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10 -mt-12 sm:-mt-20 max-w-7xl mx-auto`}>
           <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border ${darkMode ? 'border-white/10 bg-[#151515]' : 'border-gray-200 bg-white'} shadow-2xl rounded-sm overflow-hidden`}>
              {[
                { icon: <LandPlot size={28} />, title: "Masterplanning", desc: "Integrated township design" },
                { icon: <Building2 size={28} />, title: "Architecture", desc: "Signature global aesthetics" },
                { icon: <HardHat size={28} />, title: "Construction", desc: "High-grade structural delivery" },
                { icon: <Briefcase size={28} />, title: "Asset Management", desc: "Commercial optimization" }
              ].map((service, idx) => (
                <div key={idx} className={`p-8 md:p-10 flex flex-col items-center text-center group hover:bg-gold transition-all duration-500 border-b last:border-b-0 sm:border-b-0 ${idx % 2 === 0 ? 'sm:border-r' : ''} ${idx < 2 ? 'lg:border-b-0' : ''} ${idx !== 3 ? 'lg:border-r' : ''} ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                  <div className={`mb-6 text-gold group-hover:text-white transition-colors`}>{service.icon}</div>
                  <h4 className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-white`}>{service.title}</h4>
                  <p className={`text-[10px] md:text-[11px] text-gray-500 group-hover:text-white/80 leading-relaxed max-w-[150px]`}>{service.desc}</p>
                </div>
              ))}
           </div>
        </section>

        <AssociateColumns darkMode={darkMode} />
        
        <ProjectGallery darkMode={darkMode} />
        
        <PitchSection />

        {/* Media & Awards Section */}
        <section id="media" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#fcfbf7]'}`}>
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12 md:mb-16">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 block">Global Recognition</span>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif ${darkMode ? 'text-white' : 'text-gray-900'}`}>Media & Awards</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { source: "Gulf Business", quote: "AL Faren is redefining the landscape of modern sustainable townships across South India.", date: "Sept 2024" },
                  { source: "The Real Estate Weekly", quote: "A rare bridge between Middle Eastern capital and Indian development prowess.", date: "Aug 2024" },
                  { source: "Architectural Digest", quote: "Their latest 7 lakh sqft proposal sets a new benchmark for gated communities.", date: "July 2024" }
                ].map((item, i) => (
                  <div key={i} className={`p-8 md:p-10 rounded-sm transition-all hover:shadow-2xl ${darkMode ? 'bg-[#151515] hover:bg-[#1a1a1a]' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gold font-serif italic text-base md:text-lg">{item.source}</span>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h4 className={`text-lg md:text-xl font-serif mb-6 leading-relaxed italic ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>"{item.quote}"</h4>
                    <a href="#" className="inline-block text-[9px] uppercase tracking-widest font-bold text-gray-500 hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1">Read Full Feature</a>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center`}>
          <div className="absolute inset-0 bg-gold opacity-5"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 md:mb-10 leading-[1.1] ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to create an <br className="hidden sm:block" /> <span className="text-gold italic">international landmark?</span>
            </h2>
            <p className={`text-base md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Partner with AL Faren for investment advisory in Dubai or large-scale land development execution in India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto bg-gold text-white px-10 md:px-14 py-5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Request Executive Meeting
              </button>
              <button className={`w-full sm:w-auto border px-10 md:px-14 py-5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/10 text-black hover:bg-black/5'}`}>
                Contact India Office
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

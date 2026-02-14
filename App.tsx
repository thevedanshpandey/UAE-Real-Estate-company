
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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcfbf7] text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        {/* Homepage Sections */}
        <Hero />
        
        {/* Services Snapshot (Quick Glance) */}
        <section id="services" className={`py-16 px-6 relative z-10 -mt-10 md:-mt-20 max-w-7xl mx-auto`}>
           <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 border ${darkMode ? 'border-white/10 bg-[#151515]' : 'border-gray-200 bg-white'} shadow-2xl`}>
              {[
                { icon: <LandPlot />, title: "Masterplanning", desc: "Township creation" },
                { icon: <Building2 />, title: "Architecture", desc: "Signature design" },
                { icon: <HardHat />, title: "Construction", desc: "High-grade delivery" },
                { icon: <Briefcase />, title: "Management", desc: "Asset optimization" }
              ].map((service, idx) => (
                <div key={idx} className={`p-10 flex flex-col items-center text-center group hover:bg-gold transition-colors duration-500 ${idx !== 3 ? 'md:border-r border-white/5' : ''}`}>
                  <div className={`mb-6 text-gold group-hover:text-white transition-colors`}>{service.icon}</div>
                  <h4 className={`text-xs uppercase tracking-[0.2em] font-bold mb-2 group-hover:text-white`}>{service.title}</h4>
                  <p className={`text-[10px] text-gray-500 group-hover:text-white/80`}>{service.desc}</p>
                </div>
              ))}
           </div>
        </section>

        <AssociateColumns darkMode={darkMode} />
        
        <ProjectGallery darkMode={darkMode} />
        
        <PitchSection />

        {/* Media & Awards Section */}
        <section id="media" className={`py-24 px-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#fcfbf7]'}`}>
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Global Recognition</span>
                <h2 className={`text-4xl font-serif ${darkMode ? 'text-white' : 'text-gray-900'}`}>Media & Awards</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`p-8 rounded-sm transition-all hover:shadow-xl ${darkMode ? 'bg-[#151515] hover:bg-[#1a1a1a]' : 'bg-white hover:bg-gray-50'}`}>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gold font-serif italic text-lg">Gulf Business</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Sept 2024</span>
                    </div>
                    <h4 className={`text-xl font-serif mb-4 leading-relaxed ${darkMode ? 'text-white' : 'text-gray-900'}`}>"AL Faren is redefining the landscape of modern sustainable townships across South India."</h4>
                    <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-gold transition-colors">Read Full Article</a>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className={`py-24 px-6 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gold opacity-10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className={`text-5xl md:text-6xl font-serif mb-10 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to create an <br /> <span className="text-gold">international landmark?</span>
            </h2>
            <p className={`text-lg mb-12 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Whether you're looking for a Dubai investment or land development in India, our partners at AL Faren are ready to deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gold text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-transform">
                Request Executive Meeting
              </button>
              <button className={`border px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/10 text-black hover:bg-black/5'}`}>
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

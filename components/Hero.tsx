
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-[#0a0a0a]">
      {/* Background with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">International Real Estate & Development</span>
          </div>
          
          <h1 className="text-white text-6xl md:text-8xl font-serif leading-tight opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            Global <br /> 
            Craftsmanship. <br />
            <span className="text-gold italic">Local Execution.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            AL Faren — international master developers delivering landmark projects across Dubai and India. We blend global expertise with regional precision.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
            <a 
              href="#projects" 
              className="group flex items-center space-x-3 bg-white text-black px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all hover:bg-gold hover:text-white"
            >
              <span>Showcase Projects</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button className="flex items-center space-x-3 bg-transparent border border-white/30 text-white px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/10">
              <div className="p-1 bg-gold rounded-full">
                <Play size={10} fill="white" />
              </div>
              <span>Our Vision</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between border-t border-white/10 pt-10">
            <div className="flex space-x-12">
              <div className="flex flex-col">
                <span className="text-white text-3xl font-serif font-bold">1.2M+</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Sq.ft Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-3xl font-serif font-bold">15+</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Years Expertise</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-3xl font-serif font-bold">02</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Global Hubs</span>
              </div>
            </div>
            <div className="flex items-center space-x-8 opacity-40 grayscale">
              <span className="text-white font-bold text-lg tracking-widest">FORBES</span>
              <span className="text-white font-bold text-lg tracking-widest">GULF NEWS</span>
              <span className="text-white font-bold text-lg tracking-widest">REUTERS</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

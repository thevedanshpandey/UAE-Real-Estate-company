
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen w-full overflow-hidden flex items-center bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-50 md:opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 w-full pt-28 pb-20 md:pt-20">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="flex items-center space-x-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="hidden sm:block h-[1px] w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-semibold">International Real Estate & Development</span>
          </div>
          
          <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            Global <br /> 
            Craftsmanship. <br />
            <span className="text-gold italic">Local Execution.</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-xl font-light max-w-xl leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            AL Faren — international master developers delivering landmark projects across Dubai and India. We blend global architectural standards with regional execution precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
            <a 
              href="#projects" 
              className="group flex items-center justify-center space-x-3 bg-white text-black px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all hover:bg-gold hover:text-white"
            >
              <span>Portfolio Showcase</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button className="flex items-center justify-center space-x-3 bg-transparent border border-white/30 text-white px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all hover:bg-white/10">
              <div className="p-1 bg-gold rounded-full">
                <Play size={10} fill="white" />
              </div>
              <span>Watch Vision Film</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Strip - Hidden on small mobile, simplified on tablets */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-20 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-6 md:gap-0">
            <div className="flex justify-center md:justify-start space-x-8 lg:space-x-16">
              <div className="flex flex-col">
                <span className="text-white text-2xl lg:text-3xl font-serif font-bold">1.2M+</span>
                <span className="text-gray-500 text-[9px] lg:text-[10px] uppercase tracking-widest">Sq.ft Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl lg:text-3xl font-serif font-bold">15+</span>
                <span className="text-gray-500 text-[9px] lg:text-[10px] uppercase tracking-widest">Years Expertise</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl lg:text-3xl font-serif font-bold">02</span>
                <span className="text-gray-500 text-[9px] lg:text-[10px] uppercase tracking-widest">Global Hubs</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-10 opacity-30 grayscale contrast-125">
              <span className="text-white font-bold text-sm xl:text-lg tracking-[0.2em]">FORBES</span>
              <span className="text-white font-bold text-sm xl:text-lg tracking-[0.2em]">GULF NEWS</span>
              <span className="text-white font-bold text-sm xl:text-lg tracking-[0.2em]">REUTERS</span>
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

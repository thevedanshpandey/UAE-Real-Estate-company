
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const ProjectGallery: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Dubai', 'India', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || p.id === filter);

  return (
    <section id="projects" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 block">Our Portfolio</span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${darkMode ? 'text-white' : 'text-gray-900'}`}>Signature Projects</h2>
          </div>
          
          {/* Scrollable category bar on mobile */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide gap-3 md:gap-4 lg:flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-full border transition-all shrink-0 ${
                  filter === cat 
                    ? 'bg-gold border-gold text-white' 
                    : (darkMode ? 'border-white/10 text-gray-400 hover:text-white' : 'border-gray-200 text-gray-500 hover:text-black')
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-gold p-4 rounded-full translate-y-4 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                     <ExternalLink size={24} color="white" />
                   </div>
                </div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-wrap gap-2">
                  <span className="bg-gold text-white text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                    {project.category}
                  </span>
                  {project.status === 'Completed' && (
                    <span className="bg-white/90 text-black text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                      Completed
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                <div>
                  <h3 className={`text-xl md:text-2xl font-serif mb-1 transition-colors group-hover:text-gold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">{project.location}</p>
                </div>
                {project.sqft && (
                   <div className="sm:text-right border-l-2 border-gold/30 pl-4 sm:border-l-0 sm:pl-0">
                     <span className={`text-lg font-serif block leading-none mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.sqft}</span>
                     <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Sq.Ft Area</span>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <button className={`border-b-2 border-gold pb-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all hover:text-gold hover:tracking-[0.4em] ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Explore Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

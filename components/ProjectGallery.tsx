
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';

const ProjectGallery: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Dubai', 'India', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || p.id === filter); // Mock logic for demo

  return (
    <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Portfolio</span>
            <h2 className={`text-5xl font-serif ${darkMode ? 'text-white' : 'text-gray-900'}`}>Signature Projects</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border transition-all ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative h-[500px] overflow-hidden rounded-sm mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-gold p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <ExternalLink size={24} color="white" />
                   </div>
                </div>
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className="bg-gold text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                    {project.category}
                  </span>
                  {project.status === 'Completed' && (
                    <span className="bg-white/90 text-black text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                      Completed
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-2xl font-serif mb-2 transition-colors group-hover:text-gold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.location}</p>
                </div>
                {project.sqft && (
                   <div className="text-right">
                     <span className={`text-lg font-serif block ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.sqft}</span>
                     <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Sq.Ft Area</span>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className={`border-b-2 border-gold pb-2 text-xs font-bold uppercase tracking-[0.3em] transition-all hover:text-gold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Explore All Masterplans
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithLoader } from './ImageWithLoader';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const thumbnail = project.media.find(m => m.type === 'image')?.url || project.media[0].url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group block relative"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 mb-6">
          <ImageWithLoader 
            src={thumbnail} 
            alt={project.title}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-110"
          />
          
          {/* Overlay on hover - z-index ensures it sits above the loader */}
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-20" />
          
          {/* Action Icon */}
          <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
             <div className="bg-white/90 backdrop-blur-md p-3 rounded-full text-stone-900">
                <ArrowUpRight size={20} />
             </div>
          </div>
        </div>
        
        <div className="flex justify-between items-end border-b border-stone-200 pb-4 group-hover:border-bronze-500 transition-colors duration-500">
          <div>
            <h3 className="text-xl font-oswald tracking-wide uppercase text-stone-900 group-hover:text-bronze-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-stone-500 font-light mt-1">{project.location}</p>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
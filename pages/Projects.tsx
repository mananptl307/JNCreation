import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Projects: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 w-full min-h-screen bg-stone-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-200 pb-12"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-oswald uppercase text-stone-900 mb-6">Our Portfolio</h1>
            <p className="text-stone-500 max-w-xl font-light text-lg">
              A curated collection of residential, commercial, and public spaces designed with purpose and precision.
            </p>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-6xl font-oswald text-stone-200">{PROJECTS.length.toString().padStart(2, '0')}</span>
             <span className="block text-xs uppercase tracking-widest text-stone-400">Total Projects</span>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
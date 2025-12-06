import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, Calendar, Layers } from 'lucide-react';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const project = PROJECTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset loader when ID changes
    setHeaderLoaded(false);
  }, [id]);

  useEffect(() => {
    // Check if image is cached
    if (imgRef.current && imgRef.current.complete) {
      setHeaderLoaded(true);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-stone-50">
        <h2 className="text-2xl mb-4 font-oswald">Project not found</h2>
        <button onClick={() => navigate('/projects')} className="text-bronze-500 underline">Back to Projects</button>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header Image */}
      <div className="h-[70vh] w-full relative bg-stone-200">
        <div className="absolute top-24 left-6 md:left-20 z-20">
          <Link to="/projects" className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em] backdrop-blur-md px-6 py-3 rounded-full bg-stone-900/30 border border-white/10 hover:bg-stone-900/50">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </div>
        
        {/* Header Loading Skeleton: removed animate-pulse when loaded */}
        <div className={`absolute inset-0 bg-stone-800 transition-opacity duration-1000 ${headerLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'}`} />

        {project.media[0].type === 'image' ? (
          <img 
            ref={imgRef}
            src={project.media[0].url} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-opacity duration-1000 ${headerLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setHeaderLoaded(true)}
          />
        ) : (
          <video 
            src={project.media[0].url} 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            onLoadedData={() => setHeaderLoaded(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/30 opacity-80" />
        
        <div className="absolute bottom-0 w-full px-6 md:px-20 pb-16 z-10 text-white">
          <div className="container mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-oswald uppercase leading-none mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-8 md:gap-16 text-sm font-light tracking-wider border-t border-white/20 pt-8"
            >
               <div className="flex flex-col gap-1">
                 <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Location</span>
                 <span className="flex items-center gap-2"><MapPin size={16} className="text-bronze-500"/> {project.location}</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Year</span>
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-bronze-500"/> {project.year}</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Type</span>
                 <span className="flex items-center gap-2"><Layers size={16} className="text-bronze-500"/> {project.category}</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-20">
        {/* Description */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
             <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-bronze-500 mb-6">The Concept</h2>
             <div className="w-12 h-[1px] bg-stone-300"></div>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-700">
              {project.description}
            </p>
          </div>
        </div>

        {/* Gallery / Media Grid */}
        <div className="pb-24 space-y-24">
          {project.media.slice(1).map((media, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="w-full"
             >
                {media.type === 'video' ? (
                  <div className="relative w-full aspect-video bg-stone-200">
                    <video 
                      src={media.url}
                      controls
                      className="w-full h-full object-cover shadow-2xl"
                      poster={project.media.find(m => m.type === 'image')?.url}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative group">
                    <ImageWithLoader 
                      src={media.url} 
                      alt={media.alt || `Project image ${index + 2}`} 
                      className="w-full h-auto max-h-[85vh] object-cover shadow-xl"
                    />
                    <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                      <p className="text-xs font-oswald text-stone-900 uppercase tracking-widest">
                        View {index + 1}
                      </p>
                    </div>
                  </div>
                )}
             </motion.div>
          ))}
        </div>
      </div>
      
      {/* Navigation Footer */}
      <div className="bg-stone-900 text-white py-24 px-6 md:px-20 text-center">
          <h3 className="text-stone-500 text-xs uppercase tracking-[0.3em] mb-4">Next Steps</h3>
          <Link to="/contact" className="text-4xl md:text-6xl font-oswald uppercase hover:text-bronze-500 transition-colors">
            Start a Conversation
          </Link>
          <div className="mt-12">
            <Link to="/projects" className="inline-block border-b border-stone-700 pb-1 text-sm uppercase tracking-widest hover:border-white transition-colors">
              Back to All Projects
            </Link>
          </div>
      </div>
    </div>
  );
};
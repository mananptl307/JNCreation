import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Home: React.FC = () => {
  // Using a high-quality Unsplash image for the hero background
  const heroImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop";
  const [heroLoaded, setHeroLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setHeroLoaded(true);
    }
  }, []);

  return (
    <div className="w-full bg-stone-50">
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center overflow-hidden bg-stone-900">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Skeleton loader for hero: removed animate-pulse when loaded */}
          <div 
             className={`absolute inset-0 bg-stone-800 z-0 transition-opacity duration-1000 ${heroLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'}`}
          />
          
          <img 
            ref={imgRef}
            src={heroImage} 
            alt="Hero Architecture" 
            className={`w-full h-full object-cover brightness-[0.6] transition-opacity duration-1000 ease-out ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30" />
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10 text-white mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-oswald font-medium uppercase leading-none mb-6">
              Visionary <br />
              <span className="text-bronze-500">Spaces</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 font-light max-w-lg mb-12 leading-relaxed tracking-wide">
              JN Creation crafts environments that bridge the gap between human connection and architectural innovation.
            </p>
            <Link 
              to="/projects" 
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] border border-white/30 px-8 py-4 hover:bg-white hover:text-stone-900 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Portfolio 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Intro Statement Section */}
      <section className="py-32 px-6 md:px-20 bg-stone-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-bronze-500 mb-6">Our Philosophy</h2>
               <p className="text-3xl md:text-5xl font-oswald font-light leading-tight text-stone-900">
                 "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
               </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-600 font-light leading-loose text-lg"
            >
              <p>
                We believe in materials that age gracefully and designs that stand the test of time. Our work is grounded in the principles of sustainability, functionality, and aesthetic purity. Every line drawn is a commitment to excellence.
              </p>
              <Link to="/about" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-stone-300 pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-colors">
                Read More About Us
              </Link>
            </motion.div>
        </div>
      </section>

      {/* Selected Works Preview */}
      <section className="py-32 px-6 md:px-20 bg-stone-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl uppercase font-oswald text-stone-900 mb-2">Selected Projects</h2>
              <div className="h-1 w-20 bg-bronze-500"></div>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-bronze-500 transition-colors">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {PROJECTS.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-16 md:hidden text-center">
            <Link to="/projects" className="inline-block border border-stone-300 px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors">View All Works</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
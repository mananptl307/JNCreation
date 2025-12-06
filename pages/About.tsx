import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-20 w-full min-h-screen bg-stone-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] md:h-[80vh] overflow-hidden order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-stone-200" />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
              alt="Studio Office" 
              className="w-full h-full object-cover transition-all duration-[2s] hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 max-w-xs shadow-lg">
               <p className="font-oswald uppercase text-xl text-stone-900">Est. 2009</p>
               <p className="text-xs text-stone-500 mt-2">Award winning studio based in New York</p>
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-oswald uppercase text-stone-900 mb-8 leading-none">
                We design <br/> for <span className="text-bronze-500">Life</span>.
              </h1>
              
              <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg mb-12">
                <p>
                  JN Creation was founded on the belief that architecture is more than just shelter—it is a conversation between the built environment and the human spirit.
                </p>
                <p>
                  Our philosophy is rooted in <span className="text-stone-900 font-medium">Warm Minimalism</span>. We strip away the unnecessary to reveal the essential, focusing on light, material texture, and spatial proportion.
                </p>
                <p>
                  Every project is a unique opportunity to create spaces that inspire, comfort, and endure. We work closely with our clients to turn abstract dreams into concrete realities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
                <div>
                  <h3 className="text-4xl font-oswald text-bronze-500">15+</h3>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-oswald text-bronze-500">42</h3>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
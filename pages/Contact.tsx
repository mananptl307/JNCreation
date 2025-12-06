import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-20 w-full min-h-screen bg-stone-100 flex items-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-oswald uppercase text-stone-900 mb-6">Start a Project</h1>
          <p className="text-stone-500 text-xl font-light">We would love to hear about your vision.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-10 bg-white shadow-sm hover:shadow-xl transition-all duration-500 text-center border-t-4 border-transparent hover:border-bronze-500"
          >
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bronze-500 group-hover:text-white transition-colors duration-300">
              <Mail size={28} />
            </div>
            <h3 className="font-oswald uppercase tracking-widest text-sm font-bold mb-4 text-stone-900">Email</h3>
            <a href="mailto:hello@jncreation.com" className="text-lg font-light text-stone-600 hover:text-bronze-500 transition-colors">hello@jncreation.com</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-10 bg-white shadow-sm hover:shadow-xl transition-all duration-500 text-center border-t-4 border-transparent hover:border-bronze-500"
          >
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bronze-500 group-hover:text-white transition-colors duration-300">
              <Phone size={28} />
            </div>
            <h3 className="font-oswald uppercase tracking-widest text-sm font-bold mb-4 text-stone-900">Phone</h3>
            <a href="tel:+1234567890" className="text-lg font-light text-stone-600 hover:text-bronze-500 transition-colors">+1 (555) 123-4567</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-10 bg-white shadow-sm hover:shadow-xl transition-all duration-500 text-center border-t-4 border-transparent hover:border-bronze-500"
          >
             <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bronze-500 group-hover:text-white transition-colors duration-300">
              <MapPin size={28} />
            </div>
            <h3 className="font-oswald uppercase tracking-widest text-sm font-bold mb-4 text-stone-900">Studio</h3>
            <p className="text-lg font-light text-stone-600">123 Architect Ave, NY</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
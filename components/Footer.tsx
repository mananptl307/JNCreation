import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-xl font-bold tracking-widest uppercase mb-2">JN Creation</h3>
          <p className="text-neutral-400 font-light text-sm">Architecting the future, preserving the essence.</p>
        </div>
        
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-neutral-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-neutral-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-neutral-400 transition-colors"><Facebook size={20} /></a>
          </div>
          <p className="text-neutral-500 text-xs tracking-wider">© 2024 JN Creation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
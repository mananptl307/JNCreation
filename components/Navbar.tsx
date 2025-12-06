import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine text color based on background (scrolled or home hero)
  const textColor = scrolled || !isHome ? 'text-stone-900' : 'text-white';
  // Use a simple architectural icon from a stable CDN
  const logoUrl = "https://cdn-icons-png.flaticon.com/512/5903/5903780.png";
  const logoFilter = scrolled || !isHome ? 'invert(0)' : 'invert(1) brightness(10)';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone-50/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="z-50 relative group">
          {/* Logo Image */}
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="JN Creation Logo" 
              className="h-10 w-auto transition-all duration-300"
              style={{ filter: logoFilter }}
            />
            {/* Logo Text */}
            <div className={`flex flex-col leading-none ${textColor} transition-colors duration-300`}>
               <span className="font-oswald font-bold text-xl tracking-widest uppercase">JN Creation</span>
               <span className="text-[0.6rem] tracking-[0.2em] uppercase opacity-70">Architecture</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-[0.2em] uppercase font-medium hover:text-bronze-500 transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-bronze-500 after:transition-all hover:after:w-full ${
                location.pathname === link.path ? 'text-bronze-500 after:w-full' : textColor
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden z-50 focus:outline-none transition-colors ${isOpen ? 'text-stone-900' : textColor}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-stone-50 flex flex-col justify-center items-center gap-8 transition-all duration-700 ease-[0.22, 1, 0.36, 1] md:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-oswald font-light tracking-widest uppercase text-stone-900 hover:text-bronze-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
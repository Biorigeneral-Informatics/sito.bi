// src/components/Navbar.tsx - Static Version
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Prodotti' },
    { href: '#', label: 'Servizi', hasSubmenu: true },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contatti' },
  ];

  const servicesLinks = [
    { href: '/software-pmi', label: 'Software PMI' },
    { href: '/ai-agents', label: 'Agenti AI' },
    { href: '/chatbots', label: 'Chatbot AI' },
    { href: '/growth-plans', label: 'Piani di Crescita' },
    { href: '/developers', label: 'Sviluppatori' },
  ];

  const isServicePage = servicesLinks.some(link => location.pathname === link.href);

  return (
    <nav className="fixed w-full z-50">
      <div className={`mx-4 my-4 px-6 py-4 rounded-2xl ${
        scrolled 
          ? 'glass backdrop-blur-md bg-background/80' 
          : 'glass bg-background/20'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" className="w-10 h-10" />
            <span className="font-bold text-xl text-white">Biorigeneral</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {mainLinks.map((link) => 
              link.hasSubmenu ? (
                <div key={link.label} className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`navbar-link flex items-center px-2 py-1 text-white hover:text-accent ${
                      isServicePage ? 'text-accent active' : ''
                    }`}
                  >
                    {link.label}
                    {servicesOpen ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Sottomenu Servizi Desktop */}
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 glass backdrop-blur-md rounded-xl py-2 shadow-lg">
                      {servicesLinks.map((serviceLink) => (
                        <Link
                          key={serviceLink.href}
                          to={serviceLink.href}
                          className={`block px-4 py-2 text-white hover:text-accent hover:bg-primary/10 ${
                            location.pathname === serviceLink.href ? 'bg-primary/20 text-accent' : ''
                          }`}
                        >
                          {serviceLink.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Indicatore pagina corrente per sezione Servizi - ora gestito da CSS */}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`navbar-link px-2 py-1 text-white hover:text-accent ${
                    location.pathname === link.href ? 'text-accent active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass md:hidden mx-4 mt-2 p-4 rounded-xl backdrop-blur-md">
          <div className="flex flex-col space-y-2">
            {mainLinks.map((link) => 
              link.hasSubmenu ? (
                <div key={link.label} className="space-y-1">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex justify-between items-center py-2 px-3 rounded-lg text-white hover:text-accent ${
                      isServicePage ? 'bg-primary/20 text-accent' : ''
                    }`}
                  >
                    {link.label}
                    {servicesOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Sottomenu Servizi Mobile */}
                  {servicesOpen && (
                    <div className="pl-4">
                      {servicesLinks.map((serviceLink) => (
                        <Link
                          key={serviceLink.href}
                          to={serviceLink.href}
                          className={`block py-2 px-3 rounded-lg text-white hover:text-accent ${
                            location.pathname === serviceLink.href ? 'bg-primary/10 text-accent' : ''
                          }`}
                        >
                          {serviceLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-2 px-3 rounded-lg text-white hover:text-accent ${
                    location.pathname === link.href 
                      ? 'bg-primary/20 text-accent' 
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
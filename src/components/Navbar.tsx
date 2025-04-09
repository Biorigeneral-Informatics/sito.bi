// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    // Chiudi il sottomenu dei servizi quando la pagina cambia
    setServicesOpen(false);
    // Chiudi il menu mobile quando la pagina cambia
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Gestisce i click fuori dal menu servizi per chiuderlo
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
    { href: '/developers', label: 'Sviluppatori' },
    { href: '/contact', label: 'Contatti' },
  ];

  const servicesLinks = [
    { href: '/software-pmi', label: 'Software PMI' },
    { href: '/ai-agents', label: 'Agenti AI' },
    { href: '/chatbots', label: 'Chatbot AI' },
    { href: '/growth-plans', label: 'Piani di Crescita' },
  ];

  // Controlla se il percorso corrente è un servizio
  const isServicePage = servicesLinks.some(link => location.pathname === link.href);

  return (
    <motion.nav 
      className="fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`mx-4 my-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'glass backdrop-blur-md bg-background/80' 
          : 'glass bg-background/20'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" className="w-10 h-10" />
            <span className="font-bold text-xl">Biorigeneral</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {mainLinks.map((link) => 
              link.hasSubmenu ? (
                <div key={link.label} className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center px-2 py-1 text-foreground/80 hover:text-foreground transition-colors ${
                      isServicePage ? 'text-foreground' : ''
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
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 glass backdrop-blur-md rounded-xl py-2 shadow-lg"
                      >
                        {servicesLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            to={serviceLink.href}
                            className={`block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors ${
                              location.pathname === serviceLink.href ? 'bg-primary/20 text-foreground' : ''
                            }`}
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Indicatore pagina corrente per sezione Servizi */}
                  {isServicePage && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-2 py-1 text-foreground/80 hover:text-foreground transition-colors ${
                    location.pathname === link.href ? 'text-foreground' : ''
                  }`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass md:hidden mx-4 mt-2 p-4 rounded-xl backdrop-blur-md"
          >
            <div className="flex flex-col space-y-2">
              {mainLinks.map((link) => 
                link.hasSubmenu ? (
                  <div key={link.label} className="space-y-1">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`w-full flex justify-between items-center py-2 px-3 rounded-lg text-foreground/80 hover:text-foreground transition-colors ${
                        isServicePage ? 'bg-primary/20 text-foreground' : ''
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
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4"
                        >
                          {servicesLinks.map((serviceLink) => (
                            <Link
                              key={serviceLink.href}
                              to={serviceLink.href}
                              className={`block py-2 px-3 rounded-lg text-foreground/80 hover:text-foreground transition-colors ${
                                location.pathname === serviceLink.href ? 'bg-primary/10 text-foreground' : ''
                              }`}
                            >
                              {serviceLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-2 px-3 rounded-lg text-foreground/80 hover:text-foreground transition-colors ${
                      location.pathname === link.href 
                        ? 'bg-primary/20 text-foreground' 
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
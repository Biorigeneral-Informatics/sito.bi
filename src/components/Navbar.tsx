// src/components/Navbar.tsx - Versione migliorata
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/ai-agents', label: 'AI Agents' },
    { href: '/chatbots', label: 'Chatbots' },
    { href: '/developers', label: 'Developers' },
    { href: '/contact', label: 'Contact' },
  ];

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
            <img src="/logo.svg" alt="Biorigeneral" className="w-10 h-10" />
            <span className="font-bold text-xl">Biorigeneral</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
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
            ))}
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
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg ${
                    location.pathname === link.href 
                      ? 'bg-primary/20 text-foreground' 
                      : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
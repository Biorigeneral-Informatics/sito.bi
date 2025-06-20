// src/components/Navbar.tsx - Versione corretta con sottomenu mobile completo
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Code, Users, Bot, MessageSquare, TrendingUp, Mail } from 'lucide-react';

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

  // Lista completa dei servizi come nel desktop
  const servicesLinks = [
    { href: '/software-pmi', label: 'Software PMI', icon: Code },
    { href: '/developers', label: 'Sviluppatori', icon: Users },
    { href: '/ai-agents', label: 'Agenti AI', icon: Bot },
    { href: '/chatbots', label: 'Chatbot AI', icon: MessageSquare },
    { href: '/growth-plans', label: 'Piani di Crescita', icon: TrendingUp },
    { href: '/contact', label: 'Consulenza', icon: Mail },
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
                  
                  {/* Sottomenu Desktop */}
                  {servicesOpen && (
                    <div 
                      className="absolute right-0 mt-8 w-[600px] backdrop-blur-xl bg-background rounded-xl p-6 shadow-2xl border border-white/40"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {/* Header del menu */}
                      <div className="pb-4 mb-4 border-b border-white/20">
                        <h3 className="text-sm font-semibold text-white/80">I nostri servizi</h3>
                      </div>
                      
                      {/* Grid a 3 colonne */}
                      <div className="grid grid-cols-3 gap-8 relative">
                        
                        {/* Colonna 1 - Sviluppo */}
                        <div className="space-y-2">
                          <div className="px-2 mb-3">
                            <span className="text-xs font-medium text-accent uppercase tracking-wide">Sviluppo</span>
                          </div>
                          
                          <Link
                            to="/software-pmi"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/software-pmi' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <Code className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Software PMI</span>
                          </Link>
                          
                          <Link
                            to="/developers"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/developers' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <Users className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Sviluppatori</span>
                          </Link>
                        </div>
                        
                        {/* Colonna 2 - AI */}
                        <div className="space-y-2">
                          <div className="px-2 mb-3">
                            <span className="text-xs font-medium text-accent uppercase tracking-wide">Intelligenza Artificiale</span>
                          </div>
                          
                          <Link
                            to="/ai-agents"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/ai-agents' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <Bot className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Agenti AI</span>
                          </Link>
                          
                          <Link
                            to="/chatbots"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/chatbots' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <MessageSquare className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Chatbot AI</span>
                          </Link>
                        </div>
                        
                        {/* Colonna 3 - Business */}
                        <div className="space-y-2">
                          <div className="px-2 mb-3">
                            <span className="text-xs font-medium text-accent uppercase tracking-wide">Business</span>
                          </div>
                          
                          <Link
                            to="/growth-plans"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/growth-plans' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <TrendingUp className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Piani di Crescita</span>
                          </Link>
                          
                          <Link
                            to="/contact"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/contact' ? 'bg-primary/20 text-accent' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <Mail className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">Consulenza</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
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
                  
                  {/* Sottomenu Servizi Mobile - CORRETTO con tutte le pagine */}
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {servicesLinks.map((serviceLink) => {
                        const IconComponent = serviceLink.icon;
                        return (
                          <Link
                            key={serviceLink.href}
                            to={serviceLink.href}
                            className={`flex items-center py-2 px-3 rounded-lg text-white hover:text-accent transition-colors ${
                              location.pathname === serviceLink.href ? 'bg-primary/20 text-accent' : ''
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                              <IconComponent className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-sm">{serviceLink.label}</span>
                          </Link>
                        );
                      })}
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
                  onClick={() => setIsOpen(false)}
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
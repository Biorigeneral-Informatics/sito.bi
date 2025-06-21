// src/components/Navbar.tsx - Versione corretta con sottomenu mobile completo
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Code, Users, Bot, MessageSquare, TrendingUp, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    setMobileServicesOpen(false);
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

  // Struttura servizi organizzata per categorie come nel desktop
  const servicesCategories = [
    {
      title: 'Sviluppo',
      services: [
        { href: '/software-pmi', label: 'Software PMI', icon: Code, description: 'Soluzioni software per PMI' },
        { href: '/developers', label: 'Sviluppatori', icon: Users, description: 'Team di sviluppo' },
      ]
    },
    {
      title: 'Intelligenza Artificiale',
      services: [
        { href: '/ai-agents', label: 'Agenti AI', icon: Bot, description: 'Agenti intelligenti' },
        { href: '/chatbots', label: 'Chatbot AI', icon: MessageSquare, description: 'Assistenti virtuali' },
      ]
    },
    {
      title: 'Consulenza',
      services: [
        { href: '/growth-plans', label: 'Piani di Crescita', icon: TrendingUp, description: 'Strategia aziendale' },
        { href: '/contact', label: 'Consulenza', icon: Mail, description: 'Supporto personalizzato' },
      ]
    }
  ];

  const allServicesLinks = servicesCategories.flatMap(category => category.services);
  const isServicePage = allServicesLinks.some(link => location.pathname === link.href);

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
                              location.pathname === '/software-pmi' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <Code className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Software PMI</p>
                              <p className="text-xs text-gray-400">Soluzioni software per PMI</p>
                            </div>
                          </Link>
                          
                          <Link
                            to="/developers"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/developers' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <Users className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Sviluppatori</p>
                              <p className="text-xs text-gray-400">Team di sviluppo</p>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Colonna 2 - Intelligenza Artificiale */}
                        <div className="space-y-2">
                          <div className="px-2 mb-3">
                            <span className="text-xs font-medium text-accent uppercase tracking-wide">Intelligenza Artificiale</span>
                          </div>
                          
                          <Link
                            to="/ai-agents"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/ai-agents' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <Bot className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Agenti AI</p>
                              <p className="text-xs text-gray-400">Agenti intelligenti</p>
                            </div>
                          </Link>
                          
                          <Link
                            to="/chatbots"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/chatbots' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <MessageSquare className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Chatbot AI</p>
                              <p className="text-xs text-gray-400">Assistenti virtuali</p>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Colonna 3 - Consulenza */}
                        <div className="space-y-2">
                          <div className="px-2 mb-3">
                            <span className="text-xs font-medium text-accent uppercase tracking-wide">Consulenza</span>
                          </div>
                          
                          <Link
                            to="/growth-plans"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/growth-plans' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Piani di Crescita</p>
                              <p className="text-xs text-gray-400">Strategia aziendale</p>
                            </div>
                          </Link>
                          
                          <Link
                            to="/contact"
                            className={`flex items-center px-3 py-2 rounded-lg text-white transition-colors ${
                              location.pathname === '/contact' ?
                                'bg-primary/20 text-accent' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3">
                              <Mail className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Consulenza</p>
                              <p className="text-xs text-gray-400">Supporto personalizzato</p>
                            </div>
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
        <div className="fixed inset-0 top-20 md:hidden z-40">
          {/* Overlay per chiudere il menu toccando fuori */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu scrollabile */}
          <div className="relative mx-4 mt-2 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain glass backdrop-blur-md bg-background/95 border border-white/20 shadow-2xl rounded-xl">
            <div className="p-4 space-y-2">
              {mainLinks.map((link) => 
                link.hasSubmenu ? (
                  <div key={link.label} className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex justify-between items-center py-3 px-4 rounded-lg text-white hover:text-accent transition-colors ${
                        isServicePage ? 'bg-primary/20 text-accent' : 'hover:bg-white/10'
                      }`}
                    >
                      <span className="font-medium">{link.label}</span>
                      {mobileServicesOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    
                    {/* Sottomenu Servizi Mobile */}
                    {mobileServicesOpen && (
                      <div className="bg-background/50 rounded-lg border border-white/20 overflow-hidden">
                       
                        
                        {/* Categorie di servizi */}
                        <div className="p-3 space-y-2">
                          {servicesCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-0.5">
                             
                              
                              {/* Servizi della categoria */}
                              <div className="space-y-0.5">
                                {category.services.map((service) => {
                                  const IconComponent = service.icon;
                                  return (
                                    <Link
                                      key={service.href}
                                      to={service.href}
                                      className={`flex items-center py-3 px-3 rounded-lg text-white transition-colors ${
                                        location.pathname === service.href 
                                          ? 'bg-primary/20 text-accent' 
                                          : 'hover:bg-white/10 active:bg-white/20'
                                      }`}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setMobileServicesOpen(false);
                                      }}
                                    >
                                      <div className="w-8 h-8 rounded-lg border border-gray-500/50 bg-background flex items-center justify-center mr-3 flex-shrink-0">
                                        <IconComponent className="w-4 h-4 text-gray-400" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{service.label}</p>
                                        <p className="text-xs text-gray-400 truncate">{service.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-3 px-4 rounded-lg text-white hover:text-accent transition-colors font-medium ${
                      location.pathname === link.href 
                        ? 'bg-primary/20 text-accent' 
                        : 'hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
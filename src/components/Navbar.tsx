// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [submenuAnimating, setSubmenuAnimating] = useState(false);
  const [mobileSubmenuAnimating, setMobileSubmenuAnimating] = useState(false);
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

  const toggleServices = () => {
    if (servicesOpen) {
      setSubmenuAnimating(true);
      setTimeout(() => {
        setServicesOpen(false);
        setSubmenuAnimating(false);
      }, 200);
    } else {
      setServicesOpen(true);
    }
  };

  const toggleMobileServices = () => {
    if (servicesOpen) {
      setMobileSubmenuAnimating(true);
      setTimeout(() => {
        setServicesOpen(false);
        setMobileSubmenuAnimating(false);
      }, 200);
    } else {
      setServicesOpen(true);
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const getSubmenuClasses = () => {
    if (submenuAnimating) return 'navbar-submenu navbar-submenu-animate-out';
    return `navbar-submenu ${servicesOpen ? 'navbar-submenu-animate-in' : 'opacity-0 invisible'}`;
  };

  const getMobileSubmenuClasses = () => {
    if (mobileSubmenuAnimating) return 'navbar-mobile-submenu-list navbar-mobile-submenu-collapsing';
    return `navbar-mobile-submenu-list ${servicesOpen ? 'navbar-mobile-submenu-expanding' : 'opacity-0 invisible h-0'}`;
  };

  return (
    <nav className="navbar-container navbar-animate-in">
      <div className={`navbar-inner ${scrolled ? 'navbar-scrolled' : 'navbar-not-scrolled'}`}>
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" />
            <span className="navbar-brand-text">Biorigeneral</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            {mainLinks.map((link) => 
              link.hasSubmenu ? (
                <div key={link.label} className="relative" ref={servicesRef}>
                  <button
                    onClick={toggleServices}
                    className={`navbar-submenu-button ${isServicePage ? 'active' : ''}`}
                  >
                    {link.label}
                    {servicesOpen ? (
                      <ChevronUp className="navbar-submenu-icon" />
                    ) : (
                      <ChevronDown className="navbar-submenu-icon" />
                    )}
                  </button>
                  
                  {/* Sottomenu Servizi Desktop */}
                  <div className={getSubmenuClasses()}>
                    {servicesLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        to={serviceLink.href}
                        className={`navbar-submenu-link ${
                          location.pathname === serviceLink.href ? 'active' : ''
                        }`}
                      >
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>

                  {/* Indicatore pagina corrente per sezione Servizi */}
                  {isServicePage && (
                    <div className="navbar-indicator" />
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`navbar-link ${location.pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <div className="navbar-indicator" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-button"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-menu-animate-in' : ''}`}>
          <div className="navbar-mobile-content">
            {mainLinks.map((link) => 
              link.hasSubmenu ? (
                <div key={link.label} className="navbar-mobile-submenu-section">
                  <button
                    onClick={toggleMobileServices}
                    className={`navbar-mobile-submenu-button ${isServicePage ? 'active' : ''}`}
                  >
                    {link.label}
                    {servicesOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Sottomenu Servizi Mobile */}
                  <div className={getMobileSubmenuClasses()}>
                    {servicesLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        to={serviceLink.href}
                        className={`navbar-mobile-link ${
                          location.pathname === serviceLink.href ? 'active' : ''
                        }`}
                      >
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`navbar-mobile-link ${
                    location.pathname === link.href ? 'active' : ''
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
// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-container glass">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <Link to="/" className="footer-logo">
              <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" />
              <span>Bi</span>
            </Link>
            <p className="footer-description">
              Innovazione tecnologica e soluzioni software all'avanguardia per le PMI italiane.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Github size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="footer-section-title">Servizi</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/services" className="footer-link">
                  Sviluppo Software
                </Link>
              </li>
              <li>
                <Link to="/ai-agents" className="footer-link">
                  Agenti AI
                </Link>
              </li>
              <li>
                <Link to="/chatbots" className="footer-link">
                  Chatbot AI
                </Link>
              </li>
              <li>
                <Link to="/developers" className="footer-link">
                  Team di Sviluppo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-section-title">Azienda</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Lavora con Noi
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/TerminiCondizioni" className="footer-link">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-section-title">Contatti</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item center-icon">
                <Mail size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">biorigeneralinformatics@gmail.com</span>
              </li>
              <li className="footer-contact-item center-icon">
                <Phone size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">+39 392 015 8140 (Whatsapp)</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">
                  Via Salara 2/A,<br />
                  64026 Roseto degli Abruzzi (TE), Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-copyright">
          © {new Date().getFullYear()} Biorigeneral Informatics. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
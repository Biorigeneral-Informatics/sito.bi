// src/components/Footer.tsx - Updated with white text
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-8 glass">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" className="w-10 h-10" />
              <span className="font-bold text-xl text-white">Biorigeneral</span>
            </Link>
            <p className="text-white/80 mb-4">
              Innovazione tecnologica e soluzioni software all'avanguardia per le PMI italiane.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-primary transition">
                  Sviluppo Software
                </Link>
              </li>
              <li>
                <Link to="/ai-agents" className="text-white/80 hover:text-primary transition">
                  Agenti AI
                </Link>
              </li>
              <li>
                <Link to="/chatbots" className="text-white/80 hover:text-primary transition">
                  Chatbot AI
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-white/80 hover:text-primary transition">
                  Team di Sviluppo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-primary transition">
                  Lavora con Noi
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="text-white/80 hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/TerminiCondizioni" className="text-white/80 hover:text-primary transition">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-white/80">info@biorigeneralinformatics.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-white/80">
                  Via Salara 2/A,<br />
                  64026 Roseto degli Abruzzi (TE), Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/30 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Biorigeneral Informatics. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
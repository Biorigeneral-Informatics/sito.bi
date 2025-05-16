// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-8 glass">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="https://i.imgur.com/UoihSYZ.png" alt="Biorigeneral" className="w-10 h-10" />
              <span className="font-bold text-xl">Bi</span>
            </Link>
            <p className="text-foreground/70 mb-4">
              Innovazione tecnologica e soluzioni software all'avanguardia per le PMI italiane.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition">
                  Sviluppo Software
                </Link>
              </li>
              <li>
                <Link to="/ai-agents" className="text-foreground/70 hover:text-primary transition">
                  Agenti AI
                </Link>
              </li>
              <li>
                <Link to="/chatbots" className="text-foreground/70 hover:text-primary transition">
                  Chatbot AI
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-foreground/70 hover:text-primary transition">
                  Team di Sviluppo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-primary transition">
                  Lavora con Noi
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="text-foreground/70 hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/TerminiCondizioni" className="text-foreground/70 hover:text-primary transition">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-foreground/70">info@biorigeneralinformatics.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-foreground/70">+39 392 015 8140 (Whatsapp)</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-foreground/70">
                  Via Salara 2/A,<br />
                  64026 Roseto degli Abruzzi (TE), Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/30 text-center text-foreground/60 text-sm">
          © {new Date().getFullYear()} Biorigeneral Informatics. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
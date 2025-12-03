import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import SoftwarePMI from './pages/SoftwarePMI';
import AIAgents from './pages/AIAgents';
import Chatbots from './pages/Chatbots';
import GrowthPlans from './pages/GrowthPlans';
import GrowthPlansUsers from './pages/GrowthPlansUsers';
import GrowthPlansCompanies from './pages/GrowthPlansCompanies';
import Developers from './pages/Developers';
import Community from './pages/Community';
import TerminiCondizioni from './pages/TerminiCondizioni';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieBanner from './components/CookieBanner';
import { ThemeProvider } from './hooks/useTheme';
import AssistentiAILocale from './pages/AssistentiAILocale'
import AutoTranslate from './components/LanguageSelector';


localStorage.removeItem('preloaderShown');

// Componente ScrollToTop per garantire lo scroll all'inizio
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
    <ThemeProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AnimatedBackground />
        <AutoTranslate />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productSlug" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            
            <Route path="/software-pmi" element={<SoftwarePMI />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/growth-plans" element={<GrowthPlans />} />
            <Route path="/growth-plans-users" element={<GrowthPlansUsers />} />
            <Route path="/growth-plans-companies" element={<GrowthPlansCompanies />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/TerminiCondizioni" element={<TerminiCondizioni />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/assistenti-ai-locale" element={<AssistentiAILocale />} />
            
            {/* Percorsi secondari */}
            
            {/* Reindirizzamenti per compatibilità con percorsi /services/ */}
            <Route path="/services/software-pmi" element={<Navigate to="/software-pmi" replace />} />
            <Route path="/services/ai-agents" element={<Navigate to="/ai-agents" replace />} />
            <Route path="/services/chatbots" element={<Navigate to="/chatbots" replace />} />
            <Route path="/services/growth-plans" element={<Navigate to="/growth-plans" replace />} />
            <Route path="/services/developers" element={<Navigate to="/developers" replace />} />
            <Route path="/services" element={<Navigate to="/software-pmi" replace />} />
            <Route path="/services/community" element={<Navigate to="/community" replace />} />
            <Route path="/services/assistenti-ai-locale" element={<Navigate to="/assistenti-ai-locale" replace />} />
            
            {/* Fallback per percorsi non trovati */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

            {/* NotificationToast temporaneamente disabilitato
            <NotificationToast 
              message="Scopri le ultime offerte nella sezione"
              type="info"
              link={{
                text: "Prodotti!",
                url: "https://www.biorigeneralinformatics.com/products"
              }}
            />
            */}

        </main>
        <Footer />
        <CookieBanner /> {/* Aggiungi qui il componente CookieBanner */}
      </div>
    </Router>
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import SoftwarePMI from './pages/SoftwarePMI';
import AIAgents from './pages/AIAgents';
import Chatbots from './pages/Chatbots';
import GrowthPlans from './pages/GrowthPlans';
import Developers from './pages/Developers';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            
            {/* Percorsi principali */}
            <Route path="/software-pmi" element={<SoftwarePMI />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/growth-plans" element={<GrowthPlans />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Reindirizzamenti per compatibilità con percorsi /services/ */}
            <Route path="/services/software-pmi" element={<Navigate to="/software-pmi" replace />} />
            <Route path="/services/ai-agents" element={<Navigate to="/ai-agents" replace />} />
            <Route path="/services/chatbots" element={<Navigate to="/chatbots" replace />} />
            <Route path="/services/growth-plans" element={<Navigate to="/growth-plans" replace />} />
            <Route path="/services/developers" element={<Navigate to="/developers" replace />} />
            <Route path="/services" element={<Navigate to="/software-pmi" replace />} />
            
            {/* Fallback per percorsi non trovati */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
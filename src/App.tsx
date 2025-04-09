// src/App.tsx - Da modificare
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AIAgents from './pages/AIAgents';
import Chatbots from './pages/Chatbots';
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
            <Route path="/services" element={<Services />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AIAgents from './pages/AIAgents';
import Chatbots from './pages/Chatbots';
import Developers from './pages/Developers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="fixed inset-0 gradient-bg -z-10" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/chatbots" element={<Chatbots />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
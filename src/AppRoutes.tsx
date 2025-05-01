// src/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import TerminiCondizioni from './pages/TerminiCondizioni';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';
// Importa qui le altre pagine quando saranno create

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TerminiCondizioni" element={<TerminiCondizioni />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      {/* Aggiungi altre rotte qui quando saranno necessarie */}
      {/* Esempi basati sui link del Navbar e Footer: */}
      <Route path="/products" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Prodotti (da implementare)</h1></div>} />
      <Route path="/developers" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Sviluppatori (da implementare)</h1></div>} />
      <Route path="/contact" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Contatti (da implementare)</h1></div>} />
      <Route path="/software-pmi" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Software PMI (da implementare)</h1></div>} />
      <Route path="/ai-agents" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Agenti AI (da implementare)</h1></div>} />
      <Route path="/chatbots" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Chatbot AI (da implementare)</h1></div>} />
      <Route path="/growth-plans" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Piani di Crescita (da implementare)</h1></div>} />
      <Route path="/about" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Chi Siamo (da implementare)</h1></div>} />
      <Route path="/careers" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Lavora con Noi (da implementare)</h1></div>} />
      <Route path="/services" element={<div className="container mx-auto px-6 py-32 min-h-screen"><h1 className="text-4xl font-bold">Pagina Servizi (da implementare)</h1></div>} />
      {/* Aggiungi un percorso per gestire le rotte non trovate */}
      <Route path="*" element={<div className="container mx-auto px-6 py-32 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Pagina non trovata</h1>
        <p className="text-xl">La pagina che stai cercando non esiste o è stata spostata.</p>
      </div>} />
    </Routes>
  );
};

export default AppRoutes;
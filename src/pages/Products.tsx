// src/pages/Products.tsx - Versione completamente rinnovata
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, BrainCircuit, CheckCircle, Database,
  ExternalLink, Shield, Zap, 
  Rocket, GitMerge, BarChart, Users, ChevronRight, 
  MessageSquare, Download, ListChecks,
   TrendingUp,
  Clock, Search, Send,
  BarChart3, Cable, Workflow, 
  GitBranch, ChevronLeft, Grid,
  Lightbulb, Calendar, Table, RefreshCw,
  Library, PlayCircle
} from 'lucide-react';


const Products = () => {
  // Refs e stati
  const containerRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  
  const [activeProduct, setActiveProduct] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Gestione movimento mouse per effetti interattivi
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { left, top, width, height } = heroSection.getBoundingClientRect();
        
        // Verifica se il mouse è dentro la sezione hero
        if (e.clientX >= left && 
            e.clientX <= left + width && 
            e.clientY >= top && 
            e.clientY <= top + height) {
          // Calcola la posizione relativa del mouse all'interno dell'elemento
          const x = (e.clientX - left) / width;
          const y = (e.clientY - top) / height;
          setMousePosition({ x, y });
        }
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  


  return (
    <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
      {/* Hero Section con effetti visivi avanzati */}
<section className="relative mb-24 overflow-hidden min-h-[85vh] flex items-center" 
         id="hero-section" // Riferimento diretto alla sezione per calcolare correttamente la posizione del mouse
>

  
{/* Background elements animati - linee più visibili e gradiente che segue precisamente il mouse */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
  {/* Sfondo base scuro per evitare stacchi visibili nella parte superiore */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
  
  {/* Gradiente mouse più preciso che segue esattamente il mouse su tutta la sezione */}
  <div 
  className="absolute inset-0 opacity-70 pointer-events-none z-5"
  style={{
    background: `radial-gradient(circle 300px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(99, 102, 241, 0.3), 
                rgba(139, 92, 246, 0.2), 
                transparent 70%)`,
    transition: 'none',
    zIndex: 5,  // Un valore di z-index inferiore a quello della wave
  }}
/>
  
  {/* Luminosità aggiuntiva verso il fondo per la transizione alla wave */}
  <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-indigo-500/8 to-transparent z-10"></div>
    
    {/* Elementi geometrici animati */}
    <div className="absolute inset-0">
      {/* Linee orizzontali animate - più visibili */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`line-h-${i}`}
          className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
          style={{
            top: `${25 + i * 15}%`,
            width: '120%',
            left: '-10%',
            animation: `slideX ${12 + i * 4}s linear infinite ${i * 1.5}s`,
            opacity: 0.6
          }}
        />
      ))}
      
      {/* Linee verticali animate - più visibili */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`line-v-${i}`}
          className="absolute w-[1.5px] bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            height: '120%',
            top: '-10%',
            animation: `slideY ${15 + i * 3}s linear infinite ${i * 1}s`,
            opacity: 0.5
          }}
        />
      ))}
      
      {/* Grid di punti piccoli (per effetto matrix) */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/15"
          style={{
            top: `${5 + (i * 19) % 90}%`,
            left: `${7 + (i * 13) % 85}%`,
            animation: `blink ${2 + i % 3}s ease-in-out infinite ${i * 0.2}s`
          }}
        />
      ))}
      
      {/* Piccoli cerchi che fluttuano - più visibili */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-indigo-500/20"
          style={{
            width: `${6 + (i % 3) * 4}px`,
            height: `${6 + (i % 3) * 4}px`,
            top: `${15 + (i * 8) % 70}%`,
            left: `${20 + (i * 7) % 65}%`,
            animation: `float ${7 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
            opacity: 0.5
          }}
        />
      ))}
      
      {/* Quadrati rotanti più visibili */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={`square-${i}`}
          className="absolute border-2 border-violet-500/15"
          style={{
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            top: `${20 + (i * 10) % 60}%`,
            left: `${15 + (i * 12) % 70}%`,
            animation: `rotate ${12 + i * 3}s linear infinite ${i * 0.7}s`,
            opacity: 0.4
          }}
        />
      ))}
      
      {/* Triangoli (div ruotati) - più visibili */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={`triangle-${i}`}
          className="absolute border-t-2 border-r-2 border-indigo-500/15"
          style={{
            width: `${10 + (i % 3) * 5}px`,
            height: `${10 + (i % 3) * 5}px`,
            top: `${30 + (i * 15) % 50}%`,
            left: `${25 + (i * 20) % 50}%`,
            transform: 'rotate(45deg)',
            animation: `rotate ${10 + i * 4}s linear infinite reverse ${i * 1.2}s`,
            opacity: 0.35
          }}
        />
      ))}
    </div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Badge premium */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-6"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Tecnologia All'Avanguardia
        </span>
      </motion.div>
      
      {/* Headline principale */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        <span className="block mb-2">Accelera la crescita aziendale con l'integrazione di   </span>
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent inline-block">
           soluzioni AI.
       
        </span>
      </motion.h1>
      
      {/* Sottotitolo ottimizzato per conversione */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
      >
        La nostra suite di prodotti AI è progettata per <strong>automatizzare i processi</strong>, 
        <strong> ridurre i costi operativi</strong> e <strong>massimizzare il ROI</strong> della tua azienda 
        in una frazione del tempo rispetto ai metodi tradizionali.
      </motion.p>

      {/* CTA primarie ottimizzate per conversione */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link 
          to="/contact"
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center font-medium group"
        >
          <span>Prenota una demo personalizzata</span>
          <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
            <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
          </div>
        </Link>
        
      </motion.div>
    </motion.div>
  </div>

{/* Wave divider con sovrapposizione aggressiva */}
<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ zIndex: 25 }}>
  {/* SVG Wave */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320" 
    className="w-full" 
    preserveAspectRatio="none"
    height="80"
    style={{ display: 'block', marginBottom: '-2px' }}
  >
    <path 
      className="fill-background" 
      d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
  
  
  {/* Sovrapposizione aggressiva per eliminare la linea */}
  <div 
    className="absolute -bottom-1 left-0 right-0 h-4 bg-background" 
    style={{ zIndex: 26 }}
  ></div>
</div>


</section>

{/* Stili personalizzati per animazioni */}
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes slideX {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes slideY {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes blink {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`}} />
      
{/* Sezione prodotti digitali con carousel orizzontale */}
<section id="solutions" className="container mx-auto px-6 pt-24 mt-0 bg-background relative z-10">
 
{/* Gradient viola centralizzato che pulsa */}
<div className="absolute w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-gradient-pulse rounded-full blur-3xl -z-10 pointer-events-none opacity-60"></div>

  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Innovazione e Automazione
          </span>
        </div>
        <h2 className="text-4xl font-bold mb-5 leading-tight">
          Soluzioni <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">avanzate</span> per il tuo business
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tecnologie innovative che trasformano processi complessi in flussi di lavoro automatizzati, 
          offrendo efficienza e precisione senza precedenti
        </p>
      </motion.div>
    </div>
    
    {/* Filtri per categoria adattati ai nuovi prodotti - modificato per mobile */}
    <div className="flex justify-center mb-20 overflow-x-auto pb-2">
      <div className="glass px-1.5 py-1.5 rounded-full border border-indigo-500/20 inline-flex max-md:flex-wrap max-md:justify-center max-md:gap-1 max-md:rounded-xl">
        {[
          { id: 'all', name: 'Tutti', icon: <Grid className="w-4 h-4" /> },
          { id: 'assistants', name: 'Assistenti', icon: <Bot className="w-4 h-4" /> },
          { id: 'data', name: 'Dati', icon: <Table className="w-4 h-4" /> },
          { id: 'ai', name: 'AI', icon: <BrainCircuit className="w-4 h-4" /> },
          { id: 'automation', name: 'Automazione', icon: <Workflow className="w-4 h-4" /> }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedIndustry(category.id)}
            className={`relative px-6 py-2.5 rounded-full transition-all duration-300 z-10 flex items-center max-md:px-3 max-md:py-1.5 max-md:text-sm ${
              selectedIndustry === category.id ? 'text-white' : 'hover:bg-foreground/5'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            {selectedIndustry === category.id && (
              <motion.div
                layoutId="active-category"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 rounded-full max-md:rounded-lg"
                initial={false}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                style={{ zIndex: -1 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
    
    {/* Carousel prodotti orizzontale completamente riorganizzato */}
    <div className="relative">
      {/* Frecce di navigazione ottimizzate */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          // Usa setTimeout per garantire che la transizione sia coerente
          const newIndex = activeProduct === 0 ? 3 : activeProduct - 1;
          setActiveProduct(newIndex);
        }}
        className="absolute top-1/2 -left-16 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 transition-colors focus:outline-none max-md:hidden"
        aria-label="Prodotto precedente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>


      <button 
        onClick={(e) => {
          e.preventDefault();
          // Usa setTimeout per garantire che la transizione sia coerente
          const newIndex = activeProduct === 3 ? 0 : activeProduct + 1;
          setActiveProduct(newIndex);
        }}
        className="absolute top-1/2 -right-16 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 transition-colors focus:outline-none max-md:hidden"
        aria-label="Prodotto successivo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Contenitore con overflow nascosto e posizione relativa */}
      <div className="overflow-hidden relative">
        {/* Slider con transizione fluida e affidabile */}
        <div 
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeProduct * 100}%)` }}
        >
          {/* Segretario Telegram */}
          <div className="w-full flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 rounded-3xl blur-xl"></div>
              
              <div className="glass rounded-2xl border border-indigo-500/20 overflow-hidden relative z-10 transition-all">

                <div className="grid md:grid-cols-2 h-full">
                  {/* Content - Lato sinistro */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-1">
                        Assistente Virtuale
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-medium text-amber-400 mb-1">
                        In Sviluppo
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-5">
                      <div className="mr-3 relative">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-violet-500/30 text-xs">
                          AI
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">Segretario Telegram</h3>
                    </div>
                    
                    <p className="text-base text-foreground/80 mb-6 flex-grow">
                      Assistente virtuale che gestisce conversazioni, pianifica appuntamenti e automatizza risposte su Telegram. 
                      Integrazione perfetta con i tuoi workflow aziendali per una comunicazione efficiente 24/7.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <MessageSquare className="w-4 h-4 text-indigo-400 mr-2" />
                          Risposte automatiche
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Gestisce conversazioni standard e risponde alle domande frequenti con precisione.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <Calendar className="w-4 h-4 text-indigo-400 mr-2" />
                          Gestione calendario
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Pianifica appuntamenti e invia promemoria automatici ai partecipanti.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                        <span className="font-semibold text-xl">€99<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Link 
                          to="/products/segretario-telegram" 
                          className="text-indigo-400 hover:text-indigo-500 transition-colors font-medium text-sm flex items-center"
                        >
                          Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Link>
                        
                        <Link 
                          to="/products/segretario-telegram"
                          className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-indigo-500/20 text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo - Lato destro (dimensioni ridotte) */}
                  <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-600/10 to-violet-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                    {/* Contenitore più piccolo e centrato */}
                    <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                      {/* Chat Telegram */}
                      <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                        <div className="bg-indigo-600/90 py-2 px-3 text-white flex items-center justify-between">
                          <div className="flex items-center">
                            <Bot className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Segretario Bot</span>
                          </div>
                        </div>
                        
                        <div className="p-3 space-y-3 max-h-[300px] overflow-hidden">
                          <div className="flex items-start">
                            <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <Bot className="w-3 h-3 text-indigo-400" />
                            </div>
                            <div className="bg-indigo-500/10 rounded-lg rounded-tl-none p-2 max-w-[80%] text-xs">
                              <p>Buongiorno! Sono il tuo segretario. Come posso aiutarti?</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <div className="bg-indigo-500/20 rounded-lg rounded-tr-none p-2 max-w-[80%] text-xs">
                              <p>Voglio fissare una call con il team marketing</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <Bot className="w-3 h-3 text-indigo-400" />
                            </div>
                            <div className="bg-indigo-500/10 rounded-lg rounded-tl-none p-2 max-w-[80%] text-xs">
                              <p>Giovedì alle 10:00 è disponibile. Creo l'evento?</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <div className="bg-indigo-500/20 rounded-lg rounded-tr-none p-2 max-w-[80%] text-xs">
                              <p>Sì, perfetto.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-white/10 p-2">
                          <div className="flex items-center">
                            <div className="bg-transparent flex-grow text-xs opacity-60 px-2">Scrivi un messaggio...</div>
                            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                              <Send className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Excel Lead Generator */}
          <div className="w-full flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5 rounded-3xl blur-xl"></div>
              
              <div className="glass rounded-2xl border border-emerald-500/20 overflow-hidden relative z-10 hover:border-emerald-500/40 transition-all">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Content - Lato sinistro */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-1">
                        Data Automation
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-medium text-amber-400 mb-1">
                        In Sviluppo
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-5">
                      <div className="mr-3 relative">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                          <Table className="w-6 h-6" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-sm shadow-green-500/30 text-xs">
                          AI
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">Excel Lead Generator</h3>
                    </div>
                    
                    <p className="text-base text-foreground/80 mb-6 flex-grow">
                      Trasforma i fogli Excel in potenti strumenti di generazione lead con arricchimento automatico dei dati tramite AI. 
                      Converte dati grezzi in contatti qualificati pronti per le vendite.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <Database className="w-4 h-4 text-emerald-400 mr-2" />
                          Arricchimento dati
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Completa automaticamente informazioni mancanti da fonti pubbliche e private.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <BarChart className="w-4 h-4 text-emerald-400 mr-2" />
                          Scoring lead automatico
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Valuta e classifica i contatti in base alla probabilità di conversione.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                        <span className="font-semibold text-xl">€149<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Link 
                          to="/products/excel-lead-generator" 
                          className="text-emerald-400 hover:text-emerald-500 transition-colors font-medium text-sm flex items-center"
                        >
                          Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Link>
                        
                        <Link 
                          to="/products/excel-lead-generator"
                          className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-emerald-500/20 text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo - Lato destro (dimensioni ridotte) */}
                  <div className="bg-gradient-to-br from-emerald-500/10 via-green-600/10 to-green-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                    {/* Contenitore più piccolo e centrato */}
                    <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                      {/* Excel interface semplificata */}
                      <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                        <div className="bg-emerald-700/90 py-2 px-3 text-white flex items-center justify-between">
                          <div className="flex items-center">
                            <Table className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Lead Generator</span>
                          </div>
                        </div>
                        
                        <div className="p-1 bg-white/5">
                          {/* Excel header */}
                          <div className="grid grid-cols-4 text-[10px] font-medium border-b border-white/20 py-1 px-1 bg-emerald-900/30">
                            <div className="px-1">Azienda</div>
                            <div className="px-1">Contatto</div>
                            <div className="px-1">Email</div>
                            <div className="px-1">Score</div>
                          </div>
                          
                          {/* Excel rows */}
                          {[
                            { company: "TechSolutions", contact: "Mario Rossi", email: "mario@tech...", score: "87%" },
                            { company: "Digital First", contact: "Laura Bianchi", email: "l.bianchi@...", score: "92%" },
                            { company: "Innovate SRL", contact: "Andrea Verdi", email: "andrea@in...", score: "78%" },
                            { company: "Studio Mori", contact: "Giulia Mori", email: "g.mori@st...", score: "65%" },
                            { company: "EcoSmart", contact: "Luca Ferrari", email: "l.ferrari@...", score: "89%" }
                          ].map((row, idx) => (
                            <div key={idx} className={`grid grid-cols-4 text-[10px] py-1 px-1 ${idx % 2 === 0 ? 'bg-emerald-900/10' : 'bg-emerald-900/20'}`}>
                              <div className="px-1 truncate">{row.company}</div>
                              <div className="px-1 truncate">{row.contact}</div>
                              <div className="px-1 truncate">{row.email}</div>
                              <div className="px-1">
                                <span className={`px-1 py-0.5 rounded-full text-[8px] ${
                                  parseInt(row.score) > 85 ? 'bg-emerald-500/30 text-emerald-400' : 
                                  parseInt(row.score) > 70 ? 'bg-amber-500/30 text-amber-400' : 
                                  'bg-rose-500/30 text-rose-400'
                                }`}>
                                  {row.score}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Excel toolbar semplificato */}
                        <div className="p-2 bg-emerald-900/40 flex justify-between items-center">
                          <div className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[10px]">
                            <RefreshCw className="w-3 h-3 inline mr-1" />
                            Aggiorna
                          </div>
                          
                          <div className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[10px]">
                            <Download className="w-3 h-3 inline mr-1" />
                            Esporta
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI CRM */}
          <div className="w-full flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-transparent to-sky-500/5 rounded-3xl blur-xl"></div>
              
              <div className="glass rounded-2xl border border-blue-500/20 overflow-hidden relative z-10 hover:border-emerald-500/40 transition-all">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Content - Lato sinistro */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-1">
                        Customer Intelligence
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-medium text-amber-400 mb-1">
                        In Sviluppo
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-5">
                      <div className="mr-3 relative">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                          <Users className="w-6 h-6" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 text-xs">
                          AI
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">AI CRM</h3>
                    </div>
                    
                    <p className="text-base text-foreground/80 mb-6 flex-grow">
                      Sistema CRM potenziato da intelligenza artificiale che prevede le esigenze dei clienti, 
                      automatizza il follow-up e massimizza le conversioni con suggerimenti personalizzati.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <BrainCircuit className="w-4 h-4 text-blue-400 mr-2" />
                          Previsione comportamento
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Anticipa le esigenze dei clienti con analisi predittiva avanzata.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <MessageSquare className="w-4 h-4 text-blue-400 mr-2" />
                          Automazione follow-up
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Gestisce autonomamente i follow-up con frequenza e tono ottimali.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                        <span className="font-semibold text-xl">€199<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Link 
                          to="/products/ai-crm" 
                          className="text-blue-400 hover:text-blue-500 transition-colors font-medium text-sm flex items-center"
                        >
                          Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Link>
                        
                        <Link 
                          to="/products/ai-crm"
                          className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-blue-500/20 text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo - Lato destro (dimensioni ridotte) */}
                  <div className="bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-sky-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                    {/* Contenitore più piccolo e centrato */}
                    <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                      {/* CRM Dashboard semplificato */}
                      <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                        <div className="bg-gradient-to-r from-blue-700/90 to-sky-600/90 py-2 px-3 text-white flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">AI CRM</span>
                          </div>
                        </div>
                        
                        <div className="p-3 space-y-3">
                          {/* Stats overview semplificati */}
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[10px] text-foreground/60">Lead</div>
                              <div className="text-sm font-semibold text-blue-400">48</div>
                              <div className="text-[8px] text-emerald-400">+12%</div>
                            </div>
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[10px] text-foreground/60">Conversioni</div>
                              <div className="text-sm font-semibold text-blue-400">24</div>
                              <div className="text-[8px] text-emerald-400">+8%</div>
                            </div>
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[10px] text-foreground/60">Ricavi</div>
                              <div className="text-sm font-semibold text-blue-400">€9.2k</div>
                              <div className="text-[8px] text-emerald-400">+15%</div>
                            </div>
                          </div>
                          
                          {/* AI Insights */}
                          <div>
                            <div className="flex items-center mb-1">
                              <BrainCircuit className="w-3 h-3 text-blue-400 mr-1" />
                              <div className="text-[10px] font-medium">Insights AI</div>
                            </div>
                            <div className="glass rounded p-2 border border-blue-500/20 bg-blue-500/5">
                              <p className="text-[10px] text-foreground/80 mb-1">
                                <span className="font-medium">Opportunità di upsell:</span> 12 clienti hanno mostrato interesse per il pacchetto Premium.
                              </p>
                            </div>
                          </div>
                          
                          {/* Customers list semplificata */}
                          <div>
                            <div className="flex items-center mb-1">
                              <Users className="w-3 h-3 text-blue-400 mr-1" />
                              <div className="text-[10px] font-medium">Clienti con priorità</div>
                            </div>
                            <div className="space-y-1.5">
                              {[
                                {name: "Marco Rossi", company: "TechVision", score: 94},
                                {name: "Laura Bianchi", company: "Digital First", score: 86}
                              ].map((customer, idx) => (
                                <div key={idx} className="glass p-1.5 rounded flex justify-between items-center">
                                  <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-rose-500/80 flex items-center justify-center text-white text-[8px] mr-1.5">
                                      {customer.name.charAt(0)}
                                    </div>
                                    <div>
                                      <div className="text-[10px] font-medium">{customer.name}</div>
                                      <div className="text-[8px] text-foreground/60">{customer.company}</div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[8px] text-foreground/60">Score: {customer.score}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* PromptElite */}
          <div className="w-full flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/5 via-transparent to-purple-500/5 rounded-3xl blur-xl"></div>
              
              <div className="glass rounded-2xl border border-fuchsia-500/20 overflow-hidden relative z-10 hover:border-fuchsia-500/40 transition-all">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Content - Lato sinistro */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-medium text-fuchsia-400 mb-1">
                        Prompt Engineering
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-medium text-amber-400 mb-1">
                        In Sviluppo
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-5">
                      <div className="mr-3 relative">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-fuchsia-500/20">
                          <BrainCircuit className="w-6 h-6" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/30 text-xs">
                          AI
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">PromptElite</h3>
                    </div>
                    
                    <p className="text-base text-foreground/80 mb-6 flex-grow">
                      Strumento avanzato per la creazione e ottimizzazione di prompt per modelli AI. 
                      Massimizza le performance dei tuoi assistenti virtuali con template pronti all'uso e analitiche dettagliate.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-fuchsia-500/5 to-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <Library className="w-4 h-4 text-fuchsia-400 mr-2" />
                          Template library
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Centinaia di template pronti all'uso per ogni caso d'uso aziendale.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-fuchsia-500/5 to-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/20">
                        <h4 className="font-semibold text-sm flex items-center mb-2">
                          <BarChart className="w-4 h-4 text-fuchsia-400 mr-2" />
                          A/B testing
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Confronta diversi prompt per trovare la formulazione più efficace.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                        <span className="font-semibold text-xl">€129<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Link 
                          to="/products/promptelite" 
                          className="text-fuchsia-400 hover:text-fuchsia-500 transition-colors font-medium text-sm flex items-center"
                        >
                          Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Link>
                        
                        <Link 
                          to="/products/promptelite"
                          className="px-5 py-2.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-fuchsia-500/20 text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo - Lato destro (dimensioni ridotte) */}
                  <div className="bg-gradient-to-br from-fuchsia-500/10 via-pink-600/10 to-purple-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                    {/* Contenitore più piccolo e centrato */}
                    <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                      {/* Prompt Editor semplificato */}
                      <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                        <div className="bg-gradient-to-r from-fuchsia-700/90 to-purple-600/90 py-2 px-3 text-white flex items-center justify-between">
                          <div className="flex items-center">
                            <BrainCircuit className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">PromptElite</span>
                          </div>
                        </div>
                        
                        <div className="p-3 space-y-2">
                          {/* Template selector */}
                          <div className="flex items-center space-x-1.5 mb-1">
                            <div className="text-[10px] text-foreground/60">Template:</div>
                            <div className="text-[10px] bg-fuchsia-500/10 border border-fuchsia-500/30 rounded py-1 px-1.5 text-foreground/80">
                              Customer Service
                            </div>
                          </div>
                          
                          {/* Prompt editor */}
                          <div className="glass border border-fuchsia-500/20 rounded p-2 bg-background/50">
                            <div className="text-[10px] text-fuchsia-400 mb-1">Prompt Template:</div>
                            <div className="text-[8px] text-foreground/80 font-mono h-24 overflow-hidden">
                              {"Sei un assistente clienti esperto di {company}.\n\nQuando rispondi alle domande dei clienti:\n1. Mantieni un tono cordiale e professionale\n2. Offri soluzioni concrete ai problemi\n3. Suggerisci prodotti correlati\n4. Chiedi feedback sulla risposta"}
                            </div>
                          </div>
                          
                          {/* Variables */}
                          <div className="grid grid-cols-2 gap-1.5">
                            <div className="flex flex-col gap-1">
                              <label className="text-[8px] text-fuchsia-400">company:</label>
                              <div className="text-[8px] bg-fuchsia-500/10 border border-fuchsia-500/30 rounded py-1 px-1.5">
                                TechSolutions
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[8px] text-fuchsia-400">products:</label>
                              <div className="text-[8px] bg-fuchsia-500/10 border border-fuchsia-500/30 rounded py-1 px-1.5">
                                X1, X2 Pro, X3 Ultra
                              </div>
                            </div>
                          </div>
                          
                          {/* Performance metrics */}
                          <div className="grid grid-cols-3 gap-1.5">
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[8px] text-foreground/60">Efficacia</div>
                              <div className="text-[10px] text-fuchsia-400 font-medium">92%</div>
                            </div>
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[8px] text-foreground/60">Chiarezza</div>
                              <div className="text-[10px] text-fuchsia-400 font-medium">88%</div>
                            </div>
                            <div className="glass rounded p-1.5 text-center">
                              <div className="text-[8px] text-foreground/60">Conversioni</div>
                              <div className="text-[10px] text-fuchsia-400 font-medium">+42%</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="p-2 border-t border-fuchsia-500/20 flex justify-between">
                          <div className="px-2 py-1 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded text-[8px] text-fuchsia-400">
                            <Lightbulb className="w-2 h-2 inline mr-1" />
                            Ottimizza
                          </div>
                          <div className="px-2 py-1 bg-fuchsia-500 rounded text-[8px] text-white">
                            <PlayCircle className="w-2 h-2 inline mr-1" />
                            Testa
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicatori di scorrimento migliorati */}
      <div className="flex justify-center mt-8 gap-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setActiveProduct(index)}
            className={`rounded-full transition-all duration-300 flex items-center justify-center focus:outline-none ${
              activeProduct === index 
                ? index === 0 ? 'bg-indigo-500 w-8 h-3' : 
                  index === 1 ? 'bg-emerald-500 w-8 h-3' : 
                  index === 2 ? 'bg-blue-500 w-8 h-3' : 
                  'bg-fuchsia-500 w-8 h-3'
                : 'bg-foreground/20 hover:bg-foreground/30 w-3 h-3'
            }`}
            aria-label={`Vai al prodotto ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Controlli di navigazione per mobile */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex gap-6">
          <button 
            onClick={() => {
              const newIndex = activeProduct === 0 ? 3 : activeProduct - 1;
              setActiveProduct(newIndex);
            }}
            className="w-12 h-12 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 bg-background/70 backdrop-blur-sm shadow-md shadow-indigo-500/20"
            aria-label="Prodotto precedente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => {
              const newIndex = activeProduct === 3 ? 0 : activeProduct + 1;
              setActiveProduct(newIndex);
            }}
            className="w-12 h-12 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 bg-background/70 backdrop-blur-sm shadow-md shadow-indigo-500/20"
            aria-label="Prodotto successivo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    

      {/* Stili specifici per mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          /* Migliora la spaziatura interna delle card su mobile */
          .p-8 {
            padding: 1rem;
          }
          
          /* Riduci la dimensione dei testi per i filtri su mobile */
          .max-md\\:text-sm {
            font-size: 0.875rem;
          }
          
          /* Rimuovi l'overflow che causa lo scroll orizzontale */
          .overflow-x-auto {
            overflow-x: visible;
          }
          
          /* Adatta meglio i filtri su mobile */
          .max-md\\:flex-wrap {
            flex-wrap: wrap;
          }
          
          .max-md\\:justify-center {
            justify-content: center;
          }
          
          .max-md\\:gap-1 {
            gap: 0.25rem;
          }
          
          .max-md\\:rounded-xl {
            border-radius: 0.75rem;
          }
          
          .max-md\\:rounded-lg {
            border-radius: 0.5rem;
          }
          
          .max-md\\:px-3 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .max-md\\:py-1\\.5 {
            padding-top: 0.375rem;
            padding-bottom: 0.375rem;
          }
        }
      `}} />

    {/* Soluzioni personalizzate - versione semplificata */}
    <div className="mt-20 relative">
      <div className="glass rounded-xl border border-indigo-500/20 p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Soluzioni personalizzate
          </span>
        </h3>
        
        <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
          Il nostro team di esperti è pronto a sviluppare soluzioni su misura per le tue specifiche esigenze aziendali.
        </p>
        
        <Link 
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 inline-flex items-center font-medium"
        >
          Richiedi una consulenza
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
  
  {/* Stili CSS per animazioni */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
    
    .animate-pulse {
      animation: pulse 2s infinite;
    }
 
    @keyframes gradient-pulse {
  0%, 100% { 
    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.7), transparent 70%);
    transform: scale(0.9) translate(-50%, -50%); 
  }
  50% { 
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.6), transparent 75%);
    transform: scale(1.1) translate(-45%, -45%); 
  }
}

.animate-gradient-pulse {
  animation: gradient-pulse 8s ease-in-out infinite;
  transform-origin: center;
}

  `}} />
</section>
                            

                                

      
{/* Sezione Processo di Implementazione con Timeline Orizzontale Animata e Responsive */}
<section className="py-32 relative z-10" id="implementation-process">
  {/* Gradient centrale esteso che copre anche le sezioni adiacenti - leggermente più luminoso */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1200px] rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/25 to-fuchsia-500/20 filter blur-[180px] timeline-glow -z-10"></div>
  
  {/* Contenitore principale senza margini verticali che creerebbero divisioni */}
  <div className="container mx-auto px-6 relative z-20">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 mb-4 backdrop-blur-md">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Processo di Implementazione
        </span>
      </div>
      
      <h2 className="text-4xl font-bold mb-5">
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          Trasformazione digitale 
        </span>
        in soli 4 passaggi
      </h2>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
        La nostra metodologia comprovata garantisce risultati rapidi con un impatto minimo sulle tue operazioni quotidiane
      </p>
    </div>
    
    {/* Timeline container */}
    <div className="max-w-6xl mx-auto relative mb-12 timeline-container">
      {/* Timeline track (barra principale) */}
      <div className="absolute left-0 right-0 h-2 top-16 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-blue-500/20 backdrop-blur-sm rounded-full hidden md:block timeline-track"></div>
      
      {/* Linea della timeline verticale per mobile */}
      <div className="absolute top-0 bottom-0 w-1 left-8 bg-gradient-to-b from-indigo-500/30 via-violet-500/30 to-blue-500/30 rounded-full md:hidden"></div>
      
      {/* Step della timeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
        {[
          {
            step: 1,
            title: "Analisi e Pianificazione",
            description: "Analizziamo i tuoi processi attuali e definiamo gli obiettivi della trasformazione, creando una roadmap personalizzata.",
            duration: "1-2 settimane",
            icon: <Search className="w-6 h-6" />,
            results: ["Mappatura processi", "Identificazione opportunità", "Roadmap personalizzata"],
            color: "indigo",
            gradient: "from-indigo-500 to-violet-500"
          },
          {
            step: 2,
            title: "Configurazione e Integrazione",
            description: "Configuriamo la soluzione in base alle tue esigenze specifiche e la integriamo con i sistemi esistenti.",
            duration: "2-3 settimane",
            icon: <GitMerge className="w-6 h-6" />,
            results: ["Setup ambiente", "Integrazione sistemi", "Workflow automatizzati"],
            color: "violet",
            gradient: "from-violet-500 to-purple-500"
          },
          {
            step: 3,
            title: "Formazione e Test",
            description: "Formiamo il tuo team e testiamo tutti i workflow in un ambiente controllato prima del lancio in produzione.",
            duration: "1 settimana",
            icon: <Users className="w-6 h-6" />,
            results: ["Team formato", "Workflow testati", "Documentazione"],
            color: "purple",
            gradient: "from-purple-500 to-blue-500"
          },
          {
            step: 4,
            title: "Lancio e Ottimizzazione",
            description: "Lanciamo la soluzione in produzione e monitoriamo le performance, ottimizzando continuamente per massimizzare i risultati.",
            duration: "Continuo",
            icon: <Rocket className="w-6 h-6" />,
            results: ["Go-live senza interruzioni", "Monitoraggio", "Ottimizzazione continua"],
            color: "blue",
            gradient: "from-blue-500 to-cyan-500"
          }
        ].map((item, index) => (
          <div key={index} className={`relative group timeline-step step-${index + 1}`}>
            {/* Elemento circolare della timeline con numero all'interno */}
            <div className={`md:absolute md:top-16 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 
                        absolute top-0 left-8 transform -translate-x-1/2 flex-shrink-0
                        w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} text-white 
                        flex items-center justify-center text-xl font-bold shadow-lg shadow-${item.color}-500/30 z-10
                        border-4 border-background transition-all duration-300 
                        group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-${item.color}-500/40`}>
              {item.step}
            </div>
            
            {/* Card principale con effetti glassmorph - dimensioni ridotte */}
            <div className={`glass rounded-xl border border-${item.color}-500/30 p-5 
                           transition-all duration-300 
                           bg-gradient-to-br from-background/70 to-${item.color}-500/10
                           backdrop-blur-xl
                           hover:shadow-2xl hover:shadow-${item.color}-500/25 hover:scale-105 
                           hover:border-${item.color}-500/50
                           md:mt-24 ml-16 md:ml-0 relative
                           flex flex-col`}>
              
              {/* Effetto glow all'hover */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br from-${item.color}-500/0 to-${item.color}-500/10 opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-300`}></div>
              
              <div className="flex items-center mb-3 justify-between">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-3 text-white shadow-md shadow-${item.color}-500/30 group-hover:shadow-lg group-hover:shadow-${item.color}-500/40 transition-all duration-300`}>
                  {item.icon}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full bg-${item.color}-500/20 border border-${item.color}-500/30 text-xs font-medium text-${item.color}-400 backdrop-blur-md`}>
                  {item.duration}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{item.description}</p>
              
              <div className={`border-t border-${item.color}-500/30 pt-3 mt-auto`}>
                <h4 className={`font-semibold text-xs mb-2 text-${item.color}-400`}>Risultati:</h4>
                <ul className="space-y-1">
                  {item.results.map((result, rIndex) => (
                    <li key={rIndex} className="flex items-start text-xs text-foreground/80">
                      <CheckCircle className={`w-3.5 h-3.5 text-${item.color}-400 mr-1.5 mt-0.5 flex-shrink-0`} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Effetto di riflesso */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/5 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            {/* Linea connettrice per mobile */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-indigo-500/10 via-indigo-500/40 to-indigo-500/10 md:hidden"></div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Indicazione tempo totale */}
    <div className="text-center text-foreground/70 text-sm mb-8">
      <div className="inline-flex items-center glass px-5 py-3 rounded-full border border-indigo-500/30 backdrop-blur-xl">
        <Clock className="w-4 h-4 text-indigo-400 mr-2" />
        Tempo totale di implementazione: <span className="font-bold ml-1">4-6 settimane</span>
      </div>
    </div>
    
    {/* CTA */}
    <div className="text-center mt-12">
      <Link 
        to="/Contact"
        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 hover:scale-105 inline-flex items-center font-medium"
      >
        Scopri di più sulla nostra metodologia
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  </div>
  
  {/* Gradient per le ultime due sezioni */}
  <div className="absolute -z-10 left-0 w-[600px] h-[1000px] bg-gradient-to-r from-violet-500/25 to-transparent filter blur-[180px] pointer-events-none" style={{ top: 'calc(100% + 300px)' }}></div>
  <div className="absolute -z-10 right-0 w-[600px] h-[1000px] bg-gradient-to-l from-fuchsia-500/25 to-transparent filter blur-[180px] pointer-events-none" style={{ top: 'calc(100% + 800px)' }}></div>
  
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    /* Gradient centrale con animazione più dolce e più luminoso */
    @keyframes central-glow {
      0% { 
        opacity: 0.4;
        transform: translate(-50%, -50%) scale(1);
        filter: blur(180px);
      }
      50% { 
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1.2);
        filter: blur(190px);
      }
      100% { 
        opacity: 0.4;
        transform: translate(-50%, -50%) scale(1);
        filter: blur(180px);
      }
    }
    
    /* Animazione attiva anche senza hover */
    .timeline-glow {
      animation: central-glow 15s infinite ease-in-out;
      pointer-events: none;
    }
    
    .glass {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    
    /* Timeline illuminazione progressiva al passaggio del mouse */
    .timeline-container .timeline-track::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(to right, rgb(99, 102, 241), rgb(139, 92, 246), rgb(59, 130, 246), rgb(14, 165, 233));
      border-radius: 9999px;
      transition: width 0.4s ease-out;
      opacity: 0;
    }
    
    /* Illuminazione graduale per ogni step */
    .timeline-container:hover .step-1:hover ~ .timeline-track::before {
      width: 25%;
      opacity: 1;
    }
    
    .timeline-container:hover .step-2:hover ~ .timeline-track::before {
      width: 50%;
      opacity: 1;
    }
    
    .timeline-container:hover .step-3:hover ~ .timeline-track::before {
      width: 75%;
      opacity: 1;
    }
    
    .timeline-container:hover .step-4:hover ~ .timeline-track::before {
      width: 100%;
      opacity: 1;
    }
    
    /* Versione mobile */
    @media (max-width: 768px) {
      .timeline-step {
        margin-left: 2rem;
      }
    }
  `}} />
</section>

{/* Sezione Confronto con immagine */}
<section className="py-24 relative overflow-hidden mb-24">
  {/* Background esteso senza interruzioni */}
  <div className="absolute inset-0 -top-40 -bottom-40 bg-gradient-to-b from-background via-indigo-900/5 to-background pointer-events-none"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Contenuto testuale a sinistra */}
      <div>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Confronto Prestazionale
          </span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6">
          Supera i limiti dei metodi tradizionali
        </h2>
        
        <p className="text-lg text-foreground/80 mb-6">
          I sistemi tradizionali richiedono mesi di implementazione, frequenti manutenzioni e costi nascosti. Le nostre soluzioni AI-first offrono tempi di implementazione 5 volte più rapidi, costi prevedibili e risultati immediati.
        </p>
        
        <div className="space-y-4 mb-8">
          {[
            {
              title: "Tempi di implementazione 5x più rapidi",
              description: "2-4 settimane anziché 3-6 mesi grazie alla nostra piattaforma preconfigurabile",
              icon: <Clock className="w-5 h-5 text-indigo-400" />
            },
            {
              title: "Costi operativi ridotti del 40%",
              description: "Automazione avanzata dei processi e manutenzione proattiva con AI",
              icon: <TrendingUp className="w-5 h-5 text-indigo-400" />
            },
            {
              title: "Scalabilità illimitata",
              description: "Cresci senza interruzioni e aggiungi funzionalità in modo componibile",
              icon: <Zap className="w-5 h-5 text-indigo-400" />
            }
          ].map((item, index) => (
            <div key={index} className="flex">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 flex-shrink-0 border border-indigo-500/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/Contact"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 inline-flex items-center font-medium"
          >
            Prenota una demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
        </div>
      </div>
      
      {/* Immagine a destra */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 rounded-3xl blur-xl"></div>
        
        <div className="glass rounded-2xl border border-indigo-500/20 overflow-hidden relative z-10 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
            alt="Team collaborating on digital transformation" 
            className="w-full h-auto object-cover"
          />
          
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-transparent mix-blend-multiply"></div>
          
          {/* Card informative in overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between">
            <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-sm max-w-[45%]">
              <div className="text-lg font-bold text-white">-78%</div>
              <div className="text-xs text-white/70">Tempo di sviluppo</div>
            </div>
            
            <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-sm max-w-[45%]">
              <div className="text-lg font-bold text-white">+83%</div>
              <div className="text-xs text-white/70">Precisione decisionale</div>
            </div>
          </div>
        </div>
        
        {/* Quote in overlay */}
        <div className="absolute -bottom-5 -right-5 glass p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm bg-background/60 max-w-[80%] shadow-lg">
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H4.5C3.12 12 2 10.88 2 9.5V9C2 5.69 4.69 3 8 3H9V7H8C7.45 7 7 7.45 7 8V9.5C7 10.05 7.45 10.5 8 10.5H9C10.1 10.5 11 11.4 11 12.5V19C11 20.1 10.1 21 9 21H5C3.9 21 3 20.1 3 19V18H8V12ZM22 12H18.5C17.12 12 16 10.88 16 9.5V9C16 5.69 18.69 3 22 3H23V7H22C21.45 7 21 7.45 21 8V9.5C21 10.05 21.45 10.5 22 10.5H23C24.1 10.5 25 11.4 25 12.5V19C25 20.1 24.1 21 23 21H19C17.9 21 17 20.1 17 19V18H22V12Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <p className="text-sm italic mb-2">La soluzione ha ridotto i nostri tempi operativi del 68% fin dalla prima settimana di utilizzo.</p>
              <p className="text-xs font-bold">Marco Rossi, CTO</p>
              <p className="text-xs">TechVision Italia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
{/* FAQ Section - Layout a due colonne con visibilità condizionale */}
<section className="container mx-auto px-6 mb-24 relative z-10">
  <div className="text-center mb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Badge distintivo */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4 relative">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Domande Frequenti
        </span>
      </div>
      
      <h2 className="text-4xl font-bold mb-5">
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          Hai domande
        </span> sui nostri prodotti?
      </h2>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
        Risposte alle domande più comuni per aiutarti a scegliere la soluzione più adatta alle tue esigenze
      </p>
    </motion.div>
  </div>
  
  {/* Background effect */}
  <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>
  
  {/* FAQ a due colonne - prime 4 domande sempre visibili */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 relative z-10">
    {[
      {
        q: "Quale soluzione è più adatta per l'automazione dei processi aziendali?",
        a: "BioriAgent è la soluzione ideale per l'automazione dei processi aziendali. Offre agenti AI che operano 24/7, si adattano alle tue esigenze specifiche e si integrano con oltre 250 strumenti aziendali per trasformare flussi di lavoro complessi in processi automatizzati.",
        icon: <BrainCircuit className="w-5 h-5" />,
        color: "indigo"
      },
      {
        q: "Posso personalizzare le funzionalità delle soluzioni?",
        a: "Assolutamente sì. Tutte le nostre soluzioni sono completamente personalizzabili in base alle esigenze specifiche della tua azienda. Offriamo configurazione su misura, dashboard personalizzate e workflow adattabili, senza compromettere le performance o la semplicità d'uso.",
        icon: <Workflow className="w-5 h-5" />,
        color: "violet"
      },
      {
        q: "Come migliora BioriTalk l'esperienza dei clienti?",
        a: "BioriTalk migliora l'esperienza cliente con assistenti conversazionali avanzati disponibili 24/7 che comprendono il linguaggio naturale in oltre 24 lingue. Il sistema risolve automaticamente il 78% delle richieste, personalizza le interazioni e apprende continuamente per offrire risposte sempre più precise e pertinenti.",
        icon: <MessageSquare className="w-5 h-5" />,
        color: "purple"
      },
      {
        q: "Quanto tempo richiede l'implementazione delle soluzioni?",
        a: "Le nostre soluzioni vengono implementate in 2-4 settimane, un tempo significativamente inferiore rispetto ai 3-6 mesi richiesti dai metodi tradizionali. Questo è possibile grazie al nostro approccio AI-first, alle integrazioni precostituite e a un team di esperti dedicati che ti guida in ogni fase del processo.",
        icon: <Clock className="w-5 h-5" />,
        color: "blue"
      }
    ].map((faq, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group"
      >
        <details className="glass rounded-xl border border-t border-l border-white/10 border-r border-b overflow-hidden transition-all 
                           hover:border-t-indigo-500/30 hover:border-l-indigo-500/30
                           hover:border-r-violet-500/30 hover:border-b-violet-500/30
                           hover:shadow-xl hover:shadow-indigo-500/10">
          <summary className="flex items-center justify-between p-5 cursor-pointer">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg bg-${faq.color}-500/20 flex items-center justify-center mr-4 text-${faq.color}-400 transition-all group-hover:scale-110`}>
                {faq.icon}
              </div>
              <h3 className="text-lg font-medium">{faq.q}</h3>
            </div>
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-transform group-open:rotate-180">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </summary>
          
          <div className="p-5 pt-0">
            <div className="ml-14 text-foreground/70 border-t border-indigo-500/20 pt-4">
              {faq.a}
            </div>
          </div>
          
          {/* Effetto di luce diagonale su hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
        </details>
      </motion.div>
    ))}
  </div>
  
  {/* Domande aggiuntive che appaiono solo dopo aver cliccato "Visualizza tutte le domande" */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 relative z-10 mt-5">
    {showAllFaqs && (
      <>
        {[
          {
            q: "Come si integra BioriPMI con i sistemi gestionali esistenti?",
            a: "BioriPMI offre API RESTful e connettori predefiniti per tutti i principali sistemi gestionali (SAP, Oracle, Microsoft Dynamics, ecc.). Il processo di integrazione è gestito dal nostro team tecnico, che configura sincronizzazioni bidirezionali per garantire coerenza dei dati tra tutti i sistemi aziendali.",
            icon: <Cable className="w-5 h-5" />,
            color: "cyan"
          },
          {
            q: "Quali metriche fornisce QuantumInsight per misurare le performance?",
            a: "QuantumInsight offre dashboard personalizzabili con oltre 200 KPI preconfigurati relativi a vendite, marketing, operazioni e finanza. Il sistema genera automaticamente analisi predittive, rileva anomalie e identifica correlazioni tra dati, permettendoti di prendere decisioni strategiche basate su insights accurati in tempo reale.",
            icon: <BarChart3 className="w-5 h-5" />,
            color: "emerald"
          },
          {
            q: "Come garantite la sicurezza dei dati con OmniDoc?",
            a: "OmniDoc implementa crittografia end-to-end a 256 bit, autenticazione multi-fattore e controlli granulari degli accessi. Tutti i dati sono archiviati in data center certificati ISO 27001, con backup continui e conformità completa a GDPR e altre normative sulla privacy. Manteniamo inoltre un team dedicato alla sicurezza che monitora le minacce 24/7.",
            icon: <Shield className="w-5 h-5" />,
            color: "amber"
          },
          {
            q: "È possibile iniziare con una soluzione e aggiungerne altre in futuro?",
            a: "Assolutamente. La nostra piattaforma è modulare e scalabile, progettata per crescere con la tua azienda. Puoi iniziare con la soluzione che risponde alle tue esigenze più urgenti e aggiungerne altre quando necessario. Tutte le nostre soluzioni sono integrate nativamente, garantendo una perfetta interoperabilità quando decidi di espandere.",
            icon: <GitBranch className="w-5 h-5" />,
            color: "rose"
          }
        ].map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <details className="glass rounded-xl border border-t border-l border-white/10 border-r border-b overflow-hidden transition-all 
                            hover:border-t-indigo-500/30 hover:border-l-indigo-500/30
                            hover:border-r-violet-500/30 hover:border-b-violet-500/30
                            hover:shadow-xl hover:shadow-indigo-500/10">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg bg-${faq.color}-500/20 flex items-center justify-center mr-4 text-${faq.color}-400 transition-all group-hover:scale-110`}>
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-medium">{faq.q}</h3>
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-transform group-open:rotate-180">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </summary>
              
              <div className="p-5 pt-0">
                <div className="ml-14 text-foreground/70 border-t border-indigo-500/20 pt-4">
                  {faq.a}
                </div>
              </div>
              
              {/* Effetto di luce diagonale su hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
            </details>
          </motion.div>
        ))}
      </>
    )}
  </div>
  
  {/* Toggle per visualizzare tutte le domande */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.7, duration: 0.5 }}
    className="text-center mt-12"
  >
    <button 
      onClick={() => setShowAllFaqs(!showAllFaqs)}
      className="glass p-5 rounded-full border border-indigo-500/20 inline-flex items-center backdrop-blur-sm px-6 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
        <ListChecks className="w-5 h-5 text-indigo-400" />
      </div>
      <span className="font-medium mr-5">
        {showAllFaqs ? "Nascondi domande aggiuntive" : "Visualizza tutte le domande"}
      </span>
      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors">
        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAllFaqs ? 'rotate-90' : ''}`} />
      </div>
    </button>
  </motion.div>
</section>
      
      
      
      {/* Modal per feedback (appare quando l'utente clicca "Mi interessa") */}
      {feedbackVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-xl border border-indigo-500/20 p-6 max-w-md w-full relative animate-fade-in">
            <button 
              onClick={() => setFeedbackVisible(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-foreground/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-4 text-center">Grazie per l'interesse!</h3>
            <p className="text-foreground/70 mb-6 text-center">
              Vuoi ricevere maggiori informazioni su questa funzionalità esclusiva?
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="w-full p-3 glass rounded-lg border border-white/20 bg-background/50 focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="consent-modal" 
                  className="mt-1"
                />
                <label htmlFor="consent-modal" className="text-sm text-foreground/70">
                  Acconsento a ricevere informazioni su questa funzionalità
                </label>
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Invia
                </button>
                
                <button 
                  type="button"
                  onClick={() => setFeedbackVisible(false)}
                  className="flex-1 py-3 glass border border-white/20 rounded-lg"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Stili CSS per animazioni */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          width: fit-content;
        }
        
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        
        .animate-testimonial-scroll {
          animation: testimonial-scroll 40s linear infinite;
          width: max-content;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        /* Definizione componenti mancanti per l'esempio */
        .FileText, .FileCheck, .FileSearch {
          display: inline-block;
        }
      `}} />
    </div>
  );
};

export default Products;
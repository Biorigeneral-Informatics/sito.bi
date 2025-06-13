// src/pages/Products.tsx - Versione completa con stile Home e slider migliorato
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, BrainCircuit, Database,
  Shield, BarChart, Users, ChevronRight, 
  MessageSquare, ListChecks, Clock,
  BarChart3, Cable, Workflow, 
  GitBranch, ChevronLeft, Grid, Calendar, Table,
  Heart, Stethoscope
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const Products = () => {
  // Refs e stati
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gestione movimento mouse per effetti interattivi
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { left, top, width, height } = heroSection.getBoundingClientRect();
        
        if (e.clientX >= left && 
            e.clientX <= left + width && 
            e.clientY >= top && 
            e.clientY <= top + height) {
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
    <>
      {/* Background gradients simili alla Home ma non identici */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.2)"
        colorEnd="rgba(139, 92, 246, 0.25)"
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.15)"
        colorEnd="rgba(16, 185, 129, 0.15)"
        reverse={true} 
        className="opacity-70" 
      />

      <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
        
        {/* Hero Section - Ispirato alla Home ma con contenuti diversi */}
        <section id="hero-section" className="pt-4 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-3 md:px-4 py-1 rounded-full border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4 bg-white/5">
                <span className="text-blue-500">
                  Innovazione e Automazione
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-primary">Accelera la crescita aziendale con l'integrazione di
                <span className="block text-accent">soluzioni AI.</span></span>
                
              </h1>
              
              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                La nostra suite di prodotti AI è progettata per automatizzare i processi, ridurre i costi operativi e massimizzare il ROI della tua azienda in una frazione del tempo rispetto ai metodi tradizionali.
              </p>
            </motion.div>
          </div>
        </section>
      
        {/* Filtri per categoria - Design più pulito */}
        <section className="pb-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex justify-center mb-20 overflow-x-auto pb-2">
              <div className="border border-white/10 px-2 py-2 rounded-full inline-flex flex-wrap justify-center gap-1 bg-white/5">
                {[
                  { id: 'all', name: 'Tutti', icon: <Grid className="w-4 h-4" /> },
                  { id: 'assistants', name: 'Assistenti', icon: <Bot className="w-4 h-4" /> },
                  { id: 'data', name: 'Dati', icon: <Table className="w-4 h-4" /> },
                  { id: 'ai', name: 'AI', icon: <BrainCircuit className="w-4 h-4" /> },
                  { id: 'automation', name: 'Automazione', icon: <Workflow className="w-4 h-4" /> }
                ].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedIndustry(category.id);
                      setActiveProduct(0);
                    }}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center text-sm ${
                      selectedIndustry === category.id 
                        ? 'bg-accent text-white' 
                        : 'hover:bg-white/5 text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Carousel prodotti migliorato e più interattivo */}
        <section className="py-12 container mx-auto px-4 md:px-6 lg:px-12">
          
          {/* Header con contatore dinamico */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Prodotti Disponibili
              </h2>
              <div className="flex items-center gap-2">
                <div className="text-sm text-foreground/60">
                  {activeProduct + 1} di 4
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeProduct ? 'bg-accent' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  const newIndex = activeProduct === 0 ? 3 : activeProduct - 1;
                  setActiveProduct(newIndex);
                }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-foreground hover:bg-white/5 hover:border-accent/30 transition-all duration-300 group"
                aria-label="Prodotto precedente"
              >
                <ChevronLeft className="w-5 h-5 group-hover:text-accent transition-colors" />
              </button>
              
              <button 
                onClick={() => {
                  const newIndex = activeProduct === 3 ? 0 : activeProduct + 1;
                  setActiveProduct(newIndex);
                }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-foreground hover:bg-white/5 hover:border-accent/30 transition-all duration-300 group"
                aria-label="Prodotto successivo"
              >
                <ChevronRight className="w-5 h-5 group-hover:text-accent transition-colors" />
              </button>
            </div>
          </div>

          {/* Slider con transizioni fluide */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeProduct * 100}%)` }}
            >
              
              {/* SegretarioAI Telegram */}
              <div className="w-full flex-shrink-0">
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-xs font-medium text-indigo-400 mb-1">
                          Assistente Virtuale
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                            <MessageSquare className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold">SegretarioAI Telegram</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Assistente virtuale che gestisce conversazioni, pianifica appuntamenti e automatizza risposte su Telegram. 
                        Integrazione perfetta con i tuoi workflow aziendali per una comunicazione efficiente 24/7.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 rounded-xl p-4 border border-indigo-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <MessageSquare className="w-4 h-4 text-indigo-400 mr-2" />
                            Risposte automatiche
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Gestisce conversazioni standard e risponde alle domande frequenti con precisione.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 rounded-xl p-4 border border-indigo-500/20">
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
                        
                        <Link 
                          to="/contact"
                          className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-lg flex items-center transition-all hover:shadow-lg text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Demo area */}
                    <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-600/10 to-violet-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                      <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                        <div className="border border-white/20 rounded-xl overflow-hidden bg-background/70 backdrop-blur-md">
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
                                <p>Buongiorno! Sono il tuo segretario virtuale. Come posso aiutarti oggi?</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start justify-end">
                              <div className="bg-accent/20 rounded-lg rounded-tr-none p-2 max-w-[80%] text-xs ml-auto">
                                <p>Prenota un meeting per domani alle 14:00</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                                <Bot className="w-3 h-3 text-indigo-400" />
                              </div>
                              <div className="bg-indigo-500/10 rounded-lg rounded-tl-none p-2 max-w-[80%] text-xs">
                                <p>✅ Meeting prenotato per domani 15/06 alle 14:00. Ho inviato l'invito ai partecipanti.</p>
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
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400 mb-1">
                          Data Automation
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white">
                            <Table className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold">Excel Lead Generator</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Trasforma i fogli Excel in potenti strumenti di generazione lead con arricchimento automatico dei dati tramite AI. 
                        Converte dati grezzi in contatti qualificati pronti per le vendite.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-4 border border-emerald-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Database className="w-4 h-4 text-emerald-400 mr-2" />
                            Arricchimento dati
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Completa automaticamente informazioni mancanti da fonti pubbliche e private.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-4 border border-emerald-500/20">
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
                        
                        <Link 
                          to="/contact"
                          className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg flex items-center transition-all hover:shadow-lg text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Demo area */}
                    <div className="bg-gradient-to-br from-emerald-500/10 via-green-600/10 to-green-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                      <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                        <div className="border border-white/20 rounded-xl overflow-hidden bg-background/70 backdrop-blur-md">
                          <div className="bg-emerald-700/90 py-2 px-3 text-white flex items-center justify-between">
                            <div className="flex items-center">
                              <Table className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">Lead Generator</span>
                            </div>
                          </div>
                          
                          <div className="p-1 bg-white/5">
                            <div className="grid grid-cols-4 text-[10px] font-medium border-b border-white/20 py-1 px-1 bg-emerald-900/30">
                              <div className="px-1">Azienda</div>
                              <div className="px-1">Contatto</div>
                              <div className="px-1">Email</div>
                              <div className="px-1">Score</div>
                            </div>
                            
                            {[
                              { company: "TechSolutions", contact: "Mario Rossi", email: "mario@tech...", score: "87%" },
                              { company: "Digital First", contact: "Laura Bianchi", email: "l.bianchi@...", score: "92%" },
                              { company: "Innovate SRL", contact: "Andrea Verdi", email: "andrea@in...", score: "78%" },
                              { company: "Studio Mori", contact: "Giulia Mori", email: "g.mori@st...", score: "65%" },
                              { company: "EcoSmart", contact: "Luca Ferrari", email: "l.ferrari@...", score: "89%" }
                            ].map((row, idx) => (
                              <div key={idx} className={`grid grid-cols-4 text-[10px] py-1 px-1 ${idx % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                                <div className="px-1 truncate">{row.company}</div>
                                <div className="px-1 truncate">{row.contact}</div>
                                <div className="px-1 truncate">{row.email}</div>
                                <div className={`px-1 font-medium ${
                                  parseInt(row.score) > 85 ? 'text-emerald-400' : 
                                  parseInt(row.score) > 70 ? 'text-yellow-400' : 
                                  'text-red-400'
                                }`}>{row.score}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI CRM */}
              <div className="w-full flex-shrink-0">
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-xs font-medium text-blue-400 mb-1">
                          CRM Intelligente
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center text-white">
                            <Users className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold">AI CRM</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Sistema CRM potenziato da intelligenza artificiale che prevede le esigenze dei clienti, 
                        automatizza il follow-up e massimizza le conversioni con suggerimenti personalizzati.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-4 border border-blue-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <BrainCircuit className="w-4 h-4 text-blue-400 mr-2" />
                            Previsione comportamento
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Anticipa le esigenze dei clienti con analisi predittiva avanzata.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-4 border border-blue-500/20">
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
                        
                        <Link 
                          to="/contact"
                          className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-lg flex items-center transition-all hover:shadow-lg text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Demo area */}
                    <div className="bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-sky-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                      <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                        <div className="border border-white/20 rounded-xl overflow-hidden bg-background/70 backdrop-blur-md">
                          <div className="bg-gradient-to-r from-blue-700/90 to-sky-600/90 py-2 px-3 text-white flex items-center justify-between">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">AI CRM</span>
                            </div>
                          </div>
                          
                          <div className="p-3 space-y-3">
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="bg-white/5 rounded p-1.5 text-center">
                                <div className="text-[10px] text-foreground/60">Lead</div>
                                <div className="text-sm font-semibold text-blue-400">48</div>
                                <div className="text-[8px] text-emerald-400">+12%</div>
                              </div>
                              <div className="bg-white/5 rounded p-1.5 text-center">
                                <div className="text-[10px] text-foreground/60">Conversioni</div>
                                <div className="text-sm font-semibold text-blue-400">24</div>
                                <div className="text-[8px] text-emerald-400">+8%</div>
                              </div>
                              <div className="bg-white/5 rounded p-1.5 text-center">
                                <div className="text-[10px] text-foreground/60">Ricavi</div>
                                <div className="text-sm font-semibold text-blue-400">€9.2k</div>
                                <div className="text-[8px] text-emerald-400">+15%</div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center mb-1">
                                <BrainCircuit className="w-3 h-3 text-blue-400 mr-1" />
                                <div className="text-[10px] font-medium">Insights AI</div>
                              </div>
                              <div className="bg-white/5 rounded p-2 border border-blue-500/20">
                                <p className="text-[10px] text-foreground/80 mb-1">
                                  <span className="font-medium">Opportunità di upsell:</span> 12 clienti hanno mostrato interesse per il pacchetto Premium.
                                </p>
                              </div>
                            </div>
                            
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
                                  <div key={idx} className="bg-white/5 p-1.5 rounded flex justify-between items-center">
                                    <div className="flex items-center">
                                      <div className="w-5 h-5 rounded-full bg-blue-500/80 flex items-center justify-center text-white text-[8px] mr-1.5">
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

              {/* BioMed AI */}
              <div className="w-full flex-shrink-0">
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-xs font-medium text-red-400 mb-1">
                          AI Medicale
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white">
                            <Stethoscope className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold">BioMed AI</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Piattaforma AI specializzata per applicazioni biomediche e sanitarie. Analizza dati clinici, 
                        supporta diagnosi e ottimizza processi sanitari con algoritmi di machine learning avanzati.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-4 border border-red-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <BarChart3 className="w-4 h-4 text-red-400 mr-2" />
                            Analisi dati clinici
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Elabora e analizza grandi volumi di dati medici per insights predittivi.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-4 border border-red-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Shield className="w-4 h-4 text-red-400 mr-2" />
                            Conformità GDPR
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Rispetta tutti gli standard sanitari e normative sulla privacy dei dati.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                          <span className="font-semibold text-xl">€299<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                        </div>
                        
                        <Link 
                          to="/contact"
                          className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg flex items-center transition-all hover:shadow-lg text-sm font-medium"
                        >
                          Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Demo area */}
                    <div className="bg-gradient-to-br from-red-500/10 via-red-600/10 to-pink-700/20 relative overflow-hidden h-full min-h-[380px] flex items-center justify-center">
                      <div className="w-10/12 max-w-[320px] mx-auto pointer-events-none select-none">
                        <div className="border border-white/20 rounded-xl overflow-hidden bg-background/70 backdrop-blur-md">
                          <div className="bg-gradient-to-r from-red-700/90 to-pink-600/90 py-2 px-3 text-white flex items-center justify-between">
                            <div className="flex items-center">
                              <Stethoscope className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">BioMed AI</span>
                            </div>
                          </div>
                          
                          <div className="p-3 space-y-3">
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              <div className="bg-white/5 rounded p-1.5 text-center">
                                <div className="text-[10px] text-foreground/60">Analisi</div>
                                <div className="text-sm font-semibold text-red-400">1,247</div>
                                <div className="text-[8px] text-emerald-400">Oggi</div>
                              </div>
                              <div className="bg-white/5 rounded p-1.5 text-center">
                                <div className="text-[10px] text-foreground/60">Accuratezza</div>
                                <div className="text-sm font-semibold text-red-400">96.8%</div>
                                <div className="text-[8px] text-emerald-400">+0.3%</div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center mb-1">
                                <Heart className="w-3 h-3 text-red-400 mr-1" />
                                <div className="text-[10px] font-medium">Diagnosi AI</div>
                              </div>
                              <div className="bg-white/5 rounded p-2 border border-red-500/20">
                                <p className="text-[10px] text-foreground/80 mb-1">
                                  <span className="font-medium">Rilevate anomalie:</span> 3 casi richiedono attenzione medica immediata.
                                </p>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center mb-1">
                                <Shield className="w-3 h-3 text-red-400 mr-1" />
                                <div className="text-[10px] font-medium">Sicurezza Dati</div>
                              </div>
                              <div className="space-y-1">
                                <div className="bg-white/5 p-1.5 rounded flex justify-between items-center">
                                  <div className="text-[10px]">Crittografia</div>
                                  <div className="text-[8px] text-emerald-400">AES-256</div>
                                </div>
                                <div className="bg-white/5 p-1.5 rounded flex justify-between items-center">
                                  <div className="text-[10px]">Conformità</div>
                                  <div className="text-[8px] text-emerald-400">GDPR ✓</div>
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
          </div>

          {/* Navigation dots interattivi */}
          <div className="flex justify-center mt-8 gap-3">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeProduct 
                    ? 'w-8 h-3 bg-accent' 
                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Vai al prodotto ${index + 1}`}
              />
            ))}
          </div>
        </section>

        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 md:px-4 py-1 rounded-full border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4 bg-white/5">
                  <span className="text-blue-500">
                    Domande Frequenti
                  </span>
                </div>
                <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                  <span className="block text-primary">Hai domande</span>
                  <span className="block text-accent">sui nostri prodotti?</span>
                </h2>
                </div>
                <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                  Risposte alle domande più comuni per aiutarti a scegliere la soluzione più adatta alle tue esigenze
                </p>
              </motion.div>
            </div>
            
            {/* FAQ a due colonne */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
              {[
                {
                  q: "Quale soluzione è più adatta per l'automazione dei processi aziendali?",
                  a: "SegretarioAI Telegram è ideale per automatizzare la comunicazione e gestione appuntamenti, mentre AI CRM ottimizza l'intero processo di vendita. Entrambi operano 24/7 e si integrano perfettamente con i tuoi workflow esistenti.",
                  icon: <BrainCircuit className="w-5 h-5" />
                },
                {
                  q: "Posso personalizzare le funzionalità delle soluzioni?",
                  a: "Assolutamente sì. Tutte le nostre soluzioni sono completamente personalizzabili in base alle esigenze specifiche della tua azienda. Offriamo configurazione su misura, dashboard personalizzate e workflow adattabili, senza compromettere le performance o la semplicità d'uso.",
                  icon: <Workflow className="w-5 h-5" />
                },
                {
                  q: "Come funziona l'Excel Lead Generator?",
                  a: "Excel Lead Generator trasforma i tuoi fogli di calcolo in potenti strumenti di vendita. Arricchisce automaticamente i dati dei contatti, calcola score di qualificazione e integra tutto con il tuo CRM per un flusso di lavoro ottimizzato.",
                  icon: <Table className="w-5 h-5" />
                },
                {
                  q: "Quanto tempo richiede l'implementazione delle soluzioni?",
                  a: "Le nostre soluzioni vengono implementate in 2-4 settimane, un tempo significativamente inferiore rispetto ai 3-6 mesi richiesti dai metodi tradizionali. Questo è possibile grazie al nostro approccio AI-first, alle integrazioni precostituite e a un team di esperti dedicati che ti guida in ogni fase del processo.",
                  icon: <Clock className="w-5 h-5" />
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
                  <details className="border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                    <summary className="flex items-center justify-between p-5 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-4 text-accent">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg font-medium">{faq.q}</h3>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground transition-transform group-open:rotate-180">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </summary>
                    
                    <div className="p-5 pt-0">
                      <div className="ml-14 text-foreground/70 border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>

            {/* Domande aggiuntive */}
            {showAllFaqs && (
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 mt-5">
                {[
                  {
                    q: "Come si integra AI CRM con i sistemi esistenti?",
                    a: "AI CRM offre API RESTful e connettori predefiniti per tutti i principali sistemi gestionali e CRM esistenti. Il processo di integrazione è gestito dal nostro team tecnico, che configura sincronizzazioni bidirezionali per garantire coerenza dei dati.",
                    icon: <Cable className="w-5 h-5" />
                  },
                  {
                    q: "Quali garanzie offrite per BioMed AI in ambito sanitario?",
                    a: "BioMed AI rispetta tutti gli standard sanitari internazionali, implementa crittografia medicale certificata e garantisce conformità completa a GDPR e normative sanitarie. Offriamo supporto specializzato per il settore medicale 24/7.",
                    icon: <Heart className="w-5 h-5" />
                  },
                  {
                    q: "Come garantite la sicurezza dei dati?",
                    a: "Implementiamo crittografia end-to-end a 256 bit, autenticazione multi-fattore e controlli granulari degli accessi. Tutti i dati sono archiviati in data center certificati ISO 27001, con backup continui e conformità completa a GDPR.",
                    icon: <Shield className="w-5 h-5" />
                  },
                  {
                    q: "È possibile iniziare con una soluzione e aggiungerne altre?",
                    a: "Assolutamente. La nostra piattaforma è modulare e scalabile, progettata per crescere con la tua azienda. Puoi iniziare con la soluzione che risponde alle tue esigenze più urgenti e aggiungerne altre quando necessario.",
                    icon: <GitBranch className="w-5 h-5" />
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
                    <details className="border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                      <summary className="flex items-center justify-between p-5 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-4 text-accent">
                            {faq.icon}
                          </div>
                          <h3 className="text-lg font-medium">{faq.q}</h3>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground transition-transform group-open:rotate-180">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                        </div>
                      </summary>
                      
                      <div className="p-5 pt-0">
                        <div className="ml-14 text-foreground/70 border-t border-white/10 pt-4">
                          {faq.a}
                        </div>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Toggle FAQ */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="border border-white/10 px-6 py-3 rounded-xl font-semibold text-sm text-foreground bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ListChecks className="w-4 h-4" />
                {showAllFaqs ? 'Nascondi domande aggiuntive' : 'Visualizza tutte le domande'}
              </button>
            </div>
          </div>
        </section>

        

        {/* CTA Finale - Ispirato alla Home */}
        <section className="py-20 md:py-12 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="slideUp">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8">
                    <span className="block text-primary">Soluzioni<span className="text-accent"> personalizzate</span> per il tuo business.</span>
                  </h2>
                
                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Il nostro team di esperti è pronto a sviluppare soluzioni su misura per le tue specifiche esigenze aziendali.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Link 
                      to="/contact" 
                      className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                    >
                      Contattaci
                    
                    </Link>
                    
                    <Link 
                      to="/services" 
                      className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      Esplora Servizi
                    </Link>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Products;
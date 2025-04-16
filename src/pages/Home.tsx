// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Layers, ChevronRight, Users, BrainCircuit, CheckCircle, Clock, Code, Zap, Cpu, Workflow, Phone, Mail, Shield, TrendingUp, MessageSquare, RefreshCw, Search, BarChart, Cloud, Star, Check } from 'lucide-react';
import ParallaxEffect from '../components/ParallaxEffect';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import HeroAnimation from '../components/HeroAnimation';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate movement based on mouse position
      const moveX = (clientX - innerWidth / 2) * 0.015;
      const moveY = (clientY - innerHeight / 2) * 0.015;
      
      // Apply movement to hero elements
      const elements = heroRef.current.querySelectorAll('.hero-element');
      elements.forEach((el: Element, i) => {
        const depth = (i + 1) * 0.2;
        (el as HTMLElement).style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      {/* Dynamic gradient backgrounds - more visible and responsive */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.3)" // indigo più intenso
        colorEnd="rgba(139, 92, 246, 0.3)"  // viola più intenso
        intensity={1.5} 
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.25)" // teal
        colorEnd="rgba(16, 185, 129, 0.2)"    // emerald
        reverse={true} 
        className="opacity-80" 
      />

      {/* Hero Section - con più spazio ai lati */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24">
        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 hero-element">
                <span className="block">Oltre il codice,</span>
                <span className="text-gradient">verso l'innovazione</span>
              </h1>
              
              <p className="text-xl text-foreground/80 mb-10 hero-element leading-relaxed">
                AI Agency e Software Engineering. Soluzioni digitali innovative per il tuo business.
              </p>
              
              <div className="flex flex-wrap gap-5 hero-element">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
                >
                  Inizia Ora <ArrowRight className="inline ml-2" />
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
                >
                  Esplora Soluzioni
                </Link>
              </div>
            </motion.div>
            
            <ParallaxEffect speed={0.1} direction="down">
              <div className="relative hero-visual flex justify-center">
                {/* Sostituiamo i riquadri originali con la nostra nuova animazione */}
                <HeroAnimation />
              </div>
            </ParallaxEffect>
          </div>
        </div>
        
        {/* Decorative Elements - più definiti */}
        <div className="absolute top-1/3 left-10 w-24 h-24 rounded-full border border-indigo-400/30 opacity-70 hero-element"></div>
        <div className="absolute bottom-1/4 right-16 w-16 h-16 rounded-full border border-violet-400/30 opacity-70 hero-element"></div>
        <div className="absolute top-1/4 right-1/3 w-10 h-10 rounded-full bg-indigo-500/20 opacity-70 hero-element"></div>
      </section>
      
      {/* Valore, competenza e innovazione Section - soluzione avanzata e integrata */}
<section className="py-24 relative overflow-hidden">
  {/* Linee di connessione animate che seguono lo scroll */}
  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0"></div>
  <div className="absolute left-1/4 top-40 bottom-40 w-0.5 hidden lg:block bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"></div>
  <div className="absolute right-1/4 top-60 bottom-20 w-0.5 hidden lg:block bg-gradient-to-b from-violet-500/0 via-violet-500/10 to-violet-500/0"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ParallaxEffect speed={0.1} direction="up" className="mb-20">
      <div className="text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full 
                      bg-gradient-to-r from-indigo-500/20 to-violet-500/20 filter blur-xl"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 relative inline-block">
          <span className="absolute -left-6 -top-6 w-12 h-12 border border-indigo-500/20 rounded-lg rotate-12 opacity-70"></span>
          Valore, competenza e innovazione
          <span className="absolute -right-6 -bottom-6 w-12 h-12 border border-violet-500/20 rounded-lg -rotate-12 opacity-70"></span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          La sinergia tra esperienza nell'AI, competenze tecniche avanzate e visione innovativa, 
          per trasformare le sfide digitali in opportunità di crescita
        </p>
      </div>
    </ParallaxEffect>
    
    {/* Elemento dinamico scroll-based con timeline orizzontale */}
    <div className="relative my-32">
      {/* Elemento decorativo timeline orizzontale */}
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
      
      {/* Primo nodo timeline */}
      <ScrollAnimation animation="fadeIn" threshold={0.3} className="mb-40">
        <div className="relative">
          {/* Indicatore timeline */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
                        bg-gradient-to-r from-indigo-500 to-violet-500 z-10 shadow-lg shadow-indigo-500/30
                        flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <ScrollAnimation animation="slideRight" delay={0.2}>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent inline-block">
                  Expertise in AI e Prompting
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  La nostra padronanza nell'intelligenza artificiale e nelle tecniche avanzate di prompting 
                  ci permette di progettare soluzioni che interagiscono in modo naturale e intuitivo, 
                  portando l'esperienza utente a un livello superiore e automatizzando processi complessi.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-4 py-2 glass rounded-full text-sm border border-indigo-500/20 hover:border-indigo-500/40 
                                transition-all hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
                    LLM & RAG
                  </div>
                  <div className="px-4 py-2 glass rounded-full text-sm border border-violet-500/20 hover:border-violet-500/40 
                                transition-all hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
                    Agenti conversazionali
                  </div>
                  <div className="px-4 py-2 glass rounded-full text-sm border border-indigo-500/20 hover:border-indigo-500/40 
                                transition-all hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
                    Automazione cognitiva
                  </div>
                </div>
                
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  <span className="text-foreground/60 text-sm">Trasformiamo i processi ripetitivi in flussi automatizzati intelligenti</span>
                </div>
              </ScrollAnimation>
            </div>
            
            <div className="order-1 md:order-2">
              <ScrollAnimation animation="slideLeft" delay={0.3}>
                <div className="relative">
                  {/* Sfondo interattivo */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-3xl filter blur-xl"></div>
                  
                  {/* Contenuto visivo - schermo interattivo */}
                  <div className="relative glass p-1 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-background/80 rounded-xl p-6 overflow-hidden">
                      {/* Simulazione conversazione AI */}
                      <div className="flex mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="glass rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Come posso aiutarti a ottimizzare il processo di onboarding clienti?</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mb-4">
                        <div className="glass rounded-lg p-3 max-w-xs bg-indigo-500/10">
                          <p className="text-sm">Vorrei rendere più efficiente il processo di raccolta dei documenti</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="glass rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Posso automatizzare la raccolta con un sistema di verifica intelligente integrato con il tuo CRM</p>
                          
                          <div className="mt-3 flex justify-between">
                            <span className="text-xs text-indigo-400 animate-pulse">Generando soluzione...</span>
                            <div className="flex space-x-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Linee decorative */}
                      <div className="absolute top-1/3 right-0 w-20 h-0.5 bg-indigo-500/20"></div>
                      <div className="absolute bottom-1/3 left-0 w-20 h-0.5 bg-violet-500/20"></div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* Secondo nodo timeline - con elemento interattivo semplice */}
<ScrollAnimation animation="fadeIn" threshold={0.3} className="mb-40">
  <div className="relative">
    {/* Indicatore timeline */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
                  bg-gradient-to-r from-cyan-500 to-blue-500 z-10 shadow-lg shadow-cyan-500/30
                  flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <ScrollAnimation animation="slideRight" delay={0.2}>
          <div className="relative">
            {/* Sfondo interattivo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl filter blur-xl"></div>
            
            {/* Semplice elemento interattivo */}
            <div className="relative glass p-6 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-full bg-blue-500/10">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="mt-3 font-semibold">Il nostro team</h4>
              </div>
              
              {/* Semplice selettore interattivo */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex p-1 glass rounded-lg">
                  <button className="px-4 py-2 rounded-md bg-blue-500/20 text-sm">Full-stack</button>
                  <button className="px-4 py-2 rounded-md text-sm hover:bg-blue-500/10 transition-colors">AI</button>
                  <button className="px-4 py-2 rounded-md text-sm hover:bg-blue-500/10 transition-colors">UI/UX</button>
                </div>
              </div>
              
              {/* Contenuto che cambia */}
              <div className="p-4 rounded-lg bg-foreground/5">
                <div className="flex justify-between mb-3">
                  <span className="text-sm">Esperienza media</span>
                  <span className="font-medium">5+ anni</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between mb-3 mt-4">
                  <span className="text-sm">Progetti completati</span>
                  <span className="font-medium">45+</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
      <div>
        <ScrollAnimation animation="slideLeft" delay={0.3}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block">
            Giovani Talenti e Innovazione
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-6">
            L'integrazione di giovani talenti porta energie fresche e approcci innovativi, 
            combinando competenze tecniche all'avanguardia con una visione disruptive. 
            Questa sinergia ci permette di affrontare ogni sfida con creatività e pragmatismo.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="px-4 py-2 glass rounded-full text-sm border border-cyan-500/20 hover:border-cyan-500/40 
                          transition-all hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
              React & TypeScript
            </div>
            <div className="px-4 py-2 glass rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 
                          transition-all hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
              Node.js & Cloud
            </div>
            <div className="px-4 py-2 glass rounded-full text-sm border border-cyan-500/20 hover:border-cyan-500/40 
                          transition-all hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
              DevOps & CI/CD
            </div>
          </div>
          
          <div className="flex items-center">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-foreground/60 text-sm">Architetture moderne, performance senza compromessi</span>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
</ScrollAnimation>

      
      {/* Terzo nodo - elemento convergente - più compatto e coerente */}
<ScrollAnimation animation="fadeIn" threshold={0.3}>
  <div className="relative">
    {/* Indicatore timeline */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
                  bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 z-10 shadow-lg shadow-violet-500/30
                  flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>
    
    <ScrollAnimation animation="slideUp" delay={0.3} className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Sfondo interattivo */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-cyan-500/5 rounded-3xl filter blur-xl"></div>
        
        {/* Main content */}
        <div className="relative glass p-8 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Accent line on top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
          
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Sinergia tra esperienza e innovazione
          </h3>
          
          <p className="text-foreground/70 leading-relaxed mb-6 text-center">
            Mettiamo insieme il meglio di entrambi i mondi: esperienza consolidata 
            e potenziale innovativo, creando un approccio unico che unisce la profonda conoscenza 
            delle tecnologie AI con metodologie di sviluppo all'avanguardia.
          </p>
          
          <div className="flex justify-center gap-6 mb-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-sm">Visione strategica</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
              <span className="text-sm">Esecuzione agile</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></div>
              <span className="text-sm">Risultati misurabili</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link to="/services" className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 
                                         text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/20 transition-all hover:-translate-y-1">
              Scopri le nostre soluzioni <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</ScrollAnimation>
    </div>
  </div>
</section>
      
      {/* Competenze all'avanguardia - Layout e animazione migliorati */}
<section className="py-12 pt-8 relative overflow-hidden">
  {/* Background elements interattivi */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-20 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
  </div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
  <ScrollAnimation animation="slideUp">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Innovazione Tecnologica • Strumenti di Nuova Generazione
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
          <span className="relative inline-block">
            Competenze all'
            <span className="relative">
              avanguardia
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3C50 -1 150 -1 200 3" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="3" x2="200" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="0.5" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Integriamo strumenti innovativi e metodologie pionieristiche che ci posizionano ben oltre 
          le tradizionali soluzioni software presenti nel panorama italiano
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Layout ridisegnato: ecosistema a sinistra e vantaggi a destra */}
    <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
      {/* Ecosistema tecnologico - COLONNA SINISTRA */}
      <ScrollAnimation animation="slideRight" delay={0.2}>
        <div className="relative h-[500px] flex justify-center items-center">
          {/* Tracce orbitali con effetto luminoso */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-indigo-500/10 glow-orbit"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-violet-500/10 glow-orbit"></div>
          
          {/* Sfondo centrale raffinato */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 filter blur-xl"></div>
          
          {/* Elemento centrale migliorato */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center z-30 shadow-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/15 to-violet-500/15">
            <BrainCircuit className="w-10 h-10 text-indigo-400 mb-2" />
            <span className="font-bold text-xs text-center">Ecosistema<br/>Tecnologico</span>
          </div>
          
          {/* Orbita esterna - elementi migliorati */}
          <div className="tech-orbit-container absolute top-1/2 left-1/2 w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2">
            {/* Elemento Nord */}
            <div className="tech-orbit-item absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-amber-500/5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all hover:scale-110 z-20">
                <Workflow className="w-8 h-8 text-amber-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">N8n</span>
              </div>
            </div>
            
            {/* Elemento Est */}
            <div className="tech-orbit-item absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/20 to-blue-500/5 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all hover:scale-110 z-20">
                <Layers className="w-8 h-8 text-blue-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">Make</span>
              </div>
            </div>
            
            {/* Elemento Sud */}
            <div className="tech-orbit-item absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all hover:scale-110 z-20">
                <Code className="w-8 h-8 text-cyan-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">React</span>
              </div>
            </div>
            
            {/* Elemento Ovest */}
            <div className="tech-orbit-item absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-violet-500/40 bg-gradient-to-br from-violet-500/20 to-violet-500/5 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/30 transition-all hover:scale-110 z-20">
                <BrainCircuit className="w-8 h-8 text-violet-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">Claude AI</span>
              </div>
            </div>
          </div>
          
          {/* Orbita interna - elementi agli angoli */}
          <div className="tech-orbit-container-inner absolute top-1/2 left-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2">
            {/* Elemento Nord-Est */}
            <div className="tech-orbit-item-inner absolute top-[15%] right-[15%]">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/30 transition-all hover:scale-110 z-20">
                <Cpu className="w-8 h-8 text-indigo-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">Electron</span>
              </div>
            </div>
            
            {/* Elemento Sud-Est */}
            <div className="tech-orbit-item-inner absolute bottom-[15%] right-[15%]">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-green-500/40 bg-gradient-to-br from-green-500/20 to-green-500/5 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 transition-all hover:scale-110 z-20">
                <Zap className="w-8 h-8 text-green-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">Bolt</span>
              </div>
            </div>
            
            {/* Elemento Sud-Ovest */}
            <div className="tech-orbit-item-inner absolute bottom-[15%] left-[15%]">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/20 to-blue-500/5 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all hover:scale-110 z-20">
                <Code className="w-8 h-8 text-blue-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">TypeScript</span>
              </div>
            </div>
            
            {/* Elemento Nord-Ovest */}
            <div className="tech-orbit-item-inner absolute top-[15%] left-[15%]">
              <div className="glass p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/30 transition-all hover:scale-110 z-20">
                <Bot className="w-8 h-8 text-indigo-400 mb-1" />
                <span className="font-semibold text-[10px] text-center">Python</span>
              </div>
            </div>
          </div>
          
          {/* Linee di connessione migliorati */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] opacity-40 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 460 460">
              {/* Linee radiali con effetto luminoso */}
              <line x1="230" y1="230" x2="230" y2="0" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse"/>
              <line x1="230" y1="230" x2="460" y2="230" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "0.5s" }}/>
              <line x1="230" y1="230" x2="230" y2="460" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "1s" }}/>
              <line x1="230" y1="230" x2="0" y2="230" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "1.5s" }}/>
              
              {/* Linee diagonali */}
              <line x1="230" y1="230" x2="370" y2="90" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "0.25s" }}/>
              <line x1="230" y1="230" x2="370" y2="370" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "0.75s" }}/>
              <line x1="230" y1="230" x2="90" y2="370" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "1.25s" }}/>
              <line x1="230" y1="230" x2="90" y2="90" stroke="url(#tech-line-gradient)" strokeWidth="2" strokeDasharray="4 6" className="tech-line-pulse" style={{ animationDelay: "1.75s" }}/>
              
              {/* Definizione gradiente */}
              <defs>
                <linearGradient id="tech-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* Perché siamo all'avanguardia - COLONNA DESTRA */}
<ScrollAnimation animation="slideLeft" delay={0.3}>
  <div className="glass p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/50 to-background/70 h-full">
    <h3 className="text-xl font-bold mb-4">Perché siamo all'avanguardia</h3>
    
    <div className="space-y-4">
      <div className="glass bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 p-3 rounded-xl border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
        <h4 className="font-bold text-indigo-400 flex items-center mb-2 text-sm">
          <Clock className="w-5 h-5 mr-2" />
          Sviluppo 5 volte più veloce
        </h4>
        <p className="text-foreground/70 text-xs mb-2">
          Mentre lo sviluppo tradizionale richiede 3-6 mesi, il nostro approccio con strumenti no-code e low-code 
          riduce i tempi a sole 2-4 settimane.
        </p>
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
        <div className="text-right text-xs mt-1 text-indigo-400 font-semibold">500% più veloce</div>
      </div>
      
      <div className="glass bg-gradient-to-br from-violet-500/5 to-violet-500/10 p-3 rounded-xl border-2 border-violet-500/20 hover:border-violet-500/40 transition-all hover:shadow-xl hover:shadow-violet-500/10">
        <h4 className="font-bold text-violet-400 flex items-center mb-2 text-sm">
          <BrainCircuit className="w-5 h-5 mr-2" />
          Integrazione AI evoluta
        </h4>
        <p className="text-foreground/70 text-xs mb-2">
          Mentre la maggior parte delle aziende italiane non sfrutta ancora l'AI, noi integriamo modelli linguistici 
          avanzati in ogni soluzione.
        </p>
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
        <div className="text-right text-xs mt-1 text-violet-400 font-semibold">Generazione 3.0</div>
      </div>
      
      <div className="glass bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 p-3 rounded-xl border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
        <h4 className="font-bold text-cyan-400 flex items-center mb-2 text-sm">
          <Workflow className="w-5 h-5 mr-2" />
          Automazione intelligente
        </h4>
        <p className="text-foreground/70 text-xs mb-2">
          La nostra combinazione di strumenti di automazione come N8n e Make con AI permette di creare flussi di lavoro 
          completamente autonomi.
        </p>
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
        <div className="text-right text-xs mt-1 text-cyan-400 font-semibold">Processi auto-ottimizzanti</div>
      </div>
    </div>
  </div>
</ScrollAnimation>
    </div>
  </div>
  
  {/* CSS per le animazioni - perfezionato */}
  <style dangerouslySetInnerHTML={{ __html: `
    /* Animazioni orbite */
    @keyframes orbit-outer {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    
    @keyframes orbit-inner {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(-360deg); }
    }
    
    /* Controrivoluzione perfezionata */
    @keyframes counter-rotate-outer {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    
    @keyframes counter-rotate-inner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Effetto pulsazione linee */
    @keyframes line-pulse {
      0% { opacity: 0.2; strokeWidth: 1; }
      50% { opacity: 0.8; strokeWidth: 2; }
      100% { opacity: 0.2; strokeWidth: 1; }
    }
    
    /* Effetto luminoso per le orbite */
    @keyframes orbit-glow {
      0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.1); }
      50% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.2); }
      100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.1); }
    }
    
    /* Applicazione animazioni */
    .tech-orbit-container {
      animation: orbit-outer 60s linear infinite;
    }
    
    .tech-orbit-item {
      animation: counter-rotate-outer 60s linear infinite;
    }
    
    .tech-orbit-container-inner {
      animation: orbit-inner 45s linear infinite;
    }
    
    .tech-orbit-item-inner {
      animation: counter-rotate-inner 45s linear infinite;
    }
    
    .tech-line-pulse {
      animation: line-pulse 4s infinite ease-in-out;
    }
    
    .glow-orbit {
      animation: orbit-glow 5s infinite ease-in-out;
    }
  `}} />
</section>

{/* Recensioni e collaborazioni - Slider cards design */}
<section className="py-24 relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
  <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
  <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-500/10 filter blur-3xl"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-sm font-medium mb-4">
          La voce dei nostri clienti
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Recensioni e collaborazioni</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Esperienze reali di chi ha trasformato il proprio business con le nostre soluzioni
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Testimonial Slider with controls */}
    <div className="relative mb-20">
      {/* Custom Slider Controls */}
      <div className="absolute -top-16 right-0 flex space-x-2 z-20">
        <button 
          className="w-10 h-10 rounded-full glass flex items-center justify-center border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group"
          aria-label="Testimonianza precedente"
          onClick={() => {/* Slider previous logic */}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-indigo-400 transition-colors">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          className="w-10 h-10 rounded-full glass flex items-center justify-center border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group"
          aria-label="Testimonianza successiva"
          onClick={() => {/* Slider next logic */}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-indigo-400 transition-colors">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
      
      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden relative">
        {[
          {
            quote: "BioriAgent ha trasformato completamente il nostro customer service. L'implementazione è stata rapida e i risultati immediati. Ora gestiamo il triplo delle richieste.",
            author: "Laura Romano",
            role: "CEO, Innovatech",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 5,
            company: "innovatech",
            color: "indigo"
          },
          {
            quote: "Il team è stato eccezionale - reattivo, professionale e sempre attento alle nostre esigenze in evoluzione. In soli tre mesi abbiamo visto un ROI del 300%.",
            author: "Alessandro Bianchi",
            role: "CTO, TechVision",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 5,
            company: "techvision",
            color: "violet"
          },
          {
            quote: "L'implementazione dei loro chatbot ha migliorato notevolmente l'esperienza clienti. Il nostro team può ora concentrarsi su attività a maggior valore aggiunto.",
            author: "Giulia Conti",
            role: "Marketing Director, RetailPlus",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 4,
            company: "retailplus",
            color: "cyan"
          },
          // Hidden in initial view, visible when sliding
          {
            quote: "La loro soluzione ha automatizzato processi che prima richiedevano ore di lavoro manuale. Notevole l'incremento di efficienza nei nostri flussi operativi.",
            author: "Marco Verdi",
            role: "Operations Manager, LogiSmart",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 5,
            company: "logismart",
            color: "emerald"
          },
          {
            quote: "La piattaforma sviluppata ha semplificato l'analisi dei nostri dati finanziari. Decisioni più rapide e basate su dati concreti hanno migliorato la nostra performance.",
            author: "Elena Neri",
            role: "CFO, FinTech Solutions",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 5,
            company: "fintech",
            color: "blue"
          },
          {
            quote: "L'integrazione AI nei nostri processi editoriali ha rivoluzionato il modo in cui produciamo contenuti. Qualità superiore in metà tempo.",
            author: "Paolo Rossi",
            role: "Editorial Director, MediaGroup",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            stars: 4,
            company: "mediagroup",
            color: "amber"
          },
        ].slice(0, 3).map((testimonial, index) => (
          <div 
            key={index}
            className={`glass p-6 rounded-xl border border-${testimonial.color}-500/20 hover:border-${testimonial.color}-500/40 
                      transition-all duration-500 hover:shadow-lg hover:shadow-${testimonial.color}-500/10 group`}
          >
            {/* Card content with hover effects */}
            <div className="h-full flex flex-col">
              {/* Stars Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill={i < testimonial.stars ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6 flex-grow">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`absolute -top-2 -left-2 text-${testimonial.color}-400/20`}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center mt-auto pt-4 border-t border-foreground/10">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-foreground/10 group-hover:border-primary/30 transition-colors">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative shape */}
            <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl rounded-br-xl bg-${testimonial.color}-500/10 
                          transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none`}></div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        <button className="w-8 h-2 rounded-full bg-indigo-500/50" aria-label="Page 1"></button>
        <button className="w-8 h-2 rounded-full bg-foreground/20 hover:bg-indigo-500/30 transition-colors" aria-label="Page 2"></button>
      </div>
    </div>
  </div>
</section>

{/* I nostri servizi - Design innovativo con effetto 3D cards e interazioni */}
<section className="py-24 relative overflow-hidden">
  {/* Dynamic background gradient elements */}
  <div className="absolute top-0 left-0 right-0 bottom-1/3 bg-gradient-to-b from-transparent to-indigo-500/5"></div>
  <div className="absolute -right-32 top-1/4 w-64 h-64 rounded-full bg-violet-500/20 filter blur-3xl"></div>
  <div className="absolute -left-32 bottom-1/4 w-64 h-64 rounded-full bg-cyan-500/20 filter blur-3xl"></div>
  
  {/* Animated floating shapes */}
  <div className="absolute left-10 top-1/4 opacity-30 floating-shape" style={{ animationDelay: '0s' }}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="url(#paint0_linear_hex)" />
      <defs>
        <linearGradient id="paint0_linear_hex" x1="2.67949" y1="20" x2="37.3205" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  <div className="absolute right-10 top-2/3 opacity-30 floating-shape" style={{ animationDelay: '1s' }}>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_circle)" />
      <defs>
        <linearGradient id="paint0_linear_circle" x1="0" y1="15" x2="30" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  <div className="absolute left-1/3 bottom-1/4 opacity-30 floating-shape" style={{ animationDelay: '2s' }}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0L34.6391 9L34.6391 27L18 36L1.36089 27L1.36089 9L18 0Z" fill="url(#paint0_linear_tri)" />
      <defs>
        <linearGradient id="paint0_linear_tri" x1="1.36089" y1="18" x2="34.6391" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-sm font-medium mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Soluzioni & Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">I nostri servizi</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi
        </p>
      </div>
    </ScrollAnimation>
    
    {/* 3D Interactive Tilt Cards - Main Services */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {[
        {
          id: "ai-agents",
          title: "Agenti AI",
          description: "Sistemi intelligenti autonomi che automatizzano i processi aziendali operando 24/7",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
              <circle cx="9" cy="13" r="2" />
              <circle cx="15" cy="13" r="2" />
              <path d="M12 5c-.899 0-1.523.047-2.387.322-1.552.492-2.866 1.349-3.281 2.68A5.003 5.003 0 0 0 6 9.5v.5h1.5C9.5 10 9 12.67 9 14c0 .711.202 2.282.453 2.826a2.4 2.4 0 0 0 2.226 1.174h.672a2.4 2.4 0 0 0 2.226-1.174C14.798 16.282 15 14.71 15 14c0-1.329-.5-4-1.5-4H15v-.5a5.003 5.003 0 0 0-.332-1.498c-.415-1.33-1.729-2.188-3.28-2.68C10.522 5.047 9.9 5 9 5h3Z" />
              <path d="M20.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-1zM3.5 9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1A1.5 1.5 0 0 1 1 13.5v-3A1.5 1.5 0 0 1 2.5 9h1z" />
              <path d="M8 13v4H7a2 2 0 0 1-2-2v-2h3zM16 13v4h1a2 2 0 0 0 2-2v-2h-3z" />
            </svg>
          ),
          features: ["Automazione processi", "Integrazione sistemi", "Operatività 24/7"],
          stats: ["65%", "risparmio di tempo"],
          color: "violet",
          link: "/ai-agents",
          imageUrl: "https://images.unsplash.com/photo-1577760258634-618422a84fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "software-pmi",
          title: "Sviluppo Software",
          description: "Soluzioni software personalizzate per trasformare la tua visione in applicazioni concrete",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          features: ["App web responsive", "Software gestionali", "Soluzioni cloud"],
          stats: ["42%", "incremento efficienza"],
          color: "indigo",
          link: "/software-pmi",
          imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "chatbots",
          title: "Chatbot AI",
          description: "Assistenti virtuali intelligenti che migliorano l'esperienza cliente e automatizzano il supporto",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          ),
          features: ["Supporto 24/7", "Multilingue", "Personalizzazione"],
          stats: ["70%", "richieste automatizzate"],
          color: "cyan",
          link: "/chatbots",
          imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ].map((service, index) => (
        <ScrollAnimation 
          key={service.id}
          animation="fadeIn"
          delay={0.15 * index}
          className="perspective-card"
        >
          <div className="tilt-card-wrapper relative h-[30rem] rounded-2xl service-card group">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-500/5 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                          
            {/* Card front */}
            <div className="tilt-card-side tilt-card-front rounded-2xl glass border border-foreground/10 group-hover:border-primary/20 
                         transition-all duration-500 p-8 flex flex-col h-full overflow-hidden">
              <div className="relative z-10">
                {/* Service icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-6
                               group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 text-${service.color}-400`}>{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                
                {/* Feature list */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mr-2 text-${service.color}-400`}>
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Key stat */}
                <div className={`mt-auto pt-6 border-t border-foreground/10 flex items-center`}>
                  <div className={`text-3xl font-bold text-${service.color}-400 mr-3`}>{service.stats[0]}</div>
                  <div className="text-foreground/60 text-sm">{service.stats[1]}</div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br 
                            from-transparent to-foreground/5 group-hover:opacity-100 opacity-0 transition-opacity"></div>
              </div>
              
              {/* Subtle click prompt */}
              <div className="absolute bottom-4 right-4 text-xs text-foreground/40 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="m8 3 4 8 5-5 3 10-4-8-5 5z" />
                </svg>
                Scopri di più
              </div>
            </div>
            
            {/* Card back */}
            <div className="tilt-card-side tilt-card-back rounded-2xl overflow-hidden absolute inset-0">
              <div className="relative h-full">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img src={service.imageUrl} alt={service.title} className="h-full w-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-b from-${service.color}-900/80 to-background/95`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 mb-6 text-sm">{service.description}</p>
                  
                  <Link
                    to={service.link}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg 
                              bg-white text-${service.color}-600 font-medium hover:bg-opacity-90 transition-all`}
                  >
                    Esplora
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
    
    {/* Secondary services with horizontal scroll effect */}
    <ScrollAnimation animation="fadeIn" className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Altri servizi</h3>
      
      <div className="overflow-hidden py-4">
        <div className="scroll-container flex gap-6 pb-4">
          {[
            {
              title: "Team di Sviluppo",
              description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              color: "indigo",
              link: "/developers"
            },
            {
              title: "Piani di Crescita",
              description: "Strategie di trasformazione digitale per crescita sostenibile",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              ),
              color: "green",
              link: "/growth-plans"
            },
            {
              title: "Consulenza AI",
              description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                  <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                </svg>
              ),
              color: "violet",
              link: "/ai-consulting"
            },
            {
              title: "Cloud Services",
              description: "Infrastrutture scalabili e sicure per le tue applicazioni",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              ),
              color: "blue",
              link: "/cloud-services"
            },
            {
              title: "Data Analytics",
              description: "Analisi dati avanzata per decisioni data-driven",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <path d="M3 3v18h18" />
                  <path d="M18 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" />
                  <path d="M3 9h9.75" />
                  <path d="M15 21v-9" />
                  <path d="M9 21v-6" />
                  <path d="M3 15h6" />
                </svg>
              ),
              color: "amber",
              link: "/data-analytics"
            },
            {
              title: "Digital Transformation",
              description: "Percorsi completi di innovazione digitale per il tuo business",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z" />
                  <path d="m5 16 3 4" />
                  <path d="m19 16-3 4" />
                </svg>
              ),
              color: "cyan",
              link: "/digital-transformation"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="w-[280px] flex-shrink-0 scroll-item"
              style={{ "--scroll-offset": `${index * 0.1}s` } as React.CSSProperties}
            >
              <Link 
                to={service.link}
                className={`h-full glass p-6 rounded-xl border border-${service.color}-500/20 hover:border-${service.color}-500/40 
                          flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/10 group hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                
                <h4 className={`text-lg font-bold mb-2 text-${service.color}-400`}>{service.title}</h4>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">{service.description}</p>
                
                <div className="mt-auto flex items-center text-sm">
                  <span className={`text-${service.color}-400 group-hover:underline`}>Scopri di più</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-1 text-${service.color}-400 group-hover:translate-x-1 transition-transform`}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
    
    {/* Process visual - Interactive steps wheel */}
    <ScrollAnimation animation="fadeIn" className="mb-16">
      <div className="glass p-10 rounded-2xl relative overflow-hidden border border-indigo-500/20">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2 text-center">Il nostro processo</h3>
          <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
            Un approccio metodico e flessibile per trasformare le tue idee in realtà digitali
          </p>
          
          <div className="process-wheel-container relative max-w-4xl mx-auto h-80">
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-24 h-24 rounded-full glass bg-gradient-to-br from-indigo-500/30 to-violet-500/30 
                           flex items-center justify-center border border-white/20 shadow-xl animate-pulse-slow">
                <span className="font-bold text-center text-sm">Processo<br/>Iterativo</span>
              </div>
            </div>
            
            {/* Process steps positioned around center */}
            {[
              {
                title: "Scoperta",
                description: "Analisi delle esigenze e definizione obiettivi",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                position: "top",
                color: "indigo"
              },
              {
                title: "Design",
                description: "Progettazione UX/UI e architettura",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h.01" />
                    <path d="M7 20v-4" />
                    <path d="M12 20v-8" />
                    <path d="M17 20V8" />
                    <path d="M22 20V4" />
                  </svg>
                ),
                position: "right-top",
                color: "violet"
              },
              {
                title: "Sviluppo",
                description: "Implementazione con sprint iterativi",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
                position: "right",
                color: "blue"
              },
              {
                title: "Testing",
                description: "Test qualità, performance e sicurezza",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5" />
                    <path d="M6 11V7a6 6 0 0 1 12 0v4" />
                  </svg>
                ),
                position: "right-bottom",
                color: "cyan"
              },
              {
                title: "Deployment",
                description: "Rilascio e implementazione",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
                    <path d="m13 12-3 5h4l-3 5" />
                  </svg>
                ),
                position: "bottom",
                color: "emerald"
              },
              {
                title: "Supporto",
                description: "Manutenzione e ottimizzazione continua",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a1 1 0 0 0-1-1H6L3 8" />
                    <path d="m3 8 3-1" />
                    <path d="M7 21h9a3 3 0 0 0 0-6H3v3" />
                    <path d="m6 12 3-1" />
                    <path d="m9 13 3-1" />
                    <path d="m12 14 3-1" />
                    <path d="M18 18h3" />
                    <path d="M2 19v-4a6 6 0 0 1 6-6h9a1 1 0 0 0 1-1" />
                  </svg>
                ),
                position: "left-bottom",
                color: "amber"
              },
              {
                title: "Evoluzione",
                description: "Iterazione e miglioramento continuo",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                ),
                position: "left",
                color: "rose"
              },
              {
                title: "Analisi",
                description: "Misurazione risultati e nuovi spunti",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m7 17 4-4 4 4 6-6" />
                  </svg>
                ),
                position: "left-top",
                color: "purple"
              },
            ].map((step, index) => (
              <div key={index} className={`process-step process-${step.position} absolute`}>
                <div className={`glass p-4 rounded-xl border border-${step.color}-500/30 hover:border-${step.color}-500/60 
                             hover:shadow-lg hover:shadow-${step.color}-500/20 transition-all hover:scale-105 
                             flex items-start gap-3 w-56 backdrop-blur-md bg-background/40`}>
                  <div className={`w-10 h-10 rounded-lg bg-${step.color}-500/20 flex-shrink-0 flex items-center justify-center text-${step.color}-400`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-foreground/70 text-xs">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector lines */}
                <div className="absolute connector-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
  
  {/* Add custom CSS for animations and effects */}
  <style dangerouslySetInnerHTML={{ __html: `
    /* Floating shapes animation */
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    
    .floating-shape {
      animation: float 8s ease-in-out infinite;
    }
    
    /* Pulse animation */
    @keyframes pulse-slow {
      0%, 100% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
      50% { opacity: 0.8; transform: scale(1.05) translate(-48%, -48%); }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s infinite ease-in-out;
    }
    
    /* Services card 3D effect */
    .perspective-card {
      perspective: 2000px;
    }
    
    .tilt-card-wrapper {
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      transform-style: preserve-3d;
    }
    
    .tilt-card-wrapper:hover {
      transform: rotateY(180deg);
    }
    
    .tilt-card-side {
      backface-visibility: hidden;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .tilt-card-back {
      transform: rotateY(180deg);
    }
    
    /* Horizontal scroll animation */
    .scroll-container {
      animation: scroll-left 30s linear infinite;
      width: fit-content;
    }
    
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .scroll-container:hover {
      animation-play-state: paused;
    }
    
    .scroll-item {
      animation: fade-in 0.5s ease-out forwards;
      animation-delay: var(--scroll-offset);
      opacity: 0;
    }
    
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Process wheel positioning */
    .process-wheel-container {
      position: relative;
    }
    
    .process-top { top: 0; left: 50%; transform: translateX(-50%); }
    .process-right-top { top: 15%; right: 0; }
    .process-right { top: 50%; right: 0; transform: translateY(-50%); }
    .process-right-bottom { bottom: 15%; right: 0; }
    .process-bottom { bottom: 0; left: 50%; transform: translateX(-50%); }
    .process-left-bottom { bottom: 15%; left: 0; }
    .process-left { top: 50%; left: 0; transform: translateY(-50%); }
    .process-left-top { top: 15%; left: 0; }
    
    /* Connector lines */
    .connector-line {
      height: 2px;
      background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
      width: 40px;
      position: absolute;
    }
    
    .process-top .connector-line { 
      bottom: -20px; left: 50%; transform: translateX(-50%) rotate(90deg);
    }
    
    .process-right-top .connector-line { 
      bottom: 0; left: 0; transform: rotate(135deg); transform-origin: bottom left;
    }
    
    .process-right .connector-line { 
      top: 50%; left: -40px; transform: translateY(-50%);
    }
    
    .process-right-bottom .connector-line { 
      top: 0; left: 0; transform: rotate(45deg); transform-origin: top left;
    }
    
    .process-bottom .connector-line { 
      top: -20px; left: 50%; transform: translateX(-50%) rotate(90deg);
    }
    
    .process-left-bottom .connector-line { 
      top: 0; right: 0; transform: rotate(-45deg); transform-origin: top right;
    }
    
    .process-left .connector-line { 
      top: 50%; right: -40px; transform: translateY(-50%);
    }
    
    .process-left-top .connector-line { 
      bottom: 0; right: 0; transform: rotate(-135deg); transform-origin: bottom right;
    }
  `}} />
</section>

{/* CTA Section - Design accattivante e interattivo */}
<section className="py-20">
  <div className="container mx-auto px-6 lg:px-12">
    <ScrollAnimation animation="fadeIn">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20"></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/30 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="glass border border-white/10 rounded-3xl p-12 md:p-16 relative z-10">
          {/* Accent line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-t-3xl"></div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pronti a trasformare la tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">visione digitale</span> in realtà?
            </h2>
            
            <p className="text-xl text-foreground/80 mb-10">
              Iniziamo insieme un percorso di innovazione per portare il tuo business nel futuro
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1"
              >
                Contattaci ora <ArrowRight className="inline-block ml-2" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 glass border border-white/20 hover:border-white/40 rounded-lg transition-all hover:shadow-lg"
              >
                Esplora i servizi
              </Link>
            </div>
            
            {/* Contact options */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="mailto:biorigeneralinformatics@gmail.com" className="flex items-center text-foreground/70 hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                biorigeneralinformatics@gmail.com
              </a>
              
              <a href="tel:+390212345678" className="flex items-center text-foreground/70 hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 mr-2 text-violet-400" />
                +39 02 1234 5678
              </a>
            </div>
          </div>
          
          {/* Floating elements animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-10 h-10 rounded-full border border-indigo-500/30 animate-float" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full border border-violet-500/30 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-1/4 w-8 h-8 rounded-full border border-cyan-500/30 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-lg border border-indigo-500/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>
    </>
  );
};

export default Home;
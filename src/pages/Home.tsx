// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe, Database, Layers, ChevronRight, Users, BrainCircuit, CheckCircle, Clock, Code, Zap, Cpu, Workflow, Phone, Mail, Shield, TrendingUp, MessageSquare, RefreshCw, Search, BarChart, Cloud, Star, Check } from 'lucide-react';
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
      
      {/* Competenze all'avanguardia - Approccio completamente rinnovato */}
<section className="py-24 relative overflow-hidden">
  {/* Background elements interattivi */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-20 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/5 to-violet-500/5 animate-spin-slow" style={{ animationDuration: '40s' }}></div>
  </div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-sm font-medium mb-4">
          Stack Tecnologico Avanzato
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Competenze all'avanguardia</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Un ecosistema di strumenti e tecnologie che superano gli standard tradizionali
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Tech ecosystem - Visual hexagon grid with hover interactions */}
    <div className="mb-24">
      <div className="relative min-h-[500px] flex justify-center items-center">
        {/* Central element */}
        <div className="glass p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center z-20 shadow-xl shadow-indigo-500/10">
          <BrainCircuit className="w-10 h-10 text-indigo-400 mb-2" />
          <span className="font-bold text-center">Ecosistema Tecnologico</span>
        </div>
        
        {/* Outer elements in hexagon pattern */}
        {[
          { name: "N8n", icon: <Workflow />, position: "top-0 left-1/4", color: "amber" },
          { name: "Make", icon: <Layers />, position: "top-0 right-1/4", color: "blue" },
          { name: "React", icon: <Code />, position: "top-1/3 right-10", color: "cyan" },
          { name: "Claude AI", icon: <BrainCircuit />, position: "bottom-1/3 right-10", color: "violet" },
          { name: "Electron", icon: <Cpu />, position: "bottom-0 right-1/4", color: "indigo" },
          { name: "Bolt", icon: <Zap />, position: "bottom-0 left-1/4", color: "green" },
          { name: "TypeScript", icon: <Code />, position: "bottom-1/3 left-10", color: "blue" },
          { name: "Python", icon: <Bot />, position: "top-1/3 left-10", color: "indigo" }
        ].map((tech, index) => (
          <div 
            key={index}
            className={`absolute ${tech.position} glass p-4 rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-${tech.color}-500/20 
                     transition-all duration-300 z-10 bg-${tech.color}-500/10 border border-${tech.color}-500/30
                     flex flex-col items-center w-28 h-28 justify-center hover:z-30 group cursor-pointer`}
          >
            <div className={`text-${tech.color}-400 mb-2 group-hover:scale-125 transition-transform`}>
              {tech.icon}
            </div>
            <span className="font-medium text-sm text-center">{tech.name}</span>
            
            {/* Connection lines to center */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="absolute inset-0">
                <line 
                  x1="50%" y1="50%" 
                  x2="50%" y2="50%" 
                  className={`stroke-${tech.color}-400/40 group-hover:stroke-${tech.color}-400/80 transition-all duration-300`}
                  strokeWidth="1" 
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </div>
        ))}
        
        {/* Connecting lines (as decoration) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0 animate-pulse opacity-30" style={{ animationDuration: '10s' }}>
            <circle cx="50%" cy="50%" r="200" fill="none" stroke="url(#tech-gradient)" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="50%" cy="50%" r="150" fill="none" stroke="url(#tech-gradient)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Superiority highlights - animated tabs */}
      <ScrollAnimation animation="slideUp" className="mt-16">
        <div className="glass p-8 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Perché siamo all'avanguardia</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
              <h4 className="font-bold text-indigo-400 flex items-center mb-4">
                <Clock className="w-6 h-6 mr-2" />
                Sviluppo 5 volte più veloce
              </h4>
              <p className="text-foreground/70 text-sm mb-4">
                Mentre lo sviluppo tradizionale richiede 3-6 mesi, il nostro approccio con strumenti no-code e low-code 
                riduce i tempi a sole 2-4 settimane, mantenendo la stessa qualità.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
              <div className="text-right text-xs mt-2 text-indigo-400">500% più veloce</div>
            </div>
            
            <div className="glass bg-gradient-to-br from-violet-500/5 to-violet-500/10 p-6 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all hover:shadow-lg hover:shadow-violet-500/5">
              <h4 className="font-bold text-violet-400 flex items-center mb-4">
                <BrainCircuit className="w-6 h-6 mr-2" />
                Integrazione AI evoluta
              </h4>
              <p className="text-foreground/70 text-sm mb-4">
                Mentre la maggior parte delle aziende italiane non sfrutta ancora l'AI, noi integriamo modelli linguistici 
                avanzati in ogni soluzione, creando sistemi intelligenti e adattivi.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
              <div className="text-right text-xs mt-2 text-violet-400">Generazione 3.0</div>
            </div>
            
            <div className="glass bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
              <h4 className="font-bold text-cyan-400 flex items-center mb-4">
                <Workflow className="w-6 h-6 mr-2" />
                Automazione intelligente
              </h4>
              <p className="text-foreground/70 text-sm mb-4">
                La nostra combinazione di strumenti di automazione come N8n e Make con AI permette di creare flussi di lavoro 
                completamente autonomi che imparano e migliorano nel tempo.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
              <div className="text-right text-xs mt-2 text-cyan-400">Processi auto-ottimizzanti</div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
    
    {/* Technology approach showcase - Interactive cards */}
    <ScrollAnimation animation="fadeIn" className="mb-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-6">Un approccio rivoluzionario</h3>
          <p className="text-foreground/80 mb-8">
            Non utilizziamo semplicemente tecnologie moderne, ma le combiniamo in modo sinergico per creare soluzioni 
            che superano drasticamente le aspettative tradizionali nel panorama italiano.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Oltre la digitalizzazione</h4>
                <p className="text-foreground/70 text-sm">
                  Mentre molte aziende si limitano a digitalizzare processi esistenti, noi li reinventiamo completamente 
                  con l'automazione intelligente e l'apprendimento continuo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Integrazione perfetta</h4>
                <p className="text-foreground/70 text-sm">
                  Ogni strumento del nostro stack è scelto per integrarsi perfettamente con gli altri, creando 
                  un ecosistema tecnologico fluido e senza silos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Scalabilità intrinseca</h4>
                <p className="text-foreground/70 text-sm">
                  Le nostre soluzioni sono progettate per crescere senza limiti, adattandosi dinamicamente 
                  alle esigenze in evoluzione della tua azienda.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Workflow className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h4 className="font-bold mb-2">Automazione visuale</h4>
              <p className="text-foreground/70 text-sm">Flussi di lavoro drag-and-drop che collegano qualsiasi sistema</p>
            </div>
          </div>
          
          <div className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h4 className="font-bold mb-2">AI conversazionale</h4>
              <p className="text-foreground/70 text-sm">Sistemi intelligenti che comprendono il linguaggio naturale</p>
            </div>
          </div>
          
          <div className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h4 className="font-bold mb-2">Architetture moderne</h4>
              <p className="text-foreground/70 text-sm">Stack tecnologici robosti e type-safe per applicazioni affidabili</p>
            </div>
          </div>
          
          <div className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-indigo-500/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h4 className="font-bold mb-2">Velocità di esecuzione</h4>
              <p className="text-foreground/70 text-sm">Dal concetto alla produzione in tempi record</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>

{/* Recensioni e collaborazioni - Design completamente nuovo */}
<section className="py-24 relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
  <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
  <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-500/10 filter blur-3xl"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-sm font-medium mb-4">
          Storie di successo
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Recensioni e collaborazioni</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Esperienze autentiche dei clienti che hanno trasformato il loro business con le nostre soluzioni
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Main testimonial - Interactive sphere layout */}
    <div className="mb-24 relative">
      {/* Decorative spherical background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="w-full h-full rounded-full border border-indigo-500/10 animate-spin-slow" style={{ animationDuration: '40s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-violet-500/10 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/10 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="glass rounded-2xl p-10 border border-indigo-500/20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile and company info */}
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                  alt="Marco Bianchi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                <Check className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold">Marco Bianchi</h3>
            <p className="text-foreground/60 mb-4">CTO, TechVision SpA</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm">Enterprise</span>
              <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm">Tech</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">AI Integration</span>
            </div>
            
            <div className="relative h-20 w-full max-w-xs mx-auto md:mx-0">
              <img 
                src="https://via.placeholder.com/200x60?text=TechVision+Logo" 
                alt="TechVision Logo" 
                className="absolute inset-0 w-full h-full object-contain opacity-70"
              />
            </div>
          </div>
          
          {/* Testimonial content */}
          <div>
            <div className="glass p-6 rounded-xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5 relative mb-8">
              <div className="text-5xl text-indigo-400 absolute -top-6 left-4">"</div>
              <p className="text-lg italic text-foreground/80 leading-relaxed mt-4">
                La loro capacità di trasformare concetti complessi in soluzioni intuitive ha rivoluzionato i nostri processi interni. 
                In soli sei mesi dall'implementazione, abbiamo registrato un aumento della produttività del 35% e una riduzione dei costi operativi del 25%.
              </p>
              <div className="text-5xl text-indigo-400 absolute -bottom-10 right-4">"</div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex mb-4 md:mb-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <div className="flex items-center rounded-full glass px-4 py-2 border border-green-500/20">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Cliente verificato</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-foreground/10 flex items-center justify-between">
              <span className="text-foreground/60 text-sm">Cliente dal 2020</span>
              <Link to="/case-studies/techvision" className="text-indigo-400 text-sm flex items-center hover:underline">
                Leggi il case study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orbiting testimonial thumbnails */}
      {[
        { position: "top-10 left-10", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" },
        { position: "top-10 right-10", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" },
        { position: "bottom-10 right-10", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" },
        { position: "bottom-10 left-10", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" }
      ].map((item, index) => (
        <div 
          key={index}
          className={`absolute ${item.position} z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 cursor-pointer
                    hover:scale-110 transition-transform hover:border-primary/50`}
        >
          <img src={item.image} alt="Client" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    
    {/* Testimonial cards - animated grid */}
    <ScrollAnimation animation="slideUp" className="mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Laura Romano",
            position: "CEO, Innovatech",
            quote: "In soli tre mesi dall'implementazione, abbiamo visto un ROI del 300% grazie alla loro soluzione di automazione AI.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            category: "Innovazione",
            color: "indigo"
          },
          {
            name: "Alessandro Rossi",
            position: "Direttore Operativo, LogiSmart",
            quote: "Il team è stato eccezionale - reattivo, professionale e sempre attento alle nostre esigenze in evoluzione.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            category: "Logistica",
            color: "violet"
          },
          {
            name: "Giulia Bianchi",
            position: "Customer Success Manager, RetailPlus",
            quote: "L'implementazione dell'agente AI ha trasformato completamente il nostro servizio clienti. Ora gestiamo il triplo delle richieste.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
            category: "Retail",
            color: "cyan"
          }
        ].map((testimonial, index) => (
          <div 
            key={index}
            className={`glass p-6 rounded-xl border border-${testimonial.color}-500/20 hover:border-${testimonial.color}-500/40 
                       transition-all duration-300 hover:shadow-lg hover:shadow-${testimonial.color}-500/10 hover:-translate-y-2 group overflow-hidden relative`}
          >
            {/* Subtle radial gradient on hover */}
            <div className={`absolute inset-0 opacity-0 bg-gradient-to-br from-${testimonial.color}-500/10 via-transparent to-transparent 
                         group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            
            <div className="flex items-start mb-4 relative z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-foreground/10">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-foreground/60 text-sm">{testimonial.position}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs bg-${testimonial.color}-500/20 text-${testimonial.color}-400`}>
                  {testimonial.category}
                </span>
              </div>
            </div>
            
            <blockquote className="italic text-foreground/80 mb-4 relative">
              <span className="text-2xl text-foreground/20 absolute -left-1 -top-2">"</span>
              {testimonial.quote}
              <span className="text-2xl text-foreground/20 absolute -right-1 -bottom-2">"</span>
            </blockquote>
            
            <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Link to="#" className={`text-${testimonial.color}-400 text-sm flex items-center group-hover:underline`}>
                Dettagli <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </ScrollAnimation>
    
    {/* Trust metrics with animated counters */}
    <ScrollAnimation animation="fadeIn">
      <div className="glass p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-12">La fiducia in numeri</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {[
            { value: "45+", label: "Progetti completati", icon: <CheckCircle className="text-green-400" /> },
            { value: "98%", label: "Clienti soddisfatti", icon: <Users className="text-indigo-400" /> },
            { value: "32%", label: "ROI medio", icon: <TrendingUp className="text-violet-400" /> },
            { value: "24/7", label: "Supporto continuo", icon: <Shield className="text-cyan-400" /> }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["TechVision", "Innovatech", "LogiSmart", "RetailPlus", "MediaGroup", "FinTech Solutions"].map((company, index) => (
            <div key={index} className="px-4 py-2 rounded-lg bg-foreground/5 text-foreground/60 text-sm">
              {company}
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>

{/* I nostri servizi - Design moderno e interattivo */}
<section className="py-24 relative overflow-hidden">
  {/* Dynamic background gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-sm font-medium mb-4">
          Soluzioni su misura
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">I nostri servizi</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Interactive service cards with 3D effect */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
      {[
        {
          title: "Agenti AI",
          description: "Sistemi intelligenti autonomi che automatizzano i processi aziendali operando 24/7",
          icon: <BrainCircuit className="w-16 h-16" />,
          color: "violet",
          highlights: ["Automazione dei processi", "Analisi predittiva", "Integrazione con sistemi esistenti"],
          link: "/ai-agents"
        },
        {
          title: "Sviluppo Software",
          description: "Soluzioni software personalizzate per trasformare la tua visione in applicazioni concrete",
          icon: <Code className="w-16 h-16" />,
          color: "indigo",
          highlights: ["App web responsive", "Software gestionali", "Soluzioni cloud"],
          link: "/software-pmi"
        },
        {
          title: "Chatbot AI",
          description: "Assistenti virtuali intelligenti che migliorano l'esperienza cliente e automatizzano il supporto",
          icon: <MessageSquare className="w-16 h-16" />,
          color: "cyan",
          highlights: ["Supporto 24/7", "Multilingue", "Personalizzazione avanzata"],
          link: "/chatbots"
        }
      ].map((service, index) => (
        <ScrollAnimation 
          key={index}
          animation="fadeIn"
          delay={0.2 * index}
          className="perspective-1000"
        >
          <div className="group relative preserve-3d transition-all duration-500 hover:rotate-y-3 hover:shadow-xl h-full">
            <div className={`glass rounded-2xl p-8 border border-${service.color}-500/30 h-full flex flex-col relative backface-hidden`}>
              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                            bg-gradient-to-br from-${service.color}-500 to-${service.color}-700 rounded-2xl`}></div>
              
              {/* Icon with container */}
              <div className={`relative mb-6 w-20 h-20 rounded-xl bg-${service.color}-500/20 
                            flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <div className={`text-${service.color}-400`}>
                  {service.icon}
                </div>
                
                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-xl border-2 border-${service.color}-500/0 
                               group-hover:border-${service.color}-500/50 transition-colors`}></div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 text-${service.color}-400`}>{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              
              {/* Key highlights */}
              <div className="mt-auto space-y-3">
                {service.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-400 mr-2`}></div>
                    <span className="text-foreground/80 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
              
              {/* Action button */}
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <Link
                  to={service.link}
                  className={`inline-flex items-center px-4 py-2 bg-${service.color}-500/20 rounded-lg 
                            text-${service.color}-400 hover:bg-${service.color}-500/30 transition-colors`}
                >
                  Scopri di più <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* 3D depth effect elements */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                             bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none transform translate-z-[-1px]"></div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
    
    {/* Additional services in a flowing layout */}
    <ScrollAnimation animation="slideUp" className="mb-20">
      <h3 className="text-2xl font-bold mb-8 text-center">Altri servizi</h3>
      
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "Team di Sviluppo",
            icon: <Users className="w-6 h-6" />,
            color: "indigo",
            link: "/developers"
          },
          {
            title: "Piani di Crescita",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "green",
            link: "/growth-plans"
          },
          {
            title: "Consulenza AI",
            icon: <BrainCircuit className="w-6 h-6" />,
            color: "violet",
            link: "/ai-consulting"
          },
          {
            title: "Cloud Services",
            icon: <Cloud className="w-6 h-6" />,
            color: "blue",
            link: "/cloud-services"
          },
          {
            title: "Data Analytics",
            icon: <BarChart className="w-6 h-6" />,
            color: "amber",
            link: "/data-analytics"
          }
        ].map((service, index) => (
          <Link 
            key={index} 
            to={service.link}
            className={`glass px-5 py-3 rounded-full flex items-center gap-2 border border-${service.color}-500/20 
                       hover:border-${service.color}-500/50 hover:bg-${service.color}-500/10 hover:scale-105 
                       transition-all duration-300 group`}
          >
            <div className={`text-${service.color}-400`}>
              {service.icon}
            </div>
            <span className="font-medium">{service.title}</span>
            <ChevronRight className={`w-4 h-4 text-${service.color}-400 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100`} />
          </Link>
        ))}
      </div>
    </ScrollAnimation>
    
    {/* Service approach banner with interactive elements */}
    <ScrollAnimation animation="fadeIn">
      <div className="glass p-10 rounded-2xl relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">Il nostro approccio ai servizi</h3>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Combiniamo metodologie agili, design thinking e tecnologie all'avanguardia per creare soluzioni che superano le aspettative
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 hidden md:block"></div>
            
            {[
              {
                step: 1,
                title: "Scoperta",
                description: "Comprendiamo a fondo la tua visione e le sfide da affrontare",
                icon: <Search className="w-6 h-6 text-indigo-400" />
              },
              {
                step: 2,
                title: "Design",
                description: "Progettiamo soluzioni innovative e user-centered",
                icon: <Layers className="w-6 h-6 text-violet-400" />
              },
              {
                step: 3,
                title: "Sviluppo",
                description: "Implementiamo con metodologie agili e feedback continuo",
                icon: <Code className="w-6 h-6 text-cyan-400" />
              },
              {
                step: 4,
                title: "Evoluzione",
                description: "Supportiamo e ottimizziamo continuamente dopo il lancio",
                icon: <RefreshCw className="w-6 h-6 text-green-400" />
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Step indicator */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full glass border border-primary/20 flex items-center justify-center relative z-10 bg-background">
                    {step.icon}
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 animate-pulse" style={{ animationDuration: '3s', animationDelay: `${index * 0.5}s` }}></div>
                </div>
                
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
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
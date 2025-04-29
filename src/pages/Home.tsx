// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight,  Layers, Users, BrainCircuit, CheckCircle, Clock, Code, Zap, Cpu, Workflow, Phone, Mail, TrendingUp, MessageSquare, BarChart, Cloud, Star, Calendar, BarChart3, Bot, GitBranch, Smartphone } from 'lucide-react';
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
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent inline-block">
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
      {/* Sfondo interattivo con gradiente */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl filter blur-xl"></div>
      
      {/* Grid di competenze con statistiche */}
      <div className="relative glass p-6 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <h4 className="text-lg font-medium text-center mb-6">Competenze chiave</h4>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Frontend', icon: <Code className="w-5 h-5 text-blue-400" />, rating: 5 },
            { name: 'Backend', icon: <Cpu className="w-5 h-5 text-violet-400" />, rating: 4 },
            { name: 'Cloud', icon: <Cloud className="w-5 h-5 text-cyan-400" />, rating: 5 },
            { name: 'Mobile', icon: <Smartphone className="w-5 h-5 text-green-400" />, rating: 4 },
            { name: 'DevOps', icon: <GitBranch className="w-5 h-5 text-amber-400" />, rating: 3 },
            { name: 'UI/UX', icon: <Layers className="w-5 h-5 text-rose-400" />, rating: 4 }
          ].map((skill) => (
            <div key={skill.name} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-lg bg-white/10 mr-3">{skill.icon}</div>
                <span className="font-medium">{skill.name}</span>
              </div>
              
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full mr-1 ${i < skill.rating ? 'bg-blue-500' : 'bg-gray-400/30'}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistiche di team */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-semibold text-blue-400">45+</div>
            <div className="text-xs text-gray-400">Progetti completati</div>
          </div>
          
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-semibold text-cyan-400">5+</div>
            <div className="text-xs text-gray-400">Anni di esperienza</div>
          </div>
          
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-semibold text-violet-400">24/7</div>
            <div className="text-xs text-gray-400">Supporto e assistenza</div>
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
                  bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400 z-10 shadow-lg shadow-violet-500/30
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
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400"></div>
          
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
            <Link to="/services" className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400 
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
          <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
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

    .tech-connection {
      animation: pulse-connection 3s infinite ease-in-out;
    }
    
    .tech-label {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #3b82f6;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      white-space: nowrap;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }
    
    .tech-label:hover {
      transform: translateY(-5px);
      background: rgba(59, 130, 246, 0.2);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes pulse-connection {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    @keyframes float-particle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      25% { opacity: 0.7; }
      75% { opacity: 0.7; }
      100% {
        transform: translateY(-70px) translateX(30px);
        opacity: 0;
      }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }

  `}} />
</section>

{/* Recensioni e collaborazioni - con sfondo nero e gradient */}
<section className="py-24 relative overflow-visible bg-background">
  {/* Background elements migliorati */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
  <div className="absolute -top-80 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/20 filter blur-[80px] opacity-70"></div>
  <div className="absolute -bottom-80 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/20 filter blur-[80px] opacity-70"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-sm font-medium mb-4">
        La voce dei nostri clienti
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Recensioni e collaborazioni</h2>
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Esperienze reali di chi ha trasformato il proprio business con le nostre soluzioni
      </p>
    </motion.div>
    
    {/* Testimonial Cards - Improved glassmorphism */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      {[
        {
          quote: "BioriAgent ha trasformato completamente il nostro customer service. L'implementazione è stata rapida e i risultati immediati. Ora gestiamo il triplo delle richieste.",
          author: "Laura Romano",
          role: "CEO, Innovatech",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 5,
          color: "indigo"
        },
        {
          quote: "Il team è stato eccezionale - reattivo, professionale e sempre attento alle nostre esigenze in evoluzione. In soli tre mesi abbiamo visto un ROI del 300%.",
          author: "Alessandro Bianchi",
          role: "CTO, TechVision",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 5,
          color: "violet"
        },
        {
          quote: "L'implementazione dei loro chatbot ha migliorato notevolmente l'esperienza clienti. Il nostro team può ora concentrarsi su attività a maggior valore aggiunto.",
          author: "Giulia Conti",
          role: "Marketing Director, RetailPlus",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 4,
          color: "cyan"
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className={`glass p-6 rounded-xl border border-${testimonial.color}-500/30 
                    bg-gradient-to-br from-background/90 to-${testimonial.color}-500/5
                    transition-all duration-300 hover:shadow-lg hover:shadow-${testimonial.color}-500/20 hover:-translate-y-1`}
        >
          {/* Stars Rating */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-foreground/20'}`} 
              />
            ))}
          </div>
          
          {/* Quote */}
          <p className="text-foreground/80 text-sm leading-relaxed mb-6">
            "{testimonial.quote}"
          </p>
          
          {/* Author info */}
          <div className="flex items-center mt-auto">
            <div className={`w-10 h-10 rounded-full border-2 border-${testimonial.color}-500/30 overflow-hidden`}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="ml-3">
              <h4 className="font-bold">{testimonial.author}</h4>
              <p className="text-foreground/60 text-xs">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* I nostri servizi - Improved design */}
<section className="py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-sm font-medium mb-4">
        <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
          Soluzioni & Expertise
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">I nostri servizi</h2>
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi
      </p>
    </motion.div>
    
    {/* Servizi principali - Enhanced cards with animated hover effects */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {[
        {
          id: "ai-agents",
          title: "Agenti AI",
          description: "Sistemi intelligenti autonomi che automatizzano i processi aziendali operando 24/7",
          icon: <Bot className="w-10 h-10 text-violet-400" />,
          features: ["Automazione processi", "Integrazione sistemi", "Operatività 24/7"],
          color: "violet",
          link: "/ai-agents",
          bgImage: "https://images.unsplash.com/photo-1677442135968-6d89485dc891?q=80&w=400&auto=format"
        },
        {
          id: "software-pmi",
          title: "Sviluppo Software",
          description: "Soluzioni software personalizzate per trasformare la tua visione in applicazioni concrete",
          icon: <Code className="w-10 h-10 text-indigo-400" />,
          features: ["App web responsive", "Software gestionali", "Soluzioni cloud"],
          color: "indigo",
          link: "/software-pmi",
          bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format"
        },
        {
          id: "chatbots",
          title: "Chatbot AI",
          description: "Assistenti virtuali intelligenti che migliorano l'esperienza cliente e automatizzano il supporto",
          icon: <MessageSquare className="w-10 h-10 text-cyan-400" />,
          features: ["Supporto 24/7", "Multilingue", "Personalizzazione"],
          color: "cyan",
          link: "/chatbots",
          bgImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format"
        }
      ].map((service, index) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * index, duration: 0.5 }}
          className="group relative h-full overflow-hidden rounded-xl"
        >
          {/* Card with hover reveal effect */}
          <div className="relative h-full overflow-hidden rounded-xl border border-foreground/10 transition-all duration-500 group-hover:border-primary/30">
            {/* Background image with overlay */}
            <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20"></div>
              <img 
                src={service.bgImage} 
                alt={service.title}
                className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:opacity-30" 
              />
            </div>
            
            {/* Content */}
            <div className="glass relative z-10 flex h-full flex-col p-6 transition-transform duration-500">
              {/* Icon with animated background */}
              <div className={`relative mb-6 w-16 h-16 rounded-xl bg-${service.color}-500/20 flex items-center justify-center overflow-hidden group-hover:bg-${service.color}-500/30 transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/0 to-${service.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              
              {/* Features with animated reveal */}
              <ul className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 text-${service.color}-400 mt-0.5 mr-3 flex-shrink-0`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Button with hover animation */}
              <Link 
                to={service.link}
                className={`mt-auto group/btn flex w-full items-center justify-center space-x-2 rounded-lg border border-${service.color}-500/30 bg-${service.color}-500/10 px-4 py-3 text-center transition-all duration-300 hover:bg-${service.color}-500/20`}
              >
                <span className={`font-medium text-${service.color}-400`}>Scopri di più</span>
                <ArrowRight className={`ml-2 w-5 h-5 text-${service.color}-400 transition-transform duration-300 group-hover/btn:translate-x-1`} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Altri servizi - Improved infinite slider */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h3 className="text-2xl font-bold mb-8 text-center">Altri servizi</h3>
      
      <div className="relative overflow-hidden py-6">
        {/* Gradient masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Infinite slider container */}
        <div className="animate-infinite-scroll flex items-center justify-center">
          {/* First set of cards */}
          {[
            {
              title: "Team di Sviluppo",
              description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
              icon: <Users className="w-8 h-8 text-indigo-400" />,
              color: "indigo",
              link: "/developers"
            },
            {
              title: "Piani di Crescita",
              description: "Strategie di trasformazione digitale per crescita sostenibile",
              icon: <TrendingUp className="w-8 h-8 text-green-400" />,
              color: "green",
              link: "/growth-plans"
            },
            {
              title: "Consulenza AI",
              description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
              icon: <BrainCircuit className="w-8 h-8 text-violet-400" />,
              color: "violet",
              link: "/ai-consulting"
            },
            {
              title: "Cloud Services",
              description: "Infrastrutture scalabili e sicure per le tue applicazioni",
              icon: <Cloud className="w-8 h-8 text-blue-400" />,
              color: "blue",
              link: "/cloud-services"
            },
            {
              title: "Data Analytics",
              description: "Analisi dati avanzata per decisioni data-driven",
              icon: <BarChart className="w-8 h-8 text-amber-400" />,
              color: "amber",
              link: "/data-analytics"
            },
            {
              title: "Digital Marketing",
              description: "Strategie digitali per aumentare la visibilità del tuo brand",
              icon: <BarChart3 className="w-8 h-8 text-rose-400" />,
              color: "rose",
              link: "/digital-marketing"
            }
          ].map((service, index) => (
            <Link 
              key={`card-1-${index}`}
              to={service.link}
              className={`flex-shrink-0 glass mx-3 p-6 rounded-xl border border-${service.color}-500/30 
                       bg-gradient-to-br from-background/90 to-${service.color}-500/5
                       transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/20 
                       hover:-translate-y-1 flex flex-col w-64 h-64`}
            >
              <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              
              <h4 className={`text-lg font-bold mb-2 text-${service.color}-400`}>{service.title}</h4>
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto flex items-center text-sm group">
                <span className={`text-${service.color}-400`}>Scopri di più</span>
                <ArrowRight className={`ml-1 w-4 h-4 text-${service.color}-400 transition-transform group-hover:translate-x-1`} />
              </div>
            </Link>
          ))}
          
          {/* Duplicated set for infinite scrolling */}
          {[
            {
              title: "Team di Sviluppo",
              description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
              icon: <Users className="w-8 h-8 text-indigo-400" />,
              color: "indigo",
              link: "/developers"
            },
            {
              title: "Piani di Crescita",
              description: "Strategie di trasformazione digitale per crescita sostenibile",
              icon: <TrendingUp className="w-8 h-8 text-green-400" />,
              color: "green",
              link: "/growth-plans"
            },
            {
              title: "Consulenza AI",
              description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
              icon: <BrainCircuit className="w-8 h-8 text-violet-400" />,
              color: "violet",
              link: "/ai-consulting"
            },
            {
              title: "Cloud Services",
              description: "Infrastrutture scalabili e sicure per le tue applicazioni",
              icon: <Cloud className="w-8 h-8 text-blue-400" />,
              color: "blue",
              link: "/cloud-services"
            },
            {
              title: "Data Analytics",
              description: "Analisi dati avanzata per decisioni data-driven",
              icon: <BarChart className="w-8 h-8 text-amber-400" />,
              color: "amber",
              link: "/data-analytics"
            },
            {
              title: "Digital Marketing",
              description: "Strategie digitali per aumentare la visibilità del tuo brand",
              icon: <BarChart3 className="w-8 h-8 text-rose-400" />,
              color: "rose",
              link: "/digital-marketing"
            }
          ].map((service, index) => (
            <Link 
              key={`card-2-${index}`}
              to={service.link}
              className={`flex-shrink-0 glass mx-3 p-6 rounded-xl border border-${service.color}-500/30 
                       bg-gradient-to-br from-background/90 to-${service.color}-500/5
                       transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/20 
                       hover:-translate-y-1 flex flex-col w-64 h-64`}
            >
              <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              
              <h4 className={`text-lg font-bold mb-2 text-${service.color}-400`}>{service.title}</h4>
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto flex items-center text-sm group">
                <span className={`text-${service.color}-400`}>Scopri di più</span>
                <ArrowRight className={`ml-1 w-4 h-4 text-${service.color}-400 transition-transform group-hover:translate-x-1`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
  
  {/* CSS for infinite scroll animation */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes infinite-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-infinite-scroll {
      animation: infinite-scroll 60s linear infinite;
      width: fit-content;
    }
  `}} />
</section>

{/* Enhanced CTA Section with interactive elements */}
<section className="py-24 relative overflow-visible">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
  <div className="absolute -top-80 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/20 filter blur-[100px] opacity-70"></div>
  <div className="absolute -bottom-80 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/20 filter blur-[100px] opacity-70"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="relative">
      {/* Interactive card with layered effect */}
      <div className="glass border border-white/10 rounded-3xl p-8 lg:p-16 overflow-hidden relative shadow-2xl">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${3 + Math.random() * 8}px`,
                height: `${3 + Math.random() * 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>
        
        {/* Colorful top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400"></div>
        
        {/* Content with 3D effect */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-full glass px-4 py-1 border border-indigo-500/30 mb-6">
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Il tuo futuro digitale inizia qui
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Trasforma le <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">idee</span> in <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">innovazione</span>
                </h2>
                
                <p className="text-lg text-foreground/80 mb-8">
                  Inizia oggi un percorso personalizzato verso la trasformazione digitale del tuo business, con soluzioni su misura e all'avanguardia.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl border border-indigo-500/20 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">+45</div>
                    <div className="text-sm text-foreground/70">Progetti completati</div>
                  </div>
                  
                  <div className="glass p-4 rounded-xl border border-violet-500/20 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">100%</div>
                    <div className="text-sm text-foreground/70">Soddisfazione clienti</div>
                  </div>
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center group"
                  >
                    <span className="font-semibold">Contattaci ora</span>
                    <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
                      <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
                    </div>
                  </Link>
                  
                  <Link
                    to="/products"
                    className="px-8 py-4 glass border border-white/20 hover:border-indigo-500/30 rounded-xl transition-all hover:-translate-y-1 flex items-center"
                  >
                    Soluzioni
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Right column - Interactive elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Interactive contact form preview */}
              <div className="glass p-6 rounded-2xl shadow-xl border border-white/10 hover:border-violet-500/20 transition-all relative group overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute -inset-px rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-400 opacity-20"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                      Iniziamo insieme
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Form fields - ora funzionanti */}
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    // Qui puoi aggiungere la logica per inviare il form
                    alert('Messaggio inviato con successo!');
                  }}>
                    <div className="space-y-4 mb-6">
                      <div className="glass p-3 rounded-lg bg-foreground/5 flex items-center border border-foreground/10 focus-within:border-violet-500/30 transition-colors group/input">
                        <Mail className="w-5 h-5 text-foreground/50 mr-3 group-focus-within/input:text-violet-400 transition-colors" />
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="La tua email..." 
                          className="bg-transparent w-full focus:outline-none text-foreground/80 placeholder:text-foreground/50"
                        />
                      </div>
                      
                      <div className="glass p-3 rounded-lg bg-foreground/5 border border-foreground/10 focus-within:border-violet-500/30 transition-colors">
                        <textarea 
                          name="message"
                          required
                          placeholder="Raccontaci del tuo progetto..." 
                          className="bg-transparent w-full focus:outline-none text-foreground/80 placeholder:text-foreground/50 min-h-[80px] resize-none"
                        ></textarea>
                      </div>
                    </div>
                    
                    {/* Interactive elements */}
                    <div className="space-y-4">
                      <div className="flex items-center p-3 glass rounded-lg hover:bg-indigo-500/10 transition-colors cursor-pointer group/item">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 group-hover/item:bg-indigo-500/30 transition-colors">
                          <Phone className="w-5 h-5 text-indigo-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div>
                          <div className="text-sm text-foreground/70">Chiamaci</div>
                          <a href="tel:+390212345678" className="font-medium hover:text-indigo-400 transition-colors">+39 02 1234 5678</a>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 glass rounded-lg hover:bg-violet-500/10 transition-colors cursor-pointer group/item">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mr-4 group-hover/item:bg-violet-500/30 transition-colors">
                          <Calendar className="w-5 h-5 text-violet-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <Link to="/contact" className="block">
                          <div className="text-sm text-foreground/70">Consulenza gratuita</div>
                          <div className="font-medium hover:text-violet-400 transition-colors">Prenota un appuntamento</div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Button with wave animation - ora funzionante */}
                    <button 
                      type="submit"
                      className="w-full py-4 px-6 mt-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl text-white font-semibold relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10">Invia messaggio</span>
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
                        <div className="absolute inset-y-0 -inset-x-40 bg-white/20 blur-2xl skew-x-12 animate-wave-slow"></div>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-indigo-500/20 blur-sm"></div>
      <div className="absolute -bottom-14 -left-14 w-64 h-64 rounded-full border border-violet-500/20 blur-sm"></div>
    </div>
  </div>
  
  {/* CSS for animations */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes float-particle {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(10px) translateX(-15px); }
      75% { transform: translateY(-15px) translateX(-10px); }
    }
    
    @keyframes wave-slow {
      0%, 100% { transform: translateX(-100%) skewX(12deg); }
      50% { transform: translateX(100%) skewX(12deg); }
    }
  `}} />
</section>
          
    
    </>
  );
};

export default Home;
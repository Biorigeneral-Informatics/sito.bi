// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Shield, Globe, Database, Layers, ChevronRight, Users, BrainCircuit, CheckCircle, Clock, Code, Zap, Cpu, Workflow } from 'lucide-react';
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
      
      {/* Competenze all'avanguardia Section */}
<section className="py-20 relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-indigo-500/20 filter blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-violet-500/20 filter blur-3xl" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
  
  <div className="container mx-auto px-6 lg:px-12">
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
    
    {/* Tools Showcase - Interactive grid with hover effects */}
    <div className="mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            name: "N8n",
            description: "Automazione workflow avanzata che supera i tradizionali strumenti di integrazione", 
            icon: <Workflow className="w-12 h-12" />,
            color: "from-indigo-500 to-blue-500",
            textColor: "text-indigo-400",
            borderColor: "border-indigo-500/30"
          },
          {
            name: "Make.com",
            description: "Piattaforma di integrazione visuale per connettere app e sistemi senza codice", 
            icon: <Layers className="w-12 h-12" />,
            color: "from-violet-500 to-purple-500",
            textColor: "text-violet-400",
            borderColor: "border-violet-500/30"
          },
          {
            name: "React",
            description: "Framework frontend per interfacce dinamiche e altamente reattive", 
            icon: <Code className="w-12 h-12" />,
            color: "from-cyan-500 to-blue-500",
            textColor: "text-cyan-400",
            borderColor: "border-cyan-500/30"
          },
          {
            name: "Python",
            description: "Linguaggio versatile per IA, analisi dati e backend robusti", 
            icon: <Database className="w-12 h-12" />,
            color: "from-green-500 to-emerald-500",
            textColor: "text-emerald-400",
            borderColor: "border-emerald-500/30"
          }
        ].map((tool, index) => (
          <ScrollAnimation 
            key={index}
            animation="fadeIn"
            delay={0.1 * index}
          >
            <div className="group relative h-full overflow-hidden">
              {/* Card background with hover animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-background z-0 
                            group-hover:from-primary/5 group-hover:to-background transition-all duration-500"></div>
              
              {/* Border gradient animation on hover */}
              <div className={`absolute inset-0 opacity-0 bg-gradient-to-br ${tool.color} z-0 
                            group-hover:opacity-10 transition-opacity duration-700 rounded-xl`}></div>
              
              {/* Main container */}
              <div className={`relative z-10 h-full glass p-6 rounded-xl border ${tool.borderColor} 
                             overflow-hidden group-hover:border-opacity-50 transition-all duration-300
                             group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:translate-y-[-5px]`}>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background on hover */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                                group-hover:bg-gradient-to-br ${tool.color} transition-all duration-300
                                bg-primary/10`}>
                    <div className="text-foreground/70 group-hover:text-white transition-colors duration-300">
                      {tool.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 group-hover:${tool.textColor} transition-colors duration-300`}>
                    {tool.name}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {tool.description}
                  </p>
                  
                  {/* Hidden details that appear on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 
                              transition-all duration-500 overflow-hidden">
                    <span className={`inline-flex items-center text-sm ${tool.textColor}`}>
                      Scopri di più <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${tool.color}
                              opacity-0 group-hover:opacity-20 transition-all duration-500 
                              transform group-hover:scale-150`}></div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      
      {/* Additional tools in a dynamic flowing layout */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {["JavaScript", "Electron", "Claude AI", "Bolt", "TypeScript", "Node.js", "MongoDB", "Docker"].map((tech, i) => (
          <div key={i} 
               className="px-4 py-2 glass rounded-full text-sm border border-primary/20 
                        hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:shadow-md
                        transition-all duration-300 cursor-pointer"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
    
    {/* Innovation Comparison - Interactive and visual */}
    <ScrollAnimation animation="fadeIn" className="mb-24">
      <div className="glass rounded-xl overflow-hidden relative">
        {/* Color accent top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
        
        <div className="p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Innovazione rispetto alla <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">media italiana</span>
          </h3>
          
          {/* Interactive comparison tabs */}
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            <div className="md:col-span-2">
              <div className="space-y-6 h-full flex flex-col">
                <div className="p-6 glass rounded-xl border border-foreground/10 
                              hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 
                              transition-all duration-300 flex-grow
                              cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-500/20 mr-4 
                                  group-hover:bg-indigo-500/30 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-indigo-400 transition-colors duration-300">Tempo di sviluppo</h4>
                      <p className="text-foreground/60 text-sm">Drasticamente ridotto</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Approccio tradizionale</span>
                      <span className="text-sm font-medium">3-6 mesi</span>
                    </div>
                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/30 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-indigo-400">Il nostro approccio</span>
                      <span className="text-sm font-medium text-indigo-400">2-4 settimane</span>
                    </div>
                    <div className="h-2 w-full bg-indigo-500/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 glass rounded-xl border border-foreground/10 
                              hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5
                              transition-all duration-300 flex-grow
                              cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-violet-500/20 mr-4
                                  group-hover:bg-violet-500/30 transition-colors duration-300">
                      <Cpu className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-violet-400 transition-colors duration-300">Integrazione AI</h4>
                      <p className="text-foreground/60 text-sm">Profondamente incorporata</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Approccio tradizionale</span>
                      <span className="text-sm font-medium">AI assente</span>
                    </div>
                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/30 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-violet-400">Il nostro approccio</span>
                      <span className="text-sm font-medium text-violet-400">AI in ogni soluzione</span>
                    </div>
                    <div className="h-2 w-full bg-violet-500/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual comparison */}
            <div className="md:col-span-3 p-6 glass rounded-xl border border-foreground/10 relative overflow-hidden
                          hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-500">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/10 filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-violet-500/10 filter blur-xl opacity-70"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                  <span>Confronto di approcci</span>
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column - Traditional approach */}
                  <div>
                    <h5 className="font-bold mb-4 text-foreground/70">Approccio tradizionale</h5>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-foreground/10 mr-3 mt-1">
                          <Code className="w-4 h-4 text-foreground/50" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Sviluppo monolitico</h6>
                          <p className="text-foreground/60 text-sm">Applicazioni rigide e difficili da scalare</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-foreground/10 mr-3 mt-1">
                          <Clock className="w-4 h-4 text-foreground/50" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Rilasci lenti</h6>
                          <p className="text-foreground/60 text-sm">Aggiornamenti poco frequenti e complessi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-foreground/10 mr-3 mt-1">
                          <Users className="w-4 h-4 text-foreground/50" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Automazione limitata</h6>
                          <p className="text-foreground/60 text-sm">Processi manuali e soggetti a errori</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right column - Our approach */}
                  <div>
                    <h5 className="font-bold mb-4 text-cyan-400">Il nostro approccio innovativo</h5>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-cyan-500/20 mr-3 mt-1">
                          <Code className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Sviluppo modulare</h6>
                          <p className="text-foreground/60 text-sm">Componenti flessibili e facilmente adattabili</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-cyan-500/20 mr-3 mt-1">
                          <Clock className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Iterazioni rapide</h6>
                          <p className="text-foreground/60 text-sm">Aggiornamenti continui con feedback immediato</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-cyan-500/20 mr-3 mt-1">
                          <Users className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h6 className="font-medium mb-1">Automazione intelligente</h6>
                          <p className="text-foreground/60 text-sm">Processi autonomi guidati dall'IA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive comparison indicator */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 border border-cyan-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-cyan-500/20 mr-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="font-medium text-sm">
                        Soluzioni <span className="text-cyan-400">5 volte più veloci</span> da implementare
                      </span>
                    </div>
                    
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400">
                      +400% efficienza
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
    
    {/* Methodology & Approach Section with 3D-like cards */}
    <ScrollAnimation animation="slideUp" className="mb-16">
      <h3 className="text-3xl font-bold mb-10 text-center">
        Un approccio <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">rivoluzionario</span>
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Low-Code & No-Code",
            description: "Sviluppiamo soluzioni complesse in una frazione del tempo tradizionale grazie a piattaforme visive avanzate",
            icon: <Database className="w-16 h-16" />,
            gradient: "from-indigo-500 to-blue-500",
            color: "indigo"
          },
          {
            title: "AI-First Approach",
            description: "Integriamo l'intelligenza artificiale in ogni aspetto delle nostre soluzioni per automatizzare processi decisionali",
            icon: <BrainCircuit className="w-16 h-16" />,
            gradient: "from-violet-500 to-purple-500",
            color: "violet"
          },
          {
            title: "Cross-Platform Native",
            description: "Creiamo applicazioni che funzionano perfettamente su ogni dispositivo con un'unica base di codice unificata",
            icon: <Globe className="w-16 h-16" />,
            gradient: "from-cyan-500 to-blue-500",
            color: "cyan"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="group h-full perspective-1000"
          >
            <div className="relative h-full preserve-3d transition-transform duration-500 
                          group-hover:rotate-y-5 group-hover:translate-z-10 group-hover:scale-105">
              {/* Card front */}
              <div className={`absolute inset-0 glass p-8 rounded-xl border border-${item.color}-500/30 
                            backface-hidden flex flex-col`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity 
                              duration-300 rounded-xl bg-gradient-to-br ${item.gradient}`}></div>
                
                {/* Icon with gradient background */}
                <div className={`w-24 h-24 mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} 
                              flex items-center justify-center text-white 
                              group-hover:shadow-lg group-hover:shadow-${item.color}-500/30 transition-all duration-300`}>
                  {item.icon}
                </div>
                
                <h4 className={`text-2xl font-bold mb-4 text-${item.color}-400`}>{item.title}</h4>
                <p className="text-foreground/70 flex-grow">{item.description}</p>
                
                <div className="mt-6 pt-6 border-t border-foreground/10">
                  <span className={`flex items-center text-${item.color}-400 text-sm font-medium`}>
                    Scopri di più <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollAnimation>
  </div>
</section>
      
      {/* Testimonials Section - migliorata */}
      <section className="py-20 relative overflow-hidden">
        <ParallaxEffect speed={0.05} direction="up">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent -z-10"></div>
        </ParallaxEffect>
        
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">I Nostri Clienti</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Storie di successo e trasformazione digitale dalle aziende che hanno scelto di innovare con noi
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Main testimonial */}
            <ScrollAnimation 
              animation="fadeIn"
              className="mb-10"
            >
              <div className="glass p-10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
                
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-3 text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                      alt="Marco Bianchi" 
                      className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500/20"
                    />
                    <h4 className="font-bold text-lg">Marco Bianchi</h4>
                    <p className="text-foreground/60">CTO, TechVision SpA</p>
                  </div>
                  
                  <div className="md:col-span-9">
                    <div className="text-3xl text-indigo-400 mb-2">"</div>
                    <p className="text-xl italic text-foreground/80 mb-6 leading-relaxed">
                      La loro capacità di trasformare concetti complessi in soluzioni intuitive ha rivoluzionato i nostri processi interni. 
                      In soli sei mesi dall'implementazione, abbiamo registrato un aumento della produttività del 35% e una riduzione dei costi operativi del 25%.
                    </p>
                    <div className="flex items-center">
                      <div className="text-yellow-500 flex mr-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <span className="text-foreground/60">Cliente dal 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Secondary testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "In soli tre mesi dall'implementazione, abbiamo visto un ROI del 300% grazie alla loro soluzione di automazione AI.",
                  author: "Laura Romano",
                  position: "CEO, Innovatech",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                  stars: 5
                },
                {
                  quote: "Il team è stato eccezionale - reattivo, professionale e sempre attento alle nostre esigenze in evoluzione.",
                  author: "Alessandro Rossi",
                  position: "Direttore Operativo, LogiSmart",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                  stars: 5
                }
              ].map((testimonial, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="slideUp" 
                  delay={0.15 * index}
                >
                  <div className="glass p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/80 to-indigo-500/80"></div>
                    
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-violet-500/20"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-foreground/60">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-6 flex-grow italic leading-relaxed">"{testimonial.quote}"</p>
                    
                    <div className="text-yellow-500 flex mt-auto">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section - migliorata */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Tecnologie che Utilizziamo</h2>
              <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Solo strumenti e linguaggi all'avanguardia per garantire soluzioni performanti e durature
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="glass p-10 rounded-xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {[
                  { name: 'React', category: 'Frontend', icon: '⚛️' },
                  { name: 'TypeScript', category: 'Language', icon: '📝' },
                  { name: 'Node.js', category: 'Backend', icon: '🟢' },
                  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
                  { name: 'MongoDB', category: 'Database', icon: '🍃' },
                  { name: 'AWS', category: 'Cloud', icon: '☁️' },
                  { name: 'Azure', category: 'Cloud', icon: '🔷' },
                  { name: 'Docker', category: 'DevOps', icon: '🐳' },
                  { name: 'Kubernetes', category: 'DevOps', icon: '⎈' },
                  { name: 'GraphQL', category: 'API', icon: '◼️' },
                  { name: 'TensorFlow', category: 'AI', icon: '🧠' },
                  { name: 'PyTorch', category: 'AI', icon: '🔥' }
                ].map((tech, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="fadeIn"
                    delay={0.05 * index}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-xl mr-4">
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{tech.name}</h3>
                        <p className="text-sm text-foreground/60">{tech.category}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/services" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                  Scopri tutte le tecnologie <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollAnimation animation="slideUp">
            <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-violet-500/15 z-0"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto a Trasformare la Tua Visione in Realtà?</h2>
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Iniziamo insieme un percorso di innovazione digitale per il tuo business
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-primary/20"
                  >
                    Contattaci Ora <ArrowRight className="inline ml-2" />
                  </Link>
                  
                  <Link
                    to="/services"
                    className="px-8 py-4 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
                  >
                    Esplora Servizi
                  </Link>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-500/15 filter blur-3xl"></div>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-500/15 filter blur-3xl"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Home;
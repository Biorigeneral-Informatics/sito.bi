// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Bot, Shield, Globe, Database, Layers, ChevronRight, Clock, BarChart, MessageSquare, CheckCircle, Users } from 'lucide-react';
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
      
      {/* Capabilities Section - sostituisce "Il Nostro Processo" */}
      <section className="py-20 relative overflow-hidden">
        <ParallaxEffect speed={0.05} direction="right" className="absolute -right-32 top-20 w-96 h-96">
          <div className="w-full h-full rounded-full bg-indigo-500/20 filter blur-3xl"></div>
        </ParallaxEffect>
        
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Le Nostre Competenze</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Un team di esperti con competenze trasversali per supportare ogni fase del ciclo di vita del prodotto
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "UX/UI Design",
                description: "Interfacce intuitive e moderne che migliorano l'esperienza utente",
                icon: <Layers className="w-10 h-10 text-indigo-400" />
              },
              {
                title: "Cloud Architecture",
                description: "Infrastrutture scalabili e ottimizzate per prestazioni eccellenti",
                icon: <Globe className="w-10 h-10 text-violet-400" />
              },
              {
                title: "DevOps & CI/CD",
                description: "Automazione dei processi di sviluppo e deployment",
                icon: <Database className="w-10 h-10 text-cyan-400" />
              },
              {
                title: "Security By Design",
                description: "Protezione dei dati e conformità alle normative vigenti",
                icon: <Shield className="w-10 h-10 text-emerald-400" />
              }
            ].map((capability, index) => (
              <ScrollAnimation 
                key={index}
                animation="scale"
                delay={0.1 * index}
                threshold={0.2}
              >
                <div className="glass p-8 rounded-xl text-center h-full">
                  <div className="inline-flex items-center justify-center mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-foreground/70">{capability.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
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
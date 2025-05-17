// src/pages/Home.tsx - Versione migliorata con CSS esterno
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Users, BrainCircuit, CheckCircle, Clock, Code, Zap, Cpu, Workflow, Phone, Mail, TrendingUp, MessageSquare, BarChart, Cloud, Star, BarChart3, Bot, GitBranch, Smartphone } from 'lucide-react';
import ParallaxEffect from '../components/ParallaxEffect';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import HeroAnimation from '../components/HeroAnimation';
import '../styles/Home.css'; // Importa il CSS esterno';

const Home = () => {

  // Load HubSpot form script dynamically
  useEffect(() => {
    // Create script for HubSpot forms
    const script1 = document.createElement('script');
    script1.charset = 'utf-8';
    script1.type = 'text/javascript';
    script1.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script1.async = true;
    
    // Create script for form creation
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.innerHTML = `
      (function() {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "144593984",
            formId: "4afa40f5-1683-4f2d-b3b5-b3a1303238fb",
            region: "eu1",
            target: "#hubspot-form-container"
          });
        }
      })();
    `;
    
    // Add scripts to document
    document.body.appendChild(script1);
    
    // Add the second script after the first one loads
    script1.onload = () => {
      document.body.appendChild(script2);
    };
    
    // Cleanup
    return () => {
      document.body.removeChild(script1);
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);
  

  // Hero section mouse move effect
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

      {/* Hero Section - completamente rivisto per mobile */}
      <section ref={heroRef} className="hero-section">
        {/* Elementi decorativi SOLO per mobile */}
        <div className="hero-decorative-corner"></div>
        
        {/* Cerchi decorativi animati SOLO per mobile */}
        <div className="hero-circle-1"></div>
        <div className="hero-circle-2"></div>
        <div className="hero-circle-3"></div>
        <div className="hero-circle-4"></div>
        
        {/* Linee decorative diagonal SOLO per mobile */}
        <div className="hero-line-1"></div>
        <div className="hero-line-2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Sfondo luminoso SOLO per mobile */}
              <div className="hero-bg-mobile"></div>
              
              <h1 className="hero-heading">
                <span className="block">Oltre il codice,</span>
                <span className="text-gradient">verso l'innovazione</span>
              </h1>
              
              <p className="hero-paragraph">
                AI Agency e Software Engineering. Soluzioni digitali innovative per il tuo business.
              </p>
              
              <div className="hero-buttons">
                <Link to="/contact" className="hero-button-primary">
                  Inizia Ora <ArrowRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                
                <Link to="/services" className="hero-button-secondary">
                  Esplora Soluzioni
                </Link>
              </div>
            </motion.div>
            
            {/* L'animazione è visibile solo da tablet in su */}
            <div className="hidden sm:block">
              <ParallaxEffect speed={0.1} direction="down">
                <div className="relative hero-visual flex justify-center">
                  <HeroAnimation />
                </div>
              </ParallaxEffect>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements - nascosti su mobile, visibili solo da tablet in su */}
        <div className="hero-circle-desktop-1"></div>
        <div className="hero-circle-desktop-2"></div>
        <div className="hero-circle-desktop-3"></div>
        
        {/* Animazione particelle galleggianti SOLO per mobile */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="hero-particle"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              top: `${20 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </section>
      
      {/* Valore, competenza e innovazione Section - ottimizzata per mobile */}
      <section className="values-section">
        {/* Linee di connessione animate che seguono lo scroll */}
        <div className="values-line-center"></div>
        <div className="values-line-left"></div>
        <div className="values-line-right"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ParallaxEffect speed={0.1} direction="up" className="mb-12 md:mb-20">
            <div className="text-center relative">
              <div className="values-heading-bg"></div>
              <h2 className="values-heading">
                <span className="values-heading-box-left"></span>
                Valore, competenza e innovazione
                <span className="values-heading-box-right"></span>
              </h2>
              <p className="values-paragraph">
                La sinergia tra esperienza nell'AI, competenze tecniche avanzate e visione innovativa, 
                per trasformare le sfide digitali in opportunità di crescita
              </p>
            </div>
          </ParallaxEffect>
          
          {/* Elemento dinamico scroll-based con timeline orizzontale */}
          <div className="values-timeline">
            {/* Elemento decorativo timeline orizzontale */}
            <div className="values-timeline-line"></div>
            
            {/* Primo nodo timeline */}
            <ScrollAnimation animation="fadeIn" threshold={0.3} className="mb-24 md:mb-40">
              <div className="relative">
                {/* Indicatore timeline */}
                <div className="values-timeline-indicator values-indicator-1">
                  <div className="values-timeline-indicator-inner"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <ScrollAnimation animation="slideRight" delay={0.2}>
                      <h3 className="values-node-heading values-node-heading-1">
                        Expertise in AI e Prompting
                      </h3>
                      <p className="values-node-paragraph">
                        La nostra padronanza nell'intelligenza artificiale e nelle tecniche avanzate di prompting 
                        ci permette di progettare soluzioni che interagiscono in modo naturale e intuitivo, 
                        portando l'esperienza utente a un livello superiore e automatizzando processi complessi.
                      </p>
                      
                      <div className="values-node-tags">
                        <div className="values-tag values-tag-indigo">
                          LLM & RAG
                        </div>
                        <div className="values-tag values-tag-violet">
                          Agenti conversazionali
                        </div>
                        <div className="values-tag values-tag-indigo">
                          Automazione cognitiva
                        </div>
                      </div>
                      
                      <div className="values-footnote">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 mr-2" />
                        <span className="text-foreground/60 text-xs sm:text-sm">Trasformiamo i processi ripetitivi in flussi automatizzati intelligenti</span>
                      </div>
                    </ScrollAnimation>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <ScrollAnimation animation="slideLeft" delay={0.3}>
                      <div className="relative">
                        {/* Sfondo interattivo */}
                        <div className="values-node-visual-bg values-node-visual-bg-1"></div>
                        
                        {/* Contenuto visivo - schermo interattivo */}
                        <div className="values-node-visual">
                          <div className="values-node-screen">
                            {/* Simulazione conversazione AI */}
                            <div className="values-chat-message">
                              <div className="values-chat-avatar">
                                <Bot className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                              </div>
                              <div className="values-chat-bubble">
                                <p className="text-xs md:text-sm">Come posso aiutarti a ottimizzare il processo di onboarding clienti?</p>
                              </div>
                            </div>
                            
                            <div className="values-chat-message values-chat-user">
                              <div className="values-chat-bubble values-chat-bubble-user">
                                <p className="text-xs md:text-sm">Vorrei rendere più efficiente il processo di raccolta dei documenti</p>
                              </div>
                            </div>
                            
                            <div className="values-chat-message">
                              <div className="values-chat-avatar">
                                <Bot className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                              </div>
                              <div className="values-chat-bubble">
                                <p className="text-xs md:text-sm">Posso automatizzare la raccolta con un sistema di verifica intelligente integrato con il tuo CRM</p>
                                
                                <div className="values-chat-loading">
                                  <span className="values-chat-loading-text">Generando soluzione...</span>
                                  <div className="values-chat-loading-dots">
                                    <span className="values-chat-loading-dot"></span>
                                    <span className="values-chat-loading-dot" style={{ animationDelay: '0.2s' }}></span>
                                    <span className="values-chat-loading-dot" style={{ animationDelay: '0.4s' }}></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Linee decorative */}
                            <div className="values-chat-line-1"></div>
                            <div className="values-chat-line-2"></div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Secondo nodo timeline - con elemento interattivo semplice */}
            <ScrollAnimation animation="fadeIn" threshold={0.3} className="mb-24 md:mb-40">
              <div className="relative">
                {/* Indicatore timeline */}
                <div className="values-timeline-indicator values-indicator-2">
                  <div className="values-timeline-indicator-inner"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <ScrollAnimation animation="slideRight" delay={0.2}>
                      <div className="relative">
                        {/* Sfondo interattivo con gradiente */}
                        <div className="values-node-visual-bg values-node-visual-bg-2"></div>
                        
                        {/* Grid di competenze con statistiche */}
                        <div className="values-node-skills">
                          <h4 className="values-node-skills-heading">Competenze chiave</h4>
                          
                          <div className="values-node-skills-grid">
                            {[
                              { name: 'Frontend', icon: <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />, rating: 5 },
                              { name: 'Backend', icon: <Cpu className="w-4 h-4 md:w-5 md:h-5 text-violet-400" />, rating: 4 },
                              { name: 'Cloud', icon: <Cloud className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />, rating: 5 },
                              { name: 'Mobile', icon: <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-green-400" />, rating: 4 },
                              { name: 'DevOps', icon: <GitBranch className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />, rating: 3 },
                              { name: 'UI/UX', icon: <Layers className="w-4 h-4 md:w-5 md:h-5 text-rose-400" />, rating: 4 }
                            ].map((skill) => (
                              <div key={skill.name} className="values-node-skill">
                                <div className="values-node-skill-header">
                                  <div className="values-node-skill-icon">{skill.icon}</div>
                                  <span className="values-node-skill-name">{skill.name}</span>
                                </div>
                                
                                <div className="values-node-skill-rating">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`values-node-skill-dot ${i < skill.rating ? 'values-node-skill-dot-filled' : ''}`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Statistiche di team */}
                          <div className="values-node-stats">
                            <div className="values-node-stat">
                              <div className="values-node-stat-value text-blue-400">45+</div>
                              <div className="values-node-stat-label">Progetti completati</div>
                            </div>
                            
                            <div className="values-node-stat">
                              <div className="values-node-stat-value text-cyan-400">5+</div>
                              <div className="values-node-stat-label">Anni di esperienza</div>
                            </div>
                            
                            <div className="values-node-stat">
                              <div className="values-node-stat-value text-violet-400">24/7</div>
                              <div className="values-node-stat-label">Supporto e assistenza</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <ScrollAnimation animation="slideLeft" delay={0.3}>
                      <h3 className="values-node-heading values-node-heading-2">
                        Giovani Talenti e Innovazione
                      </h3>
                      <p className="values-node-paragraph">
                        L'integrazione di giovani talenti porta energie fresche e approcci innovativi, 
                        combinando competenze tecniche all'avanguardia con una visione disruptive. 
                        Questa sinergia ci permette di affrontare ogni sfida con creatività e pragmatismo.
                      </p>
                      
                      <div className="values-node-tags">
                        <div className="values-tag values-tag-cyan">
                          React & TypeScript
                        </div>
                        <div className="values-tag values-tag-blue">
                          Node.js & Cloud
                        </div>
                        <div className="values-tag values-tag-cyan">
                          DevOps & CI/CD
                        </div>
                      </div>
                      
                      <div className="values-footnote">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mr-2" />
                        <span className="text-foreground/60 text-xs sm:text-sm">Architetture moderne, performance senza compromessi</span>
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
                <div className="values-timeline-indicator values-indicator-3">
                  <div className="values-timeline-indicator-inner"></div>
                </div>
                
                <ScrollAnimation animation="slideUp" delay={0.3} className="max-w-3xl mx-auto px-4 sm:px-0">
                  <div className="relative">
                    {/* Sfondo interattivo */}
                    <div className="values-node-visual-bg values-node-visual-bg-3"></div>
                    
                    {/* Main content */}
                    <div className="values-node-convergence">
                      {/* Accent line on top */}
                      <div className="values-node-convergence-line"></div>
                      
                      <h3 className="values-node-convergence-heading">
                        Sinergia tra esperienza e innovazione
                      </h3>
                      
                      <p className="values-node-convergence-para">
                        Mettiamo insieme il meglio di entrambi i mondi: esperienza consolidata 
                        e potenziale innovativo, creando un approccio unico che unisce la profonda conoscenza 
                        delle tecnologie AI con metodologie di sviluppo all'avanguardia.
                      </p>
                      
                      <div className="values-node-features">
                        <div className="values-node-feature">
                          <div className="values-node-feature-dot values-feature-dot-indigo"></div>
                          <span className="values-node-feature-text">Visione strategica</span>
                        </div>
                        <div className="values-node-feature">
                          <div className="values-node-feature-dot values-feature-dot-violet"></div>
                          <span className="values-node-feature-text">Esecuzione agile</span>
                        </div>
                        <div className="values-node-feature">
                          <div className="values-node-feature-dot values-feature-dot-cyan"></div>
                          <span className="values-node-feature-text">Risultati misurabili</span>
                        </div>
                      </div>
                      
                      <div className="values-node-cta">
                        <Link to="/services" className="values-node-cta-button">
                          Scopri le nostre soluzioni <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
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
      <section className="skills-section">
        {/* Background elements interattivi */}
        <div className="skills-bg">
          <div className="skills-bg-blur-1"></div>
          <div className="skills-bg-blur-2"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation animation="slideUp">
            <div className="skills-heading-container">
              <div className="skills-subheading-badge">
                <span className="skills-subheading-text">
                  Innovazione Tecnologica • Strumenti di Nuova Generazione
                </span>
              </div>
              <h2 className="skills-heading">
                <span className="skills-heading-wrapper">
                  Competenze all'
                  <span className="skills-heading-underline">
                    avanguardia
                    <svg className="skills-heading-svg" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <p className="skills-paragraph">
                Integriamo strumenti innovativi e metodologie pionieristiche che ci posizionano ben oltre 
                le tradizionali soluzioni software presenti nel panorama italiano
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Layout ridisegnato: ecosistema a sinistra e vantaggi a destra */}
          <div className="skills-content">
            {/* Ecosistema tecnologico - COLONNA SINISTRA */}
            <ScrollAnimation animation="slideRight" delay={0.2} className="hidden md:block">
              <div className="tech-ecosystem">
                {/* Tracce orbitali con effetto luminoso */}
                <div className="tech-orbit tech-orbit-outer"></div>
                <div className="tech-orbit tech-orbit-inner"></div>
                
                {/* Sfondo centrale raffinato */}
                <div className="tech-center-bg"></div>
                
                {/* Elemento centrale migliorato */}
                <div className="tech-center">
                  <BrainCircuit className="w-10 h-10 text-indigo-400 mb-2" />
                  <span className="tech-center-text">Ecosistema<br/>Tecnologico</span>
                </div>
                
                {/* Orbita esterna - elementi migliorati */}
                <div className="tech-orbit-container">
                  {/* Elemento Nord */}
                  <div className="tech-orbit-item tech-orbit-north">
                    <div className="tech-orbit-item-content tech-orbit-amber">
                      <Workflow className="w-8 h-8 text-amber-400 mb-1" />
                      <span className="tech-orbit-item-text">N8n</span>
                    </div>
                  </div>
                  
                  {/* Elemento Est */}
                  <div className="tech-orbit-item tech-orbit-east">
                    <div className="tech-orbit-item-content tech-orbit-blue">
                      <Layers className="w-8 h-8 text-blue-400 mb-1" />
                      <span className="tech-orbit-item-text">Make</span>
                    </div>
                  </div>
                  
                  {/* Elemento Sud */}
                  <div className="tech-orbit-item tech-orbit-south">
                    <div className="tech-orbit-item-content tech-orbit-cyan">
                      <Code className="w-8 h-8 text-cyan-400 mb-1" />
                      <span className="tech-orbit-item-text">React</span>
                    </div>
                  </div>
                  
                  {/* Elemento Ovest */}
                  <div className="tech-orbit-item tech-orbit-west">
                    <div className="tech-orbit-item-content tech-orbit-violet">
                      <BrainCircuit className="w-8 h-8 text-violet-400 mb-1" />
                      <span className="tech-orbit-item-text">Claude AI</span>
                    </div>
                  </div>
                </div>
                
                {/* Orbita interna - elementi agli angoli */}
                <div className="tech-orbit-container-inner">
                  {/* Elemento Nord-Est */}
                  <div className="tech-orbit-item-inner tech-orbit-northeast">
                    <div className="tech-orbit-item-content tech-orbit-indigo">
                      <Cpu className="w-8 h-8 text-indigo-400 mb-1" />
                      <span className="tech-orbit-item-text">Electron</span>
                    </div>
                  </div>
                  
                  {/* Elemento Sud-Est */}
                  <div className="tech-orbit-item-inner tech-orbit-southeast">
                    <div className="tech-orbit-item-content tech-orbit-green">
                      <Zap className="w-8 h-8 text-green-400 mb-1" />
                      <span className="tech-orbit-item-text">Bolt</span>
                    </div>
                  </div>
                  
                  {/* Elemento Sud-Ovest */}
                  <div className="tech-orbit-item-inner tech-orbit-southwest">
                    <div className="tech-orbit-item-content tech-orbit-blue">
                      <Code className="w-8 h-8 text-blue-400 mb-1" />
                      <span className="tech-orbit-item-text">TypeScript</span>
                    </div>
                  </div>
                  
                  {/* Elemento Nord-Ovest */}
                  <div className="tech-orbit-item-inner tech-orbit-northwest">
                    <div className="tech-orbit-item-content tech-orbit-indigo">
                      <Bot className="w-8 h-8 text-indigo-400 mb-1" />
                      <span className="tech-orbit-item-text">Python</span>
                    </div>
                  </div>
                </div>
                
                {/* Linee di connessione migliorati */}
                <div className="tech-lines">
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
            
            {/* Versione semplificata per mobile dell'Ecosistema tecnologico */}
            <ScrollAnimation animation="slideRight" delay={0.2} className="tech-mobile md:hidden">
              <div className="tech-mobile-icons">
                <div className="tech-mobile-icon tech-mobile-icon-indigo">
                  <BrainCircuit className="w-6 h-6 text-indigo-400" />
                  <span className="tech-mobile-icon-text">Claude AI</span>
                </div>
                
                <div className="tech-mobile-icon tech-mobile-icon-amber">
                  <Workflow className="w-6 h-6 text-amber-400" />
                  <span className="tech-mobile-icon-text">N8n</span>
                </div>
                
                <div className="tech-mobile-icon tech-mobile-icon-blue">
                  <Layers className="w-6 h-6 text-blue-400" />
                  <span className="tech-mobile-icon-text">Make</span>
                </div>
                
                <div className="tech-mobile-icon tech-mobile-icon-cyan">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <span className="tech-mobile-icon-text">React</span>
                </div>
                
                <div className="tech-mobile-icon tech-mobile-icon-green">
                  <Zap className="w-6 h-6 text-green-400" />
                  <span className="tech-mobile-icon-text">Bolt</span>
                </div>
              </div>
              
              <div className="tech-mobile-text">
                <span className="text-sm text-foreground/70">Il nostro ecosistema tecnologico integra strumenti avanzati per soluzioni all'avanguardia</span>
              </div>
            </ScrollAnimation>
            
            {/* Perché siamo all'avanguardia - COLONNA DESTRA */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="advantages-container">
                <h3 className="advantages-heading">Perché siamo all'avanguardia</h3>
                
                <div className="advantages-items">
                  <div className="advantage-item advantage-item-indigo">
                    <h4 className="advantage-title">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Sviluppo 5 volte più veloce
                    </h4>
                    <p className="advantage-description">
                      Mentre lo sviluppo tradizionale richiede 3-6 mesi, il nostro approccio con strumenti no-code e low-code 
                      riduce i tempi a sole 2-4 settimane.
                    </p>
                    <div className="advantage-bar advantage-bar-indigo"></div>
                    <div className="advantage-metric advantage-metric-indigo">500% più veloce</div>
                  </div>
                  
                  <div className="advantage-item advantage-item-violet">
                    <h4 className="advantage-title">
                      <BrainCircuit className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Integrazione AI evoluta
                    </h4>
                    <p className="advantage-description">
                      Mentre la maggior parte delle aziende italiane non sfrutta ancora l'AI, noi integriamo modelli linguistici 
                      avanzati in ogni soluzione.
                    </p>
                    <div className="advantage-bar advantage-bar-violet"></div>
                    <div className="advantage-metric advantage-metric-violet">Generazione 3.0</div>
                  </div>
                  
                  <div className="advantage-item advantage-item-cyan">
                    <h4 className="advantage-title">
                      <Workflow className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Automazione intelligente
                    </h4>
                    <p className="advantage-description">
                      La nostra combinazione di strumenti di automazione come N8n e Make con AI permette di creare flussi di lavoro 
                      completamente autonomi.
                    </p>
                    <div className="advantage-bar advantage-bar-cyan"></div>
                    <div className="advantage-metric advantage-metric-cyan">Processi auto-ottimizzanti</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Recensioni e collaborazioni - con sfondo nero e gradient - ottimizzato per mobile */}
      <section className="reviews-section">
        {/* Background elements migliorati */}
        <div className="reviews-bg-gradient"></div>
        <div className="reviews-bg-blob-1"></div>
        <div className="reviews-bg-blob-2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="reviews-header"
          >
            <span className="reviews-badge">
              La voce dei nostri clienti
            </span>
            <h2 className="reviews-heading">Recensioni e collaborazioni</h2>
            <p className="reviews-subheading">
              Esperienze reali di chi ha trasformato il proprio business con le nostre soluzioni
            </p>
          </motion.div>
          
          {/* Testimonial Cards - Improved glassmorphism and mobile responsive */}
          <div className="testimonials-grid">
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
                className={`testimonial-card testimonial-${testimonial.color}`}
              >
                {/* Stars Rating */}
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`testimonial-star ${i < testimonial.stars ? 'testimonial-star-filled' : 'testimonial-star-empty'}`} 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="testimonial-quote">
                  "{testimonial.quote}"
                </p>
                
                {/* Author info */}
                <div className="testimonial-author">
                  <div className={`testimonial-avatar testimonial-avatar-${testimonial.color}`}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="testimonial-avatar-img" 
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author-name">{testimonial.author}</h4>
                    <p className="testimonial-author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* I nostri servizi - Improved design e ottimizzato per mobile */}
      <section className="services-section">
        <div className="services-bg-gradient"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="services-header"
          >
            <div className="services-badge">
              <span className="services-badge-text">
                Soluzioni & Expertise
              </span>
            </div>
            <h2 className="services-heading">I nostri servizi</h2>
            <p className="services-subheading">
              Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi
            </p>
          </motion.div>
          
          {/* Servizi principali - Enhanced cards with animated hover effects - mobile optimized */}
          <div className="services-grid">
            {[
              {
                id: "ai-agents",
                title: "Agenti AI",
                description: "Sistemi intelligenti autonomi che automatizzano i processi aziendali operando 24/7",
                icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />,
                features: ["Automazione processi", "Integrazione sistemi", "Operatività 24/7"],
                color: "violet",
                link: "/ai-agents",
                bgImage: "https://images.unsplash.com/photo-1677442135968-6d89485dc891?q=80&w=400&auto=format"
              },
              {
                id: "software-pmi",
                title: "Sviluppo Software",
                description: "Soluzioni software personalizzate per trasformare la tua visione in applicazioni concrete",
                icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />,
                features: ["App web responsive", "Software gestionali", "Soluzioni cloud"],
                color: "indigo",
                link: "/software-pmi",
                bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format"
              },
              {
                id: "chatbots",
                title: "Chatbot AI",
                description: "Assistenti virtuali intelligenti che migliorano l'esperienza cliente e automatizzano il supporto",
                icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
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
                className="service-card-wrapper"
              >
                {/* Card with hover reveal effect */}
                <div className="service-card">
                  {/* Background image with overlay */}
                  <div className="service-card-bg">
                    <div className="service-card-overlay"></div>
                    <img 
                      src={service.bgImage} 
                      alt={service.title}
                      className="service-card-img" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="service-card-content">
                    {/* Icon with animated background */}
                    <div className={`service-card-icon service-card-icon-${service.color}`}>
                      <div className={`service-card-icon-bg service-card-icon-bg-${service.color}`}></div>
                      {service.icon}
                    </div>
                    
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                    
                    {/* Features with animated reveal */}
                    <ul className="service-card-features">
                      {service.features.map((feature, i) => (
                        <li key={i} className="service-card-feature">
                          <CheckCircle className={`service-feature-icon service-feature-icon-${service.color}`} />
                          <span className="service-feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Button with hover animation */}
                    <Link 
                      to={service.link}
                      className={`service-card-button service-card-button-${service.color}`}
                    >
                      <span className={`service-button-text service-button-text-${service.color}`}>Scopri di più</span>
                      <ArrowRight className={`service-button-arrow service-button-arrow-${service.color}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Altri servizi - Improved infinite slider for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="other-services"
          >
            <h3 className="other-services-heading">Altri servizi</h3>
            
            <div className="other-services-slider-container">
              {/* Gradient masks for fade effect */}
              <div className="other-services-gradient-left"></div>
              <div className="other-services-gradient-right"></div>
              
              {/* Infinite slider container */}
              <div className="other-services-slider">
                {/* First set of cards */}
                {[
                  {
                    title: "Team di Sviluppo",
                    description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
                    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />,
                    color: "indigo",
                    link: "/developers"
                  },
                  {
                    title: "Piani di Crescita",
                    description: "Strategie di trasformazione digitale per crescita sostenibile",
                    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
                    color: "green",
                    link: "/growth-plans"
                  },
                  {
                    title: "Consulenza AI",
                    description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
                    icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />,
                    color: "violet",
                    link: "/ai-consulting"
                  },
                  {
                    title: "Cloud Services",
                    description: "Infrastrutture scalabili e sicure per le tue applicazioni",
                    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
                    color: "blue",
                    link: "/cloud-services"
                  },
                  {
                    title: "Data Analytics",
                    description: "Analisi dati avanzata per decisioni data-driven",
                    icon: <BarChart className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />,
                    color: "amber",
                    link: "/data-analytics"
                  },
                  {
                    title: "Digital Marketing",
                    description: "Strategie digitali per aumentare la visibilità del tuo brand",
                    icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />,
                    color: "rose",
                    link: "/digital-marketing"
                  }
                ].map((service, index) => (
                  <Link 
                    key={`card-1-${index}`}
                    to={service.link}
                    className={`service-mini-card service-mini-card-${service.color}`}
                  >
                    <div className={`service-mini-icon service-mini-icon-${service.color}`}>
                      {service.icon}
                    </div>
                    
                    <h4 className={`service-mini-title service-mini-title-${service.color}`}>{service.title}</h4>
                    <p className="service-mini-description">{service.description}</p>
                    
                    <div className="service-mini-cta">
                      <span className={`service-mini-cta-text service-mini-cta-text-${service.color}`}>Scopri di più</span>
                      <ArrowRight className={`service-mini-cta-arrow service-mini-cta-arrow-${service.color}`} />
                    </div>
                  </Link>
                ))}
                
                {/* Duplicated set for infinite scrolling */}
                {[
                  {
                    title: "Team di Sviluppo",
                    description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
                    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />,
                    color: "indigo",
                    link: "/developers"
                  },
                  {
                    title: "Piani di Crescita",
                    description: "Strategie di trasformazione digitale per crescita sostenibile",
                    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
                    color: "green",
                    link: "/growth-plans"
                  },
                  {
                    title: "Consulenza AI",
                    description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
                    icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />,
                    color: "violet",
                    link: "/ai-consulting"
                  },
                  {
                    title: "Cloud Services",
                    description: "Infrastrutture scalabili e sicure per le tue applicazioni",
                    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
                    color: "blue",
                    link: "/cloud-services"
                  },
                  {
                    title: "Data Analytics",
                    description: "Analisi dati avanzata per decisioni data-driven",
                    icon: <BarChart className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />,
                    color: "amber",
                    link: "/data-analytics"
                  },
                  {
                    title: "Digital Marketing",
                    description: "Strategie digitali per aumentare la visibilità del tuo brand",
                    icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />,
                    color: "rose",
                    link: "/digital-marketing"
                  }
                ].map((service, index) => (
                  <Link 
                    key={`card-2-${index}`}
                    to={service.link}
                    className={`service-mini-card service-mini-card-${service.color}`}
                  >
                    <div className={`service-mini-icon service-mini-icon-${service.color}`}>
                      {service.icon}
                    </div>
                    
                    <h4 className={`service-mini-title service-mini-title-${service.color}`}>{service.title}</h4>
                    <p className="service-mini-description">{service.description}</p>
                    
                    <div className="service-mini-cta">
                      <span className={`service-mini-cta-text service-mini-cta-text-${service.color}`}>Scopri di più</span>
                      <ArrowRight className={`service-mini-cta-arrow service-mini-cta-arrow-${service.color}`} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with interactive elements - mobile optimized */}
      <section className="cta-section">
        <div className="cta-bg-gradient"></div>
        <div className="cta-bg-blob-1"></div>
        <div className="cta-bg-blob-2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="relative">
            {/* Interactive card with layered effect */}
            <div className="cta-card">
              {/* Animated background */}
              <div className="cta-card-bg"></div>
              
              {/* Animated particles */}
              <div className="cta-particles">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="cta-particle"
                    style={{
                      width: `${2 + Math.random() * 6}px`,
                      height: `${2 + Math.random() * 6}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      opacity: 0.2 + Math.random() * 0.3
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Colorful top border */}
              <div className="cta-card-border"></div>
              
              {/* Content with 3D effect */}
              <div className="cta-content">
                <div className="cta-grid">
                  {/* Left column - Text content */}
                  <div className="cta-text-col">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="cta-badge">
                        <span className="cta-badge-text">
                          Il tuo futuro digitale inizia qui
                        </span>
                      </div>
                      
                      <h2 className="cta-heading">
                        Trasforma le <span className="cta-heading-highlight">idee</span> in <span className="cta-heading-highlight">innovazione</span>
                      </h2>
                      
                      <p className="cta-paragraph">
                        Inizia oggi un percorso personalizzato verso la trasformazione digitale del tuo business, con soluzioni su misura e all'avanguardia.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="cta-actions"
                    >
                      {/* Statistics */}
                      <div className="cta-stats">
                        <div className="cta-stat cta-stat-indigo">
                          <div className="cta-stat-value">+45</div>
                          <div className="cta-stat-label">Progetti completati</div>
                        </div>
                        
                        <div className="cta-stat cta-stat-violet">
                          <div className="cta-stat-value">100%</div>
                          <div className="cta-stat-label">Soddisfazione clienti</div>
                        </div>
                      </div>
                      
                      {/* CTA buttons */}
                      <div className="cta-buttons">
                        <Link
                          to="/contact"
                          className="cta-button-primary"
                        >
                          <span className="font-semibold">Contattaci ora</span>
                          <div className="cta-button-icon-wrapper">
                            <ArrowRight className="cta-button-icon cta-button-icon-visible" />
                            <ArrowRight className="cta-button-icon cta-button-icon-hidden" />
                          </div>
                        </Link>
                        
                        <Link
                          to="/products"
                          className="cta-button-secondary"
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
                    <div className="contact-preview">
                      {/* Gradient accent */}
                      <div className="contact-preview-gradient"></div>
                      
                      <div className="contact-preview-content">
                        <div className="contact-preview-header">
                          <h3 className="contact-preview-title">
                            Iniziamo insieme
                          </h3>
                          <div className="contact-preview-dots">
                            <div className="contact-preview-dot contact-preview-dot-red"></div>
                            <div className="contact-preview-dot contact-preview-dot-yellow"></div>
                            <div className="contact-preview-dot contact-preview-dot-green"></div>
                          </div>
                        </div>
                        
                        <div className="contact-preview-body">
                          <h3 className="contact-preview-title-inner">
                            Iniziamo insieme
                          </h3>
                          
                          {/* Info di contatto */}
                          <div className="contact-preview-info">
                            <div className="contact-info-item contact-info-item-indigo">
                              <div className="contact-info-icon-wrapper">
                                <Phone className="contact-info-icon" />
                              </div>
                              <div>
                                <div className="contact-info-label">Chiamaci</div>
                                <a href="tel:+390212345678" className="contact-info-value">+39 02 1234 5678</a>
                              </div>
                            </div>
                            
                            <div className="contact-info-item contact-info-item-violet">
                              <div className="contact-info-icon-wrapper contact-info-icon-wrapper-violet">
                                <Mail className="contact-info-icon" />
                              </div>
                              <div>
                                <div className="contact-info-label">Scrivici</div>
                                <a href="mailto:biorigeneralinformatics@gmail.com" className="contact-info-value">biorigeneralinformatics@gmail.com</a>
                              </div>
                            </div>
                          </div>
                          
                          {/* Grande bottone che rimanda alla pagina contatti */}
                          <Link 
                            to="/contact"
                            className="contact-cta-button"
                          >
                            <span className="contact-cta-text">
                              <MessageSquare className="contact-cta-icon" /> 
Vai alla pagina contatti
                            </span>
                            
                            <div className="contact-cta-gradient">
                              <div className="contact-cta-gradient-bg"></div>
                              <div className="contact-cta-gradient-wave"></div>
                            </div>
                            <div className="contact-cta-arrow-wrapper">
                              <ArrowRight className="contact-cta-arrow" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="cta-deco-circle-1"></div>
            <div className="cta-deco-circle-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
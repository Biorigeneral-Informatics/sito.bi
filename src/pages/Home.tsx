// src/pages/Home.tsx - Versione migliorata
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Bot, Shield, Globe, Database, Layers, ChevronRight } from 'lucide-react';
import ParallaxEffect from '../components/ParallaxEffect';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

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
        <div className="container mx-auto px-6 lg:px-12 z-10 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-8 hero-element">
                  <span className="block">Oltre il codice,</span>
                  <span className="text-gradient">verso l'intelligenza</span>
                  <span className="block">che crea valore.</span>
                </h1>
                
                <p className="text-xl text-foreground/80 mb-10 max-w-xl hero-element leading-relaxed">
                  AI Agency e Software Engineering, forniamo soluzioni IT avanzate alle aziende Italiane.
                </p>
                
                <div className="flex flex-wrap gap-5 hero-element">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-primary/30"
                  >
                    Inizia Ora <ArrowRight className="inline ml-2" />
                  </Link>
                  
                  <Link
                    to="/services"
                    className="px-8 py-4 border border-primary/40 text-foreground hover:bg-primary/10 rounded-lg transition-all"
                  >
                    Esplora Soluzioni
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <ParallaxEffect speed={0.1} direction="down">
              <div className="relative hero-visual flex justify-center">
                <div className="hero-element absolute w-72 h-72 rounded-full bg-indigo-500/30 filter blur-3xl top-10 -left-10 animate-pulse"></div>
                <div className="hero-element absolute w-96 h-96 rounded-full bg-violet-500/30 filter blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="hero-element relative z-10 glass rounded-2xl p-8 shadow-xl transform rotate-3">
                  <Code className="w-16 h-16 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Sviluppo Software</h3>
                  <p className="text-foreground/70">Soluzioni personalizzate per le tue esigenze</p>
                </div>
                
                <div className="hero-element relative z-10 glass rounded-2xl p-8 shadow-xl transform -rotate-3 -translate-y-12 translate-x-24">
                  <Bot className="w-16 h-16 text-violet-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Intelligenza Artificiale</h3>
                  <p className="text-foreground/70">Agenti, Chatbot e Consulenza</p>
                </div>
                
                <div className="hero-element relative z-10 glass rounded-2xl p-8 shadow-xl transform rotate-6 translate-y-16 -translate-x-20">
                  <Globe className="w-16 h-16 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Asset Digitali</h3>
                  <p className="text-foreground/70">Infrastrutture scalabili e sicure</p>
                </div>
              </div>
            </ParallaxEffect>
          </div>
        </div>
        
        {/* Decorative Elements - più definiti */}
        <div className="absolute top-1/3 left-10 w-24 h-24 rounded-full border border-indigo-400/30 opacity-70 hero-element"></div>
        <div className="absolute bottom-1/4 right-16 w-16 h-16 rounded-full border border-violet-400/30 opacity-70 hero-element"></div>
        <div className="absolute top-1/4 right-1/3 w-10 h-10 rounded-full bg-indigo-500/20 opacity-70 hero-element"></div>
      </section>
      
      {/* Solutions Section - più spazio tra gli elementi */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Le Nostre Soluzioni</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Offriamo un ecosistema completo di servizi tecnologici per affrontare qualsiasi sfida digitale
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Sviluppo Software",
                description: "Applicazioni web e mobile personalizzate con tecnologie moderne e scalabili",
                icon: <Code className="w-14 h-14 text-blue-400" />,
                features: ["React & TypeScript", "Node.js", "API RESTful", "Architetture Cloud"],
                link: "/services",
                color: "blue"
              },
              {
                title: "Intelligenza Artificiale",
                description: "Soluzioni AI per ottimizzare processi e scoprire insights dai tuoi dati",
                icon: <Cpu className="w-14 h-14 text-violet-400" />,
                features: ["Machine Learning", "Analisi predittiva", "Natural Language Processing", "Computer Vision"],
                link: "/ai-agents",
                color: "violet"
              },
              {
                title: "Chatbot Avanzati",
                description: "Assistenti virtuali intelligenti per migliorare l'esperienza cliente",
                icon: <Bot className="w-14 h-14 text-cyan-400" />,
                features: ["Comprensione del linguaggio", "Integrazione multichannel", "Personalizzazione", "Analytics"],
                link: "/chatbots",
                color: "cyan"
              }
            ].map((solution, index) => (
              <ScrollAnimation 
                key={index}
                animation="slideUp"
                delay={0.2 * index}
                className="h-full"
              >
                <div className={`glass p-10 rounded-2xl h-full flex flex-col relative overflow-hidden`}>
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-${solution.color}-500/10 filter blur-xl`}></div>
                  <div className="relative z-10">
                    <div className="mb-8">{solution.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-foreground/70 mb-8 flex-grow">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${solution.color}-400 mr-2`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={solution.link} 
                      className={`inline-flex items-center mt-auto text-${solution.color}-400 hover:text-${solution.color}-300 transition-colors`}
                    >
                      Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capabilities Section - sostituisce "Il Nostro Processo" */}
      <section className="py-20 relative overflow-hidden">
        <ParallaxEffect speed={0.05} direction="right" className="absolute -right-32 top-20 w-96 h-96">
          <div className="w-full h-full rounded-full bg-indigo-500/20 filter blur-3xl"></div>
        </ParallaxEffect>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
                        <span key={i}>★</span>
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
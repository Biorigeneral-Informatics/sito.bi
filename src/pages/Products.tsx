// src/pages/Products.tsx - Versione completamente restyled
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Bot, 
  BrainCircuit, 
  ArrowRight, 
  Server, 
  Database, 
  Shield, 
  AppWindow, 
  ChevronRight, 
  ExternalLink, 
  Laptop,
  Zap,
  Globe,
  Cloud,
  CheckCircle,
  Star
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Products = () => {
  // State per tenere traccia del prodotto selezionato nella sezione interattiva
  const [activeProduct, setActiveProduct] = useState(0);
  const productsRef = useRef<HTMLDivElement>(null);
  
  // Prodotti principali con dati estesi
  const featuredProducts = [
    {
      id: 'bioriagent',
      title: 'BioriAgent',
      description: 'Una piattaforma per la creazione e gestione di agenti AI personalizzati per l\'automazione di flussi di lavoro aziendali.',
      icon: <BrainCircuit className="w-14 h-14 text-indigo-400" />,
      features: [
        'Interfaccia drag-and-drop',
        'Integrazioni con strumenti aziendali',
        'Automazione dei processi',
        'Analisi dati in tempo reale'
      ],
      benefits: [
        {
          title: 'Risparmio di tempo',
          value: '65%',
          description: 'Riduzione nel tempo dedicato alle attività manuali'
        },
        {
          title: 'ROI',
          value: '4.5x',
          description: 'Ritorno sull investimento medio nel primo anno'
        }
      ],
      technologies: ['OpenAI API', 'LangChain', 'N8n', 'Typescript', 'NodeJS'],
      bgColor: 'from-indigo-500/20 to-purple-500/20',
      image: 'https://images.unsplash.com/photo-1577760258634-618422a84fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: '#demo-bioriagent'
    },
    {
      id: 'bioritalk',
      title: 'BioriTalk',
      description: 'Chatbot avanzati con comprensione del linguaggio naturale per customer support e assistenza interna.',
      icon: <Bot className="w-14 h-14 text-violet-400" />,
      features: [
        'Comprensione contestuale',
        'Multilingue',
        'Integrabile in siti web e app',
        'Personalizzazione avanzata'
      ],
      benefits: [
        {
          title: 'Risoluzione automatica',
          value: '70%',
          description: 'Delle richieste cliente gestite senza intervento umano'
        },
        {
          title: 'Disponibilità',
          value: '24/7',
          description: 'Servizio clienti ininterrotto tutto l anno'
        }
      ],
      technologies: ['Claude API', 'WhatsApp Business API', 'React', 'NextJS', 'MongoDB'],
      bgColor: 'from-violet-500/20 to-pink-500/20',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: '#demo-bioritalk'
    },
    {
      id: 'bioripmi',
      title: 'BioriPMI',
      description: 'Suite di applicazioni gestionali modulari e scalabili per piccole e medie imprese.',
      icon: <Code className="w-14 h-14 text-blue-400" />,
      features: [
        'CRM integrato',
        'Gestione progetti',
        'Fatturazione',
        'Business intelligence'
      ],
      benefits: [
        {
          title: 'Efficienza operativa',
          value: '+42%',
          description: 'Incremento nell efficienza dei processi aziendali'
        },
        {
          title: 'Costo',
          value: '-35%',
          description: 'Rispetto alle soluzioni tradizionali sul mercato'
        }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: '#demo-bioripmi'
    }
  ];

  // Prodotti secondari con dati estesi
  const secondaryProducts = [
    {
      title: 'BioriBackup',
      description: 'Sistema di backup e disaster recovery automatizzato con protezione dati avanzata',
      icon: <Server className="w-10 h-10 text-teal-400" />,
      highlights: ['Backup incrementali', 'Ripristino rapido', 'Crittografia end-to-end'],
      color: 'teal'
    },
    {
      title: 'BioriData',
      description: 'Gestione e analisi dati con intelligence integrata per decisioni basate sui dati',
      icon: <Database className="w-10 h-10 text-amber-400" />,
      highlights: ['Visualizzazioni interattive', 'Modelli predittivi', 'ETL automatizzato'],
      color: 'amber'
    },
    {
      title: 'BioriSec',
      description: 'Soluzioni complete per la sicurezza informatica aziendale contro le minacce moderne',
      icon: <Shield className="w-10 h-10 text-red-400" />,
      highlights: ['Monitoraggio 24/7', 'Protezione avanzata', 'Conformità GDPR'],
      color: 'red'
    },
    {
      title: 'BioriApp',
      description: 'Sviluppo di applicazioni mobile native per iOS e Android con esperienza utente eccezionale',
      icon: <AppWindow className="w-10 h-10 text-green-400" />,
      highlights: ['UX/UI personalizzato', 'Integrazione backend', 'Pubblicazione store'],
      color: 'green'
    }
  ];

  // Testimonianze di clienti
  const testimonials = [
    {
      quote: "BioriAgent ci ha permesso di automatizzare il 70% dei processi amministrativi. Il team ha dimostrato una competenza eccezionale.",
      author: "Martina Bianchi",
      role: "CEO, TechNovel Srl",
      productId: "bioriagent",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "BioriTalk ha trasformato il nostro customer service. L'implementazione è stata rapida e i risultati immediati.",
      author: "Andrea Rossi",
      role: "CTO, EcommerceHub",
      productId: "bioritalk",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "Il passaggio a BioriPMI ha semplificato tutti i nostri processi aziendali, con un'interfaccia che anche i meno esperti possono utilizzare.",
      author: "Laura Verdi",
      role: "COO, InnovateSolutions",
      productId: "bioripmi",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4
    }
  ];

  // Effetto parallasse sullo scroll per gli elementi di background
  useEffect(() => {
    const handleScroll = () => {
      if (productsRef.current) {
        const elements = productsRef.current.querySelectorAll('.parallax-bg');
        elements.forEach((el) => {
          const speed = el.getAttribute('data-speed') || '0.1';
          const yPos = -(window.scrollY * parseFloat(speed));
          (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-16 overflow-x-hidden" ref={productsRef}>
      {/* Hero Section con effetto parallasse */}
      <div className="relative">
        {/* Background elements con effetto parallasse */}
        <div className="absolute top-0 -left-64 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl parallax-bg" data-speed="0.2"></div>
        <div className="absolute top-48 -right-64 w-96 h-96 rounded-full bg-violet-500/10 filter blur-3xl parallax-bg" data-speed="0.15"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Soluzioni all'avanguardia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block mb-2">I Nostri Prodotti</span>
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent inline-block">
                Per la tua trasformazione digitale
              </span>
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Soluzioni tecnologiche innovative progettate per accelerare la trasformazione digitale della tua azienda
            </p>
          </motion.div>
          
          {/* Statistics counters */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-4 rounded-xl border border-indigo-500/20 w-48 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">45+</div>
              <p className="text-foreground/70 text-sm">Progetti completati</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-4 rounded-xl border border-indigo-500/20 w-48 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">32%</div>
              <p className="text-foreground/70 text-sm">ROI medio</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass p-4 rounded-xl border border-indigo-500/20 w-48 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">24/7</div>
              <p className="text-foreground/70 text-sm">Supporto e assistenza</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products - Interactive Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <ScrollAnimation animation="fadeIn" className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Prodotti di Punta</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Le nostre soluzioni principali sono progettate per la massima efficienza, flessibilità e scalabilità
            </p>
          </div>
        </ScrollAnimation>
        
        {/* Interactive Product Selector */}
        <div className="flex justify-center gap-4 mb-10">
          {featuredProducts.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeProduct === index
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>
        
        {/* Product Detail Display with Animation */}
        <ScrollAnimation animation="fadeIn">
          <div className="glass rounded-2xl overflow-hidden shadow-xl">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={false}
                animate={{ 
                  opacity: activeProduct === index ? 1 : 0,
                  x: activeProduct === index ? 0 : activeProduct > index ? -20 : 20 
                }}
                transition={{ duration: 0.4 }}
                className={`grid md:grid-cols-2 ${activeProduct !== index ? 'hidden' : ''}`}
              >
                {/* Image Section */}
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgColor} opacity-30`}></div>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 glass py-1 px-3 rounded-full text-sm border border-white/10">
                    Prodotto Premium
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${product.bgColor} mr-4`}>
                        {product.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{product.title}</h2>
                    </div>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="glass p-3 rounded-lg border border-white/5">
                          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            {benefit.value}
                          </div>
                          <div className="font-medium text-sm">{benefit.title}</div>
                          <div className="text-xs text-foreground/60">{benefit.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Caratteristiche principali:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-foreground/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
                      >
                        Scopri di più <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      
                      <a
                        href={product.demoUrl}
                        className="inline-flex items-center px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
                      >
                        Demo <ExternalLink className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
        
        {/* Testimonials Carousel */}
        <div className="mt-12">
          <ScrollAnimation animation="fadeIn">
            <div className="glass p-6 rounded-2xl border border-indigo-500/20">
              <h3 className="text-xl font-bold mb-6 text-center">I nostri clienti dicono di noi</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-5 glass rounded-xl border border-white/5 hover:border-indigo-500/20 transition-all">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-foreground/20'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 italic mb-4 text-sm">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-foreground/60 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Additional Products Grid - Design interattivo */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <ScrollAnimation animation="slideUp" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 text-center">Altri Prodotti</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProducts.map((product, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl hover:translate-y-[-5px] transition-transform shadow-lg border border-foreground/5 hover:border-primary/20"
              >
                <div className={`w-14 h-14 rounded-lg bg-${product.color}-500/10 flex items-center justify-center mb-4`}>
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}-400 mr-2`}></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="text-primary hover:underline inline-flex items-center text-sm mt-auto"
                >
                  Richiedi informazioni <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>
      
      {/* Ecosystem Section - Mostra come i prodotti si integrano */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <ScrollAnimation animation="fadeIn">
          <div className="glass p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Un ecosistema completo</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto mb-12">
              I nostri prodotti sono progettati per funzionare insieme, creando un ecosistema digitale completo per la tua azienda
            </p>
            
            <div className="relative h-80 md:h-96">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center shadow-xl z-20">
                  <div className="text-white text-lg font-bold">Ecosistema<br/>Biori</div>
                </div>
              </div>
              
              {/* Orbiting product nodes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-indigo-500/30">
                  <BrainCircuit className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 font-medium text-sm">BioriAgent</div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-violet-500/30">
                  <Bot className="w-8 h-8 text-violet-400" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 font-medium text-sm">BioriTalk</div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-blue-500/30">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 font-medium text-sm">BioriPMI</div>
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-emerald-500/30">
                  <Database className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 font-medium text-sm">BioriData</div>
              </div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                
                {/* Lines connecting to center */}
                <line x1="200" y1="100" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="300" y1="200" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="300" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="100" y1="200" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Outer circle */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#line-gradient)" strokeWidth="1" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn" delay={0.4}>
        <div className="glass p-10 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Non trovi ciò che stai cercando?</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Ogni azienda ha esigenze uniche. Possiamo sviluppare soluzioni software personalizzate per il tuo business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
              >
                Contattaci <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services/software-pmi"
                className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
              >
                Esplora Servizi
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Products;
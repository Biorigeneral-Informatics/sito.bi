// src/pages/Products.tsx - Versione radicalmente riprogettata
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Bot, BrainCircuit, CheckCircle, Code, Database,
  Globe, ExternalLink, Laptop, Shield, Zap, Star,
  ArrowUpRight, Rocket, GitMerge, BarChart, Smartphone,
  Phone,
  Mail
} from 'lucide-react';
import React from 'react';

const Products = () => {
  // Refs e stati
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Gestione movimento mouse per effetti interattivi
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prodotti principali
  const mainProducts = [
    {
      id: 'ai-agents',
      title: 'Agenti AI',
      subtitle: 'BioriAgent',
      description: 'Automazione intelligente per i processi aziendali con agenti AI che operano 24/7, imparano e si adattano alle tue esigenze specifiche.',
      icon: <BrainCircuit />,
      features: [
        'Automazione completa dei flussi di lavoro ripetitivi',
        'Integrazione nativa con i tuoi strumenti aziendali',
        'Machine learning adattivo per miglioramento continuo',
        'Analisi dati in tempo reale e suggerimenti strategici'
      ],
      stats: [
        { label: 'Efficienza', value: '+65%' },
        { label: 'Tempo risparmiato', value: '120h/mese' },
        { label: 'ROI medio', value: '4.2x' }
      ],
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1677442135968-6d89485dc891?q=80&w=800'
    },
    {
      id: 'chatbots',
      title: 'Chatbot AI',
      subtitle: 'BioriTalk',
      description: 'Assistenti conversazionali avanzati potenziati da intelligenza artificiale per un servizio clienti superiore disponibile 24/7.',
      icon: <Bot />,
      features: [
        'Comprensione avanzata del linguaggio naturale',
        'Personalizzazione completa dell\'esperienza conversazionale',
        'Apprendimento continuo dalle interazioni passate',
        'Integrazione multipiattaforma (web, mobile, social)'
      ],
      stats: [
        { label: 'Risoluzione automatica', value: '78%' },
        { label: 'Disponibilità', value: '24/7' },
        { label: 'Lingue supportate', value: '24+' }
      ],
      color: 'violet',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800'
    },
    {
      id: 'software-pmi',
      title: 'Software Business',
      subtitle: 'BioriPMI',
      description: 'Suite completa di applicazioni gestionali su misura per piccole e medie imprese, con funzionalità avanzate e interfaccia intuitiva.',
      icon: <Code />,
      features: [
        'Dashboard personalizzabili con KPI in tempo reale',
        'CRM integrato con automazione marketing e vendite',
        'Gestione progetti e risorse con timeline intelligenti',
        'Fatturazione elettronica e integrazione fiscale'
      ],
      stats: [
        { label: 'Produttività', value: '+42%' },
        { label: 'Costi operativi', value: '-35%' },
        { label: 'Tempo implementazione', value: '2-4 settimane' }
      ],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800'
    }
  ];

  // Prodotti secondari per la visualizzazione a griglia
  const secondaryProducts = [
    {
      id: 'bioridata',
      title: 'BioriData',
      description: 'Piattaforma di analisi dati con dashboard interattivi e insights predittivi in tempo reale.',
      icon: <Database />,
      features: ['Business Intelligence', 'Analisi predittiva', 'Visualizzazioni interattive'],
      color: 'amber'
    },
    {
      id: 'biorisec',
      title: 'BioriSec',
      description: 'Soluzioni di sicurezza informatica avanzate per proteggere i tuoi dati e sistemi dalle minacce moderne.',
      icon: <Shield />,
      features: ['Monitoraggio 24/7', 'Protezione avanzata', 'Conformità GDPR'],
      color: 'red'
    },
    {
      id: 'bioriapps',
      title: 'BioriApps',
      description: 'Sviluppo di applicazioni mobile native per iOS e Android con esperienza utente superiore.',
      icon: <Smartphone />,
      features: ['UX/UI personalizzato', 'Integrazione backend', 'Pubblicazione store'],
      color: 'green'
    },
    {
      id: 'bioricloud',
      title: 'BioriCloud',
      description: 'Infrastrutture cloud scalabili e sicure per ospitare le tue applicazioni e servizi.',
      icon: <Globe />,
      features: ['Scalabilità automatica', 'Backup continui', 'Alta disponibilità'],
      color: 'sky'
    }
  ];

  // Vantaggi innovativi rispetto alla concorrenza
  const innovations = [
    {
      title: "Sviluppo 5x più veloce",
      description: "Il nostro approccio AI-first accelera drasticamente i tempi di sviluppo",
      traditional: "3-6 mesi",
      biori: "2-4 settimane",
      icon: <Rocket />,
      color: "indigo"
    },
    {
      title: "Integrazione AI nativa",
      description: "Ogni soluzione include intelligenza artificiale integrata",
      traditional: "Funzionalità basilari",
      biori: "AI generativa avanzata",
      icon: <BrainCircuit />,
      color: "violet"
    },
    {
      title: "Architettura componibile",
      description: "Sistema modulare che cresce con le tue esigenze senza rifattorizzazioni",
      traditional: "Sistemi monolitici",
      biori: "Microservizi scalabili",
      icon: <GitMerge />,
      color: "blue"
    },
    {
      title: "Insights in tempo reale",
      description: "Analisi dati continua per decisioni aziendali più informate",
      traditional: "Report mensili",
      biori: "Dashboard real-time",
      icon: <BarChart />,
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
      {/* Hero Section con effetti visivi avanzati */}
      <section className="relative mb-20 overflow-hidden">
        {/* Background elements animati */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1), transparent 60%)`
            }}
          />
        </div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Ecosistema Prodotti
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block mb-2">Soluzioni innovative</span>
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                per accelerare la tua crescita
              </span>
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Un ecosistema completo di prodotti progettati per trasformare il tuo business
              attraverso intelligenza artificiale, automazione e analisi avanzata
            </p>
          </motion.div>
          
          {/* Statistiche con effetto gradiente */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: "45+", label: "Progetti completati", color: "from-indigo-400 to-blue-400" },
              { value: "32%", label: "ROI medio", color: "from-violet-400 to-purple-400" },
              { value: "24/7", label: "Supporto e assistenza", color: "from-cyan-400 to-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="glass p-4 rounded-xl border border-indigo-500/20 text-center hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Prodotti principali - Tab view innovativa */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prodotti di punta</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Soluzioni all'avanguardia che combinano AI e competenze tecniche per trasformare il tuo business
          </p>
        </div>
        
        {/* Tabs di navigazione con indicatore animato */}
        <div className="flex justify-center mb-6 relative">
          <div className="glass px-1 py-1 rounded-full border border-indigo-500/20 inline-flex">
            {mainProducts.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-5 py-2 rounded-full transition-all duration-300 z-10 ${
                  activeTab === index ? 'text-white' : 'hover:bg-foreground/5'
                }`}
              >
                {product.title}
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute inset-0 bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 rounded-full`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Contenuti prodotti con animazione */}
        <div className="relative min-h-[600px]">
          {mainProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeTab === index ? 1 : 0,
                x: activeTab === index ? 0 : 20,
                zIndex: activeTab === index ? 1 : 0
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 ${activeTab !== index ? 'pointer-events-none' : ''}`}
            >
              <div className="glass rounded-2xl overflow-hidden border border-indigo-500/20 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Colonna sinistra - Dettagli prodotto */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-${product.color}-500/20 mr-4`}>
                        {React.cloneElement(product.icon, { className: `w-8 h-8 text-${product.color}-400` })}
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r from-${product.color}-400 to-${product.color}-500 bg-clip-text text-transparent`}>
                          {product.subtitle}
                        </h3>
                        <p className="text-foreground/60 text-sm">{product.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-6">{product.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Caratteristiche principali</h4>
                      <div className="space-y-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 text-${product.color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                            <span className="text-foreground/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Statistiche orizzontali */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {product.stats.map((stat, i) => (
                        <div key={i} className={`p-3 rounded-lg glass border border-${product.color}-500/20`}>
                          <div className={`text-xl font-bold text-${product.color}-500`}>{stat.value}</div>
                          <div className="text-xs text-foreground/60">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto flex space-x-4">
                      <Link 
                        to={`/products/${product.id}`}
                        className={`px-5 py-2 bg-${product.color}-500 hover:bg-${product.color}-600 text-white rounded-lg flex items-center transition-all hover:shadow-lg hover:shadow-${product.color}-500/20`}
                      >
                        Scopri di più <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      
                      <Link 
                        to="/contact"
                        className="px-5 py-2 glass border border-foreground/20 hover:border-foreground/40 rounded-lg flex items-center transition-all"
                      >
                        Richiedi demo <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Colonna destra - Immagine con overlay */}
                  <div className="relative h-full overflow-hidden">
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${product.color}-500/30 to-background/80 z-10`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
                    
                    {/* Immagine di background */}
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Badge in sovrapposizione */}
                    <div className="absolute top-8 right-8 z-20">
                      <div className={`px-3 py-1 rounded-lg bg-${product.color}-500/80 backdrop-blur-sm text-white text-xs font-medium`}>
                        Prodotto Premium
                      </div>
                    </div>
                    
                    {/* Testimonianza in overlay */}
                    <div className="absolute bottom-8 right-8 max-w-xs z-20">
                      <div className="glass p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-white text-xs italic mb-2">
                          "Questo prodotto ha trasformato completamente il nostro modo di lavorare. Efficienza aumentata del 40% in soli due mesi."
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-xs font-medium">Marco R.</span>
                          <span className="text-white/60 text-xs">CTO, TechVision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Sezione prodotti secondari - Design a griglia con effetti 3D */}
      <section className="container mx-auto px-6 mb-24 relative overflow-hidden">
        {/* Background elements interattivi */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-indigo-500/5"
          style={{
            filter: 'blur(100px)',
            opacity: 0.5,
            transform: `translate(calc(-50% + ${(mousePosition.x - 0.5) * 30}px), calc(-50% + ${(mousePosition.y - 0.5) * 30}px))`
          }}
        />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Soluzioni complementari</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Completa il tuo ecosistema digitale con le nostre soluzioni aggiuntive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {secondaryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="relative group"
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div 
                className={`glass p-6 rounded-xl border border-${product.color}-500/20 h-full transition-all duration-300 relative z-10 overflow-hidden ${
                  hoverCard === index ? `border-${product.color}-500/50 shadow-lg shadow-${product.color}-500/20` : ''
                }`}
                style={{
                  transform: hoverCard === index 
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)` 
                    : 'perspective(1000px) rotateX(0) rotateY(0)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Background glow effect on hover */}
                <div 
                  className={`absolute -inset-px bg-gradient-to-br from-${product.color}-500/0 to-${product.color}-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10`}
                />
                
                <div 
                  className={`w-12 h-12 rounded-xl bg-${product.color}-500/20 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoverCard === index ? 'scale-110' : ''
                  }`}
                >
                  {React.cloneElement(product.icon, { className: `w-6 h-6 text-${product.color}-400` })}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:translate-y-0 transition-transform">
                  {product.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-sm">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}-400 mr-2`} />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/products/${product.id}`}
                  className={`inline-flex items-center text-${product.color}-500 text-sm font-medium transition-all group-hover:translate-x-1`}
                >
                  Scopri di più <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Sezione Vantaggi Comparativi - Layout moderno a 2 colonne */}
      <section className="container mx-auto px-6 mb-24">
        <div className="glass rounded-2xl p-8 md:p-10 border border-indigo-500/20 overflow-hidden relative">
          {/* Accent line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" />
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-bold mb-4">Perché scegliere Biori</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Un approccio rivoluzionario che ci distingue dalle soluzioni tradizionali
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            {/* Colonna sinistra - Lista innovazioni */}
            <div className="space-y-6">
              {innovations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className={`glass p-5 rounded-xl border border-${item.color}-500/20 hover:border-${item.color}-500/40 transition-all group relative overflow-hidden`}
                >
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/0 to-${item.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10`} />
                  
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg bg-${item.color}-500/20 mr-4`}>
                      {React.cloneElement(item.icon, { className: `w-5 h-5 text-${item.color}-400` })}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-foreground/60 text-sm mb-3">{item.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <span className="text-foreground/50">Standard:</span>
                          <span className="px-2 py-0.5 rounded bg-foreground/10 text-foreground/60 line-through">
                            {item.traditional}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <span className="text-foreground/50">Biori:</span>
                          <span className={`px-2 py-0.5 rounded bg-${item.color}-500/20 text-${item.color}-500 font-medium`}>
                            {item.biori}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Colonna destra - Immagine ecosistema e callout */}
            <div className="flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-6"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-3xl filter blur-xl" />
                
                <img 
                  src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=1470&auto=format&fit=crop"
                  alt="Ecosistema tecnologico" 
                  className="rounded-xl relative z-10 md:max-w-md w-full h-64 object-cover object-center"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass p-6 rounded-xl border border-indigo-500/20 max-w-md"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-amber-500 mr-2" />
                  Sviluppo 5 volte più veloce
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Grazie all'integrazione dell'intelligenza artificiale nel nostro processo di sviluppo, 
                  realizziamo le soluzioni in una frazione del tempo richiesto dai metodi tradizionali, garantendo risultati superiori.
                </p>
                
                <div className="flex space-x-2">
                  <div className="px-2 py-0.5 bg-indigo-500/20 rounded text-xs">AI Integration</div>
                  <div className="px-2 py-0.5 bg-violet-500/20 rounded text-xs">Sviluppo Rapido</div>
                  <div className="px-2 py-0.5 bg-blue-500/20 rounded text-xs">Costi Ridotti</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-indigo-500/20 opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-violet-500/20 opacity-50" />
        </div>
      </section>
      
      {/* Sezione Ecosistema - Visualizzazione interattiva */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Un ecosistema completo</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I nostri prodotti sono progettati per funzionare insieme in perfetta sinergia,
            creando un ambiente digitale integrato per il tuo business
          </p>
        </div>
        
        <div className="glass rounded-2xl p-8 border border-indigo-500/20 overflow-hidden">
          <div className="relative h-[400px] md:h-[500px]">
            {/* Elemento centrale */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                className="glass w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 25px -5px rgba(99, 102, 241, 0.1)", 
                    "0 20px 30px -10px rgba(99, 102, 241, 0.2)", 
                    "0 10px 25px -5px rgba(99, 102, 241, 0.1)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <BrainCircuit className="w-10 h-10 text-indigo-400 mx-auto mb-1" />
                  <div className="font-bold text-sm">Ecosistema<br/>Biori</div>
                </div>
              </motion.div>
            </div>
            
            {/* Orbita esterna */}
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/20" style={{ animationName: 'rotate', animationDuration: '60s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
              {/* Nodo Nord */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationName: 'counter-rotate', animationDuration: '60s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-20 h-20 rounded-full flex flex-col items-center justify-center border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5">
                  <BrainCircuit className="w-7 h-7 text-indigo-400 mb-1" />
                  <span className="text-[10px] font-medium">BioriAgent</span>
                </div>
              </div>
              
              {/* Nodo Est */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2" style={{ animationName: 'counter-rotate', animationDuration: '60s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-20 h-20 rounded-full flex flex-col items-center justify-center border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-violet-500/5">
                  <Bot className="w-7 h-7 text-violet-400 mb-1" />
                  <span className="text-[10px] font-medium">BioriTalk</span>
                </div>
              </div>
              
              {/* Nodo Sud */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" style={{ animationName: 'counter-rotate', animationDuration: '60s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-20 h-20 rounded-full flex flex-col items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                  <Code className="w-7 h-7 text-blue-400 mb-1" />
                  <span className="text-[10px] font-medium">BioriPMI</span>
                </div>
              </div>
              
              {/* Nodo Ovest */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" style={{ animationName: 'counter-rotate', animationDuration: '60s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-20 h-20 rounded-full flex flex-col items-center justify-center border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-500/5">
                  <Database className="w-7 h-7 text-amber-400 mb-1" />
                  <span className="text-[10px] font-medium">BioriData</span>
                </div>
              </div>
            </div>
            
            {/* Orbita interna */}
            <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20" style={{ animationName: 'rotate-reverse', animationDuration: '45s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
              {/* Nodo NE */}
              <div className="absolute top-[15%] right-[15%]" style={{ animationName: 'counter-rotate-reverse', animationDuration: '45s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-16 h-16 rounded-full flex flex-col items-center justify-center border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-500/5">
                  <Laptop className="w-6 h-6 text-green-400 mb-1" />
                  <span className="text-[9px] font-medium">BioriApps</span>
                </div>
              </div>
              
              {/* Nodo SE */}
              <div className="absolute bottom-[15%] right-[15%]" style={{ animationName: 'counter-rotate-reverse', animationDuration: '45s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-16 h-16 rounded-full flex flex-col items-center justify-center border border-red-500/30 bg-gradient-to-br from-red-500/20 to-red-500/5">
                  <Shield className="w-6 h-6 text-red-400 mb-1" />
                  <span className="text-[9px] font-medium">BioriSec</span>
                </div>
              </div>
              
              {/* Nodo SO */}
              <div className="absolute bottom-[15%] left-[15%]" style={{ animationName: 'counter-rotate-reverse', animationDuration: '45s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-16 h-16 rounded-full flex flex-col items-center justify-center border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-sky-500/5">
                  <Globe className="w-6 h-6 text-sky-400 mb-1" />
                  <span className="text-[9px] font-medium">BioriCloud</span>
                </div>
              </div>
              
              {/* Nodo NO */}
              <div className="absolute top-[15%] left-[15%]" style={{ animationName: 'counter-rotate-reverse', animationDuration: '45s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                <div className="glass p-3 w-16 h-16 rounded-full flex flex-col items-center justify-center border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5">
                  <BarChart className="w-6 h-6 text-emerald-400 mb-1" />
                  <span className="text-[9px] font-medium">BioriBI</span>
                </div>
              </div>
            </div>
            
            {/* Connessioni tra elementi */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              
              {/* Linee dall'elemento centrale verso nodi esterni */}
              <line x1="250" y1="250" x2="250" y2="50" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="450" y2="250" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="250" y2="450" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="50" y2="250" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Linee dall'elemento centrale verso nodi interni */}
              <line x1="250" y1="250" x2="325" y2="175" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="325" y2="325" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="175" y2="325" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="250" x2="175" y2="175" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I nostri prodotti si integrano perfettamente tra loro, creando un ecosistema digitale
              completo che ottimizza ogni aspetto del tuo business
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-blue-500/20 rounded-3xl filter blur-xl" />
          
          <div className="glass p-10 rounded-2xl border border-indigo-500/20 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Pronto a trasformare il tuo business?</h2>
                <p className="text-foreground/70 mb-8">
                  Scopri come le nostre soluzioni possono ottimizzare i tuoi processi, 
                  aumentare l'efficienza e accelerare la crescita del tuo business
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center"
                  >
                    Contattaci <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  
                  <Link
                    to="/services"
                    className="px-6 py-3 glass border border-indigo-500/30 hover:border-indigo-500/60 rounded-lg transition-all hover:-translate-y-1"
                  >
                    Esplora i servizi
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="glass p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-br from-background/90 to-indigo-500/5">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Contattaci</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-indigo-500/10 transition-colors">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-indigo-500/30">
                          <Mail className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Email</p>
                          <p className="font-medium">info@biorigeneralinformatics.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-violet-500/10 transition-colors">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-violet-500/30">
                          <Phone className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Telefono</p>
                          <p className="font-medium">+39 02 1234 5678</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium rounded-lg mt-2">
                      Richiedi consulenza gratuita
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stili CSS per animazioni */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes counter-rotate-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default Products;
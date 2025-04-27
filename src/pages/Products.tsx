// src/pages/Products.tsx - Versione completamente rinnovata
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, BrainCircuit, CheckCircle, Code, Database,
  Globe, ExternalLink, Shield, Zap, Star,
  ArrowUpRight, Rocket, GitMerge, BarChart, Smartphone,
  Phone, Mail, Users, ChevronRight, Heart, Sparkles,
  MessageSquare, ThumbsUp, Download, ListChecks,
  FileSearch,
  FileCheck,
  FileText,
  TrendingUp,
  Clock,
  Search,
  Brain,
  Send,
  BarChart3,
  Cable,
  Workflow,
  Bell,
  GitBranch,
  ChevronLeft,
  Grid,
  FilesIcon,
  Lightbulb
} from 'lucide-react';
import React from 'react';

const Products = () => {
  // Refs e stati
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [, setInViewFeature] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Gestione movimento mouse per effetti interattivi
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { left, top, width, height } = heroSection.getBoundingClientRect();
        
        // Verifica se il mouse è dentro la sezione hero
        if (e.clientX >= left && 
            e.clientX <= left + width && 
            e.clientY >= top && 
            e.clientY <= top + height) {
          // Calcola la posizione relativa del mouse all'interno dell'elemento
          const x = (e.clientX - left) / width;
          const y = (e.clientY - top) / height;
          setMousePosition({ x, y });
        }
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  

  // Prodotti principali
  const mainProducts = [
    {
      id: 'bioriagent',
      title: 'Agenti AI',
      subtitle: 'BioriAgent',
      description: 'Piattaforma di automazione intelligente con agenti AI che operano 24/7, imparano e si adattano alle tue esigenze specifiche. Trasforma i flussi di lavoro ripetitivi in processi automatizzati intelligenti.',
      shortDesc: 'Automazione intelligente dei processi aziendali con agenti AI che operano 24/7.',
      icon: <BrainCircuit />,
      industries: ['software', 'ecommerce', 'finance', 'healthcare', 'manufacturing'],
      features: [
        'Automazione completa dei flussi di lavoro ripetitivi',
        'Integrazione nativa con oltre 250+ strumenti aziendali',
        'Machine learning adattivo per miglioramento continuo',
        'Analisi dati in tempo reale e reportistica avanzata'
      ],
      benefits: [
        { title: "Risparmio di tempo", value: "120+ ore/mese", icon: <Clock className="w-4 h-4" /> },
        { title: "Aumento efficienza", value: "+65%", icon: <Zap className="w-4 h-4" /> },
        { title: "ROI medio", value: "4.2x", icon: <TrendingUp className="w-4 h-4" /> },
        { title: "Riduzione errori", value: "-87%", icon: <ThumbsUp className="w-4 h-4" /> }
      ],
      pricing: [
        { 
          plan: "Startup", 
          price: "€490", 
          period: "/mese", 
          features: ["3 agenti AI attivi", "50 automazioni/mese", "5 integrazioni", "Supporto email"],
          cta: "Inizia ora",
          popular: false
        },
        { 
          plan: "Business", 
          price: "€990", 
          period: "/mese", 
          features: ["10 agenti AI attivi", "250 automazioni/mese", "20 integrazioni", "Supporto prioritario"],
          cta: "Prova gratuita",
          popular: true
        },
        { 
          plan: "Enterprise", 
          price: "Contattaci", 
          period: "", 
          features: ["Agenti illimitati", "Automazioni illimitate", "Integrazioni illimitate", "Supporto dedicato"],
          cta: "Prenota demo",
          popular: false
        }
      ],
      casestudy: {
        company: "TechVision",
        quote: "BioriAgent ha trasformato il nostro servizio clienti, permettendoci di gestire il triplo delle richieste con lo stesso personale. Il ROI è stato immediato.",
        stats: [
          { label: "Tempo risparmiato", value: "1500 ore/mese" },
          { label: "Conversioni", value: "+43%" },
          { label: "ROI", value: "410%" }
        ],
        author: "Marco Rossi, CTO"
      },
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1677442135968-6d89485dc891?q=80&w=800',
      gradient: 'from-indigo-500 to-violet-500'
    },
    {
      id: 'bioritalk',
      title: 'Chatbot AI',
      subtitle: 'BioriTalk',
      description: 'Assistenti conversazionali avanzati potenziati da intelligenza artificiale per un servizio clienti superiore disponibile 24/7. Automatizza le interazioni più comuni mantenendo un esperienza utente naturale e personalizzata.',
      shortDesc: 'Assistenti conversazionali avanzati potenziati da AI per un servizio clienti superiore.',
      icon: <Bot />,
      industries: ['ecommerce', 'education', 'realestate', 'healthcare', 'hospitality'],
      features: [
        'Comprensione avanzata del linguaggio naturale',
        'Personalizzazione completa dell\'esperienza conversazionale',
        'Apprendimento continuo dalle interazioni passate',
        'Integrazione multipiattaforma (web, mobile, social)'
      ],
      benefits: [
        { title: "Risoluzione auto", value: "78%", icon: <CheckCircle className="w-4 h-4" /> },
        { title: "Disponibilità", value: "24/7", icon: <Clock className="w-4 h-4" /> },
        { title: "Lingue supportate", value: "24+", icon: <Globe className="w-4 h-4" /> },
        { title: "Tempi di risposta", value: "2.3s", icon: <Zap className="w-4 h-4" /> }
      ],
      pricing: [
        { 
          plan: "Starter", 
          price: "€290", 
          period: "/mese", 
          features: ["1 chatbot", "1000 interazioni/mese", "3 canali", "Supporto email"],
          cta: "Inizia ora",
          popular: false
        },
        { 
          plan: "Professional", 
          price: "€790", 
          period: "/mese", 
          features: ["3 chatbot", "10.000 interazioni/mese", "7 canali", "Supporto prioritario"],
          cta: "Prova gratuita",
          popular: true
        },
        { 
          plan: "Enterprise", 
          price: "Contattaci", 
          period: "", 
          features: ["Chatbot illimitati", "Volume personalizzato", "Tutti i canali", "Account manager"],
          cta: "Prenota demo",
          popular: false
        }
      ],
      casestudy: {
        company: "E-Shop Italia",
        quote: "BioriTalk ha rivoluzionato il nostro supporto clienti. Il 76% delle richieste viene gestito automaticamente e i clienti adorano la rapidità delle risposte.",
        stats: [
          { label: "Soddisfazione clienti", value: "+62%" },
          { label: "Costi operativi", value: "-45%" },
          { label: "Conversioni", value: "+28%" }
        ],
        author: "Lucia Bianchi, Customer Service Manager"
      },
      color: 'violet',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'bioripmi',
      title: 'Software Business',
      subtitle: 'BioriPMI',
      description: 'Suite completa di applicazioni gestionali su misura per piccole e medie imprese, con funzionalità avanzate e interfaccia intuitiva. Ottimizza ogni aspetto della tua azienda con un sistema integrato e personalizzabile.',
      shortDesc: 'Suite completa di applicazioni gestionali su misura per piccole e medie imprese.',
      icon: <Code />,
      industries: ['manufacturing', 'logistics', 'retail', 'professional', 'hospitality'],
      features: [
        'Dashboard personalizzabili con KPI in tempo reale',
        'CRM integrato con automazione marketing e vendite',
        'Gestione progetti e risorse con timeline intelligenti',
        'Fatturazione elettronica e integrazione fiscale'
      ],
      benefits: [
        { title: "Produttività", value: "+42%", icon: <Zap className="w-4 h-4" /> },
        { title: "Costi operativi", value: "-35%", icon: <TrendingUp className="w-4 h-4" /> },
        { title: "Implementazione", value: "2-4 settimane", icon: <Clock className="w-4 h-4" /> },
        { title: "Soddisfazione", value: "98%", icon: <ThumbsUp className="w-4 h-4" /> }
      ],
      pricing: [
        { 
          plan: "Basic", 
          price: "€390", 
          period: "/mese", 
          features: ["5 utenti", "3 moduli", "Supporto nelle ore lavorative", "Aggiornamenti inclusi"],
          cta: "Inizia ora",
          popular: false
        },
        { 
          plan: "Professional", 
          price: "€890", 
          period: "/mese", 
          features: ["15 utenti", "Tutti i moduli", "Supporto prioritario", "Formazione inclusa"],
          cta: "Prova gratuita",
          popular: true
        },
        { 
          plan: "Enterprise", 
          price: "Contattaci", 
          period: "", 
          features: ["Utenti illimitati", "Soluzioni custom", "Account manager dedicato", "SLA garantito"],
          cta: "Prenota demo",
          popular: false
        }
      ],
      casestudy: {
        company: "Manifattura Moderna",
        quote: "BioriPMI ci ha permesso di centralizzare tutti i processi aziendali in un'unica piattaforma intuitiva. Abbiamo ridotto i tempi amministrativi del 43% e migliorato la collaborazione tra team.",
        stats: [
          { label: "Efficienza operativa", value: "+38%" },
          { label: "Riduzione errori", value: "87%" },
          { label: "ROI primo anno", value: "320%" }
        ],
        author: "Antonio Verdi, Operations Director"
      },
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  // Prodotti secondari per la visualizzazione a griglia
  const secondaryProducts = [
    {
      id: 'bioridata',
      title: 'BioriData',
      description: 'Piattaforma di analisi dati con dashboard interattivi e insights predittivi in tempo reale.',
      icon: <Database />,
      industries: ['finance', 'healthcare', 'manufacturing', 'logistics'],
      features: ['Business Intelligence', 'Analisi predittiva', 'Visualizzazioni interattive'],
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'biorisec',
      title: 'BioriSec',
      description: 'Soluzioni di sicurezza informatica avanzate per proteggere i tuoi dati e sistemi dalle minacce moderne.',
      icon: <Shield />,
      industries: ['finance', 'healthcare', 'ecommerce', 'software'],
      features: ['Monitoraggio 24/7', 'Protezione avanzata', 'Conformità GDPR'],
      color: 'red',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      id: 'bioriapps',
      title: 'BioriApps',
      description: 'Sviluppo di applicazioni mobile native per iOS e Android con esperienza utente superiore.',
      icon: <Smartphone />,
      industries: ['retail', 'ecommerce', 'hospitality', 'realestate'],
      features: ['UX/UI personalizzato', 'Integrazione backend', 'Pubblicazione store'],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'bioricloud',
      title: 'BioriCloud',
      description: 'Infrastrutture cloud scalabili e sicure per ospitare le tue applicazioni e servizi.',
      icon: <Globe />,
      industries: ['software', 'ecommerce', 'finance', 'professional'],
      features: ['Scalabilità automatica', 'Backup continui', 'Alta disponibilità'],
      color: 'sky',
      gradient: 'from-sky-500 to-blue-500'
    }
  ];

  // Industrie target per filtro
  const industries = [
    { id: 'all', name: 'Tutte le industrie' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'finance', name: 'Finanza' },
    { id: 'healthcare', name: 'Sanità' },
    { id: 'manufacturing', name: 'Manifattura' },
    { id: 'software', name: 'Software & IT' },
    { id: 'retail', name: 'Retail' },
    { id: 'professional', name: 'Servizi professionali' },
    { id: 'logistics', name: 'Logistica' },
    { id: 'hospitality', name: 'Ospitalità' },
    { id: 'realestate', name: 'Real Estate' },
    { id: 'education', name: 'Educazione' }
  ];

  // Funzionalità esclusive rispetto alla concorrenza
  const exclusiveFeatures = [
    {
      title: "Intelligenza artificiale generativa integrata",
      description: "Tutte le nostre soluzioni includono capacità di AI generativa che trasformano l'esperienza utente e automatizzano i processi complessi.",
      icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
      color: "violet",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format",
      stats: [
        { label: "Aumento produttività", value: "+47%" },
        { label: "Innovazione", value: "2x più veloce" }
      ]
    },
    {
      title: "Sviluppo iperaccelerato",
      description: "Il nostro approccio AI-first riduce drasticamente i tempi di sviluppo, portando al mercato le tue soluzioni in una frazione del tempo tradizionale.",
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      color: "indigo",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format",
      stats: [
        { label: "Tempo di sviluppo", value: "-78%" },
        { label: "Time-to-market", value: "5x più veloce" }
      ]
    },
    {
      title: "Piattaforma unificata e componibile",
      description: "Un ecosistema completo che unifica tutte le nostre soluzioni, permettendoti di aggiungere funzionalità senza interrompere le operazioni esistenti.",
      icon: <GitMerge className="w-6 h-6 text-cyan-400" />,
      color: "cyan",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
      stats: [
        { label: "Integrazione", value: "100% nativa" },
        { label: "Costi di integrazione", value: "-65%" }
      ]
    },
    {
      title: "Insights in tempo reale",
      description: "Analisi dati continua su tutti i processi, fornendo metriche e dashboard personalizzabili per decisioni aziendali più informate.",
      icon: <BarChart className="w-6 h-6 text-emerald-400" />,
      color: "emerald",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
      stats: [
        { label: "Precisione decisionale", value: "+83%" },
        { label: "ROI medio", value: "3.7x" }
      ]
    }
  ];

  // Il nostro metodo rispetto ad altri approcci
  const comparisonData = [
    {
      category: "Tempi di implementazione",
      traditional: "3-6 mesi",
      biori: "2-4 settimane",
      benefit: "5x più veloce"
    },
    {
      category: "Integrazione AI",
      traditional: "Moduli separati",
      biori: "Nativa in tutte le soluzioni",
      benefit: "Esperienza utente superiore"
    },
    {
      category: "Personalizzazione",
      traditional: "Limitata/Costosa",
      biori: "Completamente adattabile",
      benefit: "Perfettamente su misura"
    },
    {
      category: "Costi operativi",
      traditional: "Alti e crescenti",
      biori: "Ridotti e prevedibili",
      benefit: "-40% in media"
    },
    {
      category: "Manutenzione",
      traditional: "Complessa e manuale",
      biori: "Automatizzata e proattiva",
      benefit: "Tempo ridotto dell'85%"
    },
    {
      category: "Scalabilità",
      traditional: "Limitata dalla struttura",
      biori: "Illimitata e senza interruzioni",
      benefit: "Crescita senza barriere"
    }
  ];

  // Filtro prodotti per industria
  const filteredProducts = (products: any[], industry: string) => {
    if (industry === 'all') return products;
    return products.filter(product => 
      product.industries && product.industries.includes(industry)
    );
  };

 // Funzioni di navigazione per il carousel di prodotti
const handlePrevProduct = () => {
  setActiveProduct(prev => (prev === 0 ? 3 : prev - 1));
};

const handleNextProduct = () => {
  setActiveProduct(prev => (prev === 3 ? 0 : prev + 1));
};

// Autoplay per il carousel
useEffect(() => {
  const interval = setInterval(() => {
    handleNextProduct();
  }, 8000);
  
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
      {/* Hero Section con effetti visivi avanzati */}
<section className="relative mb-24 overflow-hidden min-h-[85vh] flex items-center" 
         id="hero-section" // Riferimento diretto alla sezione per calcolare correttamente la posizione del mouse
>

  
{/* Background elements animati - linee più visibili e gradiente che segue precisamente il mouse */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
  {/* Sfondo base scuro per evitare stacchi visibili nella parte superiore */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
  
  {/* Gradiente mouse più preciso che segue esattamente il mouse su tutta la sezione */}
  <div 
  className="absolute inset-0 opacity-70 pointer-events-none z-5"
  style={{
    background: `radial-gradient(circle 300px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(99, 102, 241, 0.3), 
                rgba(139, 92, 246, 0.2), 
                transparent 70%)`,
    transition: 'none',
    zIndex: 5,  // Un valore di z-index inferiore a quello della wave
  }}
/>
  
  {/* Luminosità aggiuntiva verso il fondo per la transizione alla wave */}
  <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-indigo-500/8 to-transparent z-10"></div>
    
    {/* Elementi geometrici animati */}
    <div className="absolute inset-0">
      {/* Linee orizzontali animate - più visibili */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`line-h-${i}`}
          className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
          style={{
            top: `${25 + i * 15}%`,
            width: '120%',
            left: '-10%',
            animation: `slideX ${12 + i * 4}s linear infinite ${i * 1.5}s`,
            opacity: 0.6
          }}
        />
      ))}
      
      {/* Linee verticali animate - più visibili */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`line-v-${i}`}
          className="absolute w-[1.5px] bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            height: '120%',
            top: '-10%',
            animation: `slideY ${15 + i * 3}s linear infinite ${i * 1}s`,
            opacity: 0.5
          }}
        />
      ))}
      
      {/* Grid di punti piccoli (per effetto matrix) */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/15"
          style={{
            top: `${5 + (i * 19) % 90}%`,
            left: `${7 + (i * 13) % 85}%`,
            animation: `blink ${2 + i % 3}s ease-in-out infinite ${i * 0.2}s`
          }}
        />
      ))}
      
      {/* Piccoli cerchi che fluttuano - più visibili */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-indigo-500/20"
          style={{
            width: `${6 + (i % 3) * 4}px`,
            height: `${6 + (i % 3) * 4}px`,
            top: `${15 + (i * 8) % 70}%`,
            left: `${20 + (i * 7) % 65}%`,
            animation: `float ${7 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
            opacity: 0.5
          }}
        />
      ))}
      
      {/* Quadrati rotanti più visibili */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={`square-${i}`}
          className="absolute border-2 border-violet-500/15"
          style={{
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            top: `${20 + (i * 10) % 60}%`,
            left: `${15 + (i * 12) % 70}%`,
            animation: `rotate ${12 + i * 3}s linear infinite ${i * 0.7}s`,
            opacity: 0.4
          }}
        />
      ))}
      
      {/* Triangoli (div ruotati) - più visibili */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={`triangle-${i}`}
          className="absolute border-t-2 border-r-2 border-indigo-500/15"
          style={{
            width: `${10 + (i % 3) * 5}px`,
            height: `${10 + (i % 3) * 5}px`,
            top: `${30 + (i * 15) % 50}%`,
            left: `${25 + (i * 20) % 50}%`,
            transform: 'rotate(45deg)',
            animation: `rotate ${10 + i * 4}s linear infinite reverse ${i * 1.2}s`,
            opacity: 0.35
          }}
        />
      ))}
    </div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Badge premium */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-6"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Tecnologia All'Avanguardia
        </span>
      </motion.div>
      
      {/* Headline principale */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        <span className="block mb-2">Accelera la crescita aziendale con l'integrazione di   </span>
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent inline-block">
           soluzioni AI.
       
        </span>
      </motion.h1>
      
      {/* Sottotitolo ottimizzato per conversione */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
      >
        La nostra suite di prodotti AI è progettata per <strong>automatizzare i processi</strong>, 
        <strong> ridurre i costi operativi</strong> e <strong>massimizzare il ROI</strong> della tua azienda 
        in una frazione del tempo rispetto ai metodi tradizionali.
      </motion.p>

      {/* CTA primarie ottimizzate per conversione */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link 
          to="/demo"
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center font-medium group"
        >
          <span>Prenota una demo personalizzata</span>
          <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
            <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
          </div>
        </Link>
        
        <a 
          href="#products"
          className="px-8 py-4 border-2 border-indigo-500/40 text-indigo-500 font-medium hover:bg-indigo-500/10 rounded-lg transition-all hover:-translate-y-1"
        >
          Scopri le soluzioni
        </a>
      </motion.div>
    </motion.div>
  </div>

{/* Wave divider con sovrapposizione aggressiva */}
<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ zIndex: 25 }}>
  {/* SVG Wave */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320" 
    className="w-full" 
    preserveAspectRatio="none"
    height="80"
    style={{ display: 'block', marginBottom: '-2px' }}
  >
    <path 
      className="fill-background" 
      d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
  
  
  {/* Sovrapposizione aggressiva per eliminare la linea */}
  <div 
    className="absolute -bottom-1 left-0 right-0 h-4 bg-background" 
    style={{ zIndex: 26 }}
  ></div>
</div>


</section>

{/* Stili personalizzati per animazioni */}
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes slideX {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes slideY {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes blink {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`}} />
      
      {/* Sezione prodotti digitali con carousel orizzontale */}
<section id="solutions" className="container mx-auto px-6 pt-24 mt-0 bg-background relative z-10">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Innovazione e Automazione
          </span>
        </div>
        <h2 className="text-4xl font-bold mb-5 leading-tight">
          Soluzioni <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">avanzate</span> per il tuo business
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tecnologie innovative che trasformano processi complessi in flussi di lavoro automatizzati, 
          offrendo efficienza e precisione senza precedenti
        </p>
      </motion.div>
    </div>
    
    {/* Filtri per categoria con animazione di selezione */}
    <div className="flex justify-center mb-20">
      <div className="glass px-1.5 py-1.5 rounded-full border border-indigo-500/20 inline-flex">
        {[
          { id: 'all', name: 'Tutti', icon: <Grid className="w-4 h-4" /> },
          { id: 'workflow', name: 'Workflow', icon: <Workflow className="w-4 h-4" /> },
          { id: 'intelligence', name: 'Intelligence', icon: <BrainCircuit className="w-4 h-4" /> },
          { id: 'communication', name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
          { id: 'documents', name: 'Documents', icon: <FilesIcon className="w-4 h-4" /> }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedIndustry(category.id)}
            className={`relative px-6 py-2.5 rounded-full transition-all duration-300 z-10 flex items-center ${
              selectedIndustry === category.id ? 'text-white' : 'hover:bg-foreground/5'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            {selectedIndustry === category.id && (
              <motion.div
                layoutId="active-category"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                style={{ zIndex: -1 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
    
    {/* Carousel prodotti orizzontale con frecce */}
    <div className="relative">
      {/* Frecce di navigazione */}
      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-30">
        <button 
         onClick={() => handleNextProduct()}
          className="w-10 h-10 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 hover:bg-indigo-500/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-30">
        <button 
          onClick={() => handlePrevProduct()}
          className="w-10 h-10 rounded-full glass border border-indigo-500/20 flex items-center justify-center text-indigo-500 hover:bg-indigo-500/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Prodotti carousel */}
      <motion.div 
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
        <motion.div 
          className="flex"
          animate={{ x: -activeProduct * 100 + '%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
            {/* NexusFlow */}
            <div className="w-full flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 rounded-3xl blur-xl"></div>
                
                <div className="glass rounded-2xl border border-indigo-500/20 overflow-hidden relative z-10 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Demo interattiva - Lato sinistro */}
                    <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-600/10 to-violet-700/20 relative overflow-hidden h-full min-h-[380px]">
                      {/* Demo animata - Workflow builder */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-md mx-auto">
                          <div className="relative z-10 group">
                            {/* Workspace canvas */}
                            <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md p-6">
                              <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-md">
                                    <Workflow className="w-4 h-4" />
                                  </div>
                                  <span className="ml-2 font-medium text-sm">Nexus Workspace</span>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                </div>
                              </div>
                              
                              {/* Workflow nodes and connections - animated on hover */}
                              <div className="relative" style={{ height: "240px" }}>
                                {/* Connection lines with animation */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ zIndex: 0 }}>
                                  {/* Email to Process Connection */}
                                  <path 
                                    d="M60,60 C120,60 120,120 180,120" 
                                    fill="none" 
                                    stroke="url(#line-gradient-1)" 
                                    strokeWidth="2" 
                                    className="workflow-connection"
                                  />
                                  
                                  {/* Process to Decision Connection */}
                                  <path 
                                    d="M240,120 C280,120 280,180 320,180" 
                                    fill="none" 
                                    stroke="url(#line-gradient-2)" 
                                    strokeWidth="2" 
                                    className="workflow-connection"
                                    style={{ animationDelay: "0.2s" }}
                                  />
                                  
                                  {/* Decision to DB Connection */}
                                  <path 
                                    d="M320,210 C320,240 240,240 240,210" 
                                    fill="none" 
                                    stroke="url(#line-gradient-3)" 
                                    strokeWidth="2" 
                                    className="workflow-connection"
                                    style={{ animationDelay: "0.4s" }}
                                  />
                                  
                                  {/* Decision to Notification Connection */}
                                  <path 
                                    d="M350,180 C400,180 400,60 340,60" 
                                    fill="none" 
                                    stroke="url(#line-gradient-4)" 
                                    strokeWidth="2" 
                                    className="workflow-connection"
                                    style={{ animationDelay: "0.6s" }}
                                  />
                                  
                                  {/* Animated data flow particles */}
                                  <circle className="workflow-particle" r="3" fill="#818cf8">
                                    <animateMotion
                                      path="M60,60 C120,60 120,120 180,120 C280,120 280,180 320,180 C320,240 240,240 240,210"
                                      dur="3s"
                                      repeatCount="indefinite"
                                    />
                                  </circle>
                                  
                                  <circle className="workflow-particle" r="3" fill="#c4b5fd" style={{ animationDelay: "1.5s" }}>
                                    <animateMotion
                                      path="M60,60 C120,60 120,120 180,120 C280,120 280,180 320,180 C400,180 400,60 340,60"
                                      dur="4s"
                                      repeatCount="indefinite"
                                    />
                                  </circle>
                                  
                                  {/* Gradient definitions */}
                                  <defs>
                                    <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#6366f1" />
                                      <stop offset="100%" stopColor="#8b5cf6" />
                                    </linearGradient>
                                    <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#8b5cf6" />
                                      <stop offset="100%" stopColor="#a78bfa" />
                                    </linearGradient>
                                    <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#a78bfa" />
                                      <stop offset="100%" stopColor="#818cf8" />
                                    </linearGradient>
                                    <linearGradient id="line-gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#a78bfa" />
                                      <stop offset="100%" stopColor="#6366f1" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                
                                {/* Nodes */}
                                <div className="absolute top-10 left-10 workflow-node">
                                  <div className="w-16 h-16 rounded-xl bg-indigo-500 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-500/30 relative z-10 workflow-pulse">
                                    <Mail className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] opacity-80">Trigger</span>
                                  </div>
                                </div>
                                
                                <div className="absolute top-[100px] left-[180px] workflow-node" style={{ animationDelay: "0.2s" }}>
                                  <div className="w-16 h-16 rounded-xl bg-violet-500 text-white flex flex-col items-center justify-center shadow-lg shadow-violet-500/30 relative z-10 workflow-pulse">
                                    <FileText className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] opacity-80">Process</span>
                                  </div>
                                </div>
                                
                                <div className="absolute top-[160px] left-[320px] workflow-node" style={{ animationDelay: "0.4s" }}>
                                  <div className="w-16 h-16 rounded-xl bg-purple-500 text-white flex flex-col items-center justify-center shadow-lg shadow-purple-500/30 relative z-10 workflow-pulse">
                                    <GitBranch className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] opacity-80">Decision</span>
                                  </div>
                                </div>
                                
                                <div className="absolute top-[190px] left-[220px] workflow-node" style={{ animationDelay: "0.6s" }}>
                                  <div className="w-16 h-16 rounded-xl bg-blue-500 text-white flex flex-col items-center justify-center shadow-lg shadow-blue-500/30 relative z-10 workflow-pulse">
                                    <Database className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] opacity-80">Storage</span>
                                  </div>
                                </div>
                                
                                <div className="absolute top-[40px] left-[320px] workflow-node" style={{ animationDelay: "0.8s" }}>
                                  <div className="w-16 h-16 rounded-xl bg-sky-500 text-white flex flex-col items-center justify-center shadow-lg shadow-sky-500/30 relative z-10 workflow-pulse">
                                    <Bell className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] opacity-80">Notify</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Lato destro */}
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-1">
                          Workflow Automation
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                            <Workflow className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-violet-500/30 text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">NexusFlow</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Sistema avanzato di automazione workflow che integra intelligenza artificiale per creare, ottimizzare e gestire 
                        processi aziendali complessi. Connette perfettamente applicazioni, dati e team eliminando attività ripetitive 
                        e facilitando decisioni basate sui dati in tempo reale.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Zap className="w-4 h-4 text-indigo-400 mr-2" />
                            Automazione intelligente
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Suggerimenti di automazione basati su AI che ottimizzano i flussi di lavoro esistenti.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Cable className="w-4 h-4 text-indigo-400 mr-2" />
                            Connettori universali
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Oltre 300+ integrazioni precostituite per un'automazione completa.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                          <span className="font-semibold text-xl">€490<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Link 
                            to="/products/nexusflow" 
                            className="text-indigo-400 hover:text-indigo-500 transition-colors font-medium text-sm flex items-center"
                          >
                            Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Link>
                          
                          <Link 
                            to="/products/nexusflow"
                            className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-indigo-500/20 text-sm font-medium"
                          >
                            Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* QuantumInsight */}
            <div className="w-full flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl blur-xl"></div>
                
                <div className="glass rounded-2xl border border-cyan-500/20 overflow-hidden relative z-10 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Content - Lato sinistro */}
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-1">
                          Data Intelligence
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                            <BarChart3 className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">QuantumInsight</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Piattaforma di business intelligence potenziata da AI che trasforma i dati grezzi in previsioni 
                        accurate e approfondimenti strategici. Combina analisi predittiva, rilevamento anomalie e dashboard 
                        personalizzabili per decisioni aziendali basate su dati in tempo reale.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <BrainCircuit className="w-4 h-4 text-cyan-400 mr-2" />
                            Analisi predittiva
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Previsioni di tendenze future con modelli ML che analizzano pattern e anomalie.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Lightbulb className="w-4 h-4 text-cyan-400 mr-2" />
                            Insights automatici
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Identificazione automatica di correlazioni, anomalie e opportunità nascoste.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                          <span className="font-semibold text-xl">€590<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Link 
                            to="/products/quantuminsight" 
                            className="text-cyan-400 hover:text-cyan-500 transition-colors font-medium text-sm flex items-center"
                          >
                            Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Link>
                          
                          <Link 
                            to="/products/quantuminsight"
                            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-cyan-500/20 text-sm font-medium"
                          >
                            Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Demo - Lato destro */}
                    <div className="bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-blue-700/20 relative overflow-hidden h-full min-h-[380px]">
                      {/* Demo animata - Analytics dashboard */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-md mx-auto">
                          <div className="relative z-10">
                            <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                              <div className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 py-3 px-4 text-white flex items-center justify-between">
                                <div className="flex items-center">
                                  <BarChart3 className="w-4 h-4 mr-2" />
                                  <span className="text-sm font-medium">Performance Insights</span>
                                </div>
                                <div className="flex space-x-1">
                                  <div className="w-5 h-5 rounded-full bg-background/10 flex items-center justify-center text-[8px]">D</div>
                                  <div className="w-5 h-5 rounded-full bg-background/10 flex items-center justify-center text-[8px]">W</div>
                                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-medium">M</div>
                                  <div className="w-5 h-5 rounded-full bg-background/10 flex items-center justify-center text-[8px]">Y</div>
                                </div>
                              </div>
                              
                              <div className="p-4">
                                <div className="flex justify-between mb-4">
                                  <div className="text-xs text-foreground/60">Ottobre 2023 - Aprile 2024</div>
                                  <div className="bg-cyan-500/20 px-2 py-0.5 rounded text-xs text-cyan-500 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    <span>+24.8%</span>
                                  </div>
                                </div>
                                
                                {/* Chart with animation */}
                                <div className="relative h-40 mb-3">
                                  <svg className="w-full h-full" preserveAspectRatio="none">
                                    {/* Background grid */}
                                    <line x1="0" y1="0" x2="100%" y2="0" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" className="opacity-20" />
                                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" className="opacity-20" />
                                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" className="opacity-20" />
                                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" className="opacity-20" />
                                    <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#e2e8f0" strokeWidth="0.5" className="opacity-20" />
                                    
                                    {/* Animated Area Chart */}
                                    <path 
                                      d="M0,100 L0,70 C20,65 40,80 60,60 C80,40 100,50 120,30 C140,15 160,25 180,15 C200,5 220,20 240,10 C260,0 280,5 300,15 L300,100 Z" 
                                      fill="url(#chart-gradient)" 
                                      className="chart-area-animation"
                                    />
                                    
                                    {/* Animated Line */}
                                    <path 
                                      d="M0,70 C20,65 40,80 60,60 C80,40 100,50 120,30 C140,15 160,25 180,15 C200,5 220,20 240,10 C260,0 280,5 300,15" 
                                      fill="none" 
                                      stroke="url(#line-gradient)" 
                                      strokeWidth="2" 
                                      className="chart-line-animation"
                                    />
                                    
                                    {/* Data Points */}
                                    <circle cx="0" cy="70" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "0.1s" }} />
                                    <circle cx="60" cy="60" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "0.3s" }} />
                                    <circle cx="120" cy="30" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "0.5s" }} />
                                    <circle cx="180" cy="15" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "0.7s" }} />
                                    <circle cx="240" cy="10" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "0.9s" }} />
                                    <circle cx="300" cy="15" r="4" fill="#06b6d4" className="chart-point-animation" style={{ animationDelay: "1.1s" }} />
                                    
                                    {/* Gradient definitions */}
                                    <defs>
                                      <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                                      </linearGradient>
                                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#0ea5e9" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                                
                                {/* KPI Cards */}
                                <div className="grid grid-cols-3 gap-2">
                                  <div className="glass rounded-lg p-2 border border-white/10 text-center">
                                    <div className="text-xs text-foreground/60">Conversioni</div>
                                    <div className="text-sm font-semibold text-cyan-500 flex items-center justify-center">
                                      3.8%
                                      <TrendingUp className="w-3 h-3 ml-1 text-emerald-500" />
                                    </div>
                                  </div>
                                  
                                  <div className="glass rounded-lg p-2 border border-white/10 text-center">
                                    <div className="text-xs text-foreground/60">Ricavi</div>
                                    <div className="text-sm font-semibold text-cyan-500 flex items-center justify-center">
                                      €28.5K
                                      <TrendingUp className="w-3 h-3 ml-1 text-emerald-500" />
                                    </div>
                                  </div>
                                  
                                  <div className="glass rounded-lg p-2 border border-white/10 text-center">
                                    <div className="text-xs text-foreground/60">Retention</div>
                                    <div className="text-sm font-semibold text-cyan-500 flex items-center justify-center">
                                      84%
                                      <TrendingUp className="w-3 h-3 ml-1 text-emerald-500" />
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
            </div>
            
            {/* SynapseChat */}
            <div className="w-full flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5 rounded-3xl blur-xl"></div>
                
                <div className="glass rounded-2xl border border-violet-500/20 overflow-hidden relative z-10 hover:border-violet-500/40 transition-all hover:shadow-xl hover:shadow-violet-500/10">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Demo interattiva - Lato sinistro */}
                    <div className="bg-gradient-to-br from-violet-500/10 via-violet-600/10 to-purple-700/20 relative overflow-hidden h-full min-h-[380px]">
                      {/* Demo animata - Conversazione AI */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-md mx-auto">
                          <div className="relative z-10 group">
                            <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md">
                              <div className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 py-3 px-4 text-white flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                    <Bot className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium">Synapse</div>
                                    <div className="text-xs text-white/70">AI Assistant</div>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                                </div>
                              </div>
                              
                              <div className="p-4 h-[280px] overflow-hidden">
                                {/* Chat Messages */}
                                <div className="space-y-4">
                                  <div className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                                      <Bot className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <div className="bg-violet-500/10 rounded-lg rounded-tl-none p-3 max-w-[80%] text-sm border border-violet-500/20">
                                      <p>Buongiorno! Sono Synapse, il tuo assistente AI. Come posso aiutarti oggi?</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex justify-end">
                                    <div className="bg-violet-500/20 rounded-lg rounded-tr-none p-3 max-w-[80%] text-sm">
                                      <p>Ho un problema con l'ordine #45678. Non ho ricevuto conferma di spedizione.</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                                      <Bot className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <div className="bg-violet-500/10 rounded-lg rounded-tl-none p-3 max-w-[80%] text-sm border border-violet-500/20">
                                      <p className="chat-typing-animation">Sto verificando il tuo ordine #45678...</p>
                                    </div>
                                  </div>
                                  
                                  {/* Message that appears on hover */}
                                  <div className="flex items-start transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ transitionDelay: "0.5s" }}>
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                                      <Bot className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <div className="bg-violet-500/10 rounded-lg rounded-tl-none p-3 max-w-[80%] text-sm border border-violet-500/20">
                                      <p>Ho trovato il tuo ordine. La spedizione è stata elaborata oggi alle 09:24. Il corriere ha già preso in carico il pacco e riceverai l'email di tracking entro un'ora. Posso aiutarti con altro?</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Input area */}
                                <div className="absolute bottom-4 left-4 right-4">
                                  <div className="glass border border-white/20 rounded-full bg-background/60 backdrop-blur-sm flex items-center p-1 pl-4">
                                    <input type="text" placeholder="Scrivi un messaggio..." className="bg-transparent border-0 outline-none flex-grow text-sm" />
                                    <button className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white">
                                      <Send className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Lato destro */}
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-400 mb-1">
                          Conversational AI
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                            <MessageSquare className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/30 text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">SynapseChat</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Piattaforma di conversazione AI avanzata che trasforma il servizio clienti e l'assistenza. 
                        Con comprensione del linguaggio naturale, memoria contestuale e integrazione multicanale, 
                        offre esperienze conversazionali fluide che risolvono problemi complessi in modo autonomo.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-violet-500/5 to-violet-500/10 rounded-xl p-4 border border-violet-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Brain className="w-4 h-4 text-violet-400 mr-2" />
                            Memoria contestuale
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Ricorda l'intera storia del cliente e personalizza le interazioni.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-violet-500/5 to-violet-500/10 rounded-xl p-4 border border-violet-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Globe className="w-4 h-4 text-violet-400 mr-2" />
                            Supporto multilingua
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Comunica fluentemente in 29 lingue con comprensione di sfumature culturali.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                          <span className="font-semibold text-xl">€390<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Link 
                            to="/products/synapsechat" 
                            className="text-violet-400 hover:text-violet-500 transition-colors font-medium text-sm flex items-center"
                          >
                            Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Link>
                          
                          <Link 
                            to="/products/synapsechat"
                            className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-violet-500/20 text-sm font-medium"
                          >
                            Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* OmniDoc */}
            <div className="w-full flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5 rounded-3xl blur-xl"></div>
                
                <div className="glass rounded-2xl border border-emerald-500/20 overflow-hidden relative z-10 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Content - Lato sinistro */}
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-1">
                          Document Intelligence
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <div className="mr-3 relative">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                            <FileSearch className="w-6 h-6" />
                          </div>
                          <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-sm shadow-green-500/30 text-xs">
                            AI
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">OmniDoc</h3>
                      </div>
                      
                      <p className="text-base text-foreground/80 mb-6 flex-grow">
                        Piattaforma di intelligenza documentale che automatizza l'estrazione e l'elaborazione di informazioni da qualsiasi tipo di documento. 
                        Utilizza AI avanzata per riconoscere, classificare e digitalizzare dati da fatture, contratti e moduli, 
                        eliminando l'inserimento manuale e riducendo gli errori.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <FileCheck className="w-4 h-4 text-emerald-400 mr-2" />
                            Estrazione di precisione
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Riconosce e estrae dati con una precisione del 99.3%, superando l'OCR tradizionale.
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                          <h4 className="font-semibold text-sm flex items-center mb-2">
                            <Search className="w-4 h-4 text-emerald-400 mr-2" />
                            Ricerca semantica
                          </h4>
                          <p className="text-sm text-foreground/70">
                            Indicizzazione intelligente che permette di cercare documenti per concetti.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground/70 mr-3">A partire da:</span>
                          <span className="font-semibold text-xl">€450<span className="text-foreground/60 text-sm font-normal">/mese</span></span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Link 
                            to="/products/omnidoc" 
                            className="text-emerald-400 hover:text-emerald-500 transition-colors font-medium text-sm flex items-center"
                          >
                            Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Link>
                          
                          <Link 
                            to="/products/omnidoc"
                            className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg flex items-center transition-all hover:shadow-md hover:shadow-emerald-500/20 text-sm font-medium"
                          >
                            Scopri di più <ArrowRight className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Demo - Lato destro */}
                    <div className="bg-gradient-to-br from-emerald-500/10 via-green-600/10 to-green-700/20 relative overflow-hidden h-full min-h-[380px]">
                      {/* Demo animata - Document processing */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-md mx-auto">
                          <div className="relative z-10 group">
                            {/* Document with annotations */}
                            <div className="glass border border-white/20 rounded-xl overflow-hidden shadow-xl bg-background/70 backdrop-blur-md p-5">
                              <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-2">
                                    <FileText className="w-4 h-4 text-emerald-400" />
                                  </div>
                                  <span className="text-sm font-medium">Estrazione intelligente</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400 flex items-center">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    <span>99.3% match</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Document UI */}
                              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                {/* Document header */}
                                <div className="border-b border-emerald-500/20 p-3">
                                  <div className="flex justify-between items-center">
                                    <div className="w-24 h-8 bg-emerald-500/20 rounded doc-element"></div>
                                    <div className="w-20 h-6 bg-emerald-500/10 rounded doc-element"></div>
                                  </div>
                                </div>
                                
                                {/* Document content */}
                                <div className="p-4 relative">
                                  {/* Document structure */}
                                  <div className="space-y-4">
                                    <div className="flex items-baseline gap-1">
                                      <div className="w-16 h-4 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-40 h-4 bg-emerald-500/30 rounded doc-element ml-2"></div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="w-full h-3 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-full h-3 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-3/4 h-3 bg-emerald-500/10 rounded doc-element"></div>
                                    </div>
                                    
                                    <div className="flex items-baseline gap-1">
                                      <div className="w-20 h-4 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-32 h-4 bg-emerald-500/30 rounded doc-element ml-2"></div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="w-full h-3 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-5/6 h-3 bg-emerald-500/10 rounded doc-element"></div>
                                    </div>
                                    
                                    <div className="flex justify-between pt-2 border-t border-emerald-500/20">
                                      <div className="w-24 h-5 bg-emerald-500/10 rounded doc-element"></div>
                                      <div className="w-20 h-5 bg-emerald-500/30 rounded doc-element"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Extracted data result */}
                              <div className="mt-4 border-t border-emerald-500/20 pt-4">
                                <h4 className="text-xs font-medium mb-2">Dati estratti</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="glass p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                                    <div className="text-xs text-foreground/60">Cliente</div>
                                    <div className="text-sm font-medium text-emerald-500 doc-extracted-data">ABC Corp</div>
                                  </div>
                                  
                                  <div className="glass p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                                    <div className="text-xs text-foreground/60">Fattura #</div>
                                    <div className="text-sm font-medium text-emerald-500 doc-extracted-data">INV-2024-0562</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Document stack effect */}
                            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full border border-white/10 rounded-xl bg-background/50 transform rotate-2"></div>
                            <div className="absolute -z-20 -bottom-6 -right-6 w-full h-full border border-white/5 rounded-xl bg-background/30 transform rotate-4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
    </div>
    
    {/* Soluzioni personalizzate - versione semplificata */}
    <div className="mt-20 relative">
      <div className="glass rounded-xl border border-indigo-500/20 p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Soluzioni personalizzate
          </span>
        </h3>
        
        <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
          Il nostro team di esperti è pronto a sviluppare soluzioni su misura per le tue specifiche esigenze aziendali.
        </p>
        
        <Link 
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 inline-flex items-center font-medium"
        >
          Richiedi una consulenza
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
  
  {/* Stili CSS per animazioni avanzate */}
  <style dangerouslySetInnerHTML={{ __html: `
    /* Workflow animations */
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
      50% { box-shadow: 0 0 10px 3px rgba(99, 102, 241, 0.6); }
    }
    
    .workflow-pulse {
      animation: pulse-glow 3s infinite ease-in-out;
    }
    
    .workflow-node {
      opacity: 0;
      transform: translateY(10px);
      animation: appear 0.5s forwards ease-out;
    }
    
    @keyframes appear {
      to { opacity: 1; transform: translateY(0); }
    }
    
    .workflow-connection {
      stroke-dasharray: 15;
      stroke-dashoffset: 150;
      animation: dash 3s linear infinite;
    }
    
    @keyframes dash {
      to { stroke-dashoffset: 0; }
    }
    
    .workflow-particle {
      opacity: 0;
      animation: particle-fade 2s infinite ease-in-out;
    }
    
    @keyframes particle-fade {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
    
    /* Chart animations */
    .chart-area-animation {
      opacity: 0;
      animation: fade-in 1s forwards ease-out 0.5s;
    }
    
    .chart-line-animation {
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
      animation: draw 2s forwards ease-out;
    }
    
    @keyframes draw {
      to { stroke-dashoffset: 0; }
    }
    
    .chart-point-animation {
      opacity: 0;
      animation: point-appear 0.5s forwards ease-out;
    }
    
    @keyframes point-appear {
      to { opacity: 1; }
    }
    
    /* Chat animations */
    .chat-typing-animation::after {
      content: "";
      animation: typing 1.5s infinite;
    }
    
    @keyframes typing {
      0% { content: ""; }
      25% { content: "."; }
      50% { content: ".."; }
      75% { content: "..."; }
    }
    
    /* Document animations */
    .doc-element {
      opacity: 0.7;
      animation: pulse-element 3s infinite ease-in-out;
    }
    
    @keyframes pulse-element {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    .doc-extracted-data {
      position: relative;
      overflow: hidden;
    }
    
    .doc-extracted-data::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent);
      animation: shine-effect 3s infinite;
    }
    
    @keyframes shine-effect {
      0% { left: -100%; }
      50%, 100% { left: 100%; }
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `}} />
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
            Potenzia il tuo ecosistema digitale con le nostre soluzioni aggiuntive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {filteredProducts(secondaryProducts, selectedIndustry).map((product, index) => (
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
        
        {/* Messaggio se non ci sono prodotti per l'industria selezionata */}
        {filteredProducts(secondaryProducts, selectedIndustry).length === 0 && (
          <div className="glass p-6 rounded-2xl text-center max-w-2xl mx-auto">
            <p className="text-foreground/70">Non abbiamo ancora soluzioni complementari specifiche per questa industria. <Link to="/contact" className="text-indigo-400 hover:underline">Contattaci</Link> per soluzioni personalizzate.</p>
          </div>
        )}
      </section>
      
{/* Sezione Processo di Implementazione con Timeline Orizzontale Animata e Responsive */}
<section className="py-24 relative overflow-hidden mb-24" id="implementation-process">
  {/* Background esteso senza interruzioni */}
  <div className="absolute inset-0 -top-40 -bottom-40 bg-gradient-to-b from-background via-indigo-900/5 to-background pointer-events-none"></div>
  
  {/* Elementi di sfondo con animazione */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-violet-500/10 filter blur-[120px]"></div>
    <div className="absolute bottom-1/3 left-[15%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 filter blur-[100px]"></div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Processo di Implementazione
        </span>
      </div>
      
      <h2 className="text-4xl font-bold mb-5">
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          Trasformazione digitale 
        </span>
        in soli 4 passaggi
      </h2>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
        La nostra metodologia comprovata garantisce risultati rapidi con un impatto minimo sulle tue operazioni quotidiane
      </p>
    </div>
    
    {/* Timeline container con classe speciale per l'observer */}
    <div className="timeline-wrapper max-w-6xl mx-auto relative mb-12" id="timeline-container">
      {/* Linea principale della timeline - orizzontale su desktop, verticale su mobile */}
      <div className="timeline-track absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full h-full w-1 top-0 left-1/2 transform md:translate-y-0 -translate-x-1/2 bg-gradient-to-r md:from-indigo-500/20 md:via-violet-500/20 md:to-blue-500/20 from-indigo-500/20 via-violet-500/20 to-blue-500/20 rounded-full overflow-hidden">
        {/* Linea luminosa che avanza con lo scroll */}
        <div className="timeline-progress-bar absolute md:h-full h-[0%] w-full md:w-[0%] bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-full transition-all duration-300 ease-out"></div>
      </div>
      
      {/* Contenitore degli step, in flex orizzontale su desktop, colonna su mobile */}
      <div className="flex md:flex-row flex-col md:justify-between relative">
        {[
          {
            step: 1,
            title: "Analisi e Pianificazione",
            description: "Analizziamo i tuoi processi attuali e definiamo gli obiettivi della trasformazione, creando una roadmap personalizzata.",
            duration: "1-2 settimane",
            icon: <Search className="w-6 h-6" />,
            results: ["Mappatura dei processi", "Identificazione opportunità", "Roadmap personalizzata"],
            color: "indigo"
          },
          {
            step: 2,
            title: "Configurazione e Integrazione",
            description: "Configuriamo la soluzione in base alle tue esigenze specifiche e la integriamo con i sistemi esistenti.",
            duration: "2-3 settimane",
            icon: <GitMerge className="w-6 h-6" />,
            results: ["Setup dell'ambiente", "Integrazione sistemi", "Workflow automatizzati"],
            color: "violet"
          },
          {
            step: 3,
            title: "Formazione e Test",
            description: "Formiamo il tuo team e testiamo tutti i workflow in un ambiente controllato prima del lancio in produzione.",
            duration: "1 settimana",
            icon: <Users className="w-6 h-6" />,
            results: ["Team formato", "Workflow testati", "Documentazione completa"],
            color: "purple"
          },
          {
            step: 4,
            title: "Lancio e Ottimizzazione",
            description: "Lanciamo la soluzione in produzione e monitoriamo le performance, ottimizzando continuamente per massimizzare i risultati.",
            duration: "Continuo",
            icon: <Rocket className="w-6 h-6" />,
            results: ["Go-live senza interruzioni", "Monitoraggio", "Ottimizzazione continua"],
            color: "blue"
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`timeline-step md:w-1/4 w-full md:px-4 md:mb-0 mb-16 last:mb-0 relative opacity-0 transition-all duration-500 ease-out`}
            data-step={index + 1}
            style={{
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* Punto della timeline con icona */}
            <div className="relative md:mb-8 mb-4 z-10">
              {/* Su desktop punti superiori, su mobile a sinistra */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white flex items-center justify-center
                           md:mx-auto md:relative absolute left-0 transform md:translate-x-0 -translate-x-1/2 md:translate-y-0`}>
                {item.icon}
              </div>
              
              <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-8 md:text-center pl-8 md:pl-0">
                <div className="text-sm font-bold bg-background md:px-3 inline-block">Fase {item.step}</div>
              </div>
            </div>
            
            {/* Contenuto del passo, posizionato a destra su mobile */}
            <div className={`glass rounded-xl border border-${item.color}-500/20 p-5 bg-${item.color}-500/5 h-full transform transition-all
                           md:translate-y-0 ml-8 md:ml-0 relative`}>
              <div className={`inline-block px-3 py-1 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-xs font-medium text-${item.color}-400 mb-2`}>
                {item.duration}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{item.description}</p>
              
              <div className={`border-t border-${item.color}-500/20 pt-3 mt-auto`}>
                <h4 className="font-semibold text-sm mb-2 text-${item.color}-400">Risultati:</h4>
                <ul className="space-y-1">
                  {item.results.map((result, rIndex) => (
                    <li key={rIndex} className="flex items-start text-sm text-foreground/80 mb-1">
                      <CheckCircle className={`w-4 h-4 text-${item.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Indicazione tempo totale */}
    <div className="text-center text-foreground/70 text-sm mb-8">
      <div className="inline-flex items-center glass px-4 py-2 rounded-full border border-indigo-500/20">
        <Clock className="w-4 h-4 text-indigo-400 mr-2" />
        Tempo totale di implementazione: <span className="font-bold ml-1">4-6 settimane</span>
      </div>
    </div>
    
    {/* CTA */}
    <div className="text-center mt-12">
      <Link 
        to="/methodology"
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 inline-flex items-center font-medium"
      >
        Scopri di più sulla nostra metodologia
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </div>
  
  {/* Script per animare la timeline con lo scroll */}
  <script dangerouslySetInnerHTML={{__html: `
    document.addEventListener('DOMContentLoaded', function() {
      // Seleziona gli elementi necessari
      const timelineContainer = document.getElementById('timeline-container');
      const timelineSteps = document.querySelectorAll('.timeline-step');
      const progressBar = document.querySelector('.timeline-progress-bar');
      const timelineTrack = document.querySelector('.timeline-track');
      
      // Se non ci sono gli elementi, esci
      if (!timelineContainer || !timelineSteps.length || !progressBar || !timelineTrack) return;
      
      // Funzione per controllare se è mobile
      const isMobile = () => window.innerWidth < 768;
      
      // Calcola la percentuale di visibilità del container
      function getTimelineScrollPercentage() {
        const rect = timelineContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Se completamente sopra la viewport
        if (rect.bottom < 0) return 0;
        
        // Se completamente sotto la viewport
        if (rect.top > windowHeight) return 0;
        
        // Se più grande della viewport e già iniziato
        if (rect.height > windowHeight && rect.top < 0) {
          const visibleHeight = Math.min(rect.height + rect.top, windowHeight);
          const percentage = visibleHeight / rect.height;
          return Math.min(percentage * 1.5, 1); // Moltiplica per avanzare più velocemente
        }
        
        // Altrimenti calcola percentuale standard
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const percentage = visibleHeight / Math.min(rect.height, windowHeight);
        return Math.min(percentage * 1.5, 1); // Moltiplica per avanzare più velocemente
      }
      
      // Funzione per aggiornare la progress bar
      function updateProgressBar() {
        const percentage = getTimelineScrollPercentage() * 100;
        
        // Aggiorna la barra in base all'orientamento (mobile/desktop)
        if (isMobile()) {
          progressBar.style.height = \`\${percentage}%\`;
        } else {
          progressBar.style.width = \`\${percentage}%\`;
        }
        
        // Attiva gli step in base alla percentuale
        timelineSteps.forEach((step, index) => {
          const stepThreshold = (index / (timelineSteps.length - 1)) * 100;
          
          if (percentage >= stepThreshold) {
            step.classList.add('active');
            step.style.opacity = '1';
            
            // Effetto di entrata
            if (isMobile()) {
              step.style.transform = 'translateX(0)';
            } else {
              step.style.transform = 'translateY(0)';
            }
          } else {
            step.classList.remove('active');
          }
        });
      }
      
      // Listener per lo scroll
      window.addEventListener('scroll', updateProgressBar);
      
      // Listener per il resize (per gestire il cambio mobile/desktop)
      window.addEventListener('resize', function() {
        // Reset delle proprietà quando cambia orientamento
        if (isMobile()) {
          progressBar.style.width = '100%';
          progressBar.style.height = '0%';
          timelineSteps.forEach(step => {
            step.style.transform = step.classList.contains('active') ? 'translateX(0)' : 'translateX(20px)';
          });
        } else {
          progressBar.style.height = '100%';
          progressBar.style.width = '0%';
          timelineSteps.forEach(step => {
            step.style.transform = step.classList.contains('active') ? 'translateY(0)' : 'translateY(20px)';
          });
        }
        updateProgressBar();
      });
      
      // Imposta lo stato iniziale
      if (isMobile()) {
        timelineSteps.forEach(step => {
          step.style.transform = 'translateX(20px)';
        });
      } else {
        timelineSteps.forEach(step => {
          step.style.transform = 'translateY(20px)';
        });
      }
      
      // Aggiorna subito per impostare lo stato corretto
      updateProgressBar();
    });
  `}} />
  
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    .timeline-step.active {
      opacity: 1;
    }
    
    /* Stile della timeline - Desktop */
    @media (min-width: 768px) {
      .timeline-step {
        opacity: 0;
        transform: translateY(20px);
      }
      
      .timeline-step.active {
        transform: translateY(0);
      }
    }
    
    /* Stile della timeline - Mobile */
    @media (max-width: 767px) {
      .timeline-step {
        opacity: 0;
        transform: translateX(20px);
      }
      
      .timeline-step.active {
        transform: translateX(0);
      }
    }
  `}} />
</section>

{/* Sezione Confronto con immagine */}
<section className="py-24 relative overflow-hidden mb-24">
  {/* Background esteso senza interruzioni */}
  <div className="absolute inset-0 -top-40 -bottom-40 bg-gradient-to-b from-background via-indigo-900/5 to-background pointer-events-none"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Contenuto testuale a sinistra */}
      <div>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Confronto Prestazionale
          </span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6">
          Supera i limiti dei metodi tradizionali
        </h2>
        
        <p className="text-lg text-foreground/80 mb-6">
          I sistemi tradizionali richiedono mesi di implementazione, frequenti manutenzioni e costi nascosti. Le nostre soluzioni AI-first offrono tempi di implementazione 5 volte più rapidi, costi prevedibili e risultati immediati.
        </p>
        
        <div className="space-y-4 mb-8">
          {[
            {
              title: "Tempi di implementazione 5x più rapidi",
              description: "2-4 settimane anziché 3-6 mesi grazie alla nostra piattaforma preconfigurabile",
              icon: <Clock className="w-5 h-5 text-indigo-400" />
            },
            {
              title: "Costi operativi ridotti del 40%",
              description: "Automazione avanzata dei processi e manutenzione proattiva con AI",
              icon: <TrendingUp className="w-5 h-5 text-indigo-400" />
            },
            {
              title: "Scalabilità illimitata",
              description: "Cresci senza interruzioni e aggiungi funzionalità in modo componibile",
              icon: <Zap className="w-5 h-5 text-indigo-400" />
            }
          ].map((item, index) => (
            <div key={index} className="flex">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 flex-shrink-0 border border-indigo-500/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/demo"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 inline-flex items-center font-medium"
          >
            Prenota una demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
          <Link 
            to="/case-studies"
            className="px-6 py-3 border-2 border-indigo-500/40 text-indigo-500 font-medium hover:bg-indigo-500/10 rounded-lg transition-all hover:-translate-y-1"
          >
            Leggi i case study
          </Link>
        </div>
      </div>
      
      {/* Immagine a destra */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 rounded-3xl blur-xl"></div>
        
        <div className="glass rounded-2xl border border-indigo-500/20 overflow-hidden relative z-10 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
            alt="Team collaborating on digital transformation" 
            className="w-full h-auto object-cover"
          />
          
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-transparent mix-blend-multiply"></div>
          
          {/* Card informative in overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between">
            <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-sm max-w-[45%]">
              <div className="text-lg font-bold text-white">-78%</div>
              <div className="text-xs text-white/70">Tempo di sviluppo</div>
            </div>
            
            <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-sm max-w-[45%]">
              <div className="text-lg font-bold text-white">+83%</div>
              <div className="text-xs text-white/70">Precisione decisionale</div>
            </div>
          </div>
        </div>
        
        {/* Quote in overlay */}
        <div className="absolute -bottom-5 -right-5 glass p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm bg-background/60 max-w-[80%] shadow-lg">
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H4.5C3.12 12 2 10.88 2 9.5V9C2 5.69 4.69 3 8 3H9V7H8C7.45 7 7 7.45 7 8V9.5C7 10.05 7.45 10.5 8 10.5H9C10.1 10.5 11 11.4 11 12.5V19C11 20.1 10.1 21 9 21H5C3.9 21 3 20.1 3 19V18H8V12ZM22 12H18.5C17.12 12 16 10.88 16 9.5V9C16 5.69 18.69 3 22 3H23V7H22C21.45 7 21 7.45 21 8V9.5C21 10.05 21.45 10.5 22 10.5H23C24.1 10.5 25 11.4 25 12.5V19C25 20.1 24.1 21 23 21H19C17.9 21 17 20.1 17 19V18H22V12Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <p className="text-sm italic mb-2">La soluzione ha ridotto i nostri tempi operativi del 68% fin dalla prima settimana di utilizzo.</p>
              <p className="text-xs font-bold">Marco Rossi, CTO</p>
              <p className="text-xs">TechVision Italia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
{/* FAQ Section - Layout a due colonne con visibilità condizionale */}
<section className="container mx-auto px-6 mb-24 relative z-10">
  <div className="text-center mb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Badge distintivo */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-4 relative">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2" 
             style={{ animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Domande Frequenti
        </span>
      </div>
      
      <h2 className="text-4xl font-bold mb-5">
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          Hai domande
        </span> sui nostri prodotti?
      </h2>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
        Risposte alle domande più comuni per aiutarti a scegliere la soluzione più adatta alle tue esigenze
      </p>
    </motion.div>
  </div>
  
  {/* Background effect */}
  <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>
  
  {/* FAQ a due colonne - prime 4 domande sempre visibili */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 relative z-10">
    {[
      {
        q: "Quale soluzione è più adatta per l'automazione dei processi aziendali?",
        a: "BioriAgent è la soluzione ideale per l'automazione dei processi aziendali. Offre agenti AI che operano 24/7, si adattano alle tue esigenze specifiche e si integrano con oltre 250 strumenti aziendali per trasformare flussi di lavoro complessi in processi automatizzati.",
        icon: <BrainCircuit className="w-5 h-5" />,
        color: "indigo"
      },
      {
        q: "Posso personalizzare le funzionalità delle soluzioni?",
        a: "Assolutamente sì. Tutte le nostre soluzioni sono completamente personalizzabili in base alle esigenze specifiche della tua azienda. Offriamo configurazione su misura, dashboard personalizzate e workflow adattabili, senza compromettere le performance o la semplicità d'uso.",
        icon: <Workflow className="w-5 h-5" />,
        color: "violet"
      },
      {
        q: "Come migliora BioriTalk l'esperienza dei clienti?",
        a: "BioriTalk migliora l'esperienza cliente con assistenti conversazionali avanzati disponibili 24/7 che comprendono il linguaggio naturale in oltre 24 lingue. Il sistema risolve automaticamente il 78% delle richieste, personalizza le interazioni e apprende continuamente per offrire risposte sempre più precise e pertinenti.",
        icon: <MessageSquare className="w-5 h-5" />,
        color: "purple"
      },
      {
        q: "Quanto tempo richiede l'implementazione delle soluzioni?",
        a: "Le nostre soluzioni vengono implementate in 2-4 settimane, un tempo significativamente inferiore rispetto ai 3-6 mesi richiesti dai metodi tradizionali. Questo è possibile grazie al nostro approccio AI-first, alle integrazioni precostituite e a un team di esperti dedicati che ti guida in ogni fase del processo.",
        icon: <Clock className="w-5 h-5" />,
        color: "blue"
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
        <details className="glass rounded-xl border border-t border-l border-white/10 border-r border-b border-white/5 overflow-hidden transition-all 
                           hover:border-t-indigo-500/30 hover:border-l-indigo-500/30
                           hover:border-r-violet-500/30 hover:border-b-violet-500/30
                           hover:shadow-xl hover:shadow-indigo-500/10">
          <summary className="flex items-center justify-between p-5 cursor-pointer">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg bg-${faq.color}-500/20 flex items-center justify-center mr-4 text-${faq.color}-400 transition-all group-hover:scale-110`}>
                {faq.icon}
              </div>
              <h3 className="text-lg font-medium">{faq.q}</h3>
            </div>
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-transform group-open:rotate-180">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </summary>
          
          <div className="p-5 pt-0">
            <div className="ml-14 text-foreground/70 border-t border-indigo-500/20 pt-4">
              {faq.a}
            </div>
          </div>
          
          {/* Effetto di luce diagonale su hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
        </details>
      </motion.div>
    ))}
  </div>
  
  {/* Domande aggiuntive che appaiono solo dopo aver cliccato "Visualizza tutte le domande" */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 relative z-10 mt-5">
    {showAllFaqs && (
      <>
        {[
          {
            q: "Come si integra BioriPMI con i sistemi gestionali esistenti?",
            a: "BioriPMI offre API RESTful e connettori predefiniti per tutti i principali sistemi gestionali (SAP, Oracle, Microsoft Dynamics, ecc.). Il processo di integrazione è gestito dal nostro team tecnico, che configura sincronizzazioni bidirezionali per garantire coerenza dei dati tra tutti i sistemi aziendali.",
            icon: <Cable className="w-5 h-5" />,
            color: "cyan"
          },
          {
            q: "Quali metriche fornisce QuantumInsight per misurare le performance?",
            a: "QuantumInsight offre dashboard personalizzabili con oltre 200 KPI preconfigurati relativi a vendite, marketing, operazioni e finanza. Il sistema genera automaticamente analisi predittive, rileva anomalie e identifica correlazioni tra dati, permettendoti di prendere decisioni strategiche basate su insights accurati in tempo reale.",
            icon: <BarChart3 className="w-5 h-5" />,
            color: "emerald"
          },
          {
            q: "Come garantite la sicurezza dei dati con OmniDoc?",
            a: "OmniDoc implementa crittografia end-to-end a 256 bit, autenticazione multi-fattore e controlli granulari degli accessi. Tutti i dati sono archiviati in data center certificati ISO 27001, con backup continui e conformità completa a GDPR e altre normative sulla privacy. Manteniamo inoltre un team dedicato alla sicurezza che monitora le minacce 24/7.",
            icon: <Shield className="w-5 h-5" />,
            color: "amber"
          },
          {
            q: "È possibile iniziare con una soluzione e aggiungerne altre in futuro?",
            a: "Assolutamente. La nostra piattaforma è modulare e scalabile, progettata per crescere con la tua azienda. Puoi iniziare con la soluzione che risponde alle tue esigenze più urgenti e aggiungerne altre quando necessario. Tutte le nostre soluzioni sono integrate nativamente, garantendo una perfetta interoperabilità quando decidi di espandere.",
            icon: <GitBranch className="w-5 h-5" />,
            color: "rose"
          }
        ].map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <details className="glass rounded-xl border border-t border-l border-white/10 border-r border-b border-white/5 overflow-hidden transition-all 
                            hover:border-t-indigo-500/30 hover:border-l-indigo-500/30
                            hover:border-r-violet-500/30 hover:border-b-violet-500/30
                            hover:shadow-xl hover:shadow-indigo-500/10">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg bg-${faq.color}-500/20 flex items-center justify-center mr-4 text-${faq.color}-400 transition-all group-hover:scale-110`}>
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-medium">{faq.q}</h3>
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-transform group-open:rotate-180">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </summary>
              
              <div className="p-5 pt-0">
                <div className="ml-14 text-foreground/70 border-t border-indigo-500/20 pt-4">
                  {faq.a}
                </div>
              </div>
              
              {/* Effetto di luce diagonale su hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
            </details>
          </motion.div>
        ))}
      </>
    )}
  </div>
  
  {/* Toggle per visualizzare tutte le domande */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.7, duration: 0.5 }}
    className="text-center mt-12"
  >
    <button 
      onClick={() => setShowAllFaqs(!showAllFaqs)}
      className="glass p-5 rounded-full border border-indigo-500/20 inline-flex items-center backdrop-blur-sm px-6 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
        <ListChecks className="w-5 h-5 text-indigo-400" />
      </div>
      <span className="font-medium mr-5">
        {showAllFaqs ? "Nascondi domande aggiuntive" : "Visualizza tutte le domande"}
      </span>
      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors">
        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAllFaqs ? 'rotate-90' : ''}`} />
      </div>
    </button>
  </motion.div>
</section>


      
      {/* Download di risorse gratuite - Generazione lead */}
      <section className="container mx-auto px-6 mb-24">
        <div className="glass rounded-2xl p-8 md:p-12 border border-indigo-500/20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/10 filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-violet-500/10 filter blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Risorse gratuite
                </span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Scarica guide e whitepaper esclusivi</h2>
              <p className="text-foreground/70 mb-8">
                Approfondisci la tua conoscenza con le nostre risorse premium gratuite. Case studies dettagliati, guide pratiche e best practices per massimizzare i risultati della trasformazione digitale.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Whitepaper: AI applicata al business",
                    desc: "30 pagine • PDF",
                    icon: <FileText className="w-5 h-5 text-indigo-400" />,
                    color: "indigo"
                  },
                  {
                    title: "Guida: Automazione processi aziendali",
                    desc: "45 pagine • PDF + Checklist",
                    icon: <FileCheck className="w-5 h-5 text-violet-400" />,
                    color: "violet"
                  },
                  {
                    title: "Case study: 5 storie di successo",
                    desc: "20 pagine • PDF",
                    icon: <FileSearch className="w-5 h-5 text-blue-400" />,
                    color: "blue"
                  }
                ].map((resource, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg border border-${resource.color}-500/30 hover:bg-${resource.color}-500/10 transition-all cursor-pointer`}
                  >
                    <div className={`w-10 h-10 rounded-full bg-${resource.color}-500/20 flex items-center justify-center mr-4`}>
                      {resource.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm">{resource.title}</h4>
                      <p className="text-xs text-foreground/60">{resource.desc}</p>
                    </div>
                    <Download className={`w-5 h-5 text-${resource.color}-400`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="glass p-6 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/5 to-violet-500/5">
                <h3 className="text-xl font-bold mb-6">Accedi alle risorse premium</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground/70 mb-2">Nome e cognome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 glass rounded-lg border border-white/20 bg-background/50 focus:outline-none focus:border-indigo-500/50"
                      placeholder="Inserisci il tuo nome" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground/70 mb-2">Email aziendale</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 glass rounded-lg border border-white/20 bg-background/50 focus:outline-none focus:border-indigo-500/50"
                      placeholder="nome@azienda.it" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm text-foreground/70 mb-2">Azienda</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full p-3 glass rounded-lg border border-white/20 bg-background/50 focus:outline-none focus:border-indigo-500/50"
                      placeholder="Nome azienda" 
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-foreground/70">
                      Acconsento al trattamento dei miei dati per ricevere materiale informativo e promozionale. Leggi la nostra <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all font-medium"
                  >
                    Scarica ora
                  </button>
                </form>
                
                <p className="text-center text-xs text-foreground/50 mt-4">
                  Non condividiamo mai i tuoi dati con terze parti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Modal per feedback (appare quando l'utente clicca "Mi interessa") */}
      {feedbackVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-xl border border-indigo-500/20 p-6 max-w-md w-full relative animate-fade-in">
            <button 
              onClick={() => setFeedbackVisible(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-foreground/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-4 text-center">Grazie per l'interesse!</h3>
            <p className="text-foreground/70 mb-6 text-center">
              Vuoi ricevere maggiori informazioni su questa funzionalità esclusiva?
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="w-full p-3 glass rounded-lg border border-white/20 bg-background/50 focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="consent-modal" 
                  className="mt-1"
                />
                <label htmlFor="consent-modal" className="text-sm text-foreground/70">
                  Acconsento a ricevere informazioni su questa funzionalità
                </label>
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Invia
                </button>
                
                <button 
                  type="button"
                  onClick={() => setFeedbackVisible(false)}
                  className="flex-1 py-3 glass border border-white/20 rounded-lg"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Stili CSS per animazioni */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          width: fit-content;
        }
        
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        
        .animate-testimonial-scroll {
          animation: testimonial-scroll 40s linear infinite;
          width: max-content;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        /* Definizione componenti mancanti per l'esempio */
        .FileText, .FileCheck, .FileSearch {
          display: inline-block;
        }
      `}} />
    </div>
  );
};

export default Products;
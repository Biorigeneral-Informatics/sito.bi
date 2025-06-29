// src/pages/Chatbots.tsx
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Users, 
  Zap, 
  BarChart, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Bot,
  Clock,
  Send,
  BookOpen,
  GraduationCap,
  ShoppingCart,
  Calendar,
  Heart,
  TrendingUp,
  Check,
  UserPlus,
  User,
  BarChart2,
  RefreshCw,
  Layers,
  Target,
  PlayCircle,
  Phone,
  AlertCircle
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';




// Typing animation hook - ottimizzato per prestazioni migliori
const useTypingAnimation = (text: string, speed: number = 30) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return { displayText, isComplete };
};

// Chat message component
interface ChatMessageProps {
  sender: 'bot' | 'user';
  message: string;
  isTyping?: boolean;
  delay?: number;
}


const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, isTyping = false, delay = 0 }) => {
  // For user messages, no typing animation
  if (sender === 'user') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3 }}
        className="flex justify-end mb-3"
      >
        <div className="glass rounded-lg p-3 max-w-xs bg-teal-500/5 border border-teal-500/20">
          <p className="text-sm">{message}</p>
        </div>
      </motion.div>
    );
  }
  
  // For bot messages with typing animation
  const { displayText, isComplete } = useTypingAnimation(isTyping ? message : '');
  
  return (

    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex mb-3"
    >
      <div className="w-8 h-8 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mr-3">
        <Bot className="w-4 h-4 text-green-400" />
      </div>
      <div className="glass rounded-lg p-3 max-w-xs bg-green-500/5 border border-green-500/20">
        {isTyping ? (
          <>
            <p className="text-sm">{displayText}</p>
            {!isComplete && (
              <div className="flex space-x-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm">{message}</p>
        )}
      </div>
    </motion.div>
  );
};

// Main component
const Chatbots = () => {
  const [categoryIndex, setCategoryIndex] = useState(0); // Initialize categoryIndex with default value 0
  const heroRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [demoStarted, setDemoStarted] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  
  // Scroll-linked animations
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 0]);
  
  // Generate particle data once at initialization
  const particlesData = useRef([...Array(20)].map(() => ({
    width: 3 + Math.random() * 6,
    height: 3 + Math.random() * 6,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 30 + Math.random() * 40,
    delay: Math.random() * 15,
    opacity: 0.3 + Math.random() * 0.4
  }))).current;
  
  // Track mouse for subtle hero section effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          setMousePosition({ x, y });
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Demo conversazionale corretta che non si bugga
  useEffect(() => {
    if (!demoStarted) return;
    
    // Timeouts più brevi e sequenza completa
    const timeouts: number[] = [];
    
    if (demoStep === 0) {
      timeouts.push(setTimeout(() => setDemoStep(1), 1000));  // User message appears
    } 
    else if (demoStep === 1) {
      timeouts.push(setTimeout(() => setDemoStep(2), 2000));  // Bot starts typing
    }
    else if (demoStep === 2) {
      timeouts.push(setTimeout(() => setDemoStep(3), 4000));  // User sends second message
    }
    else if (demoStep === 3) {
      timeouts.push(setTimeout(() => setDemoStep(4), 2000));  // Bot replies
    }
    
    // Auto-scroll chat container when new messages appear
    if (chatContainerRef.current && demoStep > 0) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [demoStarted, demoStep]);


  return (
    
    <div className="min-h-screen overflow-x-hidden">
      {/* Dynamic gradient backgrounds */}
      <ScrollGradient 
        colorStart="rgba(16, 185, 129, 0.3)" 
        colorEnd="rgba(6, 95, 70, 0.3)"  
        intensity={1.2} 
      />
      <ScrollGradient 
        colorStart="rgba(5, 150, 105, 0.25)" 
        colorEnd="rgba(4, 120, 87, 0.2)"    
        reverse={true} 
        className="opacity-70" 
      />

      {/* Hero section with interactive background e onda in basso */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden"
      >
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern with mouse interaction */}
          <div className="absolute inset-0" style={{ opacity: 0.1 }}>
            <div className="absolute h-full w-full grid grid-cols-12 gap-4 z-0">
              {[...Array(12)].map((_, i) => (
                <div key={`grid-col-${i}`} className="h-full border-r border-green-500/20"></div>
              ))}
            </div>
            <div className="absolute h-full w-full grid grid-rows-12 gap-4 z-0">
              {[...Array(12)].map((_, i) => (
                <div key={`grid-row-${i}`} className="w-full border-b border-green-500/20"></div>
              ))}
            </div>
          </div>
          
          {/* Animated horizontal lines with mouse interaction */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`h-line-${i}`}
              className="absolute h-[1px] bg-green-500/20"
              style={{
                top: `${8 + i * 8}%`,
                left: '0',
                right: '0',
                transform: `translateX(${(mousePosition.x - 0.5) * -5}px)`,
                opacity: 0.1 + (i % 3) * 0.15
              }}
            />
          ))}
          
          {/* Animated vertical lines with mouse interaction */}
          {[...Array(24)].map((_, i) => (
            <div 
              key={`v-line-${i}`}
              className="absolute w-[1px] bg-green-500/20"
              style={{
                left: `${4 + i * 4}%`,
                top: '0',
                bottom: '0',
                transform: `translateY(${(mousePosition.y - 0.5) * -5}px)`,
                opacity: 0.1 + (i % 3) * 0.15
              }}
            />
          ))}
          
          {/* Floating particles with continuous slow movement */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlesData.map((particle, i) => (
              <div 
                key={`particle-${i}`}
                className="absolute rounded-full bg-green-400/30 floating-particle"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  opacity: particle.opacity,
                  animationDuration: `${particle.duration}s`, 
                  animationDelay: `${particle.delay}s`
                }}
              />
            ))}
          </div>
          
          {/* Subtle gradient orbs - following mouse movement */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[120px] opacity-60"
            style={{
              left: `calc(${mousePosition.x * 100}% - 300px)`,
              top: `calc(${mousePosition.y * 100}% - 300px)`,
              transition: 'left 1.5s ease-out, top 1.5s ease-out',
              opacity: bgOpacity.get()
            }}
          />
          
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-teal-600/5 blur-[80px] opacity-50"
            style={{
              right: `calc(${(1-mousePosition.x) * 100}% - 200px)`,
              bottom: `calc(${(1-mousePosition.y) * 100}% - 200px)`,
              transition: 'right 1.5s ease-out, bottom 1.5s ease-out'
            }}
          />
          
          {/* Decorative shapes with slow animations */}
          <div className="absolute top-[20%] left-[15%] w-16 h-16 border-2 border-green-500/20 rounded-lg transform rotate-12 animate-pulse-slow"></div>
          <div className="absolute bottom-[25%] right-[10%] w-24 h-24 border border-emerald-500/15 rounded-full transform rotate-45 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
          
          {/* Nuova onda in basso - completamente nera */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="absolute bottom-0 w-full h-full"
            >
              <path 
                d="M0,0 C150,90 350,0 500,50 C650,100 750,20 900,40 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z" 
                className="fill-background"
              ></path>
              <path 
                d="M0,40 C150,70 300,10 450,30 C600,50 750,100 900,70 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z" 
                className="fill-background"
                style={{ opacity: 0.5 }}
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left column - Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-block mb-6 px-4 py-1 rounded-full border border-green-300/30 bg-green-500/5">
                <span className="text-green-400 text-sm font-medium">
                  Conversazione • Automazione • Intelligenza
                </span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-semibold mb-8 leading-tight text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  Chatbot AI <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-400">Conversazionali</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block mt-4 text-2xl md:text-3xl font-medium text-foreground/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Assistenti virtuali intelligenti per la tua azienda
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mb-8"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-foreground/80 max-w-xl mb-12 font-normal"
                style={{ fontFamily: 'var(--font-sans)' }}   
                           >
                Soluzioni AI avanzate che integrano natural language processing per 
                creare assistenti virtuali che comprendono contesto e offrono risposte personalizzate in tempo reale.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                <Link
                  to="/contact"
              className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                >
                  <span>Richiedi una Demo</span>
                 
                </Link>
                
                <Link
                  to="/products"
              className="glass px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-glass-secondary border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Esplora Soluzioni
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right column - Interactive chat demo con demo più breve e corretta */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden md:block"
              ref={demoRef}
            >
              <div className="relative glass border border-green-500/20 rounded-xl p-6 bg-background/60 backdrop-blur-sm shadow-2xl">
                {/* Chat header */}
                <div className="flex items-center mb-4 pb-3 border-b border-green-500/20">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">ChatBot</h3>
                    <span className="text-xs text-green-400 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-500/70"></div>
                  </div>
                </div>
                
                {/* Scrollable chat messages container - demo corretta */}
                <div ref={chatContainerRef} className="h-[220px] overflow-y-auto pr-2 custom-scrollbar" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(16, 185, 129, 0.2) transparent'}}>
                  {/* Initial bot greeting */}
                  <ChatMessage 
                    sender="bot" 
                    message="Ciao! Sono un ChatBot. Come posso aiutarti oggi?" 
                  />
                  
                  {/* Conversazione completa e corretta */}
                  {demoStep >= 1 && (
                    <ChatMessage 
                      sender="user" 
                      message="Voglio integrare un chatbot su Shopify. Quali funzionalità offrite?" 
                      delay={0.3}
                    />
                  )}
                  
                  {demoStep >= 2 && (
                    <ChatMessage 
                      sender="bot" 
                      message="Per Shopify offriamo: assistenza pre-acquisto, supporto checkout, tracking ordini, gestione resi automatizzata e raccomandazioni personalizzate." 
                      isTyping={demoStep === 2}
                      delay={0.3}
                    />
                  )}
                  
                  {demoStep >= 3 && (
                    <ChatMessage 
                      sender="user" 
                      message="Ottimo! Posso prenotare una demo?" 
                      delay={0.3}
                    />
                  )}
                  
                  {demoStep >= 4 && (
                    <ChatMessage 
                      sender="bot" 
                      message="Certamente! Puoi prenotare una demo attraverso la pagina 'Contatti' sul nostro sito, oppure possiamo contattarti noi. Qual è il modo migliore per raggiungerti?" 
                      isTyping={demoStep === 4}
                      delay={0.3}
                    />
                  )}
                </div>
                
                {/* Chat input */}
                <div className="mt-4 pt-3 border-t border-green-500/20 relative">
                  {!demoStarted ? (
                    <button 
                      onClick={() => setDemoStarted(true)}
                      className="w-full py-2 px-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-md text-white text-sm hover:shadow-lg hover:shadow-green-500/20 transition-all"
                    >
                      Avvia Demo
                    </button>
                  ) : (
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        placeholder="Scrivi un messaggio..."
                        className="flex-grow py-2 px-4 bg-background/50 rounded-md border border-green-500/20 focus:outline-none focus:border-green-500/50 text-sm transition-all"
                        disabled
                      />
                      <button className="ml-2 p-2 rounded-md bg-green-500/20 text-green-400">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-green-500/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-green-500/10 rounded-lg rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* What are Chatbots Section - Modern, Minimalist with Glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-green-500/10 filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/10 filter blur-[80px] opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollAnimation animation="fadeIn" className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Next-Gen Customer Engagement
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Cosa sono i Chatbot AI</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Assistenti virtuali intelligenti che rivoluzionano il modo in cui interagisci con i tuoi clienti
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-24 items-center mb-20">
            {/* Left side - 3D layered card with realistic glassmorphism */}
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="relative">
                {/* 3D layered cards with realistic glass effect */}
                <div className="relative aspect-square max-w-[500px] mx-auto">
                  {/* Base layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm shadow-xl transform rotate-6"></div>
                  
                  {/* Middle layer */}
                  <div className="absolute inset-2 bg-gradient-to-br from-teal-500/5 to-teal-500/10 rounded-3xl border border-teal-500/20 backdrop-blur-sm shadow-lg transform rotate-3"></div>
                  
                  {/* Top layer with content */}
                  <div className="absolute inset-4 bg-background/80 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg overflow-hidden">
                    <div className="h-full flex flex-col p-8 relative">
                      {/* Chat interface simulation */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <span className="text-sm font-bold">AI Chatbot</span>
                        </div>
                        <div className="ml-auto">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Online</span>
                        </div>
                      </div>
                      
                      {/* Chat messages */}
                      <div className="flex-grow space-y-4">
                        <div className="flex">
                          <div className="max-w-[80%] bg-green-500/10 rounded-lg p-3 border border-green-500/10">
                            <p className="text-sm">Come posso aiutarti oggi?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="max-w-[80%] bg-teal-500/10 rounded-lg p-3 border border-teal-500/10">
                            <p className="text-sm">Cerco informazioni sul prodotto X</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="max-w-[80%] bg-green-500/10 rounded-lg p-3 border border-green-500/10">
                            <p className="text-sm">Il prodotto X offre queste caratteristiche...</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input field */}
                      <div className="mt-6 relative">
                        <input
                          type="text"
                          className="w-full bg-background/50 border border-green-500/20 rounded-lg py-2 px-4 text-sm"
                          placeholder="Scrivi un messaggio..."
                          disabled
                        />
                        <Send className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500/60" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating icons around the card */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/20 shadow-lg animate-float-slow">
                    <MessageSquare className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-500/20 shadow-lg animate-float-slow-2">
                    <Zap className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Explanation text with feature highlights */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="space-y-8">
                <div className="bg-background/60 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    Assistenti Digitali Intelligenti
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    I chatbot AI sono interfacce conversazionali che simulano l'interazione umana attraverso 
                    algoritmi di Natural Language Processing. A differenza dei chatbot tradizionali basati su 
                    regole, utilizzano machine learning per comprendere il contesto e migliorare nel tempo.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/60 p-5 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 bg-gradient-to-br from-background/80 to-green-500/5 hover:from-background/70 hover:to-green-500/10 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">24/7 Disponibilità</h4>
                    <p className="text-sm text-foreground/70">
                      Supporto clienti continuo senza pause, riducendo i tempi di attesa e aumentando la soddisfazione.
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 bg-gradient-to-br from-background/80 to-teal-500/5 hover:from-background/70 hover:to-teal-500/10 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-all">
                      <Users className="w-6 h-6 text-teal-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Scalabilità Immediata</h4>
                    <p className="text-sm text-foreground/70">
                      Gestione simultanea di migliaia di conversazioni senza compromettere la qualità del servizio.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-background/60 p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">70%</div>
                    <p className="text-xs text-foreground/70">Riduzione costi supporto</p>
                  </div>
                  
                  <div className="bg-background/60 p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-1">35%</div>
                    <p className="text-xs text-foreground/70">Aumento conversioni</p>
                  </div>
                  
                  <div className="bg-background/60 p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                    <p className="text-xs text-foreground/70">Servizio continuo</p>
                  </div>
                </div>
                
                <div className="bg-background/60 p-5 rounded-xl border-t border-l border-r border-b-2 border-white/10 border-b-green-500/40 backdrop-blur-md shadow-lg shadow-black/10 bg-gradient-to-b from-background/80 to-green-500/5">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Perché Scegliere i Chatbot AI
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm">Personalizzazione in base a comportamenti e preferenze</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm">Integrazione con CRM, e-commerce e sistemi di gestione</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm">Automazione di processi ripetitivi e richieste comuni</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>




{/* Use Cases Section */}
<section className="py-8 md:py-20 relative z-10">
  
  <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-8 md:mb-16">
      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Aree di Applicazione
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Casi d'uso</h2>
      <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
        Le nostre tecnologie di intelligenza artificiale conversazionale si adattano 
        perfettamente a diversi casi d'uso, offrendo soluzioni specifiche per ogni esigenza
      </p>
    </div>

{/* Improved category selector - balanced size for mobile without scrollbar */}
<div className="flex justify-center mb-8 md:mb-16 relative">
  <div className="bg-background/30 backdrop-blur-sm rounded-full p-1.5 border border-green-500/20 shadow-lg shadow-green-500/5 flex flex-wrap justify-center">
    {[
      { name: 'Customer Support', icon: <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" /> },
      { name: 'Programmazione', icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
      { name: 'Vendite', icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> },
      { name: 'Formazione', icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
      { name: 'Educazione', icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5" /> }
    ].map((category, index) => (
      <button
        key={category.name}
        onClick={() => setCategoryIndex(index)}
        className={`relative rounded-full px-2.5 md:px-6 py-1.5 md:py-2.5 m-0.5 transition-all duration-300 ${
          categoryIndex === index 
            ? 'text-foreground' 
            : 'text-foreground/60 hover:text-foreground/80'
        }`}
      >
        {categoryIndex === index && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 opacity-90 animate-fadeIn"></span>
        )}
        <span className={`relative flex items-center gap-1.5 md:gap-2 text-sm md:text-base ${
          categoryIndex === index ? 'font-medium' : ''
        }`}>
          {category.icon}
          {category.name}
        </span>
      </button>
    ))}
  </div>
</div>

    {/* Content area - Mobile friendly approach */}
    <div className="md:relative md:min-h-[600px]">
      {/* Customer Support */}
      <div 
        className={`transition-all duration-500 ${
          categoryIndex === 0 
            ? 'opacity-100 translate-x-0' 
            : 'md:absolute md:inset-0 opacity-0 translate-x-full pointer-events-none hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <span className="text-sm font-medium text-green-400 flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Customer Support
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Assistenza Clienti 24/7
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Gestisci un'ampia gamma di richieste dei clienti 24 ore su 24, riducendo i tempi di attesa e migliorando la soddisfazione del cliente. Gli agenti possono risolvere problemi, elaborare resi e persino proporre prodotti aggiuntivi, mantenendo sempre una voce coerente del brand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-background to-green-500/5 rounded-xl p-4 md:p-5 border border-green-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Supporto continuo</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Assistenza 24/7 senza interruzioni per ridurre i tempi di attesa
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-green-500/5 rounded-xl p-4 md:p-5 border border-green-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Risoluzione problemi</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Troubleshooting automatico e gestione resi con voce del brand consistente
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-green-500/5 rounded-xl p-4 md:p-5 border border-green-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Upselling intelligente</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Proposte di prodotti aggiuntivi basate sul profilo e preferenze del cliente
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-green-500/5 rounded-xl p-4 md:p-5 border border-green-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Voce del brand</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Comunicazione coerente che riflette i valori e il tono della tua azienda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programmazione (Scheduling) */}
      <div 
        className={`transition-all duration-500 ${
          categoryIndex === 1 
            ? 'opacity-100 translate-x-0' 
            : 'md:absolute md:inset-0 opacity-0 translate-x-full pointer-events-none hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
              <span className="text-sm font-medium text-teal-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Programmazione
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Gestione Appuntamenti Intelligente
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Semplifica la prenotazione e gestione degli appuntamenti, dalla sanità ai servizi personali. I clienti possono facilmente programmare, riprogrammare o cancellare appuntamenti attraverso conversazioni naturali, riducendo le mancate presentazioni e migliorando l'efficienza operativa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-background to-teal-500/5 rounded-xl p-4 md:p-5 border border-teal-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                    <Calendar className="w-4 h-4 text-teal-400" />
                  </div>
                  <h4 className="font-semibold">Prenotazione facilitata</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Interfaccia conversazionale intuitiva per prenotazioni rapide e semplici
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-teal-500/5 rounded-xl p-4 md:p-5 border border-teal-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                    <RefreshCw className="w-4 h-4 text-teal-400" />
                  </div>
                  <h4 className="font-semibold">Gestione flessibile</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Riprogrammazione e cancellazioni immediate con notifiche automatiche
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-teal-500/5 rounded-xl p-4 md:p-5 border border-teal-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                    <AlertCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  <h4 className="font-semibold">Riduzione no-show</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Promemoria automatici e conferme per minimizzare le mancate presentazioni
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-teal-500/5 rounded-xl p-4 md:p-5 border border-teal-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                    <BarChart2 className="w-4 h-4 text-teal-400" />
                  </div>
                  <h4 className="font-semibold">Efficienza operativa</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Ottimizzazione automatica dei calendari e gestione delle disponibilità
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendite (Outbound Sales) */}
      <div 
        className={`transition-all duration-500 ${
          categoryIndex === 2 
            ? 'opacity-100 translate-x-0' 
            : 'md:absolute md:inset-0 opacity-0 translate-x-full pointer-events-none hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="text-sm font-medium text-blue-400 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Vendite
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Vendite Outbound Personalizzate
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Conduci chiamate a freddo personalizzate su larga scala, qualificando i lead e fissando appuntamenti per il tuo team. Gli agenti possono adattare il loro approccio in base alle risposte dei clienti, garantendo maggiore coinvolgimento e tassi di conversione più elevati.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-background to-blue-500/5 rounded-xl p-4 md:p-5 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Cold calling scalabile</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Chiamate personalizzate su larga scala con approcci adattivi per ogni prospect
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-blue-500/5 rounded-xl p-4 md:p-5 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Qualificazione lead</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Identificazione automatica dei prospect qualificati per il follow-up umano
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-blue-500/5 rounded-xl p-4 md:p-5 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Adattamento dinamico</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Pitch che si adatta in tempo reale alle risposte e al comportamento del cliente
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-blue-500/5 rounded-xl p-4 md:p-5 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Conversioni elevate</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Maggiore coinvolgimento e tassi di conversione grazie alla personalizzazione
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formazione (Learning & Development) */}
      <div 
        className={`transition-all duration-500 ${
          categoryIndex === 3 
            ? 'opacity-100 translate-x-0' 
            : 'md:absolute md:inset-0 opacity-0 translate-x-full pointer-events-none hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <span className="text-sm font-medium text-purple-400 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Formazione
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Formazione e Sviluppo Personalizzati
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Crea esperienze di formazione personalizzate che si adattano al ritmo e al ruolo di ogni dipendente. Pratica scenari del mondo reale come chiamate di vendita, conversazioni difficili e procedure di conformità attraverso simulazioni vocali interattive. Fornisci feedback istantaneo, monitora la progressione delle competenze e garantisci qualità di formazione costante nei team globali.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-background to-purple-500/5 rounded-xl p-4 md:p-5 border border-purple-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Formazione personalizzata</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Esperienze adattive basate sul ritmo e ruolo specifico di ogni dipendente
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-purple-500/5 rounded-xl p-4 md:p-5 border border-purple-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                    <PlayCircle className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Simulazioni realistiche</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Scenari di vendita, conversazioni difficili e procedure di conformità
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-purple-500/5 rounded-xl p-4 md:p-5 border border-purple-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                    <MessageCircle className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Feedback istantaneo</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Valutazioni immediate e suggerimenti per il miglioramento continuo
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-purple-500/5 rounded-xl p-4 md:p-5 border border-purple-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Monitoraggio progressi</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Tracciamento delle competenze e miglioramento delle performance nel tempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educazione */}
      <div 
        className={`transition-all duration-500 ${
          categoryIndex === 4 
            ? 'opacity-100 translate-x-0' 
            : 'md:absolute md:inset-0 opacity-0 translate-x-full pointer-events-none hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="text-sm font-medium text-emerald-400 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                Educazione
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Apprendimento Personalizzato
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Fornisci esperienze di apprendimento personalizzate, offrendo spiegazioni, quiz e lezioni adattive basate sul progresso dello studente. Supporta varie materie e stili di apprendimento, rendendo l'educazione più accessibile e coinvolgente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-background to-emerald-500/5 rounded-xl p-4 md:p-5 border border-emerald-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold">Tutor personalizzato</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Supporto adattivo basato sullo stile di apprendimento e livello dello studente
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-emerald-500/5 rounded-xl p-4 md:p-5 border border-emerald-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold">Quiz interattivi</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Valutazioni dinamiche che si adattano al livello di comprensione
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-emerald-500/5 rounded-xl p-4 md:p-5 border border-emerald-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3">
                    <Layers className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold">Materie multiple</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Supporto per diverse discipline accademiche e stili di apprendimento
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-background to-emerald-500/5 rounded-xl p-4 md:p-5 border border-emerald-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold">Progressi tracciati</h4>
                </div>
                <p className="text-sm text-foreground/70 pl-11">
                  Monitoraggio del miglioramento e identificazione aree di crescita
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Benefits Section - Completely Redesigned */}
<section className="py-4 relative overflow-visible z-0">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-green-900/5 to-background"></div>
    <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-green-500/5 filter blur-3xl"></div>
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 filter blur-3xl"></div>
    
    {/* Animated particles */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => (
        <div 
          key={`particle-${i}`}
          className="absolute rounded-full bg-green-500"
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animation: `float-particle ${10 + Math.random() * 20}s infinite linear`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  </div>
  
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Impatto Aziendale Misurabile
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Vantaggi Competitivi</h2>
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Trasforma il tuo business con soluzioni conversazionali che ottimizzano i processi,
        riducono i costi e migliorano significativamente l'esperienza cliente
      </p>
    </div>
    
    {/* Hexagon Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
      <div className="md:col-span-4 md:col-start-1 md:row-start-1">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-4 border border-green-500/30">
            <Zap className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Riduzione Costi<br/>Operativi</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Automazione fino al 70% delle richieste di supporto con risposte precise e contestuali
          </p>
          <div className="mt-4 text-3xl font-bold text-green-400">-40%</div>
        </div>
      </div>
      
      <div className="md:col-span-4 md:col-start-5 md:row-start-1">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center mb-4 border border-teal-500/30">
            <Clock className="w-8 h-8 text-teal-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Disponibilità<br/>24/7</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Assistenza clienti senza interruzioni, in ogni momento della giornata e in tutte le lingue
          </p>
          <div className="mt-4 text-3xl font-bold text-teal-400">100%</div>
        </div>
      </div>
      
      <div className="md:col-span-4 md:col-start-9 md:row-start-1">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/30">
            <UserPlus className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Aumento<br/>Conversioni</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Incremento significativo delle vendite con supporto proattivo e personalizzato
          </p>
          <div className="mt-4 text-3xl font-bold text-emerald-400">+35%</div>
        </div>
      </div>
      
      <div className="md:col-span-4 md:col-start-3 md:row-start-2">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-4 border border-green-500/30">
            <Heart className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Soddisfazione<br/>Cliente</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Esperienze personalizzate che costruiscono fedeltà e aumentano il valore del cliente
          </p>
          <div className="mt-4 text-3xl font-bold text-green-400">+42%</div>
        </div>
      </div>
      
      <div className="md:col-span-4 md:col-start-3 md:row-start-2">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-4 border border-green-500/30">
            <Heart className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Soddisfazione<br/>Cliente</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Esperienze personalizzate che costruiscono fedeltà e aumentano il valore del cliente
          </p>
          <div className="mt-4 text-3xl font-bold text-green-400">+42%</div>
        </div>
      </div>
      
      <div className="md:col-span-4 md:col-start-7 md:row-start-2">
        <div className="h-full bg-hexagon-shape bg-no-repeat bg-contain bg-center p-8 aspect-square flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center mb-4 border border-teal-500/30">
            <BarChart className="w-8 h-8 text-teal-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Insights<br/>Azionabili</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Analisi dettagliata delle conversazioni per identificare trend e opportunità di business
          </p>
          <div className="mt-4 text-3xl font-bold text-teal-400">+60%</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Final CTA Section - Con gradient che si estende sopra e sotto */}
<section className="py-60 relative overflow-hidden z-20">
  {/* Gradient circolare pulsante che si estende oltre i confini della sezione (sopra e sotto) */}
  <div className="absolute inset-0 -top-16 -bottom-16 flex items-center justify-center overflow-visible z-10">
    <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/15 to-green-400/10 blur-3xl animate-pulse-slow"></div>
    
    <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-emerald-500/5 via-green-500/10 to-emerald-400/5 blur-2xl animate-pulse-slow-2"></div>
    
    {/* Gradient esteso verso l'alto per mascherare la linea di separazione superiore */}
    <div className="absolute top-0 -translate-y-full left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    
    {/* Gradient esteso verso il basso per mascherare la linea di separazione inferiore */}
    <div className="absolute bottom-0 translate-y-full left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10"></div>
  </div>
  
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-background/80 to-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Pronto a Rivoluzionare la Tua Customer Experience?
          </h2>
          <p className="text-foreground/80 mb-6">
            Contattaci oggi per una demo personalizzata della nostra piattaforma di intelligenza artificiale conversazionale e scopri come può trasformare il tuo business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl shadow-md hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
            >
              <span>Richiedi una Demo</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
          </div>
        </div>
        
        <div className="md:w-1/3 flex flex-col gap-5">
          <div className="flex items-center p-4 bg-gradient-to-br from-background/80 to-green-500/5 rounded-xl border border-green-500/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mr-4">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="font-bold">Consulenza Gratuita</h4>
              <p className="text-xs text-foreground/60">30 minuti con un esperto del settore</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-gradient-to-br from-background/80 to-green-500/5 rounded-xl border border-green-500/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mr-4">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="font-bold">Setup Rapido</h4>
              <p className="text-xs text-foreground/60">Implementazione in soli 14 giorni</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-gradient-to-br from-background/80 to-green-500/5 rounded-xl border border-green-500/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mr-4">
              <Check className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="font-bold">Prova Senza Impegno</h4>
              <p className="text-xs text-foreground/60">Periodo di prova di 30 giorni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Custom animations styles */}
<div dangerouslySetInnerHTML={{ __html: `
<style>
 @keyframes pulse-line {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.3; }
    }
    
    @keyframes pulse-dot {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.5); }
    }
    
    @keyframes float-particle {
      0% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(30px); }
      75% { transform: translateY(20px) translateX(15px); }
      100% { transform: translateY(0) translateX(0); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.9; }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s forwards;
    }
    
    .bg-hexagon-shape {
      background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%2322c55e' stroke-width='1' stroke-opacity='0.2' d='M400,100 L700,250 L700,550 L400,700 L100,550 L100,250 Z'/%3E%3C/svg%3E");
    }
    
    .bg-grid-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0z' fill='%2322c55e' fill-opacity='0.05'/%3E%3C/svg%3E");
      background-size: 20px 20px;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(16, 185, 129, 0.2);
      border-radius: 20px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(16, 185, 129, 0.4);
    }


    @keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes pulse-slow-2 {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.08); }
}

.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}

.animate-pulse-slow-2 {
  animation: pulse-slow-2 12s infinite ease-in-out;

</style>
` }} />
    </div>
  );
};

export default Chatbots;
            
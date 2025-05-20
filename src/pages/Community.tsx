// src/pages/Community.tsx
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ArrowDown,
  Users,
  CheckCircle,
  Youtube,
  Clock,
  Calendar,
  Send,
  Heart,
  Star,
  Share2,
  ExternalLink,
  MessageSquare,
  Shield,
  FileCode,
  FileText,
  Flag,
  Award,
  Bot,
  Code,
  BrainCircuit,
  Play,
  ChevronDown,
  Zap,
  PlusCircle,
  Eye,
  Download,
  HelpCircle,
  Video,
  Sparkles
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import '../styles/community.css';

const Community = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Dynamic gradient backgrounds */}
      <ScrollGradient 
        colorStart="rgba(99, 102, 241, 0.3)" 
        colorEnd="rgba(56, 189, 248, 0.3)"  
        intensity={1.2} 
      />
      <ScrollGradient 
        colorStart="rgba(124, 58, 237, 0.25)" 
        colorEnd="rgba(45, 212, 191, 0.2)"    
        reverse={true} 
        className="opacity-70" 
      />

      {/* Hero section with interactive background */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-hero-pattern"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern with mouse interaction */}
          <div className="absolute inset-0 bg-grid-pattern" style={{ opacity: 0.1 }}></div>
          
          {/* Animated horizontal lines with mouse interaction */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`h-line-${i}`}
              className="absolute h-[1px] bg-purple-500/20"
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
              className="absolute w-[1px] bg-purple-500/20"
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
                className="absolute rounded-full bg-purple-400/30 floating-particle"
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
            className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] opacity-60"
            style={{
              left: `calc(${mousePosition.x * 100}% - 300px)`,
              top: `calc(${mousePosition.y * 100}% - 300px)`,
              transition: 'left 1.5s ease-out, top 1.5s ease-out',
              opacity: bgOpacity.get()
            }}
          />
          
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[80px] opacity-50"
            style={{
              right: `calc(${(1-mousePosition.x) * 100}% - 200px)`,
              bottom: `calc(${(1-mousePosition.y) * 100}% - 200px)`,
              transition: 'right 1.5s ease-out, bottom 1.5s ease-out'
            }}
          />
          
          {/* Decorative shapes with slow animations */}
          <div className="absolute top-[20%] left-[15%] w-16 h-16 border-2 border-purple-500/20 rounded-lg transform rotate-12 animate-pulse-slow"></div>
          <div className="absolute bottom-[25%] right-[10%] w-24 h-24 border border-cyan-500/15 rounded-full transform rotate-45 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
          
          {/* Onda in basso */}
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
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-300/30 bg-purple-500/5">
                <span className="text-purple-400 text-sm font-medium">
                  Condividi • Impara • Collabora
                </span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  La <span className="text-gradient-purple">Community</span> Biorigeneral
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block mt-4 text-2xl md:text-3xl font-normal text-foreground/80"
                >
                  Unisciti al nostro ecosistema di innovatori e sviluppatori
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-8"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-foreground/80 max-w-xl mb-12"
              >
                Scopri risorse, eventi live, discuti con altri professionisti e accedi a contenuti esclusivi
                nel campo del software e dell'intelligenza artificiale.
              </motion.p>
              
              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                <a
                  href="https://www.patreon.com/biorigeneral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center group"
                >
                  <span>Unisciti su Patreon</span>
                  <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
                    <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
                  </div>
                </a>
                
                <a
                  href="https://discord.gg/biorigeneral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-purple-500/30 text-foreground hover:bg-purple-500/10 rounded-lg transition-all hover:-translate-y-1 flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Discord Community
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right: Community Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:block"
            >
              <div className="glass community-stats-card rounded-xl border border-purple-500/20 shadow-xl p-6 backdrop-blur-lg">
                <div className="flex items-center mb-6 pb-3 border-b border-purple-500/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Community Hub</h3>
                    <p className="text-sm text-foreground/70">L'ecosistema Biorigeneral</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Discord Stats */}
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="w-5 h-5 text-purple-400 mr-2" />
                      <h4 className="font-medium">Discord</h4>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-2xl font-bold text-purple-400">3,240+</div>
                        <div className="text-xs text-foreground/60">membri</div>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-1.5 animate-pulse"></div>
                        Attivo
                      </div>
                    </div>
                  </div>
                  
                  {/* YouTube Stats */}
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Youtube className="w-5 h-5 text-red-400 mr-2" />
                      <h4 className="font-medium">YouTube</h4>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-2xl font-bold text-red-400">52</div>
                        <div className="text-xs text-foreground/60">video</div>
                      </div>
                      <div className="text-2xl font-bold text-red-400">920+</div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <h4 className="text-sm font-medium text-foreground/70 mb-3">Attività Recenti</h4>
                <div className="space-y-3">
                  <div className="flex items-center p-3 glass rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <FileCode className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm">Nuova guida: React Optimization</p>
                      <span className="text-xs text-foreground/50">3 giorni fa</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 glass rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                      <Video className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm">Live Coding: API Integration</p>
                      <span className="text-xs text-foreground/50">1 settimana fa</span>
                    </div>
                  </div>
                </div>
                
                {/* Trending Topic */}
                <div className="mt-5 p-3 glass rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/5">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                    <h4 className="text-sm font-medium">Topic di Tendenza</h4>
                  </div>
                  <p className="text-sm">AI Integration in Web Apps</p>
                  <div className="w-full h-1.5 bg-background/50 rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Down Indicator - Animated */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="scroll-down-indicator"
          >
            <p className="text-foreground/60 mb-3 text-center">Scorri per scoprire di più</p>
            <div className="scroll-down-arrow">
              <ArrowDown className="text-purple-400 w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 filter blur-[80px] opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollAnimation animation="fadeIn" className="mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Video Tutorials & Live Coding
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Canale YouTube</h2>
            <p className="text-xl text-foreground/80 max-w-2xl">
              Tutorial, webinar e sessioni di live coding per accelerare il tuo percorso di apprendimento
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - YouTube description */}
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-background/60 p-6 rounded-xl border border-purple-500/20 backdrop-blur-md shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                      <Youtube className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Biorigeneral Channel</h3>
                      <p className="text-foreground/70 text-sm">920+ iscritti • 52 video</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6">
                    Sul nostro canale YouTube pubblichiamo regolarmente contenuti di alta qualità sul mondo 
                    dello sviluppo software, intelligenza artificiale, e best practices per sviluppatori.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Play className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Tutorial pratici</h4>
                        <p className="text-sm text-foreground/70">
                          Tutorial passo-passo su React, Node.js, Python e altre tecnologie moderne
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Clock className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Live Coding Sessions</h4>
                        <p className="text-sm text-foreground/70">
                          Sessioni di programmazione in diretta con Q&A interattive
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Calendar className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Webinar e Workshop</h4>
                        <p className="text-sm text-foreground/70">
                          Approfondimenti su temi specifici con la partecipazione di esperti del settore
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href="https://www.youtube.com/@biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <span>Visita il Canale</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Featured video */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="video-container border border-purple-500/20 shadow-xl">
                <div className="video-placeholder bg-indigo-900/30">
                  {/* Placeholder per il video, inserire il proprio iframe YouTube qui */}
                  <div className="text-center p-6 w-full">
                    <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-purple-400" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Ultimo Tutorial</h3>
                    <p className="text-foreground/70 mb-4">Integrazione di ChatGPT in applicazioni React</p>
                    <a 
                      href="https://www.youtube.com/@biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      <span>Guarda ora</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-background/60 p-3 rounded-lg border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400">920+</div>
                  <div className="text-xs text-foreground/60">Iscritti</div>
                </div>
                <div className="bg-background/60 p-3 rounded-lg border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400">52</div>
                  <div className="text-xs text-foreground/60">Video</div>
                </div>
                <div className="bg-background/60 p-3 rounded-lg border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400">15K+</div>
                  <div className="text-xs text-foreground/60">Visualizzazioni</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section - Side by side */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-purple-900/5 to-background">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollAnimation animation="fadeIn" className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Piattaforme Interconnesse
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Un Ecosistema Completo</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Tutto ciò di cui hai bisogno per crescere come sviluppatore e restare all'avanguardia
            </p>
          </ScrollAnimation>
          
          {/* Feature cards - 3 columns with gradient border */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Discord */}
            <ScrollAnimation animation="fadeIn" delay={0.1}>
              <div className="feature-card glass p-6 md:p-8 rounded-xl border border-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                    <MessageSquare className="w-7 h-7 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">Discord Community</h3>
                  <p className="text-foreground/70 mb-6">
                    Una community attiva dove condividere conoscenze, ricevere aiuto e collaborare con altri sviluppatori.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span className="text-foreground/80">3,240+ membri attivi</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span className="text-foreground/80">Canali tematici specializzati</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span className="text-foreground/80">Supporto tecnico in tempo reale</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span className="text-foreground/80">Eventi e collaborazioni</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="https://discord.gg/biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                    >
                      <span>Unisciti al Discord</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Card 2: Patreon */}
            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <div className="feature-card glass p-6 md:p-8 rounded-xl border border-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/10"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">Patreon Supporter</h3>
                  <p className="text-foreground/70 mb-6">
                    Accedi a contenuti esclusivi, code reviews e supporto personalizzato per il tuo percorso professionale.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-foreground/80">Contenuti esclusivi e avanzati</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-foreground/80">Tutorial completi con codice sorgente</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-foreground/80">Code reviews personalizzate</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-foreground/80">Sessioni Q&A mensili</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="https://www.patreon.com/biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                    >
                      <span>Visita su Patreon</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Card 3: YouTube */}
            <ScrollAnimation animation="fadeIn" delay={0.5}>
              <div className="feature-card glass p-6 md:p-8 rounded-xl border border-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/10"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                    <Youtube className="w-7 h-7 text-red-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">YouTube Channel</h3>
                  <p className="text-foreground/70 mb-6">
                    Video tutorial, sessioni di live coding e webinar per apprendere le tecnologie più richieste.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-foreground/80">Tutorial pratici e dettagliati</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-foreground/80">Live coding sessions settimanali</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-foreground/80">Interviste con esperti del settore</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-foreground/80">Progetti pratici step-by-step</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="https://www.youtube.com/@biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-400 hover:text-red-300 hover:underline transition-colors"
                    >
                      <span>Visita il Canale</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Discord Community Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 filter blur-[80px] opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Discord Feature List */}
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Collaborazione & Networking
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Discord Community</h2>
                <p className="text-xl text-foreground/80 mb-8">
                  Connettiti con altri sviluppatori, condividi conoscenze e collabora in un ambiente stimolante
                </p>
                
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Networking con professionisti</h4>
                      <p className="text-foreground/70">
                        Connettiti con altri sviluppatori, designer e professionisti del settore tech da tutto il mondo.
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Canali tematici</h4>
                      <p className="text-foreground/70">
                        Discussioni organizzate per argomento, dalle tecnologie front-end all'AI, dal cloud al mobile.
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Supporto tecnico</h4>
                      <p className="text-foreground/70">
                        Ottieni aiuto dalla community per risolvere problemi di coding e implementare soluzioni.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://discord.gg/biorigeneral" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1"
                  >
                    <span>Unisciti a 3,240+ membri</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right: Discord Preview */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="glass rounded-xl border border-indigo-500/20 overflow-hidden shadow-xl">
                {/* Discord header */}
                <div className="bg-indigo-900/30 p-4 border-b border-indigo-500/20">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Biorigeneral Community</h3>
                      <div className="flex items-center text-xs text-foreground/60">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>3,240 online</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Discord content area */}
                <div className="grid grid-cols-3">
                  {/* Sidebar */}
                  <div className="bg-background/60 p-4 border-r border-indigo-500/20">
                    <h4 className="uppercase text-xs font-bold text-foreground/50 mb-3">Canali</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground/90 cursor-pointer">
                        <ChevronDown className="w-4 h-4 mr-1" />
                        <span>🌐 GENERALI</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>welcome</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>announcements</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground/90 cursor-pointer">
                        <ChevronDown className="w-4 h-4 mr-1" />
                        <span>💻 SVILUPPO</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>react-discussions</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>backend-tech</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>ai-ml-projects</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground/90 cursor-pointer">
                        <ChevronDown className="w-4 h-4 mr-1" />
                        <span>🚀 RISORSE</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>learning-paths</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-foreground/90 pl-5">
                        <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                        <span>job-opportunities</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat area */}
                  <div className="col-span-2 p-4">
                    <div className="flex items-center mb-6">
                      <MessageSquare className="w-5 h-5 text-indigo-400 mr-2" />
                      <span className="font-bold">react-discussions</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex-shrink-0 mr-3">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-purple-400 font-bold">A</div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-bold text-purple-400 mr-2">Alessandro</span>
                            <span className="text-xs text-foreground/50">Oggi alle 14:32</span>
                          </div>
                          <p className="text-sm">Hey, ho appena completato il tutorial su React Hooks. Davvero ben fatto!</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 mr-3">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-indigo-400 font-bold">M</div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-bold text-indigo-400 mr-2">Marco_dev</span>
                            <span className="text-xs text-foreground/50">Oggi alle 14:40</span>
                          </div>
                          <p className="text-sm">Anch'io! Qualcuno sa se c'è una guida simile per i custom hooks?</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex-shrink-0 mr-3">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-cyan-400 font-bold">F</div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-bold text-cyan-400 mr-2">Federico</span>
                            <span className="px-1.5 py-0.5 text-xs rounded-md bg-cyan-500/20 text-cyan-400 mr-2">Admin</span>
                            <span className="text-xs text-foreground/50">Oggi alle 14:45</span>
                          </div>
                          <p className="text-sm">Certo! Nel canale #resources ho appena caricato una guida sui custom hooks con esempi pratici. Date un'occhiata!</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-background/50 border border-indigo-500/20 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-indigo-500/40"
                        placeholder="Invia un messaggio..."
                        disabled
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <PlusCircle className="w-5 h-5 text-foreground/50" />
                        <Send className="w-5 h-5 text-foreground/50" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-indigo-500/20 bg-background/40">
                  <div className="text-center">
                    <a 
                      href="https://discord.gg/biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition-all"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Unisciti al Discord</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Patreon Features Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-purple-900/5 to-background">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 filter blur-[80px] opacity-60"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-7 gap-10 items-center">
            {/* Patreon Dashboard Preview - 3 columns */}
            <div className="md:col-span-4 order-2 md:order-1">
              <ScrollAnimation animation="slideRight" delay={0.2}>
                <div className="glass rounded-xl border border-purple-500/20 overflow-hidden shadow-xl p-6">
                  <div className="flex items-center mb-6 pb-2 border-b border-purple-500/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Risorse Esclusive Patreon</h3>
                      <p className="text-sm text-foreground/70">Contenuti premium per la tua crescita professionale</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Featured content item 1 */}
                    <div className="glass p-4 rounded-lg hover:bg-purple-500/5 transition-colors relative overflow-hidden group cursor-pointer">
                      <span className="absolute top-1 right-1 text-xs px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-300">New</span>
                      <div className="flex items-center mb-3">
                        <FileCode className="w-5 h-5 text-purple-400 mr-2" />
                        <h4 className="font-medium">Advanced React Patterns</h4>
                      </div>
                      <p className="text-sm text-foreground/70 mb-2">
                        Implementazioni avanzate di React Hooks, Context API e pattern di performance.
                      </p>
                      <div className="flex items-center mt-2 text-xs">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Premium</span>
                        <span className="ml-auto text-foreground/50">3 giorni fa</span>
                      </div>
                    </div>
                    
                    {/* Featured content item 2 */}
                    <div className="glass p-4 rounded-lg hover:bg-purple-500/5 transition-colors relative overflow-hidden group cursor-pointer">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-cyan-400 mr-2" />
                        <h4 className="font-medium">AI Integration Guide</h4>
                      </div>
                      <p className="text-sm text-foreground/70 mb-2">
                        Come integrare modelli AI avanzati nelle tue applicazioni web e mobile.
                      </p>
                      <div className="flex items-center mt-2 text-xs">
                        <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">Whitepaper</span>
                        <span className="ml-auto text-foreground/50">1 settimana fa</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {/* Video course preview */}
                    <div className="glass p-4 rounded-lg hover:bg-purple-500/5 transition-colors">
                      <div className="flex items-center mb-3">
                        <Video className="w-5 h-5 text-purple-400 mr-2" />
                        <h4 className="font-medium">Architecting Modern Applications</h4>
                        <span className="ml-auto text-xs text-foreground/50">8 moduli • 4.5 ore</span>
                      </div>
                      
                      <div className="relative bg-background/30 rounded overflow-hidden mb-3" style={{ paddingTop: '38%' }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-purple-500/50 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full h-1.5 bg-background/50 rounded-full overflow-hidden mb-3">
                        <div className="h-full w-[65%] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
                      </div>
                      
                      <div className="flex items-center text-xs">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Serie Corso</span>
                        <span className="ml-auto text-foreground/70">65% completato</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Benefits highlight */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="glass p-3 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                        <Code className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-xs text-foreground/80">Codice sorgente completo</span>
                    </div>
                    
                    <div className="glass p-3 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-xs text-foreground/80">Documentazione avanzata</span>
                    </div>
                    
                    <div className="glass p-3 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                        <BrainCircuit className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-xs text-foreground/80">Progetti completi</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            
            {/* Right: Content description */}
            <div className="md:col-span-3 order-1 md:order-2">
              <ScrollAnimation animation="slideLeft" delay={0.3}>
                <div className="text-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                    <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Contenuti Esclusivi & Supporto
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6">Patreon Community</h2>
                  <p className="text-xl text-foreground/80 mb-8">
                    Accedi a contenuti premium, tutorial avanzati e supporto personalizzato per accelerare la tua crescita professionale
                  </p>
                  
                  <div className="space-y-5">
                    {/* Feature 1 */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <FileCode className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Tutorial avanzati con codice sorgente</h4>
                        <p className="text-foreground/70">
                          Accedi a guide dettagliate con il codice sorgente completo di ogni progetto e spiegazioni passo-passo.
                        </p>
                      </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Video className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Corsi video esclusivi</h4>
                        <p className="text-foreground/70">
                          Serie di video formativi completi su argomenti avanzati, non disponibili sul canale YouTube pubblico.
                        </p>
                      </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Sessioni Q&A mensili</h4>
                        <p className="text-foreground/70">
                          Sessioni live dove potrai porre domande direttamente al team su codice, progetti e carriera.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="https://www.patreon.com/biorigeneral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1 group"
                    >
                      <span>Accedi ai contenuti premium</span>
                      <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
                        <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
                        <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden z-20">
        {/* Gradient circolare pulsante */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible z-10">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/15 to-cyan-400/10 blur-3xl animate-pulse-slow"></div>
          
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/10 to-cyan-400/5 blur-2xl animate-pulse-slow-2"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto glass border border-purple-500/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Unisciti alla Community Biorigeneral
                </h2>
                <p className="text-foreground/80 mb-6">
                  Entra a far parte di un gruppo di sviluppatori appassionati, condividi conoscenze e accelera la tua crescita professionale con risorse e supporto di qualità.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.patreon.com/biorigeneral" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-xl shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
                  >
                    <span>Unisciti su Patreon</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href="https://discord.gg/biorigeneral" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-purple-500/30 text-foreground hover:bg-purple-500/10 rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Discord Community</span>
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/3 flex flex-col gap-5">
                <div className="flex items-center p-4 glass rounded-xl border border-purple-500/20 hover-lift">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/10 flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Discord Community</h4>
                    <p className="text-xs text-foreground/60">3,240+ membri attivi</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 glass rounded-xl border border-purple-500/20 hover-lift">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/10 flex items-center justify-center mr-4">
                    <Youtube className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Video Tutorial</h4>
                    <p className="text-xs text-foreground/60">52+ video disponibili</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 glass rounded-xl border border-purple-500/20 hover-lift">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/10 flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Supporto Continuo</h4>
                    <p className="text-xs text-foreground/60">Aiuto quando ne hai bisogno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
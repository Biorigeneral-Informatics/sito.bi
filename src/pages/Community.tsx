// src/pages/Community.tsx
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  ArrowRight,
  Youtube,
  Crown,
  MessageCircle,
  Download,
  Clock,
  Shield,
  Heart,
  Trophy,
  Gamepad2,
  Headphones,
  Coffee,
  Bell,
  Eye,
  Calendar,
  Video,
  Mic,
  Share2,
  UserPlus,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

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
        colorEnd="rgba(139, 92, 246, 0.3)"  
        intensity={1.2} 
      />
      <ScrollGradient 
        colorStart="rgba(168, 85, 247, 0.25)" 
        colorEnd="rgba(147, 51, 234, 0.2)"    
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
                <div key={`grid-col-${i}`} className="h-full border-r border-indigo-500/20"></div>
              ))}
            </div>
            <div className="absolute h-full w-full grid grid-rows-12 gap-4 z-0">
              {[...Array(12)].map((_, i) => (
                <div key={`grid-row-${i}`} className="w-full border-b border-indigo-500/20"></div>
              ))}
            </div>
          </div>
          
          {/* Animated horizontal lines with mouse interaction */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`h-line-${i}`}
              className="absolute h-[1px] bg-indigo-500/20"
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
              className="absolute w-[1px] bg-indigo-500/20"
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
                className="absolute rounded-full bg-indigo-400/30 floating-particle"
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
            className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] opacity-60"
            style={{
              left: `calc(${mousePosition.x * 100}% - 300px)`,
              top: `calc(${mousePosition.y * 100}% - 300px)`,
              transition: 'left 1.5s ease-out, top 1.5s ease-out',
              opacity: bgOpacity.get()
            }}
          />
          
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[80px] opacity-50"
            style={{
              right: `calc(${(1-mousePosition.x) * 100}% - 200px)`,
              bottom: `calc(${(1-mousePosition.y) * 100}% - 200px)`,
              transition: 'right 1.5s ease-out, bottom 1.5s ease-out'
            }}
          />
          
          {/* Decorative shapes with slow animations */}
          <div className="absolute top-[20%] left-[15%] w-16 h-16 border-2 border-indigo-500/20 rounded-lg transform rotate-12 animate-pulse-slow"></div>
          <div className="absolute bottom-[25%] right-[10%] w-24 h-24 border border-violet-500/15 rounded-full transform rotate-45 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
          
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
              <div className="inline-block mb-6 px-4 py-1 rounded-full border border-indigo-300/30 bg-indigo-500/5">
                <span className="text-indigo-400 text-sm font-medium">
                  Connessione • Apprendimento • Crescita
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
                  Community <span className="text-gradient bg-gradient-to-r from-indigo-400 to-violet-400">Biorigeneral</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block mt-4 text-2xl md:text-3xl font-normal text-foreground/80"
                >
                  Dove l'innovazione incontra la collaborazione
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mb-8"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-foreground/80 max-w-xl mb-12"
              >
                Unisciti alla nostra community di sviluppatori, imprenditori e innovatori. 
                Condividi conoscenze, scopri nuove tecnologie e fai crescere il tuo business con il supporto di una community attiva e appassionata.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                <a
                  href="https://patreon.com/biorigeneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center group"
                >
                  <span>Unisciti su Patreon</span>
                  <div className="relative ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
                    <ArrowRight className="w-4 h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
                  </div>
                </a>
                
                <a
                  href="https://youtube.com/@biorigeneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-indigo-500/30 text-foreground hover:bg-indigo-500/10 rounded-lg transition-all hover:-translate-y-1 flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Segui su YouTube
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right column - Community stats card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative glass border border-indigo-500/20 rounded-xl p-8 bg-background/60 backdrop-blur-sm shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-400/20 flex items-center justify-center mb-6">
                    <Users className="w-10 h-10 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Unisciti alla Community</h3>
                  <p className="text-foreground/70 mb-6">
                    Oltre 500 membri attivi che condividono passione per l'innovazione e la tecnologia
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-400">500+</div>
                      <div className="text-sm text-foreground/60">Membri</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-400">50+</div>
                      <div className="text-sm text-foreground/60">Tutorial</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-indigo-500/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-indigo-500/10 rounded-lg rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-red-500/10 filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/10 filter blur-[80px] opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - YouTube description */}
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                  <span className="text-sm font-medium text-red-400 flex items-center">
                    <Youtube className="w-4 h-4 mr-2" />
                    Canale YouTube
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Impara con i Nostri Tutorial
                </h2>
                
                <p className="text-lg text-foreground/80 mb-8">
                  Sul nostro canale YouTube trovi contenuti settimanali su sviluppo software, 
                  intelligenza artificiale, automazione e strategie di business. Tutorial pratici, 
                  casi studio reali e consigli per far crescere la tua attività.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-background/60 p-5 rounded-xl border border-red-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Tutorial Settimanali</h4>
                    <p className="text-sm text-foreground/70">
                      Nuovi contenuti ogni settimana su tecnologie all'avanguardia
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-orange-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Casi Studio Reali</h4>
                    <p className="text-sm text-foreground/70">
                      Esempi pratici di implementazione e risultati ottenuti
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-red-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Strategie Business</h4>
                    <p className="text-sm text-foreground/70">
                      Consigli per ottimizzare processi e aumentare profittabilità
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-orange-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Trend Tecnologici</h4>
                    <p className="text-sm text-foreground/70">
                      Analisi delle ultime innovazioni e come applicarle
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://youtube.com/@biorigeneral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    <span>Iscriviti al Canale</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href="https://youtube.com/@biorigeneral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-red-500/30 text-foreground hover:bg-red-500/10 rounded-xl transition-all hover:-translate-y-1 flex items-center"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    Attiva Notifiche
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Video placeholder */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-background/30">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Tutorial Biorigeneral"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">50+</div>
                  <div className="text-xs text-foreground/70">Video Tutorial</div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

   {/* Patreon Section */}
<section className="py-24 relative overflow-hidden">
  <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/10 filter blur-[80px] opacity-40"></div>
  <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-red-500/10 filter blur-[80px] opacity-40"></div>
  
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn" className="mb-16 text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Community Esclusiva
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
        Unisciti su Patreon
      </h2>
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Accesso esclusivo a contenuti premium, materiali avanzati e una community di professionisti che condividono la tua passione per l'innovazione tecnologica.
      </p>
    </ScrollAnimation>
    
    {/* Grid layout per affiiancare i due riquadri */}
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Primo riquadro - Descrizione */}
      <ScrollAnimation animation="slideRight" delay={0.2}>
        <div className="bg-gradient-to-br from-background/80 to-orange-500/5 rounded-xl border border-orange-500/20 p-8 h-full">                
          <h3 className="text-2xl font-bold mb-6 text-center">La Community Patreon</h3>
          <div className="space-y-6 text-foreground/80">
            <p>
              La nostra community Patreon è molto più di una semplice piattaforma di supporto: è un ecosistema 
              esclusivo dove innovatori, sviluppatori e imprenditori si incontrano per crescere insieme.
            </p>
            
            <p>
              Come membro Patreon, avrai accesso a contenuti premium che non troverai da nessun'altra parte: 
              tutorial avanzati step-by-step, codice sorgente completo dei progetti, template pronti all'uso 
              e molto altro materiale esclusivo creato appositamente per accelerare il tuo percorso di crescita.
            </p>
            
            <p>
              Ogni abbonamento contribuisce direttamente alla creazione di contenuti di qualità sempre più elevata 
              e ti garantisce un ruolo attivo nella direzione futura della community. I tuoi suggerimenti e 
              richieste hanno priorità nella pianificazione dei contenuti.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Secondo riquadro - Benefici */}
      <ScrollAnimation animation="slideLeft" delay={0.4}>
        <div className="bg-gradient-to-br from-background/60 to-orange-500/5 backdrop-blur-sm rounded-xl border border-orange-500/20 p-8 h-full">
          <h3 className="text-2xl font-bold mb-6 text-center">Perché Unirsi?</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Materiali Esclusivi</h4>
                <p className="text-sm text-foreground/70">Template, codice sorgente e risorse premium per i tuoi progetti</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Early Access</h4>
                <p className="text-sm text-foreground/70">Accesso anticipato ai nuovi contenuti e prodotti prima di tutti</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supporto Diretto</h4>
                <p className="text-sm text-foreground/70">Interazione diretta con il team e supporto personalizzato</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Network Esclusivo</h4>
                <p className="text-sm text-foreground/70">Connettiti con altri innovatori e professionisti del settore</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
    {/* CTA Section */}
<ScrollAnimation animation="fadeIn" delay={0.6} className="mt-16">
  <div className="bg-gradient-to-br from-background/60 to-orange-500/5 backdrop-blur-sm rounded-xl border border-orange-500/20 p-8 text-center">
    <h3 className="text-2xl font-bold mb-4">Sostieni il Progetto</h3>
    <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
      Supporta la creazione di contenuti di qualità e ottieni accesso esclusivo a materiali premium, tutorial avanzati e una community di professionisti.
    </p>
    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1">
      Scopri Patreon
    </button>
  </div>
</ScrollAnimation>
  </div>
</section>



      {/* Discord Community Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 filter blur-[80px] opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollAnimation animation="fadeIn" className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Hub della Community
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Discord Community
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Il cuore pulsante della nostra community. Connettiti con sviluppatori, imprenditori e innovatori da tutta Italia. 
              Condividi progetti, ricevi feedback e collabora su idee rivoluzionarie.
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Discord features */}
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-gradient-to-br from-background/80 to-indigo-500/5 rounded-xl p-6 border border-indigo-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4">
                        <MessageSquare className="w-6 h-6 text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-bold">Chat Tematici</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Canali dedicati per ogni argomento: sviluppo, AI, business, networking e molto altro.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-500/10 rounded-full text-xs">#sviluppo-web</span>
                      <span className="px-3 py-1 bg-violet-500/10 rounded-full text-xs">#intelligenza-artificiale</span>
                      <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">#business-ideas</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-background/80 to-violet-500/5 rounded-xl p-6 border border-violet-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mr-4">
                        <Mic className="w-6 h-6 text-violet-400" />
                      </div>
                      <h3 className="text-xl font-bold">Eventi Live</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Sessioni Q&A settimanali, workshop tecnici e call di networking per crescere insieme.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-violet-400 mr-2" />
                        <span>Q&A settimanali</span>
                      </div>
                      <div className="flex items-center">
                        <Coffee className="w-4 h-4 text-violet-400 mr-2" />
                        <span>Coffee chat mensili</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-background/80 to-purple-500/5 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                        <Share2 className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold">Collaborazioni</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Trova partner per i tuoi progetti, condividi competenze e crea sinergie professionali.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <UserPlus className="w-4 h-4 text-purple-400 mr-2" />
                        <span>Team building</span>
                      </div>
                      <div className="flex items-center">
                        <Gamepad2 className="w-4 h-4 text-purple-400 mr-2" />
                        <span>Hackathon interni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Discord interface mockup */}
            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="relative">
                <div className="bg-gradient-to-br from-background/30 to-indigo-500/5 backdrop-blur-sm rounded-xl border border-indigo-500/20 shadow-lg p-6">
                  {/* Discord header */}
                  <div className="flex items-center mb-6 pb-4 border-b border-indigo-500/20">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                      <MessageCircle className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Biorigeneral Community</h4>
                      <p className="text-xs text-foreground/60">500+ membri online</p>
                    </div>
                  </div>
                  
                  {/* Channel list */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                      📚 Apprendimento
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>tutorial-e-guide</span>
                        <span className="ml-auto text-xs bg-indigo-500/20 px-2 py-0.5 rounded">3</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>domande-e-risposte</span>
                        <span className="ml-auto text-xs bg-violet-500/20 px-2 py-0.5 rounded">7</span>
                      </div>
                    </div>
                    
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mt-4">
                      🚀 Progetti
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>showcase-progetti</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>cerco-collaboratori</span>
                        <span className="ml-auto text-xs bg-green-500/20 px-2 py-0.5 rounded">2</span>
                      </div>
                    </div>
                    
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mt-4">
                      💼 Business
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>strategie-business</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>networking</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent messages preview */}
                  <div className="bg-background/30 rounded-lg p-4 border border-indigo-500/10">
                    <div className="text-xs text-foreground/60 mb-3">#tutorial-e-guide</div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex-shrink-0"></div>
                        <div className="text-sm">
                          <span className="font-semibold text-green-400">Marco_Dev</span>
                          <span className="text-foreground/60 ml-2">Oggi alle 14:32</span>
                          <p className="text-foreground/70 mt-1">Appena pubblicato un nuovo tutorial su React Hooks! 🚀</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex-shrink-0"></div>
                        <div className="text-sm">
                          <span className="font-semibold text-blue-400">Sara_AI</span>
                          <span className="text-foreground/60 ml-2">Oggi alle 13:15</span>
                          <p className="text-foreground/70 mt-1">Qualcuno ha esperienza con l'integrazione di ChatGPT API?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">500+</div>
                    <div className="text-xs text-foreground/70">Membri Attivi</div>
                  </div>
                </div>
                
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Discord benefits */}
          <ScrollAnimation animation="fadeIn" delay={0.4}>
            <div className="bg-gradient-to-br from-background/60 to-indigo-500/5 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Benefici Esclusivi della Discord Community</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                    <Download className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Risorse Gratuite</h4>
                  <p className="text-sm text-foreground/70">Template, tools e risorse condivise dalla community</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-violet-500/10 flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-violet-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Anteprima Contenuti</h4>
                  <p className="text-sm text-foreground/70">Accesso in anteprima ai nuovi video e materiali</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                    <Headphones className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Supporto Tecnico</h4>
                  <p className="text-sm text-foreground/70">Aiuto diretto da esperti e altri membri della community</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-pink-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Networking</h4>
                  <p className="text-sm text-foreground/70">Connessioni professionali e opportunità di collaborazione</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-36 relative overflow-visible z-0">
        <div className="absolute inset-0 -top-16 -bottom-18 flex items-center justify-center overflow-visible z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/15 to-purple-400/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-violet-500/5 via-indigo-500/10 to-purple-400/5 blur-2xl animate-pulse-slow-2"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-0">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-background/80 to-indigo-500/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400"></div>
            
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Inizia il Tuo Percorso di Crescita
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Unisciti a centinaia di professionisti che stanno già trasformando le loro competenze 
                e accelerando la crescita del loro business con la nostra community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://patreon.com/biorigeneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  <span>Unisciti su Patreon</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                
                <a
                  href="https://youtube.com/@biorigeneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-indigo-500/30 text-foreground hover:bg-indigo-500/10 rounded-xl transition-all hover:-translate-y-1 flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Segui su YouTube
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 text-indigo-400 mr-2" />
                  <span className="text-sm text-foreground/70">Community sicura e moderata</span>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="w-5 h-5 text-violet-400 mr-2" />
                  <span className="text-sm text-foreground/70">Contenuti settimanali</span>
                </div>
                <div className="flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-400 mr-2" />
                  <span className="text-sm text-foreground/70">Supporto della community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom animations styles */}
      <div dangerouslySetInnerHTML={{ __html: `
        <style>
          @keyframes floating-particle {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
            50% { transform: translateY(-8px) translateX(15px) rotate(180deg); }
            75% { transform: translateY(15px) translateX(5px) rotate(270deg); }
          }
          
          .floating-particle {
          animation: floating-particle linear infinite;
          will-change: transform;
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }

          /* Forza il contenimento dell'overflow */
          body, html {
            overflow-x: hidden !important;
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
          }
        </style>
      ` }} />
    </div>
  );
};

export default Community;
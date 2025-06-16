// src/pages/Community.tsx
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
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

      {/* Hero Section - Stile Home con effetto typing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
              <span className="block text-primary font-semibold">Stiamo aprendo la nostra</span>
              <motion.span 
                className="block font-semibold text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Effetto typing */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 1,
                    ease: "easeOut"
                  }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  Community.  
                </motion.span>
              </motion.span>
            </h1>
            
            <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
              Supportaci e noi ti supporteremo con vantaggi esclusivi davvero unici. 
              Diventa un membro onorario della nostra community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a 
                href="https://www.patreon.com/c/BiorigeneralInformatics" 
                className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
              >
                Scopri Patreon
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
            
            </div>
            
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
                
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl mb-6 md:mb-8 leading-tight">
              <span className="block text-primary font-semibold">Iscriviti su YouTube</span>
              </h1>
                
                <p className="text-lg text-foreground/80 text-gray-300 mb-8">
                  Siamo i primi content creator, imprenditori e sviluppatori Italiani a portare l'AI Agency 
                  Business Model. In questo canale Federico ti darà nozioni uniche, legate a strumenti professionali
                  utilizzati dai migliori imprenditori e sviluppatori del settore.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-background/60 p-5 rounded-xl border border-red-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Tutorial dettagliati</h4>
                    <p className="text-sm text-foreground/70">
                      Nuovi contenuti su tecnologie all'avanguardia.
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-orange-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Sblocca l'AI Business Model</h4>
                    <p className="text-sm text-foreground/70">
                      Consigli e metodi pratici per avviare una AI Agency.
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-red-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Impementazioni AI</h4>
                    <p className="text-sm text-foreground/70">
                      Esempi pratici di implementazione e risultati ottenuti.
                    </p>
                  </div>
                  
                  <div className="bg-background/60 p-5 rounded-xl border border-orange-500/20 backdrop-blur-md shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Tools e Framework</h4>
                    <p className="text-sm text-foreground/70">
                      Sblocca tutto il potenziale dell'Intelligenza Artificiale.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.youtube.com/@federicozizi_ai/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border text-white hover:text-white font-medium rounded-xl shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    <span>Iscriviti al Canale</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href="https://www.youtube.com/@federicozizi_ai/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-red-500/30 text-foreground hover:text-white hover:bg-red-500/10 rounded-xl transition-all hover:-translate-y-1 flex items-center"
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
                  src="https://www.youtube.com/embed/1972U599P-M?si=IVKn8_-of2xaG5S1"
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
                  <div className="text-2xl font-bold text-red-400">20+</div>
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
      <div className="inline-block px-4 py-1 rounded-full  border border-green-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
          Community Esclusiva
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-6 md:mb-8 leading-tight">
              <span className="block text-primary font-semibold">Supportaci su Patreon</span>
              </h1>
      <p className="text-xl text-foreground/80 text-gray-300 max-w-3xl mx-auto">
        Ottieni l'accesso esclusivo a contenuti premium, materiali avanzati e sblocca il nostro supporto ai tuoi progetti.
      </p>
    </ScrollAnimation>
    
    {/* Grid layout per affiiancare i due riquadri */}
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Primo riquadro - Descrizione */}
      <ScrollAnimation animation="slideRight" delay={0.2}>
        <div className="bg-gradient-to-br from-background/80 to-green-500/5 rounded-xl border border-green-500/20 p-8 h-full">                
          <h3 className="text-2xl font-bold mb-6 text-center">L'idea di Community</h3>
          <div className="space-y-6 text-foreground/80">
            <p>
              La nostra community è molto di più di una semplice piattaforma di supporto, vorremmo creare un
              ecosistema in cui poter dedicare tutta l'attenzione che meritano i nostri utenti più appassionati.
            </p>
            
            <p>
              Come membro Patreon, avrai accesso a contenuti premium che non troverai da nessun'altra parte: 
              guide step-by-step, codice JSON completo di intere automazioni, template pronti all'uso 
              e molto altro materiale esclusivo creato appositamente per supportarti.
            </p>
            
            <p>
              Ogni abbonamento contribuisce direttamente alla creazione di contenuti di qualità sempre più elevata 
              e ti garantisce un ruolo attivo nella community, oltre che il nostro supporto. 
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Secondo riquadro - Benefici */}
      <ScrollAnimation animation="slideLeft" delay={0.4}>
        <div className="bg-gradient-to-br from-background/60 to-green-500/5 backdrop-blur-sm rounded-xl border border-green-500/20 p-8 h-full">
          <h3 className="text-2xl font-bold mb-6 text-center">Perché Unirsi?</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Materiali Esclusivi</h4>
                <p className="text-sm text-foreground/70">Template, codice sorgente e risorse premium per i tuoi progetti</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Early Access</h4>
                <p className="text-sm text-foreground/70">Accesso anticipato ai nuovi contenuti e prodotti prima di tutti</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supporto Diretto</h4>
                <p className="text-sm text-foreground/70">Interazione diretta con Federico ed il suo team</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Networking</h4>
                <p className="text-sm text-foreground/70">Stringi i rapporti per potenziali collaborazioni con noi</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
    {/* CTA Section */}
<ScrollAnimation animation="fadeIn" delay={0.6} className="mt-16">
  <div className="bg-gradient-to-br from-background/60 to-green-500/5 backdrop-blur-sm rounded-xl border border-green-500/20 p-8 text-center">
    <h3 className="text-2xl font-bold mb-4">Diventa parte di tutto questo</h3>
    <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
      Tutto questo ti intriga? Cosa aspetti, unisciti a noi su Patreon e inizia a esplorare tutte le opportunità.
    </p>
    <a href='https://www.patreon.com/c/BiorigeneralInformatics' className="px-8 py-4 border text-white font-medium rounded-xl shadow-lg hover:text-white hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1">
      Scopri Patreon
    </a>
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
            <h2 className="text-4xl font-bold mb-6 text-center">
              Discord Community
            </h2>
            <p className="text-xl text-foreground/80 text-gray-300 max-w-3xl mx-auto">
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
                      <h3 className="text-xl font-bold">Risorse strategiche</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Manuali, guide, automazione notizie AI, file utili e molto altro.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-500/10 rounded-full text-xs">#notizie-ai</span>
                      <span className="px-3 py-1 bg-violet-500/10 rounded-full text-xs">#file-automazioni</span>
                      <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">#prompt-book</span>
                      <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">#guide</span>
                      <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">ecc...</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-background/80 to-violet-500/5 rounded-xl p-6 border border-violet-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mr-4">
                        <Mic className="w-6 h-6 text-violet-400" />
                      </div>
                      <h3 className="text-xl font-bold">Chat Vocali e Testuali</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Condividi passioni e competenze, crea sinergie e legami per crescere insieme.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-violet-400 mr-2" />
                        <span>Brain storming condiviso</span>
                      </div>
                      <div className="flex items-center">
                        <Coffee className="w-4 h-4 text-violet-400 mr-2" />
                        <span>Canali dedicati</span>
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
                     Questo luogo nasce supportare i nostri utenti più fedeli ed appassionati.                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <UserPlus className="w-4 h-4 text-purple-400 mr-2" />
                        <span>Consulenze 1 to 1</span>
                      </div>
                      <div className="flex items-center">
                        <Gamepad2 className="w-4 h-4 text-purple-400 mr-2" />
                        <span>Supporto tecnico</span>
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
                      <p className="text-xs text-foreground/60">Canale privato</p>
                    </div>
                  </div>
                  
                  {/* Channel list */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                      👥・Community
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>chat-generale</span>
                        <span className="ml-auto text-xs bg-indigo-500/20 px-2 py-0.5 rounded">3</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>notizie-ai</span>
                        <span className="ml-auto text-xs bg-violet-500/20 px-2 py-0.5 rounded">7</span>
                      </div>
                    </div>
                    
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mt-4">
                      📚・ White Papers e Guide
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>guide</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>prompt-book</span>
                        <span className="ml-auto text-xs bg-green-500/20 px-2 py-0.5 rounded">2</span>
                      </div>
                    </div>
                    
                    <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mt-4">
                      🌟・Gold Zone 🔒
                    </div>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>gold-asset</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors">
                        <span className="mr-2">#</span>
                        <span>gold-manuals</span>
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
                
              </div>
            </ScrollAnimation>
          </div>
          
          
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-visible z-0">
        <div className="absolute inset-0 -top-16 -bottom-18 flex items-center justify-center overflow-visible z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/15 to-purple-400/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-violet-500/5 via-indigo-500/10 to-purple-400/5 blur-2xl animate-pulse-slow-2"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-0">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-background/80 to-indigo-500/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400"></div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Inizia il Tuo Percorso di Crescita
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Unisciti a centinaia di professionisti che stanno già trasformando le loro competenze 
                e accelerando la crescita del loro business con la nostra community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://www.patreon.com/c/BiorigeneralInformatics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-black-500 hover:text-white text-white font-medium rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  <span>Unisciti su Patreon</span>
                 
                </a>
                
                <a
                  href="https://www.youtube.com/@federicozizi_ai/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-indigo-500/30 text-foreground hover:text-white hover:bg-indigo-500/10 rounded-xl transition-all hover:-translate-y-1 flex items-center"
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
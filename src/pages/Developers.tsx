// src/pages/Developers.tsx
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight,
  Briefcase,
  Star,
  Clock,
  CheckCircle,
  Calendar,
  Users,
  Shuffle,
  Zap,
  BarChart,
  Send,
  Cloud,
  BrainCircuit,
  Code
} from 'lucide-react';


const Developers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const isSection1InView = useInView(section1Ref, { once: true, amount: 0.2 });
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.2 });
  const isSection3InView = useInView(section3Ref, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Generare dati delle particelle solo una volta all'inizializzazione
  const particlesData = useRef([...Array(20)].map(() => ({
    width: 3 + Math.random() * 6,
    height: 3 + Math.random() * 6,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 30 + Math.random() * 40,
    delay: Math.random() * 15
  }))).current;
  
  // Track mouse for subtle background effect
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
    <div className="min-h-screen">
      {/* Hero section con sfondo e particelle */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated horizontal lines - subtle mouse movement */}
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
          
          {/* Animated vertical lines - subtle mouse movement */}
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
                animationDuration: `${particle.duration}s`, 
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
          
          {/* Subtle gradient orbs - reduced intensity */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] opacity-60"
            style={{
              left: `calc(${mousePosition.x * 100}% - 300px)`,
              top: `calc(${mousePosition.y * 100}% - 300px)`,
              transition: 'left 1.5s ease-out, top 1.5s ease-out'
            }}
          />
          
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[80px] opacity-50"
            style={{
              right: `calc(${(1-mousePosition.x) * 100}% - 200px)`,
              bottom: `calc(${(1-mousePosition.y) * 100}% - 200px)`,
              transition: 'right 1.5s ease-out, bottom 1.5s ease-out'
            }}
          />
          
          {/* Decorative shapes with slow animations */}
          <div className="absolute top-[20%] left-[15%] w-16 h-16 border-2 border-purple-500/20 rounded-lg transform rotate-12 animate-pulse-slow"></div>
          <div className="absolute bottom-[25%] right-[10%] w-24 h-24 border border-purple-500/15 rounded-full transform rotate-45 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[70%] left-[25%] w-32 h-32 border-2 border-purple-500/10 rounded-full transform -rotate-12 animate-pulse-slow" style={{ animationDuration: '18s' }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center z-10"
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-300/30 bg-purple-500/5">
            <span className="text-purple-400 text-sm font-medium">
              Espandi il tuo team di sviluppo
            </span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Talenti tech specializzati
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block mt-4 text-3xl md:text-4xl font-normal"
            >
              per accelerare la tua innovazione digitale
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-purple-500 mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Integra competenze avanzate in intelligenza artificiale 
            e sviluppo software nel tuo team con i nostri talenti
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              Contatta i nostri sviluppatori
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
      {/* 2. DEVELOPERS PROFILES SECTION */}
      <section ref={section1Ref} className="py-32 bg-gradient-to-b from-background via-purple-900/5 to-background relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Profili specializzati
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isSection1InView ? { width: "120px" } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-purple-500 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isSection1InView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-foreground/80 max-w-3xl mx-auto"
            >
              I nostri sviluppatori combinano competenze tecniche avanzate,
              esperienza di settore e capacità di innovazione
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Alessandro Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-500 h-full bg-gradient-to-br from-background to-purple-900/10">
                <div className="h-2 bg-purple-500"></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Alessandro</h3>
                    <p className="text-purple-400">Co-Founder & Developer</p>
                  </div>
                  
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-foreground/5 border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                    <img 
                      src="https://i.ibb.co/0jd4p6tB/IMG-3443.jpg" 
                      alt="Alessandro" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-foreground/80 mb-6">
                   Esperto nell'integrazione di soluzioni AI in contesti aziendali.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Briefcase className="mr-2 h-5 w-5 text-purple-400" />
                      Formazione
                    </h4>
                    <ul className="text-foreground/70 space-y-2 pl-6">
                      <li className="list-disc">Laurea Triennale in Economia e Informatica per l'impresa</li>
                      <li className="list-disc">Laurea Magistrale in Economia e Business Analytics (In corso)</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Star className="mr-2 h-5 w-5 text-purple-400" />
                      Competenze principali
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Python', 'MySQL', 'Tailwind', 'Html', 'CSS', 'Javascript', 'Node.js', 'Make'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-500/10 text-foreground/80 text-sm rounded-md border border-purple-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
            
            {/* Federico Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-500 h-full bg-gradient-to-br from-background to-purple-900/10">
                <div className="h-2 bg-purple-500"></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Federico</h3>
                    <p className="text-purple-400">Founder & Senior Advisor</p>
                  </div>
                  
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-foreground/5 border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                    <img 
                      src="https://i.ibb.co/W4T1h0pn/Foto-fede.png" 
                      alt="Federico" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-foreground/80 mb-6">
                    Esperto nell'integrazione di soluzioni AI in contesti aziendali.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Briefcase className="mr-2 h-5 w-5 text-purple-400" />
                      Formazione
                    </h4>
                    <ul className="text-foreground/70 space-y-2 pl-6">
                      <li className="list-disc">Laurea Triennale in Economia e Informatica per l'impresa</li>
                      <li className="list-disc">Master Universitario in Scalabilità e crescita aziendale (In corso)</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Star className="mr-2 h-5 w-5 text-purple-400" />
                      Competenze principali
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'n8n', 'Make', 'Html', 'CSS', 'Javascript'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-500/10 text-foreground/80 text-sm rounded-md border border-purple-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full border border-purple-500/20 opacity-50 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 left-10 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 opacity-50 animate-pulse-slow" style={{ animationDuration: '18s' }}></div>
      </section>
      
      {/* 3. BENEFITS SECTION */}
      <section ref={section2Ref} className="py-32 bg-gradient-to-b from-background via-teal-900/5 to-background relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-teal-300/30 bg-teal-500/5">
                <span className="text-teal-400 text-sm font-medium">
                  Vantaggi per il tuo business
                </span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                Potenzia il tuo team con competenze specialistiche
              </motion.h2>
              
              <motion.div
                initial={{ width: 0 }}
                animate={isSection2InView ? { width: "120px" } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-1 bg-teal-500 mb-8"
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isSection2InView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-foreground/80 text-lg mb-8 leading-relaxed"
              >
                L'integrazione dei nostri sviluppatori nel tuo team offre accesso immediato a competenze 
                avanzate in AI e sviluppo software, accelerando l'innovazione e ottimizzando i costi.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Time-to-market ridotto",
                    desc: "Sviluppo accelerato grazie a competenze immediatamente operative",
                    icon: <Clock className="w-6 h-6 text-teal-400" />
                  },
                  {
                    title: "Flessibilità e scalabilità",
                    desc: "Modelli di collaborazione adattabili alle tue specifiche esigenze",
                    icon: <Shuffle className="w-6 h-6 text-teal-400" />
                  },
                  {
                    title: "Innovazione continua",
                    desc: "Accesso costante alle ultime tecnologie e metodologie di sviluppo",
                    icon: <Zap className="w-6 h-6 text-teal-400" />
                  },
                  {
                    title: "Ottimizzazione costi",
                    desc: "Riduzione dei costi di recruiting, onboarding e formazione",
                    icon: <BarChart className="w-6 h-6 text-teal-400" />
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                    className="flex p-4 rounded-lg border border-teal-500/20 bg-teal-500/5"
                  >
                    <div className="mr-4 p-2 rounded-lg bg-teal-500/10 h-min flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="rounded-xl overflow-hidden border border-teal-500/20 shadow-lg shadow-teal-500/5 bg-gradient-to-br from-background to-teal-900/10">
                <div className="p-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-2xl font-bold mb-6 text-white"
                  >
                    Modalità di collaborazione
                  </motion.h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Team Extension",
                        desc: "Integrazione diretta dei nostri sviluppatori nel tuo team esistente",
                        icon: <Users className="w-6 h-6 text-teal-400" />
                      },
                      {
                        title: "Progetti Specifici",
                        desc: "Sviluppo completo di progetti con obiettivi e tempistiche definite",
                        icon: <Calendar className="w-6 h-6 text-teal-400" />
                      },
                      {
                        title: "Consulenza Tecnica",
                        desc: "Supporto specialistico per progettazione e implementazione di soluzioni AI",
                        icon: <BrainCircuit className="w-6 h-6 text-teal-400" />
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 + (i * 0.15) }}
                        className="flex p-4 rounded-lg border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-500/5"
                      >
                        <div className="mr-4 p-2 rounded-lg bg-teal-500/10 h-min flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                          <p className="text-foreground/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-8 p-6 rounded-lg border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-teal-500/5"
                  >
                    <h4 className="font-medium flex items-center mb-3 text-white">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-2" />
                      Il nostro impegno
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Allineamento completo con gli obiettivi del tuo team</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Comunicazione continua e trasparente</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Trasferimento di conoscenze e best practices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Focus sui risultati concreti e misurabili</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full border border-teal-500/20 opacity-50 animate-pulse-slow" style={{ animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-teal-500/10 rounded-lg rotate-45 opacity-50 animate-pulse-slow" style={{ animationDuration: '20s' }}></div>
      </section>
      
      {/* 4. EXPERTISE SECTION */}
      <section ref={section3Ref} className="py-32 bg-gradient-to-b from-background via-purple-900/5 to-background relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ambiti di specializzazione
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isSection3InView ? { width: "120px" } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-purple-500 mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isSection3InView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-foreground/80 max-w-3xl mx-auto"
            >
              I nostri developer possiedono competenze avanzate in diverse aree tecnologiche
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligenza Artificiale",
                desc: "Sviluppo di sistemi predittivi, visione artificiale, NLP e modelli ML/DL",
                skills: ["Computer Vision", "NLP", "Reti Neurali", "PyTorch", "TensorFlow", "Reinforcement Learning"],
                icon: <BrainCircuit className="w-8 h-8 text-purple-400" />
              },
              {
                title: "Sviluppo Software",
                desc: "Creazione di applicazioni scalabili, sicure e performanti con tecnologie moderne",
                skills: ["React", "Node.js", "TypeScript", "Python", "AWS/Azure", "Docker"],
                icon: <Code className="w-8 h-8 text-purple-400" />
              },
              {
                title: "Cloud & DevOps",
                desc: "Implementazione di soluzioni cloud-native e pipeline CI/CD automatizzate",
                skills: ["Kubernetes", "AWS", "Azure", "CI/CD", "Microservizi", "IaC"],
                icon: <Cloud className="w-8 h-8 text-purple-400" />
              }
            ].map((expertise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (i * 0.2) }}
                className="rounded-xl border border-purple-500/20 shadow-lg bg-gradient-to-br from-background to-purple-900/10 overflow-hidden hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="h-2 bg-purple-500"></div>
                <div className="p-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg w-min mb-4">
                    {expertise.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{expertise.title}</h3>
                  <p className="text-foreground/70 mb-6">{expertise.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1 bg-purple-500/10 text-foreground/80 text-sm rounded-md border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full border border-purple-500/20 opacity-50 animate-pulse-slow" style={{ animationDuration: '17s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-purple-500/10 rounded-lg -rotate-12 opacity-50 animate-pulse-slow" style={{ animationDuration: '19s' }}></div>
      </section>
      
{/* 5. CTA SECTION - con gradient verde circolare più in basso */}
<section className="py-24 relative bg-background overflow-hidden">
  {/* Gradient circolare pulsante - posizionato più in basso */}
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none" style={{ paddingBottom: "5%" }}>
    <div 
      className="w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[80px] animate-pulse-slow" 
      style={{ animationDuration: '15s' }}
    ></div>
    <div 
      className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[70px] animate-pulse-slow" 
      style={{ animationDuration: '18s', animationDelay: '2s' }}
    ></div>
  </div>
  
  <div className="max-w-4xl mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl p-12 text-center shadow-2xl border border-teal-500/20 bg-background/80 backdrop-blur-sm"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-white"
      >
        Accelera i tuoi progetti con talenti specializzati
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-1 bg-teal-500 mx-auto mb-8"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
      >
        Siamo pronti a valutare le tue esigenze e 
        proporti la soluzione di integrazione più adatta al tuo business.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          Contattaci ora
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        
        <Link
          to="/products"
          className="inline-flex items-center justify-center px-8 py-4 border border-teal-500/30 text-foreground hover:bg-teal-500/5 rounded-lg transition-all duration-300"
        >
          Vedi i nostri prodotti
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-10 flex items-center justify-center"
      >
        <a href="mailto:info@biorigeneralinformatics.com" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
          <Send className="w-4 h-4 mr-2" />
          info@biorigeneralinformatics.com
        </a>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Background Elements - subtle and slow */}
  <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-teal-500/10 opacity-30 animate-pulse-slow" style={{ animationDuration: '22s' }}></div>
  <div className="absolute top-1/3 left-20 w-24 h-24 border border-teal-500/5 rounded-lg rotate-45 opacity-30 animate-pulse-slow" style={{ animationDuration: '25s' }}></div>
</section>
      {/* Custom animations styles */}
      <div dangerouslySetInnerHTML={{ __html: `
        <style>
          @keyframes floating-particle {
      0% { transform: translate(0, 0); }
      25% { transform: translate(30px, -40px); }
      50% { transform: translate(70px, -20px); }
      75% { transform: translate(40px, 40px); }
      100% { transform: translate(0, 0); }
    }
    
    .floating-particle {
      animation-name: floating-particle;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      opacity: 0.4;
      pointer-events: none;
    }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.3; }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow ease-in-out infinite;
            animation-duration: 10s;
          }
        </style>
      ` }} />
    </div>
  );
};

export default Developers;
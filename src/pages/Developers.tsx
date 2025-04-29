// src/pages/Developers.tsx
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  BrainCircuit, 
  ArrowRight,
  GraduationCap,
  Trophy,
  ChevronRight
} from 'lucide-react';

// Particle component with proper typing
interface ParticleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
}

const Developers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [, setParticles] = useState<ParticleProps[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Initialize particles
  useEffect(() => {
    const newParticles: ParticleProps[] = [];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(56, 189, 248, 0.6)',
        velocity: {
          x: Math.random() * 0.5 - 0.25,
          y: Math.random() * 0.5 - 0.25
        }
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  // Update particles and handle mouse interaction
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;
          
          // Boundary check
          if (newX > canvas.width) newX = 0;
          if (newX < 0) newX = canvas.width;
          if (newY > canvas.height) newY = 0;
          if (newY < 0) newY = canvas.height;
          
          // Mouse attraction
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const attractionForce = 0.5;
            newX += (dx / distance) * attractionForce;
            newY += (dy / distance) * attractionForce;
          }
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
      
      requestAnimationFrame(animateParticles);
    };
    
    const animationId = requestAnimationFrame(animateParticles);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div className="min-h-screen font-['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen']">
      {/* Particle canvas for background */}
      <canvas 
        id="particle-canvas" 
        className="fixed top-0 left-0 w-full h-full z-0"
      />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-violet-600/20 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-sky-600/20 to-transparent"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-violet-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-sky-500/10 to-transparent blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <div 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center px-4 z-10"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-80 bg-gradient-to-r from-violet-600/20 to-transparent blur-lg rounded-r-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-80 bg-gradient-to-l from-sky-600/20 to-transparent blur-lg rounded-l-full"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Alessandro</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Federico</span>
            <span className="block mt-2 text-3xl md:text-4xl font-normal text-white/90">AI Developers</span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-violet-500 to-sky-500 mx-auto mb-8"
          />
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Due giovani talenti specializzati in intelligenza artificiale 
            pronti ad unirsi al tuo team per trasformare il tuo business.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Contattaci ora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Developers Profiles */}
      <div className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Incontra i Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Talenti</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-sky-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Alessandro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-500/20 shadow-lg hover:shadow-violet-500/20 transition-all duration-300 h-full">
                <div className="h-3 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-violet-500/10 p-3 rounded-lg mr-4">
                      <BrainCircuit className="h-8 w-8 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Alessandro</h3>
                      <p className="text-violet-400">AI Research Engineer</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    Specializzato in modelli di machine learning e computer vision. Alessandro combina solide 
                    competenze teoriche con implementazioni pratiche per sviluppare soluzioni AI innovative.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <GraduationCap className="mr-2 h-5 w-5 text-violet-400" />
                      Formazione
                    </h4>
                    <ul className="text-white/80 space-y-2 pl-6">
                      <li className="list-disc">Laurea Magistrale in Computer Science</li>
                      <li className="list-disc">Master in Intelligenza Artificiale</li>
                      <li className="list-disc">Certificazioni in TensorFlow e PyTorch</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Trophy className="mr-2 h-5 w-5 text-violet-400" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Python', 'MLOps'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-violet-500/10 text-white/80 text-sm rounded-md border border-violet-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/profile/alessandro" 
                    className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Scopri di più
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Federico */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-sky-500/20 shadow-lg hover:shadow-sky-500/20 transition-all duration-300 h-full">
                <div className="h-3 bg-gradient-to-r from-sky-500 to-blue-500"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-sky-500/10 p-3 rounded-lg mr-4">
                      <Code className="h-8 w-8 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Federico</h3>
                      <p className="text-sky-400">AI Solutions Architect</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    Esperto nell'integrazione di soluzioni AI in contesti aziendali. Federico sviluppa 
                    architetture scalabili e applicazioni end-to-end con focus su usabilità e performance.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <GraduationCap className="mr-2 h-5 w-5 text-sky-400" />
                      Formazione
                    </h4>
                    <ul className="text-white/80 space-y-2 pl-6">
                      <li className="list-disc">Ingegneria Informatica</li>
                      <li className="list-disc">Specializzazione in AI & Cloud Computing</li>
                      <li className="list-disc">AWS Certified Solutions Architect</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="flex items-center text-white font-medium mb-3">
                      <Trophy className="mr-2 h-5 w-5 text-sky-400" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'NLP', 'AWS', 'Docker', 'Next.js'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-sky-500/10 text-white/80 text-sm rounded-md border border-sky-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/profile/federico" 
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Scopri di più
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Integration Benefits Section */}
      <div ref={sectionRef} className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Vantaggi dell'<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Integrazione</span>
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-sky-500 mb-8"></div>
              
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Integrare i nostri sviluppatori nel tuo team significa accedere immediatamente a competenze 
                specialistiche in AI e sviluppo software, senza i costi e i tempi necessari per l'assunzione 
                e formazione di nuovo personale.
              </p>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Competenze Immediatamente Operative",
                    desc: "Accesso diretto a talenti specializzati senza tempi di formazione"
                  },
                  {
                    title: "Flessibilità nei Modelli di Collaborazione",
                    desc: "Soluzioni su misura per le tue specifiche esigenze di progetto"
                  },
                  {
                    title: "Approccio Orientato ai Risultati",
                    desc: "Focus su deliverable concreti e misurabili"
                  },
                  {
                    title: "Trasferimento del Know-How",
                    desc: "Condivisione di conoscenze con il tuo team interno"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex"
                  >
                    <div className="mr-4 h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 flex-shrink-0 mt-1 flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-violet-500/10 to-sky-500/10 rounded-3xl blur-3xl"></div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <div className="p-6">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Team Integration" 
                    className="w-full h-auto rounded-lg mb-6 opacity-90"
                  />
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">Modalità di Integrazione</h3>
                  
                  <div className="space-y-3">
                    {[
                      {
                        title: "Progetti Specifici",
                        desc: "Collaborazione focalizzata su singoli progetti con obiettivi definiti"
                      },
                      {
                        title: "Team Extension",
                        desc: "Integrazione dei nostri sviluppatori nel tuo team esistente"
                      },
                      {
                        title: "Consulenza Tecnica",
                        desc: "Supporto per progettazione e implementazione di soluzioni AI"
                      },
                      {
                        title: "Formazione e Workshop",
                        desc: "Sessioni di trasferimento di conoscenze al tuo team interno"
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.15 * i }}
                        className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-violet-500/30 transition-colors"
                      >
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-24 z-10">
        <div className="absolute -z-10 inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pronti a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">potenziare</span> il tuo team?
            </h2>
            
            <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-sky-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Alessandro e Federico sono disponibili per valutare le tue esigenze e 
              proporti la soluzione di integrazione più adatta.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-sky-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Richiedi una consulenza gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
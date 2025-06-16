// src/pages/Developers.tsx - Riadattata con lo stile delle altre pagine
import { useRef } from 'react';
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
  Cloud,
  BrainCircuit,
  Code
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const Developers = () => {

  const section2Ref = useRef<HTMLDivElement>(null);
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.2 });

  

  return (
    <>
      {/* Background gradients - Stesso stile delle altre pagine */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.3)"
        colorEnd="rgba(139, 92, 246, 0.3)"
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.25)"
        colorEnd="rgba(16, 185, 129, 0.2)"
        reverse={true} 
        className="opacity-80" 
      />

      <div className="min-h-screen pt-18 pb-16">
        
        {/* Hero Section - Arricchito e migliorato */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-1 pb-16">
          {/* Background elements dinamici */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-accent/20 rounded-full animate-pulse-slow opacity-40"></div>
            <div className="absolute bottom-[30%] right-[15%] w-24 h-24 border-2 border-accent/30 rounded-lg rotate-45 animate-pulse-slow opacity-50" style={{ animationDuration: '12s' }}></div>
            <div className="absolute top-[60%] left-[20%] w-16 h-16 bg-accent/10 rounded-full animate-pulse-slow" style={{ animationDuration: '8s' }}></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge introduttivo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10"
              >
                <span className="text-accent text-sm font-medium">
                  Espandi il tuo team di sviluppo
                </span>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                <span className="block text-primary font-semibold">Talenti tech</span>
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
                    specializzati.  
                  </motion.span>
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal"
              >
                Integra competenze avanzate in <span className="text-accent font-medium">intelligenza artificiale</span> e 
                <span className="text-accent font-medium"> sviluppo software</span> nel tuo team con i nostri talenti.
              </motion.p>

              
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
              >
                <Link 
                  to="/contact" 
                  className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                >
                  Contatta i nostri sviluppatori
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/services" 
                  className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Esplora Servizi
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sezione Team - Profili originali con stile coerente */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                  <span className="text-primary">Profili</span> <span className="text-accent">specializzati</span>
                </h2>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  I nostri sviluppatori combinano competenze tecniche avanzate, esperienza di settore e capacità di innovazione.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              
              {/* Alessandro Profile Card */}
              <ScrollAnimation animation="slideUp" delay={0.1}>
                <div className="glass rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 group h-full">
                  <div className="h-1 bg-accent"></div>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary">Alessandro</h3>
                      <p className="text-accent">Co-Founder & Developer</p>
                    </div>
                    
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                      <img 
                        src="https://i.ibb.co/0jd4p6tB/IMG-3443.jpg" 
                        alt="Alessandro" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <p className="text-secondary mb-6 text-center">
                      Esperto nell'integrazione di soluzioni AI in contesti aziendali.
                    </p>
                    
                     <div className="mb-6">
                      <h4 className="flex items-center text-primary font-medium mb-3">
                        <Briefcase className="mr-2 h-5 w-5 text-accent" />
                        Formazione
                      </h4>
                      <ul className="text-secondary space-y-2 text-sm pl-6">
                        <li className="list-disc">Laurea Triennale in Economia e Informatica per l'impresa</li>
                        <li className="list-disc">Laurea Magistrale in Economia e Business Analytics (In corso)</li>
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="flex items-center text-primary font-medium mb-3">
                        <Star className="mr-2 h-5 w-5 text-accent" />
                        Competenze principali
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Python', 'MySQL', 'Tailwind', 'Html', 'CSS', 'Javascript', 'Node.js', 'Make'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Federico Profile Card */}
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="glass rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 group h-full">
                  <div className="h-1 bg-accent"></div>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary">Federico</h3>
                      <p className="text-accent">Founder & Senior Advisor</p>
                    </div>
                    
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                      <img 
                        src="https://i.ibb.co/W4T1h0pn/Foto-fede.png" 
                        alt="Federico" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <p className="text-secondary mb-6 text-center">
                      Esperto nell'integrazione di soluzioni AI in contesti aziendali.
                    </p>
                    

                    <div className="mb-6">
                      <h4 className="flex items-center text-primary font-medium mb-3">
                        <Briefcase className="mr-2 h-5 w-5 text-accent" />
                        Formazione
                      </h4>
                      <ul className="text-secondary space-y-2 text-sm pl-6">
                        <li className="list-disc">Laurea Triennale in Economia e Informatica per l'impresa</li>
                        <li className="list-disc">Master Universitario in Scalabilità e crescita aziendale (In corso)</li>
                      </ul>
                    </div>

                   
                    
                    <div className="mb-6">
                      <h4 className="flex items-center text-primary font-medium mb-3">
                        <Star className="mr-2 h-5 w-5 text-accent" />
                        Competenze principali
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Python', 'n8n', 'Make', 'Html', 'CSS', 'Javascript'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </section>

        {/* SEZIONE INTATTA - Potenzia il tuo team con competenze specialistiche */}
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
                          transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                          className="flex items-start p-4 rounded-lg border border-teal-500/10 bg-teal-500/5"
                        >
                          <div className="mr-4 p-2 rounded-lg bg-teal-500/10">
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

        {/* Sezione Competenze - Design semplificato */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                  <span className="text-primary">Ambiti di</span> <span className="text-accent">specializzazione</span>
                </h2>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  I nostri developer possiedono competenze avanzate in diverse aree tecnologiche.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Intelligenza Artificiale",
                  desc: "Sviluppo di sistemi predittivi, visione artificiale, NLP e modelli ML/DL",
                  skills: ["Computer Vision", "NLP", "Reti Neurali", "PyTorch", "TensorFlow"],
                  icon: <BrainCircuit className="w-6 h-6" />
                },
                {
                  title: "Sviluppo Software",
                  desc: "Creazione di applicazioni scalabili, sicure e performanti con tecnologie moderne",
                  skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
                  icon: <Code className="w-6 h-6" />
                },
                {
                  title: "Cloud & DevOps",
                  desc: "Implementazione di soluzioni cloud-native e pipeline CI/CD automatizzate",
                  skills: ["Kubernetes", "Docker", "CI/CD", "Microservizi", "IaC"],
                  icon: <Cloud className="w-6 h-6" />
                }
              ].map((area, index) => (
                <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
                  <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 group h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors mr-4">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                    </div>
                    
                    <p className="text-secondary mb-6 leading-relaxed">{area.desc}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-primary">Tecnologie:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section finale - Stesso stile delle altre pagine */}
        <section className="py-20 md:py-12 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="slideUp">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8">
                    <span className="block text-primary">Accelera i tuoi progetti con <span className="text-accent">talenti specializzati</span></span>
                  </h2>
                
                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Siamo pronti a valutare le tue esigenze e proporti la soluzione di integrazione più adatta al tuo business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Link 
                      to="/contact" 
                      className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                    >
                      Parla con il nostro team
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      to="/growth-plans" 
                      className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      Vedi Piani di Crescita
                    </Link>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </>
  );
};

export default Developers;
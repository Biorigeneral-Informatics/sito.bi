// src/pages/GrowthPlansUsers.tsx - Growth Plans per Utenti con focus su Coaching
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star,
  Zap,
  Users,
  TrendingUp,
  Target,
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('growthPlansUsers');

const GrowthPlansUsers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Piani per utenti
  const userPlans = [
    {
      title: "Piano Starter",
      description: "Perfetto per chi inizia il proprio percorso di crescita personale e professionali",
      features: [
        "Coaching personalizzato mensile 1-on-1",
        "Accesso a corsi IA e automazioni",
        "Automazioni AI fino a 20 al mese",
        "Dashboard personale di tracciamento",
        "Supporto via email e chat",
        "Accesso community esclusiva",
        "Formazione di base su strumenti IA"
      ],
      price: "da €299/mese",
      popular: false
    },
    {
      title: "Piano Professional",
      description: "Per professionisti e freelance che vogliono accelerare la crescita con l'IA",
      features: [
        "Coaching settimanale 1-on-1",
        "Formazione avanzata su IA e automazioni",
        "Automazioni AI illimitate",
        "Sviluppo di agenti AI personalizzati",
        "Dashboard avanzata e analytics",
        "Priorità nel supporto (24h response)",
        "Accesso anticipato a nuovi strumenti",
        "Mentoring strategico mensile",
        "Community masterclasses esclusive",
        "ROI tracking dettagliato"
      ],
      price: "da €799/mese",
      popular: true
    },
    {
      title: "Piano Elite",
      description: "Soluzione completa per chi vuole trasformare completamente il proprio business con l'IA",
      features: [
        "Coaching quindicinale intensivo",
        "Formazione completamente personalizzata",
        "Automazioni e agenti AI illimitati",
        "Sviluppo software personalizzato",
        "Consulenza strategica quindicinale",
        "Supporto prioritario 24/7",
        "Accesso completo a tutti i servizi",
        "Coaching group settimanale",
        "Sessioni di brainstorming",
        "Analytics e reporting settimanale",
        "Priority nella realizzazione di nuovi progetti"
      ],
      price: "da €1.999/mese",
      popular: false
    }
  ];

  // Elementi chiave del coaching
  const coachingFocus = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Definizione Obiettivi",
      description: "Costruiamo insieme un piano strategico personalizzato basato sui tuoi obiettivi specifici"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Automazione Intelligente",
      description: "Automatizziamo i tuoi processi quotidiani per liberare tempo e aumentare produttività"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Growth Tracking",
      description: "Monitoriamo i progressi e ottimizziamo costantemente la strategia basato sui dati reali"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community & Network",
      description: "Fai parte di una comunità di professionisti in crescita con accesso a risorse esclusive"
    }
  ];

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      {/* Background gradients */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.2)"
        colorEnd="rgba(139, 92, 246, 0.25)"
      />
      <ScrollGradient 
        colorStart="rgba(59, 130, 246, 0.15)"
        colorEnd="rgba(96, 165, 250, 0.1)"
        reverse={true} 
        className="opacity-70" 
      />

      <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
        
        {/* Hero Section */}
        <section id="hero-section" className="pt-4 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                  <span className="block text-primary font-semibold">Crescita Personale</span>
                  <motion.span 
                    className="block font-semibold text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
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
                      Accelerata dall'IA.
                    </motion.span>
                  </motion.span>
                </h1>
                
                <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                  Percorsi di crescita personalizzati con coaching intensivo per professionisti, freelancer e imprenditori che vogliono trasformare il loro business con l'intelligenza artificiale.
                </p>

                {/* Badge features */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Coaching Personalizzato</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Mentoring 1-on-1</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Automazioni AI Illimitate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Focus del Coaching */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Cosa Offriamo
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Coaching completo focalizzato sulla crescita personale e professionale attraverso l'automazione intelligente
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {coachingFocus.map((item, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="slideUp" 
                  delay={index * 0.1}
                >
                  <div className="glass rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/5">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Piani Growth Plans Utenti */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Scegli il Tuo Piano
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Tre piani progettati per accompagnarti nel tuo percorso di crescita, dal principiante al professionista elite.
              </p>
            </ScrollAnimation>

            {/* Griglia piani */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {userPlans.map((plan, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="slideUp" 
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className={`relative h-full glass rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular ? 'border-accent' : 'border-white/10 hover:border-accent/50'
                  }`}>
                    
                    {/* Badge popolare */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Più scelto
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-col h-full">
                      {/* Header del piano */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                        <p className="text-foreground/70 mb-4">{plan.description}</p>
                        <div className="text-3xl font-bold text-accent">{plan.price}</div>
                      </div>

                      <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
                      <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>

                      {/* Lista features */}
                      <div className="flex-grow">
                        <h4 className="font-semibold mb-4 text-foreground/90">Include:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className={`w-full py-3 px-6 rounded-xl text-center transition-all duration-300 font-semibold ${
                            plan.popular 
                              ? 'bg-accent text-primary-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:-translate-y-1' 
                              : 'glass border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 hover:-translate-y-1'
                          }`}
                        >
                          Inizia Ora
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Nota informativa */}
            <div className="text-center text-foreground/70 mt-16">
              <p>Tutti i piani includono accesso alla community esclusiva e aggiornamenti continui.</p>
              <p className="mt-2">
                Hai domande? {' '}
                <Link to="/contact" className="text-accent hover:text-accent/80 underline">
                  Contattaci per una consulenza gratuita
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section finale */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="glass p-8 lg:p-12 rounded-2xl border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-blue-400/20 filter blur-3xl"></div>
                  <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-violet-400/10 filter blur-3xl"></div>
                  
                  <div className="text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                      <span className="block text-primary font-semibold">Pronto a crescere?</span>
                      <motion.span 
                        className="block font-semibold text-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
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
                          Inizia il tuo percorso oggi.
                        </motion.span>
                      </motion.span>
                    </h2>
                    <p className="text-base md:text-lg text-secondary leading-relaxed">
                      Richiedi una consulenza gratuita e scopri quale piano è perfetto per le tue esigenze.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 lg:items-end">
                    <Link
                      to="/contact"
                      className="glass px-8 py-4 rounded-xl font-semibold text-lg text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center min-w-[280px]"
                    >
                      Prenota Consulenza Gratuita
                    </Link>
                    
                    <Link
                      to="/growth-plans"
                      className="glass px-8 py-4 rounded-xl font-semibold text-lg text-primary bg-glass-secondary border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center min-w-[280px]"
                    >
                      Torna a Growth Plans
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </>
  );
};

export default GrowthPlansUsers;

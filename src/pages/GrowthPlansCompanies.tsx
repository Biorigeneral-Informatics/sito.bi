// src/pages/GrowthPlansCompanies.tsx - Growth Plans per Aziende con focus su Digitalizzazione
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star,
  Zap,
  Globe,
  TrendingUp,
  Code,
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('growthPlansCompanies');

const GrowthPlansCompanies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Piani per aziende - Piani originali adattati per aziende
  const companyPlans = [
    {
      title: "Piano PMI",
      description: "Ideale per aziende agli inizi che vogliono costruire basi solide per la crescita digitale",
      features: [
        "Siti web illimitati",
        "Google Ads pacchetto Starter",
        "SEO di base",
        "Gestione del Blog",
        "CRM gestito",
        "Social media Ads",
        "1 Software gestionale aziendale personalizzato",
        "Consulenza 1 giorno a settimana",
        "5 Automazioni Make, N8n e Zapier gestite"
      ],
      price: "da €1.500/mese",
      popular: false
    },
    {
      title: "Piano High Growth",
      description: "Per PMI in fase di espansione che necessitano di scalare i loro sistemi e processi",
      features: [
        "Siti web illimitati",
        "Google Ads pacchetto PRO",
        "SEO avanzata",
        "Gestione del Blog",
        "CRM gestito",
        "Social media Ads",
        "1 Software gestionale aziendale personalizzato",
        "Consulenza strategica full time",
        "e-commerce aziendale",
        "WhatsApp Marketing",
        "YouTube Content Marketing",
        "Social ChatBots",
        "Accesso gratuito illimitato al nostro catalogo prodotti",
        "Piani di formazione AI per il tuo Team",
        "Automazioni e agenti illimitati"
      ],
      price: "da €3.000/mese",
      popular: true
    },
    {
      title: "Piano Max Support",
      description: "Soluzione completa per aziende consolidate che cercano innovazione e vantaggio competitivo",
      features: [
        "Tutto dei piani precedenti",
        "Software Illimitati",
        "Servizi di data Analysis avanzati in R studio o Python",
        "Sviluppo Full-Stack a 360 gradi",
        "SaaS e PaaS avanzati",
        "Integrazione completa nei sistemi aziendali",
        "Automazioni Make, N8n e Zapier illimitate gestite con integrazioni avanzate nei sistemi aziendali"
      ],
      price: "da €6.000/mese",
      popular: false
    }
  ];

  // Servizi di digitalizzazione
  const digitalizationServices = [
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Digital Transformation",
      description: "Trasformiamo completamente i vostri processi aziendali attraverso la digitalizzazione completa"
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Sviluppo Software Personalizzato",
      description: "Creiamo software, sistemi gestionali e soluzioni custom perfettamente allineate alle vostre esigenze"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Automazioni Intelligenti",
      description: "Implementiamo automazioni e agenti AI che riducono i costi e aumentano l'efficienza operativa"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Strategie di Growth Digitale",
      description: "Pianifichiamo e realizziamo strategie di marketing digitale per accelerare la crescita aziendale"
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
        colorStart="rgba(16, 185, 129, 0.2)"
        colorEnd="rgba(5, 150, 105, 0.25)"
      />
      <ScrollGradient 
        colorStart="rgba(34, 197, 94, 0.15)"
        colorEnd="rgba(74, 222, 128, 0.1)"
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
                  <span className="block text-primary font-semibold">Trasformazione Digitale</span>
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
                      per la vostra Azienda.
                    </motion.span>
                  </motion.span>
                </h1>
                
                <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                  Piani completi di crescita aziendale che combinano digitalizzazione, sviluppo software, marketing strategico e automazioni AI per accelerare il vostro business.
                </p>

                {/* Badge features */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Digitalizzazione Completa</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Software Personalizzato</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Automazioni Illimitate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Servizi di Digitalizzazione */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Come Digitalizziamo le Aziende
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Offriamo una soluzione completa che trasforma ogni aspetto della vostra operazione aziendale
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {digitalizationServices.map((service, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="slideUp" 
                  delay={index * 0.1}
                >
                  <div className="glass rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/5">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/80">{service.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Piani Growth Plans Aziende */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Scegli il Tuo Piano di Crescita
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Tre soluzioni progettate per accompagnare la vostra azienda dalla startup alle imprese consolidate, ognuna con supporto e consulenza dedicati.
              </p>
            </ScrollAnimation>

            {/* Griglia piani */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {companyPlans.map((plan, index) => (
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

                      <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-green-500/10 filter blur-3xl"></div>
                      <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-green-500/10 filter blur-3xl"></div>

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
                          Richiedi Preventivo
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Nota informativa */}
            <div className="text-center text-foreground/70 mt-16">
              <p>Tutti i piani includono consulenza strategica, implementazione tecnica, supporto continuo e formazione del team.</p>
              <p className="mt-2">
                Hai esigenze specifiche? {' '}
                <Link to="/contact" className="text-accent hover:text-accent/80 underline">
                  Contattaci per un piano personalizzato
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
                  <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-green-400/20 filter blur-3xl"></div>
                  <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-emerald-400/10 filter blur-3xl"></div>
                  
                  <div className="text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                      <span className="block text-primary font-semibold">Trasformiamo Aziende</span>
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
                          in Aziende Digitali.
                        </motion.span>
                      </motion.span>
                    </h2>
                    <p className="text-base md:text-lg text-secondary leading-relaxed">
                      Richiedi una consulenza gratuita e scopri come possiamo far crescere la vostra azienda attraverso la trasformazione digitale.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 lg:items-end">
                    <Link
                      to="/contact"
                      className="glass px-8 py-4 rounded-xl font-semibold text-lg text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center min-w-[280px]"
                    >
                      Richiedi Consulenza Gratuita
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

export default GrowthPlansCompanies;

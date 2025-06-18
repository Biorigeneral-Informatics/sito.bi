// src/pages/GrowthPlans.tsx - Versione con piani originali e tabella corretta
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Settings,
  Headphones,
  Star,
  Globe,
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import React from 'react';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('growthPlans'); // cambia 'nomePagina'


const GrowthPlans = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  // Piani originali mantenuti
  const growthPlans = [
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
        "Whatsapp Marketing",
        "Youtube Content Marketing",
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
        "SaaS e Paas avanzati",
        "Integrazione completa nei sistemi aziendali",
        "Automazioni Make, N8n e Zapier illimitate gestite con integrazioni avanzate nei sistemi aziendali"
      ],
      price: "da €6.000/mese",
      popular: false
    }
  ];

  // Dati per la tabella di confronto basati sui piani originali
  const comparisonFeatures = [
    {
      category: 'Digital Marketing',
      features: [
        {
          name: 'Siti web illimitati',
          pmi: true,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Google Ads',
          pmi: 'Pacchetto Starter',
          highGrowth: 'Pacchetto PRO',
          maxSupport: 'Pacchetto PRO'
        },
        {
          name: 'SEO',
          pmi: 'Di base',
          highGrowth: 'Avanzata',
          maxSupport: 'Avanzata'
        },
        {
          name: 'Gestione del Blog',
          pmi: true,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Social Media Ads',
          pmi: true,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'WhatsApp Marketing',
          pmi: false,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'YouTube Content Marketing',
          pmi: false,
          highGrowth: true,
          maxSupport: true
        }
      ]
    },
    {
      category: 'Software e Sistemi',
      features: [
        {
          name: 'CRM gestito',
          pmi: true,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Software gestionale aziendale',
          pmi: '1 personalizzato',
          highGrowth: '1 personalizzato',
          maxSupport: 'Illimitati'
        },
        {
          name: 'e-commerce aziendale',
          pmi: false,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Social ChatBots',
          pmi: false,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Sviluppo Full-Stack',
          pmi: false,
          highGrowth: false,
          maxSupport: 'A 360 gradi'
        },
        {
          name: 'SaaS e PaaS avanzati',
          pmi: false,
          highGrowth: false,
          maxSupport: true
        },
        {
          name: 'Automazioni e Agenti',
          pmi: '5 al mese',
          highGrowth: 'Illimitate',
          maxSupport: 'Illimitate'
        }
      ]
    },
    {
      category: 'Supporto e Servizi',
      features: [
        {
          name: 'Consulenza',
          pmi: '1 giorno/settimana',
          highGrowth: 'Strategica full time',
          maxSupport: 'Strategica full time'
        },
        {
          name: 'Accesso catalogo prodotti',
          pmi: false,
          highGrowth: 'Gratuito illimitato',
          maxSupport: 'Gratuito illimitato'
        },
        {
          name: 'Formazione AI Team',
          pmi: false,
          highGrowth: true,
          maxSupport: true
        },
        {
          name: 'Data Analysis avanzati',
          pmi: false,
          highGrowth: false,
          maxSupport: 'R Studio e Python'
        },
        {
          name: 'Integrazione sistemi aziendali',
          pmi: false,
          highGrowth: false,
          maxSupport: 'Completa'
        }
      ]
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
      {/* Background gradients simili alla Home */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.2)"
        colorEnd="rgba(139, 92, 246, 0.25)"
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.15)"
        colorEnd="rgba(16, 185, 129, 0.15)"
        reverse={true} 
        className="opacity-70" 
      />

      <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
        
        {/* Hero Section - Stesso stile della Home */}
        <section id="hero-section" className="pt-4 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <motion.div
                
              >
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
            <span className="block text-primary font-semibold">Piani che</span>
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
                crescono con te.  
              </motion.span>
            </motion.span>
          </h1>
                
                <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                  Che tu sia nuovo all'automazione o la utilizzi per gestire l'intera azienda, c'è un piano per te.
                </p>

                {/* Badge features */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Nessun limite</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Scala mentre cresci</span>
                  </div>
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium">
                    <span className="text-violet-500">Strumenti avanzati ad ogni livello</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Piani - Nuovo design ispirato alla Home */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            
            
            {/* Griglia piani */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              
              {growthPlans.map((plan, index) => (
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
                          Piano più popolare
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
                       <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-green-800/10 filter blur-3xl"></div>
                        <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-green-800/10 filter blur-3xl"></div>
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
                          className={`w-full py-3 px-6 rounded-xl text-center block transition-all duration-300 font-semibold ${
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
            <div className="text-center text-foreground/70">
              <p>Tutti i piani includono consulenza strategica, implementazione e supporto tecnico.</p>
              <p className="mt-2">
                Hai esigenze specifiche? {' '}
                <Link to="/contact" className="text-accent hover:text-accent/80 underline">
                  Contattaci per un piano personalizzato
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Breakdown - Tabella senza container con colonne separate */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            
            <ScrollAnimation animation="fadeIn" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Confronto Dettagliato
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Scopri tutte le funzionalità incluse in ogni piano per scegliere quello più adatto alle tue esigenze.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] bg-transparent">
                  {/* Header tabella */}
                  <thead>
                    <tr className="border-b-2 border-white/20">
                      <th className="text-left py-6 px-6 font-semibold text-lg border-r border-white/10">
                        Funzionalità
                      </th>
                      <th className="text-center py-6 px-6 font-semibold text-lg border-r border-white/10">
                        Piano PMI
                      </th>
                      <th className="text-center py-6 px-6 font-semibold text-lg border-r border-white/10 relative">
                        <div className="flex items-center justify-center gap-2">
                          Piano High Growth
                          <Star className="w-4 h-4 text-accent" />
                        </div>
                      </th>
                      <th className="text-center py-6 px-6 font-semibold text-lg">
                        Piano Max Support
                      </th>
                    </tr>
                  </thead>
                  
                  {/* Body tabella */}
                  <tbody>
                    {comparisonFeatures.map((category,) => (
                      <React.Fragment key={category.category}>
                        {/* Categoria header */}
                        <tr className="bg-white/5">
                          <td colSpan={4} className="py-4 px-6 border-b border-white/10">
                            <div className="font-semibold text-accent text-lg flex items-center gap-2">
                              {category.category === 'Digital Marketing' && <Globe className="w-5 h-5" />}
                              {category.category === 'Software e Sistemi' && <Settings className="w-5 h-5" />}
                              {category.category === 'Supporto e Servizi' && <Headphones className="w-5 h-5" />}
                              {category.category}
                            </div>
                          </td>
                        </tr>
                        
                        {/* Features della categoria */}
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-6 text-foreground/80 border-r border-white/10">
                              {feature.name}
                            </td>
                            
                            {/* Colonna Piano PMI */}
                            <td className="py-4 px-6 text-center border-r border-white/10">
                              {typeof feature.pmi === 'boolean' ? (
                                feature.pmi ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-foreground/70 text-sm">{feature.pmi}</span>
                              )}
                            </td>
                            
                            {/* Colonna Piano High Growth */}
                            <td className="py-4 px-6 text-center border-r border-white/10">
                              {typeof feature.highGrowth === 'boolean' ? (
                                feature.highGrowth ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-foreground/70 text-sm">{feature.highGrowth}</span>
                              )}
                            </td>
                            
                            {/* Colonna Piano Max Support */}
                            <td className="py-4 px-6 text-center">
                              {typeof feature.maxSupport === 'boolean' ? (
                                feature.maxSupport ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-foreground/70 text-sm">{feature.maxSupport}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section finale - Layout split con contenuto a sinistra e bottoni a destra */}
<section className="py-16 md:py-24 relative">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="fadeIn">
      <div className="glass p-8 lg:p-12 rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-green-400/20 filter blur-3xl"></div>
                   <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-violet-400/10 filter blur-3xl"></div>
          
          {/* Contenuto a sinistra */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
              <span className="block text-primary font-semibold">Hai domande riguardo i nostri</span>
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
                  Piani di Crescita?  
                </motion.span>
              </motion.span>
            </h1>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              Contattaci per un assessment gratuito e scopri quale piano si adatta meglio alle tue esigenze.
            </p>
          </div>

          {/* Bottoni a destra */}
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              to="/contact"
              className="glass px-8 py-4 rounded-xl font-semibold text-lg text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group min-w-[280px]"
            >
              Prenota una consulenza gratuita
              
            </Link>
            
            <Link
              to="/products"
              className="glass px-8 py-4 rounded-xl font-semibold text-lg text-primary bg-glass-secondary border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center min-w-[280px]"
            >
              Esplora Prodotti
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

export default GrowthPlans;
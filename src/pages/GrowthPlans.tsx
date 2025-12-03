// src/pages/GrowthPlans.tsx - Versione con timeline, selezione utenti/aziende e tabella aggiornata
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
  ArrowRight,
  Users,
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

  // Timeline del metodo di crescita
  const timelineSteps = [
    {
      number: 1,
      title: "Analisi Strategica",
      description: "Comprendiamo la vostra situazione attuale, obiettivi e sfide specifiche del vostro settore"
    },
    {
      number: 2,
      title: "Progettazione AI",
      description: "Disegniamo una strategia personalizzata integrando IA e automazioni su misura"
    },
    {
      number: 3,
      title: "Implementazione",
      description: "Realizziamo i sistemi, software e automazioni seguendo best practices"
    },
    {
      number: 4,
      title: "Ottimizzazione Continua",
      description: "Monitoraggio costante e miglioramenti iterativi per massimizzare ROI"
    },
    {
      number: 5,
      title: "Crescita Sostenibile",
      description: "La vostra azienda/persona cresce velocemente e sostenibilmente nel lungo termine"
    }
  ];


  // Dati per la tabella di confronto tra GrowthPlans utenti e aziende
  const comparisonFeatures = [
    {
      category: 'Coaching e Formazione',
      features: [
        {
          name: 'Coaching Personalizzato',
          users: 'Sessioni settimanali 1-on-1',
          companies: 'Coaching team strategico'
        },
        {
          name: 'Formazione AI e Automazioni',
          users: 'Percorsi individuali',
          companies: 'Piani di formazione team'
        },
        {
          name: 'Accesso ai Corsi',
          users: 'Illimitato',
          companies: 'Illimitato per team'
        },
        {
          name: 'Mentoring',
          users: true,
          companies: true
        }
      ]
    },
    {
      category: 'Strumenti e Automazioni',
      features: [
        {
          name: 'Automazioni e Agenti AI',
          users: 'Fino a 20 al mese',
          companies: 'Illimitate'
        },
        {
          name: 'CRM Gestito',
          users: false,
          companies: true
        },
        {
          name: 'Software Personalizzati',
          users: false,
          companies: '1+ illimitati'
        },
        {
          name: 'Integrazione Sistemi Aziendali',
          users: false,
          companies: 'Completa'
        },
        {
          name: 'API e Webhook Avanzati',
          users: false,
          companies: true
        }
      ]
    },
    {
      category: 'Digital Marketing e Produzione',
      features: [
        {
          name: 'Siti Web Personalizzati',
          users: false,
          companies: true
        },
        {
          name: 'E-commerce',
          users: false,
          companies: true
        },
        {
          name: 'Social Media Ads',
          users: false,
          companies: true
        },
        {
          name: 'Google Ads Gestito',
          users: false,
          companies: 'PRO'
        },
        {
          name: 'SEO e Content Marketing',
          users: false,
          companies: 'Avanzato'
        },
        {
          name: 'Video Content Creation',
          users: false,
          companies: true
        }
      ]
    },
    {
      category: 'Supporto e Consulenza',
      features: [
        {
          name: 'Supporto Tecnico',
          users: 'Email e Chat',
          companies: 'Prioritario 24/7'
        },
        {
          name: 'Consulenza Strategica',
          users: 'Mensile',
          companies: 'Full-time'
        },
        {
          name: 'Riunioni di Revisione',
          users: 'Mensili',
          companies: 'Settimanali'
        },
        {
          name: 'Analisi e Reporting',
          users: 'Mensile',
          companies: 'Settimanale'
        }
      ]
    },
    {
      category: 'Analytics e Ottimizzazione',
      features: [
        {
          name: 'Dashboard Personalizzate',
          users: true,
          companies: true
        },
        {
          name: 'Data Analysis Avanzata',
          users: false,
          companies: 'R Studio e Python'
        },
        {
          name: 'A/B Testing e Optimizzazione',
          users: 'Base',
          companies: 'Avanzato'
        },
        {
          name: 'ROI Tracking Dettagliato',
          users: true,
          companies: true
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

        {/* Timeline del Metodo di Crescita */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Il Nostro Metodo di Crescita
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Un percorso strutturato che utilizza l'intelligenza artificiale e le automazioni per accelerare la crescita sostenibile.
              </p>
            </ScrollAnimation>

            <div className="space-y-8 md:space-y-10">
              {timelineSteps.map((step, index) => (
                <ScrollAnimation 
                  key={step.number} 
                  animation="slideUp" 
                  delay={index * 0.1}
                  className={`flex gap-4 md:gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Numero e cerchio */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-xl font-bold text-accent">{step.number}</span>
                    </div>
                  </div>

                  {/* Contenuto */}
                  <div className="flex-1 glass rounded-lg p-4 md:p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-foreground/80 text-sm md:text-base">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Selezione GrowthPlans - Utenti vs Aziende */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Scegli il Tuo Percorso di Crescita
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Growth Plans su misura per individui e per aziende. Scopri quale percorso è perfetto per te.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Growth Plans per Utenti */}
              <ScrollAnimation animation="slideUp" delay={0.1} className="h-full">
                <div className="relative h-full rounded-2xl overflow-hidden group">
                  {/* Blur blobs static */}
                  <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/15 filter blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 glass rounded-2xl p-8 lg:p-10 border border-white/10 transition-all duration-300 h-full flex flex-col backdrop-blur-xl">
                    {/* Icon header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center transition-all duration-300">
                        <Users className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Growth Plans<br/>per Utenti</h3>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-foreground/80 text-sm mb-2 font-medium">
                        Percorsi di crescita personale con focus su coaching individuale
                      </p>
                      <p className="text-foreground/60 text-xs">
                        Ideale per: Professionisti, freelance, consulenti, imprenditori individuali
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Coaching personalizzato 1-on-1</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Formazione avanzata su IA e automazioni</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Automazioni AI personalizzate</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Supporto mentoring continuo</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href="/growth-plans-users"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'white' }}
                      className="w-full mt-8 py-3 px-6 rounded-lg text-center transition-all duration-300 font-semibold bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Scopri di più
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Growth Plans per Aziende */}
              <ScrollAnimation animation="slideUp" delay={0.2} className="h-full">
                <div className="relative h-full rounded-2xl overflow-hidden group">
                  {/* Blur blobs static */}
                  <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-500/15 filter blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-green-500/10 filter blur-3xl"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 glass rounded-2xl p-8 lg:p-10 border border-white/10 transition-all duration-300 h-full flex flex-col backdrop-blur-xl">
                    {/* Icon header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center transition-all duration-300">
                        <Globe className="w-7 h-7 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Growth Plans<br/>per Aziende</h3>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-foreground/80 text-sm mb-2 font-medium">
                        Soluzione completa di trasformazione digitale e automazione aziendale
                      </p>
                      <p className="text-foreground/60 text-xs">
                        Ideale per: PMI, startup, aziende in crescita, imprese consolidate
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Digitalizzazione completa della struttura</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Sviluppo software e sistemi gestionali</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Strategie di marketing digitale avanzate</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-foreground/80 text-sm">Automazioni e agenti AI illimitati</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href="/growth-plans-companies"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'white' }}
                      className="w-full mt-8 py-3 px-6 rounded-lg text-center transition-all duration-300 font-semibold bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Scopri di più
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Pricing Breakdown - Tabella di confronto utenti vs aziende */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            
            <ScrollAnimation animation="fadeIn" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                Confronto Dettagliato
              </h2>
              <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
                Scopri tutte le funzionalità incluse nei Growth Plans per utenti e aziende per scegliere quello più adatto alle tue esigenze.
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
                        Growth Plans Utenti
                      </th>
                      <th className="text-center py-6 px-6 font-semibold text-lg border-r border-white/10 relative">
                        <div className="flex items-center justify-center gap-2">
                          Growth Plans Aziende
                          <Star className="w-4 h-4 text-accent" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  
                  {/* Body tabella */}
                  <tbody>
                    {comparisonFeatures.map((category) => (
                      <React.Fragment key={category.category}>
                        {/* Categoria header */}
                        <tr className="bg-white/5">
                          <td colSpan={3} className="py-4 px-6 border-b border-white/10">
                            <div className="font-semibold text-accent text-lg flex items-center gap-2">
                              {category.category === 'Coaching e Formazione' && <Headphones className="w-5 h-5" />}
                              {category.category === 'Strumenti e Automazioni' && <Settings className="w-5 h-5" />}
                              {category.category === 'Digital Marketing e Produzione' && <Globe className="w-5 h-5" />}
                              {category.category === 'Supporto e Consulenza' && <Headphones className="w-5 h-5" />}
                              {category.category === 'Analytics e Ottimizzazione' && <Settings className="w-5 h-5" />}
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
                            
                            {/* Colonna Growth Plans Utenti */}
                            <td className="py-4 px-6 text-center border-r border-white/10">
                              {typeof feature.users === 'boolean' ? (
                                feature.users ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-foreground/70 text-sm">{feature.users}</span>
                              )}
                            </td>
                            
                            {/* Colonna Growth Plans Aziende */}
                            <td className="py-4 px-6 text-center">
                              {typeof feature.companies === 'boolean' ? (
                                feature.companies ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-foreground/70 text-sm">{feature.companies}</span>
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
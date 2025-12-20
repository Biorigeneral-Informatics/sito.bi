// src/pages/Software.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, GitBranch, Database, Laptop, Cloud, Shield, Zap, CheckCircle, BarChart, ArrowRight, Workflow,Bot,  } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('softwarePMI'); // mantiene la chiave seo esistente

const Software = () => {
  const solutionTypes = [
    {
      title: "Software Locali",
      description: "Software ERP e Client App personalizzati per gestire tutte le operazioni aziendali in modo efficiente",
      icon: <BarChart className="w-12 h-12 text-gray-400" />
    },
    {
      title: "App Web",
      description: "Applicazioni web responsive e performanti per ogni esigenza aziendale",
      icon: <Laptop className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Integrazione AI",
      description: "Intelligenza artificiale integrata per automatizzare e ottimizzare i processi aziendali",
      icon: <Bot className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Siti Web",
      description: "Piattaforme online personalizzate e ottimizzate per conversioni",
      icon: <Database className="w-12 h-12 text-gray-400" />
    }
  ];

  const benefits = [
    "Automazione dei processi aziendali ripetitivi",
    "Sistema di sviluppo AI Based",
    "Massima flessibilità nei costi",
    "Integrazione completa tra sistemi diversi",
    "Offerta completa di piani di manutenzione",
    "Assistenza strategica in ogni fase di crescita"
  ];

  const developmentSteps = [
    {
      step: "01",
      title: "Analisi e Requisiti",
      description: "Analizziamo le tue esigenze e definiamo obiettivi chiari",
      icon: <Laptop className="w-8 h-8 text-white-500" />,
      color: ""
      
    },
    {
      step: "02",
      title: "Design e Prototipazione", 
      description: "Creiamo prototipi interattivi per validare l'esperienza utente",
      icon: <Code className="w-8 h-8 text-white" />,
      color: ""
    },
    {
      step: "03",
      title: "Sviluppo Agile",
      description: "Sviluppiamo usando metodologie agili con feedback continui",
      icon: <Workflow className="w-8 h-8 text-white" />,
      color: ""
    },
    {
      step: "04",
      title: "Test e Rilascio",
      description: "Testing completo e deploy in produzione con supporto continuo",
      icon: <Cloud className="w-8 h-8 text-white" />,
      color: ""
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
        colorStart="rgba(79, 70, 229, 0.3)"
        colorEnd="rgba(139, 92, 246, 0.3)"
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.25)"
        colorEnd="rgba(16, 185, 129, 0.2)"
        reverse={true} 
        className="opacity-80" 
      />

      <div className="min-h-screen pt-23 pb-16">

        {/* Hero Section - Manteniamo solo il titolo iniziale */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-1 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                <span className="block text-primary font-semibold">Il Software che cresce</span>
                <motion.span 
                  className="block font-semibold text-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    con le tue idee.
                  </motion.span>
                </motion.span>
              </h1>
              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                Comprendiamo le sfide uniche delle piccole e medie imprese e trasformiamo le tue esigenze in soluzioni digitali concrete, pronte a generare valore.
              </p>
              {/* Pulsanti CTA sotto il titolo (ripristinati) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                >
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/products" 
                  className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Esplora Soluzioni
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione: Perché siamo ciò che ti serve */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3">
              <span className="text-green-500">Perché scegliere noi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Perché siamo ciò che ti serve</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">Siamo un team snello e orientato al risultato: tecnologia moderna, attenzione al budget e forte focus sulle integrazioni AI.</p>
          </div>
        </ScrollAnimation>

        <section className="mb-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              <ul className="max-w-3xl mx-auto space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Giovani talenti</h4>
                    <p className="text-foreground/70">Team dinamico, aggiornato e motivato a portare valore reale al tuo progetto.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Tecnologie moderne in Italia ancora poco note</h4>
                    <p className="text-foreground/70">Sfruttiamo stack e tool emergenti per darti vantaggio competitivo e costi più bassi nel tempo.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Approccio API oriented</h4>
                    <p className="text-foreground/70">Sviluppo funzionale e scalabile, progettato per integrazioni e automazioni future.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Massimizziamo il tuo budget</h4>
                    <p className="text-foreground/70">Prioritizziamo valore e ROI, rilasciando MVP e ottimizzando investimenti con iterazioni mirate.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Specializzati in integrazioni AI</h4>
                    <p className="text-foreground/70">Integriamo modelli e agenti AI per automatizzare processi e creare prodotti più intelligenti.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <div className="inline-block px-5 py-3 rounded-lg bg-accent/10 border border-accent/20">
                  <span className="text-foreground/90 font-semibold">"Basta spendere tanto per mesi di sviluppo senza test sul mercato, noi andiamo nella direzione opposta."</span>
                </div>
              </div>

              {/* Immagini prese dalla sezione Portfolio (stessa dimensione container) */}
              <div className="mt-8">
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img src="https://i.ibb.co/C58jtr9B/sea1.png" alt="Gestionale classificazione rifiuti - screenshot" className="w-full rounded-2xl shadow-lg object-cover h-48 md:h-64" />
                    <img src="https://i.ibb.co/W4Q77jC6/sea4.png" alt="Gestionale classificazione rifiuti - dettaglio" className="w-full rounded-2xl shadow-lg object-cover h-48 md:h-64" />
                    <img src="https://i.ibb.co/jPRynD4p/autom1.png" alt="Automazioni e Agenti AI - screenshot" className="w-full rounded-2xl shadow-lg object-cover h-48 md:h-64" />
                  </div>
                  <p className="text-sm text-foreground/60 mt-3 text-center">Screenshot di progetti reali dal nostro portfolio</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Sezione: perché il nostro processo Agile è migliore */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h3 className="text-xl text-green-500 font-medium mb-2">Perché il nostro Agile</h3>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Un processo pensato per ridurre rischi e costi</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Il nostro approccio favorisce rilasci rapidi e valore reale: paghi solo ciò che ti serve, vedi risultati in poche settimane e costruisci il prodotto migliorandolo passo dopo passo.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative overflow-hidden bg-background/5 p-6 rounded-2xl border border-white/6 backdrop-blur-sm shadow-lg">
                  {/* Metallic sheen overlays */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-gradient-to-br from-white/5 via-white/10 to-white/5"></div>
                  <div className="absolute -top-8 -left-24 w-64 h-32 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-70 blur-2xl transform rotate-12 pointer-events-none animate-pulse" />
                  <ol className="space-y-6">
                    {[{
                      title: 'Paghi solo ciò che serve',
                      text: 'Acquisti un MVP e poi upgrade incrementali: costi trasparenti e allineati al valore reale.',
                      gradient: 'from-cyan-500 to-violet-500'
                    },{
                      title: 'Risultati in poche settimane',
                      text: 'Iterazioni rapide: dopo poche settimane hai già qualcosa di concreto tra le mani su cui testare ipotesi.',
                      gradient: 'from-green-400 to-cyan-500'
                    },{
                      title: 'Il software cresce sbagliando',
                      text: 'Accettiamo l\'errore rapido come leva di apprendimento: ogni iterazione rende il prodotto più solido e allineato al mercato.',
                      gradient: 'from-violet-500 to-pink-500'
                    },{
                      title: 'Tecnologie moderne e integrazioni',
                      text: 'App desktop, app web, client apps, integrazioni API, setup micro-server moderni, automazioni, framework di ultima generazione e database sicuri.',
                      gradient: 'from-indigo-500 to-cyan-500'
                    }].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                      >
                        <div className="flex-shrink-0">
                          <motion.div
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center font-semibold`}
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop' }}
                          >{i+1}</motion.div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <p className="mt-2 text-foreground/70 leading-relaxed">{item.text}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-2xl md:text-4xl italic text-accent font-semibold">"Fallire subito per avere successo prima."</p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Finale - Stile identico alla Home */}
        <section className="py-22 md:py-32 mt-20 relative overflow-hidden">
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
                    <span className="block text-primary">Definire il tuo business</span>
                  </h2>

                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Parliamo del tuo progetto: definiamo insieme obiettivi, priorità e valore di business.
                  </p>

                  <div className="flex justify-center">
                    <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:text-white hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 border border-yellow-400/50"
                      >
                        Richiedi una call gratuita
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </motion.div>
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

export default Software;

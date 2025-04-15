// src/pages/GrowthPlans.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Zap, Users, CheckCircle, Clock } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const GrowthPlans = () => {
  const growthPlans = [
    {
      title: "Piano Startup",
      description: "Ideale per aziende agli inizi che vogliono costruire basi solide per la crescita digitale",
      features: [
        "Analisi mercato e competitor",
        "Setup infrastruttura tecnologica",
        "Sito web e CRM base",
        "Strategia social media"
      ],
      price: "da €1.500/mese",
      popular: false
    },
    {
      title: "Piano Crescita",
      description: "Per PMI in fase di espansione che necessitano di scalare i loro sistemi e processi",
      features: [
        "Software gestionale personalizzato",
        "Integrazione sistemi esistenti",
        "CRM avanzato con automazioni",
        "Dashboard analytics",
        "Consulenza strategica"
      ],
      price: "da €3.000/mese",
      popular: true
    },
    {
      title: "Piano Enterprise",
      description: "Soluzione completa per aziende consolidate che cercano innovazione e vantaggio competitivo",
      features: [
        "Ecosistema software completo",
        "BI e analytics avanzato",
        "Integrazione AI nei processi",
        "Sviluppo multi-piattaforma",
        "Consulenza strategica continua"
      ],
      price: "da €6.000/mese",
      popular: false
    }
  ];

  const outcomes = [
    {
      title: "Aumento Efficienza",
      description: "Processi ottimizzati e automatizzati che riducono tempi e costi operativi",
      icon: <Zap className="w-10 h-10 text-amber-400" />,
      stat: "+35%"
    },
    {
      title: "Crescita Fatturato",
      description: "Incremento del business grazie a nuovi canali digitali e miglioramento della customer experience",
      icon: <TrendingUp className="w-10 h-10 text-green-400" />,
      stat: "+28%"
    },
    {
      title: "Soddisfazione Clienti",
      description: "Miglioramento dell'esperienza cliente grazie a sistemi più efficienti e interazioni personalizzate",
      icon: <Users className="w-10 h-10 text-blue-400" />,
      stat: "+45%"
    }
  ];

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Piani di Crescita</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Percorsi strutturati di trasformazione digitale per accelerare la crescita della tua azienda
        </p>
      </motion.div>

      {/* Hero Section */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trasforma la tua azienda con un piano strategico</h2>
              <p className="text-foreground/70 mb-8">
                I nostri Piani di Crescita combinano tecnologia, strategia e implementazione in un percorso 
                strutturato che guida la tua azienda verso la trasformazione digitale completa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg text-center"
                >
                  Consulenza Gratuita
                </Link>
                
                <a
                  href="#pricing"
                  className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all text-center"
                >
                  Vedi i Piani
                </a>
              </div>
            </div>
            
            <div>
              <div className="glass p-6 rounded-xl bg-primary/5 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Crescita Guidata</h3>
                <p className="text-foreground/70">
                  Trasforma la tua azienda con un percorso strutturato, obiettivi misurabili e supporto continuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Outcomes Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Risultati che Puoi Aspettarti</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <ScrollAnimation 
              key={index} 
              animation="scale" 
              delay={0.1 * index}
              className="glass p-8 rounded-xl text-center h-full"
            >
              <div className="inline-flex items-center justify-center mb-6">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
              <p className="text-foreground/70 mb-6">{outcome.description}</p>
              <div className="text-3xl font-bold text-primary">{outcome.stat}</div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Come Funziona</h2>
          
          <div className="relative border-l-2 border-primary/30 ml-6 pl-8 py-4 space-y-8">
            {[
              {
                step: 1,
                title: "Assessment Iniziale",
                description: "Analizziamo la tua azienda, i processi, i sistemi attuali e identifichiamo opportunità di miglioramento.",
                duration: "2-3 settimane"
              },
              {
                step: 2,
                title: "Definizione Piano Strategico",
                description: "Elaboriamo un piano di trasformazione digitale personalizzato con obiettivi, milestone e KPI specifici.",
                duration: "3-4 settimane"
              },
              {
                step: 3,
                title: "Implementazione Iterativa",
                description: "Sviluppiamo e implementiamo le soluzioni in cicli agili con feedback continuo per garantire allineamento.",
                duration: "6-24 mesi (basato sul piano)"
              },
              {
                step: 4,
                title: "Misurazione e Ottimizzazione",
                description: "Monitoriamo continuamente i KPI, analizziamo i risultati e ottimizziamo le soluzioni per massimizzare il ROI.",
                duration: "Continuo"
              }
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70 mb-2">{step.description}</p>
                <div className="flex items-center text-foreground/60 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Durata: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Pricing Section */}
      <div className="mb-16" id="pricing">
        <h2 className="text-3xl font-bold mb-10 text-center">I Nostri Piani</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {growthPlans.map((plan, index) => (
            <ScrollAnimation 
              key={index}
              animation="fadeIn"
              delay={0.1 * index}
            >
              <div className={`glass rounded-2xl overflow-hidden h-full flex flex-col ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Piano più popolare
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-foreground/70 mb-6">{plan.description}</p>
                  
                  <div className="text-2xl font-bold mb-6">{plan.price}</div>
                  
                  <h4 className="font-semibold mb-4">Include:</h4>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg text-center block transition-all ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg' 
                        : 'border border-primary/30 hover:bg-primary/10'
                    }`}
                  >
                    Richiedi Preventivo
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="text-center mt-8 text-foreground/70">
          <p>Tutti i piani includono consulenza strategica, implementazione e supporto tecnico.</p>
          <p className="mt-2">Hai esigenze specifiche? <Link to="/contact" className="text-primary hover:underline">Contattaci per un piano personalizzato</Link></p>
        </div>
      </div>
      
      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn">
        <div className="glass p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a Iniziare il Tuo Percorso di Crescita?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contattaci per un assessment gratuito e scopri quale piano si adatta meglio alle tue esigenze.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
            >
              Prenota una consulenza gratuita
            </Link>
            
            <Link
              to="/products"
              className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              Esplora Prodotti
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default GrowthPlans;
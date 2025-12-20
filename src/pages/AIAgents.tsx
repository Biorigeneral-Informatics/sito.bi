import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Users, Shield, TrendingUp, Workflow, CheckCircle, ArrowRight,
  BarChart, Check, ChevronRight
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';
import { integrationsData, integrationCategories, faqs } from '../data/integrationsData';
import IntegrationCard from '../components/IntegrationCard';
import VideoShowcase from '../components/VideoShowcase';
import Testimonials from '../components/Testimonials';
import AccordionFAQ from '../components/AccordionFAQ';

const seoData = getSEOData('aiAgents');

const AIAgents = () => {
  const [activeCategory, setActiveCategory] = useState('crm');
  const [expandedIntegration, setExpandedIntegration] = useState<string | null>(null);

  const toggleIntegration = (id: string) => {
    setExpandedIntegration(expandedIntegration === id ? null : id);
  };

  const benefits = [
    "Supporto reale e massima trasparenza",
    "Setup della piatatforma n8n con credenziali personalizzate",
    "Team giovane e dinamico, in linea con le ultime tecnologie",
    "Compatibili con la maggior parte delle app aziendali più note",
    "Accedi a sconti fino al 50% sui servizi di BI",
    "Scalabilità illimitata con i nostri frontend in Electron",
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

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-1 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">

              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-green-500">
                  Intelligenza Artificiale Autonoma
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                <span className="block text-primary font-semibold">Agenti AI che trasformano</span>
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
                    il tuo business.
                  </motion.span>
                </motion.span>
              </h1>

              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                Sofware di intelligenza artificiale autonomi operativi 24/7 e che compiono operazioni intelligenti su sistemi aziendali reali.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                >
                  Richiedi Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/products"
                  className="glass px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-glass-secondary border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Esplora Soluzioni
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Video Showcase - sostituito: parte da 11:32 (692s) */}
        <VideoShowcase
          videoId="bRJFhCgVAzU"
          startTime={815}
          title="Sviluppo Agenti AI Avanzati"
          description="Guarda come i nostri ingegneri progettano agenti capaci di ragionamento complesso. Un esempio reale di implementazione che mostra la logica e la potenza dei nostri sistemi."
        />

        {/* n8n & AI Agent Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-6">
                  <span className="text-cyan-500">Tecnologia Principale</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight text-white">
                  n8n & AI Agent: <span className="text-accent">una delle poche aziende specializzate</span>
                </h2>

                <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">
                  n8n è uno dei motori di automazione più potenti oggi disponibili. Non è un semplice strumento "no-code", ma una vera piattaforma di orchestrazione dei processi, capace di collegare sistemi, dati e persone in modo intelligente e scalabile.
                </p>

                <p className="text-base md:text-lg text-secondary leading-relaxed">
                  Siamo una delle pochissime realtà in Italia specializzate esclusivamente in n8n e AI Agent, e utilizziamo questa tecnologia per costruire soluzioni robuste, personalizzate e pronte a crescere insieme al business.
                </p>
              </div>
            </ScrollAnimation>

            {/* Perché n8n è diverso */}
            <ScrollAnimation animation="fadeIn" delay={0.1}>
              <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-white">Perché n8n è diverso</h3>

                <p className="text-base md:text-lg text-secondary mb-10 leading-relaxed">
                  n8n permette di andare molto oltre l'automazione standard:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Controllo totale sull'architettura",
                      description: "Self-hosted, cloud o on-premise: nessun vincolo di piattaforma, nessun lock-in.",
                      icon: "🏗️"
                    },
                    {
                      title: "Logica complessa senza compromessi",
                      description: "Condizioni avanzate, branching, gestione degli errori, loop, webhook e codice personalizzato.",
                      icon: "⚙️"
                    },
                    {
                      title: "Integrazione nativa con qualsiasi sistema",
                      description: "API, database, CRM, ERP, servizi cloud, strumenti legacy e software proprietari.",
                      icon: "🔗"
                    },
                    {
                      title: "Open Source e personalizzabile",
                      description: "Dove il framework in se non basta, n8n può essere esteso con nodi custom e codice sorgente open source",
                      icon: "🚀"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass p-6 md:p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/5"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* AI Agent Customer Care */}
            <ScrollAnimation animation="fadeIn" delay={0.2}>
              <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 mb-4">
                    <span className="text-red-500 font-bold text-sm">Soluzione Principale</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    La nostra creazione: <span className="relative inline-block bg-gradient-to-r from-red-700 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl shadow-2xl shadow-red-500/60" style={{textShadow: '0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3)'}}>Agente AI multimodale che genera valore costante</span>
                  </h3>
                </div>

                <div className="glass p-8 md:p-10 rounded-xl border border-white/10 mb-10">
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    Abbiamo progettato un AI Agent completo e intelligente, capace di operare autonomamente sulle ncipali aree di un ecosistema digitale aziendale: Sales, Customer Care e Lead Management.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  <div>
                    <h4 className="font-bold text-white mb-6 text-xl md:text-2xl">Interfacce Utente</h4>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">WhatsApp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Web</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Telegram</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Telefono</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-6 text-xl md:text-2xl">Funzionalità Chiave</h4>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Protocollo MCP integrato</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Gestione Google Calendar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Pannello custom setup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Notifiche to do e comunicazioni</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-6 text-xl md:text-2xl">Gestione Dati Clienti</h4>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Registrazione automatica in database</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Profilazione clienti intelligente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Salvataggio conversazioni</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Integrazione CRM</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-6 text-xl md:text-2xl">Recupero Clienti</h4>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Riattivazione contatti "stand by"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Chiamate telefoniche autonome</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Follow-up intelligente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-4 font-bold text-xl">✓</span>
                        <span className="text-base md:text-lg">Aumenta ROI e retention</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* La nostra specializzazione */}
            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent rounded-full"></div>
                  
                  <div className="glass p-8 md:p-10 rounded-xl border border-white/10 pl-6 md:pl-10">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">La nostra specializzazione</h3>

                    <p className="text-base md:text-lg text-secondary leading-relaxed mb-8">
                      La differenza non è lo strumento, ma come viene usato.
                    </p>

                    <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">
                      Grazie a una profonda esperienza su n8n:
                    </p>

                    <ul className="space-y-4 mb-8">
                      {[
                        "Progettiamo architetture pulite, manutenibili e documentate",
                        "Integriamo n8n in ecosistemi software complessi",
                        "Affianchiamo automazione, AI e sviluppo custom in un'unica soluzione coerente"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start text-white"
                        >
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-base md:text-lg text-accent font-semibold">
                        Il risultato è un sistema che riduce il lavoro manuale, migliora l'efficienza operativa e abilita nuove possibilità di crescita, senza sacrificare controllo e affidabilità.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Finale */}
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
                    <span className="block text-primary">Pronto a <span className="text-accent">Automatizzare</span> il Tuo Business?</span>
                  </h2>

                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Contattaci per una demo personalizzata e scopri come i nostri Agenti AI possono trasformare
                    la tua operatività, aumentare l'efficienza e far crescere il fatturato.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                    >
                      Demo Gratuita
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products"
                      className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      Esplora Catalogo
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

export default AIAgents;
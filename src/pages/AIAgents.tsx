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

        {/* Removed duplicate demo video per request: kept only the first VideoShowcase above */}

        {/* Sezione Valore */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">

            <ScrollAnimation animation="fadeIn" className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                <span className="block text-primary">Creare il tuo agente AI</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto">
                Un agente AI è un sistema autonomo di intelligenza artificiale che esegue operazioni automatizzate
                sui sistemi aziendali attraverso algoritmi di machine learning e integrazioni con API esistenti.
              </p>
            </ScrollAnimation>

            <div className="max-w-6xl mx-auto">

              {/* User Interface */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-20"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-cyan-500 mb-1">RESPONSIVE</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">User Interface</h3>
                  </div>
                  <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pl-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-500 transition-colors">UI già pronte</h4>
                    <p className="text-gray-400 text-sm mb-4">Interamente integrabili in strumenti di terze parti come Telegram, Whatsapp e Claude Desktop per una UI plug and play.</p>
                    <div className="flex items-center text-sm text-cyan-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>+40% risparmio denaro</span>
                    </div>
                  </div>

                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-500 transition-colors">Interfacce custom</h4>
                    <p className="text-gray-400 text-sm mb-4">Per chi cerca la massima personalizzazione, sviluppiamo front-end personalizzati perfettamente integrabili e scalbili.</p>
                    <div className="flex items-center text-sm text-cyan-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>100% customizzabili</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Backend Avanzati */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16 md:mb-20"
              >
                <div className="flex items-center mb-8 flex-row-reverse">
                  <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center ml-4">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-emerald-500 mb-1">SCALABILI</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Backend Avanzati</h3>
                  </div>
                  <div className="flex-1 mr-8 h-px bg-gradient-to-l from-white/20 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pr-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-500 transition-colors">Architettura Distribuita</h4>
                    <p className="text-gray-400 text-sm mb-4">Per chi cerca il meglio, progettiamo architetture di ultima generazione, sfruttando MCP e RAG.</p>
                    <div className="flex items-center text-sm text-emerald-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>20-70% risparmio complessità computazionale</span>
                    </div>
                  </div>

                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-500 transition-colors">Sistemi multi agente</h4>
                    <p className="text-gray-400 text-sm mb-4">Creiamo sistemi composti da più agenti specializzati in compiti precisi e che massimizzano il problem solving rispetto alle semplici automazioni.</p>
                    <div className="flex items-center text-sm text-emerald-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>+200% intelligenza adattiva del sitema</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ultra Integrabili */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16 md:mb-20"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mr-4">
                    <BarChart className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-violet-500 mb-1">BACKEND ESISTENTI</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Ultra Integrabili</h3>
                  </div>
                  <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pl-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Integrazioni non invasive</h4>
                    <p className="text-gray-400 text-sm mb-4">I nostri agenti AI si integrano seamlessly nei processi aziendali esistenti, operando silenziosamente nei workflow di backend per ottimizzare operazioni critiche spesso invisibili ma ad alto impatto economico. </p>
                    <div className="flex items-center text-sm text-violet-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>Decisioni data-driven</span>
                    </div>
                  </div>

                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Advanced Reasoning</h4>
                    <p className="text-gray-400 text-sm mb-4">Basati su modelli di ragionamento avanzati che consentono comprensione di cause-effetto nei processi e gestione probabilistica delle decisioni.</p>
                    <div className="flex items-center text-sm text-violet-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>Risparmio 20h/settimana</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Perché siamo noi quello che cerchi?</h2>
                  <p className="text-foreground/70 mb-6">
                    I nostri Agenti AI rappresentano un salto evolutivo significativo per le aziende che voglio migliorare l'automazione aziendale ed affacciarsi al futuro dell'intelligenza artificiale.
                  </p>

                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-white">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <motion.div
                    className="bg-background/60 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="flex items-center font-bold mb-3 text-white">
                      <Brain className="w-6 h-6 text-green-500 mr-2" />
                      Focus su assett digitali AI
                    </h3>
                    <p className="text-foreground/70">
                      Se sei interessato al mondo AI e vuoi essere parte di questa rivoluzione, noi siamo
                      la prima AI agency realmente focalizzata nel argomento.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-background/60 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: '0.1s' }}
                  >
                    <h3 className="flex items-center font-bold mb-3 text-white">
                      <Shield className="w-6 h-6 text-green-500 mr-2" />
                      Sicurezza Enterprise
                    </h3>
                    <p className="text-foreground/70">
                      Creiamo infrastrutture sicure ed utilizziamo strumenti per garantire la sicurezza dello spazio di lavoro. Utilizziamo servizi di VPS con accesso alla gestione dei server tramite chiave SSH.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-background/60 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-green-500/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: '0.2s' }}
                  >
                    <h3 className="flex items-center font-bold mb-3 text-white">
                      <Workflow className="w-6 h-6 text-green-500 mr-2" />
                      Integrazione e Automazione
                    </h3>
                    <p className="text-foreground/70">
                      I nostri agenti AI istantaneamente con CRM, email, calendar, chat e qualsiasi app di terzi accessibile tramite API ben documentata.
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Integrazione Strumenti - SEZIONE OTTIMIZZATA */}
        <section className="py-20 container mx-auto px-4 md:px-6 lg:px-12">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-emerald-500">
                  Ecosistema Connesso
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Integrazione con i Tuoi Strumenti Esistenti
              </h3>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                I nostri agenti non sono isole. Si integrano profondamente nel tuo stack tecnologico esistente,
                potenziando gli strumenti che già usi senza costringerti a cambiarli.
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Tabs */}
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {integrationCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${isActive
                      ? `${category.bg} text-white border-transparent shadow-lg`
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-white' : category.color}`} />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </ScrollAnimation>

          {/* Integrations Grid */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-6xl mx-auto"
              >
                {integrationsData
                  .filter(item => item.category === activeCategory)
                  .map((integration) => {
                    const categoryColor = integrationCategories.find(c => c.id === integration.category)?.color || 'text-blue-500';
                    return (
                      <IntegrationCard
                        key={integration.id}
                        integration={integration}
                        isExpanded={expandedIntegration === integration.id}
                        onToggle={() => toggleIntegration(integration.id)}
                        colorClass={categoryColor}
                      />
                    );
                  })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compatibility Matrix */}
          <div className="mt-24 max-w-5xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Matrice di Compatibilità & Sicurezza</h4>
              <div className="glass rounded-xl overflow-hidden border border-white/10 overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400">
                  <thead className="bg-white/5 text-white uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-4">Funzionalità</th>
                      <th className="px-6 py-4 text-center">Standard API</th>
                      <th className="px-6 py-4 text-center">Custom Webhook</th>
                      <th className="px-6 py-4 text-center">Database Diretto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">Lettura Dati Real-time</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">Scrittura/Modifica Dati</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">Trigger Eventi</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><div className="w-5 h-5 mx-auto text-yellow-500 font-bold">-</div></td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">Sicurezza End-to-End</td>
                      <td className="px-6 py-4 text-center"><Shield className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Shield className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Shield className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <ScrollAnimation animation="fadeIn">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Domande Frequenti sull'Integrazione</h4>
              <AccordionFAQ items={faqs} />
            </ScrollAnimation>
          </div>

          {/* Custom Integration CTA */}
          <div className="mt-20">
            <ScrollAnimation animation="scale">
              <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Non trovi il tuo strumento?
                </h4>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Nessun problema. Il nostro team di ingegneri sviluppa connettori personalizzati per software proprietari,
                  legacy system o strumenti di nicchia. Se ha un'interfaccia digitale, possiamo integrarlo.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10"
                >
                  Richiedi Integrazione Custom
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
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
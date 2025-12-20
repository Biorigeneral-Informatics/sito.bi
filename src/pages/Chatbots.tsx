import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Users, Shield, TrendingUp, Workflow, CheckCircle, ArrowRight,
  BarChart, Check, ChevronRight, Smartphone, Globe, Share2, Zap, Mail
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('chatbots');

const Chatbots = () => {
  const [activeCategory, setActiveCategory] = useState('crm');

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
        colorStart="rgba(6, 182, 212, 0.3)"
        colorEnd="rgba(8, 145, 178, 0.3)"
      />
      <ScrollGradient
        colorStart="rgba(34, 197, 94, 0.25)"
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
                <span className="text-cyan-500">
                  Intelligenza Artificiale Conversazionale
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                <span className="block text-primary font-semibold">Chatbot AI sviluppati</span>
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
                    da specialisti
                  </motion.span>
                </motion.span>
              </h1>

              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                Creiamo assitenti virtuali intelligenti con stack di sviluppo moderni e integrati, garantendo sicurezza e affidabilità.
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

        {/* Dove sono Integrabili */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-6">
                  <span className="text-cyan-500">Integrazione Multicanale</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight text-white">
                  Dove sono <span className="text-accent">Integrabili</span> i Chatbot
                </h2>

                <p className="text-base md:text-lg text-secondary leading-relaxed mb-12">
                  I nostri chatbot AI si adattano perfettamente a qualsiasi canale di comunicazione, raggiungendo i tuoi clienti dove si trovano già.
                </p>

                <ScrollAnimation animation="fadeIn" delay={0.1}>
                  <div className="space-y-4 max-w-2xl mx-auto">
                    {[
                      {
                        title: "App di Messaggistica",
                        description: "WhatsApp Business, Telegram, Messenger e altri servizi di messaggistica istantanea.",
                        icon: MessageSquare
                      },
                      {
                        title: "Siti Web",
                        description: "Widget di live chat conversazionale direttamente sul tuo sito web per supporto immediato.",
                        icon: Globe
                      },
                      {
                        title: "Social Media",
                        description: "Instagram, Facebook, LinkedIn e altri social - gestione automatizzata dei messaggi privati.",
                        icon: Share2
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start text-left"
                        >
                          <div className="flex-shrink-0 mr-4 mt-1">
                            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-cyan-500/20 border border-cyan-500/50">
                              <IconComponent className="h-5 w-5 text-cyan-400" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Framework e Tecnologie */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-6">
                  <span className="text-cyan-500">Stack Tecnologico</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight text-white">
                  Framework e Tecnologie che <span className="text-accent">Utilizziamo</span>
                </h2>

                <p className="text-base md:text-lg text-secondary leading-relaxed">
                  Selezioniamo le migliori tecnologie per garantire chatbot scalabili, affidabili e sempre aggiornati.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: "Botpress",
                    description: "Piattaforma completa per la gestione e il deployment di chatbot conversazionali. Offre un'interfaccia intuitiva per design di flussi complessi con AI integrata e analytics avanzati.",
                    features: ["Visual Builder", "NLU avanzato", "Analytics in tempo reale", "A/B Testing", "Multi-langue support"]
                  },
                  {
                    title: "n8n",
                    description: "Motore di automazione open-source che orchestra l'integrazione tra chatbot e sistemi aziendali. Connette il tuo chatbot a database, CRM, API e servizi cloud senza limiti.",
                    features: ["1000+ integrazioni", "Self-hosted o cloud", "No lock-in", "Workflow visuale", "Error handling avanzato"]
                  },
                  {
                    title: "Node.js",
                    description: "Runtime JavaScript per costruire backend custom ad alta performance. Perfetto per logica conversazionale complessa, gestione in tempo reale e scalabilità massima.",
                    features: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Real-time processing", "Microservices ready"]
                  }
                ].map((framework, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 mb-6">
                      <Zap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{framework.description}</p>
                    <div className="space-y-2">
                      {framework.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Chatbot Conversazionale Intelligente */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="fadeIn">
              <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-6">
                  <span className="text-cyan-500">Soluzione Intelligente</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight text-white">
                  Chatbot Conversazionali <span className="text-accent">sempre connessi al tuo business</span>
                </h2>

                <p className="text-base md:text-lg text-secondary leading-relaxed mb-8">
                  I nostri chatbot non sono semplici risponditori automatici. Sono agenti conversazionali intelligenti che comprendono il cliente, imparano dalle interazioni e si integrano perfettamente con i tuoi sistemi aziendali per risultati misurabili.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      title: "Comprensione Naturale",
                      description: "Interpretano il linguaggio naturale e l'intenzione reale dell'utente, non solo keyword."
                    },
                    {
                      title: "Integrazione Seamless",
                      description: "Connessi ai tuoi CRM, database e API per fornire risposte sempre aggiornate e accurate."
                    },
                    {
                      title: "Escalation Intelligente",
                      description: "Trasferiscono agli agenti umani quando necessario, con pieno contesto della conversazione."
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
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
                    <span className="block text-primary">Pronto a Iniziare?</span>
                  </h2>

                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-10">
                    Richiedi una demo personalizzata o un MVP per scoprire come i nostri Chatbot AI possono trasformare il tuo customer engagement e generare risultati concreti.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 border border-cyan-400/50"
                  >
                    <span>Richiedi Demo o MVP</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </>
  );
};

export default Chatbots;

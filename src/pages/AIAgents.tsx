import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Workflow, Zap, Bot, Layers, ArrowRight, RefreshCw, ArrowUpRight, Play, Shield, Database, Check, MessageSquare, Award, TrendingUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AIAgents = () => {
  // Lista di applicazioni e benefici
  const applications = [
    {
      title: "Automazione Customer Service",
      icon: <MessageSquare className="w-10 h-10 text-cyan-400" />,
      benefits: [
        "Risposte immediate 24/7 alle richieste clienti",
        "Riduzione fino al 45% dei ticket di supporto",
        "Gestione automatica delle domande frequenti",
        "Escalation intelligente ai team umani quando necessario"
      ]
    },
    {
      title: "Lead Generation e Qualificazione",
      icon: <TrendingUp className="w-10 h-10 text-violet-400" />,
      benefits: [
        "Identificazione automatica dei lead più promettenti",
        "Qualificazione attraverso conversazioni intelligenti",
        "Aggiornamento automatico del CRM",
        "Follow-up programmati senza intervento umano"
      ]
    },
    {
      title: "Automazione Processi Interni",
      icon: <Workflow className="w-10 h-10 text-emerald-400" />,
      benefits: [
        "Gestione automatica di approvazioni e documenti",
        "Creazione e distribuzione di report periodici",
        "Monitoraggio KPI e alert automatici",
        "Coordinamento tra diversi dipartimenti"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Gradients */}
      <ScrollGradient 
        colorStart="rgba(56, 189, 248, 0.25)" 
        colorEnd="rgba(139, 92, 246, 0.3)"    
        intensity={1.5} 
      />
      <ScrollGradient 
        colorStart="rgba(16, 185, 129, 0.2)" 
        colorEnd="rgba(192, 132, 252, 0.25)" 
        reverse={true} 
        className="opacity-80" 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              AI Automation • Business Efficiency • 24/7 Operations
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">AI Agents</span>
            <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent inline-block">
              L'intelligenza artificiale che agisce per te
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Sistemi autonomi e intelligenti che lavorano silenziosamente per ottimizzare 
            i tuoi processi aziendali, 24 ore su 24, 7 giorni su 7.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-primary-foreground rounded-lg hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-violet-500/20"
            >
              Scopri le Soluzioni <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            

          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div variants={fadeInUp} transition={{ delay: 0.3 }} className="p-6 glass rounded-xl border border-cyan-500/20">
              <p className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent mb-2">85%</p>
              <p className="text-foreground/70">Riduzione dei compiti ripetitivi</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ delay: 0.4 }} className="p-6 glass rounded-xl border border-violet-500/20">
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent mb-2">24/7</p>
              <p className="text-foreground/70">Operatività continua</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ delay: 0.5 }} className="p-6 glass rounded-xl border border-emerald-500/20">
              <p className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent mb-2">+140%</p>
              <p className="text-foreground/70">ROI medio nel primo anno</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What are AI Agents section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimation animation="slideLeft" delay={0.2}>
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-500/20 filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-violet-500/20 filter blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Cosa sono gli Agenti AI?</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Gli Agenti AI sono sistemi di intelligenza artificiale avanzati progettati per operare 
                  autonomamente nell'ambiente digitale, composti da tre elementi fondamentali:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Brain className="w-6 h-6 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Modello LLM</h3>
                      <p className="text-foreground/70">Il nucleo cognitivo dell'agente, basato su modelli di linguaggio avanzati.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Layers className="w-6 h-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Memoria</h3>
                      <p className="text-foreground/70">Permette all'agente di conservare informazioni e contesto tra le interazioni.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Workflow className="w-6 h-6 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Tools</h3>
                      <p className="text-foreground/70">Estendono le capacità dell'agente per interagire con sistemi esterni.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideRight" delay={0.4}>
            <div className="relative">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-500/20 filter blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-2xl hover:shadow-lg transition-all border border-transparent">
                    <Bot className="w-12 h-12 mb-4 text-cyan-400" />
                    <h3 className="text-xl font-bold mb-2">Autonomi</h3>
                    <p className="text-foreground/70">Operano indipendentemente, prendendo decisioni in base a obiettivi predefiniti</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl hover:shadow-lg transition-all border border-transparent">
                    <Workflow className="w-12 h-12 mb-4 text-violet-400" />
                    <h3 className="text-xl font-bold mb-2">Adattivi</h3>
                    <p className="text-foreground/70">Imparano e migliorano nel tempo in base ai risultati</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl hover:shadow-lg transition-all border border-transparent">
                    <Zap className="w-12 h-12 mb-4 text-emerald-400" />
                    <h3 className="text-xl font-bold mb-2">Efficienti</h3>
                    <p className="text-foreground/70">Operano 24/7 senza interruzioni</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl hover:shadow-lg transition-all border border-transparent">
                    <RefreshCw className="w-12 h-12 mb-4 text-amber-400" />
                    <h3 className="text-xl font-bold mb-2">Integrabili</h3>
                    <p className="text-foreground/70">Si connettono con i tuoi sistemi esistenti</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Why AI Agents are revolutionary */}
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="glass p-8 md:p-12 rounded-2xl mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-violet-500/20 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Perché sono una Rivoluzione</h2>
              <p className="text-foreground/80 mb-8 max-w-3xl mx-auto text-center">
                Gli Agenti AI rappresentano un salto evolutivo nell'automazione aziendale, andando oltre i tradizionali strumenti.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <h3 className="text-xl font-bold mb-3">Automazione del Ragionamento</h3>
                  <p className="text-foreground/70">Prendono decisioni in base al contesto e ai dati, simulando il ragionamento umano.</p>
                </div>
                
                <div className="p-6 bg-violet-500/10 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all">
                  <h3 className="text-xl font-bold mb-3">Operano in Autonomia</h3>
                  <p className="text-foreground/70">Lavorano 24/7 senza supervisione, gestendo flussi di lavoro completi autonomamente.</p>
                </div>
                
                <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <h3 className="text-xl font-bold mb-3">Apprendimento Continuo</h3>
                  <p className="text-foreground/70">Migliorano costantemente, imparando dalle interazioni passate.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Applications Section - NEW */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Applicazioni Pratiche</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Gli Agenti AI trasformano radicalmente diversi settori aziendali
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {applications.map((app, index) => (
              <ScrollAnimation key={index} animation="fadeIn" delay={0.2 + index * 0.1}>
                <div className="glass p-6 rounded-xl h-full flex flex-col border border-foreground/5 hover:border-cyan-500/20 transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-foreground/5">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4">{app.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 mt-2 flex-grow">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-foreground/10">
                    <Link
                      to={`/solutions/${app.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm text-cyan-500 hover:text-cyan-600 transition-colors"
                    >
                      Scopri di più <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
        
        {/* Testimonial */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="glass p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-violet-500/20 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold">
                    TC
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="mb-4">
                    <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[...Array(5)].map((_, i) => (
                        <path key={i} d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="#eab308" transform={`translate(${i * 24}, 0)`} />
                      ))}
                    </svg>
                  </div>
                  
                  <blockquote className="text-lg text-foreground/80 italic mb-4">
                    "Gli Agenti AI hanno trasformato il nostro business, automatizzando processi che richiedevano ore di lavoro manuale. 
                    La qualifica dei lead è migliorata del 70% e il team commerciale può ora concentrarsi sulla chiusura delle trattative."
                  </blockquote>
                  
                  <div>
                    <p className="font-bold">Marco Bianchi</p>
                    <p className="text-foreground/60 text-sm">CEO, TechCorp Italia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* How we create AI Agents */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Come Creiamo i tuoi Agenti AI</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Utilizziamo piattaforme all'avanguardia per sviluppare agenti AI personalizzati
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { name: 'LLM Models', icon: <Brain className="w-8 h-8 text-cyan-400" />, description: "GPT-4, Claude, Llama-3" },
              { name: 'Automation', icon: <Workflow className="w-8 h-8 text-violet-400" />, description: "Make.com, n8n, Zapier" },
              { name: 'Database', icon: <Database className="w-8 h-8 text-emerald-400" />, description: "Vector DB, SQL, NoSQL" },
              { name: 'Security', icon: <Shield className="w-8 h-8 text-amber-400" />, description: "End-to-end encryption" }
            ].map((tech, index) => (
              <ScrollAnimation key={index} animation={index % 2 === 0 ? "slideLeft" : "slideRight"} delay={0.2 + index * 0.1}>
                <div className="glass p-5 rounded-xl text-center hover:shadow-lg transition-all hover:border border-foreground/10">
                  <div className="flex justify-center mb-3">{tech.icon}</div>
                  <h3 className="font-bold mb-1">{tech.name}</h3>
                  <p className="text-foreground/70 text-sm">{tech.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Integrazione con i tuoi strumenti</h3>
              <p className="text-foreground/80 mb-4">I nostri agenti AI si integrano con gli strumenti che già utilizzi:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['HubSpot 🔴', 'Trello 🔵', 'Slack 🟣', 'Discord 🟣', 'Telegram 🔵', 'WhatsApp 🟢', 'Gmail 🔴', 'Google Drive 🟡'].map((tool, index) => (
                  <div key={index} className="bg-background/30 p-3 rounded-lg hover:bg-background/50 transition-colors">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section - NEW */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Funzionalità Principali</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Le caratteristiche che rendono gli Agenti AI una soluzione unica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Apprendimento Contestuale",
                description: "L'agente sviluppa una comprensione profonda del tuo business, adattandosi al tuo specifico contesto operativo.",
                icon: <Brain className="w-6 h-6 text-cyan-400" />
              },
              {
                title: "Multi-piattaforma",
                description: "Opera su diverse piattaforme e canali simultaneamente, garantendo un'esperienza coerente ovunque.",
                icon: <Layers className="w-6 h-6 text-violet-400" />
              },
              {
                title: "Monitoraggio Continuo",
                description: "Dashboard avanzate per monitorare le performance e ottimizzare il funzionamento dell'agente nel tempo.",
                icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
              },
              {
                title: "Scalabilità Illimitata",
                description: "Gestisce volumi crescenti di interazioni senza degradare le performance o richiedere risorse aggiuntive.",
                icon: <Award className="w-6 h-6 text-amber-400" />
              }
            ].map((feature, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:shadow-lg transition-all border border-foreground/5 hover:border-cyan-500/20">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-foreground/5 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Demo section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="glass p-6 rounded-2xl mb-16 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cyan-500/20 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-center">Un Esempio Reale</h2>
              <p className="text-foreground/80 mb-6 max-w-3xl mx-auto text-center">
                Guarda come un agente AI può automatizzare la gestione dei lead, rispondere alle domande e qualificare i clienti.
              </p>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-black/30 mb-6 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <a href="#" className="flex flex-col items-center text-foreground/90 group-hover:text-foreground transition-colors z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-medium">Guarda la demo</span>
                </a>
              </div>
              
              <div className="mt-6 text-center">
                <Link
                  to="/demo-request"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-primary-foreground rounded-lg hover:translate-y-[-2px] transition-all shadow-lg"
                >
                  Richiedi una Demo Personalizzata <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-violet-500/20 filter blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/20 filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Pronto a Trasformare il Tuo Business con l'AI?</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Contattaci oggi per una consulenza gratuita e scopri come gli Agenti AI possono 
              automatizzare i processi del tuo business, risparmiando tempo e risorse.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-primary-foreground rounded-lg hover:translate-y-[-2px] transition-all shadow-lg"
              >
                Inizia Ora <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-3 bg-background border border-cyan-500/30 rounded-lg hover:bg-cyan-500/5 transition-all"
              >
                Esplora le Soluzioni <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;
// src/pages/AIAgents.tsx - Design completamente ridisegnato usando mix degli stili migliori
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain,  Users, Shield, TrendingUp, 
   Workflow, 
   CheckCircle, ArrowRight,
  BarChart, 
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const AIAgents = () => {


  const benefits = [
    "Operatività 24/7 senza interruzioni o pause",
    "Riduzione 85% errori umani e inconsistenze",
    "Integrazione nativa con tutti i sistemi esistenti",
    "Apprendimento continuo e ottimizzazione automatica",
    "ROI positivo entro 3 mesi dall'implementazione",
    "Scalabilità illimitata senza costi aggiuntivi"
  ];

  const integrationTools = [
    { name: 'HubSpot', category: 'CRM', color: 'bg-red-500' },
    { name: 'Salesforce', category: 'CRM', color: 'bg-blue-500' },
    { name: 'Slack', category: 'Communication', color: 'bg-purple-500' },
    { name: 'Telegram', category: 'Messaging', color: 'bg-blue-400' },
    { name: 'WhatsApp', category: 'Messaging', color: 'bg-green-500' },
    { name: 'Gmail', category: 'Email', color: 'bg-red-600' },
    { name: 'Trello', category: 'Project Mgmt', color: 'bg-blue-600' },
    { name: 'Monday.com', category: 'Project Mgmt', color: 'bg-purple-600' },
    { name: 'Zapier', category: 'Automation', color: 'bg-orange-500' },
    { name: 'Make.com', category: 'Automation', color: 'bg-blue-500' },
    { name: 'Google Drive', category: 'Storage', color: 'bg-yellow-500' },
    { name: 'Notion', category: 'Productivity', color: 'bg-gray-800' }
  ];

  return (
    <>
      {/* Background gradients - Mix Home + Products */}
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

      <div className="min-h-screen pt-28 pb-16">
        
        {/* Hero Section - Stile Home con effetto typing */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-1 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge sopra il titolo - Stile Products */}
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
                  {/* Effetto typing - Stile Home */}
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
                Sistemi di intelligenza artificiale autonomi che operano 24/7, gestiscono clienti in modo intelligente 
                e si integrano perfettamente con tutti i tuoi strumenti esistenti.
              </p>
              
              {/* Bottoni - Stile Home */}
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

        {/* Sezione Valore - Layout Home con puntini animati */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            
            {/* Titolo principale - Stile Home */}
            <ScrollAnimation animation="fadeIn" className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                <span className="block text-primary">Tipologie di Agenti AI</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto">
                Ogni agente è specializzato per specifiche funzioni aziendali, combinando intelligenza artificiale 
                avanzata con integrazione nativa nei tuoi processi esistenti.
              </p>
            </ScrollAnimation>

            {/* Layout innovativo con linee di connessione - Stile Home */}
            <div className="max-w-6xl mx-auto">
              
              {/* Categoria: Agenti Commerciali */}
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
                    <div className="text-sm font-medium text-cyan-500 mb-1">VENDITE</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Agenti Commerciali</h3>
                  </div>
                  <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 pl-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-500 transition-colors">Lead Qualification</h4>
                    <p className="text-gray-400 text-sm mb-4">Qualifica automaticamente i lead attraverso conversazioni intelligenti e scoring predittivo</p>
                    <div className="flex items-center text-sm text-cyan-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>+75% qualità lead</span>
                    </div>
                  </div>
                  
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-500 transition-colors">Pipeline Management</h4>
                    <p className="text-gray-400 text-sm mb-4">Gestisce automaticamente la pipeline di vendita con follow-up intelligenti e tempistiche ottimali</p>
                    <div className="flex items-center text-sm text-cyan-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>+40% conversioni</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Categoria: Agenti Supporto */}
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
                    <div className="text-sm font-medium text-emerald-500 mb-1">SUPPORTO</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Agenti Customer Care</h3>
                  </div>
                  <div className="flex-1 mr-8 h-px bg-gradient-to-l from-white/20 to-transparent"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 pr-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-500 transition-colors">Assistenza 24/7</h4>
                    <p className="text-gray-400 text-sm mb-4">Supporto clienti continuo con comprensione del contesto e risoluzione autonoma dei problemi</p>
                    <div className="flex items-center text-sm text-emerald-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>-60% ticket supporto</span>
                    </div>
                  </div>
                  
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-500 transition-colors">Escalation Intelligente</h4>
                    <p className="text-gray-400 text-sm mb-4">Identifica automaticamente quando coinvolgere un operatore umano per casi complessi</p>
                    <div className="flex items-center text-sm text-emerald-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>+85% soddisfazione</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Categoria: Agenti Analisi */}
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
                    <div className="text-sm font-medium text-violet-500 mb-1">ANALISI</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Agenti Business Intelligence</h3>
                  </div>
                  <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 pl-16">
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Analisi Predittiva</h4>
                    <p className="text-gray-400 text-sm mb-4">Genera insights e previsioni basate su pattern nei dati aziendali storici e in tempo reale</p>
                    <div className="flex items-center text-sm text-violet-500">
                      <CheckCircle className="mr-2 w-4 h-4" />
                      <span>Decisioni data-driven</span>
                    </div>
                  </div>
                  
                  <div className="group glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Report Automatici</h4>
                    <p className="text-gray-400 text-sm mb-4">Creazione automatica di report personalizzati con insights e raccomandazioni strategiche</p>
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

        {/* Benefits Section - Stile SoftwarePMI */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Perché gli Agenti AI sono Rivoluzionari</h2>
                  <p className="text-foreground/70 mb-6">
                    I nostri Agenti AI rappresentano un salto evolutivo nell'automazione aziendale. Non sono semplici chatbot, 
                    ma sistemi intelligenti che comprendono il contesto, prendono decisioni e agiscono autonomamente.
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
                      Intelligenza Artificiale Avanzata
                    </h3>
                    <p className="text-foreground/70">
                      Basati su GPT-4o, Claude AI e modelli proprietari addestrati sui tuoi dati specifici. 
                      Comprendono contesto, intent e sfumature delle conversazioni umane.
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
                      Protocolli di sicurezza bancari, crittografia end-to-end e conformità GDPR. 
                      I tuoi dati rimangono sempre protetti e sotto il tuo controllo.
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
                      Integrazione Nativa
                    </h3>
                    <p className="text-foreground/70">
                      Si collegano istantaneamente con CRM, email, calendar, chat e qualsiasi sistema aziendale. 
                      Setup rapido senza interruzioni operative.
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Integrazione Strumenti - Sezione evidenziata stile Products */}
        <section className="py-20 container mx-auto px-4 md:px-6 lg:px-12">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-12">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-emerald-500">
                  Connessione Universale
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Integrazione con i Tuoi Strumenti Esistenti
                <span className="block text-gray-400 text-lg">Nessuna interruzione, massima compatibilità</span>
              </h3>
            </div>
          </ScrollAnimation>

          {/* Grid di integrazioni con categorizzazione */}
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className="max-w-4xl mx-auto">
              {/* CRM */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                  CRM & Sales
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-red-500/20 text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Salesforce</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-red-500/20 text-center">
                    <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" alt="HubSpot" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">HubSpot</div>
                  </div>
                </div>
              </div>

              {/* Communication */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                  Comunicazione
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-blue-500/20 text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Slack</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-blue-500/20 text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Telegram</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-blue-500/20 text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">WhatsApp</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-blue-500/20 text-center">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Gmail</div>
                  </div>
                </div>
              </div>

              {/* Automation & Productivity */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                  Automazione & Produttività
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Trello</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://cdn.worldvectorlogo.com/logos/monday-com.svg" alt="Monday.com" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Monday.com</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://cdn.worldvectorlogo.com/logos/zapier.svg" alt="Zapier" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Zapier</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://images.ctfassets.net/spoqsaf9291f/5lRS4JEkZa5ParRHb2dXDL/2ab00ebd9eb8c8624b0ceab30a3e8a6d/make-com-logo.svg" alt="Make.com" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Make.com</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" alt="Google Drive" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Google Drive</div>
                  </div>
                  <div className="glass p-4 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-purple-500/20 text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="w-8 h-8 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="text-sm font-semibold">Notion</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 p-4 glass rounded-lg border border-white/10">
                <p className="text-foreground/70 text-sm">
                  + Integrazione personalizzata con qualsiasi API, database o sistema aziendale esistente
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* CTA Finale - Stile SoftwarePMI */}
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
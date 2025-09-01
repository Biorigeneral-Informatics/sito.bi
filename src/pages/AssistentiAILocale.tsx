import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  VideoIcon,
  Mail,
  TrendingUp,
  Building,
  User,
  Crown,
  Zap,
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('assistentiAILocale');

const AssistentiAILocale = () => {
  const motivazioni = [
    {
      icon: Shield,
      title: "100% Privacy e Controllo",
      description: "I tuoi dati rimangono esclusivamente sul tuo dispositivo. Zero trasmissioni a ChatGPT, OpenAI o qualsiasi provider esterno."
    },
    {
      icon: Crown,
      title: "Ottieni la tua AI personale sul pc", 
      description: "Accesso illimitato a oltre 50 modelli AI avanzati: Llama, Mistral, Qwen e molti altri, completamente gratuiti dopo l'acquisto."
    },
    {
      icon: Zap,
      title: "Performance superiori in locale",
      description: "Elaborazione istantanea senza latenze di rete. Nessuna coda, nessun limite di utilizzo, massima velocità sui tuoi dati."
    }
  ];

  const motivazioniDettagliate = [
    {
      icon: Shield,
      title: "Privacy Assoluta",
      subtitle: "Zero Trasmissioni Esterne",
      description: "I tuoi documenti, dati personali, strategie aziendali e informazioni sensibili non lasciano mai il tuo dispositivo. Nessun rischio di data breach o utilizzo improprio da parte di terzi.",
      
    },
    {
      icon: Crown,
      title: "Scegli il tuo modello perfetto",
      subtitle: "50+ Modelli AI Avanzati",
      description: "Con la nostra consulenza avrai accesso gratuito a modelli incredibilmente avanzati: Llama 3.1, Mistral Large, Qwen2.5, CodeLlama e decine di altri senza limiti di utilizzo.",
    },
    {
      icon: Zap,
      title: "Addio alla lentezza del cloud",
      subtitle: "Velocità Senza Compromessi",
      description: "Nessuna coda, nessuna latenza di rete, nessun rallentamento e sai perché? Hai un tuo modello installato direttamente nel pc. La massima velocità per i tuoi progetti più importanti.",
    }
  ];

  const benefits = [
    "Zero dati trasmessi a provider esterni",
    "50 + modelli AI avanzati gratuiti",
    "Funzionamento offline completo",
    "Consulenza professionale di 2 settimane inclusa + guida pdf ad Ollama",
    "Ottimo per utilizzi quotidiani",
  ];

    const benefitsadvanced = [
    "Software personalizzato con eseguibile",
    "Zero dati trasmessi a provider esterni",
    "Scegli tu il tuo modello open source preferito (Gemma, GPT, Mistral, Llama 3.1, Qwen2.5, CodeLlama e molti altri)",
    "Funzionamento offline completo",
    "Interfaccia Utente personalizzata in base alle tue esigenze",
    "Perfettamente scalabile ed integrabile con Windows e Mac",
    "Perfetto per utilizzi aziendali",
    "Piani di manutenzione con diversi livelli di supporto (pagamento a parte)"
  ];

  return (
    <>
      <SEO 
        title={seoData?.title || "Assistenti AI in Locale"}
        description={seoData?.description || "Soluzioni AI locali sicure per aziende e professionisti"}
        keywords={seoData?.keywords || "AI locale, assistenti AI, privacy, sicurezza"}
        canonicalUrl={seoData?.canonicalUrl || "/assistenti-ai-locale"}
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
        
        {/* SEZIONE 1 - Hero Section con Gradient - MIGLIORATA PER MOBILE */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-40 pb-16">
          {/* Gradient circolare verde centrato per la hero section */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-[800px] h-[800px] rounded-full opacity-60"
              style={{
                background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)',
                filter: 'blur(40px)'
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Badge */}
              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-violet-500">
                  Privacy Assoluta • Controllo Totale
                </span>
              </div>
              
              {/* Titolo principale - ADATTATO PER MOBILE */}
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                {/* Versione Mobile */}
                <span className="block sm:hidden">
                  <span className="block text-primary">Smetti di regalare</span>
                  <span className="block text-primary">i tuoi dati sensibili</span>
                  <motion.span 
                    className="block font-semibold text-accent mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    a ChatGPT
                  </motion.span>
                </span>
                
                {/* Versione Desktop (originale) */}
                <span className="hidden sm:block">
                  <span className="block text-primary">Smetti di regalare i tuoi dati</span>
                  <motion.span 
                    className="block font-semibold text-accent mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    sensibili a ChatGPT
                  </motion.span>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-secondary mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto font-normal px-2 sm:px-0">
                <strong>Distinguiti dalla massa</strong> con una soluzione AI completamente privata. Accesso gratuito a oltre 50 modelli premium, pagamento unico e controllo totale sui tuoi dati riservati.
              </p>

               {/* Tre elementi motivazionali - BORDI MIGLIORATI */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto px-2 sm:px-0">
                {motivazioni.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={`glass p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                      index === 0 ? 'border-violet-400/60 hover:border-violet-400/80 hover:shadow-violet-400/20' :
                      index === 1 ? 'border-yellow-400/60 hover:border-yellow-400/80 hover:shadow-yellow-400/20' :
                      'border-cyan-400/60 hover:border-cyan-400/80 hover:shadow-cyan-400/20'
                    } hover:shadow-lg`}
                  >
                    <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 mx-auto mb-2 ${
                      index === 0 ? 'text-violet-400' :
                      index === 1 ? 'text-yellow-400' :
                      'text-cyan-400'
                    }`} />
                    <h3 className="text-xs sm:text-sm font-semibold text-white text-center leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>

              {/* Video esempio spostato più su */}
              <div className="mb-6 sm:mb-8 px-2 sm:px-0">
                <div className="glass p-4 sm:p-6 rounded-xl border border-white/10 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <VideoIcon className="w-6 sm:w-8 h-6 sm:h-8 text-accent mr-2 sm:mr-3" />
                    <h3 className="text-base sm:text-lg font-semibold text-white text-center">Scopri di più sugli assistenti AI in Locale</h3>
                  </div>

                  <div className="relative rounded-lg overflow-hidden aspect-video border border-white/10">
                    <iframe
                      src="https://player.vimeo.com/video/1114948453"
                      title="Configurazione completa di Ollama"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p className="text-xs text-secondary mt-2 sm:mt-3 text-center px-2">
                    Installazione guidata di Ollama: da zero alla tua AI privata con 50+ modelli in 10 minuti
                  </p>
                </div>
              </div>
              
              
              {/* BOTTONE CTA PRINCIPALE - HERO SECTION */}
              <div className="flex justify-center max-w-md mx-auto px-2 sm:px-0">
                <Link 
                  to="/contact" 
                  className="group relative w-full"
                >
                  {/* Effetto glow di sfondo ridotto */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-45 transition-all duration-500"></div>
                  
                  {/* Bottone principale */}
                  <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-yellow-400/25 transition-all duration-500 hover:-translate-y-2 hover:scale-105 backdrop-blur-sm border border-yellow-300/40">
                    <div className="flex items-center justify-center">
                      <span className="text-center">Richiedi consulto GRATUITO</span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SEZIONE 2 - Perché scegliere una soluzione in locale - MIGLIORATA */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            
            <ScrollAnimation animation="fadeIn" className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                <span className="block text-primary">Perché migliaia di professionisti</span>
                <span className="block text-accent">stanno abbandonando ChatGPT?</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-secondary max-w-4xl mx-auto">
                Tre vantaggi decisivi che stanno convincendo aziende e professionisti a proteggere definitivamente i propri dati sensibili.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {motivazioniDettagliate.map((motivazione, index) => (
                <ScrollAnimation key={index} animation="slideUp" delay={index * 0.2}>
                  <div className="glass p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/5 transition-all duration-500 h-full relative overflow-hidden group">
                    
                    {/* Decorazione di sfondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <motivazione.icon className="w-full h-full text-accent" />
                    </div>

                    {/* Icona principale */}
                    <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl mb-6 mx-auto group-hover:bg-accent/30 transition-all duration-500 relative z-10">
                      <motivazione.icon className="w-10 h-10 text-accent" />
                    </div>
                    
                    {/* Titolo e sottotitolo */}
                    <div className="text-center mb-6 relative z-10">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">{motivazione.title}</h3>
                      <p className="text-accent font-semibold text-sm lg:text-base">{motivazione.subtitle}</p>
                    </div>
                    
                    {/* Descrizione */}
                    <p className="text-secondary leading-relaxed text-center mb-6 relative z-10 text-sm lg:text-base">
                      {motivazione.description}
                    </p>
                    
                    
                  </div>
                </ScrollAnimation>
              ))}
            </div>

          </div>
        </section>

        {/* SEZIONE 4 - Prezzi e Target - BOTTONI MIGLIORATI */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
                  Paga Una Volta, <span className="text-accent">Usalo Per Sempre</span>
                </h2>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  Nessun abbonamento mensile. Grazie alla nostra consulenza investi una volta e ottieni tutte le nostre competenze riguardo Ollama, oppure sviluppa la tua AI personalizzata.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                
                {/* PROFESSIONISTI - Design Migliorato */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative glass p-8 rounded-2xl border-2 border-blue-500/40 hover:border-blue-400/60 transition-all duration-500 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-xl">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mr-4">
                        <User className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Everyday</h3>
                        <p className="text-blue-400 font-semibold">€110 • Pagamento Unico</p>
                      </div>
                    </div>
                    
                    <p className="text-secondary mb-6 leading-relaxed">
                      Perfetto per l'uso quotidiano di coloro che vogliono spendere poco, mantenere private le proprie informazioni e avere il consulto di professionisti. 
                      <strong> Smetti di alimentare i database di OpenAI</strong> con i tuoi dati sensibili.
                    </p>

                    <div className="space-y-3 mb-8">
                      {benefits.slice(0, 10).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          <span className="text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* BOTTONE MIGLIORATO - Everyday */}
                    <Link
                      to="/contact"
                      className="group relative w-full block"
                    >
                      {/* Effetto glow ridotto */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-45 transition-all duration-500"></div>
                      
                      {/* Bottone principale */}
                      <div className="relative w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex items-center justify-center gap-2">
                          <span>🔒 Richiedi ora la tua consulenza</span>
                        </div>
                        
                      </div>
                    </Link>
                  </div>
                </motion.div>

                {/* AZIENDE - Design Premium Migliorato */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Badge "Più Richiesto" MIGLIORATO */}
                  <div className="absolute -top-4 left-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-pulse">
                      ⭐ PIÙ RICHIESTO
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative glass p-8 rounded-2xl border-2 border-yellow-500/50 hover:border-yellow-400/70 transition-all duration-500 bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-xl">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mr-4">
                        <Building className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Advanced</h3>
                        <p className="text-yellow-500 font-semibold">Preventivo Personalizzato</p>
                      </div>
                    </div>
                    
                    <p className="text-secondary mb-6 leading-relaxed">
                      Soluzioni AI enterprise completamente private con interfacce personalizzate e integrazione nei sistemi aziendali esistenti. 
                      <strong> Massima riservatezza garantita.</strong>
                    </p>

                    <div className="space-y-3 mb-8">
                      {benefitsadvanced.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* BOTTONE MIGLIORATO - Advanced */}
                    <Link
                      to="/contact"
                      className="group relative w-full block"
                    >
                      {/* Effetto glow premium ridotto */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                      
                      {/* Bottone premium */}
                      <div className="relative w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-yellow-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105">
                        <div className="flex items-center justify-center gap-2">
                          <span>👑 Richiedi Piano Personalizzato</span>
                        </div>
                        
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Supporto Post Installazione - Redesign Completo */}
              <div className="mt-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                    Come funziona il supporto post servizio?
                  </h3>
                  <p className="text-lg text-secondary max-w-2xl mx-auto">
                    Offriamo assitenza e supporto totale durante tutto il periodo di configurazione e sviluppo.
                  </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
                  
                  {/* Email Support */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <Mail className="w-10 h-10 text-violet-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-violet-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                          GRATIS
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        Supporto Mail
                      </h4>
                      <p className="text-secondary text-sm max-w-48 leading-relaxed group-hover:text-white/80 transition-colors">
                        2 settimane di assistenza mail completa inclusa nel piano Everyday. Configurazione e ottimizzazione della tua AI locale senza costi aggiuntivi.
                      </p>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  {/* Video Consultation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <VideoIcon className="w-10 h-10 text-accent" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-accent text-black text-xs font-semibold px-2 py-1 rounded-full">
                          VARIABILE
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        Supporto Ticket
                      </h4>
                      <p className="text-secondary text-sm max-w-48 leading-relaxed group-hover:text-white/80 transition-colors">
                        Ticket singoli per assistenza specializzata oltre il periodo incluso. Risoluzione rapida di problemi specifici con sessioni video personalizzate.
                      </p>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  {/* Upgrades */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <TrendingUp className="w-10 h-10 text-yellow-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                          OPZIONALE
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        Piano Manutenzione
                      </h4>
                      <p className="text-secondary text-sm max-w-48 leading-relaxed group-hover:text-white/80 transition-colors">
                        Per installazioni Advanced: aggiornamenti continui, backup automatici e supporto prioritario. Mantieni la tua AI sempre all'avanguardia.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12 text-center"
                >
                  <p className="text-white/60 text-sm max-w-2xl mx-auto">
                    Il nostro obiettivo è il tuo successo a lungo termine. Non siamo qui per venderti, ma per supportarti nel raggiungimento della massima indipendenza tecnologica.
                  </p>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA FINALE - BOTTONE MIGLIORATO (Rimosso effetto scale) */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Gradient circolare verde centrato per la sezione finale */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-[500px] h-[500px] rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.5) 0%, rgba(34, 197, 94, 0.3) 25%, rgba(16, 185, 129, 0.15) 45%, transparent 65%)',
                filter: 'blur(30px)'
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <ScrollAnimation animation="slideUp">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
                  <span className="block text-primary">Riprendi il controllo</span>
                  <span className="block text-accent">dei tuoi dati riservati</span>
                </h2>
              
                <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto leading-relaxed mb-10">
                  Unisciti a migliaia di professionisti che hanno già scelto l'indipendenza dai giganti tech. 
                  Utilizza la potenza dell'AI proteggendo i tuoi dati personali.
                </p>

                {/* BOTTONE CTA FINALE MIGLIORATO - Dimensioni ridotte e senza scale */}
                <div className="flex justify-center max-w-sm mx-auto">
                  <Link
                    to="/contact"
                    className="group relative w-full"
                  >
                    {/* Effetto glow animato ridotto */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-xl blur opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                    
                    {/* Bottone principale - RIMOSSO SCALE E DIMENSIONI RIDOTTE */}
                    <div className="relative w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-4 rounded-xl font-semibold text-base hover:from-emerald-400 hover:to-green-400 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span>Invia ora una email e scopri di più</span>
                      </div>
                      <div className="text-sm font-normal mt-1 opacity-90">
                        Installazione immediata • Supporto garantito
                      </div>
                    </div>
                  </Link>
                </div>
                
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </>
  );
};

export default AssistentiAILocale;
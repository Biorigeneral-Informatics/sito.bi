// src/pages/SoftwarePMI.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, GitBranch, Database, Laptop, Cloud, Shield, Zap, CheckCircle, BarChart, ArrowRight, Workflow,Bot,  } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('softwarePMI'); // cambia 'nomePagina'

const SoftwarePMI = () => {
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
        
        {/* Hero Section - Stile identico alla Home */}
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
                con le tue idee. 
              </motion.span>
            </motion.span>
              </h1>
              
              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                Comprendiamo le sfide uniche delle piccole e medie imprese, trasformiamo le tue esigenze specifiche in soluzioni digitali concrete.
              </p>

              {/* Bottoni CTA */}
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


        <ScrollAnimation animation="slideUp">
              <div className="text-center mb-12 md:mb-0">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <span className="text-green-500">
                    Soluzioni Software • PMI
                  </span>
                </div>
                <div>
                  <h2 className="text-4xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                    <span className="block text-primary">Soluzioni Software Personalizzate</span>
                  </h2>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
                  Trasformiamo le tue esigenze specifiche in soluzioni digitali concrete, progettate per crescere con il tuo business.
                </p>
              </div>
        </ScrollAnimation>
            
        {/* Sezione Soluzioni Software Personalizzate */}
        <section className="py-16 md:py-10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
           <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-violet-800/10 filter blur-3xl"></div>
            <div className="absolute bottom-4 right-4 w-64 h-64 rounded-full bg-violet-800/10 filter blur-3xl"></div>

           
              {/* Riquadro 1 - Software Personalizzati */}
              <ScrollAnimation animation="slideUp" delay={0.1} className="md:col-span-5 relative">
                <div className="bg-gradient-to-br from-background/70 to-emerald-500/8 backdrop-blur-lg border border-violet-500/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
                  {/* Top gradient border verde */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-white-400 to-violet-400"></div>
                  
                  {/* Gradient interno verde */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-teal-500/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/8 via-transparent to-emerald-300/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  {/* Rete di connessioni animate */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-12 right-12 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-16 right-8 w-1 h-1 bg-emerald-200 rounded-full animate-pulse"></div>
                  </div>
                  
                   
                  {/* Sezione Servizi */}
                  <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                      

                      {/* Grid delle soluzioni */}
                      <ScrollAnimation animation="slideUp">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {solutionTypes.map((solution, index) => (
                            <motion.div 
                              key={index} 
                              className="backdrop-blur-md  border border-white/10 rounded-xl p-6 text-center shadow-xl hover:bg-black-600/5 glass transition-all"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                              <div className="inline-flex items-center justify-center mb-4">
                                {solution.icon}
                              </div>
                              <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                              <p className="text-foreground/70">{solution.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollAnimation>
                    </div>
                  </section>
                  </div>
                  </ScrollAnimation>
                  </div>
        </section>

       

        {/* Benefits Section con riquadri glass */}
        <section className="py-56 relative">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <ScrollAnimation animation="fadeIn">
              
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Creiamo soluzioni su misura per la tua azienda</h2>
                    <p className="text-foreground/70 mb-6">
                      Supportiamo le aziende nello sviluppo di software personalizzati, pensati per adattarsi perfettamente alle loro specifiche esigenze operative. Il nostro obiettivo è trasformare le idee in strumenti concreti, funzionali e potenzialmente scalabili.
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
                        
                        <Zap className="w-6 h-6 text-green-500 mr-2" />
                        L'alternativa concreta alle grandi agenzie
                      </h3>
                      <p className="text-foreground/70">
                        Grazie all'uso mirato dell'intelligenza artificiale, sviluppiamo software personalizzati in modo più rapido, efficiente e accessibile. Offriamo soluzioni di alta qualità, su misura per le tue esigenze reali.
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
                        Un'app che scala con te
                      </h3>
                      <p className="text-foreground/70">
                        Ogni software che sviluppiamo è progettato con una visione a lungo termine: pensiamo alla scalabilità sin dall'inizio, per supportare la crescita futura del tuo business.
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
                        <GitBranch className="w-6 h-6 text-green-500 mr-2" />
                        Integrazioni che generano valore
                      </h3>
                      <p className="text-foreground/70">
                        Integra con semplicità il tuo software con API, modelli di intelligenza artificiale, agenti e automazioni personalizzate. Strumenti e funzioni avanzati per restare al passo.
                      </p>
                    </motion.div>
                  </div>
                </div>
              
            </ScrollAnimation>
          </div>
        </section>



        <ScrollAnimation animation="slideUp">
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <span className="text-green-500">
                    Metodologia • Processo Agile
                  </span>
                </div>
                <div>
                  <h2 className="text-4xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                    <span className="block text-primary">Il Nostro Processo di Sviluppo</span>
                  </h2>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
                  Un approccio strutturato e trasparente che garantisce risultati di qualità e rispetto delle tempistiche.
                </p>
              </div>
            </ScrollAnimation>



        {/* Il Nostro Processo di Sviluppo - Migliorato con container glass */}
        <section className="py-46 md:py-1 mx-16 relative overflow-hidden">
         
            {/* Container glass per i step */}
            <ScrollAnimation animation="fadeIn">
              <div className="backdrop-blur-md  border-white/10 rounded-2xl p-8 md:p-12 ">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-400/0 via-green-500/60 to-emerald-400/0 hidden md:block rounded-full"></div>                  
                  {/* Timeline steps */}
                  <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-6">
                    {developmentSteps.map((step, index) => (
                      <motion.div 
                        key={index}
                        className="relative flex-1 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        {/* Step circle con glassmorphism */}
                        <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-xl backdrop-blur-sm bg-background`}>
                          {step.icon}
                        </div>
                        
                        {/* Step number */}
                        <div className="text-sm font-bold text-green-500 mb-2">{step.step}</div>
                        
                        {/* Content in glass container */}
                        <div className="bg-background/40 p-4 rounded-xl border backdrop-blur-md">
                          <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                          <p className="text-foreground/70 text-sm">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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
                    <span className="block text-primary">Pronto a <span className="text-accent">Digitalizzare</span> il Tuo Business?</span>
                  </h2>
                
                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Contattaci per discutere le tue esigenze e scoprire come possiamo sviluppare un software personalizzato per la tua PMI.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Link 
                      to="/contact" 
                      className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                    >
                      Richiedi Preventivo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      to="/products" 
                      className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      Esplora Soluzioni
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

export default SoftwarePMI;
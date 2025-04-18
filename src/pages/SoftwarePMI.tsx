// src/pages/SoftwarePMI.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, GitBranch, Database, Laptop, Cloud, Shield, Zap, CheckCircle, BarChart } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const SoftwarePMI = () => {
  const solutionTypes = [
    {
      title: "Software Locali",
      description: "Software ERP e Client App personalizzati per gestire tutte le operazioni aziendali in modo efficiente",
      icon: <BarChart className="w-12 h-12 text-blue-500" />
    },
    {
      title: "App Web",
      description: "Applicazioni web responsive e performanti per ogni esigenza aziendale",
      icon: <Laptop className="w-12 h-12 text-green-500" />
    },
    {
      title: "Integrazione AI",
      description: "Infrastrutture scalabili e sicure per i tuoi dati e applicazioni",
      icon: <Cloud className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Siti Web",
      description: "Piattaforme online personalizzate e ottimizzate per conversioni",
      icon: <Database className="w-12 h-12 text-orange-500" />
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

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Il Software che cresce con le tue idee</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Comprendiamo le sfide uniche delle piccole e medie imprese, trasformiamo le tue esigenze specifiche in soluzioni digitali concrete.
        </p>
      </motion.div>

      {/* Hero Banner */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="relative glass rounded-2xl overflow-hidden h-80">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Software PMI" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h2 className="text-3xl font-bold mb-4">La soluzione ideale per il tuo business</h2>
              <p className="text-foreground/80 mb-6">
                Trasforma la tua PMI con applicativi software su misura. Sfrutta il nostro metodo di sviluppo unico AI based per creare l'asset digitale che hai sempre desiderato per la tua azienda.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
              >
                Richiedi Consulenza Gratuita
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Solution Types */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Soluzioni Software Personalizzate</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionTypes.map((solution, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className="inline-flex items-center justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-foreground/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Creiamo soluzioni su misura per la tua azienda</h2>
              <p className="text-foreground/70 mb-6">
              Supportiamo le aziende nello sviluppo di software personalizzati, pensati per adattarsi perfettamente alle loro specifiche esigenze operative. Il nostro obiettivo è trasformare le idee in strumenti concreti, funzionali e potenzialmente scalabili.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="glass p-6 rounded-xl bg-primary/5 mb-6">
                <h3 className="flex items-center font-bold mb-3">
                  <Zap className="w-6 h-6 text-amber-500 mr-2" />
                  L'alternativa concreta alle grandi agenzie
                </h3>
                <p className="text-foreground/70">
                Grazie all’uso mirato dell’intelligenza artificiale, sviluppiamo software personalizzati in modo più rapido, efficiente e accessibile. Offriamo soluzioni di alta qualità, su misura per le tue esigenze reali.                </p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-primary/5 mb-6">
                <h3 className="flex items-center font-bold mb-3">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  Un'app che scala con te
                </h3>
                <p className="text-foreground/70">
                Ogni software che sviluppiamo è progettato con una visione a lungo termine: pensiamo alla scalabilità sin dall’inizio, per supportare la crescita futura del tuo business.</p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-primary/5">
                <h3 className="flex items-center font-bold mb-3">
                  <GitBranch className="w-6 h-6 text-green-500 mr-2" />
                  Integrazioni che generano valore </h3>
                <p className="text-foreground/70">
                Integra con semplicità il tuo software con API, modelli di intelligenza artificiale, agenti e automazioni personalizzate. Strumenti e funzioni avanzati per restare al passo.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Development Process */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Il Nostro Processo di Sviluppo</h2>
        
        <div className="relative border-l-2 border-primary/30 ml-6 pl-8 py-4 space-y-8">
          {[
            {
              step: 1,
              title: "Analisi e Requisiti",
              description: "Analisi approfondita delle esigenze aziendali, definizione degli obiettivi e pianificazione dettagliata"
            },
            {
              step: 2,
              title: "Design e Prototipazione",
              description: "Creazione dell'architettura software e prototipi interattivi per validare l'esperienza utente"
            },
            {
              step: 3,
              title: "Sviluppo Agile",
              description: "Implementazione con sprint bisettimanali e feedback continuo per adattamenti rapidi"
            },
            {
              step: 4,
              title: "Test e Deployment",
              description: "Testing rigoroso, formazione utenti e supporto continuo post-lancio"
            }
          ].map((step) => (
            <div key={step.step} className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Technologies */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-8">Tecnologie Utilizzate</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "React", "Node.js", "TypeScript", "Laravel", 
              "MySQL", "PostgreSQL", "MongoDB", "AWS", 
              "Azure", "Docker", "Kubernetes", "Redis"
            ].map((tech, index) => (
              <div key={index} className="glass p-3 rounded-lg bg-primary/5">
                <Code className="w-5 h-5 text-primary inline mr-2" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn">
        <div className="glass p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronti a Digitalizzare il Tuo Business?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contattaci per discutere le tue esigenze e scoprire come possiamo sviluppare un software personalizzato per la tua PMI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
            >
              Richiedi Preventivo
            </Link>
            
            <Link
              to="/products"
              className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              Esplora Soluzioni
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default SoftwarePMI;
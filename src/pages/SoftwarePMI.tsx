// src/pages/SoftwarePMI.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, GitBranch, Database, Laptop, Cloud, Shield, Zap, CheckCircle, BarChart } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const SoftwarePMI = () => {
  const solutionTypes = [
    {
      title: "Gestionali",
      description: "Software ERP personalizzati per gestire tutte le operazioni aziendali in modo efficiente",
      icon: <BarChart className="w-12 h-12 text-blue-500" />
    },
    {
      title: "App Web",
      description: "Applicazioni web responsive e performanti per ogni esigenza aziendale",
      icon: <Laptop className="w-12 h-12 text-green-500" />
    },
    {
      title: "Sistemi Cloud",
      description: "Infrastrutture scalabili e sicure per i tuoi dati e applicazioni",
      icon: <Cloud className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Soluzioni E-commerce",
      description: "Piattaforme di vendita online personalizzate e ottimizzate per conversioni",
      icon: <Database className="w-12 h-12 text-orange-500" />
    }
  ];

  const benefits = [
    "Automazione dei processi aziendali ripetitivi",
    "Riduzione dei costi operativi fino al 35%",
    "Miglioramento dell'efficienza del personale",
    "Integrazione completa tra sistemi diversi",
    "Accesso ai dati in tempo reale",
    "Scalabilità in base alla crescita aziendale"
  ];

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Software PMI</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Soluzioni software personalizzate per piccole e medie imprese che trasformano i processi e accelerano la crescita
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
              <h2 className="text-3xl font-bold mb-4">Software che fa crescere il tuo business</h2>
              <p className="text-foreground/80 mb-6">
                Trasforma la tua PMI con soluzioni software su misura che ottimizzano i processi, 
                riducono i costi e aumentano la produttività.
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
              <h2 className="text-2xl font-bold mb-6">Vantaggi del Software Personalizzato</h2>
              <p className="text-foreground/70 mb-6">
                Sviluppiamo soluzioni su misura per la tua azienda, garantendo perfetta aderenza ai tuoi processi 
                e massimizzando il ritorno sull'investimento.
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
                  Efficienza Operativa
                </h3>
                <p className="text-foreground/70">
                  Riduzione dei tempi e dei costi operativi attraverso l'automazione dei processi e l'eliminazione delle attività ripetitive.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-primary/5 mb-6">
                <h3 className="flex items-center font-bold mb-3">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  Scalabilità
                </h3>
                <p className="text-foreground/70">
                  Il software cresce con la tua azienda, supportando un numero crescente di utenti, dati e funzionalità senza problemi.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-primary/5">
                <h3 className="flex items-center font-bold mb-3">
                  <GitBranch className="w-6 h-6 text-green-500 mr-2" />
                  Integrazione Totale
                </h3>
                <p className="text-foreground/70">
                  Connessione perfetta con i tuoi sistemi esistenti, eliminando i silos di dati e garantendo un flusso di informazioni uniforme.
                </p>
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
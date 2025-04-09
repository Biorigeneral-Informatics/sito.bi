// src/pages/Developers.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Code, Briefcase, Clock, CheckCircle, Database, Shield } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Developers = () => {
  const devTeamModels = [
    {
      title: "Team Dedicato",
      description: "Un team completo di sviluppatori assegnato esclusivamente al tuo progetto",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      benefits: [
        "Totale dedicazione alle tue priorità",
        "Conoscenza profonda del tuo business",
        "Comunicazione diretta e continua",
        "Flessibilità nella gestione delle attività"
      ]
    },
    {
      title: "Team on Demand",
      description: "Sviluppatori esperti disponibili secondo le tue necessità, con scalabilità immediata",
      icon: <Clock className="w-12 h-12 text-green-500" />,
      benefits: [
        "Scalabilità immediata delle risorse",
        "Competenze specializzate al bisogno",
        "Nessun costo fisso nei periodi inattivi",
        "Ideale per carichi di lavoro variabili"
      ]
    },
    {
      title: "Sviluppo Agile",
      description: "Metodologia iterativa con sprint bisettimanali e consegne incrementali",
      icon: <Briefcase className="w-12 h-12 text-purple-500" />,
      benefits: [
        "Feedback rapido e continuo",
        "Adattamento veloce ai cambiamenti",
        "Visibilità costante sui progressi",
        "Risultati tangibili fin dalle prime settimane"
      ]
    }
  ];

  const expertise = [
    "Sviluppo Frontend (React, Vue, Angular)",
    "Sviluppo Backend (Node.js, Django, Laravel)",
    "Mobile Development (React Native, Flutter)",
    "Database (PostgreSQL, MongoDB, MySQL)",
    "DevOps (AWS, Azure, Docker, Kubernetes)",
    "AI & Machine Learning (TensorFlow, PyTorch)"
  ];

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Sviluppatori Esperti</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Integra sviluppatori qualificati nei tuoi progetti on-demand
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-2xl"
        >
          <Users className="w-12 h-12 mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-4">Team Integration</h2>
          <p className="text-foreground/70">
            Seamlessly integrate our expert developers into your existing team and workflow with minimal disruption and maximum impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-2xl"
        >
          <Code className="w-12 h-12 mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/70">
            Access to developers with extensive experience in modern technologies and best practices from various industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-2xl"
        >
          <Briefcase className="w-12 h-12 mb-4 text-purple-500" />
          <h2 className="text-2xl font-bold mb-4">Project Management</h2>
          <p className="text-foreground/70">
            Professional project management ensuring smooth collaboration, clear communication, and timely delivery of your projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-2xl"
        >
          <Clock className="w-12 h-12 mb-4 text-orange-500" />
          <h2 className="text-2xl font-bold mb-4">Flexible Engagement</h2>
          <p className="text-foreground/70">
            Choose the engagement model that works best for your project needs and timeline, from dedicated teams to on-demand resources.
          </p>
        </motion.div>
      </div>

      {/* Collaboration Models */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Modelli di Collaborazione</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {devTeamModels.map((model, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-xl h-full flex flex-col"
            >
              <div className="mb-6">
                {model.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
              <p className="text-foreground/70 mb-6">{model.description}</p>
              
              <h4 className="font-semibold mb-3">Vantaggi:</h4>
              <ul className="space-y-2 mb-8">
                {model.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Technical Expertise */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Expertise Tecniche</h2>
              <p className="text-foreground/70 mb-6">
                Il nostro team è composto da sviluppatori senior con comprovata esperienza in una vasta gamma di 
                tecnologie. Selezioniamo solo il top 5% dei talenti per garantire qualità e performance.
              </p>
              
              <div className="space-y-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="glass p-6 rounded-xl mb-6 bg-blue-500/5">
                <h3 className="flex items-center font-bold mb-3">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  Rigoroso Processo di Selezione
                </h3>
                <p className="text-foreground/70">
                  I nostri sviluppatori superano un processo di selezione in più fasi che valuta competenze tecniche, 
                  soft skills e capacità di problem-solving. Solo i migliori entrano nel nostro team.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-green-500/5">
                <h3 className="flex items-center font-bold mb-3">
                  <Database className="w-6 h-6 text-green-500 mr-2" />
                  Formazione Continua
                </h3>
                <p className="text-foreground/70">
                  Investiamo costantemente nella formazione continua del nostro team per garantire competenze sempre aggiornate 
                  sulle tecnologie più recenti e le best practices di sviluppo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Process Steps */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Come Lavoriamo</h2>
        
        <div className="relative border-l-2 border-primary/30 ml-6 pl-8 py-4 space-y-8">
          {[
            {
              step: 1,
              title: "Consultazione Iniziale",
              description: "Comprendiamo le tue esigenze tecniche, obiettivi di business e requisiti di team"
            },
            {
              step: 2,
              title: "Selezione del Team",
              description: "Formiamo un team con le competenze specifiche necessarie per il tuo progetto"
            },
            {
              step: 3,
              title: "Onboarding e Integrazione",
              description: "Introduciamo il team nei tuoi processi esistenti con un piano di integrazione strutturato"
            },
            {
              step: 4,
              title: "Sviluppo e Collaborazione",
              description: "Lavoriamo con metodologie agili, garantendo trasparenza e consegne regolari"
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

      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn">
        <div className="glass p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a potenziare il tuo team di sviluppo?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contattaci oggi per discutere delle tue esigenze e scoprire come i nostri sviluppatori possono accelerare i tuoi progetti.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
            >
              Richiedi una consultazione
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

export default Developers;
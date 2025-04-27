// src/pages/Developers.tsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  BrainCircuit, 
  Database, 
  ArrowRight,
  GraduationCap,
  Trophy,
  ChevronRight
} from 'lucide-react';

const Developers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-950 to-indigo-950">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-indigo-400">Alessandro</span> & <span className="text-sky-400">Federico</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal mt-2 block text-white/80">AI Developers</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Due giovani talenti specializzati in intelligenza artificiale 
            pronti ad unirsi al tuo team per trasformare il tuo business.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Contattaci ora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      
      {/* Developers Profiles */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Incontra i Nostri Talenti
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Alessandro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
          >
            <div className="aspect-[4/3] bg-indigo-900/20 relative">
              <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                <BrainCircuit className="w-24 h-24 opacity-30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Alessandro</h3>
                <p className="text-indigo-400">AI Research Engineer</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-white/70 mb-6">
                Specializzato in modelli di machine learning e computer vision. Alessandro combina solide 
                competenze teoriche con implementazioni pratiche per sviluppare soluzioni AI innovative.
              </p>
              
              <div className="mb-6">
                <h4 className="flex items-center text-white font-medium mb-3">
                  <GraduationCap className="mr-2 h-5 w-5 text-indigo-400" />
                  Formazione
                </h4>
                <ul className="text-white/70 space-y-2">
                  <li>• Laurea Magistrale in Computer Science</li>
                  <li>• Master in Intelligenza Artificiale</li>
                  <li>• Certificazioni in TensorFlow e PyTorch</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="flex items-center text-white font-medium mb-3">
                  <Trophy className="mr-2 h-5 w-5 text-indigo-400" />
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Python', 'MLOps'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-950 text-white/80 text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/profile/alessandro" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Scopri di più
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          {/* Federico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
          >
            <div className="aspect-[4/3] bg-sky-900/20 relative">
              <div className="absolute inset-0 flex items-center justify-center text-sky-400">
                <Code className="w-24 h-24 opacity-30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Federico</h3>
                <p className="text-sky-400">AI Solutions Architect</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-white/70 mb-6">
                Esperto nell'integrazione di soluzioni AI in contesti aziendali. Federico sviluppa 
                architetture scalabili e applicazioni end-to-end con focus su usabilità e performance.
              </p>
              
              <div className="mb-6">
                <h4 className="flex items-center text-white font-medium mb-3">
                  <GraduationCap className="mr-2 h-5 w-5 text-sky-400" />
                  Formazione
                </h4>
                <ul className="text-white/70 space-y-2">
                  <li>• Ingegneria Informatica</li>
                  <li>• Specializzazione in AI & Cloud Computing</li>
                  <li>• AWS Certified Solutions Architect</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="flex items-center text-white font-medium mb-3">
                  <Trophy className="mr-2 h-5 w-5 text-sky-400" />
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'NLP', 'AWS', 'Docker', 'Next.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-sky-950 text-white/80 text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/profile/federico" 
                className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
              >
                Scopri di più
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Cosa possono fare per te */}
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Cosa Possono Fare Per Te
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Sviluppo AI",
              desc: "Creazione di modelli di machine learning personalizzati per le tue esigenze specifiche",
              icon: <BrainCircuit className="h-12 w-12 text-indigo-400" />,
              delay: 0.1
            },
            {
              title: "Integrazione Sistemi",
              desc: "Implementazione di soluzioni AI nei tuoi sistemi esistenti con approccio scalabile",
              icon: <Database className="h-12 w-12 text-indigo-400" />,
              delay: 0.2
            },
            {
              title: "Applicazioni Smart",
              desc: "Sviluppo di applicazioni web e mobile con funzionalità AI avanzate",
              icon: <Code className="h-12 w-12 text-indigo-400" />,
              delay: 0.3
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-500/30 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Vantaggi dell'integrazione */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Vantaggi dell'Integrazione
        </motion.h2>
        
        <div className="bg-gradient-to-r from-indigo-950 to-slate-900 rounded-lg p-8 border border-white/5">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Perché Scegliere Alessandro e Federico?</h3>
              <p className="text-white/70 mb-6">
                Integrare i nostri sviluppatori nel tuo team significa accedere immediatamente a competenze 
                specialistiche in AI e sviluppo software, senza i costi e i tempi necessari per l'assunzione 
                e formazione di nuovo personale.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Competenze immediatamente operative",
                  "Flessibilità nei modelli di collaborazione",
                  "Approccio orientato ai risultati",
                  "Capacità di trasferimento del know-how"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-indigo-500 flex items-center justify-center">
                      <ChevronRight className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Modalità di Integrazione</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Progetti Specifici",
                    desc: "Collaborazione focalizzata su singoli progetti con obiettivi definiti"
                  },
                  {
                    title: "Team Extension",
                    desc: "Integrazione dei nostri sviluppatori nel tuo team esistente"
                  },
                  {
                    title: "Consulenza Tecnica",
                    desc: "Supporto per progettazione e implementazione di soluzioni AI"
                  },
                  {
                    title: "Formazione e Workshop",
                    desc: "Sessioni di trasferimento di conoscenze al tuo team interno"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-indigo-500/40 transition-colors">
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progetti Recenti */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center text-white"
        >
          Progetti Recenti
        </motion.h2>
        
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
          Ecco alcuni esempi di successo che dimostrano come Alessandro e Federico possono 
          generare valore concreto per il tuo business.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sistema di Raccomandazione per E-commerce",
              desc: "Implementazione di un modello personalizzato che ha aumentato le vendite del 32%",
              tags: ["Machine Learning", "Python", "AWS"],
              color: "from-indigo-500 to-blue-500"
            },
            {
              title: "Analisi Visiva per Controllo Qualità",
              desc: "Sistema di computer vision che ha ridotto i difetti di produzione dell'87%",
              tags: ["Computer Vision", "TensorFlow", "Edge Computing"],
              color: "from-blue-500 to-sky-500"
            },
            {
              title: "Chatbot Multilingua",
              desc: "Assistente virtuale basato su NLP che ha ridotto i ticket di supporto del 65%",
              tags: ["NLP", "React", "Node.js"],
              color: "from-sky-500 to-indigo-500"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-900/50 to-sky-900/50 rounded-lg p-8 text-center border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Pronti a potenziare il tuo team?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Alessandro e Federico sono disponibili per valutare le tue esigenze e 
            proporti la soluzione di integrazione più adatta.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Richiedi una consulenza gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;
// src/pages/Services.tsx (migliorata)
import { motion } from 'framer-motion';
import { Code2, GitBranch, Database, Terminal, Cloud, Shield, Zap, Users, CheckCircle, Cpu, PencilRuler } from 'lucide-react';
//import { Link } from 'react-router';
import CTASection from '../components/CTASection';

const Services = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Redis', category: 'Database' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Next.js', category: 'Frontend' },
  ];

  const projectTypes = [
    {
      title: 'Applicazioni Web',
      icon: <Terminal className="w-12 h-12 text-blue-500" />,
      description: 'Applicazioni web responsive e scalabili per ogni esigenza aziendale.'
    },
    {
      title: 'App Mobile',
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      description: 'Applicazioni native e cross-platform per iOS e Android.'
    },
    {
      title: 'Sistemi Gestionali',
      icon: <Database className="w-12 h-12 text-purple-500" />,
      description: 'ERP, CRM e soluzioni personalizzate per la gestione aziendale.'
    },
    {
      title: 'E-commerce',
      icon: <Cloud className="w-12 h-12 text-pink-500" />,
      description: 'Piattaforme di vendita online personalizzate e scalabili.'
    },
    {
      title: 'UX/UI Design',
      icon: <PencilRuler className="w-12 h-12 text-yellow-500" />,
      description: 'Progettazione di interfacce utente intuitive e moderne.'
    },
    {
      title: 'Integrazione AI',
      icon: <PencilRuler className="w-12 h-12 text-yellow-500" />,
      description: 'Implementazione di intelligenza artificiale nelle soluzioni software.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sviluppo Software per PMI</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Soluzioni software innovative e su misura per trasformare la tua azienda, 
            utilizzando le migliori pratiche di sviluppo e tecnologie all'avanguardia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Il Nostro Approccio</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Metodologia Agile</h3>
              <p className="text-foreground/70 mb-6">
                Adottiamo un approccio agile allo sviluppo che garantisce:
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Sviluppo iterativo e incrementale
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  Collaborazione costante con il cliente
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-500" />
                  Adattabilità ai cambiamenti
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Stack Tecnologico</h3>
              <p className="text-foreground/70 mb-6">
                Utilizziamo tecnologie moderne e consolidate:
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-purple-500" />
                  React, TypeScript, Node.js
                </li>
                <li className="flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-purple-500" />
                  AWS, Azure, Google Cloud
                </li>
                <li className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-500" />
                  PostgreSQL, MongoDB, Redis
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Tipi di Progetti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Tipi di Progetti</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="glass p-6 rounded-xl text-center card-hover"
              >
                <div className="mb-4 inline-flex items-center justify-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Code2 className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-bold mb-4">Stack Tecnologico Moderno</h2>
            <p className="text-foreground/70 mb-6">
              Utilizziamo le tecnologie più recenti e affidabili come React, Node.js, 
              TypeScript e servizi cloud per costruire applicazioni scalabili e 
              manutenibili. Il nostro stack garantisce prestazioni ottimali e 
              sicurezza di alto livello.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.slice(0, 8).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {tech.name}
                </span>
              ))}
              <span className="px-3 py-1 bg-primary/5 rounded-full text-sm">
                +{technologies.length - 8} altre
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <GitBranch className="w-12 h-12 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold mb-4">Sviluppo Agile</h2>
            <p className="text-foreground/70 mb-6">
              La nostra metodologia agile assicura cicli di sviluppo rapidi, 
              integrazione continua e aggiornamenti regolari per soddisfare 
              le esigenze in evoluzione del tuo business. Collaboriamo 
              strettamente con i clienti in ogni fase.
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500" />
                <div>
                  <h4 className="font-bold">Sprint bisettimanali</h4>
                  <p className="text-foreground/60 text-sm">Rilasci frequenti e feedback continuo</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500" />
                <div>
                  <h4 className="font-bold">CI/CD automatizzato</h4>
                  <p className="text-foreground/60 text-sm">Integrazione e deployment continuo</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500" />
                <div>
                  <h4 className="font-bold">Scrum e Kanban</h4>
                  <p className="text-foreground/60 text-sm">Metodologie flessibili adattate alle esigenze</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Database className="w-12 h-12 mb-4 text-purple-500" />
            <h2 className="text-2xl font-bold mb-4">Soluzioni Cloud</h2>
            <p className="text-foreground/70 mb-6">
              Sfruttiamo le tecnologie cloud per creare infrastrutture scalabili, 
              garantendo che le tue applicazioni possano crescere insieme al tuo 
              business. Offriamo soluzioni di hosting ottimizzate e sicure.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-bold mb-1">AWS</h4>
                <p className="text-foreground/60 text-sm">EC2, S3, Lambda, RDS</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-bold mb-1">Azure</h4>
                <p className="text-foreground/60 text-sm">App Service, Cosmos DB</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-bold mb-1">Google Cloud</h4>
                <p className="text-foreground/60 text-sm">GKE, Cloud Functions</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-bold mb-1">Serverless</h4>
                <p className="text-foreground/60 text-sm">Architetture scalabili</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Terminal className="w-12 h-12 mb-4 text-orange-500" />
            <h2 className="text-2xl font-bold mb-4">Sviluppo Personalizzato</h2>
            <p className="text-foreground/70 mb-6">
              Creiamo soluzioni su misura progettate specificamente per le tue 
              esigenze aziendali, garantendo massima efficienza e ritorno 
              sull'investimento. Ogni progetto è unico e riceve attenzione dedicata.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-foreground">
                      Analisi Requisiti
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-foreground">
                      100%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                  <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-foreground">
                      Design UX/UI
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-foreground">
                      95%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                  <div style={{ width: "95%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-foreground">
                      Sviluppo Backend
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-foreground">
                      90%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                  <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="my-16 glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Il Nostro Processo</h2>
          
          <div className="relative border-l-2 border-primary/30 ml-6 pl-8 py-4 space-y-10">
            {/* Punto 1 */}
            <div className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scoperta e Pianificazione</h3>
              <p className="text-foreground/70">
                Analizziamo le tue esigenze aziendali, definiamo gli obiettivi e creiamo un piano dettagliato per il progetto.
              </p>
              <p className="text-primary/80 mt-2 text-sm">Durata: 1-2 settimane</p>
            </div>
            
            {/* Punto 2 */}
            <div className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design e Prototipazione</h3>
              <p className="text-foreground/70">
                Creiamo wireframe, mockup e prototipi interattivi per visualizzare la soluzione prima dello sviluppo.
              </p>
              <p className="text-primary/80 mt-2 text-sm">Durata: 2-3 settimane</p>
            </div>
            
            {/* Punto 3 */}
            <div className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sviluppo Iterativo</h3>
              <p className="text-foreground/70">
                Implementiamo la soluzione in sprint bisettimanali, con demo regolari e feedback continuo.
              </p>
              <p className="text-primary/80 mt-2 text-sm">Durata: 1-6 mesi (dipende dalla complessità)</p>
            </div>
            
            {/* Punto 4 */}
            <div className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Test e Quality Assurance</h3>
              <p className="text-foreground/70">
                Rigorosi test di qualità, performance e sicurezza per garantire un prodotto affidabile.
              </p>
              <p className="text-primary/80 mt-2 text-sm">Durata: 2-4 settimane</p>
            </div>
            
            {/* Punto 5 */}
            <div className="relative">
              <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deployment e Supporto</h3>
              <p className="text-foreground/70">
                Rilascio della soluzione e supporto continuo post-lancio con monitoraggio e ottimizzazioni.
              </p>
              <p className="text-primary/80 mt-2 text-sm">Supporto continuativo</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <CTASection 
          title="Pronti a Trasformare il Tuo Business?"
          description="Contattaci per discutere come possiamo aiutarti a raggiungere i tuoi obiettivi digitali"
          buttonText="Parliamo del tuo progetto"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default Services;
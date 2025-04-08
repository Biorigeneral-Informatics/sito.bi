import { motion } from 'framer-motion';
import { Code2, GitBranch, Database, Terminal, Cloud, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
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
          animate={{ opacity: 1, y: 0 }}
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Code2 className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-bold mb-4">Stack Tecnologico Moderno</h2>
            <p className="text-foreground/70">
              Utilizziamo le tecnologie più recenti e affidabili come React, Node.js, 
              TypeScript e servizi cloud per costruire applicazioni scalabili e 
              manutenibili. Il nostro stack garantisce prestazioni ottimali e 
              sicurezza di alto livello.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <GitBranch className="w-12 h-12 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold mb-4">Sviluppo Agile</h2>
            <p className="text-foreground/70">
              La nostra metodologia agile assicura cicli di sviluppo rapidi, 
              integrazione continua e aggiornamenti regolari per soddisfare 
              le esigenze in evoluzione del tuo business. Collaboriamo 
              strettamente con i clienti in ogni fase.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Database className="w-12 h-12 mb-4 text-purple-500" />
            <h2 className="text-2xl font-bold mb-4">Soluzioni Cloud</h2>
            <p className="text-foreground/70">
              Sfruttiamo le tecnologie cloud per creare infrastrutture scalabili, 
              garantendo che le tue applicazioni possano crescere insieme al tuo 
              business. Offriamo soluzioni di hosting ottimizzate e sicure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Terminal className="w-12 h-12 mb-4 text-orange-500" />
            <h2 className="text-2xl font-bold mb-4">Sviluppo Personalizzato</h2>
            <p className="text-foreground/70">
              Creiamo soluzioni su misura progettate specificamente per le tue 
              esigenze aziendali, garantendo massima efficienza e ritorno 
              sull'investimento. Ogni progetto è unico e riceve attenzione dedicata.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 glass p-8 rounded-2xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Pronti a Trasformare il Tuo Business?</h2>
          <p className="text-foreground/70 mb-6">
            Contattaci per discutere come possiamo aiutarti a raggiungere i tuoi obiettivi digitali
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Parliamo del tuo progetto <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
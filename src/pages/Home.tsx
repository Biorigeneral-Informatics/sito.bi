import { motion } from 'framer-motion';
import { ArrowRight, Code2, Bot, Cpu, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gradient">
            Biorigeneral Informatics
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Trasformiamo il futuro digitale delle aziende attraverso soluzioni software innovative, 
            integrazione di intelligenza artificiale e servizi di sviluppo d'eccellenza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-3xl mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
              <p className="text-foreground/80 mb-6">
                Biorigeneral Informatics è un'azienda leader nell'innovazione tecnologica, 
                specializzata nello sviluppo di soluzioni software all'avanguardia per le PMI italiane. 
                La nostra missione è rendere accessibili le tecnologie più avanzate alle imprese in crescita, 
                garantendo un vantaggio competitivo nel mercato digitale.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contattaci <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Biorigeneral Logo"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Code2 className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-bold mb-4">Sviluppo Software</h2>
            <p className="text-foreground/70 mb-6">
              Soluzioni software personalizzate per PMI, sviluppate con tecnologie moderne 
              e pratiche di sviluppo all'avanguardia. Dalla progettazione al deployment, 
              garantiamo qualità e innovazione.
            </p>
            <Link to="/services" className="inline-flex items-center text-blue-500 hover:text-blue-400">
              Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Cpu className="w-12 h-12 mb-4 text-purple-500" />
            <h2 className="text-2xl font-bold mb-4">Agenti AI</h2>
            <p className="text-foreground/70 mb-6">
              Agenti intelligenti che automatizzano i processi aziendali, 
              aumentano la produttività e forniscono insights preziosi per il 
              tuo business attraverso analisi avanzate.
            </p>
            <Link to="/ai-agents" className="inline-flex items-center text-purple-500 hover:text-purple-400">
              Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-2xl card-hover"
          >
            <Bot className="w-12 h-12 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold mb-4">Chatbot AI</h2>
            <p className="text-foreground/70 mb-6">
              Soluzioni di intelligenza artificiale conversazionale per 
              migliorare il servizio clienti e ottimizzare la comunicazione 
              aziendale 24/7.
            </p>
            <Link to="/chatbots" className="inline-flex items-center text-green-500 hover:text-green-400">
              Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 glass p-8 rounded-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">I Nostri Valori</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Ci impegniamo a fornire soluzioni innovative mantenendo i più alti standard di qualità e professionalità
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Rocket className="w-12 h-12 mb-4 text-blue-500 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Innovazione</h3>
              <p className="text-foreground/70">
                Sempre al passo con le ultime tecnologie per garantire soluzioni all'avanguardia
              </p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 mb-4 text-purple-500 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Collaborazione</h3>
              <p className="text-foreground/70">
                Lavoriamo a stretto contatto con i clienti per garantire risultati ottimali
              </p>
            </div>
            
            <div className="text-center">
              <Code2 className="w-12 h-12 mb-4 text-green-500 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Qualità</h3>
              <p className="text-foreground/70">
                Standard elevati in ogni aspetto del nostro lavoro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
// src/pages/Products.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Bot, BrainCircuit, ArrowRight, Server, Database, Shield, AppWindow } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Products = () => {
  const featuredProducts = [
    {
      id: 'bioriagent',
      title: 'BioriAgent',
      description: 'Una piattaforma per la creazione e gestione di agenti AI personalizzati per l\'automazione di flussi di lavoro aziendali.',
      icon: <BrainCircuit className="w-14 h-14 text-indigo-400" />,
      features: [
        'Interfaccia drag-and-drop',
        'Integrazioni con strumenti aziendali',
        'Automazione dei processi',
        'Analisi dati in tempo reale'
      ],
      bgColor: 'from-indigo-500/20 to-purple-500/20',
      image: 'https://images.unsplash.com/photo-1577760258634-618422a84fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bioritalk',
      title: 'BioriTalk',
      description: 'Chatbot avanzati con comprensione del linguaggio naturale per customer support e assistenza interna.',
      icon: <Bot className="w-14 h-14 text-violet-400" />,
      features: [
        'Comprensione contestuale',
        'Multilingue',
        'Integrabile in siti web e app',
        'Personalizzazione avanzata'
      ],
      bgColor: 'from-violet-500/20 to-pink-500/20',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bioripmi',
      title: 'BioriPMI',
      description: 'Suite di applicazioni gestionali modulari e scalabili per piccole e medie imprese.',
      icon: <Code className="w-14 h-14 text-blue-400" />,
      features: [
        'CRM integrato',
        'Gestione progetti',
        'Fatturazione',
        'Business intelligence'
      ],
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">I Nostri Prodotti</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Soluzioni tecnologiche innovative progettate per accelerare la trasformazione digitale della tua azienda
        </p>
      </motion.div>

      {/* Featured Products */}
      <div className="space-y-24 mb-20">
        {featuredProducts.map((product, index) => (
          <ScrollAnimation
            key={product.id}
            animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
            delay={0.2}
          >
            <div className="relative">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.bgColor} rounded-3xl opacity-30 blur-xl -z-10`}></div>
              
              <div className={`glass rounded-2xl overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex`}>
                {/* Image section */}
                <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 glass py-1 px-3 rounded-full text-sm">
                    Prodotto Premium
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="mb-4">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                  <p className="text-foreground/70 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">Caratteristiche principali:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
                    >
                      Scopri di più <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Additional Products Grid */}
      <ScrollAnimation animation="slideUp" delay={0.3}>
        <h2 className="text-3xl font-bold mb-8 text-center">Altri Prodotti</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: 'BioriBackup',
              description: 'Sistema di backup e disaster recovery automatizzato',
              icon: <Server className="w-10 h-10 text-teal-400" />
            },
            {
              title: 'BioriData',
              description: 'Gestione e analisi dati con intelligence integrata',
              icon: <Database className="w-10 h-10 text-amber-400" />
            },
            {
              title: 'BioriSec',
              description: 'Soluzioni per la sicurezza informatica aziendale',
              icon: <Shield className="w-10 h-10 text-red-400" />
            },
            {
              title: 'BioriApp',
              description: 'Sviluppo di applicazioni mobile per aziende',
              icon: <AppWindow className="w-10 h-10 text-green-400" />
            }
          ].map((product, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:translate-y-[-5px] transition-transform">
              <div className="mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-foreground/70 mb-4">{product.description}</p>
              <Link 
                to="/contact" 
                className="text-primary hover:underline inline-flex items-center text-sm"
              >
                Richiedi informazioni <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn" delay={0.4}>
        <div className="glass p-10 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Non trovi ciò che stai cercando?</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Ogni azienda ha esigenze uniche. Possiamo sviluppare soluzioni software personalizzate per il tuo business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
              >
                Contattaci <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services/software-pmi"
                className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
              >
                Esplora Servizi
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Products;
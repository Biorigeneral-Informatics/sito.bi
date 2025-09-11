// src/pages/Products.tsx - Versione marketplace con dettagli prodotto
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, 
  Shield, ChevronRight, 
  MessageSquare, ListChecks, Clock,
  Cable, Workflow, 
  GitBranch,
  Heart, 
  Search,
  Tag,
  Star,
  ArrowRight,
  ArrowLeft,
  Zap,
  Bot,
  Database,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('products'); 

const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Database dei prodotti organizzato per categoria
  const productCategories = [
    {
      id: 'ai-assistants',
      name: 'Agenti e Chatbot AI',
      description: 'Assistenti virtuali intelligenti per automatizzare le comunicazioni e supportare i processi aziendali',
      
      products: [
        {
          id: 1,
          name: 'SegretarioAI Telegram',
          description: 'Assistente virtuale avanzato per Telegram con workflow N8n integrati',
          longDescription: 'Il primo assistente virtuale italiano che rivoluziona la gestione delle comunicazioni aziendali attraverso Telegram. Integrato con workflow N8n avanzati, automatizza conversazioni complesse, gestisce appuntamenti intelligenti e si integra perfettamente con tutti i tuoi sistemi esistenti. Disponibile 24/7, riduce dell\'80% il carico di lavoro manuale e migliora drasticamente l\'efficienza operativa.',
          icon: <MessageSquare className="w-8 h-8" />,
          tags: ['Telegram', 'N8n', 'Workflow', 'Appuntamenti'],
          price: 'da €200/mese',
          status: 'available',
          featured: true,
          image: 'https://i.imgur.com/BJRduao.jpeg',
          features: [
            'Gestione conversazioni intelligente con NLP avanzato',
            'Workflow N8n integrati per automazioni complesse',
            'Sistema di appuntamenti automatico con calendar sync',
            'Disponibilità 24/7 con supporto multilingue',
            'Integrazione con CRM e sistemi aziendali',
            'Dashboard analytics per monitoraggio performance'
          ],
          benefits: [
            'Riduzione 80% del carico di lavoro manuale',
            'Miglioramento customer satisfaction del 45%',
            'Automazione completa del customer service',
            'ROI positivo già dal primo mese'
          ]
        },
        {
          id: 2,
          name: 'Generatore immagini AI',
          description: 'Assistente AI specializzato per la generazione di immagini creative e professionali',
          longDescription: 'Assistente AI avanzato per la generazione di immagini creative, loghi, contenuti visivi e materiale marketing. Utilizza modelli di intelligenza artificiale all\'avanguardia per creare contenuti visivi personalizzati in pochi secondi. Perfetto per agenzie, designer e aziende che necessitano di contenuti visivi rapidi e di qualità professionale.',
          icon: <Bot className="w-8 h-8" />,
          tags: ['AI Art', 'Design', 'Marketing', 'Creative'],
          price: 'Da €/mese',
          status: 'coming-soon',
          featured: false,
          features: [
              'Generazione immagini HD in stili multipli',
              'Creazione loghi e brand identity automatica',
              'Template personalizzabili per social media',
              'Modelli AI addestrati su contenuti commerciali',
              'Esportazione in formati multipli (PNG, SVG, PDF)',
              'Integrazione con strumenti di design esistenti'
          ],
          benefits: [
            'Riduzione 80% dei tempi di creazione contenuti',
            'Costi di design ridotti fino al 70%',
            'Qualità professionale garantita',
            'Personalizzazione illimitata per il brand'
          ]
        },
        {
        id: 5,
        name: 'VoiceBot Enterprise',
        description: 'Assistente vocale avanzato per call center e customer service con riconoscimento vocale multilingue',
        longDescription: 'Assistente vocale enterprise che trasforma il customer service attraverso AI conversazionale avanzata. Supporta oltre 30 lingue, integrazione telefonica completa e analytics delle chiamate in tempo reale.',
        icon: <MessageSquare className="w-8 h-8" />,
        tags: ['Voice AI', 'Call Center', 'Multilingue', 'Analytics'],
        price: 'da €/mese',
        status: 'coming-soon',
        featured: false,
        features: [
          'Riconoscimento vocale in oltre 30 lingue',
          'Integrazione telefonica completa (SIP/VoIP)',
          'Analytics conversazionali real-time',
          'Sentiment analysis durante le chiamate',
          'Escalation automatica agli operatori',
          'Dashboard manageriale completa'
        ],
        benefits: [
          'Riduzione costi call center del 50%',
          'Miglioramento CSAT del 35%',
          'Disponibilità 24/7 senza pause',
          'Gestione picchi di chiamate automatica'
        ]
      }
      ]
    },
    {
      id: 'automation',
      name: 'Automazioni',
      description: 'Soluzioni per automatizzare processi aziendali e ottimizzare i flussi di lavoro',
      products: [
        {
          id: 3,
          name: 'Lead Generation System: Google Maps + Email Scraper',
          description: 'Automazione per processi aziendali complessi',
          longDescription: 'Soluzione automatizzata che estrae lead qualificati direttamente da Google Maps, trasformando ricerche geografiche in database commerciali completi. Recupera automaticamente nomi aziende, indirizzi, telefoni ed email verificate da siti web e directory. Targeting per area geografica e settore, eliminazione duplicati intelligente ed export multi-formato. Interface intuitiva e risultati immediati per venditori B2B, agenzie marketing e startup.',
          icon: <Workflow className="w-8 h-8" />,
          tags: ['Workflow', 'Automation', 'Integrations', 'AI'],
          price: 'da €60/mese',
          status: 'available',
          featured: true,
          features: [
            'Ricerca geografica avanzata con targeting per città e raggio chilometrico',
            'Estrazione automatica di email da siti web e directory online',
            'Filtri intelligenti per categoria business e parole chiave personalizzate',
            'Eliminazione duplicati automatica e verifica validità email',
            'Export multi-formato (Excel, CSV) e integrazione CRM',
          ],
          benefits: [
            'Riduzione del 90% del tempo di ricerca manuale dei contatti',
            'Tasso di email valide del 60-80% con verifica automatica',
            'Scalabilità illimitata per crescita business senza limiti geografici',
            'Oltre 200 lead qualificati per sessione automatizzata'
          ]
        },
        {
        id: 6,
        name: 'DocumentFlow AI',
        description: 'Automazione intelligente per gestione documenti con OCR e classificazione automatica',
        longDescription: 'Piattaforma AI per automazione completa dei documenti aziendali. OCR avanzato, classificazione automatica, estrazione dati e workflow di approvazione intelligenti per digitalizzare completamente i processi documentali.',
        icon: <Database className="w-8 h-8" />,
        tags: ['OCR', 'Document Management', 'Classification', 'Workflow'],
        price: 'da €/mese',
        status: 'coming-soon',
        featured: false,
        features: [
          'OCR avanzato con accuratezza del 99.5%',
          'Classificazione automatica documenti',
          'Estrazione dati strutturati via AI',
          'Workflow di approvazione configurabili',
          'Integrazione sistemi gestionali',
          'Audit trail completo e compliance'
        ],
        benefits: [
          'Riduzione 90% del tempo di elaborazione',
          'Eliminazione errori manuali',
          'Conformità normative automatica',
          'ROI del 400% nel primo anno'
        ]
      },
      {
        id: 7,
        name: 'SalesBot Pro',
        description: 'Bot di vendita intelligente per lead generation e qualification automatizzata',
        longDescription: 'Bot commerciale avanzato che automatizza il processo di vendita dalla lead generation alla qualification. Integrazione CRM nativa, scoring predittivo e follow-up personalizzati per massimizzare le conversioni.',
        icon: <Bot className="w-8 h-8" />,
        tags: ['Sales', 'Lead Generation', 'CRM', 'Automation'],
        price: 'da €/mese',
        status: 'coming-soon',
        featured: false,
        features: [
          'Lead generation automatizzata multi-canale',
          'Qualification intelligente con AI scoring',
          'Integrazione CRM bidirezionale',
          'Follow-up personalizzati automatici',
          'A/B testing conversazioni',
          'Analytics e reporting avanzati'
        ],
        benefits: [
          'Aumento lead qualificati del 200%',
          'Riduzione costo per lead del 60%',
          'Miglioramento conversion rate del 45%',
          'Accelerazione sales cycle del 30%'
        ]
      }
      ]
    },
    {
      id: 'software',
      name: 'Software',
      description: 'Strumenti avanzati di analisi dati e business intelligence',
      products: [
        {
          id: 4,
          name: 'Classificatore rifiuti',
          description: 'Software avanzato di classificazione rifiuti',
          longDescription: 'Sistema intelligente che analizza e classifica automaticamente i dati sui rifiuti importati da file Excel, trasformando informazioni grezze in report strutturati e conformi alle normative. Elabora tipologie, quantità, codici CER e destinazioni di smaltimento con algoritmi di categorizzazione avanzata. Genera automaticamente documentazione per compliance ambientale e ottimizzazione gestionale con dashboard interattive e export personalizzabili.',
          icon: <Database className="w-8 h-8" />,
          tags: ['Analytics', 'Dashboard', 'Machine Learning', 'Reports'],
          price: 'Richiedi Preventivo',
          status: 'available',
          featured: true,
          features: [
            'Import automatico da file Excel con validazione dati intelligente',
            'Algoritmi di categorizzazione per tipologia, pericolosità',
            'Generazione report compliance automatici per enti di controllo',
            'Dashboard interattiva e semplice',
            'Export multi-formato (PDF, Excel, JSON)',
            'Alerting intelligenti in caso di errori'
          ],
          benefits: [
            'Riduzione del 80% del tempo di elaborazione manuale dati',
            'Eliminazione errori di classificazione',
            'Generazione automatica report obbligatori in 5 minuti',
            'Semplificazione gestione informazioni campioni'
          ]
        },
        {
        id: 8,
        name: 'Gestionale Tricologia',
        description: 'Piattaforma di machine learning per forecasting e analisi predittiva aziendale',
        longDescription: 'Suite completa di machine learning per analisi predittive aziendali. Forecasting vendite, previsioni demand planning, analisi churn e ottimizzazione pricing con algoritmi proprietari e interpretabilità completa.',
        icon: <TrendingUp className="w-8 h-8" />,
        tags: ['Machine Learning', 'Forecasting', 'Predictive', 'AI'],
        price: 'da €/mese',
        status: 'coming-soon',
        featured: false,
        features: [
          'Forecasting vendite con accuratezza 95%+',
          'Analisi churn e retention predittiva',
          'Ottimizzazione pricing dinamica',
          'Demand planning intelligente',
          'Interpretabilità modelli AI completa',
          'Integration con sistemi ERP/CRM'
        ],
        benefits: [
          'Miglioramento forecast accuracy del 40%',
          'Riduzione inventory costs del 25%',
          'Aumento revenue del 15% via pricing',
          'Retention clienti +30%'
        ]
      }
      ]
    }
  ];

  // Ottieni tutti i prodotti per la ricerca
  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryName: category.name
    }))
  );

  

  // Filtra i prodotti in base alla ricerca
  const filteredCategories = productCategories.map(category => ({
    ...category,
    products: category.products.filter(product => {
      if (!searchQuery) return true;
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    })
  })).filter(category => category.products.length > 0);

  // Funzione per aprire il dettaglio prodotto
  const openProductDetail = (productId: number) => {
    setSelectedProduct(productId);
    // Scroll to top quando si apre il dettaglio
    window.scrollTo(0, 0);
  };

  // Funzione per tornare alla lista
  const closeProductDetail = () => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  // Ottieni il prodotto selezionato
  const selectedProductData = selectedProduct 
    ? allProducts.find(p => p.id === selectedProduct)
    : null;

  // Se è selezionato un prodotto, mostra la vista dettaglio
  if (selectedProduct && selectedProductData) {
    return (
      <>
        <SEO 
          title={`${selectedProductData.name} - ${seoData.title}`}
          description={selectedProductData.description}
          keywords={`${selectedProductData.tags.join(', ')}, ${seoData.keywords}`}
          canonicalUrl={`${seoData.canonicalUrl}#${selectedProductData.id}`}
        />
        
        {/* Background gradients */}
        <ScrollGradient 
          colorStart="rgba(79, 70, 229, 0.2)"
          colorEnd="rgba(139, 92, 246, 0.25)"
        />
        <ScrollGradient 
          colorStart="rgba(45, 212, 191, 0.15)"
          colorEnd="rgba(16, 185, 129, 0.15)"
          reverse={true} 
          className="opacity-70" 
        />

        <div className="min-h-screen pt-28 pb-16">
          
          {/* Header con bottone indietro */}
          <section className="pt-8 pb-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <button
                onClick={closeProductDetail}
                className="flex items-center text-accent hover:text-accent/80 font-medium mb-8 group transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Torna ai prodotti
              </button>
            </div>
          </section>

          {/* Dettaglio Prodotto */}
          <section className="py-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className="max-w-6xl mx-auto">
                
                {/* Hero del prodotto */}
                <div className="glass p-8 lg:p-12 rounded-2xl border border-white/10 mb-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contenuto sinistra */}
                    <div>
                      {/* Badge e Status */}
                      <div className="flex items-center gap-4 mb-6">
                        {selectedProductData.featured && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Popolare
                          </div>
                        )}
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          selectedProductData.status === 'available' 
                            ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                            : 'bg-orange-600/20 border border-orange-500/30 text-orange-400'
                        }`}>
                          {selectedProductData.status === 'available' ? 'Disponibile' : 'In Arrivo'}
                        </span>
                      </div>

                      {/* Header con icona */}
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mr-6 text-accent">
                          {selectedProductData.icon}
                        </div>
                        <div>
                          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                            {selectedProductData.name}
                          </h1>
                          <p className="text-accent font-semibold text-xl">
                            {selectedProductData.price}
                          </p>
                        </div>
                      </div>

                      {/* Descrizione */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {selectedProductData.longDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProductData.tags.map((tag, index) => (
                          <span key={index} className="flex items-center text-sm px-3 py-1 bg-white/10 text-gray-300 rounded-lg border border-white/20">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {selectedProductData.status === 'available' ? (
                          <>
                            <Link
                              to="/contact"
                              className="bg-gradient-to-r from-accent to-accent/80 text-white px-12 py-4 rounded-xl font-semibold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 hover:-translate-y-1 shadow-lg inline-flex items-center justify-center group"
                            >
                              Contattaci
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                          </>
                        ) : (
                          <button className="glass border border-orange-500/30 text-orange-400 px-8 py-4 rounded-xl font-semibold cursor-default inline-flex items-center justify-center">
                            <Clock className="w-5 h-5 mr-2" />
                            Prossimamente Disponibile
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Contenuto destra - Immagine o placeholder */}
                    <div>
                      {selectedProductData.image ? (
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
                          <img 
                            src={selectedProductData.image}
                            alt={selectedProductData.name}
                            className="w-full h-80 object-cover rounded-2xl border border-white/10"
                          />
                        </div>
                      ) : (
                        <div className="glass h-80 rounded-2xl border border-white/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 text-accent">
                              {selectedProductData.icon}
                            </div>
                            <p className="text-gray-400">Anteprima Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Caratteristiche e Benefici */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  
                  {/* Caratteristiche */}
                  <div className="glass p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Zap className="w-6 h-6 text-accent mr-3" />
                      Caratteristiche Principali
                    </h2>
                    <div className="space-y-4">
                      {selectedProductData.features?.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefici */}
                  <div className="glass p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Star className="w-6 h-6 text-accent mr-3" />
                      Benefici Chiave
                    </h2>
                    <div className="space-y-4">
                      {selectedProductData.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Footer */}
                <div className="glass p-8 rounded-2xl border border-white/10 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Pronto a trasformare il tuo business?
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Contattaci per una consulenza gratuita e scopri come {selectedProductData.name} può rivoluzionare i tuoi processi aziendali.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-accent to-accent/80 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 hover:-translate-y-1 shadow-lg inline-flex items-center justify-center group"
                    >
                      Inizia Ora - Consulenza Gratuita
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  

  return (
    <>
    <SEO 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonicalUrl={seoData.canonicalUrl}
    />
      {/* Background gradients simili alla Home ma non identici */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.2)"
        colorEnd="rgba(139, 92, 246, 0.25)"
      />
      <ScrollGradient 
        colorStart="rgba(45, 212, 191, 0.15)"
        colorEnd="rgba(16, 185, 129, 0.15)"
        reverse={true} 
        className="opacity-70" 
      />

      <div className="min-h-screen pt-28 pb-16" ref={containerRef}>
        
        {/* Hero Section */}
        <section id="hero-section" className="pt-20 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge sopra il titolo */}
              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-violet-500">
                  Innovazione e Automazione
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-primary">Accelera la crescita aziendale con l'integrazione di</span>
                <span className="block text-accent">soluzioni AI.</span>
              </h1>
              
              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                La nostra suite di prodotti AI è progettata per automatizzare i processi, ridurre i costi operativi e massimizzare il ROI della tua azienda in una frazione del tempo rispetto ai metodi tradizionali.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section className="py-20 container mx-auto px-4 md:px-6 lg:px-12">
          
          {/* Header con ricerca */}
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Esplora i nostri prodotti AI
                <span className="block text-gray-400">progettati per trasformare il tuo business</span>
              </h3>
              
              {/* Barra di ricerca */}
              <div className="max-w-md mx-auto mt-8">
                <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Cerca prodotti, funzionalità, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 glass rounded-xl border border-white/10 text-white placeholder-gray-400 focus:border-accent/50 focus:outline-none transition-colors backdrop-blur-md bg-background/40"
                />
              </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Categorie e Prodotti */}
          <div className="max-w-5xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <ScrollAnimation key={category.id} animation="fadeIn" delay={categoryIndex * 0.1}>
                <div className="mb-16">
                  
                  {/* Header Categoria con linea */}
                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <h2 className="text-3xl font-bold text-white mr-6">{category.name}</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-accent/40 to-transparent"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl">{category.description}</p>
                  </div>
                  
                  
                  {/* Grid Prodotti */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                        className="group relative"
                      >
                        {/* Card del prodotto con elementi decorativi */}
                        <div 
                          className={`backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-6 rounded-2xl border border-white/20 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 h-full flex flex-col relative overflow-hidden ${
                            product.status === 'available' ? 'cursor-pointer' : 'cursor-default'
                          }`}
                          onClick={() => product.status === 'available' ? openProductDetail(product.id) : undefined}
                        >
                          
                          {/* Linea gradiente superiore */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-400 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          
                          {/* Forme decorative */}
                          <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full border border-accent/20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                          <div className="absolute right-4 top-4 w-16 h-16 rounded-full border-2 border-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                          <div className="absolute right-8 top-8 w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500"></div>
                          
                          {/* Pattern di linee decorative */}
                          <div className="absolute top-12 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent">
                              <line x1="5" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <line x1="5" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <line x1="5" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                            </svg>
                          </div>

                          {/* Badge Featured */}
                          {product.featured && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-20">
                              <Star className="w-3 h-3" />
                              Popolare
                            </div>
                          )}

                          {/* Badge Status con posizione aggiornata per evitare sovrapposizioni */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              product.status === 'available' 
                                ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                                : 'bg-orange-600/20 border border-orange-500/30 text-orange-400'
                            }`}>
                              {product.status === 'available' ? 'Disponibile' : 'In Arrivo'}
                            </span>
                          </div>

                          {/* Gradient decorativo migliorato */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-violet-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          {/* Effetto shimmer al hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                          {/* Contenuto principale */}
                          <div className="relative z-10 flex flex-col h-full">
                            
                            {/* Header con icona migliorato */}
                            <div className="flex items-center mb-4 mt-8">
                              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mr-4 text-accent group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                                {product.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">{product.name}</h3>
                              </div>
                            </div>

                            {/* Descrizione */}
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                              {product.description}
                            </p>

                            {/* Tags con stile migliorato */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {product.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded border border-white/20 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                                  {tag}
                                </span>
                              ))}
                              {product.tags.length > 3 && (
                                <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded border border-accent/30 group-hover:bg-accent/30 transition-all duration-300">
                                  +{product.tags.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Footer con prezzo e azione migliorato */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-accent/20 transition-colors duration-300">
                              <div>
                                <span className="text-accent font-semibold text-sm group-hover:text-accent/90">{product.price}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {product.status === 'available' ? (
                                  <div className="flex items-center text-accent hover:text-accent/80 text-sm font-medium group/btn">
                                    Scopri di più
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 group-hover:translate-x-2 transition-transform duration-300" />
                                  </div>
                                ) : (
                                  <div className="flex items-center text-orange-400 text-sm font-medium cursor-default">
                                    <Clock className="w-4 h-4 mr-1" />
                                    Prossimamente
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Glow effect al bottom */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Messaggio se nessun risultato */}
          {filteredCategories.length === 0 && (
            <ScrollAnimation animation="fadeIn">
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Nessun prodotto trovato</h3>
                <p className="text-gray-400 mb-6">Prova a modificare i termini di ricerca.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="glass px-6 py-3 rounded-xl border border-white/10 text-white hover:border-accent/30 transition-colors"
                >
                  Mostra tutti i prodotti
                </button>
              </div>
            </ScrollAnimation>
          )}



        </section>
        
        {/* FAQ Section */}
        <section className="py-16 mt-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge sopra il titolo */}
                <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <span className="text-green-500">
                    Domande Frequenti
                  </span>
                </div>
                <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                  <span className="block text-primary">Hai domande</span>
                  <span className="block text-accent">sui nostri prodotti?</span>
                </h2>
                </div>
                <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                  Risposte alle domande più comuni per aiutarti a scegliere la soluzione più adatta alle tue esigenze
                </p>
              </motion.div>
            </div>
            
            {/* FAQ a due colonne */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
              {[
                {
                  q: "Come funzionano le vostre soluzioni AI?",
                  a: "Le nostre soluzioni utilizzano intelligenza artificiale avanzata per automatizzare processi aziendali complessi. Ogni prodotto è progettato per integrarsi facilmente con i sistemi esistenti e fornire risultati immediati attraverso interfacce intuitive e workflow intelligenti.",
                  icon: <BrainCircuit className="w-5 h-5" />
                },
                {
                  q: "Posso personalizzare i prodotti per le mie esigenze specifiche?",
                  a: "Assolutamente sì. Tutte le nostre soluzioni sono completamente personalizzabili. Offriamo configurazioni su misura, adattamento dei workflow alle tue procedure aziendali e interfacce personalizzate per garantire che ogni strumento si adatti perfettamente al tuo modo di lavorare.",
                  icon: <Workflow className="w-5 h-5" />
                },
                {
                  q: "Che tipo di supporto offrite durante l'implementazione?",
                  a: "Forniamo supporto completo dalla configurazione iniziale fino al go-live. Il nostro team di esperti ti guida attraverso ogni fase dell'implementazione, offre formazione personalizzata e rimane disponibile per assistenza tecnica e ottimizzazioni continue.",
                  icon: <Database className="w-5 h-5" />
                },
                {
                  q: "Quanto tempo richiede tipicamente l'implementazione?",
                  a: "I tempi di implementazione variano in base alla complessità della soluzione e alle specifiche esigenze aziendali. Grazie al nostro approccio modulare e alle integrazioni precostituite, la maggior parte dei progetti viene completata in tempi significativamente ridotti rispetto ai metodi tradizionali.",
                  icon: <Clock className="w-5 h-5" />
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <details className="border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                    <summary className="flex items-center justify-between p-5 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-4 text-accent">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg font-medium">{faq.q}</h3>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground transition-transform group-open:rotate-180">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </summary>
                    
                    <div className="p-5 pt-0">
                      <div className="ml-14 text-foreground/70 border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>

            {/* Domande aggiuntive */}
            {showAllFaqs && (
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 mt-5">
                {[
                  {
                    q: "Le soluzioni si integrano con i sistemi esistenti?",
                    a: "Sì, tutti i nostri prodotti sono progettati per integrarsi facilmente con i sistemi aziendali più comuni. Offriamo connettori precostruiti per le piattaforme più diffuse e API personalizzate per esigenze specifiche di integrazione.",
                    icon: <Cable className="w-5 h-5" />
                  },
                  {
                    q: "Che livello di formazione è necessario per utilizzare i prodotti?",
                    a: "Le nostre soluzioni sono progettate per essere intuitive e facili da usare. Forniamo materiale di formazione completo, sessioni di training personalizzate e documentazione dettagliata per garantire che il tuo team possa utilizzare efficacemente ogni funzionalità.",
                    icon: <Heart className="w-5 h-5" />
                  },
                  {
                    q: "Come viene garantita la sicurezza e privacy dei dati?",
                    a: "Implementiamo i più alti standard di sicurezza con crittografia avanzata, controlli di accesso granulari e conformità alle normative sulla privacy. Tutti i dati sono protetti secondo gli standard internazionali e le migliori pratiche del settore.",
                    icon: <Shield className="w-5 h-5" />
                  },
                  {
                    q: "È possibile combinare più soluzioni insieme?",
                    a: "Certamente. La nostra architettura modulare permette di combinare diversi prodotti per creare un ecosistema integrato. Puoi iniziare con una soluzione e aggiungerne altre nel tempo, mantenendo sempre coerenza e sinergia tra tutti gli strumenti.",
                    icon: <GitBranch className="w-5 h-5" />
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <details className="border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                      <summary className="flex items-center justify-between p-5 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-4 text-accent">
                            {faq.icon}
                          </div>
                          <h3 className="text-lg font-medium">{faq.q}</h3>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground transition-transform group-open:rotate-180">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                        </div>
                      </summary>
                      
                      <div className="p-5 pt-0">
                        <div className="ml-14 text-foreground/70 border-t border-white/10 pt-4">
                          {faq.a}
                        </div>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Toggle FAQ */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="border border-white/10 px-6 py-3 rounded-xl font-semibold text-sm text-foreground bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ListChecks className="w-4 h-4" />
                {showAllFaqs ? 'Nascondi domande aggiuntive' : 'Visualizza tutte le domande'}
              </button>
            </div>
          </div>
        </section>

        {/* CTA Finale - Ispirato alla Home */}
        <section className="py-20 md:py-12 relative overflow-hidden">
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
                    <span className="block text-primary">Soluzioni<span className="text-accent"> personalizzate</span> per il tuo business.</span>
                  </h2>
                
                  <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
                    Il nostro team di esperti è pronto a sviluppare soluzioni su misura per le tue specifiche esigenze aziendali.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Link 
                      to="/contact" 
                      className="border border-accent/40 px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                    >
                      Contattaci
                    </Link>
                    
                    <Link 
                      to="/software-pmi" 
                      className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      Esplora Servizi
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

export default Products;
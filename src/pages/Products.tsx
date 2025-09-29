// src/pages/Products.tsx - Versione migliorata con marketing enhancement
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

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
          description: 'Il tuo assistente virtuale su Telegram integrabile con più di 10000 app',
          longDescription: 'Il primo assistente virtuale italiano che rivoluziona la gestione delle comunicazioni aziendali attraverso Telegram. Integrato con workflow N8n avanzati, automatizza conversazioni complesse, gestisce appuntamenti intelligenti e si integra perfettamente con tutti i tuoi sistemi esistenti. Disponibile 24/7, riduce dell\'80% il carico di lavoro manuale e migliora drasticamente l\'efficienza operativa.',
          icon: <MessageSquare className="w-8 h-8" />,
          tags: ['Telegram', 'N8n', 'Workflow', 'Appuntamenti'],
          price: '€110/mese',
          status: 'available',
          featured: false,
          forever: false,
          subscription: true,
          customSetup: true,
          discount: null, // Nuovo campo per gestire gli sconti
          image: 'https://i.imgur.com/BJRduao.jpeg',
          features: [
            'Gestione conversazioni intelligente con modello AI a scelta',
            'Totalmente customizzabile con integrazioni a piacere',
            'Per ogni nuova integrazione c\'è un costo di setup una tantum',
            'Sistema basato su MCP',
            'Integrabilità con CRM e sistemi aziendali',
          ],
          benefits: [
            'Hai il tuo Agente AI sempre attivo su Telegram',
            'Scegli tu cosa integrare',
            'Google Calendar e Gmail integrati senza costi aggiuntivi',
            'Tutta la comodità della UI Telegram'
          ]
        },
        {
          id: 7,
          name: 'DM ChatBot Instagram',
          description: 'Un assistente virtuale che gestisce i DM Instagram in modo autonomo',
          longDescription: 'Assistente virtuale AI che trasforma i DM Instagram in un canale di vendita automatizzato. Risponde istantaneamente alle richieste ed è totalmente personalizzabile per rispecchiare il tono del brand, oltre che integrabile con oltre 10000 app, inclusi CRM e applicazioni custom a codice',
          icon: <Bot className="w-8 h-8" />,
          tags: ['Sales', 'Instagram', 'Meta', 'ChatBot'],
          price: 'da €/mese',
          status: 'coming-soon',
          featured: false,
          forever: false,
          subscription: false,
          customSetup: false,
          discount: null,
          features: [
            'ChatBot AI avanzato con modello AI a scelta',
            'CRM bidirezionale integrabile (costo a parte)',
            'Addestramento specializzato sul tuo settore e tone of voice personalizzato',
            'Memoria conversazionale per interazioni più naturali',
            'Tutta la potenza di n8n per integrazioni con 10000+ app',
          ],
          benefits: [
            'Aumento lead qualificati',
            'Offri un\'esperienza cliente professionale',
            'Risparmia tempo con risposte automatiche'
          ]
        },
        {
          id: 9,
          name: 'DM ChatBot Whatsapp',
          description: 'Un assistente virtuale che gestisce i tuoi contatti su whatsapp in modo autonomo',
          longDescription: 'Un assistente AI perfetto per gestire conversazioni o ordinazioni tramite la piattaforma Whatsapp. Addestramento personalizzato per rispecchiare il tono del brand, oltre che integrabile con oltre 10000 app, inclusi CRM e applicazioni custom a codice',
          icon: <Bot className="w-8 h-8" />,
          tags: ['Sales', 'Whatsapp', 'Meta', 'ChatBot'],
          price: 'da €/mese',
          status: 'coming-soon',
          featured: false,
          forever: false,
          subscription: false,
          customSetup: false,
          discount: null,
          features: [
            'ChatBot AI avanzato con modello AI a scelta',
            'CRM bidirezionale integrabile (costo a parte)',
            'Addestramento specializzato sul tuo settore e tone of voice personalizzato',
            'Memoria conversazionale per interazioni più naturali',
          ],
          benefits: [
            'Aumento lead qualificati',
            'Offri un\'esperienza cliente professionale',
            'Risparmia tempo con risposte automatiche'
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
          forever: false,
          subscription: false,
          customSetup: false,
          discount: null,
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
          id: 2,
          name: 'Wordpress AutoBlog AI',
          description: 'Un generatore AI di post wordpress già pronti in bozza per la pubblicazione, accessibile tramite una tua UI personale',
          longDescription: 'Scopri il nostro generatore AI di post per WordPress, alimentato da GPT-4. Automatizza la creazione di contenuti di alta qualità mantenendo il controllo della pubblicazione. Accedi alla tua interfaccia personalizzabile dalla quale gestire tutto il processo.',
          icon: <Bot className="w-8 h-8" />,
          tags: ['AI Blog', 'Wordpress Blog', 'Marketing', 'Post Wordpress'],
          price: '€4000',
          originalPrice: '€5000', // Prezzo originale per mostrare lo sconto
          status: 'available',
          featured: true,
          forever: true,
          subscription: false,
          customSetup: false,
          discount: { percentage: 20, label: 'Offerta Lancio' }, // Nuovo campo sconto
          features: [
            'Generazione automatica di 3+ di articoli Wordpress per volta',
            'Interfaccia dedicata per gestione generazione',
            'Gestione semplificata delle URL autorevoli',
            'Blacklist per URL non desiderate',
            'Generazione automatica di immagini con DALL-E 3',
            'Su richiesta, disponibile versione premium con autogenerazione delle query di ricerca'
          ],
          benefits: [
            'SetUp della tua UI personale a codice',
            'Setup della tua VPS dedicata (per sempre tua)',
            'Riduzione 80% dei tempi di creazione contenuti',
            'Controllo totale sugli articoli pubblicati',
            '1 prompt per 3+ post già pronti su wordpress',
            'Gestione semplificata dei link corretti'
          ]
        },
        {
          id: 3,
          name: 'Lead Generation System: Google Maps + Email Scraper',
          description: 'Automazione per processi aziendali complessi',
          longDescription: 'Soluzione automatizzata che estrae lead qualificati direttamente da Google Maps, trasformando ricerche geografiche in database commerciali completi. Recupera automaticamente nomi aziende, indirizzi, telefoni ed email verificate da siti web e directory. Targeting per area geografica e settore, eliminazione duplicati intelligente ed export multi-formato. Interface intuitiva e risultati immediati per venditori B2B, agenzie marketing e startup.',
          icon: <Workflow className="w-8 h-8" />,
          tags: ['Workflow', 'Automation', 'Integrations', 'AI'],
          price: 'da €/mese',
          status: 'coming-soon',
          featured: false,
          forever: false,
          subscription: false,
          customSetup: false,
          discount: null,
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
          name: 'AI StockManager',
          description: 'Workflow intelligente per la gestione dell\'inventario e degli ordini di rifornimento',
          longDescription: 'Soluzione di gestione dell\'inventario intelligente, pensata per Hotel e Ristoranti per gestire ordini di rifornimento, ma adattabile facilmente ad altri contesti. Basata su un sistema di ordinazione di nuovi prodotti tramite un\' account gmail, dotato di riconoscimento degli ordini automatico grazie alla potenza di GPT e calcolo automatico del prodotto migliore in inventario.',
          icon: <Database className="w-8 h-8" />,
          tags: ['Stock Management', 'Orders', 'Google Sheets', 'Workflow'],
          price: '€1700',
          status: 'available',
          featured: false,
          forever: true,
          subscription: false,
          customSetup: true,
          discount: null,
          features: [
            'Ricezione ordini nuovi prodotti tramite account gmail',
            'Riconoscimento AI dei prodotti ordinati',
            'Estrazione dati strutturati via AI',
            'Generazione PDF per ordini a fornitori e magazzinieri',
            'Calcolo automatico del prodotto con prezzo migliore in inventario',
            'UI Google Sheets',
            'Per ogni nuova integrazione c\'è un costo di setup una tantum'
          ],
          benefits: [
            'Automatizza la gestione dei nuovi ordini di rifornimento',
            'Integrabile con altri sistemi e gestionali esistenti',
            'Riconoscimento AI dei prodotti ordinati',
            'Facile da usare con UI Google Sheets e Gmail'
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
          description: 'Micro gestionale per la classificazione dei rifiuti',
          longDescription: 'Micro gestionale per la classificazione rifiuti, in Electron e con database sostanze sul tuo pc progettato per semplificare il processo di assegnazione delle caratteristiche di pericolo HP',
          icon: <Database className="w-8 h-8" />,
          tags: ['Analytics', 'Dashboard', 'Waste Analysis', 'Reports'],
          price: '€7000',
          status: 'available',
          featured: false,
          forever: true,
          subscription: false,
          customSetup: false,
          discount: null,
          features: [
            'Dashboard per gestione delle sostanze',
            'Database facile da gestire localmente sul tuo pc (SQLite)',
            'Importazione del campione con un semplice file excel',
            'File ECHA per sostanze armonizzate importabile',
            'Generazione report word per ogni classificazione',
            'Assegnazione sali per gestione dei metalli',
            'Eseguibile su Windows e MacOS',
            'Alerting intelligente'
          ],
          benefits: [
            'Calcoli di classificazione precisi con più di 4K righe di codice python',
            'Dashboard semplice ed intuitiva',
            'Classificazione in blocco di tutto il campione con 1 click',
            'Miglioramento forecasting accuracy del 40%'
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
          forever: false,
          subscription: false,
          customSetup: false,
          discount: null,
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
  // Forza la presenza della proprietà image su tutti i prodotti (anche se null)
  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryName: category.name,
      image: 'image' in product ? product.image : null
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
        {/* Background gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
        </div>

        <div className="min-h-screen pt-28 pb-16 relative">
          
          {/* Header con bottone indietro */}
          <section className="pt-8 pb-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <button
                onClick={closeProductDetail}
                className="flex items-center text-[#3ECF8E] hover:text-[#3ECF8E]/80 font-medium mb-8 group transition-colors"
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
                
                {/* Hero del prodotto - SENZA etichetta sconto in alto */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-8 lg:p-12 rounded-2xl border border-white/10 mb-8">

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contenuto sinistra */}
                    <div>
                      {/* Badge Il Più Venduto - Solo per featured */}
                      {selectedProductData.featured && (
                        <div className="mb-6 inline-block">
                          <div className="relative">
                            {/* Glow dorato */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                            
                            {/* Badge principale */}
                            <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
                              <Award className="w-5 h-5" />
                              <span className="font-black text-sm uppercase tracking-wide">Il Più Venduto</span>
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Badge e Status */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        {selectedProductData.forever && (
                          <span className="bg-slate-600/20 border border-slate-500/30 text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                            Forever
                          </span>
                        )}
                        {selectedProductData.subscription && (
                          <span className="bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                            Abbonamento
                          </span>
                        )}
                        {selectedProductData.customSetup && (
                          <span className="bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-bold px-3 py-1 rounded-full">
                            Setup Personalizzato
                          </span>
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
                        <div className="w-16 h-16 rounded-2xl bg-[#3ECF8E]/20 flex items-center justify-center mr-6 text-[#3ECF8E]">
                          {selectedProductData.icon}
                        </div>
                        <div>
                          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                            {selectedProductData.name}
                          </h1>
                          
                          {/* Prezzo con sconto */}
                          <div className="flex items-center gap-3">
                            {selectedProductData.discount && selectedProductData.originalPrice ? (
                              <>
                                <span className="text-gray-500 line-through text-lg">{selectedProductData.originalPrice}</span>
                                <span className="text-[#3ECF8E] font-bold text-2xl">{selectedProductData.price}</span>
                              </>
                            ) : (
                              <span className="text-[#3ECF8E] font-semibold text-xl">{selectedProductData.price}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Callout "Compra una volta, tuo per sempre" per prodotti Forever */}
                      {selectedProductData.forever && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <p className="text-emerald-400 font-bold text-lg">Compra una volta, tuo per sempre.</p>
                              <p className="text-emerald-300/70 text-sm">Nessun canone mensile, nessun costo ricorrente</p>
                            </div>
                          </div>
                        </div>
                      )}

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
                            <a
                              href="/contact"
                              className="bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 text-white px-12 py-4 rounded-xl font-semibold hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg inline-flex items-center justify-center group"
                            >
                              Contattaci
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </>
                        ) : (
                          <button className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-orange-500/30 text-orange-400 px-8 py-4 rounded-xl font-semibold cursor-default inline-flex items-center justify-center">
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
                          <div className="absolute inset-0 bg-gradient-to-br from-[#3ECF8E]/20 to-transparent rounded-2xl"></div>
                          <img 
                            src={selectedProductData.image}
                            alt={selectedProductData.name}
                            className="w-full h-80 object-cover rounded-2xl border border-white/10"
                          />
                        </div>
                      ) : (
                        <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 h-80 rounded-2xl border border-white/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-[#3ECF8E]/20 flex items-center justify-center mx-auto mb-4 text-[#3ECF8E]">
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
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Zap className="w-6 h-6 text-[#3ECF8E] mr-3" />
                      Caratteristiche Principali
                    </h2>
                    <div className="space-y-4">
                      {selectedProductData.features?.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#3ECF8E] mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefici */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Star className="w-6 h-6 text-[#3ECF8E] mr-3" />
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
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-8 rounded-2xl border border-white/10 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Pronto a trasformare il tuo business?
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Contattaci per una consulenza gratuita e scopri come {selectedProductData.name} può rivoluzionare i tuoi processi aziendali.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg inline-flex items-center justify-center group"
                    >
                      Inizia Ora - Consulenza Gratuita
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
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
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
      </div>

      <div className="min-h-screen pt-28 pb-16 relative" ref={containerRef}>
        
        {/* Hero Section */}
        <section id="hero-section" className="pt-20 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-3 md:px-4 py-1 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-violet-500">
                  Innovazione e Automazione
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-white">Accelera la crescita aziendale con l'integrazione di</span>
                <span className="block text-[#3ECF8E]">soluzioni AI.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                La nostra suite di prodotti AI è progettata per automatizzare i processi, ridurre i costi operativi e massimizzare il ROI della tua azienda in una frazione del tempo rispetto ai metodi tradizionali.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Legenda Badge */}
        <section className="py-8 container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-6 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legenda Prodotti</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Popolare
                </span>
                <span className="text-sm text-gray-400">Più richiesto</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="bg-slate-600/20 border border-slate-500/30 text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                  Forever
                </span>
                <span className="text-sm text-gray-400">Acquisto una tantum</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                  Abbonamento
                </span>
                <span className="text-sm text-gray-400">Canone mensile</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-bold px-3 py-1 rounded-full">
                  Setup Personalizzato
                </span>
                <span className="text-sm text-gray-400">Configurazione su misura disponibile</span>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section className="py-20 container mx-auto px-4 md:px-6 lg:px-12">
          
          {/* Header con ricerca */}
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
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-xl border border-white/10 text-white placeholder-gray-400 focus:border-[#3ECF8E]/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Categorie e Prodotti */}
          <div className="max-w-5xl mx-auto">
            {filteredCategories.map((category) => (
              <div key={category.id} className="mb-16">
                
                {/* Header Categoria con linea */}
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <h2 className="text-3xl font-bold text-white mr-6">{category.name}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-[#3ECF8E]/40 to-transparent"></div>
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
                      {/* Card del prodotto */}
                      <div 
                        className={`backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-7 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3ECF8E]/20 h-full flex flex-col relative overflow-hidden ${
                          product.status === 'available' ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={() => product.status === 'available' ? openProductDetail(product.id) : undefined}
                      >
                        
                        {/* Etichetta Sconto rimossa dall'alto - ora va in basso */}

                        {/* Linea gradiente superiore */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-400 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>

                        {/* Badge multipli */}
                        <div className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end z-20 max-w-[60%]">
                          {product.featured && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Popolare
                            </span>
                          )}
                          {product.forever && (
                            <span className="bg-slate-600/20 border border-slate-500/30 text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                              Forever
                            </span>
                          )}
                          {product.subscription && (
                            <span className="bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full">
                              Abbonamento
                            </span>
                          )}
                          {product.customSetup && (
                            <span className="bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-bold px-2 py-1 rounded-full">
                              Setup
                            </span>
                          )}
                        </div>

                        {/* Badge Status */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            product.status === 'available' 
                              ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                              : 'bg-orange-600/20 border border-orange-500/30 text-orange-400'
                          }`}>
                            {product.status === 'available' ? 'Disponibile' : 'In Arrivo'}
                          </span>
                        </div>

                        {/* Contenuto principale */}
                        <div className="relative z-10 flex flex-col h-full">
                          
                          {/* Header con icona */}
                          <div className="flex items-center mb-4 mt-8">
                            <div className="w-12 h-12 rounded-xl bg-[#3ECF8E]/20 flex items-center justify-center mr-4 text-[#3ECF8E] group-hover:bg-[#3ECF8E]/30 transition-all duration-300 group-hover:scale-110">
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

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {product.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded border border-white/20 group-hover:border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/10 transition-all duration-300">
                                {tag}
                              </span>
                            ))}
                            {product.tags.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-[#3ECF8E]/20 text-[#3ECF8E] rounded border border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/30 transition-all duration-300">
                                +{product.tags.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Footer con prezzo O offerta speciale */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-[#3ECF8E]/20 transition-colors duration-300">
                            
                            {/* Sezione Sinistra: Prezzo o Offerta Speciale */}
                            <div className="flex-1">
                              {product.discount && product.originalPrice ? (
                                // OFFERTA SPECIALE - Sostituisce il prezzo
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide">
                                      🔥 Offerta Speciale
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                                    <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                                      {product.price}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                // Prezzo normale
                                <span className="text-[#3ECF8E] font-semibold text-sm group-hover:text-[#3ECF8E]/90">
                                  {product.price}
                                </span>
                              )}
                            </div>

                            {/* Sezione Destra: Pulsante Scopri di più */}
                            <div className="flex items-center gap-2">
                              {product.status === 'available' ? (
                                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-bold shadow-lg hover:shadow-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center group/btn">
                                  Scopri di più
                                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Messaggio se nessun risultato */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Nessun prodotto trovato</h3>
              <p className="text-gray-400 mb-6">Prova a modificare i termini di ricerca.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 px-6 py-3 rounded-xl border border-white/10 text-white hover:border-[#3ECF8E]/30 transition-colors"
              >
                Mostra tutti i prodotti
              </button>
            </div>
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
                <div className="inline-block px-3 md:px-4 py-1 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <span className="text-green-500">
                    Domande Frequenti
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
                    <span className="block text-white">Hai domande</span>
                    <span className="block text-[#3ECF8E]">sui nostri prodotti?</span>
                  </h2>
                </div>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
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
                        <div className="w-10 h-10 rounded-lg bg-[#3ECF8E]/20 flex items-center justify-center mr-4 text-[#3ECF8E]">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg font-medium text-white">{faq.q}</h3>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform group-open:rotate-180">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </summary>
                    
                    <div className="p-5 pt-0">
                      <div className="ml-14 text-gray-300 border-t border-white/10 pt-4">
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
                          <div className="w-10 h-10 rounded-lg bg-[#3ECF8E]/20 flex items-center justify-center mr-4 text-[#3ECF8E]">
                            {faq.icon}
                          </div>
                          <h3 className="text-lg font-medium text-white">{faq.q}</h3>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform group-open:rotate-180">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                        </div>
                      </summary>
                      
                      <div className="p-5 pt-0">
                        <div className="ml-14 text-gray-300 border-t border-white/10 pt-4">
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
                className="border border-white/10 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ListChecks className="w-4 h-4" />
                {showAllFaqs ? 'Nascondi domande aggiuntive' : 'Visualizza tutte le domande'}
              </button>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-20 md:py-12 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8">
                  <span className="block text-white">Soluzioni<span className="text-[#3ECF8E]"> personalizzate</span> per il tuo business.</span>
                </h2>
              
                <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
                  Il nostro team di esperti è pronto a sviluppare soluzioni su misura per le tue specifiche esigenze aziendali.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                  <a 
                    href="/contact" 
                    className="border border-[#3ECF8E]/40 px-6 py-3 rounded-xl font-semibold text-sm text-[#3ECF8E] bg-[#3ECF8E]/30 hover:bg-[#3ECF8E]/40 hover:border-[#3ECF8E]/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                  >
                    Contattaci
                  </a>
                  
                  <a 
                    href="/software-pmi" 
                    className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300"
                  >
                    Esplora Servizi
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
// src/pages/Products.tsx - Versione completa con stile Home e slider migliorato
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, 
  Shield, Users, ChevronRight, 
  MessageSquare, ListChecks, Clock,
  Cable, Workflow, 
  GitBranch, Table,
  Heart, 
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('products'); 

const Products = () => {
  // Refs e stati
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
        
        {/* Hero Section - Ispirato alla Home ma con contenuti diversi */}
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
          <span className="text-green-500">
            Innovazione e Automazione
          </span>
        </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-primary">Accelera la crescita aziendale con l'integrazione di
                <span className="block text-accent">soluzioni AI.</span></span>
                
              </h1>
              
              <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                La nostra suite di prodotti AI è progettata per automatizzare i processi, ridurre i costi operativi e massimizzare il ROI della tua azienda in una frazione del tempo rispetto ai metodi tradizionali.
              </p>
            </motion.div>
          </div>
        </section>
      

{/* Selettore prodotti e showcase */}
<section className="py-20 container mx-auto mt-20 px-4 md:px-6 lg:px-12">
  
  {/* Header con titolo principale */}
  <ScrollAnimation animation="fadeIn">
    <div className="text-center mb-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Accelera il tuo business con soluzioni AI 
        <span className="block text-gray-400">senza mai lasciare la tua dashboard preferita</span>
      </h3>
    </div>
  </ScrollAnimation>

  {/* Bottoni di selezione prodotti - Più piccoli e grigio diverso */}
  <ScrollAnimation animation="slideUp" delay={0.1}>
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {[
        { id: 'telegram', name: 'SegretarioAI Telegram', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'crm', name: 'AI CRM', icon: <Users className="w-4 h-4" /> },
        { id: 'excel', name: 'Excel Lead Generator', icon: <Table className="w-4 h-4" /> },
        { id: 'healthcare', name: 'Healthcare Assistant', icon: <Heart className="w-4 h-4" /> }
      ].map((product) => (
        <button
          key={product.id}
          onClick={() => setActiveProduct(product.id === 'telegram' ? 0 : product.id === 'crm' ? 1 : product.id === 'excel' ? 2 : 3)}
          className={`px-5 py-2.5 rounded-full font-medium text-xs transition-all duration-300 flex items-center gap-2 border ${
            (activeProduct === 0 && product.id === 'telegram') ||
            (activeProduct === 1 && product.id === 'crm') ||
            (activeProduct === 2 && product.id === 'excel') ||
            (activeProduct === 3 && product.id === 'healthcare')
              ? 'bg-transparent border-white text-white' 
              : 'bg-transparent border-gray-500 text-gray-500 hover:border-white hover:text-white'
          }`}
        >
          {product.icon}
          <span>{product.name}</span>
        </button>
      ))}
    </div>
  </ScrollAnimation>

  {/* NUOVO Container wrapper applicazione */}
  <ScrollAnimation animation="fadeIn" delay={0.2}>
    <div className="relative max-w-6xl mx-auto">
      
      {/* Container esterno - Wrapper applicazione */}
      <div className=" backdrop-blur-sm border border-gray-500 rounded-2xl overflow-hidden">
                <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl"></div>

        
        {/* Header applicazione con 3 dot grigi */}
        <div className="flex items-center justify-between px-6 py-3  border-gray-700/50">
          <div className="flex items-center gap-3">
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          </div>
        </div>

        {/* Container prodotto dinamico - ESISTENTE non modificato */}
        <div className="relative max-w-6xl mr-6 ml-6 mb-8">
          
          
          {/* SegretarioAI Telegram */}
          {activeProduct === 0 && (
            <div className="bg-transparent backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 min-h-[500px] relative">
              
              {/* Contenuto centrale */}
              <div className="p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  
                  
                  {/* Descrizione centrale */}
                  <p className="text-white text-base leading-relaxed mb-12 max-w-3xl mx-auto">
                    Il primo assistente virtuale italiano che rivoluziona la gestione delle comunicazioni aziendali attraverso Telegram. 
                    Integrato con workflow N8n avanzati, automatizza conversazioni complesse, gestisce appuntamenti intelligenti 
                    e si integra perfettamente con tutti i tuoi sistemi esistenti. Disponibile 24/7, riduce dell'80% il carico 
                    di lavoro manuale e migliora drasticamente l'efficienza operativa.  
                   <span className='block pt-4'> A parire da <span className="text-sm font-bold text-violet-500">€147/mese</span> </span>
                  </p>
                 

                  {/* Tick funzionalità - Inserire dopo la descrizione e prima dell'immagine */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      {/* Per SegretarioAI Telegram */}
                      {activeProduct === 0 && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>Gestione Conversazioni</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>Workflow N8n</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>Appuntamenti Automatici</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>Disponibilità 24/7</span>
                          </div>
                        </>
                      )}
                      </div>
                  
                  {/* Immagine reale centrale */}
                  <div className="flex justify-center mb-8">
                    <div className="w-100% max-w-600 max-h-400 h-400">
                       {/* Top gradient border verde */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-300 to-black-400"></div>
                      <img 
                        src="https://i.imgur.com/BJRduao.jpeg" 
                        alt="SegretarioAI Telegram Interface"
                        className="w-full h-400 object-cover rounded-xl opacity-70 border border-violet-600"
                      />
                    </div>              
                  </div>
                </div>
              </div>
            </div>
          )}
          

          {/* AI CRM */}
          {activeProduct === 1 && (
            <div className="bg-transparent backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 min-h-[500px] relative">
              
              {/* Contenuto centrale */}
              <div className="p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Descrizione centrale */}
                  <p className="text-white text-base leading-relaxed mb-12 max-w-3xl mx-auto">
                    Sistema CRM di nuova generazione che sfrutta algoritmi di machine learning avanzati per rivoluzionare 
                    il processo di vendita. Qualifica automaticamente i lead con precisione chirurgica, prevede le conversioni 
                    con accuratezza del 92% e ottimizza l'intera pipeline commerciale. Integra fonti dati multiple e fornisce 
                    insights predittivi che aumentano le conversioni del 45%.
                  </p>
                 

                  {/* Tick funzionalità */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Lead Qualification</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Insights Predittivi</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Automazione Pipeline</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Integrazione Multi-fonte</span>
                    </div>
                  </div>

                  {/* Riquadro "In Arrivo" - Sostituisce l'immagine */}
                  <div className="flex justify-center mb-8">
                    {/* Top gradient border verde */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-300 to-black-400"></div>
                    <div className="w-full max-w-md  from-green-900/20 to-green-800/20 border border-green-600/40 rounded-xl p-8 text-center backdrop-blur-sm">   
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                          In Arrivo
                        </span>
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-3">
                        Sei interessato al prodotto?
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Contattaci per ulteriori informazioni sulle tempistiche
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            
            </div>
          )}

          {/* Excel Lead Generator */}
          {activeProduct === 2 && (
            <div className="bg-transparent backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 min-h-[500px] relative">
              
              {/* Contenuto centrale */}
              <div className="p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Descrizione centrale */}
                  <p className="text-white text-base leading-relaxed mb-12 max-w-3xl mx-auto">
                    Trasforma i tuoi semplici fogli Excel in potenti motori di lead generation attraverso algoritmi di machine learning. 
                    Arricchisce automaticamente i dati dei contatti con informazioni validate in tempo reale, calcola score di 
                    qualificazione personalizzabili e integra tutto con i tuoi sistemi CRM esistenti. Processa oltre 10.000 contatti 
                    all'ora con accuratezza dell'85%, migliorando la qualità dei lead del 70%.
                  </p>
                 

                  {/* Tick funzionalità */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Arricchimento Dati</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Scoring Qualificazione</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Integrazione CRM</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Processing 10K/ora</span>
                    </div>
                  </div>

                  {/* Riquadro "In Arrivo" - Sostituisce l'immagine */}
                  <div className="flex justify-center mb-8">
                  {/* Top gradient border verde */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-300 to-black-400"></div>
                    <div className="w-full max-w-md  from-green-900/20 to-green-800/20 border border-green-600/40 rounded-xl p-8 text-center backdrop-blur-sm">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                          In Arrivo
                        </span>
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-3">
                        Sei interessato al prodotto?
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Contattaci per ulteriori informazioni sulle tempistiche
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            
            </div>
          )}

          {/* Healthcare Assistant */}
          {activeProduct === 3 && (
            <div className="bg-transparent backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 min-h-[500px] relative">
              
              {/* Contenuto centrale */}
              <div className="p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Descrizione centrale */}
                  <p className="text-white text-base leading-relaxed mb-12 max-w-3xl mx-auto">
                    Assistente AI specializzato per il settore sanitario, progettato con rigorosa compliance GDPR e standard medicali. 
                    Gestisce automaticamente prenotazioni, triaging intelligente e supporto decisionale clinico. Integrato con sistemi 
                    ospedalieri esistenti, riduce i tempi di attesa del 60% e migliora l'accuratezza diagnostica. Supporta protocolli 
                    sanitari europei con crittografia medicale certificata ISO 27001.
                  </p>
                 

                  {/* Tick funzionalità */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Compliance GDPR</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Triaging Intelligente</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Supporto Clinico</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-grey-500/20 border border-white-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>ISO 27001 Certified</span>
                    </div>
                  </div>

                  {/* Riquadro "In Arrivo" - Sostituisce l'immagine */}
                  <div className="flex justify-center mb-8">
                    {/* Top gradient border verde */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-300 to-black-400"></div>
                    <div className="w-full max-w-md  from-green-900/20 to-green-800/20 border border-green-600/40 rounded-xl p-8 text-center backdrop-blur-sm">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                          In Arrivo
                        </span>
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-3">
                        Sei interessato al prodotto?
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Contattaci per ulteriori informazioni sulle tempistiche
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            
            </div>
          )}

        </div>
      </div>
      
    </div>
  </ScrollAnimation>

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
                  q: "Quale soluzione è più adatta per l'automazione dei processi aziendali?",
                  a: "SegretarioAI Telegram è ideale per automatizzare la comunicazione e gestione appuntamenti, mentre AI CRM ottimizza l'intero processo di vendita. Entrambi operano 24/7 e si integrano perfettamente con i tuoi workflow esistenti.",
                  icon: <BrainCircuit className="w-5 h-5" />
                },
                {
                  q: "Posso personalizzare le funzionalità delle soluzioni?",
                  a: "Assolutamente sì. Tutte le nostre soluzioni sono completamente personalizzabili in base alle esigenze specifiche della tua azienda. Offriamo configurazione su misura, dashboard personalizzate e workflow adattabili, senza compromettere le performance o la semplicità d'uso.",
                  icon: <Workflow className="w-5 h-5" />
                },
                {
                  q: "Come funziona l'Excel Lead Generator?",
                  a: "Excel Lead Generator trasforma i tuoi fogli di calcolo in potenti strumenti di vendita. Arricchisce automaticamente i dati dei contatti, calcola score di qualificazione e integra tutto con il tuo CRM per un flusso di lavoro ottimizzato.",
                  icon: <Table className="w-5 h-5" />
                },
                {
                  q: "Quanto tempo richiede l'implementazione delle soluzioni?",
                  a: "Le nostre soluzioni vengono implementate in 2-4 settimane, un tempo significativamente inferiore rispetto ai 3-6 mesi richiesti dai metodi tradizionali. Questo è possibile grazie al nostro approccio AI-first, alle integrazioni precostituite e a un team di esperti dedicati che ti guida in ogni fase del processo.",
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
                    q: "Come si integra AI CRM con i sistemi esistenti?",
                    a: "AI CRM offre API RESTful e connettori predefiniti per tutti i principali sistemi gestionali e CRM esistenti. Il processo di integrazione è gestito dal nostro team tecnico, che configura sincronizzazioni bidirezionali per garantire coerenza dei dati.",
                    icon: <Cable className="w-5 h-5" />
                  },
                  {
                    q: "Quali garanzie offrite per BioMed AI in ambito sanitario?",
                    a: "BioMed AI rispetta tutti gli standard sanitari internazionali, implementa crittografia medicale certificata e garantisce conformità completa a GDPR e normative sanitarie. Offriamo supporto specializzato per il settore medicale 24/7.",
                    icon: <Heart className="w-5 h-5" />
                  },
                  {
                    q: "Come garantite la sicurezza dei dati?",
                    a: "Implementiamo crittografia end-to-end a 256 bit, autenticazione multi-fattore e controlli granulari degli accessi. Tutti i dati sono archiviati in data center certificati ISO 27001, con backup continui e conformità completa a GDPR.",
                    icon: <Shield className="w-5 h-5" />
                  },
                  {
                    q: "È possibile iniziare con una soluzione e aggiungerne altre?",
                    a: "Assolutamente. La nostra piattaforma è modulare e scalabile, progettata per crescere con la tua azienda. Puoi iniziare con la soluzione che risponde alle tue esigenze più urgenti e aggiungerne altre quando necessario.",
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
                      to="/services" 
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
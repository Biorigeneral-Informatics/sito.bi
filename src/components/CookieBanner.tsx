// src/components/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Cookie, Shield, BarChart, Zap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

// Classe per gestire i cookie in modo sicuro
class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences | null = null;
  private scriptsLoaded: Set<string> = new Set();

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Carica le preferenze salvate
  loadPreferences(): CookiePreferences | null {
    try {
      const saved = localStorage.getItem('cookieConsent');
      if (saved) {
        this.preferences = JSON.parse(saved);
        return this.preferences;
      }
    } catch (error) {
      console.error('Errore nel caricamento preferenze cookie:', error);
    }
    return null;
  }

  // Salva le preferenze e applica i cookie
  setPreferences(prefs: CookiePreferences) {
    this.preferences = prefs;
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    this.applyCookieSettings(prefs);
  }

  // Applica effettivamente le impostazioni dei cookie
  private applyCookieSettings(prefs: CookiePreferences) {
    // 1. COOKIE ANALYTICS (Google Analytics, etc.)
    if (prefs.analytics && !this.scriptsLoaded.has('analytics')) {
      this.loadAnalytics();
      this.scriptsLoaded.add('analytics');
    } else if (!prefs.analytics) {
      this.blockAnalytics();
    }

    // 2. COOKIE FUNZIONALI (Chat, Preferenze UI, etc.)
    if (prefs.functional && !this.scriptsLoaded.has('functional')) {
      this.loadFunctionalCookies();
      this.scriptsLoaded.add('functional');
    } else if (!prefs.functional) {
      this.blockFunctionalCookies();
    }

    // 3. COOKIE NECESSARI (sempre attivi)
    this.loadNecessaryCookies();
  }

  // Carica Google Analytics
  private loadAnalytics() {
    console.log('🟢 Caricamento Google Analytics...');
    
    // Sostituisci 'GA_MEASUREMENT_ID' con il tuo ID reale
    const GA_ID = 'G-XXXXXXXXXX'; // <-- INSERISCI IL TUO ID QUI
    
    // Carica lo script di Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Inizializza Google Analytics
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID);
      
      // Rendi gtag disponibile globalmente
      (window as any).gtag = gtag;
    };
  }

  // Blocca/Rimuove Google Analytics
  private blockAnalytics() {
    console.log('Blocco Google Analytics...');
    
    // Rimuovi script di Google Analytics
    const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
    scripts.forEach(script => script.remove());
    
    // Cancella dati di Google Analytics
    if (typeof (window as any).gtag === 'function') {
      // Disabilita Google Analytics
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    // Rimuovi cookie di Google Analytics
    this.deleteCookiesByPattern('_ga');
    this.deleteCookiesByPattern('_gid');
    this.deleteCookiesByPattern('_gat');
  }

  // Carica cookie funzionali
  private loadFunctionalCookies() {
    console.log('Caricamento cookie funzionali...');
    
    // Esempi di cookie funzionali:
    
    // 1. Preferenze tema
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // 2. Chat widget (esempio)
    // this.loadChatWidget();
    
    // 3. Preferenze lingua
    // this.loadLanguagePreferences();
  }

  // Blocca cookie funzionali
  private blockFunctionalCookies() {
    console.log('Blocco cookie funzionali...');
    
    // Rimuovi widget di chat
    const chatWidget = document.querySelector('#chat-widget');
    if (chatWidget) {
      chatWidget.remove();
    }
    
    // Rimuovi altri cookie funzionali
    this.deleteCookiesByPattern('user_prefs');
    this.deleteCookiesByPattern('chat_');
  }

  // Carica sempre i cookie necessari
  private loadNecessaryCookies() {
    console.log('Cookie necessari sempre attivi');
    
    // Cookie per sicurezza, autenticazione, carrello, etc.
    // Questi sono sempre permessi dalla legge
  }

  // Elimina cookie per pattern
  private deleteCookiesByPattern(pattern: string) {
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      const [name] = cookie.trim().split('=');
      if (name.includes(pattern)) {
        // Elimina il cookie impostando una data passata
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });
  }

  // Verifica se il consenso è già stato dato
  hasConsent(): boolean {
    return this.preferences !== null;
  }

  // Ottieni le preferenze correnti
  getPreferences(): CookiePreferences | null {
    return this.preferences;
  }
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
  });

  const cookieManager = CookieManager.getInstance();

  // Verifica all'avvio se le preferenze sono già state impostate
  useEffect(() => {
    const savedPreferences = cookieManager.loadPreferences();
    
    if (!savedPreferences) {
      // Se non esiste il consenso, mostra il banner
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Carica le preferenze salvate e applica i cookie
      setPreferences(savedPreferences);
      cookieManager.setPreferences(savedPreferences);
    }
  }, []);

  // Funzione per accettare tutti i cookie
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
    };
    setPreferences(allAccepted);
    cookieManager.setPreferences(allAccepted);
    setIsVisible(false);
  };

  // Funzione per rifiutare tutti i cookie tranne quelli necessari
  const rejectNonEssential = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    cookieManager.setPreferences(onlyNecessary);
    setIsVisible(false);
  };

  // Funzione per salvare le preferenze personalizzate
  const savePreferences = () => {
    cookieManager.setPreferences(preferences);
    setIsVisible(false);
  };

  // Funzione per gestire il cambiamento delle preferenze
  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // I cookie necessari non possono essere disattivati
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Animazioni Framer Motion
  const bannerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } },
    exit: { y: 100, opacity: 0, transition: { duration: 0.3 } }
  };

  const preferencesPanelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } }
  };

  // Gestione dell'apertura delle impostazioni
  const togglePreferences = () => {
    setShowPreferences(prev => !prev);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50 max-w-6xl mx-auto"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Banner principale */}
        <div className="glass backdrop-blur-lg bg-background/70 rounded-xl shadow-2xl border border-indigo-500/20 overflow-hidden">
          {/* Barra colorata sopra */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
          
          <div className="p-6">
            {/* Intestazione e chiusura */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Cookie className="w-6 h-6 text-indigo-400 mr-2" />
                <h3 className="font-bold text-xl">Impostazioni Cookie</h3>
              </div>
              <button 
                onClick={rejectNonEssential}
                className="p-1 rounded-full hover:bg-gray-500/10 transition-colors"
                aria-label="Chiudi banner cookie"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Descrizione */}
            <div className="mb-6">
              <p className="text-foreground/80 mb-3">
                Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito, personalizzare contenuti e analizzare il traffico. Puoi scegliere quali cookie accettare.
              </p>
              <p className="text-foreground/70 text-sm">
                Per maggiori dettagli, consulta la nostra{' '}
                <Link to="/PrivacyPolicy" className="text-indigo-400 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            
            {/* Pulsanti principali */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 font-medium"
              >
                Accetta tutti
              </button>
              
              <button
                onClick={rejectNonEssential}
                className="px-5 py-2 border border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5"
              >
                Rifiuta cookie non essenziali
              </button>
              
              <button
                onClick={togglePreferences}
                className="px-5 py-2 border border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5 flex items-center"
              >
                Preferenze cookie
                {showPreferences ? 
                  <ChevronUp className="w-4 h-4 ml-1" /> : 
                  <ChevronDown className="w-4 h-4 ml-1" />
                }
              </button>
            </div>
            
            {/* Pannello preferenze dettagliate */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <div className="border-t border-indigo-500/20 pt-6">
                    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                      
                      {/* Cookie necessari */}
                      <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <Shield className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-lg">Cookie Necessari</h4>
                              <div className="relative">
                                <div className="w-12 h-6 rounded-full bg-indigo-500 flex items-center">
                                  <span className="absolute right-1 top-1 bottom-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                    <Check className="w-3 h-3 text-indigo-500" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-foreground/70 mt-1 text-sm">
                              Consentono funzionalità di base come la navigazione e l'accesso ad aree protette.
                            </p>
                            <div className="text-xs mt-1 text-indigo-400/70">Non richiedono consenso</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Cookie analitici */}
                      <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <BarChart className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-lg">Cookie Analitici</h4>
                              <div className="relative">
                                <button
                                  onClick={() => handlePreferenceChange('analytics')}
                                  className={`w-12 h-6 rounded-full relative flex items-center transition-colors ${
                                    preferences.analytics ? 'bg-indigo-500' : 'bg-gray-300'
                                  }`}
                                >
                                  <span 
                                    className={`absolute top-1 bottom-1 w-4 h-4 rounded-full bg-white transition-all ${
                                      preferences.analytics ? 'right-1' : 'left-1'
                                    }`}
                                  ></span>
                                </button>
                              </div>
                            </div>
                            <p className="text-foreground/70 mt-1 text-sm">
                              Ci permettono di contare le visite, le fonti di traffico e comprendere come gli utenti navigano nel sito.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Cookie funzionali */}
                      <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <Zap className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-lg">Cookie Funzionali</h4>
                              <div className="relative">
                                <button
                                  onClick={() => handlePreferenceChange('functional')}
                                  className={`w-12 h-6 rounded-full relative flex items-center transition-colors ${
                                    preferences.functional ? 'bg-indigo-500' : 'bg-gray-300'
                                  }`}
                                >
                                  <span 
                                    className={`absolute top-1 bottom-1 w-4 h-4 rounded-full bg-white transition-all ${
                                      preferences.functional ? 'right-1' : 'left-1'
                                    }`}
                                  ></span>
                                </button>
                              </div>
                            </div>
                            <p className="text-foreground/70 mt-1 text-sm">
                              Abilitano funzionalità avanzate come chat di supporto, preferenze di tema e personalizzazione.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pulsante per salvare le preferenze personalizzate */}
                    <div className="mt-6 pt-4 border-t border-indigo-500/10">
                      <button
                        onClick={savePreferences}
                        className="w-full px-5 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 font-medium"
                      >
                        Salva le mie preferenze
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
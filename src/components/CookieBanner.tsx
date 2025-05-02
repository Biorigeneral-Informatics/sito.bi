// src/components/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Cookie, Shield, BarChart, Zap, Check,} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  // Stato per controllare la visibilità del banner
  const [isVisible, setIsVisible] = useState(false);
  // Stato per controllare se mostrare le preferenze dettagliate
  const [showPreferences, setShowPreferences] = useState(false);
  // Stato per le preferenze dei cookie
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // I cookie necessari sono sempre attivi
    analytics: false,
    functional: false,
  });

  // Verifica all'avvio se le preferenze sono già state impostate
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // Se non esiste il consenso, mostra il banner
    if (!cookieConsent) {
      // Piccolo ritardo per dare tempo alla pagina di caricarsi
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Carica le preferenze salvate
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Errore nel parsing delle preferenze cookie:', error);
      }
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
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
    
    // Qui puoi impostare i cookie effettivi o trigger eventi di analytics
    setupCookies(allAccepted);
  };

  // Funzione per rifiutare tutti i cookie tranne quelli necessari
  const rejectNonEssential = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
    
    // Imposta solo i cookie necessari
    setupCookies(onlyNecessary);
  };

  // Funzione per salvare le preferenze personalizzate
  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
    
    // Imposta i cookie in base alle preferenze
    setupCookies(preferences);
  };

  // Funzione per gestire il cambiamento delle preferenze
  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // I cookie necessari non possono essere disattivati
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Funzione di implementazione per impostare i cookie in base alle preferenze
  const setupCookies = (cookiePrefs: CookiePreferences) => {
    // Qui implementeresti la logica effettiva per impostare i cookie
    // In base alle preferenze dell'utente
    
    // Esempio:
    if (cookiePrefs.analytics) {
      // Inizializza Google Analytics o strumenti simili
      console.log('Inizializzazione cookie analitici');
      // window.gtag = ...
    }
    
    if (cookiePrefs.functional) {
      // Inizializza cookie funzionali
      console.log('Inizializzazione cookie funzionali');
    }
    
    // I cookie necessari vengono sempre impostati
    console.log('Inizializzazione cookie necessari');
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
                {showPreferences ? (
                  <ChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-2 w-4 h-4" />
                )}
              </button>
            </div>
            
            {/* Pannello preferenze espandibile */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-hidden"
                >
                  <div className="border-t border-indigo-500/10 pt-4 mt-2 space-y-4">
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
                              <button
                                disabled
                                className="w-12 h-6 rounded-full bg-indigo-500 relative flex items-center cursor-not-allowed"
                              >
                                <span className="absolute right-1 top-1 bottom-1 w-4 h-4 rounded-full bg-white"></span>
                              </button>
                            </div>
                          </div>
                          <p className="text-foreground/70 mt-1 text-sm">
                            Essenziali per il funzionamento del sito. Consentono funzionalità di base come la navigazione e l'accesso ad aree protette.
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
                            Permettono al sito di fornire funzionalità e personalizzazione avanzate, come preferenze e funzioni social.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pulsante conferma */}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={savePreferences}
                        className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 flex items-center font-medium transition-all hover:-translate-y-0.5"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Salva preferenze
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
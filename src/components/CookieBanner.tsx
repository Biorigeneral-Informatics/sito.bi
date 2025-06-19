// src/components/CookieBanner.tsx - Versione Integrata con Blocco Preventivo
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, ChevronDown, ChevronUp, Shield, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

// Cookie Manager Semplificato - Si integra con il blocco preventivo
class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences | null = null;
  
  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Carica preferenze da localStorage
  loadPreferences(): CookiePreferences | null {
    try {
      const saved = localStorage.getItem('cookieConsent');
      if (saved) {
        this.preferences = JSON.parse(saved);
        return this.preferences;
      }
    } catch (error) {
      console.error('Errore caricamento preferenze cookie:', error);
    }
    return null;
  }

  // Salva preferenze e notifica il sistema di blocco
  setPreferences(prefs: CookiePreferences) {
    this.preferences = prefs;
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    
    // Notifica il sistema di blocco preventivo
    const event = new CustomEvent('cookieConsentGiven', {
      detail: prefs
    });
    window.dispatchEvent(event);
    
    console.log('💾 Preferenze salvate e sistema notificato:', prefs);
  }

  // Rimuovi consenso (per testing)
  clearConsent() {
    this.preferences = null;
    localStorage.removeItem('cookieConsent');
    console.log('🗑️ Consenso rimosso - refresh per test');
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
    analytics: false,    // ❌ DEFAULT FALSE (opt-in obbligatorio)
    functional: false,   // ❌ DEFAULT FALSE (opt-in obbligatorio)
  });

  const cookieManager = CookieManager.getInstance();

  // Verifica consenso all'avvio
  useEffect(() => {
    const savedPreferences = cookieManager.loadPreferences();
    
    if (!savedPreferences) {
      // 🚨 NESSUN CONSENSO = MOSTRA BANNER
      console.log('🚨 Nessun consenso - Banner visibile');
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Consenso già presente
      console.log('✅ Consenso esistente trovato:', savedPreferences);
      setPreferences(savedPreferences);
    }
  }, []);

  // ✅ ACCETTA TUTTI (opt-in attivo)
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
    };
    setPreferences(allAccepted);
    cookieManager.setPreferences(allAccepted);
    setIsVisible(false);
    
    console.log('✅ Tutti i cookie accettati');
  };

  // ❌ SOLO NECESSARI (rifiuto tutto tranne essenziali)
  const rejectNonEssential = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    cookieManager.setPreferences(onlyNecessary);
    setIsVisible(false);
    
    console.log('❌ Solo cookie necessari accettati');
  };

  // 💾 Salva preferenze personalizzate
  const savePreferences = () => {
    cookieManager.setPreferences(preferences);
    setIsVisible(false);
    
    console.log('💾 Preferenze personalizzate salvate:', preferences);
  };

  // Gestione cambio preferenze
  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cookie necessari sempre attivi
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // 🧪 Funzione di test per sviluppatori
  const clearConsentForTesting = () => {
    cookieManager.clearConsent();
    alert('Consenso rimosso. Ricarica la pagina per testare il banner.');
  };

  // Animazioni
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

  // Non mostrare se non è visibile
  if (!isVisible) {
    // Pulsante debug solo in development
    if (import.meta.env.DEV) {
      return (
        <button
          onClick={clearConsentForTesting}
          className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-red-500 text-white text-xs rounded opacity-50 hover:opacity-100"
          title="Test: Rimuovi consenso cookie"
        >
          🧪 Reset Cookie
        </button>
      );
    }
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50 max-w-6xl mx-auto"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="glass backdrop-blur-lg bg-background/90 rounded-xl shadow-2xl border border-indigo-500/20 overflow-hidden">
          {/* Barra di stato GDPR */}
          <div className="h-1 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <div className="px-4 py-2 bg-red-500/10 border-b border-red-500/20">
            <p className="text-sm text-red-400 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              🔒 <strong>BLOCCO ATTIVO:</strong> Nessun cookie di tracciamento caricato
            </p>
          </div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Cookie className="w-6 h-6 text-indigo-400 mr-2" />
                <h3 className="font-bold text-xl">🍪 Consenso Cookie GDPR</h3>
              </div>
              <button 
                onClick={rejectNonEssential}
                className="p-1 rounded-full hover:bg-gray-500/10 transition-colors"
                aria-label="Rifiuta cookie non essenziali"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Descrizione con stato del blocco */}
            <div className="mb-6">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg mb-4">
                <p className="text-green-400 text-sm font-medium">
                  ✅ <strong>GDPR Compliant:</strong> I cookie di tracciamento sono bloccati preventivamente. 
                  Nessun dato viene raccolto senza il tuo consenso esplicito.
                </p>
              </div>
              
              <p className="text-foreground/80 mb-3">
                Questo sito utilizza cookie per migliorare la tua esperienza. Scegli quali categorie accettare:
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
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all hover:-translate-y-0.5 font-medium flex items-center"
              >
                ✅ Accetta Tutti
              </button>
              
              <button
                onClick={rejectNonEssential}
                className="px-6 py-3 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-all hover:-translate-y-0.5 flex items-center"
              >
                ❌ Solo Necessari
              </button>
              
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-6 py-3 border border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5 flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personalizza
                {showPreferences ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
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
                  className="border-t border-indigo-500/20 pt-6"
                >
                  <h4 className="font-semibold mb-4 text-indigo-400">🔧 Personalizza le tue preferenze:</h4>
                  
                  <div className="space-y-4">
                    {/* Cookie necessari */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-green-400 mb-1">🔒 Cookie Necessari</h5>
                          <p className="text-sm text-foreground/70">
                            Essenziali per sicurezza, autenticazione e funzionamento base del sito. 
                            <strong>Non possono essere disattivati.</strong>
                          </p>
                          <p className="text-xs text-green-400 mt-1">Sempre attivi per legge</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Cookie analytics */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-indigo-500/20">
                      <div className="flex items-start">
                        <BarChart className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">📊 Cookie Analitici</h5>
                          <p className="text-sm text-foreground/70 mb-1">
                            Google Analytics per statistiche anonime e miglioramento del sito.
                          </p>
                          <p className="text-xs text-indigo-400">
                            🔒 <strong>Bloccati preventivamente</strong> - Si attivano solo con consenso
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-indigo-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>

                    {/* Cookie funzionali */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-indigo-500/20">
                      <div className="flex items-start">
                        <Zap className="w-5 h-5 text-violet-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">⚙️ Cookie Funzionali</h5>
                          <p className="text-sm text-foreground/70 mb-1">
                            Chat widget, mappe, video incorporati e preferenze personalizzate.
                          </p>
                          <p className="text-xs text-violet-400">
                            🔒 <strong>Bloccati preventivamente</strong> - Si attivano solo con consenso
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.functional ? 'bg-violet-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.functional ? 'translate-x-6' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Informazioni tecniche */}
                  <div className="mt-6 p-3 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
                    <h6 className="text-sm font-medium text-indigo-400 mb-2">ℹ️ Come funziona il blocco:</h6>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      <li>• <strong>Prima del consenso:</strong> Tutti gli script di tracciamento sono bloccati</li>
                      <li>• <strong>Dopo il consenso:</strong> Solo i cookie autorizzati vengono caricati</li>
                      <li>• <strong>Puoi modificare:</strong> Le preferenze in qualsiasi momento</li>
                    </ul>
                  </div>

                  {/* Pulsante salva personalizzazioni */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={savePreferences}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 font-medium flex items-center"
                    >
                      💾 Salva Preferenze
                    </button>
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
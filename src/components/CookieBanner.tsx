// src/components/CookieBanner.tsx - VERSIONE COMPLETA CON SUPABASE
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cookie, X, Shield, BarChart, Settings, 
  Smartphone, Calendar, Heart, Target 
} from 'lucide-react';

// 🆕 Import del servizio Supabase
import { SupabaseCookieService } from '../services/SupabaseCookieService';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

// 🔄 COOKIE MANAGER AGGIORNATO PER SUPABASE
export class CookieManager {
  private static instance: CookieManager | null = null;
  private preferences: CookiePreferences | null = null;
  private supabaseService: SupabaseCookieService;

  private constructor() {
    // 🆕 Usa Supabase invece di Google Sheets
    this.supabaseService = SupabaseCookieService.getInstance();
  }
  
  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

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

  async setPreferences(prefs: CookiePreferences): Promise<void> {
    this.preferences = prefs;
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    
    // 🆕 Salva in Supabase invece di Google Sheets
    this.supabaseService.recordConsent(prefs).then(success => {
      if (success) {
        console.log('📊 Consenso salvato in Supabase');
      } else {
        console.log('⚠️ Consenso salvato solo localmente');
      }
    });
    
    // Notifica il sistema di blocco preventivo
    const event = new CustomEvent('cookieConsentGiven', {
      detail: prefs
    });
    window.dispatchEvent(event);
    
    console.log('💾 Preferenze salvate e sistema notificato:', prefs);
  }

  clearConsent(): void {
    this.preferences = null;
    localStorage.removeItem('cookieConsent');
    sessionStorage.removeItem('cookie_session_id');
    
    // 🧪 Per sviluppo: rimuovi anche session Supabase
    if (import.meta.env.DEV) {
      this.supabaseService.clearSession();
    }
    
    console.log('🗑️ Consenso rimosso - refresh per test');
  }

  hasConsent(): boolean {
    return this.preferences !== null;
  }

  getPreferences(): CookiePreferences | null {
    return this.preferences;
  }
}

// 🍪 COMPONENTE COOKIE BANNER
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  });

  const cookieManager = CookieManager.getInstance();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Carica preferenze esistenti
    const savedPreferences = cookieManager.loadPreferences();
    if (savedPreferences) {
      setPreferences(savedPreferences);
    } else {
      // Mostra il banner solo se non ci sono preferenze salvate
      setIsVisible(true);
    }

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handlePreferenceChange = (type: keyof Omit<CookiePreferences, 'necessary'>) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const acceptAll = async () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    setPreferences(allAccepted);
    await cookieManager.setPreferences(allAccepted);
    setIsVisible(false);
  };

  const acceptCurrent = async () => {
    await cookieManager.setPreferences(preferences);
    setIsVisible(false);
  };

  const rejectNonEssential = async () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    setPreferences(essentialOnly);
    await cookieManager.setPreferences(essentialOnly);
    setIsVisible(false);
  };

  const clearConsentForTesting = () => {
    cookieManager.clearConsent();
    setIsVisible(true);
    alert('Consenso rimosso! Ricarica la pagina per testare il banner.');
  };

  // Animazioni ottimizzate per mobile
  const bannerVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        bounce: 0.1, 
        duration: 0.4 
      } 
    },
    exit: { 
      y: '100%', 
      opacity: 0, 
      transition: { duration: 0.2 } 
    }
  };

  const preferencesPanelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1, 
      transition: { duration: 0.2 } 
    },
    exit: { 
      height: 0, 
      opacity: 0, 
      transition: { duration: 0.15 } 
    }
  };

  if (!isVisible) {
    if (import.meta.env.DEV) {
      return (
        <button
          onClick={clearConsentForTesting}
          className="fixed bottom-4 right-4 z-50 w-8 h-8 bg-red-500 text-white text-xs rounded-full opacity-50 hover:opacity-100 flex items-center justify-center"
          title="Test: Rimuovi consenso cookie"
        >
          🧪
        </button>
      );
    }
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed z-50 ${
          isMobile 
            ? 'inset-x-0 bottom-0' 
            : 'bottom-4 left-4 right-4 max-w-4xl mx-auto'
        }`}
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={`glass backdrop-blur-lg bg-background/95 shadow-2xl border-indigo-500/20 overflow-hidden ${
          isMobile 
            ? 'border-t rounded-t-2xl' 
            : 'border rounded-xl'
        }`}>
          
          {/* Barra di stato compatta */}
          <div className="h-0.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          
          {/* Contenuto principale */}
          <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
            
            {/* Header compatto */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Cookie className={`text-indigo-400 mr-2 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                <h3 className={`font-bold text-indigo-400 ${isMobile ? 'text-sm' : 'text-lg'}`}>
                  🍪 Cookie GDPR
                </h3>
              </div>
              
              {/* Status badge mobile */}
              {isMobile && (
                <div className="flex items-center text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3 mr-1" />
                  Bloccati
                </div>
              )}
              
              {!isMobile && (
                <button 
                  onClick={rejectNonEssential}
                  className="p-1 rounded-full hover:bg-gray-500/10 transition-colors"
                  aria-label="Rifiuta cookie non essenziali"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Messaggio principale compatto */}
            <div className="mb-4">
              <p className={`text-foreground/80 mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
                {isMobile 
                  ? 'Utilizziamo cookie per migliorare la tua esperienza.'
                  : 'Utilizziamo cookie per migliorare la tua esperienza. I cookie di tracciamento sono bloccati preventivamente.'
                }
              </p>
              
              {/* Status per desktop */}
              {!isMobile && (
                <div className="flex items-center text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded mb-2">
                  <Shield className="w-3 h-3 mr-1" />
                  GDPR Compliant - Tracciamento bloccato
                </div>
              )}
              
              <p className={`text-foreground/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {isMobile ? (
                  <>Dettagli nella <Link to="/PrivacyPolicy" className="text-indigo-400 underline">Privacy Policy</Link></>
                ) : (
                  <>Per maggiori dettagli, consulta la nostra <Link to="/PrivacyPolicy" className="text-indigo-400 hover:underline">Privacy Policy</Link>.</>
                )}
              </p>
            </div>

            {/* Pulsanti azione - Layout diverso per mobile */}
            <div className={`flex gap-2 mb-3 ${isMobile ? 'flex-col' : 'flex-row flex-wrap'}`}>
              <button
                onClick={acceptAll}
                className={`bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all font-medium ${
                  isMobile 
                    ? 'px-4 py-2 text-sm' 
                    : 'px-4 py-2 text-sm'
                }`}
              >
                ✅ Accetta tutto
              </button>
              
              <button
                onClick={rejectNonEssential}
                className={`bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:shadow-lg transition-all font-medium ${
                  isMobile 
                    ? 'px-4 py-2 text-sm' 
                    : 'px-4 py-2 text-sm'
                }`}
              >
                ❌ Solo necessari
              </button>
              
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className={`bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center justify-center ${
                  isMobile 
                    ? 'px-4 py-2 text-sm' 
                    : 'px-4 py-2 text-sm'
                }`}
              >
                <Settings className={`mr-1 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                Personalizza
              </button>
            </div>

            {/* Panel preferenze dettagliate */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-t border-indigo-500/20 pt-3"
                >
                  <h4 className={`font-medium mb-3 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    🔧 Personalizza preferenze:
                  </h4>
                  
                  <div className="space-y-2">
                    {/* Cookie necessari */}
                    <div className={`flex items-center justify-between rounded-lg bg-green-500/5 border border-green-500/20 ${
                      isMobile ? 'p-2' : 'p-3'
                    }`}>
                      <div className="flex items-center">
                        <Shield className={`text-green-400 mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <div>
                          <h5 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>🔒 Necessari</h5>
                          {!isMobile && <p className="text-xs text-foreground/70">Sempre attivi</p>}
                        </div>
                      </div>
                      <div className={`bg-green-500 rounded-full flex items-center justify-center ${
                        isMobile ? 'w-6 h-3' : 'w-8 h-4'
                      }`}>
                        <div className={`bg-white rounded-full ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}></div>
                      </div>
                    </div>

                    {/* Cookie analytics */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 ${
                      isMobile ? 'p-2' : 'p-3'
                    }`}>
                      <div className="flex items-center">
                        <BarChart className={`text-indigo-400 mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <div>
                          <h5 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>📊 Analitici</h5>
                          {!isMobile && <p className="text-xs text-foreground/70">Google Analytics</p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`rounded-full transition-colors ${
                          preferences.analytics ? 'bg-indigo-500' : 'bg-gray-300'
                        } ${isMobile ? 'w-6 h-3' : 'w-8 h-4'}`}
                      >
                        <div className={`bg-white rounded-full transition-transform ${
                          preferences.analytics 
                            ? (isMobile ? 'translate-x-3' : 'translate-x-4') 
                            : 'translate-x-0.5'
                        } ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}></div>
                      </button>
                    </div>

                    {/* Cookie funzionali */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 ${
                      isMobile ? 'p-2' : 'p-3'
                    }`}>
                      <div className="flex items-center">
                        <Smartphone className={`text-indigo-400 mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <div>
                          <h5 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>⚙️ Funzionali</h5>
                          {!isMobile && <p className="text-xs text-foreground/70">Calendly, preferenze</p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`rounded-full transition-colors ${
                          preferences.functional ? 'bg-indigo-500' : 'bg-gray-300'
                        } ${isMobile ? 'w-6 h-3' : 'w-8 h-4'}`}
                      >
                        <div className={`bg-white rounded-full transition-transform ${
                          preferences.functional 
                            ? (isMobile ? 'translate-x-3' : 'translate-x-4') 
                            : 'translate-x-0.5'
                        } ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}></div>
                      </button>
                    </div>

                    {/* Cookie marketing */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 ${
                      isMobile ? 'p-2' : 'p-3'
                    }`}>
                      <div className="flex items-center">
                        <Target className={`text-indigo-400 mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <div>
                          <h5 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>🎯 Marketing</h5>
                          {!isMobile && <p className="text-xs text-foreground/70">Pubblicità personalizzata</p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`rounded-full transition-colors ${
                          preferences.marketing ? 'bg-indigo-500' : 'bg-gray-300'
                        } ${isMobile ? 'w-6 h-3' : 'w-8 h-4'}`}
                      >
                        <div className={`bg-white rounded-full transition-transform ${
                          preferences.marketing 
                            ? (isMobile ? 'translate-x-3' : 'translate-x-4') 
                            : 'translate-x-0.5'
                        } ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Pulsante salva preferenze personalizzate */}
                  <div className="mt-3 pt-3 border-t border-indigo-500/10">
                    <button
                      onClick={acceptCurrent}
                      className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all font-medium ${
                        isMobile ? 'py-2 text-sm' : 'py-2 text-sm'
                      }`}
                    >
                      💾 Salva preferenze personalizzate
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
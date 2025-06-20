// src/components/CookieBanner.tsx - Versione Mobile Ottimizzata
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, ChevronDown, ChevronUp, Shield, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

// Servizio Google Sheets
class GoogleSheetsService {
  private static instance: GoogleSheetsService;
  private sheetId: string;
  private apiKey: string;
  
  private constructor() {
    this.sheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID;
    this.apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    
    if (!this.sheetId || !this.apiKey) {
      console.warn('⚠️ Google Sheets non configurato. Controlla le variabili d\'ambiente.');
    }
  }
  
  static getInstance(): GoogleSheetsService {
    if (!GoogleSheetsService.instance) {
      GoogleSheetsService.instance = new GoogleSheetsService();
    }
    return GoogleSheetsService.instance;
  }
  
  async recordConsent(preferences: CookiePreferences): Promise<boolean> {
    if (!this.sheetId || !this.apiKey) {
      console.warn('Google Sheets non configurato, salvataggio solo locale');
      return false;
    }
    
    try {
      const now = new Date();
      const timestamp = now.toLocaleString('it-IT', {
        timeZone: 'Europe/Rome',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      const consentData = [
        timestamp,
        preferences.analytics ? 'Sì' : 'No',
        preferences.functional ? 'Sì' : 'No',
        navigator.userAgent,
        window.location.href,
        this.getSessionId(),
        'nascosto',
        this.getBrowserInfo()
      ];
      
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/A:H:append?valueInputOption=RAW&key=${this.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [consentData]
          }),
        }
      );
      
      if (response.ok) {
        const result = await response.json();
        console.log('✅ Consenso salvato in Google Sheets:', result);
        return true;
      } else {
        const error = await response.text();
        console.error('❌ Errore Google Sheets:', error);
        return false;
      }
      
    } catch (error) {
      console.error('❌ Errore salvataggio Google Sheets:', error);
      return false;
    }
  }
  
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('cookie_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      sessionStorage.setItem('cookie_session_id', sessionId);
    }
    return sessionId;
  }
  
  private getBrowserInfo(): string {
    const info = {
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    return JSON.stringify(info);
  }
}

// Cookie Manager
class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences | null = null;
  private googleSheets: GoogleSheetsService;
  
  private constructor() {
    this.googleSheets = GoogleSheetsService.getInstance();
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
    
    // Salva in Google Sheets
    this.googleSheets.recordConsent(prefs).then(success => {
      if (success) {
        console.log('📊 Consenso salvato in Google Sheets');
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
    console.log('🗑️ Consenso rimosso - refresh per test');
  }

  hasConsent(): boolean {
    return this.preferences !== null;
  }

  getPreferences(): CookiePreferences | null {
    return this.preferences;
  }
}

// Componente Cookie Banner Ottimizzato Mobile
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
  });

  const cookieManager = CookieManager.getInstance();

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Verifica consenso all'avvio
  useEffect(() => {
    const savedPreferences = cookieManager.loadPreferences();
    
    if (!savedPreferences) {
      console.log('🚨 Nessun consenso - Banner visibile');
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      console.log('✅ Consenso esistente trovato:', savedPreferences);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = async () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
    };
    setPreferences(allAccepted);
    await cookieManager.setPreferences(allAccepted);
    setIsVisible(false);
    console.log('✅ Tutti i cookie accettati');
  };

  const rejectNonEssential = async () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    await cookieManager.setPreferences(onlyNecessary);
    setIsVisible(false);
    console.log('❌ Solo cookie necessari accettati');
  };

  const savePreferences = async () => {
    await cookieManager.setPreferences(preferences);
    setIsVisible(false);
    console.log('💾 Preferenze personalizzate salvate:', preferences);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const clearConsentForTesting = () => {
    cookieManager.clearConsent();
    alert('Consenso rimosso. Ricarica la pagina per testare il banner.');
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
                    ? 'w-full py-3 text-sm' 
                    : 'flex-1 px-6 py-3 hover:-translate-y-0.5'
                }`}
              >
                ✅ Accetta Tutti
              </button>
              
              <div className={`flex gap-2 ${isMobile ? 'w-full' : 'flex-1'}`}>
                <button
                  onClick={rejectNonEssential}
                  className={`bg-gray-500/20 text-foreground rounded-lg hover:bg-gray-500/30 transition-colors font-medium ${
                    isMobile 
                      ? 'flex-1 py-3 text-sm' 
                      : 'px-6 py-3 hover:-translate-y-0.5'
                  }`}
                >
                  {isMobile ? '❌ Solo Necessari' : '❌ Solo Necessari'}
                </button>
                
                <button
                  onClick={() => setShowPreferences(!showPreferences)}
                  className={`border border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all flex items-center justify-center ${
                    isMobile 
                      ? 'px-3 py-3 text-sm' 
                      : 'px-4 py-3 hover:-translate-y-0.5'
                  }`}
                >
                  <Settings className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4 mr-1'}`} />
                  {!isMobile && 'Personalizza'}
                  {showPreferences ? 
                    <ChevronUp className={`${isMobile ? 'w-3 h-3 ml-1' : 'w-4 h-4 ml-2'}`} /> : 
                    <ChevronDown className={`${isMobile ? 'w-3 h-3 ml-1' : 'w-4 h-4 ml-2'}`} />
                  }
                </button>
              </div>
            </div>

            {/* Pannello preferenze compatto */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-t border-indigo-500/20 pt-3"
                >
                  <h4 className={`font-semibold mb-3 text-indigo-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
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
                        <Zap className={`text-violet-400 mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <div>
                          <h5 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>⚙️ Funzionali</h5>
                          {!isMobile && <p className="text-xs text-foreground/70">Chat, mappe</p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`rounded-full transition-colors ${
                          preferences.functional ? 'bg-violet-500' : 'bg-gray-300'
                        } ${isMobile ? 'w-6 h-3' : 'w-8 h-4'}`}
                      >
                        <div className={`bg-white rounded-full transition-transform ${
                          preferences.functional 
                            ? (isMobile ? 'translate-x-3' : 'translate-x-4') 
                            : 'translate-x-0.5'
                        } ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Info tecniche compatte */}
                  {!isMobile && (
                    <div className="mt-3 p-2 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
                      <p className="text-xs text-indigo-400 font-medium">
                        ℹ️ I cookie di tracciamento sono bloccati preventivamente e si attivano solo con consenso
                      </p>
                    </div>
                  )}

                  {/* Pulsante salva */}
                  <div className="mt-3">
                    <button
                      onClick={savePreferences}
                      className={`w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg transition-all font-medium ${
                        isMobile ? 'py-3 text-sm' : 'py-3 text-sm'
                      }`}
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
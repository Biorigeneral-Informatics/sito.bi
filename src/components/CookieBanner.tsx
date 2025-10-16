// src/components/CookieBanner.tsx - VERSIONE GDPR COMPLIANT + STILE MIGLIORATO
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cookie, Shield, BarChart, Settings, 
  Smartphone, Target, Clock, Info
} from 'lucide-react';

// 🆕 Import del servizio Supabase
import { SupabaseCookieService } from '../services/SupabaseCookieService';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

// 🆕 INTERFACCIA PER DATI CONSENSO CON TIMESTAMP E VERSIONE
interface CookieConsentData {
  preferences: CookiePreferences;
  timestamp: number;
  version: string;
}

// 🔄 COOKIE MANAGER AGGIORNATO PER GDPR COMPLIANCE
export class CookieManager {
  private static instance: CookieManager | null = null;
  private preferences: CookiePreferences | null = null;
  private supabaseService: SupabaseCookieService;
  
  // 🆕 COSTANTI GDPR
  private readonly CONSENT_VALIDITY_DAYS = 365; // 12 mesi
  private readonly CURRENT_POLICY_VERSION = '1.0'; // Aggiorna quando cambi Privacy Policy

  private constructor() {
    this.supabaseService = SupabaseCookieService.getInstance();
  }
  
  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // 🆕 CARICAMENTO PREFERENZE CON CONTROLLO SCADENZA E VERSIONE
  loadPreferences(): CookiePreferences | null {
    try {
      const saved = localStorage.getItem('cookieConsent');
      if (saved) {
        const data: CookieConsentData = JSON.parse(saved);
        
        // ✅ VERIFICA SCADENZA (12 mesi)
        const now = Date.now();
        const expiryDate = data.timestamp + (this.CONSENT_VALIDITY_DAYS * 24 * 60 * 60 * 1000);
        
        if (now > expiryDate) {
          console.log('🕐 Consenso scaduto dopo 12 mesi - richiesta rinnovo');
          this.clearConsent();
          return null;
        }
        
        // ✅ VERIFICA VERSIONE PRIVACY POLICY
        if (data.version !== this.CURRENT_POLICY_VERSION) {
          console.log('📄 Privacy Policy aggiornata - richiesta nuovo consenso');
          this.clearConsent();
          return null;
        }
        
        this.preferences = data.preferences;
        return this.preferences;
      }
    } catch (error) {
      console.error('Errore caricamento preferenze cookie:', error);
    }
    return null;
  }

  // 🆕 SALVATAGGIO CON TIMESTAMP E VERSIONE
  async setPreferences(prefs: CookiePreferences): Promise<void> {
    const consentData: CookieConsentData = {
      preferences: prefs,
      timestamp: Date.now(),
      version: this.CURRENT_POLICY_VERSION
    };
    
    this.preferences = prefs;
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    
    // Salva in Supabase
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
    
    if (import.meta.env.DEV) {
      this.supabaseService.clearSession();
    }
    
    console.log('🗑️ Consenso rimosso');
  }

  hasConsent(): boolean {
    return this.preferences !== null;
  }

  getPreferences(): CookiePreferences | null {
    return this.preferences;
  }
  
  // 🆕 METODO PER OTTENERE DATA SCADENZA
  getExpiryDate(): Date | null {
    try {
      const saved = localStorage.getItem('cookieConsent');
      if (saved) {
        const data: CookieConsentData = JSON.parse(saved);
        return new Date(data.timestamp + (this.CONSENT_VALIDITY_DAYS * 24 * 60 * 60 * 1000));
      }
    } catch (error) {
      console.error('Errore lettura data scadenza:', error);
    }
    return null;
  }
}

// 🍪 COMPONENTE COOKIE BANNER MIGLIORATO
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

  const openPreferences = () => {
    setIsVisible(true);
    setShowPreferences(true);
  };

  const clearConsentForTesting = () => {
    cookieManager.clearConsent();
    setIsVisible(true);
    alert('Consenso rimosso! Ricarica la pagina per testare il banner.');
  };

  // Animazioni ottimizzate
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
      transition: { duration: 0.3 } 
    },
    exit: { 
      height: 0, 
      opacity: 0, 
      transition: { duration: 0.2 } 
    }
  };

  // 🆕 PULSANTE FISSO PER GESTIRE PREFERENZE (GDPR COMPLIANCE)
  if (!isVisible) {
    return (
      <>
        {/* Pulsante fisso sempre visibile per modificare preferenze */}
        <motion.button
          onClick={openPreferences}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/50 hover:scale-110 transition-all duration-300 group"
          title="Gestisci preferenze cookie"
          aria-label="Gestisci preferenze cookie"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          whileHover={{ rotate: 15 }}
        >
          <Cookie className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </motion.button>
        
       {/* Bottone test solo in dev COMMENTATO PER ORA*/}
        {/* {import.meta.env.DEV && (
          <button
            onClick={clearConsentForTesting}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-red-500 text-white text-xs rounded-full opacity-50 hover:opacity-100 flex items-center justify-center shadow-lg"
            title="Test: Rimuovi consenso"
          >
            🧪
          </button>
        )} */}
      </>
    );
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
        <div className={`backdrop-blur-xl bg-gradient-to-br from-background/98 via-background/95 to-indigo-950/30 shadow-2xl border border-indigo-500/30 overflow-hidden ${
          isMobile 
            ? 'border-t rounded-t-3xl' 
            : 'border rounded-2xl'
        }`}>
          
          {/* Barra di stato migliorata */}
          <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-green-500 shadow-lg"></div>
          
          {/* Contenuto principale */}
          <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
            
            {/* Header migliorato */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-indigo-500/20 rounded-lg">
                  <Cookie className={`text-indigo-400 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-indigo-400 ${isMobile ? 'text-sm' : 'text-lg'}`}>
                    🍪 Gestione Cookie
                  </h3>
                  <p className="text-xs text-foreground/60">GDPR Compliant</p>
                </div>
              </div>
              
              {/* Status badge migliorato */}
              <div className="flex items-center text-xs text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30">
                <Shield className="w-3 h-3 mr-1.5" />
                <span className="font-medium">Protetto</span>
              </div>
            </div>
            
            {/* Messaggio principale migliorato */}
            <div className="mb-4">
              <p className={`text-foreground/90 mb-2 leading-relaxed ${isMobile ? 'text-sm' : 'text-sm'}`}>
                {isMobile 
                  ? 'Utilizziamo cookie per migliorare la tua esperienza. I cookie di tracciamento sono bloccati preventivamente.'
                  : 'Utilizziamo cookie essenziali e, con il tuo consenso, cookie analitici e di marketing per migliorare la tua esperienza. I cookie di tracciamento sono bloccati preventivamente fino al tuo consenso esplicito.'
                }
              </p>
              
              {/* Info box migliorato */}
              <div className="flex items-start space-x-2 p-2.5 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
                <Info className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className={`text-foreground/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {isMobile ? (
                      <>Dettagli nella <Link to="/PrivacyPolicy" className="text-indigo-400 underline font-medium">Privacy Policy</Link></>
                    ) : (
                      <>Il consenso è valido per 12 mesi. Per maggiori dettagli, consulta la nostra <Link to="/PrivacyPolicy" className="text-indigo-400 hover:underline font-medium">Privacy Policy</Link>.</>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Pulsanti azione migliorati */}
            <div className={`flex gap-2 mb-3 ${isMobile ? 'flex-col' : 'flex-row flex-wrap'}`}>
              <button
                onClick={acceptAll}
                className={`flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all font-semibold ${
                  isMobile 
                    ? 'px-4 py-2.5 text-sm' 
                    : 'px-5 py-2.5 text-sm'
                }`}
              >
                ✅ Accetta tutto
              </button>
              
              <button
                onClick={rejectNonEssential}
                className={`flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:shadow-lg transition-all font-semibold ${
                  isMobile 
                    ? 'px-4 py-2.5 text-sm' 
                    : 'px-5 py-2.5 text-sm'
                }`}
              >
                ❌ Solo necessari
              </button>
              
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className={`bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all font-semibold flex items-center justify-center ${
                  isMobile 
                    ? 'px-4 py-2.5 text-sm w-full' 
                    : 'px-5 py-2.5 text-sm'
                }`}
              >
                <Settings className={`mr-2 ${isMobile ? 'w-4 h-4' : 'w-4 h-4'}`} />
                Personalizza
              </button>
            </div>

            {/* Panel preferenze dettagliate MIGLIORATO */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-t border-indigo-500/20 pt-4"
                >
                  <h4 className={`font-semibold mb-3 flex items-center ${isMobile ? 'text-sm' : 'text-sm'}`}>
                    <Settings className="w-4 h-4 mr-2 text-indigo-400" />
                    Personalizza le tue preferenze
                  </h4>
                  
                  <div className="space-y-2">
                    {/* Cookie necessari */}
                    <div className={`flex items-center justify-between rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/30 backdrop-blur-sm ${
                      isMobile ? 'p-2' : 'p-2.5'
                    }`}>
                      <div className="flex items-center flex-1">
                        <div className="p-1 bg-green-500/20 rounded-lg mr-2">
                          <Shield className={`text-green-400 ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-semibold text-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            🔒 Cookie Necessari
                          </h5>
                          {!isMobile && <p className="text-xs text-foreground/70 mt-0.5">
                            Essenziali per il funzionamento • Sempre attivi
                          </p>}
                        </div>
                      </div>
                      <div className="px-2.5 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-400">
                        Obbligatori
                      </div>
                    </div>

                    {/* Cookie analytics */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors ${
                      isMobile ? 'p-2' : 'p-2.5'
                    }`}>
                      <div className="flex items-center flex-1">
                        <div className="p-1 bg-indigo-500/20 rounded-lg mr-2">
                          <BarChart className={`text-indigo-400 ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-semibold text-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            📊 Cookie Analitici
                          </h5>
                          {!isMobile && <p className="text-xs text-foreground/70 mt-0.5">
                            Google Analytics • Durata: 24 mesi
                          </p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`relative rounded-full transition-all ${
                          preferences.analytics ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50' : 'bg-gray-400'
                        } ${isMobile ? 'w-10 h-5' : 'w-11 h-6'}`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div className={`absolute bg-white rounded-full transition-transform shadow-md ${
                          preferences.analytics 
                            ? (isMobile ? 'translate-x-5' : 'translate-x-5') 
                            : 'translate-x-1'
                        } ${isMobile ? 'w-3 h-3 top-1' : 'w-4 h-4 top-1'}`}></div>
                      </button>
                    </div>

                    {/* Cookie funzionali */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors ${
                      isMobile ? 'p-2' : 'p-2.5'
                    }`}>
                      <div className="flex items-center flex-1">
                        <div className="p-1 bg-purple-500/20 rounded-lg mr-2">
                          <Smartphone className={`text-purple-400 ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-semibold text-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            ⚙️ Cookie Funzionali
                          </h5>
                          {!isMobile && <p className="text-xs text-foreground/70 mt-0.5">
                            Calendly, preferenze tema • Durata: 12 mesi
                          </p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`relative rounded-full transition-all ${
                          preferences.functional ? 'bg-purple-500 shadow-lg shadow-purple-500/50' : 'bg-gray-400'
                        } ${isMobile ? 'w-10 h-5' : 'w-11 h-6'}`}
                        aria-label="Toggle functional cookies"
                      >
                        <div className={`absolute bg-white rounded-full transition-transform shadow-md ${
                          preferences.functional 
                            ? (isMobile ? 'translate-x-5' : 'translate-x-5') 
                            : 'translate-x-1'
                        } ${isMobile ? 'w-3 h-3 top-1' : 'w-4 h-4 top-1'}`}></div>
                      </button>
                    </div>

                    {/* Cookie marketing */}
                    <div className={`flex items-center justify-between rounded-lg bg-background/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors ${
                      isMobile ? 'p-2' : 'p-2.5'
                    }`}>
                      <div className="flex items-center flex-1">
                        <div className="p-1 bg-orange-500/20 rounded-lg mr-2">
                          <Target className={`text-orange-400 ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-semibold text-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            🎯 Cookie Marketing
                          </h5>
                          {!isMobile && <p className="text-xs text-foreground/70 mt-0.5">
                            Pubblicità personalizzata • Durata: 90 giorni
                          </p>}
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`relative rounded-full transition-all ${
                          preferences.marketing ? 'bg-orange-500 shadow-lg shadow-orange-500/50' : 'bg-gray-400'
                        } ${isMobile ? 'w-10 h-5' : 'w-11 h-6'}`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div className={`absolute bg-white rounded-full transition-transform shadow-md ${
                          preferences.marketing 
                            ? (isMobile ? 'translate-x-5' : 'translate-x-5') 
                            : 'translate-x-1'
                        } ${isMobile ? 'w-3 h-3 top-1' : 'w-4 h-4 top-1'}`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Info scadenza consenso */}
                  <div className="mt-2.5 p-2 bg-indigo-500/5 border border-indigo-500/20 rounded-lg flex items-start space-x-2">
                    <Clock className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground/70">
                      Il tuo consenso sarà valido per 12 mesi. Potrai modificare le tue preferenze in qualsiasi momento tramite il pulsante in basso a destra.
                    </p>
                  </div>

                  {/* Pulsante salva preferenze personalizzate */}
                  <div className="mt-2.5">
                    <button
                      onClick={acceptCurrent}
                      className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all font-semibold ${
                        isMobile ? 'py-2.5 text-sm' : 'py-2.5 text-sm'
                      }`}
                    >
                      💾 Conferma e salva preferenze
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
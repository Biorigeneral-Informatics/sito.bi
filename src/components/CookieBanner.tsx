// src/components/CookieBanner.tsx - Versione GDPR Compliant
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Interfaccia per le preferenze cookie
interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

// Cookie Manager con BLOCCO PREVENTIVO
class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences | null = null;
  private scriptsLoaded = new Set<string>();
  private blockedScripts: string[] = []; // Script bloccati inizialmente
  
  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  constructor() {
    // BLOCCO PREVENTIVO: Blocca tutto all'avvio
    this.preventiveBlock();
    this.loadPreferences();
  }

  // 🔒 BLOCCO PREVENTIVO - Impedisce caricamento script di terze parti
  private preventiveBlock() {
    // 1. Blocca Google Analytics prima che si carichi
    this.blockGoogleAnalytics();
    
    // 2. Blocca altri script di terze parti
    this.blockThirdPartyScripts();
    
    // 3. Monitora tentativi di caricamento script
    this.monitorScriptLoading();
  }

  // Blocca Google Analytics preventivamente
  private blockGoogleAnalytics() {
    // Impedisci caricamento gtag
    (window as any)['ga-disable-G-XXXXXXXXXX'] = true;
    
    // Blocca dataLayer
    if (!(window as any).dataLayer) {
      (window as any).dataLayer = [];
    }
    
    // Sovrascrivi gtag per non fare nulla se chiamato
    (window as any).gtag = function() {
      console.log('🚫 Google Analytics bloccato - consenso non dato');
    };
  }

  // Blocca script di terze parti
  private blockThirdPartyScripts() {
    const originalAppendChild = Document.prototype.appendChild;
    const originalInsertBefore = Document.prototype.insertBefore;
    const self = this;

    // Sovrascrivi appendChild per bloccare script
    Document.prototype.appendChild = function(newChild: any) {
      if (self.shouldBlockScript(newChild)) {
        console.log('🚫 Script bloccato:', newChild.src);
        self.blockedScripts.push(newChild.src);
        return newChild;
      }
      return originalAppendChild.call(this, newChild);
    };

    // Sovrascrivi insertBefore per bloccare script
    Document.prototype.insertBefore = function(newChild: any, referenceChild: any) {
      if (self.shouldBlockScript(newChild)) {
        console.log('🚫 Script bloccato:', newChild.src);
        self.blockedScripts.push(newChild.src);
        return newChild;
      }
      return originalInsertBefore.call(this, newChild, referenceChild);
    };
  }

  // Determina se uno script deve essere bloccato
  private shouldBlockScript(element: any): boolean {
    if (element.tagName === 'SCRIPT' && element.src) {
      const src = element.src.toLowerCase();
      
      // Lista di domini/script da bloccare se non c'è consenso
      const blockedDomains = [
        'googletagmanager.com',
        'google-analytics.com',
        'doubleclick.net',
        'facebook.com',
        'connect.facebook.net',
        'twitter.com',
        'platform.twitter.com',
        // Aggiungi altri domini di tracciamento
      ];

      return blockedDomains.some(domain => src.includes(domain)) && !this.hasAnalyticsConsent();
    }
    return false;
  }

  // Monitora tentativi di caricamento script
  private monitorScriptLoading() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node: any) => {
          if (node.tagName === 'SCRIPT' && this.shouldBlockScript(node)) {
            node.remove();
            console.log('🚫 Script rimosso dopo inserimento:', node.src);
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Carica preferenze da localStorage
  loadPreferences(): CookiePreferences | null {
    try {
      const saved = localStorage.getItem('cookie-preferences');
      if (saved) {
        this.preferences = JSON.parse(saved);
        return this.preferences;
      }
    } catch (error) {
      console.error('Errore caricamento preferenze cookie:', error);
    }
    return null;
  }

  // Salva preferenze e applica le impostazioni
  setPreferences(prefs: CookiePreferences) {
    this.preferences = prefs;
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    
    // Applica le preferenze IMMEDIATAMENTE
    this.applyPreferences(prefs);
  }

  // 🎯 LOGICA CORRETTA: Carica solo SE c'è consenso
  private applyPreferences(prefs: CookiePreferences) {
    console.log('🔄 Applicazione preferenze cookie:', prefs);

    // 1. COOKIE ANALYTICS - Carica SOLO se consentito
    if (prefs.analytics && !this.scriptsLoaded.has('analytics')) {
      this.enableAnalytics();
      this.scriptsLoaded.add('analytics');
    } else if (!prefs.analytics) {
      this.disableAnalytics();
      this.scriptsLoaded.delete('analytics');
    }

    // 2. COOKIE FUNZIONALI - Carica SOLO se consentito
    if (prefs.functional && !this.scriptsLoaded.has('functional')) {
      this.enableFunctionalCookies();
      this.scriptsLoaded.add('functional');
    } else if (!prefs.functional) {
      this.disableFunctionalCookies();
      this.scriptsLoaded.delete('functional');
    }

    // 3. COOKIE NECESSARI (sempre attivi)
    this.loadNecessaryCookies();
  }

  // ✅ Abilita Google Analytics (solo dopo consenso)
  private enableAnalytics() {
    console.log('✅ Abilitazione Google Analytics...');
    
    const GA_ID = 'G-XXXXXXXXXX'; // Sostituisci con il tuo ID
    
    // Rimuovi il blocco
    delete (window as any)['ga-disable-' + GA_ID];
    
    // Carica lo script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Inizializza
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', GA_ID, {
        anonymize_ip: true, // Anonimizza IP per GDPR
        cookie_expires: 365 * 24 * 60 * 60 // Scadenza cookie
      });
      
      (window as any).gtag = gtag;
      console.log('✅ Google Analytics attivato');
    };
  }

  // 🚫 Disabilita Google Analytics
  private disableAnalytics() {
    console.log('🚫 Disabilitazione Google Analytics...');
    
    const GA_ID = 'G-XXXXXXXXXX';
    
    // Blocca GA
    (window as any)['ga-disable-' + GA_ID] = true;
    
    // Rimuovi script esistenti
    const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
    scripts.forEach(script => script.remove());
    
    // Reset gtag
    (window as any).gtag = function() {
      console.log('🚫 Google Analytics disabilitato');
    };
    
    // Rimuovi cookie GA
    this.deleteCookiesByPattern('_ga');
    this.deleteCookiesByPattern('_gid');
    this.deleteCookiesByPattern('_gat');
  }

  // ✅ Abilita cookie funzionali
  private enableFunctionalCookies() {
    console.log('✅ Abilitazione cookie funzionali...');
    
    // Carica widget di chat, preferenze tema, etc.
    // Solo se l'utente ha dato il consenso
    
    // Esempio: Widget di chat
    this.loadChatWidget();
    
    // Esempio: Salvataggio preferenze UI
    this.enableUIPreferences();
  }

  // 🚫 Disabilita cookie funzionali
  private disableFunctionalCookies() {
    console.log('🚫 Disabilitazione cookie funzionali...');
    
    // Rimuovi widget di chat
    const chatWidget = document.querySelector('#chat-widget');
    if (chatWidget) {
      chatWidget.remove();
    }
    
    // Rimuovi cookie funzionali
    this.deleteCookiesByPattern('user_prefs');
    this.deleteCookiesByPattern('chat_');
    this.deleteCookiesByPattern('ui_');
  }

  // Carica widget di chat (esempio)
  private loadChatWidget() {
    // Esempio di caricamento widget solo dopo consenso
    const chatDiv = document.createElement('div');
    chatDiv.id = 'chat-widget';
    chatDiv.innerHTML = '<p>Chat widget caricato (consenso funzionali dato)</p>';
    document.body.appendChild(chatDiv);
  }

  // Abilita salvataggio preferenze UI
  private enableUIPreferences() {
    // Ora può salvare tema, lingua, etc.
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  // Cookie necessari (sempre attivi)
  private loadNecessaryCookies() {
    // Cookie per sicurezza, autenticazione, carrello
    // Questi sono sempre permessi dalla legge GDPR
    console.log('ℹ️ Cookie necessari sempre attivi');
  }

  // Elimina cookie per pattern
  private deleteCookiesByPattern(pattern: string) {
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      const [name] = cookie.trim().split('=');
      if (name.includes(pattern)) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });
  }

  // Verifica consenso analytics
  private hasAnalyticsConsent(): boolean {
    return this.preferences?.analytics === true;
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
    analytics: false,    // ❌ DEFAULT FALSE
    functional: false,   // ❌ DEFAULT FALSE
  });

  const cookieManager = CookieManager.getInstance();

  // ⚠️ LOGICA CORRETTA: Mostra banner se non c'è consenso
  useEffect(() => {
    const savedPreferences = cookieManager.loadPreferences();
    
    if (!savedPreferences) {
      // 🚨 NESSUN CONSENSO = MOSTRA BANNER
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Consenso già dato, applica preferenze
      setPreferences(savedPreferences);
      // NON chiamare cookieManager.setPreferences() qui
      // perché le preferenze sono già applicate dal costruttore
    }
  }, []);

  // ❌ OPT-IN: L'utente deve scegliere attivamente
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

  // ✅ RIFIUTA: Solo cookie necessari
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

  // 💾 Salva preferenze personalizzate
  const savePreferences = () => {
    cookieManager.setPreferences(preferences);
    setIsVisible(false);
  };

  // Gestione cambio preferenze
  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cookie necessari sempre attivi
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
        <div className="glass backdrop-blur-lg bg-background/70 rounded-xl shadow-2xl border border-indigo-500/20 overflow-hidden">
          {/* Barra colorata */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Cookie className="w-6 h-6 text-indigo-400 mr-2" />
                <h3 className="font-bold text-xl">🍪 Consenso Cookie</h3>
              </div>
              <button 
                onClick={rejectNonEssential}
                className="p-1 rounded-full hover:bg-gray-500/10 transition-colors"
                aria-label="Rifiuta cookie non essenziali"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Descrizione */}
            <div className="mb-6">
              <p className="text-foreground/80 mb-3">
                <strong>⚠️ Questo sito rispetta il GDPR:</strong> nessun cookie di tracciamento viene caricato senza il tuo consenso esplicito. 
                Scegli quali cookie accettare.
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
                ✅ Accetta tutti
              </button>
              
              <button
                onClick={rejectNonEssential}
                className="px-5 py-2 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/10 transition-all hover:-translate-y-0.5"
              >
                ❌ Solo necessari
              </button>
              
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-5 py-2 border border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5 flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personalizza
                {showPreferences ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
              </button>
            </div>

            {/* Pannello preferenze */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  variants={preferencesPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-t border-indigo-500/20 pt-4"
                >
                  <h4 className="font-semibold mb-4 text-indigo-400">Personalizza le tue preferenze:</h4>
                  
                  <div className="space-y-4">
                    {/* Cookie necessari */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                      <div>
                        <h5 className="font-medium text-green-400">🔒 Cookie necessari</h5>
                        <p className="text-sm text-foreground/70">Essenziali per il funzionamento del sito</p>
                      </div>
                      <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Cookie analytics */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-indigo-500/20">
                      <div>
                        <h5 className="font-medium">📊 Cookie analitici</h5>
                        <p className="text-sm text-foreground/70">Google Analytics per statistiche anonime</p>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-indigo-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>

                    {/* Cookie funzionali */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-indigo-500/20">
                      <div>
                        <h5 className="font-medium">⚙️ Cookie funzionali</h5>
                        <p className="text-sm text-foreground/70">Chat, preferenze tema e personalizzazione</p>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          preferences.functional ? 'bg-indigo-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.functional ? 'translate-x-5' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Pulsante salva personalizzazioni */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={savePreferences}
                      className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 font-medium"
                    >
                      💾 Salva preferenze
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
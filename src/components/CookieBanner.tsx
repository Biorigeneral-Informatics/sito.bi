// src/components/CookieBanner.tsx
import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, ChevronUp, Cookie, Shield, BarChart, Zap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  // Stati per la gestione dell'UI
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferencesPanelHeight, setPreferencesPanelHeight] = useState('auto');
  
  // Stato per le preferenze dei cookie
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // I cookie necessari sono sempre attivi
    analytics: false,
    functional: false,
  });

  // Ref per il pannello delle preferenze
  const preferencesPanelRef = useRef<HTMLDivElement>(null);

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
    closeBanner();
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
    closeBanner();
    setupCookies(onlyNecessary);
  };

  // Funzione per salvare le preferenze personalizzate
  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    closeBanner();
    setupCookies(preferences);
  };

  // Funzione per chiudere il banner con animazione
  const closeBanner = () => {
    const container = document.querySelector('.cookie-banner-container');
    if (container) {
      container.classList.remove('cookie-banner-animate-in');
      container.classList.add('cookie-banner-animate-out');
      
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
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
      console.log('Inizializzazione cookie analitici');
    }
    
    if (cookiePrefs.functional) {
      console.log('Inizializzazione cookie funzionali');
    }
    
    console.log('Inizializzazione cookie necessari');
  };

  // Gestione dell'apertura delle impostazioni
  const togglePreferences = () => {
    setShowPreferences(prev => {
      if (!prev && preferencesPanelRef.current) {
        const height = preferencesPanelRef.current.scrollHeight;
        setPreferencesPanelHeight(`${height}px`);
      }
      return !prev;
    });
  };

  // Gestisci l'animazione del pannello preferenze
  useEffect(() => {
    const panel = preferencesPanelRef.current;
    if (!panel) return;

    if (showPreferences) {
      panel.style.setProperty('--preferences-height', preferencesPanelHeight);
      panel.classList.remove('preferences-panel-collapsing');
      panel.classList.add('preferences-panel-expanding');
    } else {
      const height = panel.getBoundingClientRect().height;
      panel.style.setProperty('--preferences-height', `${height}px`);
      panel.classList.remove('preferences-panel-expanding');
      panel.classList.add('preferences-panel-collapsing');
    }
  }, [showPreferences, preferencesPanelHeight]);

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-container cookie-banner-animate-in">
      {/* Banner principale */}
      <div className="cookie-banner-main">
        {/* Barra colorata sopra */}
        <div className="cookie-banner-gradient-top"></div>
        
        <div className="cookie-banner-content">
          {/* Intestazione e chiusura */}
          <div className="cookie-banner-header">
            <div className="cookie-banner-title-wrapper">
              <Cookie className="cookie-banner-icon" />
              <h3 className="cookie-banner-title">Impostazioni Cookie</h3>
            </div>
            <button 
              onClick={rejectNonEssential}
              className="cookie-banner-close-btn"
              aria-label="Chiudi banner cookie"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Descrizione */}
          <div className="cookie-banner-description">
            <p>
              Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito, personalizzare contenuti e analizzare il traffico. Puoi scegliere quali cookie accettare.
            </p>
            <p>
              Per maggiori dettagli, consulta la nostra{' '}
              <Link to="/PrivacyPolicy" className="cookie-banner-privacy-link">Privacy Policy</Link>.
            </p>
          </div>
          
          {/* Pulsanti principali */}
          <div className="cookie-banner-buttons">
            <button
              onClick={acceptAll}
              className="cookie-banner-button-accept"
            >
              Accetta tutti
            </button>
            
            <button
              onClick={rejectNonEssential}
              className="cookie-banner-button-reject"
            >
              Rifiuta cookie non essenziali
            </button>
            
            <button
              onClick={togglePreferences}
              className="cookie-banner-button-preferences"
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
          <div 
            ref={preferencesPanelRef} 
            className={`cookie-preferences-panel ${showPreferences ? '' : 'h-0 opacity-0'}`}
            style={{ overflow: 'hidden' }}
          >
            <div className="cookie-preferences-list">
              {/* Cookie necessari */}
              <div className="cookie-preferences-item">
                <div className="cookie-preferences-item-content">
                  <div className="cookie-preferences-icon">
                    <Shield />
                  </div>
                  <div className="cookie-preferences-details">
                    <div className="cookie-preferences-header">
                      <h4 className="cookie-preferences-name">Cookie Necessari</h4>
                      <div className="relative">
                        <button
                          disabled
                          className="cookie-toggle cookie-toggle-active cookie-toggle-disabled"
                        >
                          <span className="cookie-toggle-slider" style={{ right: '4px' }}></span>
                        </button>
                      </div>
                    </div>
                    <p className="cookie-preferences-description">
                      Essenziali per il funzionamento del sito. Consentono funzionalità di base come la navigazione e l'accesso ad aree protette.
                    </p>
                    <div className="cookie-preferences-note">Non richiedono consenso</div>
                  </div>
                </div>
              </div>
              
              {/* Cookie analitici */}
              <div className="cookie-preferences-item">
                <div className="cookie-preferences-item-content">
                  <div className="cookie-preferences-icon">
                    <BarChart />
                  </div>
                  <div className="cookie-preferences-details">
                    <div className="cookie-preferences-header">
                      <h4 className="cookie-preferences-name">Cookie Analitici</h4>
                      <div className="relative">
                        <button
                          onClick={() => handlePreferenceChange('analytics')}
                          className={`cookie-toggle ${preferences.analytics ? 'cookie-toggle-active' : 'cookie-toggle-inactive'}`}
                        >
                          <span 
                            className="cookie-toggle-slider"
                            style={{ 
                              right: preferences.analytics ? '4px' : 'auto',
                              left: preferences.analytics ? 'auto' : '4px'
                            }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <p className="cookie-preferences-description">
                      Ci permettono di contare le visite, le fonti di traffico e comprendere come gli utenti navigano nel sito.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Cookie funzionali */}
              <div className="cookie-preferences-item">
                <div className="cookie-preferences-item-content">
                  <div className="cookie-preferences-icon">
                    <Zap />
                  </div>
                  <div className="cookie-preferences-details">
                    <div className="cookie-preferences-header">
                      <h4 className="cookie-preferences-name">Cookie Funzionali</h4>
                      <div className="relative">
                        <button
                          onClick={() => handlePreferenceChange('functional')}
                          className={`cookie-toggle ${preferences.functional ? 'cookie-toggle-active' : 'cookie-toggle-inactive'}`}
                        >
                          <span 
                            className="cookie-toggle-slider"
                            style={{ 
                              right: preferences.functional ? '4px' : 'auto',
                              left: preferences.functional ? 'auto' : '4px'
                            }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <p className="cookie-preferences-description">
                      Permettono al sito di fornire funzionalità e personalizzazione avanzate, come preferenze e funzioni social.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Pulsante conferma */}
              <div className="cookie-banner-save-action">
                <button
                  onClick={savePreferences}
                  className="cookie-preferences-save-btn"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Salva preferenze
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
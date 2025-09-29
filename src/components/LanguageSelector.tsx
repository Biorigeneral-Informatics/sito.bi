import { useEffect, useRef } from 'react';

const AutoTranslate = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    const langCode = userLang.split('-')[0].toLowerCase();
    
    console.log('🌍 Lingua rilevata:', langCode);
    
    if (langCode === 'it') {
      console.log('✅ Lingua italiana, nessuna traduzione necessaria');
      return;
    }

    console.log('🔄 Caricamento traduttore automatico...');

    // Usa l'attributo translate di Google direttamente
    const loadGoogleTranslate = () => {
      // Aggiungi meta tag per Google Translate
      const meta = document.createElement('meta');
      meta.name = 'google';
      meta.content = 'notranslate';
      document.head.appendChild(meta);
      
      // Poi rimuovilo per permettere la traduzione
      setTimeout(() => {
        meta.remove();
        
        // Trigger traduzione automatica via cookie
        const langMap: { [key: string]: string } = {
          'en': 'en',
          'fr': 'fr',
          'de': 'de',
          'es': 'es',
          'pt': 'pt',
          'zh': 'zh-CN',
          'ja': 'ja',
          'ru': 'ru',
          'ar': 'ar',
          'nl': 'nl',
          'pl': 'pl',
          'sv': 'sv',
          'no': 'no',
          'da': 'da',
          'fi': 'fi'
        };
        
        const targetLang = langMap[langCode] || langCode;
        
        // Imposta il cookie di Google Translate
        document.cookie = `googtrans=/it/${targetLang}; path=/; domain=${window.location.hostname}`;
        document.cookie = `googtrans=/it/${targetLang}; path=/`;
        
        console.log('🍪 Cookie impostato per:', targetLang);
        
        // Crea elemento nascosto per Google Translate
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
        
        // Carica lo script
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        
        (window as any).googleTranslateElementInit = function() {
          console.log('🔧 Inizializzazione widget...');
          if ((window as any).google && (window as any).google.translate) {
            new (window as any).google.translate.TranslateElement({
              pageLanguage: 'it',
              includedLanguages: 'en,fr,de,es,pt,zh-CN,ja,ru,ar,nl,pl,sv,no,da,fi',
              autoDisplay: false
            }, 'google_translate_element');
            
            console.log('✅ Widget inizializzato');
            
            // Forza reload per applicare il cookie
            setTimeout(() => {
              if (!sessionStorage.getItem('translated')) {
                sessionStorage.setItem('translated', 'true');
                console.log('🔄 Ricaricamento per applicare traduzione...');
                window.location.reload();
              }
            }, 100);
          }
        };
        
        document.body.appendChild(script);
        console.log('📥 Script caricato');
        
      }, 100);
    };

    loadGoogleTranslate();

  }, []);

  return (
    <style>{`
      /* Nascondi completamente tutti gli elementi Google Translate */
      body {
        top: 0 !important;
      }
      
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      #google_translate_element,
      .goog-logo-link,
      .goog-te-gadget,
      .skiptranslate iframe,
      body > .skiptranslate {
        display: none !important;
      }
      
      body.translated-ltr {
        top: 0 !important;
      }
      
      .goog-te-spinner-pos {
        display: none !important;
      }
      
      /* Nascondi la barra superiore */
      .goog-te-banner-frame.skiptranslate {
        visibility: hidden !important;
        height: 0 !important;
        display: none !important;
      }
      
      body > iframe.goog-te-banner-frame {
        display: none !important;
      }
    `}</style>
  );
};

export default AutoTranslate;
// src/services/SupabaseCookieService.ts - GDPR COMPLIANT CON IP ANONIMIZZATO
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export class SupabaseCookieService {
  private static instance: SupabaseCookieService | null = null;
  
  // 🔑 Credenziali Supabase dalle variabili d'ambiente
  private readonly SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  private readonly SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

  private constructor() {
    if (!this.SUPABASE_URL || !this.SUPABASE_ANON_KEY) {
      console.error('❌ Variabili d\'ambiente Supabase mancanti!');
      console.error('Assicurati di avere VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY nel file .env');
    }
  }

  static getInstance(): SupabaseCookieService {
    if (!SupabaseCookieService.instance) {
      SupabaseCookieService.instance = new SupabaseCookieService();
    }
    return SupabaseCookieService.instance;
  }

  // 🆔 Genera/recupera session ID univoco
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('cookie_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('cookie_session_id', sessionId);
    }
    return sessionId;
  }

  // 🆕 ANONIMIZZA IP (GDPR COMPLIANCE)
  private anonymizeIP(ip: string): string {
    if (!ip) return 'unknown';
    
    // IPv4: rimuovi ultimo ottetto (es. 192.168.1.100 → 192.168.1.0)
    if (ip.includes('.') && !ip.includes(':')) {
      const parts = ip.split('.');
      if (parts.length === 4) {
        return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
      }
    }
    
    // IPv6: mantieni solo primi 48 bit (es. 2001:db8:abcd:0012::1 → 2001:db8:abcd::)
    if (ip.includes(':')) {
      const segments = ip.split(':').slice(0, 3);
      return `${segments.join(':')}::`;
    }
    
    return 'unknown';
  }

  // 🌐 Ottieni e anonimizza IP (GDPR COMPLIANCE)
  private async getClientIP(): Promise<string | null> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      
      // 🆕 ANONIMIZZA IP PRIMA DI RITORNARLO
      const anonymizedIP = this.anonymizeIP(data.ip);
      console.log('🔒 IP anonimizzato per GDPR compliance');
      
      return anonymizedIP;
    } catch (error) {
      console.log('⚠️ Impossibile ottenere IP:', error);
      return null;
    }
  }

  // 💾 Salva consenso in Supabase via API REST
  async recordConsent(preferences: CookiePreferences): Promise<boolean> {
    try {
      if (!this.SUPABASE_URL || !this.SUPABASE_ANON_KEY) {
        console.error('❌ Configurazione Supabase non valida');
        return false;
      }

      const sessionId = this.getSessionId();
      const clientIP = await this.getClientIP();
      
      // ✅ FIX: Assicurati che i boolean siano esplicitamente true/false
      const consentData = {
        session_id: sessionId,
        ip_address: clientIP,
        user_agent: navigator.userAgent,
        page_url: window.location.href,
        referrer: document.referrer || '',
        necessary: Boolean(preferences.necessary),      
        analytics: Boolean(preferences.analytics),      
        functional: Boolean(preferences.functional),    
        marketing: Boolean(preferences.marketing),      
        consent_data: preferences,
        timestamp: new Date().toISOString()
      };

      console.log('📤 Invio consenso a Supabase...', consentData);
      console.log('🔍 Debug preferenze:', {
        necessary: preferences.necessary,
        analytics: preferences.analytics,
        functional: preferences.functional,
        marketing: preferences.marketing
      });

      console.log('📤 Invio consenso a Supabase...', consentData);

      const response = await fetch(`${this.SUPABASE_URL}/rest/v1/cookie_consents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${this.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(consentData)
      });

      if (response.ok) {
        console.log('✅ Consenso salvato in Supabase');
        return true;
      } else {
        const errorText = await response.text();
        console.error('❌ Errore salvando consenso:', response.status, errorText);
        return false;
      }

    } catch (error) {
      console.error('❌ Errore di rete salvando consenso:', error);
      return false;
    }
  }

  // 🔍 Recupera consenso esistente (opzionale)
  async getConsent(): Promise<any | null> {
    try {
      if (!this.SUPABASE_URL || !this.SUPABASE_ANON_KEY) {
        return null;
      }

      const sessionId = this.getSessionId();
      
      const response = await fetch(
        `${this.SUPABASE_URL}/rest/v1/cookie_consents?session_id=eq.${sessionId}&order=created_at.desc&limit=1`,
        {
          headers: {
            'apikey': this.SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${this.SUPABASE_ANON_KEY}`
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.length > 0 ? data[0] : null;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Errore recuperando consenso:', error);
      return null;
    }
  }

  // 🧪 Metodo per test (rimuovi session ID)
  clearSession(): void {
    sessionStorage.removeItem('cookie_session_id');
    console.log('🗑️ Session ID rimosso per test');
  }
}
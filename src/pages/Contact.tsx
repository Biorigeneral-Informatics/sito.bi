// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageSquare, Calendar, Users, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    service: 'Informazioni generali',
    submitted: false,
    loading: false,
    error: ''
  });
  
 // Configura questi valori con i tuoi ID di EmailJS
 const SERVICE_ID = 'service_nhnagz6';
 const TEMPLATE_ID = 'template_j4o825r'; // Template principale
 const autoReplyTemplateId = 'template_fhnwdy2'; // Template di auto-risposta
 const PUBLIC_KEY = 'AXsuKSAkeJzxB7KTx';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true, error: '' }));
    
    
    // Formatta la data corrente nel formato italiano
    const today = new Date().toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    // Aggiungi la data come campo nascosto prima di inviare
    if (formRef.current) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'today';
      hiddenInput.value = today;
      formRef.current.appendChild(hiddenInput);
    }
    
    // Invia l'email principale (notifica a te)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then((result) => {
        console.log('Email inviata con successo:', result.text);
        
        // Rimuovi il campo nascosto
        if (formRef.current) {
          const hiddenInput = formRef.current.querySelector('input[name="today"]');
          if (hiddenInput) {
            hiddenInput.remove();
          }
        }
        
        // Invia l'email di auto-risposta all'utente (opzionale)
        return emailjs.send(SERVICE_ID, autoReplyTemplateId, {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          service: formState.service,
          today: today,  // Passiamo la data formattata
          to_email: formState.email, // Destinatario (l'utente)
        }, PUBLIC_KEY);
      })
      .then((result) => {
        console.log('Auto-risposta inviata con successo:', result?.text);
        setFormState(prev => ({ 
          ...prev, 
          submitted: true, 
          loading: false,
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          service: 'Informazioni generali'
        }));
      })
      .catch((error) => {
        console.error('Errore nell\'invio dell\'email:', error.text);
        
        // Rimuovi il campo nascosto in caso di errore
        if (formRef.current) {
          const hiddenInput = formRef.current.querySelector('input[name="today"]');
          if (hiddenInput) {
            hiddenInput.remove();
          }
        }
        
        setFormState(prev => ({ 
          ...prev, 
          loading: false, 
          error: 'Si è verificato un errore nell\'invio del form. Per favore riprova o contattaci direttamente via email.' 
        }));
      });
  };

// Effect to clean up HubSpot scripts if they were added
useEffect(() => {
  // Remove any HubSpot script elements if they exist
  const hubspotScripts = document.querySelectorAll('script[src*="hsforms"]');
  hubspotScripts.forEach(script => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });

  // Inizializza EmailJS
  emailjs.init(PUBLIC_KEY);
}, []);

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contattaci</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Siamo qui per aiutarti a trasformare il tuo business con soluzioni tecnologiche innovative
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl md:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-6">Informazioni di Contatto</h2>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:info@biorigeneralinformatics.com" className="text-foreground/80 hover:text-primary transition-colors">
                  info@biorigeneralinformatics.com
                </a>
              </div>
            </div>
            
        
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                <MapPin className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold">Indirizzo</h3>
                <p className="text-foreground/80">
                Via Salara 2/A,<br />
                64026 Roseto degli Abruzzi (TE), Italia
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold">Orari di Lavoro</h3>
                <p className="text-foreground/80">
                  Lun - Ven: 9:00 - 18:00<br />
                  Weekend: Chiuso
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Seguici</h3>
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.225 0h-20.45c-0.975 0-1.775 0.8-1.775 1.775v20.45c0 0.975 0.8 1.775 1.775 1.775h11.025v-8.9h-3v-3.5h3v-2.55c0-2.975 1.825-4.6 4.475-4.6 1.275 0 2.375 0.1 2.7 0.15v3.125h-1.85c-1.45 0-1.725 0.7-1.725 1.7v2.25h3.45l-0.45 3.5h-3v8.875h5.825c0.975 0 1.775-0.8 1.775-1.775v-20.45c0-0.975-0.8-1.775-1.775-1.775z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.12 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.062 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.476c0 1.71.87 3.213 2.188 4.096a4.914 4.914 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl md:col-span-3"
        >
          <h2 className="text-2xl font-bold mb-6">Inviaci un messaggio</h2>
          
          {/* Sostituire il contenitore HubSpot con il nostro form custom */}
          {formState.submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Messaggio Inviato!</h2>
              <p className="text-foreground/70 mb-6">
                Grazie per averci contattato. Ti risponderemo al più presto possibile.
              </p>
              <button 
                onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                className="px-6 py-3 mt-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Invia un altro messaggio
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Errore */}
              {formState.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formState.error}</span>
                </motion.div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground/90">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground/90">
                    Cognome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Inserisci il tuo cognome"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="La tua email di contatto"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-foreground/90">
                  Servizio di interesse <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                  <option value="Informazioni Generali">Informazioni Generali</option>
                  <option value="ChatBot AI">Chatbot AI</option>
                  <option value="Agenti AI">Agenti AI</option>
                  <option value="sviluppatori">Sviluppatori</option>
                  <option value="Piani di Crescita">Piani di Crescita</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/90">
                  Messaggio <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Descrivici il tuo progetto o la tua richiesta..."
                ></textarea>
              </div>
              
              {/* Campi nascosti per EmailJS */}
              <input type="hidden" name="subject" value={`[Biorigeneralinformatics] Richiesta info: ${formState.service}`} />
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={formState.loading}
                  className={`px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                           hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center
                           focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto
                           ${formState.loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {formState.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    'Invia Messaggio'
                  )}
                </button>
                
                <a
                  href="https://calendly.com/biorigeneralinformatics/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all flex items-center justify-center w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Prenota una call
                </a>
              </div>
              
              <p className="text-xs text-foreground/60 mt-4">
                * I campi contrassegnati con l'asterisco sono obbligatori. I tuoi dati saranno trattati secondo la nostra <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>
      
      {/* La sezione CTA per video consulenza è stata rimossa */}
{/* CTA per video consulenza - Design corretto e ben allineato */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-16 relative overflow-hidden"
>
  {/* Elementi decorativi di sfondo */}
  <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/20 filter blur-3xl"></div>
  <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-500/20 filter blur-3xl"></div>
  
  <div className="glass border border-white/10 rounded-2xl overflow-hidden">
    {/* Linea gradiente superiore */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"></div>
    
    {/* Forma decorativa */}
    <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-indigo-500/20 opacity-50"></div>
    <div className="absolute right-10 top-10 w-32 h-32 rounded-full border-2 border-violet-500/20 opacity-30"></div>
    <div className="absolute right-20 top-20 w-16 h-16 rounded-full bg-violet-500/10"></div>
    
    <div className="relative z-10 p-8 md:p-10">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Colonna sinistra - Testuale CORRETTA */}
        <div className="md:col-span-7">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Video consulenza esclusiva
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Discutiamo la tua <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">visione</span>
            <br className="hidden md:block" /> in una <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">video call</span>
          </h3>
          
          <p className="text-foreground/70 text-lg mb-8 max-w-xl">
            Prenota una sessione gratuita di 30 minuti con un nostro esperto per ricevere 
            insights personalizzati sulle tue sfide digitali.
          </p>
          
          {/* Timeline senza linea verticale */}
          <div className="relative pl-10 mb-6 max-w-xl">            
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                </div>
                <h4 className="font-bold text-base">Prenota facilmente</h4>
                <p className="text-foreground/70">Scegli data e ora secondo la tua disponibilità</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                </div>
                <h4 className="font-bold text-base">Confronto con esperti</h4>
                <p className="text-foreground/70">Ricevi consigli personalizzati per il tuo progetto</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <h4 className="font-bold text-base">Piano d'azione chiaro</h4>
                <p className="text-foreground/70">Ottieni una roadmap concreta per i prossimi passi</p>
              </div>
            </div>
          </div>
          
          {/* Statistiche allineate correttamente */}
          <div className="grid grid-cols-3 gap-4 mb-6 max-w-xl">
            <div className="text-center p-3 glass rounded-lg border border-indigo-500/20">
              <div className="text-2xl font-bold text-indigo-400">30</div>
              <div className="text-xs text-foreground/70">Minuti gratuiti</div>
            </div>
            <div className="text-center p-3 glass rounded-lg border border-violet-500/20">
              <div className="text-2xl font-bold text-violet-400">100%</div>
              <div className="text-xs text-foreground/70">Personalizzato</div>
            </div>
            <div className="text-center p-3 glass rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">0€</div>
              <div className="text-xs text-foreground/70">Senza impegno</div>
            </div>
          </div>
        </div>
        
        {/* Colonna destra - Elemento visivo (rimanendo uguale) */}
        <div className="md:col-span-5 relative">
          <div className="relative glass p-6 rounded-2xl border border-white/10 overflow-hidden group">
            {/* Sfondo animato */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-blue-500/10 opacity-50 
                         group-hover:opacity-80 transition-opacity duration-700"></div>
                         
            {/* Video call illustration */}
            <div className="relative z-10 mb-8">
              <div className="w-full rounded-xl overflow-hidden border-2 border-white/20 shadow-xl aspect-video flex flex-col">
                <div className="h-6 bg-foreground/10 flex items-center px-2 gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-center text-xs text-foreground/50 flex-grow">Video Call</div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/40 mb-2 flex items-center justify-center">
                    <Users className="w-10 h-10 text-indigo-400" />
                  </div>
                  
                  <div className="w-full flex justify-center space-x-3 mt-3">
                    <div className="w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.14 19.14L17.17 17.17M6.83 6.83L4.86 4.86M12 2.5V1M12 23V21.5M2.5 12H1M23 12H21.5M6.83 17.17L4.86 19.14M19.14 4.86L17.17 6.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Indicatori animati */}
              <div className="absolute w-4 h-4 top-10 right-6 animate-pulse-echo">
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="absolute inset-0 rounded-full bg-green-500"></span>
              </div>
              
              <div className="absolute bottom-4 left-10 flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span className="text-xs text-white/80">Live</span>
              </div>
            </div>
            
            {/* Disponibilità */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-bold text-lg">Prossima disponibilità</h4>
                <p className="text-foreground/60 text-sm">Questa settimana</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            
            {/* CTA con effetto elegante */}
            <a
              href="https://calendly.com/biorigeneralinformatics/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn block w-full py-4 px-6 relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>
              
              {/* Particelle animate */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-10 bg-white/30 rounded-full transform rotate-45"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: '100%',
                      animation: `particleRise 1.5s ease-out infinite`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="relative z-10 flex items-center justify-center">
                <span className="font-bold text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prenota la tua sessione
                </span>
                <div className="absolute right-4 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-2 
                              transform group-hover/btn:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <div className="text-center mt-4 text-foreground/60 text-xs">
              30 minuti gratuiti • Esperti disponibili • Nessun impegno
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* CSS per animazioni avanzate */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes particleRise {
      0% { transform: translateY(0) rotate(45deg); opacity: 0.7; }
      100% { transform: translateY(-100px) rotate(45deg); opacity: 0; }
    }
    
    @keyframes pulse-echo {
      0% { transform: scale(0.95); }
      50% { transform: scale(1.05); }
      100% { transform: scale(0.95); }
    }
  `}} />
</motion.div>
      
{/* Google Maps con API */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-16 glass p-6 rounded-2xl h-80 overflow-hidden"
>
  <div className="w-full h-full relative">
    {/* Integrazione Google Maps */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.1404037249825!2d14.017839776582055!3d42.6761344160489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331931bb59b0b5d%3A0x6ce7c21d75130b93!2sVia%20Salara%2C%202%2C%2064026%20Roseto%20degli%20Abruzzi%20TE!5e0!3m2!1sit!2sit!4v1713821438985!5m2!1sit!2sit"
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl"
      title="Mappa dell'ufficio"
    ></iframe>
    
    {/* Overlay con informazioni */}
    <div className="absolute top-3 left-3 glass p-3 rounded-lg border border-white/10 max-w-xs">
      <h3 className="text-lg font-bold flex items-center">
        <MapPin className="w-5 h-5 text-primary mr-2" />
        Sede Principale
      </h3>
      <p className="text-sm text-foreground/70">
        Via Salara 2/A, 64026 Roseto degli Abruzzi (TE), Italia
      </p>
    </div>
  </div>
</motion.div>
      
{/* FAQ Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="mt-16 glass p-8 rounded-2xl"
>
  <h2 className="text-2xl font-bold mb-8 text-center">Domande Frequenti</h2>
  
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
        Quanto tempo richiede lo sviluppo di un progetto?
      </h3>
      <p className="text-foreground/70 pl-7">
        I tempi di sviluppo variano in base alla complessità del progetto. Generalmente, i progetti più semplici richiedono 1-2 mesi, mentre quelli più complessi possono richiedere 3-6 mesi. Durante la fase iniziale di scoperta, forniremo una stima dettagliata dei tempi.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
        Quanto costa sviluppare un'applicazione web o mobile?
      </h3>
      <p className="text-foreground/70 pl-7">
        I costi dipendono dalla complessità, dalle funzionalità richieste e dalla piattaforma di destinazione. Offriamo soluzioni personalizzate in base al tuo budget e alle tue esigenze. Contattaci per una consulenza gratuita e un preventivo dettagliato.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
        Offrite supporto e manutenzione dopo il lancio?
      </h3>
      <p className="text-foreground/70 pl-7">
        Sì, offriamo servizi di supporto e manutenzione continui per tutte le nostre soluzioni. Abbiamo diversi piani di supporto, dall'assistenza base alla manutenzione completa 24/7, in base alle esigenze del cliente.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
        In quali settori avete esperienza?
      </h3>
      <p className="text-foreground/70 pl-7">
        Abbiamo esperienza in diversi settori tra cui finanza, sanità, e-commerce, istruzione, manifattura e servizi professionali. La nostra diversificata esperienza ci permette di comprendere le sfide specifiche di ciascun settore.
      </p>
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default Contact;
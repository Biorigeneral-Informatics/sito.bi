// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageSquare, Calendar, Users, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('contact'); 

const Contact = () => {

   <>
    <SEO 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonicalUrl={seoData.canonicalUrl}
    />
  </>
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

  useEffect(() => {
    if (formState.submitted) {
      const timer = setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.submitted]);

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-primary">
          Entra in contatto
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Siamo qui per rispondere alle tue domande e trasformare le tue idee in realtà digitale
        </p>
      </motion.div>

      {/* Layout originale md:grid-cols-5 */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
        {/* Informazioni di contatto (prima colonna, md:col-span-2) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Informazioni di contatto
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-600/20 flex items-center justify-center mt-1">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <a 
                  href="mailto:info@biorigeneral.com" 
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  info@biorigeneralinformatics.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-600/20 flex items-center justify-center mt-1">
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Indirizzo</h3>
                <p className="text-gray-400">
                Via Salara 2/A,<br />
                64026 Roseto degli Abruzzi (TE), Italia
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-600/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Orari di Lavoro</h3>
                <p className="text-gray-400">
                  Lun - Ven: <span className="text-green-500">9:00 - 18:00</span><br />
                  Weekend: Chiuso
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-white mt-8">Seguici</h3>
          <div className="flex space-x-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61558498713588" 
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.225 0h-20.45c-0.975 0-1.775 0.8-1.775 1.775v20.45c0 0.975 0.8 1.775 1.775 1.775h11.025v-8.9h-3v-3.5h3v-2.55c0-2.975 1.825-4.6 4.475-4.6 1.275 0 2.375 0.1 2.7 0.15v3.125h-1.85c-1.45 0-1.725 0.7-1.725 1.7v2.25h3.45l-0.45 3.5h-3v8.875h5.825c0.975 0 1.775-0.8 1.775-1.775v-20.45c0-0.975-0.8-1.775-1.775-1.775z" />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@federicozizi_ai" 
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/biorigeneral-informatics/?viewAsMember=true" 
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Form di Contatto (seconda colonna, md:col-span-3) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl md:col-span-3"
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Inviaci un messaggio
          </h2>
          
          {formState.submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Messaggio Inviato!</h2>
              <p className="text-gray-400 mb-6">
                Grazie per averci contattato. Ti risponderemo al più presto possibile.
              </p>
              <button 
                onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Invia un altro messaggio
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    Nome <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-gray-400"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">
                    Cognome <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-gray-400"
                    placeholder="Inserisci il tuo cognome"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email <span className="text-green-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-gray-400"
                  placeholder="inserisci@tuaemail.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-white">
                  Servizio di interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white"
                >
                  <option value="Informazioni generali">Informazioni generali</option>
                  <option value="AI Agents">AI Agents</option>
                  <option value="Chatbot AI">Chatbot AI</option>
                  <option value="Software PMI">Software PMI</option>
                  <option value="Team di sviluppo">Team di sviluppo</option>
                  <option value="Piani di crescita">Piani di crescita</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Messaggio <span className="text-green-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-gray-400 resize-none"
                  placeholder="Descrivi il tuo progetto o le tue esigenze..."
                />
              </div>
              
              {formState.error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {formState.error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={formState.loading}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    <span>Invia Messaggio</span>
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-400">
                I tuoi dati saranno trattati secondo la nostra <a href="/privacy-policy" className="text-green-500 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      {/* CTA per video consulenza - Struttura originale mantenuta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 relative overflow-hidden"
      >
        {/* Elementi decorativi di sfondo - aggiornati ai colori verdi */}
        
        <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-green-500/20 filter blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl"></div>
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {/* Linea gradiente superiore */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>
          
          {/* Forma decorativa */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-green-500/20 opacity-50"></div>
          <div className="absolute right-10 top-10 w-32 h-32 rounded-full border-2 border-gray-500/20 opacity-30"></div>
          <div className="absolute right-20 top-20 w-16 h-16 rounded-full bg-green-500/10"></div>
          
          <div className="relative z-10 p-8 md:p-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Colonna sinistra - Testuale */}
              <div className="md:col-span-7">
                <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Video consulenza esclusiva
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight text-primary">
                  Discutiamo la tua <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">visione</span>
                  <br className="hidden md:block" /> in una <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">video call</span>
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 max-w-xl">
                  Prenota una sessione gratuita di 30 minuti con un nostro esperto per ricevere 
                  insights personalizzati sulle tue sfide digitali.
                </p>
                
                {/* Timeline senza linea verticale */}
                <div className="relative pl-10 mb-6 max-w-xl">            
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <h4 className="font-bold text-base text-white">Prenota facilmente</h4>
                      <p className="text-gray-400">Scegli data e ora secondo la tua disponibilità</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <h4 className="font-bold text-base text-white">Confronto con esperti</h4>
                      <p className="text-gray-400">Ricevi consigli personalizzati per il tuo progetto</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <h4 className="font-bold text-base text-white">Piano d'azione chiaro</h4>
                      <p className="text-gray-400">Ottieni una roadmap concreta per i prossimi passi</p>
                    </div>
                  </div>
                </div>
                
                {/* Statistiche allineate correttamente */}
                <div className="grid grid-cols-3 gap-4 mb-6 max-w-xl">
                  <div className="text-center p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">30</div>
                    <div className="text-xs text-gray-400">Minuti gratuiti</div>
                  </div>
                  <div className="text-center p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-xs text-gray-400">Personalizzato</div>
                  </div>
                  <div className="text-center p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">0€</div>
                    <div className="text-xs text-gray-400">Senza impegno</div>
                  </div>
                </div>
              </div>
              
              {/* Colonna destra - Elemento visivo */}
              <div className="md:col-span-5 relative">
                <div className="relative backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl overflow-hidden group shadow-xl">
                  {/* Sfondo animato */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-cyan-500/10 opacity-50 
                               group-hover:opacity-80 transition-opacity duration-700"></div>
                               
                  {/* Video call illustration */}
                  <div className="relative z-10 mb-8">
                    <div className="w-full rounded-xl overflow-hidden border-2 border-white/20 shadow-xl aspect-video flex flex-col">
                      <div className="h-6 bg-gray-600/20 flex items-center px-2 gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-center text-xs text-gray-400 flex-grow">Video Call</div>
                      </div>
                      
                      <div className="flex-grow bg-gradient-to-br   flex flex-col items-center justify-center p-4">
                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                          <Users className="w-10 h-10 text-grey-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-white">Sessione 1:1</p>
                          <p className="text-xs text-gray-400">con un esperto</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulsante CTA */}
                  <div className="relative z-10">
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                     onClick={() => window.open('https://calendly.com/biorigeneralinformatics/30min', '_blank', 'noopener,noreferrer')}
                      >
                      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Prenota Consulenza Gratuita</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
          Domande frequenti
        </h3>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-white">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
              Quanto tempo richiedono i vostri progetti?
            </h3>
            <p className="text-gray-400 pl-7">
              I tempi variano in base alla complessità. Progetti semplici richiedono <span className="text-green-500">2-4 settimane</span>, 
              mentre soluzioni enterprise possono richiedere <span className="text-green-500">2-6 mesi</span>.
            </p>
          </div>
          
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-white">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
              Posso richiedere una consulenza gratuita?
            </h3>
            <p className="text-gray-400 pl-7">
              Offriamo una <span className="text-green-500">consulenza iniziale gratuita</span> di 30 minuti 
              per discutere il tuo progetto e le possibili soluzioni.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-white">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
              Come funziona il processo di sviluppo?
            </h3>
            <p className="text-gray-400 pl-7">
              Seguiamo un approccio <span className="text-green-500">agile</span>: analisi, prototipazione, 
              sviluppo iterativo con feedback continui e testing approfondito.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-white">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
              Quanto costa sviluppare un'applicazione web o mobile?
            </h3>
            <p className="text-gray-400 pl-7">
              I costi dipendono dalla complessità, dalle funzionalità richieste e dalla piattaforma di destinazione. 
              Offriamo soluzioni personalizzate in base al tuo <span className="text-green-500">budget</span> e alle tue esigenze. 
              Contattaci per una consulenza gratuita e un preventivo dettagliato.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-white">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
              Offrite supporto e manutenzione dopo il lancio?
            </h3>
            <p className="text-gray-400 pl-7">
              Sì, offriamo servizi di supporto e manutenzione continui per tutte le nostre soluzioni. 
              Abbiamo diversi <span className="text-green-500">piani di supporto</span>, dall'assistenza base alla manutenzione completa 24/7, 
              in base alle esigenze del cliente.
            </p>
          </div>
          
        
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
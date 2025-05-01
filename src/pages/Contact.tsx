import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  // Effect to create HubSpot form after component mounts
  useEffect(() => {
    // Create script for HubSpot forms
    const script1 = document.createElement('script');
    script1.charset = 'utf-8';
    script1.type = 'text/javascript';
    script1.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script1.async = true;
    
    // Create script for form creation
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.innerHTML = `
      (function() {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "144593984",
            formId: "4afa40f5-1683-4f2d-b3b5-b3a1303238fb",
            region: "eu1",
            target: "#hubspot-form-container"
          });
        }
      })();
    `;
    
    // Add scripts to document
    document.body.appendChild(script1);
    
    // Add the second script after the first one loads
    script1.onload = () => {
      document.body.appendChild(script2);
    };
    
    // Cleanup
    return () => {
      document.body.removeChild(script1);
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
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
                <a href="mailto:contact@biorigeneral.com" className="text-foreground/80 hover:text-primary transition-colors">
                  biorigeneralinformatics@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold">Telefono</h3>
                <a href="tel:+390212345678" className="text-foreground/80 hover:text-primary transition-colors">
                  +39 392 015 8140 (Whatsapp)
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
          
          {/* HubSpot Form Container */}
          <div id="hubspot-form-container"></div>
        </motion.div>
      </div>
      
      {/* La sezione CTA per video consulenza è stata rimossa */}

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
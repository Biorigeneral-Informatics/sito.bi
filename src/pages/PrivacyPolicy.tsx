// src/pages/PrivacyPolicy.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Database, Cookie, FileText, 
  FileCheck, Globe, Clock, Monitor, Mail, 
  Fingerprint, AlertCircle, Users, UserCheck, 
  KeyRound, Eye, Server,
  MapPin,
  Shield
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SectionTitle = ({ icon: Icon, title, number }: { icon: React.ComponentType<any>; title: string; number: string }) => (
    <div className="flex items-center mb-6 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 mr-4 transition-all duration-300 group-hover:bg-indigo-500/20">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div>
        <div className="text-sm font-medium text-indigo-400">{number}</div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );

  return (
    <>
      {/* Gradient backgrounds */}
      <ScrollGradient 
        colorStart="rgba(79, 70, 229, 0.15)" 
        colorEnd="rgba(16, 185, 129, 0.15)" 
      />
      <ScrollGradient 
        colorStart="rgba(99, 102, 241, 0.10)"
        colorEnd="rgba(6, 182, 212, 0.10)"
        reverse={true} 
      />

      {/* Header Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-indigo-500/10 p-5 shadow-inner shadow-indigo-500/5">
                <ShieldCheck className="w-12 h-12 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Privacy e Cookie Policy
              </span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Come proteggiamo i tuoi dati personali e utilizziamo i cookie durante la tua esperienza con i nostri servizi.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full border border-indigo-400/20 opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-24 h-24 rounded-full border border-cyan-400/20 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-10 h-10 rounded-full bg-indigo-500/20 opacity-70"></div>
      </section>

      {/* Data aggiornamento - con stile migliorato */}
      <section className="py-4 mb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center max-w-5xl mx-auto pl-4 border-l-4 border-indigo-400/30">
            <Clock className="w-5 h-5 text-indigo-400 mr-3" />
            <span className="text-foreground/70">Ultimo aggiornamento: 1 Maggio 2025</span>
          </div>
        </div>
      </section>

      {/* Main Content Section - Layout migliorato */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Introduzione */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={FileText} title="Introduzione" number="Sezione 1" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Biorigeneral Informatics ("noi", "nostro", "Società") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa Privacy Policy ti informa su come raccogliamo, utilizziamo, condividiamo e proteggiamo i tuoi dati personali quando interagisci con i nostri servizi, applicazioni, sito web e prodotti (collettivamente, i "Servizi").
                  </p>
                  <p className="text-lg leading-relaxed">
                    Questa policy è conforme al Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea e ad altre normative sulla privacy applicabili, incluso il Codice Privacy italiano (Decreto Legislativo 196/2003) come modificato dal Decreto Legislativo 101/2018.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Titolare del Trattamento */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Users} title="Titolare del Trattamento" number="Sezione 2" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Il Titolare del trattamento dei dati personali è <strong>Biorigeneral Informatics</strong>, con sede legale in Via Salara 2/A, 64026 Roseto degli Abruzzi (TE), Italia, P.IVA [Inserire P.IVA], contattabile all'indirizzo email: <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Al momento non è stato nominato un Responsabile della Protezione dei Dati (DPO) poiché non siamo soggetti all'obbligo di designazione ai sensi dell'art. 37 del GDPR. In ogni caso, per qualsiasi questione relativa al trattamento dei tuoi dati personali e per esercitare i tuoi diritti, puoi contattarci utilizzando le informazioni sopra indicate.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Dati che Raccogliamo */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Database} title="Dati che Raccogliamo" number="Sezione 3" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Per fornirti i nostri Servizi, raccogliamo e trattiamo diverse categorie di dati personali. La natura e la quantità di informazioni che raccogliamo dipendono dal tipo di interazione che hai con noi.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 transition-all duration-300 hover:bg-indigo-500/10">
                      <div className="flex items-center mb-4">
                        <Fingerprint className="w-6 h-6 text-indigo-400 mr-3" />
                        <h3 className="text-xl font-semibold">Dati Identificativi</h3>
                      </div>
                      <p className="text-foreground/70">
                        Nome, cognome, data di nascita, indirizzo email, numero di telefono, indirizzo postale, codice fiscale o partita IVA per clienti aziendali.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 transition-all duration-300 hover:bg-indigo-500/10">
                      <div className="flex items-center mb-4">
                        <KeyRound className="w-6 h-6 text-indigo-400 mr-3" />
                        <h3 className="text-xl font-semibold">Dati di Accesso</h3>
                      </div>
                      <p className="text-foreground/70">
                        Username, password criptata, dati di autenticazione e informazioni di sicurezza utilizzate per accedere e gestire il tuo account.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 transition-all duration-300 hover:bg-indigo-500/10">
                      <div className="flex items-center mb-4">
                        <Monitor className="w-6 h-6 text-indigo-400 mr-3" />
                        <h3 className="text-xl font-semibold">Dati Tecnici</h3>
                      </div>
                      <p className="text-foreground/70">
                        Indirizzo IP, dati di login, tipo e versione del browser, impostazioni del fuso orario, sistema operativo, risoluzione dello schermo e altre informazioni sul dispositivo.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 transition-all duration-300 hover:bg-indigo-500/10">
                      <div className="flex items-center mb-4">
                        <Eye className="w-6 h-6 text-indigo-400 mr-3" />
                        <h3 className="text-xl font-semibold">Dati di Utilizzo</h3>
                      </div>
                      <p className="text-foreground/70">
                        Informazioni su come utilizzi il nostro sito, quali pagine visiti, per quanto tempo, quali funzionalità usi e altri dettagli sulla tua interazione con i nostri Servizi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-5 border-l-4 border-amber-400/50 bg-amber-400/5 rounded-r-lg">
                    <h4 className="text-lg font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      Categorie particolari di dati
                    </h4>
                    <p className="mt-2">
                      Non raccogliamo deliberatamente categorie particolari di dati personali (come informazioni su salute, orientamento sessuale, opinioni politiche, credenze religiose o filosofiche) a meno che non sia strettamente necessario per fornire un servizio specifico richiesto dall'utente e con esplicito consenso.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Come Utilizziamo i Tuoi Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Lock} title="Come Utilizziamo i Tuoi Dati" number="Sezione 4" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Trattiamo i tuoi dati personali solo in presenza di una base giuridica adeguata. La nostra attività di trattamento si fonda su una delle seguenti basi giuridiche:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">Esecuzione di un contratto</h3>
                      <p className="text-foreground/70">
                        Quando il trattamento è necessario per l'esecuzione di un contratto di cui sei parte o per prendere misure su tua richiesta prima di stipulare un contratto.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">Legittimo interesse</h3>
                      <p className="text-foreground/70">
                        Quando il trattamento è necessario per i nostri legittimi interessi o quelli di terzi, a condizione che non prevalgano i tuoi diritti e libertà fondamentali.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">Obbligo legale</h3>
                      <p className="text-foreground/70">
                        Quando il trattamento è necessario per adempiere a un obbligo legale al quale siamo soggetti, come la conservazione di documenti fiscali.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">Consenso</h3>
                      <p className="text-foreground/70">
                        Quando ci hai fornito il tuo consenso esplicito per trattare i tuoi dati personali per una o più finalità specifiche.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg mt-8 font-medium">Gli scopi specifici per cui trattiamo i tuoi dati personali includono:</p>
                  
                  <ul className="list-disc space-y-3 pl-6 mt-4">
                    <li>Fornitura e gestione dei Servizi richiesti, inclusa l'amministrazione del tuo account</li>
                    <li>Elaborazione e completamento dei pagamenti, fatturazione e invio di comunicazioni relative</li>
                    <li>Assistenza clienti e risposta alle tue richieste, domande o reclami</li>
                    <li>Miglioramento e personalizzazione dei nostri Servizi in base alle tue preferenze e comportamenti</li>
                    <li>Invio di comunicazioni necessarie relative al servizio (aggiornamenti, avvisi di sicurezza, ecc.)</li>
                    <li>Previo tuo consenso, invio di newsletter e comunicazioni di marketing su novità, offerte e servizi</li>
                    <li>Analisi dell'uso del sito web per ottimizzare la funzionalità e migliorare l'esperienza utente</li>
                    <li>Individuazione e prevenzione di frodi, abusi e minacce alla sicurezza</li>
                    <li>Adempimento di obblighi di legge, contabili, fiscali e normativi</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            {/* Cookie e Tecnologie Simili */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Cookie} title="Cookie e Tecnologie Simili" number="Sezione 5" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Il nostro sito web utilizza cookie e tecnologie di tracciamento simili per migliorare la tua esperienza di navigazione, analizzare l'uso del sito e personalizzare i contenuti. I cookie sono piccoli file di testo archiviati sul tuo dispositivo che consentono al sito web di riconoscere il tuo browser durante le visite successive.
                  </p>
                  
                  <div className="mt-8 space-y-6">
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 to-transparent relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-25 bg-gradient-to-l from-indigo-400/10 to-transparent"></div>
                      <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cookie Necessari</h3>
                      <p className="max-w-3xl">
                        Essenziali per il funzionamento del sito. Consentono funzionalità di base come la navigazione e l'accesso ad aree protette. Il sito non può funzionare correttamente senza questi cookie.
                      </p>
                      <div className="text-sm mt-2 text-indigo-400/70">Non richiedono consenso</div>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 to-transparent relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-25 bg-gradient-to-l from-indigo-400/10 to-transparent"></div>
                      <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cookie Analitici</h3>
                      <p className="max-w-3xl">
                        Ci permettono di contare le visite, le fonti di traffico e comprendere come gli utenti navigano nel sito. Ci aiutano a migliorare il funzionamento del sito raccogliendo e analizzando informazioni in forma anonima.
                      </p>
                      <div className="text-sm mt-2 text-indigo-400/70">Richiedono consenso se non anonimizzati</div>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 to-transparent relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-25 bg-gradient-to-l from-indigo-400/10 to-transparent"></div>
                      <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cookie Funzionali</h3>
                      <p className="max-w-3xl">
                        Permettono al sito di fornire funzionalità e personalizzazione avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine.
                      </p>
                      <div className="text-sm mt-2 text-indigo-400/70">Richiedono consenso</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                    <h4 className="text-lg font-medium mb-4">Gestione delle Preferenze sui Cookie</h4>
                    <p className="mb-4">
                      Puoi gestire le tue preferenze sui cookie in diversi modi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Utilizzando il nostro banner dei cookie o il pannello delle preferenze quando visiti il sito</li>
                      <li>Configurando le impostazioni del tuo browser per bloccare o eliminare i cookie</li>
                      <li>Utilizzando strumenti di opt-out forniti da servizi di analisi come Google Analytics</li>
                    </ul>
                    <p className="mt-4 text-amber-400">
                      Nota: la disabilitazione di alcuni cookie potrebbe influire sulla tua esperienza di navigazione e limitare alcune funzionalità del nostro sito.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Condivisione dei Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Server} title="Condivisione dei Dati" number="Sezione 6" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    La protezione dei tuoi dati è una nostra priorità. Limitiamo la condivisione dei tuoi dati personali solo a quanto strettamente necessario per fornirti i Servizi richiesti e nel rispetto delle normative vigenti. Possiamo condividere i tuoi dati con le seguenti categorie di destinatari:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Fornitori di Servizi</h3>
                      <p>
                        Partner esterni che ci aiutano a gestire il nostro business e a fornire i Servizi, come provider di hosting, servizi di elaborazione pagamenti, supporto tecnico e strumenti di analisi. Questi fornitori hanno accesso solo ai dati personali necessari per svolgere le loro funzioni e sono contrattualmente obbligati a mantenerli riservati.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Società Affiliate</h3>
                      <p>
                        Possiamo condividere i tuoi dati con altre entità del nostro gruppo aziendale, se necessario per fornire i Servizi o per finalità amministrative interne.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Autorità Pubbliche</h3>
                      <p>
                        Quando richiesto dalla legge, da un procedimento legale, da un'autorità governativa o giudiziaria, o per proteggere i nostri diritti legali o quelli dei nostri utenti.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Con il Tuo Consenso</h3>
                      <p>
                        In altri casi non specificati sopra, chiederemo sempre il tuo consenso esplicito prima di condividere i tuoi dati personali con terze parti.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 flex items-start">
                    <ShieldCheck className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-500">Il nostro impegno</h4>
                      <p className="mt-1">Non vendiamo, affittiamo o scambiamo i tuoi dati personali con terze parti per finalità di marketing senza il tuo consenso esplicito. Ogni condivisione di dati avviene nel rispetto delle leggi sulla protezione dei dati e con adeguate misure di sicurezza.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Trasferimenti Internazionali di Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Globe} title="Trasferimenti Internazionali di Dati" number="Sezione 7" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    I tuoi dati personali potrebbero essere archiviati ed elaborati in qualsiasi paese in cui abbiamo strutture o in cui impieghiamo fornitori di servizi. Ciò significa che potremmo trasferire i tuoi dati a giurisdizioni al di fuori dello Spazio Economico Europeo (SEE) o del tuo paese di residenza.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Quando trasferiamo dati personali al di fuori del SEE, adottiamo misure appropriate per garantire che i tuoi dati ricevano un livello di protezione adeguato, in conformità con il GDPR e altre leggi applicabili sulla protezione dei dati.
                  </p>
                  
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Meccanismi di trasferimento che utilizziamo:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Decisioni di adeguatezza</span>
                          <p className="text-foreground/70 mt-1">Trasferiamo dati verso paesi che la Commissione Europea ha riconosciuto come in grado di fornire un livello adeguato di protezione dei dati.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Clausole contrattuali standard</span>
                          <p className="text-foreground/70 mt-1">Utilizziamo le clausole contrattuali standard approvate dalla Commissione Europea per i trasferimenti di dati verso paesi terzi.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Valutazioni d'impatto</span>
                          <p className="text-foreground/70 mt-1">Effettuiamo valutazioni d'impatto per verificare che i trasferimenti verso paesi terzi offrano adeguate garanzie di protezione.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-base mt-8">
                    Per ottenere ulteriori informazioni sulle salvaguardie specifiche che applichiamo ai trasferimenti internazionali di dati, puoi contattarci utilizzando i dettagli forniti nella sezione "Contattaci".
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Sicurezza dei Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Lock} title="Sicurezza dei Dati" number="Sezione 8" />
                <div className="space-y-6 text-foreground/80 pl-16">
                <p className="text-lg leading-relaxed">
                    La sicurezza dei tuoi dati personali è fondamentale per noi. Implementiamo appropriate misure tecniche e organizzative per proteggere i tuoi dati personali da perdita, uso improprio, accesso non autorizzato, divulgazione o alterazione.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:bg-indigo-500/10 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">
                          <Lock className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="font-semibold">Crittografia dei dati</h3>
                      </div>
                      <p className="text-foreground/70">
                        Utilizziamo protocolli di crittografia avanzati per proteggere i dati durante la trasmissione e l'archiviazione.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:bg-indigo-500/10 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">
                          <Shield className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="font-semibold">Controlli di accesso</h3>
                      </div>
                      <p className="text-foreground/70">
                        Implementiamo rigorosi controlli di accesso per limitare chi può accedere ai tuoi dati e per quale scopo.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:bg-indigo-500/10 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">
                          <Server className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="font-semibold">Infrastruttura sicura</h3>
                      </div>
                      <p className="text-foreground/70">
                        I nostri server sono ospitati in strutture sicure con protezioni fisiche ed elettroniche all'avanguardia.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:bg-indigo-500/10 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">
                          <FileCheck className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="font-semibold">Audit regolari</h3>
                      </div>
                      <p className="text-foreground/70">
                        Conduciamo regolarmente test di sicurezza e verifiche delle vulnerabilità per garantire la conformità con i più alti standard.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-8">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      Segnalazione di vulnerabilità
                    </h4>
                    <p className="mt-2">
                      In caso di violazione dei dati che comporti un rischio per i tuoi diritti e libertà, ti informeremo tempestivamente, in conformità con gli obblighi di legge. Collaboreremo inoltre con le autorità competenti come richiesto dalla normativa.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* I Tuoi Diritti sulla Privacy */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={UserCheck} title="I Tuoi Diritti sulla Privacy" number="Sezione 9" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Ai sensi del GDPR e di altre leggi applicabili sulla protezione dei dati, hai diritti specifici in relazione ai tuoi dati personali. Rispettiamo questi diritti e ci impegniamo ad aiutarti a esercitarli.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto di accesso</h3>
                      <p className="text-sm text-foreground/70">
                        Puoi richiedere una copia dei tuoi dati personali che trattiamo e informazioni su come li utilizziamo.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto di rettifica</h3>
                      <p className="text-sm text-foreground/70">
                        Puoi chiedere la correzione di dati personali inesatti o l'integrazione di dati incompleti.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto alla cancellazione</h3>
                      <p className="text-sm text-foreground/70">
                        In determinate circostanze, puoi chiedere la cancellazione dei tuoi dati personali.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto di limitazione</h3>
                      <p className="text-sm text-foreground/70">
                        Puoi chiedere di limitare il trattamento dei tuoi dati personali in determinate circostanze.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto alla portabilità</h3>
                      <p className="text-sm text-foreground/70">
                        Puoi richiedere e riutilizzare i tuoi dati in un formato strutturato e leggibile elettronicamente.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-indigo-400 mb-2">Diritto di opposizione</h3>
                      <p className="text-sm text-foreground/70">
                        Puoi opporti al trattamento dei tuoi dati personali in qualsiasi momento per motivi relativi alla tua situazione particolare.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                    <h4 className="text-lg font-medium mb-4">Come esercitare i tuoi diritti</h4>
                    <p className="mb-4">
                      Per esercitare uno qualsiasi dei tuoi diritti, puoi contattarci tramite:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Email: <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a></li>
                      <li>Posta: Biorigeneral Informatics, Via Salara 2/A, 64026 Roseto degli Abruzzi (TE), Italia</li>
                    </ul>
                    <p className="mt-4">
                      Risponderemo alla tua richiesta entro un mese dal ricevimento. Questo periodo può essere esteso di ulteriori due mesi se necessario, tenendo conto della complessità e del numero di richieste.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Conservazione dei Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Clock} title="Conservazione dei Dati" number="Sezione 10" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare le finalità per cui li abbiamo raccolti, incluso per soddisfare eventuali requisiti legali, contabili o di rendicontazione.
                  </p>
                  
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Criteri per determinare il periodo di conservazione</h3>
                    <p className="mb-4">
                      Per determinare il periodo di conservazione appropriato, consideriamo:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>La quantità, natura e sensibilità dei dati personali</li>
                      <li>Il rischio potenziale di danno derivante dall'uso o dalla divulgazione non autorizzati</li>
                      <li>Gli scopi per cui trattiamo i tuoi dati e se possiamo raggiungerli con altri mezzi</li>
                      <li>I requisiti legali applicabili</li>
                    </ul>
                  </div>
                  
                  <p className="mt-6">
                    In generale, i dati relativi al tuo account vengono conservati finché mantieni un account attivo con noi. Una volta chiuso l'account, conserveremo i tuoi dati per il periodo necessario a soddisfare i nostri obblighi legali e normativi, e per risolvere eventuali controversie.
                  </p>
                  
                  <p>
                    In alcuni casi, possiamo anonimizzare i tuoi dati personali (in modo che non possano più essere associati a te) per scopi di ricerca o statistici, nel qual caso potremmo utilizzare queste informazioni indefinitamente senza ulteriore avviso.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Modifiche alla Privacy Policy */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={FileCheck} title="Modifiche alla Privacy Policy" number="Sezione 11" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Ci riserviamo il diritto di aggiornare o modificare la nostra Privacy Policy in qualsiasi momento per riflettere:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cambiamenti nelle nostre pratiche aziendali o nei Servizi</li>
                    <li>Modifiche alla legislazione applicabile</li>
                    <li>Feedback e suggerimenti dei nostri utenti</li>
                  </ul>
                  
                  <p className="text-lg leading-relaxed mt-4">
                    La versione aggiornata della Privacy Policy sarà sempre disponibile sul nostro sito web, con la data dell'ultimo aggiornamento chiaramente indicata all'inizio del documento.
                  </p>
                  
                  <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg mt-4">
                    <h4 className="font-medium">Notifica delle modifiche</h4>
                    <p className="mt-2">
                      Per modifiche significative che potrebbero influire sui tuoi diritti o sul modo in cui trattiamo i tuoi dati, ti forniremo una notifica chiara, come un messaggio email o un avviso sul nostro sito web, prima che le modifiche diventino effettive.
                    </p>
                  </div>
                  
                  <p className="mt-4">
                    Ti incoraggiamo a rivedere periodicamente la nostra Privacy Policy per essere informato su come proteggiamo i tuoi dati personali. L'uso continuato dei nostri Servizi dopo la pubblicazione delle modifiche costituisce accettazione di tali modifiche.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Reclami */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={AlertCircle} title="Reclami" number="Sezione 12" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Se ritieni che il trattamento dei tuoi dati personali violi la normativa in materia di protezione dei dati, hai il diritto di presentare un reclamo. Ti incoraggiamo a contattarci prima di presentare un reclamo all'autorità di controllo, in modo da poter risolvere eventuali problemi direttamente.
                  </p>
                  
                  <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                    <h4 className="text-lg font-medium mb-4">Procedura di reclamo</h4>
                    <ol className="list-decimal pl-6 space-y-3">
                      <li>
                        <strong>Contattaci per prima cosa:</strong> 
                        <p className="mt-1">Scrivi un'email a <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a> con oggetto "Reclamo Privacy", descrivendo il problema e come vorresti che fosse risolto.</p>
                      </li>
                      <li>
                        <strong>Tempistiche di risposta:</strong> 
                        <p className="mt-1">Ti risponderemo entro 30 giorni, fornendoti informazioni sulle azioni intraprese o pianificate in risposta al tuo reclamo.</p>
                      </li>
                      <li>
                        <strong>Reclamo all'autorità di controllo:</strong> 
                        <p className="mt-1">Se non sei soddisfatto della nostra risposta, puoi presentare un reclamo all'autorità di controllo per la protezione dei dati del tuo paese di residenza.</p>
                      </li>
                    </ol>
                  </div>
                  
                  <p className="mt-6">
                    In Italia, l'autorità di controllo per la protezione dei dati è il <strong>Garante per la Protezione dei Dati Personali</strong>:
                  </p>
                  
                  <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-lg mt-4">
                    <p>
                      Garante per la Protezione dei Dati Personali<br />
                      Piazza Venezia, 11 - 00187 Roma<br />
                      Telefono: (+39) 06.696771<br />
                      Website: <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">www.garanteprivacy.it</a><br />
                      Email: <a href="mailto:protocollo@gpdp.it" className="text-indigo-400 hover:underline">protocollo@gpdp.it</a><br />
                      PEC: <a href="mailto:protocollo@pec.gpdp.it" className="text-indigo-400 hover:underline">protocollo@pec.gpdp.it</a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contattaci */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Mail} title="Contattaci" number="Sezione 13" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Se hai domande sulla nostra Privacy Policy, sulle pratiche di trattamento dei dati o sui tuoi diritti relativi alla privacy, non esitare a contattarci:
                  </p>
                  
                  <div className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-xl p-8 mt-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Informazioni di contatto</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                        <Mail className="w-10 h-10 text-indigo-400 mb-4" />
                        <h4 className="font-medium mb-2">Email</h4>
                        <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a>
                        <p className="text-sm mt-2 text-foreground/60">Per domande generali o richieste relative alla privacy</p>
                      </div>
                      
                      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                        <MapPin className="w-10 h-10 text-indigo-400 mb-4" />
                        <h4 className="font-medium mb-2">Indirizzo postale</h4>
                        <p>
                          Biorigeneral Informatics<br />
                          Via Salara 2/A<br />
                          64026 Roseto degli Abruzzi (TE)<br />
                          Italia
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-8">
                      <p className="text-sm mt-1 text-foreground/60">Dal lunedì al venerdì, 9:00-18:00 CET</p>
                    </div>
                  </div>
                  
                  <p className="text-center mt-8 italic">
                    Ci impegniamo a rispondere a tutte le richieste in modo tempestivo e accurato.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
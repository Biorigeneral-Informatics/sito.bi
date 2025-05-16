// src/pages/TerminiCondizioni.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Gavel, BookOpen, Shield, Scale, FileText, 
  Clock, AlertCircle, UserCheck, Globe,
  FileCheck, Mail, ScrollText, CheckCircle, XCircle,
  MapPin,
  MessageSquare
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

const TerminiCondizioni = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  interface SectionTitleProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    number: string;
  }

  const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title, number }) => (
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
        colorStart="rgba(99, 102, 241, 0.15)" 
        colorEnd="rgba(139, 92, 246, 0.15)" 
      />
      <ScrollGradient 
        colorStart="rgba(14, 165, 233, 0.10)"
        colorEnd="rgba(79, 70, 229, 0.10)"
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
                <Gavel className="w-12 h-12 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Termini e Condizioni
              </span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Contratto legale che regola l'utilizzo dei nostri servizi, prodotti e il rapporto con Biorigeneral Informatics.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full border border-indigo-400/20 opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-24 h-24 rounded-full border border-violet-400/20 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                <SectionTitle icon={BookOpen} title="Introduzione" number="Sezione 1" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Benvenuto su Biorigeneral Informatics. I presenti Termini e Condizioni ("Termini") costituiscono un accordo legalmente vincolante tra te e Biorigeneral Informatics ("Società", "noi", "nostro") che regola l'utilizzo dei nostri servizi, applicazioni, sito web, prodotti e contenuti (collettivamente, i "Servizi").
                  </p>
                  <p className="text-lg leading-relaxed">
                    Utilizzando i nostri Servizi, accetti di essere vincolato dai presenti Termini. Ti preghiamo di leggerli attentamente. Se non accetti questi Termini, non potrai accedere o utilizzare i nostri Servizi.
                  </p>
                  <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      Importante
                    </h4>
                    <p className="mt-2">
                      Il presente documento costituisce un contratto legalmente vincolante. Ti consigliamo di consultare un consulente legale se hai domande sui tuoi diritti e obblighi ai sensi di questi Termini.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Accettazione dei Termini */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={UserCheck} title="Accettazione dei Termini" number="Sezione 2" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Utilizzando i nostri Servizi, dichiari e garantisci che:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                        Età e capacità
                      </h3>
                      <p className="text-foreground/70">
                        Hai almeno 18 anni o l'età legale per stipulare un contratto vincolante nella tua giurisdizione, se maggiore.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                        Autorità legale
                      </h3>
                      <p className="text-foreground/70">
                        Se utilizzi i Servizi per conto di un'organizzazione, hai l'autorità di vincolare tale organizzazione ai presenti Termini.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    Accettando questi Termini, confermi anche di non essere soggetto a sanzioni o restrizioni che ti impedirebbero di entrare in accordi con noi o di utilizzare i nostri Servizi ai sensi delle leggi applicabili.
                  </p>
                  
                  <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 mt-6">
                    <h4 className="text-lg font-medium mb-4">Modalità di accettazione</h4>
                    <p className="mb-4">
                      L'accettazione di questi Termini può avvenire in diversi modi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Selezionando una casella di controllo o cliccando su un pulsante che indica accettazione</li>
                      <li>Registrando un account</li>
                      <li>Utilizzando effettivamente i Servizi</li>
                      <li>Completando un acquisto o sottoscrivendo un abbonamento</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Descrizione dei Servizi */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={ScrollText} title="Descrizione dei Servizi" number="Sezione 3" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Biorigeneral Informatics offre una gamma di soluzioni digitali innovative progettate per aiutare le aziende a ottimizzare i loro processi e migliorare la loro presenza digitale:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Sviluppo Software</h3>
                      <p>
                        Creiamo soluzioni software personalizzate, applicazioni web e mobile su misura per le esigenze specifiche del cliente.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-violet-400 bg-violet-500/5">
                      <h3 className="font-semibold text-lg mb-2">Intelligenza Artificiale</h3>
                      <p>
                        Forniamo agenti AI, chatbot e soluzioni di automazione cognitiva per migliorare l'efficienza operativa e l'esperienza cliente.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-cyan-400 bg-cyan-500/5">
                      <h3 className="font-semibold text-lg mb-2">Consulenza Digitale</h3>
                      <p>
                        Offriamo servizi di consulenza strategica per la trasformazione digitale e piani di crescita aziendale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <AlertCircle className="w-5 h-5 text-indigo-400 mr-2" />
                      Modifiche ai Servizi
                    </h4>
                    <p className="mb-4">
                      Ci riserviamo il diritto di modificare, sospendere o interrompere, temporaneamente o permanentemente, i Servizi o qualsiasi funzionalità o aspetto dei Servizi in qualsiasi momento, con o senza preavviso. L'utente accetta che non saremo responsabili nei confronti dell'utente o di terzi per qualsiasi modifica, sospensione o interruzione dei Servizi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Diritti di Proprietà Intellettuale */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Shield} title="Proprietà Intellettuale" number="Sezione 4" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Tutti i diritti di proprietà intellettuale relativi ai nostri Servizi sono e rimarranno di proprietà esclusiva di Biorigeneral Informatics e dei suoi licenzianti.
                  </p>
                  
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Cosa è protetto dai nostri diritti di proprietà intellettuale:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Software e codice</span>
                          <p className="text-foreground/70 mt-1">Il codice sorgente, il codice oggetto, le interfacce, gli algoritmi e altre componenti software dei nostri Servizi.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Contenuti e design</span>
                          <p className="text-foreground/70 mt-1">Testi, grafica, loghi, immagini, audio, video, design dell'interfaccia utente e altri elementi visivi o sonori.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Marchi e nomi commerciali</span>
                          <p className="text-foreground/70 mt-1">Il nome Biorigeneral Informatics, il logo e altri marchi identificativi utilizzati nei nostri Servizi.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">4</span>
                        </div>
                        <div>
                          <span className="font-medium">Documentazione e materiali</span>
                          <p className="text-foreground/70 mt-1">Manuali, guide, tutorial, specifiche tecniche e altri materiali correlati ai Servizi.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="mt-8">
                    Per i clienti che commissionano lo sviluppo di software personalizzato o altri prodotti digitali, i diritti di proprietà intellettuale saranno regolati dall'accordo specifico sottoscritto tra le parti. In assenza di disposizioni contrarie, il cliente otterrà una licenza per l'uso del software o del prodotto, mentre i diritti di proprietà intellettuale rimarranno di Biorigeneral Informatics.
                  </p>
                  
                  <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-6">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      Limitazioni d'uso
                    </h4>
                    <p className="mt-2">
                      Salvo quanto espressamente autorizzato, non è consentito copiare, modificare, distribuire, vendere, noleggiare, concedere in licenza, decompilare, decodificare o tentare di estrarre il codice sorgente dei nostri Servizi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Limitazione di Responsabilità */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={XCircle} title="Limitazione di Responsabilità" number="Sezione 5" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Nei limiti consentiti dalla legge applicabile, Biorigeneral Informatics e i suoi direttori, dipendenti, partner, agenti e fornitori non saranno responsabili per:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300">
                      <h3 className="font-medium text-indigo-400 mb-3">Danni Indiretti</h3>
                      <p className="text-foreground/70">
                        Qualsiasi danno indiretto, incidentale, speciale, consequenziale o punitivo derivante dall'uso o dall'impossibilità di utilizzare i nostri Servizi.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300">
                      <h3 className="font-medium text-indigo-400 mb-3">Perdite economiche</h3>
                      <p className="text-foreground/70">
                        Perdita di profitti, dati, avviamento, opportunità commerciali o altre perdite economiche, anche se prevedibili.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300">
                      <h3 className="font-medium text-indigo-400 mb-3">Condotta di terzi</h3>
                      <p className="text-foreground/70">
                        Qualsiasi condotta o contenuto di terzi sui Servizi, inclusi eventuali contenuti diffamatori, offensivi o illegali.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300">
                      <h3 className="font-medium text-indigo-400 mb-3">Accesso non autorizzato</h3>
                      <p className="text-foreground/70">
                        Accesso non autorizzato, uso o alterazione delle trasmissioni o dei contenuti dell'utente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 to-transparent mt-6">
                    <h4 className="text-lg font-medium mb-3">Limite massimo di responsabilità</h4>
                    <p className="mb-4">
                      La nostra responsabilità complessiva nei confronti dell'utente per qualsiasi reclamo derivante da o relativo ai presenti Termini o ai nostri Servizi è limitata all'importo maggiore tra:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>L'importo pagato dall'utente a Biorigeneral Informatics per l'utilizzo dei Servizi durante i sei (6) mesi precedenti l'evento che ha dato origine alla responsabilità; o</li>
                      <li>100,00 € (cento euro).</li>
                    </ul>
                  </div>
                  
                  <p className="text-base italic mt-6">
                    Alcune giurisdizioni non consentono l'esclusione di determinate garanzie o la limitazione o esclusione di responsabilità per determinati tipi di danni. Di conseguenza, alcune delle limitazioni di cui sopra potrebbero non applicarsi all'utente. In tali casi, la nostra responsabilità sarà limitata nella massima misura consentita dalla legge applicabile.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Risoluzione delle Controversie */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Scale} title="Risoluzione delle Controversie" number="Sezione 6" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    In caso di controversie tra te e Biorigeneral Informatics, ci impegniamo a risolverle in modo equo ed efficiente. Si applicano le seguenti disposizioni:
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Globe className="w-5 h-5 text-indigo-400 mr-2" />
                        Legge applicabile
                      </h3>
                      <p>
                        I presenti Termini saranno regolati e interpretati in conformità con le leggi italiane, senza riguardo ai suoi principi di conflitto di leggi.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Scale className="w-5 h-5 text-indigo-400 mr-2" />
                        Foro competente
                      </h3>
                      <p>
                        Qualsiasi controversia derivante da o in relazione ai presenti Termini, comprese eventuali questioni riguardanti la sua esistenza, validità o risoluzione, sarà sottoposta alla giurisdizione esclusiva dei tribunali di Teramo, Italia.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <MessageSquare className="w-5 h-5 text-indigo-400 mr-2" />
                        Risoluzione amichevole
                      </h3>
                      <p>
                        Prima di intraprendere qualsiasi azione legale, entrambe le parti si impegnano a tentare in buona fede di risolvere qualsiasi controversia attraverso consultazioni e negoziati diretti. Ti invitiamo a contattarci all'indirizzo info@biorigeneralinformatics.com per discutere di eventuali problemi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-8">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      Importante
                    </h4>
                    <p className="mt-2">
                      L'invalidità o l'inapplicabilità di qualsiasi disposizione di questi Termini non pregiudicherà la validità o l'applicabilità delle restanti disposizioni, che rimarranno pienamente in vigore ed efficaci.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Modifiche ai Termini */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={FileCheck} title="Modifiche ai Termini" number="Sezione 7" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi momento. Le modifiche possono essere necessarie per riflettere cambiamenti nelle nostre pratiche commerciali, aggiornamenti dei Servizi o evoluzioni normative.
                  </p>
                  
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Procedura per le modifiche</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Notifica</span>
                          <p className="text-foreground/70 mt-1">Per modifiche sostanziali, forniremo un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore, pubblicando un avviso sul nostro sito web o inviando una notifica via email.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Accettazione</span>
                          <p className="text-foreground/70 mt-1">Continuando ad accedere o utilizzare i nostri Servizi dopo che le modifiche diventano effettive, accetti di essere vincolato dai termini rivisti.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm font-bold">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Rifiuto</span>
                          <p className="text-foreground/70 mt-1">Se non accetti i nuovi termini, sei pregato di interrompere l'utilizzo dei Servizi. La continuazione dell'uso costituisce accettazione delle modifiche.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-base mt-8">
                    La versione più recente dei Termini sarà sempre disponibile sul nostro sito web. Ti incoraggiamo a rivedere periodicamente questa pagina per eventuali modifiche.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Disposizioni Generali */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={FileText} title="Disposizioni Generali" number="Sezione 8" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Le seguenti disposizioni si applicano all'intero accordo tra te e Biorigeneral Informatics:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Intero Accordo</h3>
                      <p>
                        Questi Termini costituiscono l'intero accordo tra te e Biorigeneral Informatics riguardo all'argomento in questione e sostituiscono tutti i precedenti accordi, rappresentazioni e intese tra le parti.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Separabilità</h3>
                      <p>
                        Se una qualsiasi disposizione di questi Termini viene considerata inapplicabile o non valida, tale disposizione sarà limitata o eliminata nella misura minima necessaria in modo che questi Termini rimangano altrimenti pienamente in vigore e applicabili.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Rinuncia</h3>
                      <p>
                        Il mancato esercizio o applicazione da parte nostra di qualsiasi diritto o disposizione dei presenti Termini non costituirà una rinuncia a tale diritto o disposizione. Qualsiasi rinuncia a qualsiasi disposizione dei presenti Termini sarà efficace solo se in forma scritta e firmata da Biorigeneral Informatics.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Cessione</h3>
                      <p>
                        Non puoi cedere o trasferire alcun diritto o obbligo derivante dai presenti Termini senza il nostro previo consenso scritto. Biorigeneral Informatics può cedere o trasferire i propri diritti e obblighi ai sensi dei presenti Termini senza restrizioni.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-2">Forza maggiore</h3>
                      <p>
                        Non saremo responsabili per eventuali ritardi o mancate prestazioni risultanti da cause al di fuori del nostro ragionevole controllo, inclusi, a titolo esemplificativo, atti di forza maggiore, disastri naturali, pandemie, guerre, terrorismo, sommosse, embarghi, atti delle autorità civili o militari, incendi, inondazioni, incidenti, scioperi o carenze di trasporti, carburante, energia, manodopera o materiali.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20 mt-8">
                    <h4 className="text-lg font-medium mb-4">Lingua del contratto</h4>
                    <p>
                      I presenti Termini sono stati redatti in italiano. Eventuali traduzioni sono fornite solo per comodità dell'utente. In caso di incongruenze o contraddizioni tra la versione in italiano e qualsiasi versione tradotta, prevarrà la versione in italiano.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contattaci */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Mail} title="Contattaci" number="Sezione 9" />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    Se hai domande sui presenti Termini e Condizioni o se desideri contattarci per qualsiasi motivo, puoi raggiungerci attraverso i seguenti canali:
                  </p>
                  
                  <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-xl p-8 mt-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Informazioni di contatto</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                        <Mail className="w-10 h-10 text-indigo-400 mb-4" />
                        <h4 className="font-medium mb-2">Email</h4>
                        <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a>
                        <p className="text-sm mt-2 text-foreground/60">Per domande generali o richieste legali</p>
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
                      <h4 className="font-medium mb-2">Telefono</h4>
                      <a href="tel:+393920158140" className="text-indigo-400 hover:underline">+39 392 015 8140</a>
                      <p className="text-sm mt-1 text-foreground/60">Dal lunedì al venerdì, 9:00-18:00 CET</p>
                    </div>
                  </div>
                  
                  <p className="text-center mt-8 italic">
                    Faremo del nostro meglio per rispondere alle tue richieste entro 2 giorni lavorativi.
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

export default TerminiCondizioni;
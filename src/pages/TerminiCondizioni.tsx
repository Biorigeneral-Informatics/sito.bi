// src/pages/TerminiCondizioni.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gavel, BookOpen, Shield, Scale, FileText, 
  Clock, AlertCircle, UserCheck, Globe,
  FileCheck, Mail, ScrollText, CheckCircle,
  MapPin,
  MessageSquare,
  Languages,
  Lock
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';

// Interfaccia per le traduzioni
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Traduzioni complete
const translations: Translations = {
  it: {
    title: "Termini e Condizioni",
    subtitle: "Contratto legale che regola l'utilizzo dei nostri servizi, prodotti e il rapporto con Biorigeneral Informatics.",
    lastUpdate: "Ultimo aggiornamento: 1 Maggio 2025",
    switchLanguage: "Switch to English",
    
    // Sezione 1 - Introduzione
    section1Title: "Introduzione",
    section1Number: "Sezione 1",
    section1P1: "Benvenuto su Biorigeneral Informatics. I presenti Termini e Condizioni (\"Termini\") costituiscono un accordo legalmente vincolante tra te e Biorigeneral Informatics (\"Società\", \"noi\", \"nostro\") che regola l'utilizzo dei nostri servizi, applicazioni, sito web, prodotti e contenuti (collettivamente, i \"Servizi\").",
    section1P2: "Utilizzando i nostri Servizi, accetti di essere vincolato dai presenti Termini. Ti preghiamo di leggerli attentamente. Se non accetti questi Termini, non potrai accedere o utilizzare i nostri Servizi.",
    importantTitle: "Importante",
    importantText: "Il presente documento costituisce un contratto legalmente vincolante. Ti consigliamo di consultare un consulente legale se hai domande sui tuoi diritti e obblighi ai sensi di questi Termini.",
    
    // Sezione 2 - Definizioni
    section2Title: "Definizioni",
    section2Number: "Sezione 2",
    section2P1: "Ai fini dei presenti Termini, i seguenti termini hanno i significati di seguito indicati:",
    def1Term: "\"Servizi\"",
    def1Text: "tutti i prodotti, servizi, software, applicazioni, siti web, contenuti e funzionalità forniti da Biorigeneral Informatics.",
    def2Term: "\"Utente\" o \"tu\"",
    def2Text: "qualsiasi persona fisica o giuridica che accede o utilizza i nostri Servizi.",
    def3Term: "\"Contenuto\"",
    def3Text: "qualsiasi informazione, dato, testo, software, musica, suono, fotografia, grafica, video, messaggio o altro materiale.",
    def4Term: "\"Account\"",
    def4Text: "l'account personale creato per accedere e utilizzare determinati Servizi.",
    def5Term: "\"Proprietà Intellettuale\"",
    def5Text: "tutti i diritti di proprietà intellettuale, inclusi ma non limitati a: copyright, marchi, brevetti, segreti commerciali, know-how e diritti morali.",
    
    // Sezione 3 - Accettazione e Modifiche
    section3Title: "Accettazione e Modifiche",
    section3Number: "Sezione 3",
    section3P1: "Accedendo o utilizzando i nostri Servizi, dichiari e garantisci di:",
    acceptance1: "Avere almeno 18 anni di età o l'età della maggiore età nella tua giurisdizione",
    acceptance2: "Avere la capacità legale di stipulare un contratto vincolante",
    acceptance3: "Aver letto, compreso e accettato tutti i termini e le condizioni contenuti nel presente documento",
    acceptance4: "Fornire informazioni accurate, aggiornate e complete durante il processo di registrazione",
    acceptance5: "Mantenere la sicurezza del tuo account e accettare la responsabilità per tutte le attività che si verificano sotto il tuo account",
    minorsTitle: "Utilizzo da parte di minori",
    minorsText: "I nostri Servizi non sono destinati a minori di 18 anni. Se veniamo a conoscenza di aver raccolto informazioni personali da un minore senza il consenso parentale verificabile, adotteremo misure per rimuovere tali informazioni dai nostri server.",
    
    // Sezione 4 - Descrizione dei Servizi
    section4Title: "Descrizione dei Servizi",
    section4Number: "Sezione 4",
    section4P1: "Biorigeneral Informatics offre una gamma di soluzioni digitali innovative progettate per aiutare le aziende a ottimizzare i loro processi e migliorare la loro presenza digitale:",
    softwareDevelopmentTitle: "Sviluppo Software",
    softwareDevelopmentText: "Creiamo soluzioni software personalizzate, applicazioni web e mobile su misura per le esigenze specifiche del cliente.",
    aiTitle: "Intelligenza Artificiale",
    aiText: "Forniamo agenti AI, chatbot e soluzioni di automazione cognitiva per migliorare l'efficienza operativa e l'esperienza cliente.",
    consultingTitle: "Consulenza Digitale",
    consultingText: "Offriamo servizi di consulenza strategica per la trasformazione digitale e piani di crescita aziendale.",
    serviceModificationsTitle: "Modifiche ai Servizi",
    serviceModificationsText: "Ci riserviamo il diritto di modificare, sospendere o interrompere, temporaneamente o permanentemente, i Servizi o qualsiasi funzionalità o aspetto dei Servizi in qualsiasi momento, con o senza preavviso. L'utente accetta che non saremo responsabili nei confronti dell'utente o di terzi per qualsiasi modifica, sospensione o interruzione dei Servizi.",
        
    // Sezione 5 - Proprietà Intellettuale
    section5Title: "Proprietà Intellettuale",
    section5Number: "Sezione 5",
    section5P1: "Tutti i diritti di proprietà intellettuale nei e sui Servizi, inclusi ma non limitati a design, testo, grafica, immagini, video, informazioni, logo, icone, software, codice sorgente e funzionalità, sono e rimarranno di proprietà esclusiva di Biorigeneral Informatics o dei suoi licenzianti.",
    ipCategories: "La nostra proprietà intellettuale include, senza limitazione:",
    ip1: "Software, applicazioni e codice sorgente sviluppati da Biorigeneral Informatics",
    ip2: "Design, layout, grafica e elementi visivi dei nostri Servizi",
    ip3: "Contenuti, documentazione, guide e materiali formativi",
    ip4: "Marchi, loghi, denominazioni sociali e altri segni distintivi e marchi identificativi utilizzati nei nostri Servizi",
    section5P2: "Per i clienti che commissionano lo sviluppo di software personalizzato o altri prodotti digitali, i diritti di proprietà intellettuale saranno regolati dall'accordo specifico sottoscritto tra le parti. In assenza di disposizioni contrarie, il cliente otterrà una licenza per l'uso del software o del prodotto, mentre i diritti di proprietà intellettuale rimarranno di Biorigeneral Informatics.",
    limitationsTitle: "Limitazioni d'uso",
    limitationsText: "Salvo quanto espressamente autorizzato, non è consentito copiare, modificare, distribuire, vendere, noleggiare, concedere in licenza, decompilare, decodificare o tentare di estrarre il codice sorgente dei nostri Servizi.",
    
    // Sezione 6 - Privacy
    section6Title: "Privacy e Protezione dei Dati",
    section6Number: "Sezione 6",
    section6P1: "La tua privacy è importante per noi. Il trattamento dei tuoi dati personali è regolato dalla nostra Privacy Policy, che costituisce parte integrante di questi Termini.",
    dataProcessingTitle: "Trattamento dei dati",
    dataProcessingText: "Raccogliendo e utilizzando i nostri Servizi, accetti che Biorigeneral Informatics raccolga, utilizzi e tratti i tuoi dati personali in conformità con la Privacy Policy e le leggi applicabili sulla protezione dei dati, incluso il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'UE.",
    dataSecurityTitle: "Sicurezza dei dati",
    dataSecurityText: "Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali contro accesso non autorizzato, alterazione, divulgazione o distruzione. Tuttavia, nessun sistema di trasmissione via Internet o di archiviazione elettronica è sicuro al 100%.",
    
    // Sezione 7 - Limitazione di Responsabilità
    section7Title: "Limitazione di Responsabilità",
    section7Number: "Sezione 7",
    section7P1: "I nostri Servizi sono forniti \"così come sono\" e \"come disponibili\" senza garanzie di alcun tipo, esplicite o implicite, incluse ma non limitate a garanzie di commerciabilità, idoneità per uno scopo particolare e non violazione.",
    disclaimerTitle: "Esclusione di garanzie",
    disclaimerText: "Non garantiamo che i Servizi saranno ininterrotti, sicuri, privi di errori o che soddisferanno le tue esigenze specifiche. L'utilizzo dei Servizi è a tuo rischio e responsabilità.",
    liabilityLimitTitle: "Limitazione di responsabilità",
    liabilityLimitText: "In nessun caso Biorigeneral Informatics sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi, inclusi ma non limitati a perdita di profitti, dati, uso, goodwill o altre perdite intangibili, anche se avvisata della possibilità di tali danni.",
    maxLiabilityTitle: "Responsabilità massima",
    maxLiabilityText: "La nostra responsabilità totale nei tuoi confronti per qualsiasi reclamo derivante da o relativo ai presenti Termini o ai Servizi non supererà l'importo pagato da te a Biorigeneral Informatics nei 12 mesi precedenti l'evento che ha dato origine al reclamo.",
    
    // Sezione 8 - Indennizzo
    section8Title: "Indennizzo",
    section8Number: "Sezione 8",
    section8P1: "Accetti di indennizzare, difendere e tenere indenne Biorigeneral Informatics, i suoi funzionari, direttori, dipendenti, agenti, licenzianti e fornitori da e contro tutti i reclami, responsabilità, danni, perdite, costi, spese e commissioni (incluse le ragionevoli spese legali) derivanti da o relativi a:",
    indemnity1: "Il tuo utilizzo dei Servizi",
    indemnity2: "La tua violazione di questi Termini",
    indemnity3: "La tua violazione di diritti di terzi, inclusi diritti di proprietà intellettuale",
    indemnity4: "Qualsiasi contenuto che invii, pubblichi o trasmetti attraverso i Servizi",
    
    // Sezione 9 - Risoluzione delle Controversie
    section9Title: "Risoluzione delle Controversie",
    section9Number: "Sezione 9",
    section9P1: "Prima di intraprendere qualsiasi azione legale, le parti si impegnano a tentare di risolvere qualsiasi controversia attraverso la negoziazione in buona fede.",
    governingLawTitle: "Legge applicabile",
    governingLawText: "I presenti Termini sono regolati e interpretati secondo le leggi italiane, senza riguardo ai principi sui conflitti di legge.",
    jurisdictionTitle: "Giurisdizione",
    jurisdictionText: "Qualsiasi controversia relativa ai presenti Termini sarà sottoposta alla giurisdizione esclusiva dei tribunali di Teramo, Italia.",
    mediationTitle: "Mediazione",
    mediationText: "Ti invitiamo a contattarci all'indirizzo info@biorigeneralinformatics.com per discutere di eventuali problemi.",
    severabilityTitle: "Importante",
    severabilityText: "L'invalidità o l'inapplicabilità di qualsiasi disposizione di questi Termini non pregiudicherà la validità o l'applicabilità delle restanti disposizioni, che rimarranno pienamente in vigore ed efficaci.",
    
    // Sezione 10 - Disposizioni Generali
    section10Title: "Disposizioni Generali",
    section10Number: "Sezione 10",
    section10P1: "I presenti Termini costituiscono l'intero accordo tra te e Biorigeneral Informatics riguardo all'oggetto qui trattato e sostituiscono tutti gli accordi, le comunicazioni e le proposte precedenti o contemporanee, orali o scritte, tra le parti.",
    entireAgreementTitle: "Accordo integrale",
    entireAgreementText: "Questi Termini rappresentano l'accordo completo tra le parti e prevalgono su qualsiasi altro accordo precedente o contemporaneo relativo all'oggetto qui trattato.",
    waiverTitle: "Rinuncia",
    waiverText: "Qualsiasi rinuncia a qualsiasi disposizione dei presenti Termini sarà efficace solo se in forma scritta e firmata da Biorigeneral Informatics.",
    assignmentTitle: "Cessione",
    assignmentText: "Non puoi cedere o trasferire alcun diritto o obbligo derivante dai presenti Termini senza il nostro previo consenso scritto. Biorigeneral Informatics può cedere o trasferire i propri diritti e obblighi ai sensi dei presenti Termini senza restrizioni.",
    forceMajeureTitle: "Forza maggiore",
    forceMajeureText: "Non saremo responsabili per eventuali ritardi o mancate prestazioni risultanti da cause al di fuori del nostro ragionevole controllo, inclusi, a titolo esemplificativo, atti di forza maggiore, disastri naturali, pandemie, guerre, terrorismo, sommosse, embarghi, atti delle autorità civili o militari, incendi, inondazioni, incidenti, scioperi o carenze di trasporti, carburante, energia, manodopera o materiali.",
    contractLanguageTitle: "Lingua del contratto",
    contractLanguageText: "I presenti Termini sono stati redatti in italiano. Eventuali traduzioni sono fornite solo per comodità dell'utente. In caso di incongruenze o contraddizioni tra la versione in italiano e qualsiasi versione tradotta, prevarrà la versione in italiano.",
    
    // Sezione 11 - Modifiche ai Termini
    section11Title: "Modifiche ai Termini",
    section11Number: "Sezione 11",
    section11P1: "Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi momento. Le modifiche possono essere necessarie per riflettere cambiamenti nelle nostre pratiche commerciali, aggiornamenti dei Servizi o evoluzioni normative.",
    modificationProcedureTitle: "Procedura per le modifiche",
    modification1: "Notifica",
    modification1Text: "Per modifiche sostanziali, forniremo un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore, pubblicando un avviso sul nostro sito web o inviando una notifica via email.",
    modification2: "Accettazione",
    modification2Text: "Continuando ad accedere o utilizzare i nostri Servizi dopo che le modifiche diventano effettive, accetti di essere vincolato dai termini rivisti.",
    modification3: "Rifiuto",
    modification3Text: "Se non accetti i nuovi termini, sei pregato di interrompere l'utilizzo dei Servizi. La continuazione dell'uso costituisce accettazione delle modifiche.",
    section11P2: "La versione più recente dei Termini sarà sempre disponibile sul nostro sito web. Ti incoraggiamo a rivedere periodicamente questa pagina per eventuali modifiche.",
    
    // Sezione 12 - Contatti
    section12Title: "Informazioni di Contatto",
    section12Number: "Sezione 12",
    section12P1: "Per domande sui presenti Termini e Condizioni o sui nostri Servizi, puoi contattarci utilizzando le seguenti informazioni:",
    emailLabel: "Email",
    addressLabel: "Indirizzo",
    legalContactTitle: "Contatti legali",
    legalContactText: "Per questioni legali specifiche relative ai presenti Termini, ti preghiamo di contattarci in forma scritta all'indirizzo sopra indicato, specificando chiaramente l'oggetto della comunicazione.",
    responseTimeTitle: "Tempi di risposta",
    responseTimeText: "Ci impegniamo a rispondere alle tue richieste entro 5 giorni lavorativi dalla ricezione. Per questioni urgenti, ti preghiamo di indicarlo chiaramente nell'oggetto della comunicazione."
  },
  
  en: {
    title: "Terms and Conditions",
    subtitle: "Legal contract governing the use of our services, products and relationship with Biorigeneral Informatics.",
    lastUpdate: "Last updated: May 1, 2025",
    switchLanguage: "Cambia in Italiano",
    
    // Section 1 - Introduction
    section1Title: "Introduction",
    section1Number: "Section 1",
    section1P1: "Welcome to Biorigeneral Informatics. These Terms and Conditions (\"Terms\") constitute a legally binding agreement between you and Biorigeneral Informatics (\"Company\", \"we\", \"our\") governing the use of our services, applications, website, products and content (collectively, the \"Services\").",
    section1P2: "By using our Services, you agree to be bound by these Terms. Please read them carefully. If you do not accept these Terms, you will not be able to access or use our Services.",
    importantTitle: "Important",
    importantText: "This document constitutes a legally binding contract. We recommend consulting a legal advisor if you have questions about your rights and obligations under these Terms.",
    
    // Section 2 - Definitions
    section2Title: "Definitions",
    section2Number: "Section 2",
    section2P1: "For the purposes of these Terms, the following terms have the meanings set forth below:",
    def1Term: "\"Services\"",
    def1Text: "all products, services, software, applications, websites, content and functionality provided by Biorigeneral Informatics.",
    def2Term: "\"User\" or \"you\"",
    def2Text: "any natural or legal person who accesses or uses our Services.",
    def3Term: "\"Content\"",
    def3Text: "any information, data, text, software, music, sound, photography, graphics, video, message or other material.",
    def4Term: "\"Account\"",
    def4Text: "the personal account created to access and use certain Services.",
    def5Term: "\"Intellectual Property\"",
    def5Text: "all intellectual property rights, including but not limited to: copyright, trademarks, patents, trade secrets, know-how and moral rights.",
    
    // Section 3 - Acceptance and Modifications
    section3Title: "Acceptance and Modifications",
    section3Number: "Section 3",
    section3P1: "By accessing or using our Services, you represent and warrant that you:",
    acceptance1: "Are at least 18 years of age or the age of majority in your jurisdiction",
    acceptance2: "Have the legal capacity to enter into a binding contract",
    acceptance3: "Have read, understood and accepted all terms and conditions contained in this document",
    acceptance4: "Provide accurate, current and complete information during the registration process",
    acceptance5: "Maintain the security of your account and accept responsibility for all activities that occur under your account",
    minorsTitle: "Use by minors",
    minorsText: "Our Services are not intended for minors under 18 years of age. If we become aware that we have collected personal information from a minor without verifiable parental consent, we will take steps to remove such information from our servers.",
    
    // Section 4 - Description of Services
    section4Title: "Service Description",
    section4Number: "Section 4",
    section4P1: "Biorigeneral Informatics offers a range of innovative digital solutions designed to help businesses optimize their processes and improve their digital presence:",
    softwareDevelopmentTitle: "Software Development",
    softwareDevelopmentText: "We create customized software solutions, web and mobile applications tailored to the specific needs of the client.",
    aiTitle: "Artificial Intelligence",
    aiText: "We provide AI agents, chatbots and cognitive automation solutions to improve operational efficiency and customer experience.",
    consultingTitle: "Digital Consulting",
    consultingText: "We offer strategic consulting services for digital transformation and business growth plans.",
    serviceModificationsTitle: "Service Modifications",
    serviceModificationsText: "We reserve the right to modify, suspend or discontinue, temporarily or permanently, the Services or any functionality or aspect of the Services at any time, with or without notice. You agree that we will not be liable to you or any third party for any modification, suspension or discontinuation of the Services.",
        
    // Section 5 - Intellectual Property
    section5Title: "Intellectual Property",
    section5Number: "Section 5",
    section5P1: "All intellectual property rights in and to the Services, including but not limited to design, text, graphics, images, videos, information, logos, icons, software, source code and functionality, are and will remain the exclusive property of Biorigeneral Informatics or its licensors.",
    ipCategories: "Our intellectual property includes, without limitation:",
    ip1: "Software, applications and source code developed by Biorigeneral Informatics",
    ip2: "Design, layout, graphics and visual elements of our Services",
    ip3: "Content, documentation, guides and training materials",
    ip4: "Trademarks, logos, corporate names and other distinctive signs and identifying marks used in our Services",
    section5P2: "For clients who commission the development of custom software or other digital products, intellectual property rights will be governed by the specific agreement signed between the parties. In the absence of contrary provisions, the client will obtain a license to use the software or product, while the intellectual property rights will remain with Biorigeneral Informatics.",
    limitationsTitle: "Usage limitations",
    limitationsText: "Unless expressly authorized, you may not copy, modify, distribute, sell, rent, license, decompile, decode or attempt to extract the source code of our Services.",
    
    // Section 6 - Privacy
    section6Title: "Privacy and Data Protection",
    section6Number: "Section 6",
    section6P1: "Your privacy is important to us. The processing of your personal data is governed by our Privacy Policy, which forms an integral part of these Terms.",
    dataProcessingTitle: "Data processing",
    dataProcessingText: "By collecting and using our Services, you agree that Biorigeneral Informatics may collect, use and process your personal data in accordance with the Privacy Policy and applicable data protection laws, including the EU General Data Protection Regulation (GDPR).",
    dataSecurityTitle: "Data security",
    dataSecurityText: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure or destruction. However, no system of transmission over the Internet or electronic storage is 100% secure.",
    
    // Section 7 - Limitation of Liability
    section7Title: "Limitation of Liability",
    section7Number: "Section 7",
    section7P1: "Our Services are provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose and non-infringement.",
    disclaimerTitle: "Disclaimer of warranties",
    disclaimerText: "We do not warrant that the Services will be uninterrupted, secure, error-free or that they will meet your specific needs. Use of the Services is at your own risk and responsibility.",
    liabilityLimitTitle: "Limitation of liability",
    liabilityLimitText: "Under no circumstances will Biorigeneral Informatics be liable for indirect, incidental, special, consequential or punitive damages, including but not limited to loss of profits, data, use, goodwill or other intangible losses, even if advised of the possibility of such damages.",
    maxLiabilityTitle: "Maximum liability",
    maxLiabilityText: "Our total liability to you for any claim arising from or relating to these Terms or the Services shall not exceed the amount paid by you to Biorigeneral Informatics in the 12 months preceding the event giving rise to the claim.",
    
    // Section 8 - Indemnification
    section8Title: "Indemnification",
    section8Number: "Section 8",
    section8P1: "You agree to indemnify, defend and hold harmless Biorigeneral Informatics, its officers, directors, employees, agents, licensors and suppliers from and against all claims, liabilities, damages, losses, costs, expenses and fees (including reasonable attorneys' fees) arising from or relating to:",
    indemnity1: "Your use of the Services",
    indemnity2: "Your violation of these Terms",
    indemnity3: "Your violation of third party rights, including intellectual property rights",
    indemnity4: "Any content you submit, post or transmit through the Services",
    
    // Section 9 - Dispute Resolution
    section9Title: "Dispute Resolution",
    section9Number: "Section 9",
    section9P1: "Before taking any legal action, the parties undertake to attempt to resolve any dispute through good faith negotiation.",
    governingLawTitle: "Governing law",
    governingLawText: "These Terms are governed by and construed in accordance with Italian law, without regard to conflict of law principles.",
    jurisdictionTitle: "Jurisdiction",
    jurisdictionText: "Any dispute relating to these Terms will be subject to the exclusive jurisdiction of the courts of Teramo, Italy.",
    mediationTitle: "Mediation",
    mediationText: "We invite you to contact us at info@biorigeneralinformatics.com to discuss any issues.",
    severabilityTitle: "Important",
    severabilityText: "The invalidity or unenforceability of any provision of these Terms will not prejudice the validity or enforceability of the remaining provisions, which will remain in full force and effect.",
    
    // Section 10 - General Provisions
    section10Title: "General Provisions",
    section10Number: "Section 10",
    section10P1: "These Terms constitute the entire agreement between you and Biorigeneral Informatics regarding the subject matter herein and supersede all prior or contemporaneous agreements, communications and proposals, oral or written, between the parties.",
    entireAgreementTitle: "Entire agreement",
    entireAgreementText: "These Terms represent the complete agreement between the parties and supersede any other prior or contemporaneous agreement relating to the subject matter herein.",
    waiverTitle: "Waiver",
    waiverText: "Any waiver of any provision of these Terms will be effective only if in writing and signed by Biorigeneral Informatics.",
    assignmentTitle: "Assignment",
    assignmentText: "You may not assign or transfer any right or obligation arising from these Terms without our prior written consent. Biorigeneral Informatics may assign or transfer its rights and obligations under these Terms without restriction.",
    forceMajeureTitle: "Force majeure",
    forceMajeureText: "We will not be liable for any delays or failures in performance resulting from causes beyond our reasonable control, including, without limitation, acts of force majeure, natural disasters, pandemics, wars, terrorism, riots, embargoes, acts of civil or military authorities, fires, floods, accidents, strikes or shortages of transportation, fuel, energy, labor or materials.",
    contractLanguageTitle: "Contract language",
    contractLanguageText: "These Terms have been drafted in Italian. Any translations are provided for user convenience only. In case of inconsistencies or contradictions between the Italian version and any translated version, the Italian version shall prevail.",
    
    // Section 11 - Changes to Terms
    section11Title: "Changes to Terms",
    section11Number: "Section 11",
    section11P1: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Changes may be necessary to reflect changes in our business practices, Service updates or regulatory developments.",
    modificationProcedureTitle: "Modification procedure",
    modification1: "Notice",
    modification1Text: "For substantial changes, we will provide at least 30 days' notice before the new terms take effect, by posting a notice on our website or sending an email notification.",
    modification2: "Acceptance",
    modification2Text: "By continuing to access or use our Services after the changes become effective, you agree to be bound by the revised terms.",
    modification3: "Rejection",
    modification3Text: "If you do not accept the new terms, please discontinue use of the Services. Continued use constitutes acceptance of the changes.",
    section11P2: "The most recent version of the Terms will always be available on our website. We encourage you to periodically review this page for any changes.",
    
    // Section 12 - Contact
    section12Title: "Contact Information",
    section12Number: "Section 12",
    section12P1: "For questions about these Terms and Conditions or our Services, you can contact us using the following information:",
    emailLabel: "Email",
    addressLabel: "Address",
    legalContactTitle: "Legal contacts",
    legalContactText: "For specific legal matters relating to these Terms, please contact us in writing at the address indicated above, clearly specifying the subject of the communication.",
    responseTimeTitle: "Response times",
    responseTimeText: "We are committed to responding to your requests within 5 business days of receipt. For urgent matters, please indicate this clearly in the subject of the communication."
  }
};

const TerminiCondizioni = () => {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const t = translations[language];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

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
         {/* Language Toggle Button */}
         <div className="flex justify-center mb-8">
           <button
             onClick={toggleLanguage}
             className="flex items-center gap-2 bg-indigo-500/10 hover:bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/20 rounded-full px-4 py-2 transition-all duration-300 group"
           >
             <Languages className="w-4 h-4 text-indigo-400" />
             <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
               {t.switchLanguage}
             </span>
           </button>
         </div>

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
               {t.title}
             </span>
           </h1>
           <p className="text-xl text-foreground/80 leading-relaxed">
             {t.subtitle}
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
           <span className="text-foreground/70">{t.lastUpdate}</span>
         </div>
       </div>
     </section>

     {/* Main Content Section - Layout migliorato */}
     <section className="py-8 relative">
       <div className="container mx-auto px-6 lg:px-12 relative z-10">
         <div className="max-w-5xl mx-auto">
           
           {/* Sezione 1 - Introduzione */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={BookOpen} title={t.section1Title} number={t.section1Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section1P1}
                 </p>
                 <p className="text-lg leading-relaxed">
                   {t.section1P2}
                 </p>
                 <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg">
                   <h4 className="font-medium flex items-center">
                     <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                     {t.importantTitle}
                   </h4>
                   <p className="mt-2">
                     {t.importantText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 2 - Definizioni */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={ScrollText} title={t.section2Title} number={t.section2Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section2P1}
                 </p>
                 
                 <div className="space-y-4 mt-6">
                   <div className="flex items-start p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <div className="min-w-0 flex-1">
                       <h4 className="font-medium text-indigo-300">{t.def1Term}</h4>
                       <p className="mt-1 text-foreground/70">{t.def1Text}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <div className="min-w-0 flex-1">
                       <h4 className="font-medium text-indigo-300">{t.def2Term}</h4>
                       <p className="mt-1 text-foreground/70">{t.def2Text}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <div className="min-w-0 flex-1">
                       <h4 className="font-medium text-indigo-300">{t.def3Term}</h4>
                       <p className="mt-1 text-foreground/70">{t.def3Text}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <div className="min-w-0 flex-1">
                       <h4 className="font-medium text-indigo-300">{t.def4Term}</h4>
                       <p className="mt-1 text-foreground/70">{t.def4Text}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <div className="min-w-0 flex-1">
                       <h4 className="font-medium text-indigo-300">{t.def5Term}</h4>
                       <p className="mt-1 text-foreground/70">{t.def5Text}</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 3 - Accettazione e Modifiche */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={UserCheck} title={t.section3Title} number={t.section3Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section3P1}
                 </p>
                 
                 <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                   <ul className="space-y-4">
                     <li className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                       <span>{t.acceptance1}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                       <span>{t.acceptance2}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                       <span>{t.acceptance3}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                       <span>{t.acceptance4}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                       <span>{t.acceptance5}</span>
                     </li>
                   </ul>
                 </div>
                 
                 <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-6">
                   <h4 className="font-medium flex items-center">
                     <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                     {t.minorsTitle}
                   </h4>
                   <p className="mt-2">
                     {t.minorsText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 4 - Descrizione dei Servizi */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Shield} title={t.section4Title} number={t.section4Number} />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    {t.section4P1}
                  </p>
                  
                  <div className="grid gap-6 mt-8">
                    <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-indigo-400">
                        <FileText className="w-5 h-5 mr-2" />
                        {t.softwareDevelopmentTitle}
                      </h3>
                      <p className="text-foreground/70">
                        {t.softwareDevelopmentText}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-indigo-400">
                        <Globe className="w-5 h-5 mr-2" />
                        {t.aiTitle}
                      </h3>
                      <p className="text-foreground/70">
                        {t.aiText}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-indigo-400">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        {t.consultingTitle}
                      </h3>
                      <p className="text-foreground/70">
                        {t.consultingText}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-8">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                      {t.serviceModificationsTitle}
                    </h4>
                    <p className="mt-2">
                      {t.serviceModificationsText}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

           {/* Sezione 5 - Proprietà Intellettuale */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={FileText} title={t.section5Title} number={t.section5Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section5P1}
                 </p>
                 
                 <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                   <h3 className="text-lg font-semibold mb-4">{t.ipCategories}</h3>
                   <ul className="space-y-4">
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">1</span>
                       </div>
                       <div>
                         <p className="text-foreground/70 mt-1">{t.ip1}</p>
                       </div>
                     </li>
                     
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">2</span>
                       </div>
                       <div>
                         <p className="text-foreground/70 mt-1">{t.ip2}</p>
                       </div>
                     </li>
                     
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">3</span>
                       </div>
                       <div>
                         <p className="text-foreground/70 mt-1">{t.ip3}</p>
                       </div>
                     </li>
                     
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">4</span>
                       </div>
                       <div>
                         <p className="text-foreground/70 mt-1">{t.ip4}</p>
                       </div>
                     </li>
                   </ul>
                 </div>
                 
                 <p className="mt-8">
                   {t.section5P2}
                 </p>
                 
                 <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-6">
                   <h4 className="font-medium flex items-center">
                     <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                     {t.limitationsTitle}
                   </h4>
                   <p className="mt-2">
                     {t.limitationsText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 6 - Privacy e Protezione dei Dati */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Lock} title={t.section6Title} number={t.section6Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section6P1}
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-6 mt-8">
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.dataProcessingTitle}</h3>
                     <p>
                       {t.dataProcessingText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.dataSecurityTitle}</h3>
                     <p>
                       {t.dataSecurityText}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 7 - Limitazione di Responsabilità */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Scale} title={t.section7Title} number={t.section7Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section7P1}
                 </p>
                 
                 <div className="space-y-6 mt-8">
                   <div className="p-5 rounded-lg border-l-4 border-amber-400 bg-amber-400/5">
                     <h3 className="font-semibold text-lg mb-2">{t.disclaimerTitle}</h3>
                     <p>
                       {t.disclaimerText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-red-400 bg-red-400/5">
                     <h3 className="font-semibold text-lg mb-2">{t.liabilityLimitTitle}</h3>
                     <p>
                       {t.liabilityLimitText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.maxLiabilityTitle}</h3>
                     <p>
                       {t.maxLiabilityText}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 8 - Indennizzo */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Shield} title={t.section8Title} number={t.section8Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section8P1}
                 </p>
                 
                 <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                   <ul className="space-y-3">
                     <li className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></div>
                       <span>{t.indemnity1}</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></div>
                       <span>{t.indemnity2}</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></div>
                       <span>{t.indemnity3}</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></div>
                       <span>{t.indemnity4}</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 9 - Risoluzione delle Controversie */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={MessageSquare} title={t.section9Title} number={t.section9Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section9P1}
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-6 mt-8">
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.governingLawTitle}</h3>
                     <p>
                       {t.governingLawText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.jurisdictionTitle}</h3>
                     <p>
                       {t.jurisdictionText}
                     </p>
                   </div>
                 </div>
                 
                 <div className="mt-8">
                   <div className="p-5 rounded-lg border-l-4 border-green-400 bg-green-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.mediationTitle}</h3>
                     <p>
                       {t.mediationText}
                     </p>
                   </div>
                 </div>
                 
                 <div className="p-5 border-l-4 border-amber-400 bg-amber-400/5 rounded-r-lg mt-8">
                   <h4 className="font-medium flex items-center">
                     <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                     {t.severabilityTitle}
                   </h4>
                   <p className="mt-2">
                     {t.severabilityText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 10 - Disposizioni Generali */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Globe} title={t.section10Title} number={t.section10Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section10P1}
                 </p>
                 
                 <div className="grid gap-6 mt-8">
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.entireAgreementTitle}</h3>
                     <p>
                       {t.entireAgreementText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.waiverTitle}</h3>
                     <p>
                       {t.waiverText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.assignmentTitle}</h3>
                     <p>
                       {t.assignmentText}
                     </p>
                   </div>
                   
                   <div className="p-5 rounded-lg border-l-4 border-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-2">{t.forceMajeureTitle}</h3>
                     <p>
                       {t.forceMajeureText}
                     </p>
                   </div>
                 </div>
                 
                 <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20 mt-8">
                   <h4 className="text-lg font-medium mb-4">{t.contractLanguageTitle}</h4>
                   <p>
                     {t.contractLanguageText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 11 - Modifiche ai Termini */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={FileCheck} title={t.section11Title} number={t.section11Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section11P1}
                 </p>
                 
                 <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-6">
                   <h3 className="text-lg font-semibold mb-4">{t.modificationProcedureTitle}</h3>
                   <ul className="space-y-4">
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">1</span>
                       </div>
                       <div>
                         <span className="font-medium">{t.modification1}</span>
                         <p className="text-foreground/70 mt-1">{t.modification1Text}</p>
                       </div>
                     </li>
                     
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">2</span>
                       </div>
                       <div>
                         <span className="font-medium">{t.modification2}</span>
                         <p className="text-foreground/70 mt-1">{t.modification2Text}</p>
                       </div>
                     </li>
                     
                     <li className="flex items-start">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                         <span className="text-indigo-400 text-sm font-bold">3</span>
                       </div>
                       <div>
                         <span className="font-medium">{t.modification3}</span>
                         <p className="text-foreground/70 mt-1">{t.modification3Text}</p>
                       </div>
                     </li>
                   </ul>
                 </div>
                 
                 <p className="text-base mt-8">
                   {t.section11P2}
                 </p>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 12 - Informazioni di Contatto */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Mail} title={t.section12Title} number={t.section12Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section12P1}
                 </p>
                 
                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                       <Mail className="w-10 h-10 text-indigo-400 mb-4" />
                       <h4 className="font-medium mb-2">{t.emailLabel}</h4>
                       <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">
                         info@biorigeneralinformatics.com
                       </a>
                     </div>
                     
                     <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                       <MapPin className="w-10 h-10 text-indigo-400 mb-4" />
                       <h4 className="font-medium mb-2">{t.addressLabel}</h4>
                       <p>
                         Biorigeneral Informatics<br />
                         Via Salara 2/A<br />
                         64026 Roseto degli Abruzzi (TE)<br />
                         Italia
                       </p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6 mt-8">
                   <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                     <h4 className="font-medium">{t.legalContactTitle}</h4>
                     <p className="mt-2">
                       {t.legalContactText}
                     </p>
                   </div>
                   
                   <div className="p-5 border-l-4 border-green-400 bg-green-500/5 rounded-r-lg">
                     <h4 className="font-medium">{t.responseTimeTitle}</h4>
                     <p className="mt-2">
                       {t.responseTimeText}
                     </p>
                   </div>
                 </div>
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
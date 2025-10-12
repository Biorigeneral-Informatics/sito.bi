// src/pages/PrivacyPolicy.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Database, Cookie, FileText, 
  FileCheck, Globe, Clock, Monitor, Mail, 
  Fingerprint, AlertCircle, Users, UserCheck, 
  KeyRound, Eye, Server,
  MapPin,
  Shield,
  Languages
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
    title: "Privacy e Cookie Policy",
    subtitle: "Come proteggiamo i tuoi dati personali e utilizziamo i cookie durante la tua esperienza con i nostri servizi.",
    lastUpdate: "Ultimo aggiornamento: 12 ottobre 2025",
    switchLanguage: "Switch to English",
    
    // Sezione 1 - Informazioni Generali
    section1Title: "Informazioni Generali",
    section1Number: "Sezione 1",
    section1P1: "La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione delle informazioni personali quando utilizzi i nostri servizi, visiti il nostro sito web o interagisci con noi in qualsiasi altro modo.",
    section1P2: "Biorigeneral Informatics è il titolare del trattamento dei dati ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea e delle leggi italiane sulla protezione dei dati personali.",
    commitmentTitle: "Il nostro impegno per la privacy",
    commitmentText: "Ci impegniamo a proteggere la tua privacy e a trattare i tuoi dati personali con la massima cura e trasparenza. Questa policy ti aiuterà a comprendere quali informazioni raccogliamo, come le utilizziamo e quali diritti hai in relazione ai tuoi dati personali.",
    
    // Sezione 2 - Titolare del Trattamento
    section2Title: "Titolare del Trattamento",
    section2Number: "Sezione 2",
    section2P1: "Il titolare del trattamento dei tuoi dati personali è:",
    companyName: "Biorigeneral Informatics",
    companyAddress: "Via Salara 2/A, 64026 Roseto degli Abruzzi (TE), Italia",
    companyEmail: "info@biorigeneralinformatics.com",
    companyVat: "P.IVA: 02087680679",
    contactInfoTitle: "Informazioni di contatto",
    contactInfoText: "Per qualsiasi domanda relativa al trattamento dei tuoi dati personali o per esercitare i tuoi diritti, puoi contattarci utilizzando le informazioni di contatto fornite.",
    
    // Sezione 3 - Dati che Raccogliamo
    section3Title: "Dati che Raccogliamo",
    section3Number: "Sezione 3",
    section3P1: "Raccogliamo diverse tipologie di informazioni per fornirti i nostri servizi e migliorare la tua esperienza. Le informazioni che raccogliamo includono:",
    personalDataTitle: "Dati personali forniti direttamente",
    personalDataText: "Quando ti registri ai nostri servizi, compili moduli di contatto, o interagisci con noi, potresti fornirci informazioni come nome, cognome, indirizzo email, numero di telefono e altre informazioni di contatto.",
    technicalDataTitle: "Dati tecnici automatici",
    technicalDataText: "Quando visiti il nostro sito web o utilizzi i nostri servizi, raccogliamo automaticamente alcune informazioni tecniche come indirizzo IP, tipo di browser, sistema operativo, pagine visitate e durata della visita.",
    usageDataTitle: "Dati di utilizzo",
    usageDataText: "Informazioni su come utilizzi i nostri servizi, incluse le funzionalità utilizzate, le preferenze impostate e le interazioni con i nostri contenuti.",
    communicationDataTitle: "Dati di comunicazione",
    communicationDataText: "Registriamo le comunicazioni che hai con noi, incluse email, chat di supporto e altre forme di corrispondenza per fornire assistenza e migliorare i nostri servizi.",
    specialCategoriesTitle: "Categorie particolari di dati",
    specialCategoriesText: "Non raccogliamo deliberatamente categorie particolari di dati personali (come informazioni su salute, orientamento sessuale, opinioni politiche, credenze religiose o filosofiche) a meno che non sia strettamente necessario per fornire un servizio specifico richiesto dall'utente e con esplicito consenso.",
    
    // Sezione 4 - Come Utilizziamo i Tuoi Dati
    section4Title: "Come Utilizziamo i Tuoi Dati",
    section4Number: "Sezione 4",
    section4P1: "Trattiamo i tuoi dati personali solo in presenza di una base giuridica adeguata. La nostra attività di trattamento si fonda su una delle seguenti basi giuridiche:",
    contractTitle: "Esecuzione di un contratto",
    contractText: "Quando il trattamento è necessario per l'esecuzione di un contratto di cui sei parte o per prendere misure su tua richiesta prima di stipulare un contratto.",
    legitimateTitle: "Legittimo interesse",
    legitimateText: "Quando il trattamento è necessario per i nostri legittimi interessi o quelli di terzi, a condizione che non prevalgano i tuoi diritti e libertà fondamentali.",
    legalTitle: "Obbligo legale",
    legalText: "Quando il trattamento è necessario per adempiere a un obbligo legale al quale siamo soggetti, como la conservazione di documenti fiscali.",
    consentTitle: "Consenso",
    consentText: "Quando ci hai fornito il tuo consenso esplicito per trattare i tuoi dati personali per una o più finalità specifiche.",
    vitalTitle: "Interessi vitali",
    vitalText: "In circostanze eccezionali, quando il trattamento è necessario per proteggere gli interessi vitali tuoi o di un'altra persona fisica.",
    publicTitle: "Interesse pubblico",
    publicText: "Quando il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o nell'esercizio di pubblici poteri.",
    // Aggiungi nella sezione it:
    processingMethodsTitle: "Modalità di trattamento dei dati:",
    vercelMethod: "Il nostro sito utilizza Vercel per l'Hosting e la creazione del sito web",
    analyticsMethod: "Utilizziamo Google Analytics per analizzare l'uso del sito web e migliorare i nostri servizi",
    calendlyMethod: "Utilizziamo Calendly per la gestione degli appuntamenti",
    makeMethod: "Utilizziamo Make per il processamento dei dati e workflow produttivi ad uso interno",
    zohoMethod: "Utilizziamo Zoho per gestire le email che riceviamo ed i contatti",
    specificPurposesTitle: "Gli scopi specifici per cui trattiamo i tuoi dati personali includono:",
    purpose1: "Fornitura e gestione dei Servizi richiesti, inclusa l'amministrazione del tuo account",
    purpose2: "Elaborazione e completamento dei pagamenti, fatturazione e invio di comunicazioni relative",
    purpose3: "Assistenza clienti e risposta alle tue richieste, domande o reclami",
    purpose4: "Miglioramento e personalizzazione dei nostri Servizi in base alle tue preferenze e comportamenti",
    purpose5: "Invio di comunicazioni necessarie relative al servizio (aggiornamenti, avvisi di sicurezza, ecc.)",
    purpose6: "Previo tuo consenso, invio di newsletter e comunicazioni di marketing su novità, offerte e servizi",
    purpose7: "Analisi dell'uso del sito web per ottimizzare la funzionalità e migliorare l'esperienza utente",
    purpose8: "Individuazione e prevenzione di frodi, abusi e minacce alla sicurezza",
    purpose9: "Adempimento di obblighi di legge, contabili, fiscali e normativi",


    // Sezione 5 - Cookie Policy
    section5Title: "Cookie Policy",
    section5Number: "Sezione 5",
    section5P1: "Il nostro sito web utilizza cookie e tecnologie simili per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti.",
    cookieDefinitionTitle: "Cosa sono i cookie",
    cookieDefinitionText: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Ci permettono di riconoscere il tuo browser e catturare e ricordare certe informazioni.",
    cookieTypesTitle: "Tipologie di cookie utilizzati",
    essentialCookies: "Cookie essenziali",
    essentialCookiesText: "Necessari per il funzionamento del sito web e non possono essere disabilitati.",
    analyticsCookies: "Cookie analitici",
    analyticsCookiesText: "Ci aiutano a comprendere come i visitatori interagiscono con il sito web. Durata: 24 mesi (Google Analytics).",
    functionalCookies: "Cookie funzionali", 
    functionalCookiesText: "Consentono funzionalità avanzate e personalizzazione. Durata: 12 mesi (preferenze tema, Calendly).",
    marketingCookies: "Cookie di marketing",
    marketingCookiesText: "Utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti. Durata: 90 giorni.",
    cookieManagementTitle: "Gestione dei cookie",
    cookieManagementText: "Puoi gestire le tue preferenze sui cookie attraverso il banner dei cookie presente sul nostro sito. Puoi anche modificare le impostazioni del tuo browser per bloccare o eliminare i cookie, ma questo potrebbe influire sulla funzionalità del sito.",
    
    // Sezione 6 - Condivisione dei Dati
    section6Title: "Condivisione dei Dati",
    section6Number: "Sezione 6",
    section6P1: "Non vendiamo, non affittiamo né divulghiamo in altro modo i tuoi dati personali a terzi per scopi commerciali. Tuttavia, potremmo condividere i tuoi dati nelle seguenti circostanze:",
    providersTitle: "Fornitori di servizi",
    providersText: "Condividiamo i dati con fornitori di servizi fidati che ci assistono nell'erogazione dei nostri servizi, come servizi di hosting, elaborazione dei pagamenti, analisi dei dati e supporto clienti.",
    legalRequirementsTitle: "Requisiti legali",
    legalRequirementsText: "Potremmo divulgare i tuoi dati se richiesto dalla legge, da un'autorità giudiziaria o per proteggere i nostri diritti, la proprietà o la sicurezza dei nostri utenti.",
    businessTransferTitle: "Trasferimento aziendale",
    businessTransferText: "In caso di fusione, acquisizione o vendita di attività, i tuoi dati potrebbero essere trasferiti come parte della transazione, sempre nel rispetto della presente policy.",
    consentBasedTitle: "Su base consensuale",
    consentBasedText: "Con il tuo esplicito consenso, potremmo condividere i tuoi dati con partner selezionati per offrirti servizi aggiuntivi o opportunità che potrebbero interessarti.",
    dataProtectionNote: "Ogni condivisione di dati avviene nel rispetto delle leggi sulla protezione dei dati e con adeguate misure di sicurezza.",
    
    // Sezione 7 - Trasferimenti Internazionali
    section7Title: "Trasferimenti Internazionali di Dati",
    section7Number: "Sezione 7",
    section7P1: "I tuoi dati personali potrebbero essere archiviati ed elaborati in qualsiasi paese in cui abbiamo strutture o in cui impieghiamo fornitori di servizi. Ciò significa che potremmo trasferire i tuoi dati a giurisdizioni al di fuori dello Spazio Economico Europeo (SEE) o del tuo paese di residenza.",
    section7P2: "Quando trasferiamo dati personali al di fuori del SEE, adottiamo misure appropriate per garantire che i tuoi dati ricevano un livello di protezione adeguato, in conformità con il GDPR e altre leggi applicabili sulla protezione dei dati.",
    safeguardsTitle: "Misure di protezione",
    safeguardsText: "Utilizziamo clausole contrattuali standard approvate dalla Commissione Europea, decisioni di adeguatezza e altre misure di protezione riconosciute per garantire la sicurezza dei tuoi dati durante i trasferimenti internazionali.",
    
    // Sezione 8 - Conservazione dei Dati
    section8Title: "Conservazione dei Dati",
    section8Number: "Sezione 8",
    section8P1: "Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, inclusi eventuali requisiti legali, contabili o di reporting.",
    retentionCriteriaTitle: "Criteri di conservazione",
    retentionCriteriaText: "I nostri periodi di conservazione si basano su diversi fattori, tra cui la natura dei dati, la finalità per cui sono stati raccolti, e i requisiti legali applicabili. Quando i dati non sono più necessari, procediamo alla loro cancellazione sicura o anonimizzazione.",
    retentionPeriodsTitle: "Periodi di conservazione tipici",
    retentionPeriods: "Dati di account: per la durata dell'account attivo più 2 anni • Dati di comunicazione: 3 anni dalla data dell'ultima comunicazione • Dati di fatturazione: 10 anni per conformità fiscale • Dati di marketing: fino alla revoca del consenso • Consensi cookie: 24 mesi dalla raccolta, dopodiché vengono eliminati automaticamente",
    
    // Sezione 9 - Sicurezza dei Dati
    section9Title: "Sicurezza dei Dati",
    section9Number: "Sezione 9",
    section9P1: "La sicurezza dei tuoi dati personali è di fondamentale importanza per noi. Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati contro accessi non autorizzati, alterazioni, divulgazioni o distruzioni.",
    securityMeasuresTitle: "Misure di sicurezza implementate",
    encryptionMeasure: "Crittografia avanzata",
    accessControlMeasure: "Controlli di accesso",
    monitoringMeasure: "Monitoraggio continuo",
    backupMeasure: "Backup regolari",
    trainingMeasure: "Formazione del personale",
    auditMeasure: "Audit di sicurezza",
    incidentTitle: "Gestione degli incidenti",
    incidentText: "In caso di violazione dei dati che possa comportare un rischio per i tuoi diritti e libertà, ti informeremo senza ritardo e, se necessario, notificheremo l'autorità di controllo competente entro 72 ore dalla scoperta della violazione.",
    
    // Sezione 10 - I Tuoi Diritti
    section10Title: "I Tuoi Diritti",
    section10Number: "Sezione 10",
    section10P1: "Secondo il GDPR e le leggi italiane sulla protezione dei dati, hai diversi diritti riguardo ai tuoi dati personali:",
    rightsIntro: "Hai il diritto di:",
    accessRight: "Accesso: Richiedere informazioni sui dati personali che trattiamo su di te",
    rectificationRight: "Rettifica: Richiedere la correzione di dati inesatti o incompleti",
    erasureRight: "Cancellazione: Richiedere la cancellazione dei tuoi dati in determinate circostanze",
    restrictionRight: "Limitazione: Richiedere la limitazione del trattamento dei tuoi dati",
    portabilityRight: "Portabilità: Ricevere i tuoi dati in un formato strutturato e leggibile",
    objectionRight: "Opposizione: Opporti al trattamento dei tuoi dati per motivi legittimi",
    withdrawRight: "Revoca del consenso: Revocare il consenso precedentemente fornito",
    automatedTitle: "Decisioni automatizzate",
    automatedText: "Hai il diritto di non essere soggetto a decisioni basate esclusivamente su trattamenti automatizzati, inclusa la profilazione, che producano effetti legali che ti riguardano o che incidano significativamente sulla tua persona.",
    exerciseRightsNote: "Per esercitare questi diritti, contattaci utilizzando le informazioni fornite nella sezione \"Come Contattarci\". Risponderemo alla tua richiesta entro 30 giorni.",
    
    // Sezione 11 - Modifiche alla Privacy Policy
    section11Title: "Modifiche alla Privacy Policy",
    section11Number: "Sezione 11",
    section11P1: "Potremmo aggiornare periodicamente questa Privacy Policy per riflettere cambiamenti nei nostri servizi, nelle leggi applicabili o nelle nostre pratiche di trattamento dei dati.",
    changesNotificationTitle: "Notifica delle modifiche",
    changesNotificationText: "Per modifiche significative che potrebbero influire sui tuoi diritti o sul modo in cui trattiamo i tuoi dati, ti forniremo una notifica chiara, come un messaggio email o un avviso sul nostro sito web, prima che le modifiche diventino effettive.",
    section11P3: "Ti incoraggiamo a rivedere periodicamente la nostra Privacy Policy per essere informato su come proteggiamo i tuoi dati personali. L'uso continuato dei nostri Servizi dopo la pubblicazione delle modifiche costituisce accettazione di tali modifiche.",
    
    // Sezione 12 - Reclami
    section12Title: "Reclami",
    section12Number: "Sezione 12",
    section12P1: "Se ritieni che il trattamento dei tuoi dati personali violi la normativa in materia di protezione dei dati, hai il diritto di presentare un reclamo. Ti incoraggiamo a contattarci prima di presentare un reclamo all'autorità di controllo, in modo da poter risolvere eventuali problemi direttamente.",
    authorityTitle: "Autorità di controllo",
    authorityText: "In Italia, l'autorità di controllo competente è il Garante per la protezione dei dati personali. Puoi presentare un reclamo visitando il sito web ufficiale: www.gpdp.it",
    resolutionTitle: "Risoluzione dei problemi",
    resolutionText: "Ci impegniamo a risolvere qualsiasi problema relativo alla privacy in modo rapido e soddisfacente. Il nostro team dedicato alla privacy esaminerà la tua preoccupazione e ti risponderà nel minor tempo possibile.",
    
    // Sezione 13 - Come Contattarci
    section13Title: "Come Contattarci",
    section13Number: "Sezione 13",
    section13P1: "Se hai domande su questa Privacy Policy, sui nostri trattamenti dei dati o desideri esercitare i tuoi diritti, non esitare a contattarci:",
    emailLabel: "Email",
    emailDescription: "Per domande generali o richieste relative alla privacy",
    addressLabel: "Indirizzo postale",
    scheduleNote: "Dal lunedì al venerdì, 9:00-18:00 CET",
    responseCommitment: "Ci impegniamo a rispondere a tutte le richieste in modo tempestivo e accurato."
  },
  
  en: {
    title: "Privacy & Cookie Policy",
    subtitle: "How we protect your personal data and use cookies during your experience with our services.",
    lastUpdate: "Last updated: October 12, 2025",
    switchLanguage: "Cambia in Italiano",
    
    // Section 1 - General Information
    section1Title: "General Information",
    section1Number: "Section 1",
    section1P1: "This Privacy Policy describes how we collect, use and protect personal information when you use our services, visit our website or interact with us in any other way.",
    section1P2: "Biorigeneral Informatics is the data controller under the European Union General Data Protection Regulation (GDPR) and Italian personal data protection laws.",
    commitmentTitle: "Our commitment to privacy",
    commitmentText: "We are committed to protecting your privacy and treating your personal data with the utmost care and transparency. This policy will help you understand what information we collect, how we use it and what rights you have regarding your personal data.",
    
    // Section 2 - Data Controller
    section2Title: "Data Controller",
    section2Number: "Section 2",
    section2P1: "The controller of your personal data is:",
    companyName: "Biorigeneral Informatics",
    companyAddress: "Via Salara 2/A, 64026 Roseto degli Abruzzi (TE), Italy",
    companyEmail: "info@biorigeneralinformatics.com",
    companyVat: "VAT: 02087680679",
    contactInfoTitle: "Contact information",
    contactInfoText: "For any questions regarding the processing of your personal data or to exercise your rights, you can contact us using the contact information provided.",
    
    // Section 3 - Data We Collect
    section3Title: "Data We Collect",
    section3Number: "Section 3",
    section3P1: "We collect different types of information to provide you with our services and improve your experience. The information we collect includes:",
    personalDataTitle: "Personal data provided directly",
    personalDataText: "When you register for our services, fill out contact forms, or interact with us, you may provide us with information such as first name, last name, email address, phone number and other contact information.",
    technicalDataTitle: "Automatic technical data",
    technicalDataText: "When you visit our website or use our services, we automatically collect some technical information such as IP address, browser type, operating system, pages visited and visit duration.",
    usageDataTitle: "Usage data",
    usageDataText: "Information about how you use our services, including features used, preferences set and interactions with our content.",
    communicationDataTitle: "Communication data",
    communicationDataText: "We record communications you have with us, including emails, support chats and other forms of correspondence to provide assistance and improve our services.",
    specialCategoriesTitle: "Special categories of data",
    specialCategoriesText: "We do not deliberately collect special categories of personal data (such as information about health, sexual orientation, political opinions, religious or philosophical beliefs) unless strictly necessary to provide a specific service requested by the user and with explicit consent.",
    
    // Section 4 - How We Use Your Data
    section4Title: "How We Use Your Data",
    section4Number: "Section 4",
    section4P1: "We process your personal data only in the presence of an adequate legal basis. Our processing activity is based on one of the following legal bases:",
    contractTitle: "Performance of a contract",
    contractText: "When processing is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into a contract.",
    legitimateTitle: "Legitimate interest",
    legitimateText: "When processing is necessary for our legitimate interests or those of third parties, provided that your fundamental rights and freedoms do not override.",
    legalTitle: "Legal obligation",
    legalText: "When processing is necessary to comply with a legal obligation to which we are subject, such as keeping tax documents.",
    consentTitle: "Consent",
    consentText: "When you have given us your explicit consent to process your personal data for one or more specific purposes.",
    vitalTitle: "Vital interests",
    vitalText: "In exceptional circumstances, when processing is necessary to protect your vital interests or those of another natural person.",
    publicTitle: "Public interest",
    publicText: "When processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority.",
    // Aggiungi nella sezione en:
    processingMethodsTitle: "Data processing methods:",
    vercelMethod: "Our site uses Vercel for hosting and website creation",
    analyticsMethod: "We use Google Analytics to analyze website usage and improve our services",
    calendlyMethod: "We use Calendly for appointment management",
    makeMethod: "We use Make for data processing and internal production workflows",
    zohoMethod: "We use Zoho to manage emails we receive and contacts",
    specificPurposesTitle: "The specific purposes for which we process your personal data include:",
    purpose1: "Provision and management of requested Services, including administration of your account",
    purpose2: "Processing and completion of payments, billing and sending related communications",
    purpose3: "Customer support and response to your requests, questions or complaints",
    purpose4: "Improvement and personalization of our Services based on your preferences and behaviors",
    purpose5: "Sending necessary service-related communications (updates, security notices, etc.)",
    purpose6: "With your prior consent, sending newsletters and marketing communications about news, offers and services",
    purpose7: "Analysis of website usage to optimize functionality and improve user experience",
    purpose8: "Detection and prevention of fraud, abuse and security threats",
    purpose9: "Compliance with legal, accounting, tax and regulatory obligations",


    // Section 5 - Cookie Policy
    section5Title: "Cookie Policy",
    section5Number: "Section 5",
    section5P1: "Our website uses cookies and similar technologies to improve your browsing experience, analyze site traffic and personalize content.",
    cookieDefinitionTitle: "What are cookies",
    cookieDefinitionText: "Cookies are small text files that are stored on your device when you visit a website. They allow us to recognize your browser and capture and remember certain information.",
    cookieTypesTitle: "Types of cookies used",
    essentialCookies: "Essential cookies",
    essentialCookiesText: "Necessary for the website to function and cannot be disabled.",
    analyticsCookies: "Analytics cookies",
    analyticsCookiesText: "Help us understand how visitors interact with the website. Duration: 24 months (Google Analytics).",
    functionalCookies: "Functional cookies",
    functionalCookiesText: "Enable advanced functionality and personalization. Duration: 12 months (theme preferences, Calendly).",
    marketingCookies: "Marketing cookies",
    marketingCookiesText: "Used to track visitors across websites to display relevant and engaging ads. Duration: 90 days.",
    cookieManagementTitle: "Cookie management",
    cookieManagementText: "You can manage your cookie preferences through the cookie banner on our site. You can also change your browser settings to block or delete cookies, but this may affect the functionality of the site.",
    
    // Section 6 - Data Sharing
    section6Title: "Data Sharing",
    section6Number: "Section 6",
    section6P1: "We do not sell, rent or otherwise disclose your personal data to third parties for commercial purposes. However, we may share your data in the following circumstances:",
    providersTitle: "Service providers",
    providersText: "We share data with trusted service providers who assist us in delivering our services, such as hosting services, payment processing, data analytics and customer support.",
    legalRequirementsTitle: "Legal requirements",
    legalRequirementsText: "We may disclose your data if required by law, by a judicial authority or to protect our rights, property or the safety of our users.",
    businessTransferTitle: "Business transfer",
    businessTransferText: "In the event of a merger, acquisition or sale of business, your data may be transferred as part of the transaction, always in compliance with this policy.",
    consentBasedTitle: "Consent-based sharing",
    consentBasedText: "With your explicit consent, we may share your data with selected partners to offer you additional services or opportunities that may interest you.",
    dataProtectionNote: "Any data sharing takes place in compliance with data protection laws and with adequate security measures.",
    
    // Section 7 - International Data Transfers
    section7Title: "International Data Transfers",
    section7Number: "Section 7",
    section7P1: "Your personal data may be stored and processed in any country where we have facilities or where we employ service providers. This means we may transfer your data to jurisdictions outside the European Economic Area (EEA) or your country of residence.",
    section7P2: "When we transfer personal data outside the EEA, we take appropriate measures to ensure that your data receives an adequate level of protection, in accordance with GDPR and other applicable data protection laws.",
    safeguardsTitle: "Safeguards",
    safeguardsText: "We use standard contractual clauses approved by the European Commission, adequacy decisions and other recognized safeguards to ensure the security of your data during international transfers.",
    
    // Section 8 - Data Retention
    section8Title: "Data Retention",
    section8Number: "Section 8",
    section8P1: "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting or reporting requirements.",
    retentionCriteriaTitle: "Retention criteria",
    retentionCriteriaText: "Our retention periods are based on several factors, including the nature of the data, the purpose for which it was collected, and applicable legal requirements. When data is no longer needed, we proceed with its secure deletion or anonymization.",
    retentionPeriodsTitle: "Typical retention periods",
    retentionPeriods: "Account data: for the duration of the active account plus 2 years • Communication data: 3 years from the date of last communication • Billing data: 10 years for tax compliance • Marketing data: until consent is withdrawn • Cookie consents: 24 months from collection, after which they are automatically deleted",
    
    // Section 9 - Data Security
    section9Title: "Data Security",
    section9Number: "Section 9",
    section9P1: "The security of your personal data is of fundamental importance to us. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alterations, disclosure or destruction.",
    securityMeasuresTitle: "Security measures implemented",
    encryptionMeasure: "Advanced encryption",
    accessControlMeasure: "Access controls",
    monitoringMeasure: "Continuous monitoring",
    backupMeasure: "Regular backups",
    trainingMeasure: "Staff training",
    auditMeasure: "Security audits",
    incidentTitle: "Incident management",
    incidentText: "In case of a data breach that may pose a risk to your rights and freedoms, we will inform you without delay and, if necessary, notify the competent supervisory authority within 72 hours of discovering the breach.",
    
    // Section 10 - Your Rights
    section10Title: "Your Rights",
    section10Number: "Section 10",
    section10P1: "Under GDPR and Italian data protection laws, you have several rights regarding your personal data:",
    rightsIntro: "You have the right to:",
    accessRight: "Access: Request information about the personal data we process about you",
    rectificationRight: "Rectification: Request correction of inaccurate or incomplete data",
    erasureRight: "Erasure: Request deletion of your data in certain circumstances",
    restrictionRight: "Restriction: Request restriction of processing of your data",
    portabilityRight: "Portability: Receive your data in a structured and readable format",
    objectionRight: "Objection: Object to the processing of your data for legitimate reasons",
    withdrawRight: "Withdrawal of consent: Withdraw previously given consent",
    automatedTitle: "Automated decisions",
    automatedText: "You have the right not to be subject to decisions based solely on automated processing, including profiling, which produce legal effects concerning you or similarly significantly affect you.",
    exerciseRightsNote: "To exercise these rights, contact us using the information provided in the \"How to Contact Us\" section. We will respond to your request within 30 days.",
    
    // Section 11 - Changes to Privacy Policy
    section11Title: "Changes to Privacy Policy",
    section11Number: "Section 11",
    section11P1: "We may periodically update this Privacy Policy to reflect changes in our services, applicable laws or our data processing practices.",
    changesNotificationTitle: "Notification of changes",
    changesNotificationText: "For significant changes that may affect your rights or how we process your data, we will provide you with clear notification, such as an email message or notice on our website, before the changes become effective.",
    section11P3: "We encourage you to periodically review our Privacy Policy to stay informed about how we protect your personal data. Continued use of our Services after the publication of changes constitutes acceptance of such changes.",
    
    // Section 12 - Complaints
    section12Title: "Complaints",
    section12Number: "Section 12",
    section12P1: "If you believe that the processing of your personal data violates data protection regulations, you have the right to file a complaint. We encourage you to contact us before filing a complaint with the supervisory authority, so that we can resolve any issues directly.",
    authorityTitle: "Supervisory authority",
    authorityText: "In Italy, the competent supervisory authority is the Garante per la protezione dei dati personali. You can file a complaint by visiting the official website: www.gpdp.it",
    resolutionTitle: "Problem resolution",
    resolutionText: "We are committed to resolving any privacy-related issues quickly and satisfactorily. Our dedicated privacy team will review your concern and respond to you as soon as possible.",
    
    // Section 13 - How to Contact Us
    section13Title: "How to Contact Us",
    section13Number: "Section 13",
    section13P1: "If you have questions about this Privacy Policy, our data processing or wish to exercise your rights, please do not hesitate to contact us:",
    emailLabel: "Email",
    emailDescription: "For general questions or privacy-related requests",
    addressLabel: "Postal address",
    scheduleNote: "Monday to Friday, 9:00-18:00 CET",
    responseCommitment: "We are committed to responding to all requests in a timely and accurate manner."
  }
};

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const t = translations[language];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
   setLanguage(language === 'it' ? 'en' : 'it');
 };

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
               <ShieldCheck className="w-12 h-12 text-indigo-400" />
             </div>
           </div>
           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
               {t.title}
             </span>
           </h1>
           <p className="text-xl text-foreground/80 leading-relaxed">
             {t.subtitle}
           </p>
           <div className="mt-8 text-sm text-foreground/60">
             {t.lastUpdate}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Main Content */}
     <section className="pb-32 relative">
       <div className="container mx-auto px-6 lg:px-12 relative z-10">
         <div className="max-w-4xl mx-auto">
           
           {/* Sezione 1 - Informazioni Generali */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={FileText} title={t.section1Title} number={t.section1Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section1P1}
                 </p>
                 
                 <p className="text-lg leading-relaxed">
                   {t.section1P2}
                 </p>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg mt-6">
                   <h4 className="font-medium">{t.commitmentTitle}</h4>
                   <p className="mt-2">
                     {t.commitmentText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 2 - Titolare del Trattamento */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Users} title={t.section2Title} number={t.section2Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section2P1}
                 </p>
                 
                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <h4 className="font-semibold text-lg mb-2">{t.companyName}</h4>
                       <p className="text-foreground/70 mb-2">{t.companyAddress}</p>
                       <p className="text-foreground/70 mb-2">
                         <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">
                           {t.companyEmail}
                         </a>
                       </p>
                       <p className="text-foreground/70">{t.companyVat}</p>
                     </div>
                     
                     <div className="flex items-center justify-center">
                       <div className="w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center">
                         <UserCheck className="w-12 h-12 text-indigo-400" />
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg mt-4">
                   <h4 className="font-medium">{t.contactInfoTitle}</h4>
                   <p className="mt-2">
                     {t.contactInfoText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 3 - Dati che Raccogliamo */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Database} title={t.section3Title} number={t.section3Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section3P1}
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-6 my-8">
                   <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-3">{t.personalDataTitle}</h3>
                     <p className="text-foreground/70">
                       {t.personalDataText}
                     </p>
                   </div>
                   
                   <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-3">{t.technicalDataTitle}</h3>
                     <p className="text-foreground/70">
                       {t.technicalDataText}
                     </p>
                   </div>
                   
                   <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-3">{t.usageDataTitle}</h3>
                     <p className="text-foreground/70">
                       {t.usageDataText}
                     </p>
                   </div>
                   
                   <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                     <h3 className="font-semibold text-lg mb-3">{t.communicationDataTitle}</h3>
                     <p className="text-foreground/70">
                       {t.communicationDataText}
                     </p>
                   </div>
                 </div>
                 
                 <div className="mt-8 p-5 border-l-4 border-amber-400/50 bg-amber-400/5 rounded-r-lg">
                   <h4 className="text-lg font-medium flex items-center">
                     <AlertCircle className="w-5 h-5 text-amber-400 mr-2" />
                     {t.specialCategoriesTitle}
                   </h4>
                   <p className="mt-2">
                     {t.specialCategoriesText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 4 - Come Utilizziamo i Tuoi Dati */}
            <ScrollAnimation animation="fadeIn" threshold={0.1}>
              <div className="mb-16">
                <SectionTitle icon={Lock} title={t.section4Title} number={t.section4Number} />
                <div className="space-y-6 text-foreground/80 pl-16">
                  <p className="text-lg leading-relaxed">
                    {t.section4P1}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.contractTitle}</h3>
                      <p className="text-foreground/70">
                        {t.contractText}
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.legitimateTitle}</h3>
                      <p className="text-foreground/70">
                        {t.legitimateText}
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.legalTitle}</h3>
                      <p className="text-foreground/70">
                        {t.legalText}
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.consentTitle}</h3>
                      <p className="text-foreground/70">
                        {t.consentText}
                      </p>
                    </div>

                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.vitalTitle}</h3>
                      <p className="text-foreground/70">
                        {t.vitalText}
                      </p>
                    </div>

                    <div className="p-6 rounded-xl border border-l-4 border-indigo-500/20 border-l-indigo-400 bg-indigo-500/5">
                      <h3 className="font-semibold text-lg mb-3">{t.publicTitle}</h3>
                      <p className="text-foreground/70">
                        {t.publicText}
                      </p>
                    </div>
                  </div>

                  {/* Modalità di trattamento dei dati */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Server className="w-5 h-5 text-indigo-400 mr-2" />
                      {t.processingMethodsTitle}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.vercelMethod}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.analyticsMethod}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.calendlyMethod}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.makeMethod}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.zohoMethod}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scopi specifici del trattamento */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <FileText className="w-5 h-5 text-indigo-400 mr-2" />
                      {t.specificPurposesTitle}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose1}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose2}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose3}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose4}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose5}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose6}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose7}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose8}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                        <span>{t.purpose9}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

           {/* Sezione 5 - Cookie Policy */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Cookie} title={t.section5Title} number={t.section5Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section5P1}
                 </p>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                   <h4 className="font-medium">{t.cookieDefinitionTitle}</h4>
                   <p className="mt-2">
                     {t.cookieDefinitionText}
                   </p>
                 </div>
                 
                 <h4 className="text-lg font-semibold mt-8">{t.cookieTypesTitle}</h4>
                 
                 <div className="grid gap-4 mt-6">
                   <div className="flex items-start p-4 bg-white/5 rounded-lg">
                     <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                       <KeyRound className="w-4 h-4 text-green-400" />
                     </div>
                     <div>
                       <h5 className="font-medium mb-1">{t.essentialCookies}</h5>
                       <p className="text-sm text-foreground/70">
                         {t.essentialCookiesText}
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                       <Eye className="w-4 h-4 text-blue-400" />
                     </div>
                     <div>
                       <h5 className="font-medium mb-1">{t.analyticsCookies}</h5>
                       <p className="text-sm text-foreground/70">
                         {t.analyticsCookiesText}
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start p-4 bg-white/5 rounded-lg">
                     <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 mt-1">
                       <Monitor className="w-4 h-4 text-purple-400" />
                     </div>
                     <div>
                       <h5 className="font-medium mb-1">{t.functionalCookies}</h5>
                       <p className="text-sm text-foreground/70">
                         {t.functionalCookiesText}
                       </p>
                     </div>
                   </div>

                   <div className="flex items-start p-4 bg-white/5 rounded-lg">
                     <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 mt-1">
                       <Globe className="w-4 h-4 text-orange-400" />
                     </div>
                     <div>
                       <h5 className="font-medium mb-1">{t.marketingCookies}</h5>
                       <p className="text-sm text-foreground/70">
                         {t.marketingCookiesText}
                       </p>
                     </div>
                   </div>
                 </div>

                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg mt-6">
                   <h4 className="font-medium">{t.cookieManagementTitle}</h4>
                   <p className="mt-2">
                     {t.cookieManagementText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 6 - Condivisione dei Dati */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Shield} title={t.section6Title} number={t.section6Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section6P1}
                 </p>
                 
                 <div className="space-y-4 mt-6">
                   <div className="p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <h4 className="font-medium mb-2">{t.providersTitle}</h4>
                     <p className="text-foreground/70">
                       {t.providersText}
                     </p>
                   </div>
                   
                   <div className="p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <h4 className="font-medium mb-2">{t.legalRequirementsTitle}</h4>
                     <p className="text-foreground/70">
                       {t.legalRequirementsText}
                     </p>
                   </div>
                   
                   <div className="p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <h4 className="font-medium mb-2">{t.businessTransferTitle}</h4>
                     <p className="text-foreground/70">
                       {t.businessTransferText}
                     </p>
                   </div>

                   <div className="p-4 bg-white/5 rounded-lg border-l-4 border-indigo-400">
                     <h4 className="font-medium mb-2">{t.consentBasedTitle}</h4>
                     <p className="text-foreground/70">
                       {t.consentBasedText}
                     </p>
                   </div>
                 </div>
                 
                 <div className="p-5 border-l-4 border-green-400 bg-green-500/5 rounded-r-lg mt-6">
                   <p>
                     {t.dataProtectionNote}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 7 - Trasferimenti Internazionali di Dati */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Globe} title={t.section7Title} number={t.section7Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section7P1}
                 </p>
                 
                 <p className="text-lg leading-relaxed">
                   {t.section7P2}
                 </p>

                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                   <h4 className="font-medium">{t.safeguardsTitle}</h4>
                   <p className="mt-2">
                     {t.safeguardsText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 8 - Conservazione dei Dati */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Clock} title={t.section8Title} number={t.section8Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section8P1}
                 </p>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                   <h4 className="font-medium">{t.retentionCriteriaTitle}</h4>
                   <p className="mt-2">
                     {t.retentionCriteriaText}
                   </p>
                 </div>

                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <h4 className="font-semibold text-lg mb-4">{t.retentionPeriodsTitle}</h4>
                   <p className="text-foreground/70 leading-relaxed">
                     {t.retentionPeriods}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 9 - Sicurezza dei Dati */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Server} title={t.section9Title} number={t.section9Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section9P1}
                 </p>
                 
                 <div className="mt-6">
                   <h4 className="text-lg font-semibold mb-4">{t.securityMeasuresTitle}</h4>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <Fingerprint className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.encryptionMeasure}</span>
                     </div>
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <Lock className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.accessControlMeasure}</span>
                     </div>
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <Monitor className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.monitoringMeasure}</span>
                     </div>
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <FileCheck className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.backupMeasure}</span>
                     </div>
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <Users className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.trainingMeasure}</span>
                     </div>
                     <div className="flex items-center p-3 bg-white/5 rounded-lg">
                       <ShieldCheck className="w-6 h-6 text-indigo-400 mr-3" />
                       <span>{t.auditMeasure}</span>
                     </div>
                   </div>
                 </div>

                 <div className="p-5 border-l-4 border-red-400 bg-red-500/5 rounded-r-lg mt-6">
                   <h4 className="font-medium">{t.incidentTitle}</h4>
                   <p className="mt-2">
                     {t.incidentText}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 10 - I Tuoi Diritti */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={UserCheck} title={t.section10Title} number={t.section10Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section10P1}
                 </p>
                 
                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <h4 className="font-semibold text-lg mb-4">{t.rightsIntro}</h4>
                   <div className="space-y-3">
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.accessRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.rectificationRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.erasureRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.restrictionRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.portabilityRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.objectionRight}</span>
                     </div>
                     <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3"></div>
                       <span>{t.withdrawRight}</span>
                     </div>
                   </div>
                 </div>

                 <div className="p-5 border-l-4 border-amber-400 bg-amber-500/5 rounded-r-lg">
                   <h4 className="font-medium">{t.automatedTitle}</h4>
                   <p className="mt-2">
                     {t.automatedText}
                   </p>
                 </div>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                   <p>
                     {t.exerciseRightsNote}
                   </p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 11 - Modifiche alla Privacy Policy */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={FileText} title={t.section11Title} number={t.section11Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section11P1}
                 </p>
                 
                 <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg mt-4">
                   <h4 className="font-medium">{t.changesNotificationTitle}</h4>
                   <p className="mt-2">
                     {t.changesNotificationText}
                   </p>
                 </div>
                 
                 <p className="mt-4">
                   {t.section11P3}
                 </p>
               </div>
             </div>
           </ScrollAnimation>

           {/* Sezione 12 - Reclami */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={AlertCircle} title={t.section12Title} number={t.section12Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section12P1}
                 </p>

                 <div className="grid md:grid-cols-2 gap-6 mt-6">
                   <div className="p-5 border-l-4 border-indigo-400 bg-indigo-500/5 rounded-r-lg">
                     <h4 className="font-medium">{t.authorityTitle}</h4>
                     <p className="mt-2">
                       {t.authorityText}
                     </p>
                   </div>

                   <div className="p-5 border-l-4 border-green-400 bg-green-500/5 rounded-r-lg">
                     <h4 className="font-medium">{t.resolutionTitle}</h4>
                     <p className="mt-2">
                       {t.resolutionText}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </ScrollAnimation>
           {/* Sezione 13 - Come Contattarci */}
           <ScrollAnimation animation="fadeIn" threshold={0.1}>
             <div className="mb-16">
               <SectionTitle icon={Mail} title={t.section13Title} number={t.section13Number} />
               <div className="space-y-6 text-foreground/80 pl-16">
                 <p className="text-lg leading-relaxed">
                   {t.section13P1}
                 </p>
                 
                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                       <Mail className="w-10 h-10 text-indigo-400 mb-4" />
                       <h4 className="font-medium mb-2">{t.emailLabel}</h4>
                       <a href="mailto:info@biorigeneralinformatics.com" className="text-indigo-400 hover:underline">info@biorigeneralinformatics.com</a>
                       <p className="text-sm mt-2 text-foreground/60">{t.emailDescription}</p>
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
                   
                   <div className="text-center mt-8">
                     <p className="text-sm mt-1 text-foreground/60">{t.scheduleNote}</p>
                   </div>
                 </div>
                 
                 <p className="text-center mt-8 italic">
                   {t.responseCommitment}
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
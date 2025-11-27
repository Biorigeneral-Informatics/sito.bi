import {
    Database, ShoppingCart, BarChart, CreditCard, Code,
    MessageSquare, Users, Zap
} from 'lucide-react';

export interface Integration {
    id: string;
    name: string;
    logo: string;
    description: string;
    shortDescription: string;
    features: string[];
    metrics: string;
    setupTime: string;
    certification: string;
    category: 'crm' | 'communication' | 'automation' | 'database' | 'ecommerce' | 'analytics' | 'payment' | 'development';
}

export const integrationsData: Integration[] = [
    // CRM & Sales
    {
        id: 'salesforce',
        name: 'Salesforce',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
        shortDescription: 'Automazione completa del ciclo di vendita e gestione clienti.',
        description: 'La nostra integrazione profonda con Salesforce permette agli agenti AI di gestire autonomamente il data entry, aggiornare le opportunità in base alle interazioni e fornire scoring predittivo dei lead in tempo reale.',
        features: [
            'Sincronizzazione bidirezionale contatti e lead',
            'Aggiornamento automatico pipeline e opportunità',
            'Log automatico delle attività (email, call, meeting)',
            'Lead scoring predittivo basato su AI'
        ],
        metrics: 'Riduzione 65% tempo data entry manuale',
        setupTime: '2-3 ore',
        certification: 'Salesforce ISV Partner',
        category: 'crm'
    },
    {
        id: 'hubspot',
        name: 'HubSpot',
        logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
        shortDescription: 'Marketing automation e CRM potenziati dall\'AI.',
        description: 'Potenzia il tuo stack HubSpot con agenti che qualificano i lead, personalizzano le sequenze di email e gestiscono i ticket di supporto direttamente dal CRM.',
        features: [
            'Qualificazione automatica dei lead in entrata',
            'Personalizzazione dinamica delle email di outreach',
            'Creazione e gestione ticket di supporto',
            'Analisi sentiment delle conversazioni'
        ],
        metrics: '+40% tasso di conversione lead',
        setupTime: '1-2 ore',
        certification: 'HubSpot Solutions Partner',
        category: 'crm'
    },
    {
        id: 'pipedrive',
        name: 'Pipedrive',
        logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg',
        shortDescription: 'Gestione pipeline di vendita intuitiva e automatizzata.',
        description: 'Automatizza lo spostamento dei deal nella pipeline e lascia che l\'AI suggerisca le prossime migliori azioni per chiudere le vendite più velocemente.',
        features: [
            'Automazione avanzamento deal',
            'Suggerimenti "Next Best Action"',
            'Arricchimento dati contatti automatico',
            'Forecasting vendite basato su storico'
        ],
        metrics: '20h/mese risparmiate per agente',
        setupTime: '1 ora',
        certification: 'Pipedrive Tech Partner',
        category: 'crm'
    },
    {
        id: 'zoho',
        name: 'Zoho CRM',
        logo: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg',
        shortDescription: 'Suite completa per la gestione delle relazioni con i clienti.',
        description: 'Integrazione seamless con l\'ecosistema Zoho per automatizzare flussi di lavoro complessi che attraversano vendite, marketing e supporto.',
        features: [
            'Automazione cross-app nell\'ecosistema Zoho',
            'Analisi predittiva delle vendite',
            'Chatbot intelligenti per il supporto',
            'Gestione documentale automatizzata'
        ],
        metrics: '-30% ciclo di vendita',
        setupTime: '2 ore',
        certification: 'Zoho Authorized Partner',
        category: 'crm'
    },

    // Communication
    {
        id: 'slack',
        name: 'Slack',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
        shortDescription: 'Collaborazione aziendale e notifiche intelligenti.',
        description: 'Trasforma Slack in un centro di comando. I nostri agenti possono rispondere a domande, eseguire task e fornire report direttamente nei canali del team.',
        features: [
            'Bot conversazionali per task interni',
            'Notifiche intelligenti e riassunti giornalieri',
            'Approvazione workflow direttamente da chat',
            'Ricerca semantica nella knowledge base'
        ],
        metrics: '-50% email interne',
        setupTime: '15 min',
        certification: 'Slack Certified App',
        category: 'communication'
    },
    {
        id: 'teams',
        name: 'Microsoft Teams',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
        shortDescription: 'Hub per il lavoro di squadra in Microsoft 365.',
        description: 'Integrazione nativa con Teams per meeting intelligenti, trascrizioni automatiche e gestione dei task direttamente dall\'interfaccia Microsoft.',
        features: [
            'Assistente virtuale durante i meeting',
            'Generazione automatica verbali e task',
            'Integrazione con calendario e Outlook',
            'Accesso sicuro ai documenti aziendali'
        ],
        metrics: '30 min risparmiati per meeting',
        setupTime: '30 min',
        certification: 'Microsoft Gold Partner',
        category: 'communication'
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp Business',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
        shortDescription: 'Messaggistica istantanea per il business.',
        description: 'Automatizza il supporto clienti e le vendite su WhatsApp con agenti capaci di gestire conversazioni complesse, inviare cataloghi e processare ordini.',
        features: [
            'Risposte automatiche 24/7 con NLP',
            'Gestione ordini e cataloghi in chat',
            'Notifiche transazionali automatiche',
            'Handover intelligente a operatore umano'
        ],
        metrics: '-80% tempo di prima risposta',
        setupTime: '1 ora',
        certification: 'Meta Business Partner',
        category: 'communication'
    },
    {
        id: 'telegram',
        name: 'Telegram',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
        shortDescription: 'Bot avanzati e canali di comunicazione sicuri.',
        description: 'Sfrutta la potenza dei bot Telegram per notifiche istantanee, gestione community e comandi remoti per i tuoi sistemi aziendali.',
        features: [
            'Bot comandi personalizzati',
            'Gestione automatica gruppi e canali',
            'Invio file e report pesanti',
            'Crittografia end-to-end'
        ],
        metrics: '100% uptime operativo',
        setupTime: '10 min',
        certification: 'Telegram API Expert',
        category: 'communication'
    },

    // Automation & Productivity
    {
        id: 'zapier',
        name: 'Zapier',
        logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
        shortDescription: 'Connetti le tue app e automatizza i flussi di lavoro.',
        description: 'I nostri agenti possono creare, gestire e monitorare i tuoi Zap, agendo come un "cervello" centrale che orchestra automazioni complesse tra migliaia di app.',
        features: [
            'Creazione dinamica di workflow',
            'Gestione errori e retry intelligente',
            'Logica condizionale avanzata',
            'Integrazione con 5000+ app'
        ],
        metrics: 'Automazione illimitata',
        setupTime: 'Instant',
        certification: 'Zapier Certified Expert',
        category: 'automation'
    },
    {
        id: 'notion',
        name: 'Notion',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
        shortDescription: 'Workspace all-in-one per note, task e database.',
        description: 'Mantieni la tua knowledge base sempre aggiornata. L\'AI organizza documenti, aggiorna database e crea report automatici direttamente nelle tue pagine Notion.',
        features: [
            'Aggiornamento automatico database',
            'Generazione report e documentazione',
            'Organizzazione intelligente contenuti',
            'Sincronizzazione task con altri tool'
        ],
        metrics: 'Knowledge base sempre aggiornata',
        setupTime: '20 min',
        certification: 'Notion Certified Consultant',
        category: 'automation'
    },
    {
        id: 'trello',
        name: 'Trello',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
        shortDescription: 'Gestione progetti visuale con schede e liste.',
        description: 'Automatizza la gestione dei progetti. L\'agente sposta le card, assegna task, aggiunge checklist e commenta gli aggiornamenti in tempo reale.',
        features: [
            'Gestione automatica stato card',
            'Assegnazione intelligente task',
            'Reportistica avanzamento progetti',
            'Integrazione con scadenze e calendar'
        ],
        metrics: '+25% produttività team',
        setupTime: '15 min',
        certification: 'Atlassian Partner',
        category: 'automation'
    },
    {
        id: 'google-workspace',
        name: 'Google Workspace',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        shortDescription: 'Suite di produttività e collaborazione cloud.',
        description: 'Integrazione profonda con Gmail, Calendar, Drive e Sheets per automatizzare l\'intero ufficio virtuale con la massima sicurezza.',
        features: [
            'Gestione email e bozze automatiche',
            'Organizzazione intelligente Drive',
            'Analisi dati su Sheets',
            'Scheduling automatico riunioni'
        ],
        metrics: '2h/giorno risparmiate',
        setupTime: '45 min',
        certification: 'Google Cloud Partner',
        category: 'automation'
    },

    // Database
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        shortDescription: 'Database relazionale open source avanzato.',
        description: 'Accesso diretto e sicuro ai tuoi dati. L\'AI può eseguire query complesse, generare report e monitorare l\'integrità dei dati in tempo reale.',
        features: [
            'Query in linguaggio naturale',
            'Analisi predittiva sui dati',
            'Monitoraggio anomalie',
            'Backup e manutenzione intelligente'
        ],
        metrics: 'Query 10x più veloci',
        setupTime: '1 ora',
        certification: 'PostgreSQL Certified',
        category: 'database'
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        shortDescription: 'Database NoSQL per applicazioni moderne.',
        description: 'Gestione flessibile dei dati non strutturati. Ideale per log, cataloghi prodotti dinamici e analisi big data in tempo reale.',
        features: [
            'Gestione documenti JSON dinamici',
            'Scalabilità orizzontale automatizzata',
            'Analisi dati in tempo reale',
            'Integrazione con app moderne'
        ],
        metrics: 'Scalabilità infinita',
        setupTime: '1 ora',
        certification: 'MongoDB Partner',
        category: 'database'
    },
    {
        id: 'mysql',
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        shortDescription: 'Il database open source più popolare al mondo.',
        description: 'Affidabilità e performance per le tue applicazioni web. I nostri agenti ottimizzano le query e gestiscono la manutenzione ordinaria.',
        features: [
            'Ottimizzazione automatica query',
            'Gestione utenti e permessi',
            'Replica e alta disponibilità',
            'Reportistica SQL automatizzata'
        ],
        metrics: '99.99% uptime',
        setupTime: '45 min',
        certification: 'Oracle Certified',
        category: 'database'
    },
    {
        id: 'redis',
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        shortDescription: 'In-memory data structure store.',
        description: 'Velocizza le tue applicazioni con caching intelligente gestito dall\'AI, code di messaggi e elaborazione real-time.',
        features: [
            'Caching intelligente predittivo',
            'Gestione code ad alte prestazioni',
            'Pub/Sub per eventi real-time',
            'Analisi sessioni utente'
        ],
        metrics: 'Latenza < 1ms',
        setupTime: '30 min',
        certification: 'Redis Enterprise',
        category: 'database'
    },

    // E-commerce
    {
        id: 'shopify',
        name: 'Shopify',
        logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
        shortDescription: 'Piattaforma e-commerce leader globale.',
        description: 'Gestisci il tuo store col pilota automatico: aggiornamento inventario, gestione ordini, supporto clienti e marketing personalizzato.',
        features: [
            'Gestione automatica inventario',
            'Supporto clienti pre/post vendita',
            'Upselling e cross-selling AI',
            'Analisi carrelli abbandonati'
        ],
        metrics: '+15% valore medio ordine',
        setupTime: '1 ora',
        certification: 'Shopify Plus Partner',
        category: 'ecommerce'
    },
    {
        id: 'woocommerce',
        name: 'WooCommerce',
        logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg',
        shortDescription: 'Soluzione e-commerce open source per WordPress.',
        description: 'Massima personalizzazione per il tuo store WordPress. Automazione completa di prodotti, ordini e spedizioni.',
        features: [
            'Sincronizzazione prodotti multicanale',
            'Gestione spedizioni automatizzata',
            'Marketing automation integrata',
            'Reportistica vendite avanzata'
        ],
        metrics: '-40% costi gestione',
        setupTime: '2 ore',
        certification: 'WooCommerce Expert',
        category: 'ecommerce'
    },
    {
        id: 'magento',
        name: 'Magento (Adobe)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
        shortDescription: 'Piattaforma e-commerce enterprise.',
        description: 'Potenza e scalabilità per grandi volumi. I nostri agenti gestiscono cataloghi complessi, listini B2B e logistica avanzata.',
        features: [
            'Gestione cataloghi complessi',
            'Listini personalizzati B2B',
            'Ottimizzazione logistica',
            'Integrazione ERP profonda'
        ],
        metrics: 'Gestione 100k+ SKU',
        setupTime: '1 settimana',
        certification: 'Adobe Solution Partner',
        category: 'ecommerce'
    },

    // Analytics
    {
        id: 'google-analytics',
        name: 'Google Analytics 4',
        logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
        shortDescription: 'Analisi web e app di nuova generazione.',
        description: 'Trasforma i dati in insight azionabili. L\'AI analizza i trend, identifica anomalie e suggerisce ottimizzazioni per il conversion rate.',
        features: [
            'Analisi predittiva traffico',
            'Identificazione colli di bottiglia',
            'Reportistica automatizzata',
            'Attribuzione conversioni AI'
        ],
        metrics: 'Insight in tempo reale',
        setupTime: '30 min',
        certification: 'Google Marketing Partner',
        category: 'analytics'
    },
    {
        id: 'mixpanel',
        name: 'Mixpanel',
        logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg',
        shortDescription: 'Product analytics per mobile e web.',
        description: 'Capisci come gli utenti usano il tuo prodotto. Analisi profonda del comportamento utente e retention analysis automatizzata.',
        features: [
            'Analisi funnel avanzata',
            'Segmentazione comportamentale',
            'Analisi retention e churn',
            'A/B testing analysis'
        ],
        metrics: '+20% retention rate',
        setupTime: '1 ora',
        certification: 'Mixpanel Partner',
        category: 'analytics'
    },

    // Payment
    {
        id: 'stripe',
        name: 'Stripe',
        logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
        shortDescription: 'Infrastruttura di pagamento per internet.',
        description: 'Gestione finanziaria automatizzata: riconciliazione pagamenti, gestione abbonamenti, prevenzione frodi e fatturazione.',
        features: [
            'Riconciliazione automatica',
            'Gestione churn involontario',
            'Prevenzione frodi con ML',
            'Fatturazione globale automatica'
        ],
        metrics: '-90% errori contabili',
        setupTime: '1 ora',
        certification: 'Stripe Verified Partner',
        category: 'payment'
    },
    {
        id: 'paypal',
        name: 'PayPal',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg',
        shortDescription: 'Pagamenti digitali sicuri e globali.',
        description: 'Semplifica i pagamenti internazionali e la gestione delle dispute con automazioni intelligenti per il tuo business.',
        features: [
            'Gestione pagamenti cross-border',
            'Automazione rimborsi e dispute',
            'Reportistica finanziaria',
            'Payouts automatici a fornitori'
        ],
        metrics: 'Copertura 200+ mercati',
        setupTime: '45 min',
        certification: 'PayPal Partner',
        category: 'payment'
    },

    // Development
    {
        id: 'github',
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        shortDescription: 'Piattaforma di sviluppo software e version control.',
        description: 'Accelera lo sviluppo con agenti che fanno code review, gestiscono issue, automatizzano i deploy e mantengono la documentazione.',
        features: [
            'Code review automatizzata',
            'Gestione issue e PR',
            'Automazione CI/CD',
            'Analisi qualità codice'
        ],
        metrics: '-30% time-to-merge',
        setupTime: '15 min',
        certification: 'GitHub Technology Partner',
        category: 'development'
    },
    {
        id: 'jira',
        name: 'Jira',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
        shortDescription: 'Gestione progetti e issue tracking per team agili.',
        description: 'Mantieni i progetti in pista. L\'AI aggiorna gli stati, stima i tempi, rileva i blocchi e genera report sugli sprint.',
        features: [
            'Aggiornamento automatico ticket',
            'Stima tempi con AI',
            'Rilevamento rischi progetto',
            'Reportistica sprint automatica'
        ],
        metrics: '+20% velocity team',
        setupTime: '30 min',
        certification: 'Atlassian Gold Partner',
        category: 'development'
    }
];

export const integrationCategories = [
    { id: 'crm', label: 'CRM & Sales', icon: Users, color: 'text-red-500', bg: 'bg-red-500', border: 'hover:border-red-500/30' },
    { id: 'communication', label: 'Comunicazione', icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500', border: 'hover:border-blue-500/30' },
    { id: 'automation', label: 'Automazione', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-500', border: 'hover:border-yellow-500/30' },
    { id: 'database', label: 'Database', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500', border: 'hover:border-emerald-500/30' },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart, color: 'text-purple-500', bg: 'bg-purple-500', border: 'hover:border-purple-500/30' },
    { id: 'analytics', label: 'Analytics', icon: BarChart, color: 'text-orange-500', bg: 'bg-orange-500', border: 'hover:border-orange-500/30' },
    { id: 'payment', label: 'Pagamenti', icon: CreditCard, color: 'text-cyan-500', bg: 'bg-cyan-500', border: 'hover:border-cyan-500/30' },
    { id: 'development', label: 'Sviluppo', icon: Code, color: 'text-white', bg: 'bg-white', border: 'hover:border-white/30' },
];

export const faqs = [
    {
        question: "Quanto tempo richiede lo sviluppo di un agente AI?",
        answer: "I tempi variano in base alla complessità. Per agenti standard il setup richiede anche poche ore. Per integrazioni CRM complesse o database custom, sistemi di agenti avanzati possono richiedere più tempo, fino a diverse settimane."
    },
    {
        question: "È necessario modificare il codice dei miei sistemi esistenti?",
        answer: "Dipende dai casi. I nostri agenti utilizzano API standard, webhook e protocolli sicuri solitamente già presenti nei tuoi strumenti. Tuttavia i nostri tecnici, se necessario, ti aiuterannoa d intervenire nel modo migliore."
    },
    {
        question: "Come viene garantita la sicurezza dei dati aziendali?",
        answer: "La sicurezza è la nostra priorità. Utilizziamo crittografia end-to-end (AES-256), non memorizziamo mai dati sensibili in chiaro e operiamo in conformità con GDPR e SOC2. Inoltre, puoi scegliere di far girare gli agenti su istanze VPS dedicate e isolate."
    },
    {
        question: "Posso integrare un software proprietario o legacy?",
        answer: "Assolutamente sì. Se il tuo software ha un'API, possiamo integrarlo. Se non ha API, possiamo valutare se è possibile sviluppare connettori custom o utilizzare tecnologie RPA (Robotic Process Automation) per interagire con l'interfaccia utente in modo sicuro."
    },
    {
        question: "Cosa succede se un'API cambia o si rompe?",
        answer: "I nostri agenti sono dotati di sistemi di 'self-healing'. Rilevano errori di connessione, tentano il ripristino automatico e notificano immediatamente gli amministratori. Monitoriamo proattivamente i nostri sistemi per garantire la massima affidabilità, in abse al piano di manutenzione."
    },
    {
        question: "Posso limitare ciò che l'agente può vedere o fare?",
        answer: "Sì, il controllo è granulare. Puoi definire permessi specifici (es. 'sola lettura' su certi dati, 'scrittura' su altri) e impostare limiti operativi (es. 'non inviare più di 50 email all'ora' o 'richiedi approvazione umana per transazioni sopra i 100€')."
    },
    {
        question: "Fornite supporto durante la fase di integrazione?",
        answer: "Sì, ogni piano include un onboarding assistito. Per i piani Enterprise, assegniamo un Solution Architect dedicato che progetta l'architettura di integrazione su misura per la tua infrastruttura."
    }
];

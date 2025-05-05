# SITO WEB BIORIGENERAL INFORMATICS

Il progetto utilizza un'architettura moderna basata su React con TypeScript, Vite come bundler, e Tailwind CSS per lo styling.

## Struttura della Repository

biorigeneral-informatics/
├── public/                  # Asset statici e file pubblici
├── src/                     # Codice sorgente principale
│   ├── components/          # Componenti React riutilizzabili
│   ├── pages/               # Pagine principali dell'applicazione
│   ├── App.tsx              # Componente principale con routing
│   ├── main.tsx             # Entry point dell'applicazione
│   └── index.css            # Stili globali e configurazione Tailwind
├── package.json             # Dipendenze e script del progetto
├── vite.config.ts           # Configurazione di Vite
├── tsconfig.json            # Configurazione TypeScript
└── tailwind.config.js       # Configurazione di Tailwind CSS

## CARATTERISTICHE PRINCIPALI

- Design Moderno: Interfaccia utente elegante con effetti di vetro (glassmorphism), gradienti e animazioni
- Reattività Completa: Layout ottimizzato per dispositivi desktop, tablet e mobile
- Animazioni Avanzate: Animazioni fluide usando Framer Motion
- Effetti Parallax: Elementi con effetto parallax per un'esperienza visiva coinvolgente
- Routing: Navigazione tra pagine con React Router
- Componenti Riutilizzabili: Architettura modulare con componenti riutilizzabili


## COMPONENTI PRINCIPALI

- Navbar: Menu di navigazione responsive con effetti glassmorphism
- Footer: Footer completo con link e informazioni di contatto
- AnimatedBackground: Sfondo animato con effetti particellari
- HeroAnimation: Animazione circolare per la homepage
- ScrollAnimation: Componente per attivare animazioni al scroll
- ParallaxEffect: Effetto parallax per elementi al movimento dello scroll
- CTASection: Componente Call-to-Action riutilizzabile

## PAGINE PRINCIPALI

- Home: Landing page con presentazione aziendale e servizi
- Services: Pagina dettagliata dei servizi offerti
- Products: Catalogo prodotti con filtri e showcase
- Developers: Pagina dedicata ai team di sviluppo disponibili
- Chatbots: Pagina di prodotto per soluzioni chatbot AI
- AIAgents: Pagina di prodotto per agenti di intelligenza artificiale
- Contact: Pagina contatti con form e mappa
- GrowthPlans: Pagina dedicata ai piani di crescita

## TECNOLOGIE UTILIZZATE

Framework: React 18
Linguaggio: TypeScript
Bundler/Toolchain: Vite
Styling: Tailwind CSS
Routing: React Router v6
Animazioni: Framer Motion
Icone: Lucide React
Linting: ESLint
Type Checking: TypeScript

## PREREQUISITI

Node.js (v16 o superiore)
npm o yarn

## ESTENSIONI CONSIGLIATE VSCode (da installare)

ESLint (Non essenziale)
Prettier
Tailwind CSS IntelliSense 
TypeScript + JavaScript Language Features

## INSTALLAZIONE DIPENDENZE

Lanciare il comando: npm install (se ci sono ancora errori, seguire i suggerimenti di VSCode e aggiornare le librerie)

Installa le dipendenze principali: 
npm install react-router-dom framer-motion lucide-react
npm install npm install --save @emailjs/browser



## TEST LOCALI 
Avviare il server di sviluppo con: npm run dev


NOTA FINALE: Per i commit, push e pull request, utilizzare le stesse best practices che utilizziamo per gli altri progetti e applicazioni.
// src/config/seoData.ts - Crea questo file con tutti i dati SEO

export const SEO_DATA = {
  home: {
    title: "AI Agency e Software Engineering",
    description: "Biorigeneral Informatics - Soluzioni digitali innovative per il tuo business. AI, chatbot, sviluppo software e automazione per PMI.",
    keywords: "AI agency, software engineering, chatbot, intelligenza artificiale, PMI, automazione",
    url: "/"
  },
  
  products: {
    title: "Prodotti AI per Aziende",
    description: "Scopri i nostri prodotti AI: BioriTalk per assistenti conversazionali, BioriAgent per automazione e PromptElite per ottimizzazione prompt.",
    keywords: "prodotti AI, BioriTalk, BioriAgent, PromptElite, assistenti virtuali, automazione",
    url: "/products"
  },
  
  services: {
    title: "Servizi di Sviluppo Software per PMI",
    description: "Sviluppo software personalizzato per PMI. Applicazioni web, mobile, sistemi gestionali e integrazione AI. Metodologia agile e tecnologie moderne.",
    keywords: "sviluppo software, PMI, applicazioni web, mobile, sistemi gestionali, metodologia agile",
    url: "/services"
  },
  
  aiAgents: {
    title: "Agenti AI per Automazione Aziendale",
    description: "Agenti AI intelligenti per automatizzare processi aziendali. Integrazione con oltre 250 strumenti, operatività 24/7 e personalizzazione completa.",
    keywords: "agenti AI, automazione aziendale, workflow, integrazione strumenti, AI agents",
    url: "/ai-agents"
  },
  
  chatbots: {
    title: "Chatbot AI Conversazionali per Aziende",
    description: "Chatbot AI avanzati con comprensione del linguaggio naturale in 24+ lingue. Migliorano customer experience e riducono i costi del 40%.",
    keywords: "chatbot AI, assistenti virtuali, customer service, linguaggio naturale, multilingue",
    url: "/chatbots"
  },
  
  developers: {
    title: "Team di Sviluppatori Specializzati",
    description: "Team di sviluppatori esperti in React, Node.js, AI e cloud. Metodologie agile, qualità certificata e supporto dedicato per il tuo progetto.",
    keywords: "sviluppatori, team development, React, Node.js, AI development, metodologie agile",
    url: "/developers"
  },
  
  softwarePMI: {
    title: "Software Personalizzati per PMI",
    description: "Soluzioni software su misura per PMI. Sviluppo rapido con AI, integrazione sistemi esistenti e supporto continuo. Alternativa alle grandi agenzie.",
    keywords: "software PMI, soluzioni personalizzate, sviluppo rapido, integrazione sistemi",
    url: "/software-pmi"
  },
  
  growthPlans: {
    title: "Piani di Crescita Digitale per Aziende",
    description: "Piani di crescita completi: da €1.500/mese per PMI startup fino a €6.000/mese per aziende consolidate. SEO, ads, software e consulenza.",
    keywords: "piani crescita, marketing digitale, SEO, Google Ads, consulenza aziendale",
    url: "/growth-plans"
  },

  growthPlansUsers: {
    title: "Growth Plans per Utenti - Coaching Personalizzato",
    description: "Percorsi di crescita personale con coaching intensivo per professionisti e freelancer. Automazioni AI, formazione e mentoring 1-on-1.",
    keywords: "coaching personalizzato, growth plans utenti, mentoring freelancer, automazioni AI",
    url: "/growth-plans-users"
  },

  growthPlansCompanies: {
    title: "Growth Plans per Aziende - Trasformazione Digitale",
    description: "Soluzioni complete di trasformazione digitale per PMI e aziende. Software personalizzato, automazioni, digital marketing e supporto strategico.",
    keywords: "trasformazione digitale, growth plans aziende, digitalizzazione PMI, software personalizzato",
    url: "/growth-plans-companies"
  },

  contact: {
    title: "Contatti - Richiedi Consulenza Gratuita",
    description: "Contatta Biorigeneral Informatics per una consulenza gratuita. Via Tiburtina 912, Roma. Sviluppiamo la soluzione digitale per la tua azienda.",
    keywords: "contatti, consulenza gratuita, Roma, Via Tiburtina, preventivo software",
    url: "/contact"
  }
};

// Funzione helper per ottenere i dati SEO
export const getSEOData = (page: keyof typeof SEO_DATA) => {
  const data = SEO_DATA[page];
  return {
    ...data,
    canonicalUrl: `https://www.biorigeneralinformatics.com/${data.url}` // Sostituisci con il tuo dominio
  };
};
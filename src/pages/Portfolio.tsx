// src/pages/Portfolio.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Brain, Database, Zap, Smartphone, Cloud } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('services') || {
  title: 'Portfolio - Biorigeneral Informatics',
  description: 'Scopri i nostri progetti e le competenze che guida il nostro successo',
  keywords: 'portfolio, progetti, web development, AI, chatbot',
  canonicalUrl: 'https://sito.bi/portfolio'
};

interface Skill {
  category: string;
  description: string;
  level: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  skills: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
}

const getIconAndColor = (category: string) => {
  const categoryConfig: { [key: string]: { icon: React.ReactNode; color: string; bgColor: string; borderColor: string; hoverBg: string } } = {
    'Frontend Development': {
      icon: <Code2 className="w-5 h-5" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      hoverBg: 'hover:bg-cyan-500/30'
    },
    'AI & Machine Learning': {
      icon: <Brain className="w-5 h-5" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      hoverBg: 'hover:bg-purple-500/30'
    },
    'Backend & Database': {
      icon: <Database className="w-5 h-5" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      hoverBg: 'hover:bg-blue-500/30'
    },
    'Workflow Automation': {
      icon: <Zap className="w-5 h-5" />,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-500/30',
      hoverBg: 'hover:bg-amber-500/30'
    },
    'Mobile Development': {
      icon: <Smartphone className="w-5 h-5" />,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      hoverBg: 'hover:bg-pink-500/30'
    },
    'DevOps & Cloud': {
      icon: <Cloud className="w-5 h-5" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      hoverBg: 'hover:bg-green-500/30'
    }
  };
  return categoryConfig[category] || { icon: <Cpu className="w-5 h-5" />, color: 'text-gray-400', bgColor: 'bg-gray-500/20', borderColor: 'border-gray-500/30', hoverBg: 'hover:bg-gray-500/30' };
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Skills data - Focus dell'azienda
  const skillsData: Skill[] = [
    {
      category: 'Frontend Development',
      description: 'Interfacce web moderne e responsive',
      level: 'Avanzato',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
      category: 'AI & Machine Learning',
      description: 'Soluzioni intelligenti e automazioni',
      level: 'Specializzato',
      items: ['AI Agents', 'Chatbot', 'LLM Integration', 'RAG', 'OpenAI', 'Gemini']
    },
    {
      category: 'Backend & Database',
      description: 'Architetture scalabili e sicure',
      level: 'Avanzato',
      items: ['Node.js', 'PostgreSQL', 'Supabase', 'Firebase', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Workflow Automation',
      description: 'Automazione di processi aziendali',
      level: 'Specializzato',
      items: ['N8n', 'Make.com', 'Zapier', 'Custom Workflows', 'Integration', 'API Development']
    },
    {
      category: 'Mobile Development',
      description: 'App native e cross-platform',
      level: 'Professionista',
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'DevOps & Cloud',
      description: 'Hosting, deployment e infrastrutture',
      level: 'Avanzato',
      items: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Git', 'Linux']
    },
  ];

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Biorigeneral Informatics - AI Agency',
      description: 'Agenzia orientata allo sviluppo di asset digitali intelligenti basati sull\'uso produttivo dell\'intelligenza artificiale.',
      longDescription: 'Co-fondatore di un\'agenzia specializzata in sviluppo software e automazioni intelligenti. Focalizzata su progettazione di agenti AI, automazioni avanzate con n8n, consulenza per integrazione AI in aziende B2B, prototipazione rapida, ottimizzazione di flussi di lavoro e soluzioni per il settore Health Care.',
      image: 'https://i.ibb.co/jkhP2G9f/about-us-coworking1.jpg',
      images: [
        'https://i.ibb.co/nMmVPRQR/bi2.png',
        'https://i.ibb.co/nMZJP2GC/bi3.png',
        'https://i.ibb.co/2YLGbfv1/bi4.png',
      ],
      skills: ['AI Agents', 'n8n', 'Software Development', 'Business Consulting', 'Healthcare Tech'],
      status: 'completed',
      featured: true,
    },
    {
      id: 2,
      title: 'YouTube Content Creator',
      description: 'Gestione e sviluppo di un canale YouTube con migliaia di iscritti, creando contenuti divulgativi, tecnici e creativi.',
      longDescription: 'Sviluppo di strategie di content marketing, gestione dell\'engagement, analisi delle performance e ottimizzazione dei contenuti, costruzione di community e personal branding digitale. Curata personalmente scripting, registrazione, editing e strategie di crescita organica.',
      image: 'https://i.ibb.co/TqPQ7Zh0/yt1.png',
      images: [
        'https://i.ibb.co/3YvPhCr1/yt2.png',
        'https://i.ibb.co/2YkKd4BS/yt3.png',
        'https://i.ibb.co/bR71wCt7/yt4.png',
      ],
      skills: ['Content Marketing', 'YouTube', 'Community Building', 'Personal Branding', 'Video Editing'],
      status: 'completed',
      featured: true,
    },
    {
      id: 3,
      title: 'Bioclinic - Consulente Digitale e Full Stack Developer',
      description: 'Supporto completo alla digitalizzazione della struttura sanitaria Bioclinic, evoluzione tecnologica dell\'azienda.',
      longDescription: 'Progettazione, sviluppo e manutenzione del gestionale interno per il personale sanitario, supporto al reparto IT, gestione e aggiornamento del sito web istituzionale, introduzione di strumenti digitali per l\'operatività. Approccio metodico con elevata affidabilità nel settore healthcare regolamentato.',
      image: 'https://i.ibb.co/3mdyYgPK/bioclinic1.png',
      images: [
        'https://i.ibb.co/Kc84Z3VH/bioclinic2.png',
        'https://i.ibb.co/qMtgLDKG/bioclinic4.png',
        'https://i.ibb.co/wrhqbcFB/bioclinic5.png',
      ],
      skills: ['Full Stack Development', 'Healthcare Systems', 'Web Development', 'Database Management', 'IT Support'],
      status: 'completed',
      featured: true,
    },
    {
      id: 4,
      title: 'Gestionale per Classificazione Rifiuti',
      description: 'Gestionale specializzato per la classificazione dei rifiuti, destinato a un settore altamente verticale e regolamentato.',
      longDescription: 'Raccolta requisiti intensiva con esperti del settore, modellazione dei flussi e delle logiche normative, sviluppo del backend e delle strutture dati, implementazione dell\'interfaccia operativa, testing e ottimizzazione. Traduzione di processi tecnici complessi in strumenti digitali semplici, affidabili ed efficaci.',
      image: 'https://i.ibb.co/C58jtr9B/sea1.png',
      images: [
        'https://i.ibb.co/W4Q77jC6/sea4.png',
        'https://i.ibb.co/N6hmDFTY/sea2.png',
        'https://i.ibb.co/WNFCHmyp/sea3.png',
      ],
      skills: ['Database Design', 'Backend Development', 'UI/UX', 'Regulatory Compliance', 'Testing'],
      status: 'completed',
      featured: false,
    },
    {
      id: 5,
      title: 'Automazioni e Agenti AI con n8n',
      description: 'Sviluppo di automazioni e sistemi intelligenti per diversi contesti aziendali basati su n8n.',
      longDescription: 'Realizzazione di chatbot avanzati e sistemi conversazionali, agenti AI complessi con memoria, funzioni e decision making, workflow automativi per processi interni, integrazioni API con servizi esterni, e webapp con backend interamente gestito in n8n. Esperienza dalla prototipazione rapida alla produzione scalabile.',
      image: 'https://i.ibb.co/jPRynD4p/autom1.png',
      images: [
        'https://i.ibb.co/tMLpPQXM/autom2.png',
        'https://i.ibb.co/CZ0nMWF/autom3.png',
        'https://i.ibb.co/fYDNw48S/autom4.png',
      ],
      skills: ['n8n', 'AI/ML', 'Chatbots', 'API Integration', 'Workflow Automation'],
      status: 'completed',
      featured: true,
    },
    /*{
      id: 6,
      title: 'Piattaforma Gestionale Medico - FHIR',
      description: 'Piattaforma gestionale per la gestione delle cartelle cliniche basata su standard FHIR.',
      longDescription: 'Progettazione e sviluppo di una piattaforma con storage conforme allo standard FHIR, strutturazione dell\'implementazione dello storage, progettazione di architetture dati sicure e conformi, sviluppo della logica backend per la gestione dei dati clinici, realizzazione di interfacce per il personale sanitario, garanzia di interoperabilità con gli standard del settore.',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800',
      images: [
        'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400',
        'https://images.unsplash.com/photo-1579154204601-01d8cffedc19?w=400',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
      ],
      skills: ['FHIR Standard', 'Healthcare IT', 'Backend Development', 'Data Security', 'Medical Systems'],
      status: 'completed',
      featured: false,
    },*/
    {
      id: 7,
      title: 'WP AutoBlog - Web App Multi-Tenant',
      description: 'Web app multi-tenant per la gestione automatizzata di contenuti WordPress con login sicuro.',
      longDescription: 'Sviluppo di un\'applicazione SaaS con login sicuro e database isolati per ogni tenant, progettazione dell\'architettura dati multi-tenant, implementazione di autenticazione e ambienti separati per gli utenti, creazione di workflow automatizzati per la pubblicazione dei contenuti, gestione delle integrazioni con le API di WordPress, sviluppo di frontend e backend dell\'applicazione.',
      image: 'https://i.ibb.co/ZRXgG1bG/wp1.png',
      images: [
        'https://i.ibb.co/nqyGTYpf/wp2.png',
        'https://i.ibb.co/LdKYh4J8/wp3.png',
        'https://i.ibb.co/21d7xR61/wp4.png',
      ],
      skills: ['React', 'WordPress API', 'Multi-Tenant Architecture', 'SaaS', 'Backend Development'],
      status: 'completed',
      featured: true,
    },
    {
      id: 8,
      title: 'Sistema di Prenotazione Eventi',
      description: 'Sistema automatizzato di prenotazione eventi con backend n8n e frontend React/Tailwind.',
      longDescription: 'Realizzazione dell\'intero workflow di prenotazione in n8n, creazione dell\'interfaccia frontend in React e Tailwind CSS, integrazione con Google Sheets tramite sincronizzazione real-time, implementazione di validazioni, notifiche e interazioni utente, garanzia di un\'esperienza fluida tra backend e frontend. Dimostra l\'integrazione di strumenti di automazione con tecnologie frontend moderne.',
      image: 'https://i.ibb.co/whwwbrbn/eventmanager1.png',
      images: [
        'https://i.ibb.co/yBM7P0WW/eventmanager2.png',
        'https://i.ibb.co/8n2xbWrn/eventmanager3.png',
        'https://i.ibb.co/SD7Jp77k/eventmanager4.png',
      ],
      skills: ['n8n', 'React', 'Tailwind CSS', 'Google Sheets API', 'Event Management'],
      status: 'completed',
      featured: false,
    },
    {
      id: 9,
      title: 'Chatbot WhatsApp - Bioclinic',
      description: 'Chatbot WhatsApp per automatizzare il customer care di Bioclinic.',
      longDescription: 'Sviluppo di un chatbot per automatizzare il customer care, migliorando i tempi di risposta e riducendo il carico operativo. Progettazione dei flussi conversazionali, implementazione della logica di messaggistica via API, integrazione del chatbot con i sistemi interni, gestione delle risposte automatiche e recupero informazioni, garanzia di usabilità e affidabilità in un contesto sanitario. La soluzione ha ottimizzato significativamente la comunicazione con i pazienti.',
      image: 'https://i.ibb.co/Df9kxJXm/wa1.png',
      images: [
        'https://i.ibb.co/qYJLffQy/wa2.png',
        'https://i.ibb.co/zVGJKNs7/wa3.png',
        'https://i.ibb.co/gMFqXLTR/wa4.png',
      ],
      skills: ['WhatsApp API', 'Chatbot', 'Healthcare', 'Customer Support', 'Messaging Systems'],
      status: 'completed',
      featured: false,
    },
    {
      id: 10,
      title: 'Sistema Gestione Registro Soci - Country Life',
      description: 'Automatizzazione del sistema di gestione dei soci per l\'associazione Country Life.',
      longDescription: 'Trasformazione di un processo manuale in un workflow digitale completo. Progettazione della logica di registrazioni e rinnovi, implementazione di aggiornamenti automatici dei dati, notifiche automatiche agli utenti, organizzazione strutturata dei database dei soci, ottimizzazione del processo per ridurre il lavoro amministrativo. Risultato: un sistema solido, scalabile e a bassa manutenzione.',
      image: 'https://i.ibb.co/0RYJxsfT/cl1.png',
      images: [
        'https://i.ibb.co/W4FHrzkL/cl2.png',
        'https://i.ibb.co/N6d0vrFf/cl3.png',
        'https://i.ibb.co/wZGjFfSD/cl4.png',
      ],
      skills: ['Workflow Automation', 'Database Design', 'n8n', 'User Management', 'Notifications'],
      status: 'completed',
      featured: false,
    },
    {
      id: 11,
      title: 'Sistema Prenotazione Eventi - DarkWave Sup Pineto',
      description: 'Consulenza specializzata per automatizzare il sistema di prenotazione eventi.',
      longDescription: 'Analisi approfondita del sistema di booking esistente, identificazione dei punti critici e processi da automatizzare, progettazione di flussi operativi più efficienti, implementazione di procedure automatizzate per la gestione delle richieste e disponibilità, ottimizzazione del flusso di comunicazione tra staff e clienti, consulenza strategica per ridurre tempi di risposta e attività ripetitive. Risultato: sistema più rapido, affidabile e sostenibile nel tempo.',
      image: 'https://i.ibb.co/HTxZzdPg/sup1.png',
      images: [
        'https://i.ibb.co/gL107H3q/sup2.png',
        'https://i.ibb.co/mPdMYnk/sup3.png',
        'https://i.ibb.co/gMz4tZ3C/sup4.png',
      ],
      skills: ['Business Consulting', 'Workflow Optimization', 'Automation', 'Event Management', 'Process Design'],
      status: 'completed',
      featured: false,
    },
    /*{
      id: 12,
      title: 'E-Commerce Vendita Corsi Online',
      description: 'Piattaforma e-commerce dedicata alla vendita di corsi digitali con accesso sicuro.',
      longDescription: 'Progettazione dell\'architettura del sistema, implementazione di autenticazione, gestione del catalogo e flussi di acquisto, sviluppo del frontend e del backend, creazione della logica di fruizione dei corsi e delle dashboard utente. Un progetto progettato per diventare un marketplace online scalabile, moderno e intuitivo per la distribuzione di contenuti educativi digitali.',
      image: 'https://images.unsplash.com/photo-1611738407552-46550d63f3d6?w=800',
      images: [
        'https://images.unsplash.com/photo-1611738407552-46550d63f3d6?w=400',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      ],
      skills: ['E-Commerce', 'React', 'Payment Gateway', 'Course Management', 'Full Stack Development'],
      status: 'in-progress',
      featured: true,
    },*/
  ];

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
      </div>

      <div className="min-h-screen pt-28 pb-16 relative">
        
        {/* ===== HERO SECTION ===== */}
        <section className="pt-20 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-3 md:px-4 py-1 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-violet-500">
                  Portfolio & Expertise
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-white">I nostri progetti e la</span>
                <span className="block text-[#3ECF8E]">nostra visione dell'innovazione.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Scopri come trasformiamo le idee in soluzioni concrete. Dalla consulenza iniziale all'implementazione finale, 
                il nostro team di esperti lavora per offrire risultati che superano le aspettative.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <a 
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Esplora i Progetti
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== SKILLS TABLE SECTION ===== */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Le nostre</span>
                <span className="block text-[#3ECF8E]">aree di specializzazione.</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Abbiamo sviluppato competenze profonde in diverse aree tecnologiche per offrire soluzioni complete e innovative.
              </p>
            </motion.div>

            {/* Skills Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 md:p-8 bg-gradient-to-r from-[#3ECF8E]/20 via-transparent to-transparent border-b border-white/10">
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Categoria</h3>
                  </div>
                  <div className="col-span-1 hidden md:block">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Descrizione</h3>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Livello</h3>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Tecnologie</h3>
                  </div>
                </div>

                {/* Table Rows */}
                {skillsData.map((skill, index) => {
                  const { icon, color, bgColor, borderColor, hoverBg } = getIconAndColor(skill.category);
                  
                  return (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-6 md:p-8 border-b border-white/10 last:border-b-0 transition-colors duration-300 group bg-gradient-to-r ${bgColor.replace('bg-', 'from-').replace('/20', '/5')} to-transparent hover:${bgColor.replace('/20', '/10')} ${hoverBg}`}
                    >
                      {/* Categoria */}
                      <div className="col-span-1">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center ${color} group-hover:${bgColor.replace('/20', '/30')} transition-all duration-300`}>
                            {icon}
                          </div>
                          <span className="font-semibold text-white text-sm md:text-base">{skill.category}</span>
                        </div>
                      </div>

                      {/* Descrizione (nascosto su mobile) */}
                      <div className="col-span-1 hidden md:block">
                        <span className="text-gray-400 text-sm line-clamp-2">{skill.description}</span>
                      </div>

                      {/* Livello */}
                      <div className="col-span-1">
                        <span className={`inline-block px-3 py-1 rounded-full ${bgColor} border ${borderColor} ${color} text-xs font-semibold`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Tecnologie */}
                      <div className="col-span-1">
                        <div className="flex flex-wrap gap-1.5">
                          {skill.items.slice(0, 3).map((item, itemIndex) => (
                            <span 
                              key={itemIndex}
                              className={`px-2 py-1 text-xs rounded ${bgColor} ${color} border ${borderColor} group-hover:${bgColor.replace('/20', '/30')} transition-all duration-300 whitespace-nowrap`}
                            >
                              {item}
                            </span>
                          ))}
                          {skill.items.length > 3 && (
                            <span className={`px-2 py-1 text-xs rounded ${bgColor} ${color} border ${borderColor} font-semibold`}>
                              +{skill.items.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Progetti</span>
                <span className="block text-[#3ECF8E]">che hanno fatto la differenza.</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ecco una selezione dei nostri progetti più significativi che dimostrano le nostre capacità e il nostro impegno verso l'eccellenza.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 overflow-hidden">
                    
                    {/* Main Cover Image */}
                    <div className="relative h-80 overflow-hidden cursor-pointer" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(project.image);
                    }}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium text-center">Clicca per ingrandire</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10">
                      
                      {/* Header with Badge */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-grow">
                          {project.featured && (
                            <div className="inline-block mb-3">
                              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold uppercase tracking-wide">
                                ✨ In Evidenza
                              </span>
                            </div>
                          )}
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#3ECF8E] transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Long Description - Always Visible */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </motion.div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-xs rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/30 transition-all duration-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Gallery Thumbnails */}
                      {project.images && project.images.length > 0 && (
                        <div className="pt-6 border-t border-white/10">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-semibold">Galleria del progetto</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.images.map((image, imgIndex) => (
                              <motion.button
                                key={imgIndex}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedImage(image)}
                                className="relative h-40 rounded-lg overflow-hidden border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-300 group/img"
                              >
                                <img 
                                  src={image}
                                  alt={`${project.title} - ${imgIndex + 1}`}
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                  <div className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 group z-10"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <img 
                src={selectedImage}
                alt="Immagine in evidenza"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}

        {/* ===== CTA SECTION ===== */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Pronto per il prossimo</span>
                <span className="block text-[#3ECF8E]">progetto straordinario?</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Se vuoi trasformare la tua visione in realtà con le nostre competenze, contattaci oggi e discutiamo come possiamo aiutarti.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Inizia una Conversazione
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Scopri i Nostri Servizi
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
